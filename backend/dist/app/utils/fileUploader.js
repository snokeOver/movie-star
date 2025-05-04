"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUploader = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const cloudinary_1 = require("cloudinary");
const config_1 = __importDefault(require("../config"));
const promises_1 = require("fs/promises");
const appError_1 = __importDefault(require("../middleWares/errorHandler/appError"));
const http_status_1 = __importDefault(require("http-status"));
cloudinary_1.v2.config({
    cloud_name: config_1.default.cloudinary.cloud_name,
    api_key: config_1.default.cloudinary.api_key,
    api_secret: config_1.default.cloudinary.api_secret,
});
//Delete original file from local
const deleteOriginalFile = (filePath) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, promises_1.unlink)(filePath);
    }
    catch (err) {
        if (err instanceof Error) {
            throw new appError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, `Error deleting original file: ${err.message}`);
        }
        else {
            throw new appError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, `Unknown error deleting original file`);
        }
    }
});
//Upload to local using multer
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path_1.default.join(process.cwd(), "uploads"));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = new Date().toISOString().slice(0, 10).replace(/-/g, "_") +
            "_" +
            Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + "." + file.originalname.split(".")[1]);
    },
});
const multerUpload = (0, multer_1.default)({ storage: storage });
//Upload to cloudinary
const cloudinaryUpload = (filePath, public_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const uploadResult = yield cloudinary_1.v2.uploader.upload(filePath, {
            public_id,
        });
        return uploadResult;
    }
    catch (error) {
        throw new appError_1.default(http_status_1.default.INTERNAL_SERVER_ERROR, "File upload failed");
    }
    finally {
        // Finally delete the original file
        yield deleteOriginalFile(filePath);
    }
});
exports.fileUploader = {
    cloudinaryUpload,
    multerUpload,
    deleteOriginalFile,
};

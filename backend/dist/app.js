"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const notFound_1 = __importDefault(require("./app/middleWares/notFound"));
const errorHandler_1 = require("./app/middleWares/errorHandler");
const route_1 = __importDefault(require("./app/route"));
const config_1 = __importDefault(require("./app/config"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send({
        message: `Hello from ${config_1.default.project_name} API`,
    });
});
app.use("/api/v1", route_1.default);
app.use(errorHandler_1.globalErrorHandler);
app.use(notFound_1.default);
exports.default = app;

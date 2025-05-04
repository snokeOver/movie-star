"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieSeriesRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleWares/auth"));
const prisma_1 = require("../../../../generated/prisma");
const movieSeries_controller_1 = require("./movieSeries.controller");
const movieSeries_validate_1 = require("./movieSeries.validate");
const fileUploader_1 = require("../../utils/fileUploader");
const router = express_1.default.Router();
router.delete("/:id", (0, auth_1.default)(prisma_1.UserRole.admin, prisma_1.UserRole.s_admin), movieSeries_controller_1.MovieSeriesController.deleteSingle);
router.get("/single/:id", (0, auth_1.default)(prisma_1.UserRole.admin, prisma_1.UserRole.s_admin), movieSeries_controller_1.MovieSeriesController.getSingle);
router.get("/single-public/:id", movieSeries_controller_1.MovieSeriesController.getSinglePublic);
router.get("/", (0, auth_1.default)(prisma_1.UserRole.admin, prisma_1.UserRole.s_admin), movieSeries_controller_1.MovieSeriesController.getAll);
router.get("/home-banner", movieSeries_controller_1.MovieSeriesController.getFiveHomeBanner);
router.get("/admin-selected", movieSeries_controller_1.MovieSeriesController.getFiveAdminSelected);
router.get("/hightest-rated", movieSeries_controller_1.MovieSeriesController.getFiveHighestRated);
router.get("/trending", movieSeries_controller_1.MovieSeriesController.getFiveHighlyViewed);
router.post("/", (0, auth_1.default)(prisma_1.UserRole.admin, prisma_1.UserRole.s_admin), fileUploader_1.fileUploader.multerUpload.single("file"), (req, res, next) => {
    req.body.data = movieSeries_validate_1.ValidateMovieSeries.create.parse(JSON.parse(req.body.data));
    return movieSeries_controller_1.MovieSeriesController.createSingle(req, res, next);
});
router.patch("/:id", (0, auth_1.default)(prisma_1.UserRole.admin, prisma_1.UserRole.s_admin), fileUploader_1.fileUploader.multerUpload.single("file"), (req, res, next) => {
    req.body.data = movieSeries_validate_1.ValidateMovieSeries.update.parse(JSON.parse(req.body.data));
    return movieSeries_controller_1.MovieSeriesController.updateSingle(req, res, next);
});
exports.movieSeriesRoutes = router;

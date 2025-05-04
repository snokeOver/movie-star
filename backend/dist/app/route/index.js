"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("../modules/auth/auth.routes");
const movieSeries_route_1 = require("../modules/movieSeries/movieSeries.route");
const payment_route_1 = require("../modules/payment/payment.route");
const router = express_1.default.Router();
const routes = [
    {
        path: "/auth",
        route: auth_routes_1.authRoutes,
    },
    {
        path: "/media",
        route: movieSeries_route_1.movieSeriesRoutes,
    },
    {
        path: "/payment",
        route: payment_route_1.paymentRoutes,
    },
];
routes.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;

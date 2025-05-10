"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("../modules/auth/auth.routes");
const movieSeries_route_1 = require("../modules/movieSeries/movieSeries.route");
const payment_route_1 = require("../modules/payment/payment.route");
const user_route_1 = require("../modules/user/user.route");
const review_route_1 = require("../modules/review/review.route");
const admin_route_1 = require("../modules/admin/admin.route");
const router = express_1.default.Router();
const routes = [
    {
        path: "/auth",
        route: auth_routes_1.authRoutes,
    },
    {
        path: "/user",
        route: user_route_1.userRoutes,
    },
    {
        path: "/media",
        route: movieSeries_route_1.movieSeriesRoutes,
    },
    {
        path: "/payment",
        route: payment_route_1.paymentRoutes,
    },
    {
        path: "/review",
        route: review_route_1.reviewRoutes,
    },
    {
        path: "/admin",
        route: admin_route_1.adminRoutes,
    },
];
routes.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;

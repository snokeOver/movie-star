"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateAdmin = void 0;
const zod_1 = require("zod");
const update = zod_1.z.object({
    body: zod_1.z
        .object({
        name: zod_1.z.string().optional(),
        contactNumber: zod_1.z.string().optional(),
    })
        .strict(),
});
exports.ValidateAdmin = {
    update,
};

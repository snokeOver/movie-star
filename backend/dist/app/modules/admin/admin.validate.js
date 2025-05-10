"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateAdmin = void 0;
const zod_1 = require("zod");
const sales = zod_1.z.object({
    body: zod_1.z
        .object({
        start: zod_1.z.preprocess((val) => {
            if (!val)
                return undefined;
            const date = new Date(val);
            return isNaN(date.getTime()) ? undefined : date;
        }, zod_1.z.date()),
        end: zod_1.z.preprocess((val) => {
            if (!val)
                return undefined;
            const date = new Date(val);
            return isNaN(date.getTime()) ? undefined : date;
        }, zod_1.z.date()),
    })
        .strict(),
});
exports.ValidateAdmin = {
    sales,
};

import { z } from "zod";

const sales = z.object({
  body: z
    .object({
      start: z.preprocess((val) => {
        if (!val) return undefined;
        const date = new Date(val as string);
        return isNaN(date.getTime()) ? undefined : date;
      }, z.date()),

      end: z.preprocess((val) => {
        if (!val) return undefined;
        const date = new Date(val as string);
        return isNaN(date.getTime()) ? undefined : date;
      }, z.date()),
    })
    .strict(),
});

export const ValidateAdmin = {
  sales,
};

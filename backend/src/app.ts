import express, { Application, Request, Response } from "express";
import cors from "cors";

import notFound from "./app/middleWares/notFound";
import { globalErrorHandler } from "./app/middleWares/errorHandler";
import router from "./app/route";
import config from "./app/config";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: `Hello from ${config.project_name} API`,
  });
});

app.use("/api/v1", router);

app.use(globalErrorHandler);

app.use(notFound);

export default app;

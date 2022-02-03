import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";

import sampleRoutes from './routes/SampleRoute';

const app = express();

app.use(json());

app.use("/sample", sampleRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ messager: err.message });
});

app.listen(3000);
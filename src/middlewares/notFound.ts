import { Request, Response } from "express";

const notFound = (req: Request, res: Response) => {
  res.status(404).json({
    message: "Route not found!!Check the route pathname if written incorrect ",
    path: req.originalUrl,
    date: Date(),
  });
};

export default notFound;

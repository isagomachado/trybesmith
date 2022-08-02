import { NextFunction, Response, Request } from 'express';

const errors: Record<string, number> = {
  ValidationError: 400,
  NotfoundError: 404,
};

const errorHandlerMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const status = errors[err.name];
  if (!status) return res.status(500).json(err.message);
  return res.status(status).json({ message: err.message });
};

export default errorHandlerMiddleware;

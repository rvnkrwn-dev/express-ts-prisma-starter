import { Request, Response, NextFunction } from 'express';

export const jsonOnlyMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const contentType = req.headers['content-type'];

  if (contentType && contentType.includes('application/json')) {
    next();
  } else {
    res.status(415).json({ error: 'Only Support On JSON application. Please edit on /src/middleware/jsonOnlyMiddleware.ts' });
  }
};

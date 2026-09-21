import type { Request, Response, NextFunction } from 'express';

function errorHandler(
err: Error,
req: Request,
res: Response,
next: NextFunction,
): void {
    console.error(err);


    const message = `An error has occurred on the server`;

    res.status(500).json({
        error: message
    })
    next();
};

function notFoundHandler(req: Request, res: Response): void {   

res.status(404).json({  
error: `Route ${req.method} on ${req.path} not found`,
});
};

export { errorHandler, notFoundHandler}
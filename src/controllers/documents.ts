import type { Request, Response } from 'express';

const uploadDoc = (req: Request, res: Response): void => {
    res.status(201).json({
        success: true,
        data: {},
        error: null
    });
};

const getDocsForCurrentUser = (req: Request, res: Response): void => {
    res.status(200).json({
        success: true,
        data: {},
        error: null
    });
};

const getDocById = (req: Request, res: Response): void => {
    res.status(200).json({
        success: true,
        data: {},
        error: null
    });
};

const deleteDoc = (req: Request, res: Response): void => {
    res.status(204).end();
};

export { uploadDoc, getDocsForCurrentUser, getDocById, deleteDoc }
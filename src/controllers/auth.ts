import type { Request, Response } from 'express';

const now = new Date();
const getCurrentUser = ( req: Request, res: Response): void => {

res.status(200).json({
    success: true,
    data: {
      userId: "august_001",
      email: "augustvale@example.com",
      name: "August Vale",
      createdAt: `${now}`
    },
    error: null
})
};

export { getCurrentUser };
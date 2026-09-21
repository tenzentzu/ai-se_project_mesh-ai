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

const createNewUser = (req: Request, res: Response): void => {
  console.log("User created successfully.");

  res.status(201).json({
    success: true,
    data: {},
    error: null
  })
}

const userLogIn = (req: Request, res: Response): void => {
  console.log("Log In Successful");

  res.status(200).json({
    success: true,
    data: {},
    error: null
  })
}

export { getCurrentUser, createNewUser, userLogIn };
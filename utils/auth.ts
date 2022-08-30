

import { Request, Response } from "express";




/**
 * Authenticates a request by checking the authorization header. If successful,
 * it adds the user object to the request object and allows the request to
 * proceed. Else, it returns a 401 error with the appropriate message.
 *
 * @param req Request
 * @param res Response
 * @param next
 * @returns {Promise<*>}
 */
const authenticate = async (req: Request & { user: string }, res: Response, next) => {
  const error = true;//await checkAuth(req);
  if (!error) {
    return next();
  }
  return res.status(401).json(error);
};

export default authenticate;

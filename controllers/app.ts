import { Request, Response } from "express";
import { AxiosError } from 'axios';
import { differenceInYears } from 'date-fns'
import { default as utils }from '../utils'


export class AppController {
    public async howOld(req: Request & {user: any}, res: Response) {

      const dob: any = req.query.dob;

     if (!dob) {
      return utils.helpers.sendErrorResponse(res, { }, "dob param is required")
     }

    try {
      
      const valid = (new Date(dob)).getTime() > 0;

      if (!valid) {
        return utils.helpers.sendErrorResponse(res,
          {},
           "Invalid date of birth param" 
           )
      }
   
    
      const age = differenceInYears(new Date(), new Date(`${dob}`));
    
      return res.status(200).json({age:age});

  }catch(e){
      const error = e as AxiosError;
      console.log(error);
      return res.status(400).json(error);
     

  
  }



}

}
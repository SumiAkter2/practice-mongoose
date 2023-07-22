import express, { Application, NextFunction, Request,Response } from 'express';
import cors from 'cors';

const app:Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    // inserting a test data into mongodb

    /*
    1.interface
    2.schema
    3.model
    4.database query
    */
    
    interface IUser{
        id: string;
        roll: 'student';
        password: string;
        name: {
            firstName: string;
            middleName: string;
            lastName: string;
        }
        dateOfBirth?: string;
        gender: 'male' | 'female';
        email?: string;
        contactNo: string;
        emergencyContactNo: string;
        presentAddress: string,
        permanentAddress: string;
        
  }


    // res.send('Hello World!')
    // next();
})
export default app;
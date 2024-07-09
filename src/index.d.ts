import * as express from 'express-serve-static-core';

//importing the express engine core to extend the Request interface of express 
//to have some new properties 
declare global {
    namespace Express {
        interface Request {
            currentUser: string
        }
    }
}

//another way is to create a ts file 
/* I usually use "declare module" to add properties to Express's "Request" interface instead of declaring them 
in a namespace. This way I usually don't have to change anything in the tsconfig nor add any .d.ts files.
Add these lines to your .ts code 
(note that in most cases you will need to reference the express-serve-static-core module as this is 
where the Request interface is declared)
-------------------------------------------------
declare module "express-serve-static-core" {
    interface Request {
      myProp?: boolean;
    }
  }

 */

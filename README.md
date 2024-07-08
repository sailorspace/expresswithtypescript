# expresswithtypescript
- npm init -y    //initiate npm 
- npm i express //install express 
- develper dependencies now
- typescript is for development only 
- on the production we want to it to get transpiled to .js files , just like we have nodemon 
- npm i -D typescript //install typescript as a dev dependency <br/>
  //if we check in the node_modules tsc has files and scripts that is required to do <br/>
 //operations on the typescript files tsc script , transpile all the ts code to js by tsc(compiler)<br/>
- initializing express and listen to use a PORT
- //we will need to install type dependencies for express as in case of typescript the package intellisense 
- //will not be there as the object would of type any unless we have definitions installed to do it
- npm i -D @types/express  //adding the definition now 
- this will add @types folder in the node_modules with added type definitions
- now when you hover to the app.express in the ts file we will get the right resolution to the type
- npx tsc --init //create the ts config file, we can also install ts globally(this wont need npx in command)
- //then
- recommendation is to install the typescript locally , global installations can sometimes conflict
- the tsconfig file will also have options to transpile to any es version. default in latest here is es2016
- e.g target,module 
- change "rootDir": "./src", //as all the ts files is going to be in this folder 
- change "outDir": "./dist", //where all the transpiled js code is going to be
- we can do other typechecking changes as well e.g
    "strict": true,                                      /* Enable all strict type-checking options. */ <br/>
    "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */<br/>
    "strictNullChecks": true,                         /* When type checking, take into account 'null' and <br/>'undefined'. */
    "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */<br/>
- build the project 
- npx tsc --build  //this will use all the options in the tsconfig to build with 
- this creates a js file transpiled from typescript ready to be run 
- update package.json for the script to build and run 
- npm i -D nodemon  //install nodemon local dependency
- update the script tag for running the application 
- e.g "build": "tsc --build","start": "node ./dist/index.js", "start:dev": "nodemon ./src/index.ts"
- nodemon for typescript project need tsnode , nodejs interpreter 
- npm -D ts-node 
- npm run start:dev //without ts-node this command will throw tsnode not found error 



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
- 


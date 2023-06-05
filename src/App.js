import './App.css';
import React, { createContext, useState } from 'react';
import Main from './components/pages/Main';

export const AppContext=createContext(null);

function App() {
  const [show,setShow]=useState(false);
  const [code,setCode]=useState(code2);
  const [currTheme,setCurrTheme]=useState("dark");
  const [savedTheme,setSavedTheme]=useState("");
  const [index,setIndex]=useState((currTheme==="light")?4:6);
  const [open, setOpen] = React.useState(false);
  const [selectedFolder,setSelectedFolder]=useState(null);
  const [selectedFile,setSelectedFile]=useState(null);


  return (
    <AppContext.Provider value={{selectedFile,setSelectedFile,selectedFolder,setSelectedFolder, open,setOpen,index,setIndex,show,setShow,code,setCode,currTheme,setCurrTheme,savedTheme,setSavedTheme}} >
      <Main/>
    </AppContext.Provider>
  );
}

export default App;







const code2=`import express from 'express'; // or -> const express=require('express')
import userRoute from './routes/api/users/users.js';
import bodyParser from 'body-parser';
const app=express();
const PORT=process.env.PORT || 5000;

// to read req body of post request
app.use(bodyParser.json());// or app.use(express.json());

// to get /api services(get, post, patch, delete), it will be routed from api.js
app.use("/api/users",userRoute);

// home page
app.get('/',(req,res)=>{
    res.send("Server is listening and serving, do check /api to get access to the user api")
})

app.listen(PORT,()=>{
    console.log(\`Server is listening on port no. \${PORT}\`);
})
import userRoute from './routes/api/users/users.js';
import bodyParser from 'body-parser';
const app=express();
const PORT=process.env.PORT || 5000;

// to read req body of post request
app.use(bodyParser.json());// or app.use(express.json());

// to get /api services(get, post, patch, delete), it will be routed from api.js
app.use("/api/users",userRoute);

// home page
app.get('/',(req,res)=>{
    res.send("Server is listening and serving, do check /api to get access to the user api")
})

app.listen(PORT,()=>{
    console.log(\`Server is listening on port no. \${PORT}\`);
})
import userRoute from './routes/api/users/users.js';
import bodyParser from 'body-parser';
const app=express();
const PORT=process.env.PORT || 5000;

// to read req body of post request
app.use(bodyParser.json());// or app.use(express.json());

// to get /api services(get, post, patch, delete), it will be routed from api.js
app.use("/api/users",userRoute);

// home page
app.get('/',(req,res)=>{
    res.send("Server is listening and serving, do check /api to get access to the user api")
})

app.listen(PORT,()=>{
    console.log(\`Server is listening on port no. \${PORT}\`);
})
import userRoute from './routes/api/users/users.js';
import bodyParser from 'body-parser';
const app=express();
const PORT=process.env.PORT || 5000;

// to read req body of post request
app.use(bodyParser.json());// or app.use(express.json());

// to get /api services(get, post, patch, delete), it will be routed from api.js
app.use("/api/users",userRoute);

// home page
app.get('/',(req,res)=>{
    res.send("Server is listening and serving, do check /api to get access to the user api")
})

app.listen(PORT,()=>{
    console.log(\`Server is listening on port no. \${PORT}\`);
})
import userRoute from './routes/api/users/users.js';
import bodyParser from 'body-parser';
const app=express();
const PORT=process.env.PORT || 5000;

// to read req body of post request
app.use(bodyParser.json());// or app.use(express.json());

// to get /api services(get, post, patch, delete), it will be routed from api.js
app.use("/api/users",userRoute);

// home page
app.get('/',(req,res)=>{
    res.send("Server is listening and serving, do check /api to get access to the user api")
})

app.listen(PORT,()=>{
    console.log(\`Server is listening on port no. \${PORT}\`);
})
`;

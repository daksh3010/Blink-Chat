import express from "express" ;
import dotenv from "dotenv" ;

import authRoutes from "./routes/auth.routes.js" ;
import messageRoutes from "./routes/message.routes.js" ;
import userRoutes from "./routes/user.routes.js" ;
import connectToMongoDb from "./db/connectToMongoDb.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";

dotenv.config() ;
const PORT = process.env.PORT || 5000 ;
app.use(express.json());
app.use(cookieParser()) ;

/*app.get("/" , (req , res) => {
    res.send("Hello World!")
}) ;*/

app.use("/api/auth" , authRoutes) ;
app.use("/api/messages" , messageRoutes) ;
app.use("/api/users" , userRoutes) ;


server.listen(PORT, () => {
    connectToMongoDb();
    console.log(`Server is running on port ${PORT} `) ;
})
import express from 'express'
import cors from 'cors'

import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";

import mongoose from "mongoose";
// mongoose.connect('mongodb://localhost:27017/tuiter');
const CONNECTION_STRING =    'mongodb+srv://admin:123045@cluster0.tme0phk.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000);
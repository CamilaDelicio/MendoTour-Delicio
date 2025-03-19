import express from "express"; 
import session from "express-session";
import {createPool} from "mysql2";
import cors from "cors"; 
import authRouter from "./routes/authRoutes.js";
import morgan  from "morgan";



const app = express();

app.use(session({
    secret: '1234567890', 
    resave: true,
    saveUninitialized: true,
}))
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}));
app.use(morgan('dev'));

const pool = createPool ({
    host: "localhost",
    user: "root",
    password: "marizza5895",
    port: 3306,
    database: "mendotour"
});

app.use("/", authRouter);





app.listen(4000, () => {
    console.log('Servidor en puerto 4000');
});


export default pool;
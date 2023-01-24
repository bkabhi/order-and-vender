import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { connectMongoDb } from './db/mongoDb.js';
import { routes } from './routes/index.js';


const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send("Welcome to Api!");
});


app.use('/api', routes);


const PORT = process.env.PORT || 8080;

app.listen(PORT, async() =>{
    try {
        await connectMongoDb(process.env.MONGODB_URL)
        console.log(`Server listening on http://localhost:${PORT}`);
    } catch (error) {
        console.log(" error: " + error.message);
    }
})
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import routes from './routes';
import cors from 'cors';
const app = express();

mongoose.connect('mongodb+srv://devhouse:devhouse@devhouse.m7o3e.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..' , 'uploads')));
app.use(routes);

app.listen(3333);
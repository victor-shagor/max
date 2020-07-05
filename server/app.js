/* eslint-disable no-console */
import express from 'express';
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import logger from 'morgan';
import moviesRouter from './routes/movies';
import charactersRouter from './routes/characters';
import commentRouter from './routes/comment';
import swaggerDocumentation from '../swagger.json';

const app = express();

// view engine setup
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening from port ${port}`);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocumentation));
app.use('/movies', moviesRouter);
app.use('/characters', charactersRouter);
app.use('/comments', commentRouter);

// app.use("/login", loginRouter);
// app.use("/register", registerRouter);
// app.use("/post", auth, postRouter);
app.get('/', (req, res) => res.status(200).send({ message: 'Welcome to Star wars movies' }));
app.use('*', (req, res) => res.status(404).send({ message: 'route not found' }));

export default app;

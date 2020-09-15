import express from 'express';
import userRoutes from './router/user-routes.js'
import messageRoutes from './router/message-routes.js'
import cors from 'cors';
import dotenv from 'dotenv';

const result = dotenv.config();
if (result.error) {
  throw result.error;
}

var app = express();
app.use(cors());
//app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/users', userRoutes);
app.use('/messages', messageRoutes);

// Start server
app.listen(process.env.PORT, () =>
  console.log(`Example Express app listening on port ${process.env.PORT}`),
);

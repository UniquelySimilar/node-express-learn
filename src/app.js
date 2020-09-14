import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import UserController from './controller/user-controller.js';
import MessageController from './controller/message-controller.js';

const result = dotenv.config();
if (result.error) {
  throw result.error;
}

var app = express();
app.use(cors());
//app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var userController = new UserController();
var messageController = new MessageController();

// User routes
app.get('/users', (req, res) => {
  res.send(userController.findAll());
});

app.get('/users/:userId', (req, res) => {
  res.send(userController.find([req.params.userId]));
});

app.post('/users', (req, res) => {
  let userName = req.body.username;
  let newUser = userController.create(userName);
  res.send(newUser);
});

app.put('/users/:userId', (req, res) => {
  let id = req.params.userId;
  let userName = req.body.username;
  let updatedUser = userController.update(id, userName);
  res.send(updatedUser);
});

app.delete('/users/:userId', (req, res) => {
  userController.delete(req.params.userId);
  res.send(`Received a DELETE HTTP request for user ID ${req.params.userId}`);
});

// Message routes
app.get('/messages', (req, res) => {
  res.send(messageController.findAll());
});

app.get('/messages/:messageId', (req, res) => {
  res.send(messageController.find(req.parames.messageId));
});

app.post('/users/:userId/messages', (req, res) => {
  let text = req.body.text;
  let newMessage = messageController.create(text, req.params.userId);
  res.send(newMessage);
});


// Start server
app.listen(process.env.PORT, () =>
  console.log(`Example Express app listening on port ${process.env.PORT}`),
);

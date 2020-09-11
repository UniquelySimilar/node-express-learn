import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { users, messages, getNextUserId, User } from './test-data.js';

const result = dotenv.config();
if (result.error) {
  throw result.error;
}

var app = express();
app.use(cors());
//app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// User routes
app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/users/:userId', (req, res) => {
  res.send(users[req.params.userId]);
});

app.post('/users', (req, res) => {
  let userId = getNextUserId(users);
  let userName = req.body.username;
  let newUser = new User(userId, userName);
  users.push(newUser);
  res.send(`New user ID ${userId}, new user name ${userName}`);
});

app.put('/users/:userId', (req, res) => {
  res.send(`Received a PUT HTTP request for user ID ${req.params.userId}`);
});

app.delete('/users/:userId', (req, res) => {
  res.send(`Received a DELETE HTTP request for user ID ${req.params.userId}`);
});

// Message routes
app.get('/messages', (req, res) => {
  res.send(messages);
});

app.get('/messages/:messageId', (req, res) => {
  res.send(messages[req.params.messageId]);
});


// Start server
app.listen(process.env.PORT, () =>
  console.log(`Example Express app listening on port ${process.env.PORT}`),
);

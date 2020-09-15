import express from 'express';
import UserController from '../controller/user-controller.js';
import MessageController from '../controller/message-controller.js';

var router = express.Router();
var userController = new UserController();
var messageController = new MessageController();

// User routes
router.get('/', (req, res) => {
  res.send(userController.findAll());
});
  
router.get('/:userId', (req, res) => {
  res.send(userController.find([req.params.userId]));
});
  
router.post('/', (req, res) => {
  let userName = req.body.username;
  let newUser = userController.create(userName);
  res.send(newUser);
});
  
router.put('/:userId', (req, res) => {
  let id = req.params.userId;
  let userName = req.body.username;
  let updatedUser = userController.update(id, userName);
  res.send(updatedUser);
});
  
router.delete('/:userId', (req, res) => {
  userController.delete(req.params.userId);
  res.send(`Received a DELETE HTTP request for user ID ${req.params.userId}`);
});

export default router;
import express from 'express';
import UserController from '../controller/user-controller.js';

var router = express.Router();
var userController = new UserController();

// User routes
router.get('/', (req, res) => {
  res.send(userController.findAll());
});
  
router.get('/:userId', (req, res) => {
  let user = userController.find([req.params.userId]);
  if (user) {
    res.send(user);
  }
  else {
    res.status(404).send("Not found.");
  }
});
  
router.post('/', (req, res) => {
  let name = req.body.username;
  if (name) {
    let newUser = userController.create(name);
    res.send(newUser);
  }
  else {
    res.status(400).send("Bad request - missing 'username' body parameter.");
  }
});
  
router.put('/:userId', (req, res) => {
  let id = req.params.userId;
  let name = req.body.username;
  if (name) {
    let updatedUser = userController.update(id, name);
    if (updatedUser) {
      res.send(updatedUser);
    }
    else {
      res.status(404).send(`Not found - user ID ${id}`);
    }
  }
  else {
    res.status(400).send("Bad request - missing 'username' body parameter.");
  }
});
  
router.delete('/:userId', (req, res) => {
  userController.delete(req.params.userId);
  res.send(`Received a DELETE HTTP request for user ID ${req.params.userId}`);
});

export default router;
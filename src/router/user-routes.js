import express from 'express';
import UserController from '../controller/user-controller.js';

var router = express.Router();
var userController = new UserController();

// User routes
router.get('/', (req, res) => {
  userController.findAll(function(results) {
    res.send(results);
  });
});
  
router.get('/:userId', (req, res) => {
  userController.find([req.params.userId], function(results) {
    if (results) {
      res.send(results);
    }
    else {
      res.sendStatus(404);
    }
  });
});
  
router.post('/', (req, res) => {
  let name = req.body.username;
  if (name) {
    userController.create(name, function(results) {
      res.send(results); // New user ID
    });
  }
  else {
    res.sendStatus(404);
  }
});
  
router.put('/:userId', (req, res) => {
  let id = req.params.userId;
  let name = req.body.username;
  if (name) {
    userController.update(id, name, function(results) {
      if (results.affectedRows === 0) {
        res.sendStatus(404);
      }
      else {
        res.sendStatus(204);
      }
    })
  }
  else {
    res.sendStatus(404);
  }
});
  
router.delete('/:userId', (req, res) => {
  let id = req.params.userId;
  userController.delete(id, function(results) {
    console.log(results);
    if (results.affectedRows === 0) {
      res.sendStatus(404);
    }
    else {
      res.sendStatus(204);
    }
  });
});

export default router;
import express from 'express';
import MessageController from '../controller/message-controller.js';

var router = express.Router();
var messageController = new MessageController();

// Message routes
router.get('/', (req, res) => {
  let userId = req.query.userid;
  if (userId) {
    messageController.findByUser(parseInt(userId), function(results) {
      res.send(results);
    });
  }
  else {
    messageController.findAll(function(results) {
      res.send(results);
    })
  }
});
  
router.get('/:messageId', (req, res) => {
  messageController.find(req.params.messageId, function(results) {
    if(results) {
      res.send(results);
    }
    else {
      res.sendStatus(404);
    }
  })
});

// Modify to take userId as a query parameter
router.post('/', (req, res) => {
  let userId = req.body.userid;
  let text = req.body.text;
  if (!userId || !text) {
    res.sendStatus(400);
  }
  else {
    messageController.create(text, userId, function(results) {
      if (!results) {
        res.sendStatus(400);
      }
      else {
        res.sendStatus(201);
      }
    })
  }
});

export default router;
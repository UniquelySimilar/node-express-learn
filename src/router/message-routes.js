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

router.put('/:messageId', (req, res) => {
  let messageId = req.params.messageId;
  let text = req.body.text;
  if (!text) {
    res.sendStatus(400);
  }
  else {
    messageController.update(messageId, text, function(results) {
      if(results.affectedRows === 1) {
        res.sendStatus(204);
      }
      else {
        res.sendStatus(404);
      }
    })
  }
});

router.delete('/:messageId', (req, res) => {
  let messageId = req.params.messageId;
  messageController.delete(messageId, function(results) {
    if(results.affectedRows === 1) {
      res.sendStatus(204);
    }
    else {
      res.sendStatus(404);
    }
  })
});

export default router;
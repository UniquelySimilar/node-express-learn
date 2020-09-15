import express from 'express';
import MessageController from '../controller/message-controller.js';

var router = express.Router();
var messageController = new MessageController();

// Message routes
router.get('/', (req, res) => {
  let userId = req.query.userid;
  if (userId !== undefined) {
    res.send(messageController.findByUser(userId));
  }
  else {
    res.send(messageController.findAll());
  }
});
  
router.get('/:messageId', (req, res) => {
  let result = messageController.find(req.params.messageId);
  if (result) {
    res.send(result);
  }
  else {
    res.status(404).send("Not found.");
  }

  res.send();
});

// Modify to take userId as a query parameter
router.post('/', (req, res) => {
  let text = req.body.text;
  let userId = req.query.userid;
  let newMessage = messageController.create(text, userId);
  res.send(newMessage);
});

export default router;
import express from 'express';
import MessageController from '../controller/message-controller.js';

var router = express.Router();
var messageController = new MessageController();

// Message routes
router.get('/', (req, res) => {
  res.send(messageController.findAll());
});
  
router.get('/:messageId', (req, res) => {
  res.send(messageController.find(req.parames.messageId));
});

export default router;
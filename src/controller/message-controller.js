import Message from '../model/message.js';
import Utilities from '../utilities.js';

class MessageController {
  constructor() {
    this.messages = [];
  }

  findAll() {
    return this.messages;
  }

  find(id) {
    return this.messages.find( message => message.id == id );
  }

  findByUser(userId) {
    return [
      {
        id: 1,
        text: 'placeholder message',
        userId: 1
      }
    ]
    //return this.messages.filter( message => message.userId == userId);
  }

  create(text, userId) {
    let newId = Utilities.getNextId(this.messages);
    let newMessage = new Message(newId, text, userId);
    this.messages.push(newMessage);

    return newMessage;
  }

}

export default MessageController;
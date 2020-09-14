import { users } from '../test-data.js';

class UserController {
    findAll() {
        return users;
    }
}

export default UserController;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Commands = require('./commands');
const AuthService = require('../services/auth_service');
const service = new AuthService();
module.exports = class AuthCommands extends Commands {
    constructor() {
        super();
        this.createUser = (props) => {
            const result = service.createUser(props);
            console.log('auth_commands', 'createUser', result);
            return result;
        };
    }
};
//# sourceMappingURL=auth_commands.js.map
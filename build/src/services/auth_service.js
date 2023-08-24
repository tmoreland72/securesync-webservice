"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Service = require('./service');
const UserModel = require('../models/user_model');
const UserRepository = require('../repositories/user_repository');
const model = new UserModel();
const repo = new UserRepository();
module.exports = class AuthService extends Service {
    constructor() {
        super();
        this.createUser = (props) => {
            if (!model.create(props))
                throw new Error('Malformed request');
            const result = repo.createUser(props);
            console.log('auth_service', 'createUser', result);
            // Publish success or failed user create to PubSub
            // pubsub.publish(message)
            return result;
        };
    }
};
//# sourceMappingURL=auth_service.js.map
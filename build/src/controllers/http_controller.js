"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Controller = require('./controller');
const AuthCommands = require('../commands/auth_commands');
const UserModel = require('../models/user_model');
const command = new AuthCommands();
const model = new UserModel();
module.exports = class HttpController extends Controller {
    constructor() {
        super();
        this.createTenant = async (req, res, next) => {
            try {
                if (!model.create(req.body)) {
                    res.status(400).send('Malformed request');
                    return void 0;
                }
                const result = command.createTenant(req.body);
                console.log('http_controller', 'createTenant', result);
                res.status(201).json(result);
            }
            catch (error) {
                next(error);
            }
        };
    }
};
//# sourceMappingURL=http_controller.js.map
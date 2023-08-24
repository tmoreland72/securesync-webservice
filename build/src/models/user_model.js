"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { validate } = require('jsonschema');
const Model = require('./model');
module.exports = class UserModel extends Model {
    constructor() {
        super();
    }
    create(props) {
        const schema = {
            $id: 'http://yunibas.app/schema/logs.schema.json',
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            properties: {
                name: { type: 'string' },
                email: { type: 'string' },
            },
            required: ['name', 'email'],
        };
        const result = validate(props, schema);
        return result.valid;
    }
};
//# sourceMappingURL=user_model.js.map
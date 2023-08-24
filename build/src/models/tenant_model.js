"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { validate } = require('jsonschema');
const Model = require('./model');
module.exports = class TenantModel extends Model {
    constructor() {
        super();
    }
    create(props) {
        const schema = {
            $id: 'http://yunibas.app/schema/logs.schema.json',
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            properties: {
                federal_id: { type: 'string' },
                long_name: { type: 'string' },
                short_name: { type: 'string' },
            },
            required: ['federal_id', 'long_name', 'short_name'],
        };
        const result = validate(props, schema);
        return result.valid;
    }
};
//# sourceMappingURL=tenant_model.js.map
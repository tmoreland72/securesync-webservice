"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { validate } = require('jsonschema');
const Model = require('./model');
const Utils = require('../lib/utils');
const utils = new Utils();
module.exports = class TenantModel extends Model {
    constructor() {
        super();
    }
    async create(props) {
        const schema = await utils.loadSchema('tenant');
        const result = validate(props, schema);
        return result.valid;
    }
    async createProvider(props) {
        return await utils.validateSchema('tenant_provider', props);
    }
    async createJob(props) {
        return await utils.validateSchema('tenant_job', props);
    }
    get(props) {
        const schema = {
            $id: 'http://yunibas.app/schema/logs.schema.json',
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            properties: {
                tenant_id: { type: 'string' },
            },
            required: ['tenant_id'],
        };
        const result = validate(props, schema);
        return result.valid;
    }
};
//# sourceMappingURL=tenant.model.js.map
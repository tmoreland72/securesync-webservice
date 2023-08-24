"use strict";
const axios = require('axios');
const Validator = require('jsonschema').Validator;
const { PubSubAdapter } = require('@yunibas/adapters');
const v = new Validator();
module.exports = class Utils {
    publishMessage(props) {
        var _a;
        const pubsub = new PubSubAdapter();
        const { severity = 'INFO', tenant_ref, action, target_ref, request, response, success, } = props;
        const payload = {
            severity,
            log_name: 'SecureSync',
            message: {
                env: (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : 'development',
                tenant_ref,
                timestamp: new Date().toUTCString(),
                service: 'securesync_webservice',
                process: 'tenant.service',
                action,
                actor_ref: null,
                target_ref,
                request,
                response,
                success,
            },
        };
        if (process.env.NODE_ENV === 'production')
            pubsub.publishMessage({
                topic: 'LogEventTopic',
                message: payload,
            });
    }
    async loadSchema(schema) {
        const url = `${process.env.SCHEMA_BASEURL}/json-schemas/${schema}.json`;
        const response = await axios.get(url);
        return response.data;
    }
    async validateSchema(schema, obj) {
        const url = `${process.env.SCHEMA_BASEURL}/json-schemas/${schema}.json`;
        let response = await axios.get(url);
        const $schema = response.data;
        console.log('$schema', $schema);
        v.addSchema($schema);
        await Promise.all(v.unresolvedRefs.map(async (ref) => {
            response = await axios.get(ref);
            v.addSchema(response.data);
        }));
        console.log('v', v);
        console.log('validate', v.validate(obj, $schema));
        return v.validate(obj, $schema);
    }
};
//# sourceMappingURL=utils.js.map
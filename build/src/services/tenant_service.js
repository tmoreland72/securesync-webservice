"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Service = require('./service');
const TenantRepository = require('../repositories/tenant_repository');
const repo = new TenantRepository();
module.exports = class AuthService extends Service {
    constructor() {
        super();
        this.createTenant = (props) => {
            const result = repo.createTenant(props);
            console.log('tenant_service', 'createTenant', result);
            // Publish success or failed user create to PubSub
            // pubsub.publish(message)
            return result;
        };
    }
};
//# sourceMappingURL=tenant_service.js.map
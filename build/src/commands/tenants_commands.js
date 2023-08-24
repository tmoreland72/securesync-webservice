"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Commands = require('./commands');
const TenantService = require('../services/tenant_service');
const service = new TenantService();
module.exports = class AuthCommands extends Commands {
    constructor() {
        super();
        this.createUser = (props) => {
            const result = service.createTenant(props);
            console.log('tenant_commands', 'createTenant', result);
            return result;
        };
    }
};
//# sourceMappingURL=tenants_commands.js.map
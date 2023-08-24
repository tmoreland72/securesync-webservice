"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Commands = require('./commands');
const TenantService = require('../services/tenant.service');
const service = new TenantService();
module.exports = class TenantCommands extends Commands {
    constructor() {
        super();
        this.getTenant = async (props) => {
            const result = await service.getTenant(props);
            console.log('tenant_commands', 'getTenant', result);
            return result;
        };
        this.getTenantProviders = async (props) => {
            const result = await service.getTenantProviders(props);
            console.log('tenant_commands', 'getTenantProviders', result);
            return result;
        };
        this.getTenantJobs = async (props) => {
            const result = await service.getTenantJobs(props);
            console.log('tenant_commands', 'getTenantJobs', result);
            return result;
        };
        this.createTenant = async (props) => {
            const result = await service.createTenant(props);
            console.log('tenant_commands', 'createTenant', result);
            return result;
        };
        this.createTenantProvider = async (props) => {
            const result = await service.createTenantProvider(props);
            console.log('tenant_commands', 'createTenantProvider', result);
            return result;
        };
        this.createTenantJob = async (props) => {
            const result = await service.createTenantJob(props);
            console.log('tenant_commands', 'createTenantJob', result);
            return result;
        };
    }
};
//# sourceMappingURL=tenant.commands.js.map
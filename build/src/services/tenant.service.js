"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Service = require('./service');
const TenantRepository = require('../repositories/tenant.repository');
const Utils = require('../lib/utils');
const utils = new Utils();
module.exports = class TenantService extends Service {
    constructor() {
        super();
        this.repo = new TenantRepository();
    }
    async getTenant(props) {
        const result = await this.repo.getTenant(props);
        utils.publishMessage({
            severity: 'INFO',
            tenant_ref: '',
            action: 'get_tenant',
            target_ref: props.tenant_id,
            request: props,
            response: result,
            success: !!result,
        });
        return result;
    }
    async getTenantProviders(props) {
        const result = await this.repo.getTenantProviders(props);
        utils.publishMessage({
            severity: 'INFO',
            tenant_ref: '',
            action: 'get_tenant_providers',
            target_ref: props.tenant_id,
            request: props,
            response: result,
            success: !!result,
        });
        return result;
    }
    async getTenantJobs(props) {
        const result = await this.repo.getTenantJobs(props);
        utils.publishMessage({
            severity: 'INFO',
            tenant_ref: '',
            action: 'get_tenant_jobs',
            target_ref: props.tenant_id,
            request: props,
            response: result,
            success: !!result,
        });
        return result;
    }
    async createTenant(props) {
        const result = await this.repo.createTenant(props);
        utils.publishMessage({
            severity: 'INFO',
            tenant_ref: '',
            action: 'create_tenant',
            target_ref: props.tenant_id,
            request: props,
            response: result,
            success: !!result,
        });
        return result;
    }
    async createTenantProvider(props) {
        const result = await this.repo.createTenantProvider(props);
        utils.publishMessage({
            severity: 'INFO',
            tenant_ref: '',
            action: 'create_tenant_provider',
            target_ref: props.tenant_id,
            request: props,
            response: result,
            success: !!result,
        });
        return result;
    }
    async createTenantJob(props) {
        const result = await this.repo.createTenantJob(props);
        utils.publishMessage({
            severity: 'INFO',
            tenant_ref: '',
            action: 'create_tenant_job',
            target_ref: props.tenant_id,
            request: props,
            response: result,
            success: !!result,
        });
        return result;
    }
};
//# sourceMappingURL=tenant.service.js.map
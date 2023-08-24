"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Repository = require('./repository');
const { FirestoreAdapter } = require('@yunibas/adapters');
module.exports = class TenantRepository extends Repository {
    constructor() {
        super();
        this.adapter = new FirestoreAdapter();
    }
    async getTenant(props) {
        const id = props.tenant_id;
        const tenant = await this.adapter.getDoc({
            collection: 'tenants',
            id,
        });
        return tenant;
    }
    async getTenantProviders(props) {
        console.log('props', JSON.stringify(props));
        const providers = await this.adapter.getDocs({
            collection: 'tenants',
            id: props.tenant_id,
            subcollection: 'providers',
        });
        return providers;
    }
    async getTenantJobs(props) {
        const id = props.tenant_id;
        const jobs = await this.adapter.getDocs({
            collection: 'tenants',
            id,
            subcollection: 'jobs',
        });
        return jobs;
    }
    async createTenant(props) {
        const result = await this.adapter.addDoc({
            collection: 'tenants',
            data: props,
        });
        return result;
    }
    async createTenantProvider(props) {
        const id = props.tenant_id;
        delete props.tenant_id;
        const result = await this.adapter.addDoc({
            collection: 'tenants',
            id,
            subcollection: 'providers',
            data: props,
        });
        return result;
    }
    async createTenantJob(props) {
        const id = props.tenant_id;
        delete props.tenant_id;
        const result = await this.adapter.addDoc({
            collection: 'tenants',
            id,
            subcollection: 'jobs',
            data: props,
        });
        return result;
    }
};
//# sourceMappingURL=tenant.repository.js.map
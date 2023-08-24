"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require('express');
const Routes = require('./routes');
const TenantHttpController = require('../controllers/tenant.http.controller');
module.exports = class TenantRoutes extends Routes {
    constructor() {
        super();
        this.path = '/tenants';
        this.router = Router();
        this.controller = new TenantHttpController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}/:tenant_id/providers`, this.controller.getTenantProviders);
        this.router.get(`${this.path}/:tenant_id/jobs`, this.controller.getTenantJobs);
        this.router.get(`${this.path}/:tenant_id`, this.controller.getTenant);
        this.router.post(`${this.path}/:tenant_id/providers`, this.controller.createTenantProvider);
        this.router.post(`${this.path}/:tenant_id/jobs`, this.controller.createTenantJob);
        this.router.post(`${this.path}`, this.controller.createTenant);
    }
};
//# sourceMappingURL=tenant.routes.js.map
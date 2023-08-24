"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpController = require('./http.controller');
const TenantCommands = require('../commands/tenant.commands');
const TenantModel = require('../models/tenant.model');
const command = new TenantCommands();
const model = new TenantModel();
module.exports = class TenantHttpController extends HttpController {
    constructor() {
        super();
        this.ping = (req, res) => {
            res.sendStatus(200);
        };
        this.getTenant = async (req, res, next) => {
            try {
                console.log('body', req.body);
                console.log('params', req.params);
                if (!model.get(req.params)) {
                    res.status(400).send('Malformed request');
                    return void 0;
                }
                const result = await command.getTenant(req.params);
                console.log('http_controller', 'getTenant', result);
                res.status(200).json(result);
            }
            catch (error) {
                next(error);
            }
        };
        this.getTenantProviders = async (req, res, next) => {
            try {
                console.log('params', req.params);
                if (!model.get(req.params)) {
                    res.status(400).send('Malformed request');
                    return void 0;
                }
                const result = await command.getTenantProviders(req.params);
                console.log('http_controller', 'getTenantProviders', result);
                res.status(200).json(result);
            }
            catch (error) {
                next(error);
            }
        };
        this.getTenantJobs = async (req, res, next) => {
            try {
                console.log('params', req.params);
                if (!model.get(req.params)) {
                    res.status(400).send('Malformed request');
                    return void 0;
                }
                const result = await command.getTenantJobs(req.params);
                // console.log('http_controller', 'getTenantJobs', result)
                res.status(200).json(result);
            }
            catch (error) {
                next(error);
            }
        };
        this.createTenant = async (req, res, next) => {
            try {
                console.log('req', req.body);
                if (!model.create(req.body)) {
                    res.status(400).send('Malformed request');
                    return void 0;
                }
                const result = await command.createTenant(req.body);
                console.log('http_controller', 'createTenant', result);
                res.status(201).json(result);
            }
            catch (error) {
                next(error);
            }
        };
        this.createTenantProvider = async (req, res, next) => {
            try {
                if (!model.createProvider(req.body)) {
                    res.status(400).send('Malformed request');
                    return void 0;
                }
                if (!model.get(req.params)) {
                    res.status(400).send('Malformed request');
                    return void 0;
                }
                const result = await command.createTenantProvider({
                    ...req.body,
                    ...req.params,
                });
                console.log('http_controller', 'createTenantProvider', result);
                res.status(201).json(result);
            }
            catch (error) {
                next(error);
            }
        };
        this.createTenantJob = async (req, res, next) => {
            try {
                if (!model.createJob(req.body)) {
                    res.status(400).send('Malformed request');
                    return void 0;
                }
                if (!model.get(req.params)) {
                    res.status(400).send('Malformed request');
                    return void 0;
                }
                const result = await command.createTenantJob({
                    ...req.body,
                    ...req.params,
                });
                console.log('http_controller', 'createTenantJob', result);
                res.status(201).json(result);
            }
            catch (error) {
                next(error);
            }
        };
    }
};
//# sourceMappingURL=tenant.http.controller.js.map
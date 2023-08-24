"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Repository = require('./repository');
const FirestoreAdapter = require('../adapters/firestore_adapter');
const adapter = new FirestoreAdapter();
module.exports = class TenantRepository extends Repository {
    constructor() {
        super();
        this.createTenant = (props) => {
            const result = adapter.createDoc(props);
            console.log('tenant_repository', 'createDoc', result);
            return result;
        };
    }
};
//# sourceMappingURL=tenant_repository.js.map
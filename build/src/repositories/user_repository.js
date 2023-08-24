"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Repository = require('./repository');
const FirestoreAdapter = require('../adapters/firestore_adapter');
const adapter = new FirestoreAdapter();
module.exports = class UserRepository extends Repository {
    constructor() {
        super();
        this.createUser = (props) => {
            const result = adapter.createDoc(props);
            console.log('user_repository', 'createDoc', result);
            return result;
        };
    }
};
//# sourceMappingURL=user_repository.js.map
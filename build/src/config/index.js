"use strict";
module.exports = class Config {
    constructor() {
        var _a;
        const env = (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : 'development';
        console.log('env', env);
        if (env === 'development') {
            console.log('dir', __dirname);
            require('dotenv-yaml').config({
                path: `${__dirname}/.env.development.yaml`,
            });
        }
    }
};
//# sourceMappingURL=index.js.map
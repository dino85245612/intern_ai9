const environment = process.env;

//!ยังไม่ได้ใช้
// const User = require("../models/SuUser.model");

const env = environment.NODE_ENV; // 'dev' or 'test'

module.exports = function () {
    switch (environment.NODE_ENV) {
        case 'development':
            return {
                app: {
                    port: parseInt(environment.DEV_APP_PORT) || 3000
                },
                db: {
                    host: environment.DEV_DB_HOST || 'common-maria',
                    port: parseInt(environment.DEV_DB_PORT) || 3306,
                    user: environment.DEV_DB_USER || 'ai9',
                    password: environment.DEV_DB_PASSWORD || 'ai9.co.th',
                    database: environment.DEV_DB_DATABASE || 'nana_db',
                }
            };

        case 'production':
            return {
                app: {
                    port: parseInt(environment.PROD_APP_PORT) || 3000
                },
                db: {
                    host: environment.PROD_DB_HOST || 'common-maria',
                    port: parseInt(environment.PROD_DB_PORT) || 3306,
                    user: environment.PROD_DB_USER || 'ai9',
                    password: environment.PROD_DB_PASSWORD || 'ai9.co.th',
                    database: environment.PROD_DB_DATABASE || 'nana_db',
                }
            };
        default:
            return {
                app: {
                    port: parseInt(environment.TEST_APP_PORT) || 3000
                },
                db: {
                    host: environment.TEST_DB_HOST || 'localhost',
                    port: parseInt(environment.TEST_DB_PORT) || 3306,
                    user: environment.TEST_DB_USER || 'root',
                    password: environment.TEST_DB_PASSWORD || '',
                    database: environment.TEST_DB_DATABASE || 'nana_db',
                }
            };
    }
};

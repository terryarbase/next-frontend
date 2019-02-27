const AppEnv = require(`${global.__base}/config/appEnv`);

// Common setting for all environment
const commonSetting = {
    port: 3003,
    name: 'Next Frontend',
    cachePrefix: 'NextKeystoneCache',
};

const localhostSetting = {
    appDomain: 'http://localhost:3003',
    enableHttp: true,
};

const development4DSetting = {
    appDomain: 'http://localhost:3003',
    enableHttp: true,
};

const betaSetting = {
    appDomain: 'http://localhost:3003',
    enableHttp: true,
};

const developmentSetting = {
    appDomain: 'http://localhost:3003',
    enableHttp: true,
};

const productionSetting = {
    appDomain: 'http://localhost:3003',
    enableHttp: true,
};


var config;
const { env: { APP_ENV } } = process;
switch (APP_ENV) {
    case AppEnv.get('localhost'):
        config = localhostSetting;
        break;
    case AppEnv.get('development'):
        config = developmentSetting;
        break;
    case AppEnv.get('beta'):
        config = betaSetting;
        break;
    case AppEnv.get('production'):
        config = productionSetting;
        break;
    default:
        config = localhostSetting;
}
config = {
    ...commonSetting,
    ...config,
};

module.exports = config;

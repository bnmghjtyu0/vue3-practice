// process.env.VUE_APP_*
process.env.VUE_APP_VERSION = require("./package.json").version;
process.env.BASE_URL = "/";
module.exports = {
    lintOnSave: process.env.NODE_ENV !== "production", //關閉 eslint
};

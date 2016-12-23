// config/database.js

module.exports = {
    //url : 'mongodb://db/'
    //url : 'mongodb://example-mean-todo-db/'
    url : 'mongodb://'+process.env.APP_DB_HOST+'/' || 'mongodb://db/'
};

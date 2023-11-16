const MessagesController = require('./controllers/messages.controller');

exports.routesConfig = function (app) {
    app.get('/messages', [
        MessagesController.getMessages
    ]);
    app.post('/messages', [
        MessagesController.saveMessage
    ]);
    app.get('/', [
        MessagesController.getHomePage
    ]);
};


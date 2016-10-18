module.exports = function (app, express) {

  var router = express.Router();
  
  router.use('/user', require('./user/routes')(router));

  return router;

};
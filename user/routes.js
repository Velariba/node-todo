module.exports = function (router) {
  
  router.get('/', function(req, res) {
    res.json({ user: {
      name: 'John',
      age: 28
    } });
  });
  
  return router;
};



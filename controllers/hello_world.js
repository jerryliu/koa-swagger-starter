'use strict';

var util = require('util');

module.exports = {
  hello: hello
};
/*
  Functions used for operations should take one parameter:
  Param name: a handle to the request name object
 */
function hello(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, %s!', name);

  res.json(hello);
}

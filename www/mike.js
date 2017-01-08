function Mike() {

}

Mike.prototype.coolMethod3 = function(arg0, success, error) {
  cordova.exec(success, error, "mike", "coolMethod2", [arg0]);
};

Mike.install = function() {
  if (!windows.plugins) {
    window.plugins = {};
  }

  window.plugins.mike = new Mike();
  return window.plugins.mike;
};

cordova.addConstructor(Mike.install);

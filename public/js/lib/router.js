// Generated by CoffeeScript 1.6.2
(function() {
  var Router, _ref, _ref1,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.MyApp = (_ref = window.MyApp) != null ? _ref : {};

  Router = (function(_super) {
    __extends(Router, _super);

    function Router() {
      _ref1 = Router.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    Router.prototype.routes = {
      "account": "account",
      "": "account",
      "_=_": "account"
    };

    Router.prototype.account = function() {
      window.MyApp.App.unrender();
      return window.MyApp.views.Settings.render();
    };

    return Router;

  })(Backbone.Router);

  window.MyApp.router = new Router;

}).call(this);
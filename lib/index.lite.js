"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "querySelector", {
  enumerable: true,
  get: function get() {
    return _core.querySelector;
  }
});
Object.defineProperty(exports, "querySelectorAll", {
  enumerable: true,
  get: function get() {
    return _core.querySelectorAll;
  }
});
Object.defineProperty(exports, "registerNodeType", {
  enumerable: true,
  get: function get() {
    return _core.registerNodeType;
  }
});
Object.defineProperty(exports, "isValidNodeType", {
  enumerable: true,
  get: function get() {
    return _core.isValidNodeType;
  }
});
Object.defineProperty(exports, "createNode", {
  enumerable: true,
  get: function get() {
    return _core.createNode;
  }
});
Object.defineProperty(exports, "createElement", {
  enumerable: true,
  get: function get() {
    return _core.createElement;
  }
});
Object.defineProperty(exports, "use", {
  enumerable: true,
  get: function get() {
    return _core.use;
  }
});
Object.defineProperty(exports, "utils", {
  enumerable: true,
  get: function get() {
    return _core.utils;
  }
});
Object.defineProperty(exports, "math", {
  enumerable: true,
  get: function get() {
    return _core.math;
  }
});
Object.defineProperty(exports, "BaseNode", {
  enumerable: true,
  get: function get() {
    return _core.BaseNode;
  }
});
Object.defineProperty(exports, "Label", {
  enumerable: true,
  get: function get() {
    return _core.Label;
  }
});
Object.defineProperty(exports, "Path", {
  enumerable: true,
  get: function get() {
    return _core.Path;
  }
});
Object.defineProperty(exports, "Group", {
  enumerable: true,
  get: function get() {
    return _core.Group;
  }
});
Object.defineProperty(exports, "Effects", {
  enumerable: true,
  get: function get() {
    return _core.Effects;
  }
});
Object.defineProperty(exports, "Easings", {
  enumerable: true,
  get: function get() {
    return _core.Easings;
  }
});
Object.defineProperty(exports, "Timeline", {
  enumerable: true,
  get: function get() {
    return _core.Timeline;
  }
});
Object.defineProperty(exports, "Color", {
  enumerable: true,
  get: function get() {
    return _core.Color;
  }
});
Object.defineProperty(exports, "BaseSprite", {
  enumerable: true,
  get: function get() {
    return _basesprite.default;
  }
});
Object.defineProperty(exports, "Sprite", {
  enumerable: true,
  get: function get() {
    return _sprite.default;
  }
});
Object.defineProperty(exports, "Layer", {
  enumerable: true,
  get: function get() {
    return _layer.default;
  }
});
Object.defineProperty(exports, "Scene", {
  enumerable: true,
  get: function get() {
    return _scene.default;
  }
});
Object.defineProperty(exports, "Resource", {
  enumerable: true,
  get: function get() {
    return _resource.default;
  }
});
exports.version = void 0;

var _core = require("@spritejs/core");

var _basesprite = _interopRequireDefault(require("./basesprite"));

var _sprite = _interopRequireDefault(require("./sprite"));

var _layer = _interopRequireDefault(require("./layer"));

var _scene = _interopRequireDefault(require("./scene"));

var _resource = _interopRequireDefault(require("./resource"));

var _platform = require("./platform");

if (_platform.shim) {
  (0, _platform.shim)();
}

(0, _core.registerNodeType)('layer', _layer.default, true);
(0, _core.registerNodeType)('scene', _scene.default, true);
var version = "2.29.5";
exports.version = version;
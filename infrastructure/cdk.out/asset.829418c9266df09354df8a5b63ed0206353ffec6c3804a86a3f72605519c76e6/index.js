"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// asset-input/node_modules/reflect-metadata/ReflectLite.js
var require_ReflectLite = __commonJS({
  "asset-input/node_modules/reflect-metadata/ReflectLite.js"() {
    var Reflect2;
    (function(Reflect3) {
      (function(factory) {
        var root = typeof globalThis === "object" ? globalThis : typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : sloppyModeThis();
        var exporter = makeExporter(Reflect3);
        if (typeof root.Reflect !== "undefined") {
          exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter, root);
        if (typeof root.Reflect === "undefined") {
          root.Reflect = Reflect3;
        }
        function makeExporter(target, previous) {
          return function(key, value) {
            Object.defineProperty(target, key, { configurable: true, writable: true, value });
            if (previous)
              previous(key, value);
          };
        }
        function sloppyModeThis() {
          throw new ReferenceError("globalThis could not be found. Please polyfill globalThis before loading this module.");
        }
      })(function(exporter, root) {
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : fail("Symbol.toPrimitive not found.");
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : fail("Symbol.iterator not found.");
        var functionPrototype = Object.getPrototypeOf(Function);
        var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : fail("A valid Map constructor could not be found.");
        var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : fail("A valid Set constructor could not be found.");
        var _WeakMap = typeof WeakMap === "function" ? WeakMap : fail("A valid WeakMap constructor could not be found.");
        var registrySymbol = supportsSymbol ? Symbol.for("@reflect-metadata:registry") : void 0;
        var metadataRegistry = GetOrCreateMetadataRegistry();
        var metadataProvider = CreateMetadataProvider(metadataRegistry);
        function decorate(decorators, target, propertyKey, attributes) {
          if (!IsUndefined(propertyKey)) {
            if (!IsArray(decorators))
              throw new TypeError();
            if (!IsObject(target))
              throw new TypeError();
            if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
              throw new TypeError();
            if (IsNull(attributes))
              attributes = void 0;
            propertyKey = ToPropertyKey(propertyKey);
            return DecorateProperty(decorators, target, propertyKey, attributes);
          } else {
            if (!IsArray(decorators))
              throw new TypeError();
            if (!IsConstructor(target))
              throw new TypeError();
            return DecorateConstructor(decorators, target);
          }
        }
        exporter("decorate", decorate);
        function metadata(metadataKey, metadataValue) {
          function decorator(target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
              throw new TypeError();
            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
          }
          return decorator;
        }
        exporter("metadata", metadata);
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        function hasMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        function hasOwnMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        function getMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        function getOwnMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        function getMetadataKeys(target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        function getOwnMetadataKeys(target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        function deleteMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          var provider = GetMetadataProvider(
            target,
            propertyKey,
            /*Create*/
            false
          );
          if (IsUndefined(provider))
            return false;
          return provider.OrdinaryDeleteMetadata(metadataKey, target, propertyKey);
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
          for (var i2 = decorators.length - 1; i2 >= 0; --i2) {
            var decorator = decorators[i2];
            var decorated = decorator(target);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
              if (!IsConstructor(decorated))
                throw new TypeError();
              target = decorated;
            }
          }
          return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
          for (var i2 = decorators.length - 1; i2 >= 0; --i2) {
            var decorator = decorators[i2];
            var decorated = decorator(target, propertyKey, descriptor);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
              if (!IsObject(decorated))
                throw new TypeError();
              descriptor = decorated;
            }
          }
          return descriptor;
        }
        function OrdinaryHasMetadata(MetadataKey, O2, P3) {
          var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O2, P3);
          if (hasOwn)
            return true;
          var parent = OrdinaryGetPrototypeOf(O2);
          if (!IsNull(parent))
            return OrdinaryHasMetadata(MetadataKey, parent, P3);
          return false;
        }
        function OrdinaryHasOwnMetadata(MetadataKey, O2, P3) {
          var provider = GetMetadataProvider(
            O2,
            P3,
            /*Create*/
            false
          );
          if (IsUndefined(provider))
            return false;
          return ToBoolean(provider.OrdinaryHasOwnMetadata(MetadataKey, O2, P3));
        }
        function OrdinaryGetMetadata(MetadataKey, O2, P3) {
          var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O2, P3);
          if (hasOwn)
            return OrdinaryGetOwnMetadata(MetadataKey, O2, P3);
          var parent = OrdinaryGetPrototypeOf(O2);
          if (!IsNull(parent))
            return OrdinaryGetMetadata(MetadataKey, parent, P3);
          return void 0;
        }
        function OrdinaryGetOwnMetadata(MetadataKey, O2, P3) {
          var provider = GetMetadataProvider(
            O2,
            P3,
            /*Create*/
            false
          );
          if (IsUndefined(provider))
            return;
          return provider.OrdinaryGetOwnMetadata(MetadataKey, O2, P3);
        }
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O2, P3) {
          var provider = GetMetadataProvider(
            O2,
            P3,
            /*Create*/
            true
          );
          provider.OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O2, P3);
        }
        function OrdinaryMetadataKeys(O2, P3) {
          var ownKeys = OrdinaryOwnMetadataKeys(O2, P3);
          var parent = OrdinaryGetPrototypeOf(O2);
          if (parent === null)
            return ownKeys;
          var parentKeys = OrdinaryMetadataKeys(parent, P3);
          if (parentKeys.length <= 0)
            return ownKeys;
          if (ownKeys.length <= 0)
            return parentKeys;
          var set = new _Set();
          var keys = [];
          for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
            var key = ownKeys_1[_i];
            var hasKey = set.has(key);
            if (!hasKey) {
              set.add(key);
              keys.push(key);
            }
          }
          for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
            var key = parentKeys_1[_a];
            var hasKey = set.has(key);
            if (!hasKey) {
              set.add(key);
              keys.push(key);
            }
          }
          return keys;
        }
        function OrdinaryOwnMetadataKeys(O2, P3) {
          var provider = GetMetadataProvider(
            O2,
            P3,
            /*create*/
            false
          );
          if (!provider) {
            return [];
          }
          return provider.OrdinaryOwnMetadataKeys(O2, P3);
        }
        function Type(x3) {
          if (x3 === null)
            return 1;
          switch (typeof x3) {
            case "undefined":
              return 0;
            case "boolean":
              return 2;
            case "string":
              return 3;
            case "symbol":
              return 4;
            case "number":
              return 5;
            case "object":
              return x3 === null ? 1 : 6;
            default:
              return 6;
          }
        }
        function IsUndefined(x3) {
          return x3 === void 0;
        }
        function IsNull(x3) {
          return x3 === null;
        }
        function IsSymbol(x3) {
          return typeof x3 === "symbol";
        }
        function IsObject(x3) {
          return typeof x3 === "object" ? x3 !== null : typeof x3 === "function";
        }
        function ToPrimitive(input, PreferredType) {
          switch (Type(input)) {
            case 0:
              return input;
            case 1:
              return input;
            case 2:
              return input;
            case 3:
              return input;
            case 4:
              return input;
            case 5:
              return input;
          }
          var hint = PreferredType === 3 ? "string" : PreferredType === 5 ? "number" : "default";
          var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
          if (exoticToPrim !== void 0) {
            var result = exoticToPrim.call(input, hint);
            if (IsObject(result))
              throw new TypeError();
            return result;
          }
          return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        function OrdinaryToPrimitive(O2, hint) {
          if (hint === "string") {
            var toString_1 = O2.toString;
            if (IsCallable(toString_1)) {
              var result = toString_1.call(O2);
              if (!IsObject(result))
                return result;
            }
            var valueOf = O2.valueOf;
            if (IsCallable(valueOf)) {
              var result = valueOf.call(O2);
              if (!IsObject(result))
                return result;
            }
          } else {
            var valueOf = O2.valueOf;
            if (IsCallable(valueOf)) {
              var result = valueOf.call(O2);
              if (!IsObject(result))
                return result;
            }
            var toString_2 = O2.toString;
            if (IsCallable(toString_2)) {
              var result = toString_2.call(O2);
              if (!IsObject(result))
                return result;
            }
          }
          throw new TypeError();
        }
        function ToBoolean(argument) {
          return !!argument;
        }
        function ToString(argument) {
          return "" + argument;
        }
        function ToPropertyKey(argument) {
          var key = ToPrimitive(
            argument,
            3
            /* String */
          );
          if (IsSymbol(key))
            return key;
          return ToString(key);
        }
        function IsArray(argument) {
          return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
        }
        function IsCallable(argument) {
          return typeof argument === "function";
        }
        function IsConstructor(argument) {
          return typeof argument === "function";
        }
        function IsPropertyKey(argument) {
          switch (Type(argument)) {
            case 3:
              return true;
            case 4:
              return true;
            default:
              return false;
          }
        }
        function GetMethod(V3, P3) {
          var func = V3[P3];
          if (func === void 0 || func === null)
            return void 0;
          if (!IsCallable(func))
            throw new TypeError();
          return func;
        }
        function GetIterator(obj) {
          var method = GetMethod(obj, iteratorSymbol);
          if (!IsCallable(method))
            throw new TypeError();
          var iterator = method.call(obj);
          if (!IsObject(iterator))
            throw new TypeError();
          return iterator;
        }
        function IteratorValue(iterResult) {
          return iterResult.value;
        }
        function IteratorStep(iterator) {
          var result = iterator.next();
          return result.done ? false : result;
        }
        function IteratorClose(iterator) {
          var f2 = iterator["return"];
          if (f2)
            f2.call(iterator);
        }
        function OrdinaryGetPrototypeOf(O2) {
          var proto = Object.getPrototypeOf(O2);
          if (typeof O2 !== "function" || O2 === functionPrototype)
            return proto;
          if (proto !== functionPrototype)
            return proto;
          var prototype = O2.prototype;
          var prototypeProto = prototype && Object.getPrototypeOf(prototype);
          if (prototypeProto == null || prototypeProto === Object.prototype)
            return proto;
          var constructor = prototypeProto.constructor;
          if (typeof constructor !== "function")
            return proto;
          if (constructor === O2)
            return proto;
          return constructor;
        }
        function fail(e2) {
          throw e2;
        }
        function CreateMetadataRegistry() {
          var fallback;
          if (!IsUndefined(registrySymbol) && typeof root.Reflect !== "undefined" && !(registrySymbol in root.Reflect) && typeof root.Reflect.defineMetadata === "function") {
            fallback = CreateFallbackProvider(root.Reflect);
          }
          var first;
          var second;
          var rest;
          var targetProviderMap = new _WeakMap();
          var registry = {
            registerProvider,
            getProvider,
            setProvider
          };
          return registry;
          function registerProvider(provider) {
            if (!Object.isExtensible(registry)) {
              throw new Error("Cannot add provider to a frozen registry.");
            }
            switch (true) {
              case fallback === provider:
                break;
              case IsUndefined(first):
                first = provider;
                break;
              case first === provider:
                break;
              case IsUndefined(second):
                second = provider;
                break;
              case second === provider:
                break;
              default:
                if (rest === void 0)
                  rest = new _Set();
                rest.add(provider);
                break;
            }
          }
          function getProviderNoCache(O2, P3) {
            if (!IsUndefined(first)) {
              if (first.isProviderFor(O2, P3))
                return first;
              if (!IsUndefined(second)) {
                if (second.isProviderFor(O2, P3))
                  return first;
                if (!IsUndefined(rest)) {
                  var iterator = GetIterator(rest);
                  while (true) {
                    var next = IteratorStep(iterator);
                    if (!next) {
                      return void 0;
                    }
                    var provider = IteratorValue(next);
                    if (provider.isProviderFor(O2, P3)) {
                      IteratorClose(iterator);
                      return provider;
                    }
                  }
                }
              }
            }
            if (!IsUndefined(fallback) && fallback.isProviderFor(O2, P3)) {
              return fallback;
            }
            return void 0;
          }
          function getProvider(O2, P3) {
            var providerMap = targetProviderMap.get(O2);
            var provider;
            if (!IsUndefined(providerMap)) {
              provider = providerMap.get(P3);
            }
            if (!IsUndefined(provider)) {
              return provider;
            }
            provider = getProviderNoCache(O2, P3);
            if (!IsUndefined(provider)) {
              if (IsUndefined(providerMap)) {
                providerMap = new _Map();
                targetProviderMap.set(O2, providerMap);
              }
              providerMap.set(P3, provider);
            }
            return provider;
          }
          function hasProvider(provider) {
            if (IsUndefined(provider))
              throw new TypeError();
            return first === provider || second === provider || !IsUndefined(rest) && rest.has(provider);
          }
          function setProvider(O2, P3, provider) {
            if (!hasProvider(provider)) {
              throw new Error("Metadata provider not registered.");
            }
            var existingProvider = getProvider(O2, P3);
            if (existingProvider !== provider) {
              if (!IsUndefined(existingProvider)) {
                return false;
              }
              var providerMap = targetProviderMap.get(O2);
              if (IsUndefined(providerMap)) {
                providerMap = new _Map();
                targetProviderMap.set(O2, providerMap);
              }
              providerMap.set(P3, provider);
            }
            return true;
          }
        }
        function GetOrCreateMetadataRegistry() {
          var metadataRegistry2;
          if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
            metadataRegistry2 = root.Reflect[registrySymbol];
          }
          if (IsUndefined(metadataRegistry2)) {
            metadataRegistry2 = CreateMetadataRegistry();
          }
          if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
            Object.defineProperty(root.Reflect, registrySymbol, {
              enumerable: false,
              configurable: false,
              writable: false,
              value: metadataRegistry2
            });
          }
          return metadataRegistry2;
        }
        function CreateMetadataProvider(registry) {
          var metadata2 = new _WeakMap();
          var provider = {
            isProviderFor: function(O2, P3) {
              var targetMetadata = metadata2.get(O2);
              if (IsUndefined(targetMetadata))
                return false;
              return targetMetadata.has(P3);
            },
            OrdinaryDefineOwnMetadata: OrdinaryDefineOwnMetadata2,
            OrdinaryHasOwnMetadata: OrdinaryHasOwnMetadata2,
            OrdinaryGetOwnMetadata: OrdinaryGetOwnMetadata2,
            OrdinaryOwnMetadataKeys: OrdinaryOwnMetadataKeys2,
            OrdinaryDeleteMetadata
          };
          metadataRegistry.registerProvider(provider);
          return provider;
          function GetOrCreateMetadataMap(O2, P3, Create) {
            var targetMetadata = metadata2.get(O2);
            var createdTargetMetadata = false;
            if (IsUndefined(targetMetadata)) {
              if (!Create)
                return void 0;
              targetMetadata = new _Map();
              metadata2.set(O2, targetMetadata);
              createdTargetMetadata = true;
            }
            var metadataMap = targetMetadata.get(P3);
            if (IsUndefined(metadataMap)) {
              if (!Create)
                return void 0;
              metadataMap = new _Map();
              targetMetadata.set(P3, metadataMap);
              if (!registry.setProvider(O2, P3, provider)) {
                targetMetadata.delete(P3);
                if (createdTargetMetadata) {
                  metadata2.delete(O2);
                }
                throw new Error("Wrong provider for target.");
              }
            }
            return metadataMap;
          }
          function OrdinaryHasOwnMetadata2(MetadataKey, O2, P3) {
            var metadataMap = GetOrCreateMetadataMap(
              O2,
              P3,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap))
              return false;
            return ToBoolean(metadataMap.has(MetadataKey));
          }
          function OrdinaryGetOwnMetadata2(MetadataKey, O2, P3) {
            var metadataMap = GetOrCreateMetadataMap(
              O2,
              P3,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap))
              return void 0;
            return metadataMap.get(MetadataKey);
          }
          function OrdinaryDefineOwnMetadata2(MetadataKey, MetadataValue, O2, P3) {
            var metadataMap = GetOrCreateMetadataMap(
              O2,
              P3,
              /*Create*/
              true
            );
            metadataMap.set(MetadataKey, MetadataValue);
          }
          function OrdinaryOwnMetadataKeys2(O2, P3) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(
              O2,
              P3,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap))
              return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k2 = 0;
            while (true) {
              var next = IteratorStep(iterator);
              if (!next) {
                keys.length = k2;
                return keys;
              }
              var nextValue = IteratorValue(next);
              try {
                keys[k2] = nextValue;
              } catch (e2) {
                try {
                  IteratorClose(iterator);
                } finally {
                  throw e2;
                }
              }
              k2++;
            }
          }
          function OrdinaryDeleteMetadata(MetadataKey, O2, P3) {
            var metadataMap = GetOrCreateMetadataMap(
              O2,
              P3,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap))
              return false;
            if (!metadataMap.delete(MetadataKey))
              return false;
            if (metadataMap.size === 0) {
              var targetMetadata = metadata2.get(O2);
              if (!IsUndefined(targetMetadata)) {
                targetMetadata.delete(P3);
                if (targetMetadata.size === 0) {
                  metadata2.delete(targetMetadata);
                }
              }
            }
            return true;
          }
        }
        function CreateFallbackProvider(reflect) {
          var defineMetadata2 = reflect.defineMetadata, hasOwnMetadata2 = reflect.hasOwnMetadata, getOwnMetadata2 = reflect.getOwnMetadata, getOwnMetadataKeys2 = reflect.getOwnMetadataKeys, deleteMetadata2 = reflect.deleteMetadata;
          var metadataOwner = new _WeakMap();
          var provider = {
            isProviderFor: function(O2, P3) {
              var metadataPropertySet = metadataOwner.get(O2);
              if (!IsUndefined(metadataPropertySet) && metadataPropertySet.has(P3)) {
                return true;
              }
              if (getOwnMetadataKeys2(O2, P3).length) {
                if (IsUndefined(metadataPropertySet)) {
                  metadataPropertySet = new _Set();
                  metadataOwner.set(O2, metadataPropertySet);
                }
                metadataPropertySet.add(P3);
                return true;
              }
              return false;
            },
            OrdinaryDefineOwnMetadata: defineMetadata2,
            OrdinaryHasOwnMetadata: hasOwnMetadata2,
            OrdinaryGetOwnMetadata: getOwnMetadata2,
            OrdinaryOwnMetadataKeys: getOwnMetadataKeys2,
            OrdinaryDeleteMetadata: deleteMetadata2
          };
          return provider;
        }
        function GetMetadataProvider(O2, P3, Create) {
          var registeredProvider = metadataRegistry.getProvider(O2, P3);
          if (!IsUndefined(registeredProvider)) {
            return registeredProvider;
          }
          if (Create) {
            if (metadataRegistry.setProvider(O2, P3, metadataProvider)) {
              return metadataProvider;
            }
            throw new Error("Illegal state.");
          }
          return void 0;
        }
      });
    })(Reflect2 || (Reflect2 = {}));
  }
});

// asset-input/node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "asset-input/node_modules/safe-buffer/index.js"(exports2, module2) {
    var buffer = require("buffer");
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module2.exports = buffer;
    } else {
      copyProps(buffer, exports2);
      exports2.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// asset-input/node_modules/jws/lib/data-stream.js
var require_data_stream = __commonJS({
  "asset-input/node_modules/jws/lib/data-stream.js"(exports2, module2) {
    var Buffer2 = require_safe_buffer().Buffer;
    var Stream = require("stream");
    var util = require("util");
    function DataStream(data) {
      this.buffer = null;
      this.writable = true;
      this.readable = true;
      if (!data) {
        this.buffer = Buffer2.alloc(0);
        return this;
      }
      if (typeof data.pipe === "function") {
        this.buffer = Buffer2.alloc(0);
        data.pipe(this);
        return this;
      }
      if (data.length || typeof data === "object") {
        this.buffer = data;
        this.writable = false;
        process.nextTick(function() {
          this.emit("end", data);
          this.readable = false;
          this.emit("close");
        }.bind(this));
        return this;
      }
      throw new TypeError("Unexpected data type (" + typeof data + ")");
    }
    util.inherits(DataStream, Stream);
    DataStream.prototype.write = function write(data) {
      this.buffer = Buffer2.concat([this.buffer, Buffer2.from(data)]);
      this.emit("data", data);
    };
    DataStream.prototype.end = function end(data) {
      if (data)
        this.write(data);
      this.emit("end", data);
      this.emit("close");
      this.writable = false;
      this.readable = false;
    };
    module2.exports = DataStream;
  }
});

// asset-input/node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js
var require_param_bytes_for_alg = __commonJS({
  "asset-input/node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js"(exports2, module2) {
    "use strict";
    function getParamSize(keySize) {
      var result = (keySize / 8 | 0) + (keySize % 8 === 0 ? 0 : 1);
      return result;
    }
    var paramBytesForAlg = {
      ES256: getParamSize(256),
      ES384: getParamSize(384),
      ES512: getParamSize(521)
    };
    function getParamBytesForAlg(alg) {
      var paramBytes = paramBytesForAlg[alg];
      if (paramBytes) {
        return paramBytes;
      }
      throw new Error('Unknown algorithm "' + alg + '"');
    }
    module2.exports = getParamBytesForAlg;
  }
});

// asset-input/node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js
var require_ecdsa_sig_formatter = __commonJS({
  "asset-input/node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js"(exports2, module2) {
    "use strict";
    var Buffer2 = require_safe_buffer().Buffer;
    var getParamBytesForAlg = require_param_bytes_for_alg();
    var MAX_OCTET = 128;
    var CLASS_UNIVERSAL = 0;
    var PRIMITIVE_BIT = 32;
    var TAG_SEQ = 16;
    var TAG_INT = 2;
    var ENCODED_TAG_SEQ = TAG_SEQ | PRIMITIVE_BIT | CLASS_UNIVERSAL << 6;
    var ENCODED_TAG_INT = TAG_INT | CLASS_UNIVERSAL << 6;
    function base64Url(base64) {
      return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function signatureAsBuffer(signature) {
      if (Buffer2.isBuffer(signature)) {
        return signature;
      } else if ("string" === typeof signature) {
        return Buffer2.from(signature, "base64");
      }
      throw new TypeError("ECDSA signature must be a Base64 string or a Buffer");
    }
    function derToJose(signature, alg) {
      signature = signatureAsBuffer(signature);
      var paramBytes = getParamBytesForAlg(alg);
      var maxEncodedParamLength = paramBytes + 1;
      var inputLength = signature.length;
      var offset = 0;
      if (signature[offset++] !== ENCODED_TAG_SEQ) {
        throw new Error('Could not find expected "seq"');
      }
      var seqLength = signature[offset++];
      if (seqLength === (MAX_OCTET | 1)) {
        seqLength = signature[offset++];
      }
      if (inputLength - offset < seqLength) {
        throw new Error('"seq" specified length of "' + seqLength + '", only "' + (inputLength - offset) + '" remaining');
      }
      if (signature[offset++] !== ENCODED_TAG_INT) {
        throw new Error('Could not find expected "int" for "r"');
      }
      var rLength = signature[offset++];
      if (inputLength - offset - 2 < rLength) {
        throw new Error('"r" specified length of "' + rLength + '", only "' + (inputLength - offset - 2) + '" available');
      }
      if (maxEncodedParamLength < rLength) {
        throw new Error('"r" specified length of "' + rLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
      }
      var rOffset = offset;
      offset += rLength;
      if (signature[offset++] !== ENCODED_TAG_INT) {
        throw new Error('Could not find expected "int" for "s"');
      }
      var sLength = signature[offset++];
      if (inputLength - offset !== sLength) {
        throw new Error('"s" specified length of "' + sLength + '", expected "' + (inputLength - offset) + '"');
      }
      if (maxEncodedParamLength < sLength) {
        throw new Error('"s" specified length of "' + sLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
      }
      var sOffset = offset;
      offset += sLength;
      if (offset !== inputLength) {
        throw new Error('Expected to consume entire buffer, but "' + (inputLength - offset) + '" bytes remain');
      }
      var rPadding = paramBytes - rLength, sPadding = paramBytes - sLength;
      var dst = Buffer2.allocUnsafe(rPadding + rLength + sPadding + sLength);
      for (offset = 0; offset < rPadding; ++offset) {
        dst[offset] = 0;
      }
      signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);
      offset = paramBytes;
      for (var o = offset; offset < o + sPadding; ++offset) {
        dst[offset] = 0;
      }
      signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);
      dst = dst.toString("base64");
      dst = base64Url(dst);
      return dst;
    }
    function countPadding(buf, start, stop) {
      var padding = 0;
      while (start + padding < stop && buf[start + padding] === 0) {
        ++padding;
      }
      var needsSign = buf[start + padding] >= MAX_OCTET;
      if (needsSign) {
        --padding;
      }
      return padding;
    }
    function joseToDer(signature, alg) {
      signature = signatureAsBuffer(signature);
      var paramBytes = getParamBytesForAlg(alg);
      var signatureBytes = signature.length;
      if (signatureBytes !== paramBytes * 2) {
        throw new TypeError('"' + alg + '" signatures must be "' + paramBytes * 2 + '" bytes, saw "' + signatureBytes + '"');
      }
      var rPadding = countPadding(signature, 0, paramBytes);
      var sPadding = countPadding(signature, paramBytes, signature.length);
      var rLength = paramBytes - rPadding;
      var sLength = paramBytes - sPadding;
      var rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;
      var shortLength = rsBytes < MAX_OCTET;
      var dst = Buffer2.allocUnsafe((shortLength ? 2 : 3) + rsBytes);
      var offset = 0;
      dst[offset++] = ENCODED_TAG_SEQ;
      if (shortLength) {
        dst[offset++] = rsBytes;
      } else {
        dst[offset++] = MAX_OCTET | 1;
        dst[offset++] = rsBytes & 255;
      }
      dst[offset++] = ENCODED_TAG_INT;
      dst[offset++] = rLength;
      if (rPadding < 0) {
        dst[offset++] = 0;
        offset += signature.copy(dst, offset, 0, paramBytes);
      } else {
        offset += signature.copy(dst, offset, rPadding, paramBytes);
      }
      dst[offset++] = ENCODED_TAG_INT;
      dst[offset++] = sLength;
      if (sPadding < 0) {
        dst[offset++] = 0;
        signature.copy(dst, offset, paramBytes);
      } else {
        signature.copy(dst, offset, paramBytes + sPadding);
      }
      return dst;
    }
    module2.exports = {
      derToJose,
      joseToDer
    };
  }
});

// asset-input/node_modules/buffer-equal-constant-time/index.js
var require_buffer_equal_constant_time = __commonJS({
  "asset-input/node_modules/buffer-equal-constant-time/index.js"(exports2, module2) {
    "use strict";
    var Buffer2 = require("buffer").Buffer;
    var SlowBuffer = require("buffer").SlowBuffer;
    module2.exports = bufferEq;
    function bufferEq(a3, b2) {
      if (!Buffer2.isBuffer(a3) || !Buffer2.isBuffer(b2)) {
        return false;
      }
      if (a3.length !== b2.length) {
        return false;
      }
      var c3 = 0;
      for (var i2 = 0; i2 < a3.length; i2++) {
        c3 |= a3[i2] ^ b2[i2];
      }
      return c3 === 0;
    }
    bufferEq.install = function() {
      Buffer2.prototype.equal = SlowBuffer.prototype.equal = function equal(that) {
        return bufferEq(this, that);
      };
    };
    var origBufEqual = Buffer2.prototype.equal;
    var origSlowBufEqual = SlowBuffer.prototype.equal;
    bufferEq.restore = function() {
      Buffer2.prototype.equal = origBufEqual;
      SlowBuffer.prototype.equal = origSlowBufEqual;
    };
  }
});

// asset-input/node_modules/jwa/index.js
var require_jwa = __commonJS({
  "asset-input/node_modules/jwa/index.js"(exports2, module2) {
    var Buffer2 = require_safe_buffer().Buffer;
    var crypto = require("crypto");
    var formatEcdsa = require_ecdsa_sig_formatter();
    var util = require("util");
    var MSG_INVALID_ALGORITHM = '"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".';
    var MSG_INVALID_SECRET = "secret must be a string or buffer";
    var MSG_INVALID_VERIFIER_KEY = "key must be a string or a buffer";
    var MSG_INVALID_SIGNER_KEY = "key must be a string, a buffer or an object";
    var supportsKeyObjects = typeof crypto.createPublicKey === "function";
    if (supportsKeyObjects) {
      MSG_INVALID_VERIFIER_KEY += " or a KeyObject";
      MSG_INVALID_SECRET += "or a KeyObject";
    }
    function checkIsPublicKey(key) {
      if (Buffer2.isBuffer(key)) {
        return;
      }
      if (typeof key === "string") {
        return;
      }
      if (!supportsKeyObjects) {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key !== "object") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key.type !== "string") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key.asymmetricKeyType !== "string") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
      if (typeof key.export !== "function") {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
      }
    }
    function checkIsPrivateKey(key) {
      if (Buffer2.isBuffer(key)) {
        return;
      }
      if (typeof key === "string") {
        return;
      }
      if (typeof key === "object") {
        return;
      }
      throw typeError(MSG_INVALID_SIGNER_KEY);
    }
    function checkIsSecretKey(key) {
      if (Buffer2.isBuffer(key)) {
        return;
      }
      if (typeof key === "string") {
        return key;
      }
      if (!supportsKeyObjects) {
        throw typeError(MSG_INVALID_SECRET);
      }
      if (typeof key !== "object") {
        throw typeError(MSG_INVALID_SECRET);
      }
      if (key.type !== "secret") {
        throw typeError(MSG_INVALID_SECRET);
      }
      if (typeof key.export !== "function") {
        throw typeError(MSG_INVALID_SECRET);
      }
    }
    function fromBase64(base64) {
      return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function toBase64(base64url) {
      base64url = base64url.toString();
      var padding = 4 - base64url.length % 4;
      if (padding !== 4) {
        for (var i2 = 0; i2 < padding; ++i2) {
          base64url += "=";
        }
      }
      return base64url.replace(/\-/g, "+").replace(/_/g, "/");
    }
    function typeError(template) {
      var args = [].slice.call(arguments, 1);
      var errMsg = util.format.bind(util, template).apply(null, args);
      return new TypeError(errMsg);
    }
    function bufferOrString(obj) {
      return Buffer2.isBuffer(obj) || typeof obj === "string";
    }
    function normalizeInput(thing) {
      if (!bufferOrString(thing))
        thing = JSON.stringify(thing);
      return thing;
    }
    function createHmacSigner(bits) {
      return function sign(thing, secret) {
        checkIsSecretKey(secret);
        thing = normalizeInput(thing);
        var hmac = crypto.createHmac("sha" + bits, secret);
        var sig = (hmac.update(thing), hmac.digest("base64"));
        return fromBase64(sig);
      };
    }
    var bufferEqual;
    var timingSafeEqual = "timingSafeEqual" in crypto ? function timingSafeEqual2(a3, b2) {
      if (a3.byteLength !== b2.byteLength) {
        return false;
      }
      return crypto.timingSafeEqual(a3, b2);
    } : function timingSafeEqual2(a3, b2) {
      if (!bufferEqual) {
        bufferEqual = require_buffer_equal_constant_time();
      }
      return bufferEqual(a3, b2);
    };
    function createHmacVerifier(bits) {
      return function verify(thing, signature, secret) {
        var computedSig = createHmacSigner(bits)(thing, secret);
        return timingSafeEqual(Buffer2.from(signature), Buffer2.from(computedSig));
      };
    }
    function createKeySigner(bits) {
      return function sign(thing, privateKey) {
        checkIsPrivateKey(privateKey);
        thing = normalizeInput(thing);
        var signer = crypto.createSign("RSA-SHA" + bits);
        var sig = (signer.update(thing), signer.sign(privateKey, "base64"));
        return fromBase64(sig);
      };
    }
    function createKeyVerifier(bits) {
      return function verify(thing, signature, publicKey) {
        checkIsPublicKey(publicKey);
        thing = normalizeInput(thing);
        signature = toBase64(signature);
        var verifier = crypto.createVerify("RSA-SHA" + bits);
        verifier.update(thing);
        return verifier.verify(publicKey, signature, "base64");
      };
    }
    function createPSSKeySigner(bits) {
      return function sign(thing, privateKey) {
        checkIsPrivateKey(privateKey);
        thing = normalizeInput(thing);
        var signer = crypto.createSign("RSA-SHA" + bits);
        var sig = (signer.update(thing), signer.sign({
          key: privateKey,
          padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
        }, "base64"));
        return fromBase64(sig);
      };
    }
    function createPSSKeyVerifier(bits) {
      return function verify(thing, signature, publicKey) {
        checkIsPublicKey(publicKey);
        thing = normalizeInput(thing);
        signature = toBase64(signature);
        var verifier = crypto.createVerify("RSA-SHA" + bits);
        verifier.update(thing);
        return verifier.verify({
          key: publicKey,
          padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
        }, signature, "base64");
      };
    }
    function createECDSASigner(bits) {
      var inner = createKeySigner(bits);
      return function sign() {
        var signature = inner.apply(null, arguments);
        signature = formatEcdsa.derToJose(signature, "ES" + bits);
        return signature;
      };
    }
    function createECDSAVerifer(bits) {
      var inner = createKeyVerifier(bits);
      return function verify(thing, signature, publicKey) {
        signature = formatEcdsa.joseToDer(signature, "ES" + bits).toString("base64");
        var result = inner(thing, signature, publicKey);
        return result;
      };
    }
    function createNoneSigner() {
      return function sign() {
        return "";
      };
    }
    function createNoneVerifier() {
      return function verify(thing, signature) {
        return signature === "";
      };
    }
    module2.exports = function jwa(algorithm) {
      var signerFactories = {
        hs: createHmacSigner,
        rs: createKeySigner,
        ps: createPSSKeySigner,
        es: createECDSASigner,
        none: createNoneSigner
      };
      var verifierFactories = {
        hs: createHmacVerifier,
        rs: createKeyVerifier,
        ps: createPSSKeyVerifier,
        es: createECDSAVerifer,
        none: createNoneVerifier
      };
      var match = algorithm.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
      if (!match)
        throw typeError(MSG_INVALID_ALGORITHM, algorithm);
      var algo = (match[1] || match[3]).toLowerCase();
      var bits = match[2];
      return {
        sign: signerFactories[algo](bits),
        verify: verifierFactories[algo](bits)
      };
    };
  }
});

// asset-input/node_modules/jws/lib/tostring.js
var require_tostring = __commonJS({
  "asset-input/node_modules/jws/lib/tostring.js"(exports2, module2) {
    var Buffer2 = require("buffer").Buffer;
    module2.exports = function toString(obj) {
      if (typeof obj === "string")
        return obj;
      if (typeof obj === "number" || Buffer2.isBuffer(obj))
        return obj.toString();
      return JSON.stringify(obj);
    };
  }
});

// asset-input/node_modules/jws/lib/sign-stream.js
var require_sign_stream = __commonJS({
  "asset-input/node_modules/jws/lib/sign-stream.js"(exports2, module2) {
    var Buffer2 = require_safe_buffer().Buffer;
    var DataStream = require_data_stream();
    var jwa = require_jwa();
    var Stream = require("stream");
    var toString = require_tostring();
    var util = require("util");
    function base64url(string, encoding) {
      return Buffer2.from(string, encoding).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    function jwsSecuredInput(header, payload, encoding) {
      encoding = encoding || "utf8";
      var encodedHeader = base64url(toString(header), "binary");
      var encodedPayload = base64url(toString(payload), encoding);
      return util.format("%s.%s", encodedHeader, encodedPayload);
    }
    function jwsSign(opts) {
      var header = opts.header;
      var payload = opts.payload;
      var secretOrKey = opts.secret || opts.privateKey;
      var encoding = opts.encoding;
      var algo = jwa(header.alg);
      var securedInput = jwsSecuredInput(header, payload, encoding);
      var signature = algo.sign(securedInput, secretOrKey);
      return util.format("%s.%s", securedInput, signature);
    }
    function SignStream(opts) {
      var secret = opts.secret;
      secret = secret == null ? opts.privateKey : secret;
      secret = secret == null ? opts.key : secret;
      if (/^hs/i.test(opts.header.alg) === true && secret == null) {
        throw new TypeError("secret must be a string or buffer or a KeyObject");
      }
      var secretStream = new DataStream(secret);
      this.readable = true;
      this.header = opts.header;
      this.encoding = opts.encoding;
      this.secret = this.privateKey = this.key = secretStream;
      this.payload = new DataStream(opts.payload);
      this.secret.once("close", function() {
        if (!this.payload.writable && this.readable)
          this.sign();
      }.bind(this));
      this.payload.once("close", function() {
        if (!this.secret.writable && this.readable)
          this.sign();
      }.bind(this));
    }
    util.inherits(SignStream, Stream);
    SignStream.prototype.sign = function sign() {
      try {
        var signature = jwsSign({
          header: this.header,
          payload: this.payload.buffer,
          secret: this.secret.buffer,
          encoding: this.encoding
        });
        this.emit("done", signature);
        this.emit("data", signature);
        this.emit("end");
        this.readable = false;
        return signature;
      } catch (e2) {
        this.readable = false;
        this.emit("error", e2);
        this.emit("close");
      }
    };
    SignStream.sign = jwsSign;
    module2.exports = SignStream;
  }
});

// asset-input/node_modules/jws/lib/verify-stream.js
var require_verify_stream = __commonJS({
  "asset-input/node_modules/jws/lib/verify-stream.js"(exports2, module2) {
    var Buffer2 = require_safe_buffer().Buffer;
    var DataStream = require_data_stream();
    var jwa = require_jwa();
    var Stream = require("stream");
    var toString = require_tostring();
    var util = require("util");
    var JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
    function isObject(thing) {
      return Object.prototype.toString.call(thing) === "[object Object]";
    }
    function safeJsonParse(thing) {
      if (isObject(thing))
        return thing;
      try {
        return JSON.parse(thing);
      } catch (e2) {
        return void 0;
      }
    }
    function headerFromJWS(jwsSig) {
      var encodedHeader = jwsSig.split(".", 1)[0];
      return safeJsonParse(Buffer2.from(encodedHeader, "base64").toString("binary"));
    }
    function securedInputFromJWS(jwsSig) {
      return jwsSig.split(".", 2).join(".");
    }
    function signatureFromJWS(jwsSig) {
      return jwsSig.split(".")[2];
    }
    function payloadFromJWS(jwsSig, encoding) {
      encoding = encoding || "utf8";
      var payload = jwsSig.split(".")[1];
      return Buffer2.from(payload, "base64").toString(encoding);
    }
    function isValidJws(string) {
      return JWS_REGEX.test(string) && !!headerFromJWS(string);
    }
    function jwsVerify(jwsSig, algorithm, secretOrKey) {
      if (!algorithm) {
        var err = new Error("Missing algorithm parameter for jws.verify");
        err.code = "MISSING_ALGORITHM";
        throw err;
      }
      jwsSig = toString(jwsSig);
      var signature = signatureFromJWS(jwsSig);
      var securedInput = securedInputFromJWS(jwsSig);
      var algo = jwa(algorithm);
      return algo.verify(securedInput, signature, secretOrKey);
    }
    function jwsDecode(jwsSig, opts) {
      opts = opts || {};
      jwsSig = toString(jwsSig);
      if (!isValidJws(jwsSig))
        return null;
      var header = headerFromJWS(jwsSig);
      if (!header)
        return null;
      var payload = payloadFromJWS(jwsSig);
      if (header.typ === "JWT" || opts.json)
        payload = JSON.parse(payload, opts.encoding);
      return {
        header,
        payload,
        signature: signatureFromJWS(jwsSig)
      };
    }
    function VerifyStream(opts) {
      opts = opts || {};
      var secretOrKey = opts.secret;
      secretOrKey = secretOrKey == null ? opts.publicKey : secretOrKey;
      secretOrKey = secretOrKey == null ? opts.key : secretOrKey;
      if (/^hs/i.test(opts.algorithm) === true && secretOrKey == null) {
        throw new TypeError("secret must be a string or buffer or a KeyObject");
      }
      var secretStream = new DataStream(secretOrKey);
      this.readable = true;
      this.algorithm = opts.algorithm;
      this.encoding = opts.encoding;
      this.secret = this.publicKey = this.key = secretStream;
      this.signature = new DataStream(opts.signature);
      this.secret.once("close", function() {
        if (!this.signature.writable && this.readable)
          this.verify();
      }.bind(this));
      this.signature.once("close", function() {
        if (!this.secret.writable && this.readable)
          this.verify();
      }.bind(this));
    }
    util.inherits(VerifyStream, Stream);
    VerifyStream.prototype.verify = function verify() {
      try {
        var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);
        var obj = jwsDecode(this.signature.buffer, this.encoding);
        this.emit("done", valid, obj);
        this.emit("data", valid);
        this.emit("end");
        this.readable = false;
        return valid;
      } catch (e2) {
        this.readable = false;
        this.emit("error", e2);
        this.emit("close");
      }
    };
    VerifyStream.decode = jwsDecode;
    VerifyStream.isValid = isValidJws;
    VerifyStream.verify = jwsVerify;
    module2.exports = VerifyStream;
  }
});

// asset-input/node_modules/jws/index.js
var require_jws = __commonJS({
  "asset-input/node_modules/jws/index.js"(exports2) {
    var SignStream = require_sign_stream();
    var VerifyStream = require_verify_stream();
    var ALGORITHMS = [
      "HS256",
      "HS384",
      "HS512",
      "RS256",
      "RS384",
      "RS512",
      "PS256",
      "PS384",
      "PS512",
      "ES256",
      "ES384",
      "ES512"
    ];
    exports2.ALGORITHMS = ALGORITHMS;
    exports2.sign = SignStream.sign;
    exports2.verify = VerifyStream.verify;
    exports2.decode = VerifyStream.decode;
    exports2.isValid = VerifyStream.isValid;
    exports2.createSign = function createSign(opts) {
      return new SignStream(opts);
    };
    exports2.createVerify = function createVerify(opts) {
      return new VerifyStream(opts);
    };
  }
});

// asset-input/node_modules/jsonwebtoken/decode.js
var require_decode = __commonJS({
  "asset-input/node_modules/jsonwebtoken/decode.js"(exports2, module2) {
    var jws = require_jws();
    module2.exports = function(jwt2, options) {
      options = options || {};
      var decoded = jws.decode(jwt2, options);
      if (!decoded) {
        return null;
      }
      var payload = decoded.payload;
      if (typeof payload === "string") {
        try {
          var obj = JSON.parse(payload);
          if (obj !== null && typeof obj === "object") {
            payload = obj;
          }
        } catch (e2) {
        }
      }
      if (options.complete === true) {
        return {
          header: decoded.header,
          payload,
          signature: decoded.signature
        };
      }
      return payload;
    };
  }
});

// asset-input/node_modules/jsonwebtoken/lib/JsonWebTokenError.js
var require_JsonWebTokenError = __commonJS({
  "asset-input/node_modules/jsonwebtoken/lib/JsonWebTokenError.js"(exports2, module2) {
    var JsonWebTokenError = function(message, error) {
      Error.call(this, message);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
      this.name = "JsonWebTokenError";
      this.message = message;
      if (error) this.inner = error;
    };
    JsonWebTokenError.prototype = Object.create(Error.prototype);
    JsonWebTokenError.prototype.constructor = JsonWebTokenError;
    module2.exports = JsonWebTokenError;
  }
});

// asset-input/node_modules/jsonwebtoken/lib/NotBeforeError.js
var require_NotBeforeError = __commonJS({
  "asset-input/node_modules/jsonwebtoken/lib/NotBeforeError.js"(exports2, module2) {
    var JsonWebTokenError = require_JsonWebTokenError();
    var NotBeforeError = function(message, date) {
      JsonWebTokenError.call(this, message);
      this.name = "NotBeforeError";
      this.date = date;
    };
    NotBeforeError.prototype = Object.create(JsonWebTokenError.prototype);
    NotBeforeError.prototype.constructor = NotBeforeError;
    module2.exports = NotBeforeError;
  }
});

// asset-input/node_modules/jsonwebtoken/lib/TokenExpiredError.js
var require_TokenExpiredError = __commonJS({
  "asset-input/node_modules/jsonwebtoken/lib/TokenExpiredError.js"(exports2, module2) {
    var JsonWebTokenError = require_JsonWebTokenError();
    var TokenExpiredError = function(message, expiredAt) {
      JsonWebTokenError.call(this, message);
      this.name = "TokenExpiredError";
      this.expiredAt = expiredAt;
    };
    TokenExpiredError.prototype = Object.create(JsonWebTokenError.prototype);
    TokenExpiredError.prototype.constructor = TokenExpiredError;
    module2.exports = TokenExpiredError;
  }
});

// asset-input/node_modules/ms/index.js
var require_ms = __commonJS({
  "asset-input/node_modules/ms/index.js"(exports2, module2) {
    var s = 1e3;
    var m2 = s * 60;
    var h2 = m2 * 60;
    var d2 = h2 * 24;
    var w3 = d2 * 7;
    var y2 = d2 * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n3 = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n3 * y2;
        case "weeks":
        case "week":
        case "w":
          return n3 * w3;
        case "days":
        case "day":
        case "d":
          return n3 * d2;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n3 * h2;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n3 * m2;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n3 * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n3;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d2) {
        return Math.round(ms / d2) + "d";
      }
      if (msAbs >= h2) {
        return Math.round(ms / h2) + "h";
      }
      if (msAbs >= m2) {
        return Math.round(ms / m2) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d2) {
        return plural(ms, msAbs, d2, "day");
      }
      if (msAbs >= h2) {
        return plural(ms, msAbs, h2, "hour");
      }
      if (msAbs >= m2) {
        return plural(ms, msAbs, m2, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n3, name) {
      var isPlural = msAbs >= n3 * 1.5;
      return Math.round(ms / n3) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// asset-input/node_modules/jsonwebtoken/lib/timespan.js
var require_timespan = __commonJS({
  "asset-input/node_modules/jsonwebtoken/lib/timespan.js"(exports2, module2) {
    var ms = require_ms();
    module2.exports = function(time, iat) {
      var timestamp = iat || Math.floor(Date.now() / 1e3);
      if (typeof time === "string") {
        var milliseconds = ms(time);
        if (typeof milliseconds === "undefined") {
          return;
        }
        return Math.floor(timestamp + milliseconds / 1e3);
      } else if (typeof time === "number") {
        return timestamp + time;
      } else {
        return;
      }
    };
  }
});

// asset-input/node_modules/semver/internal/constants.js
var require_constants = __commonJS({
  "asset-input/node_modules/semver/internal/constants.js"(exports2, module2) {
    "use strict";
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
    9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
    var RELEASE_TYPES = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ];
    module2.exports = {
      MAX_LENGTH,
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_SAFE_INTEGER,
      RELEASE_TYPES,
      SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };
  }
});

// asset-input/node_modules/semver/internal/debug.js
var require_debug = __commonJS({
  "asset-input/node_modules/semver/internal/debug.js"(exports2, module2) {
    "use strict";
    var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module2.exports = debug;
  }
});

// asset-input/node_modules/semver/internal/re.js
var require_re = __commonJS({
  "asset-input/node_modules/semver/internal/re.js"(exports2, module2) {
    "use strict";
    var {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = require_constants();
    var debug = require_debug();
    exports2 = module2.exports = {};
    var re = exports2.re = [];
    var safeRe = exports2.safeRe = [];
    var src = exports2.src = [];
    var safeSrc = exports2.safeSrc = [];
    var t4 = exports2.t = {};
    var R2 = 0;
    var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    var safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    var makeSafeRegex = (value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    };
    var createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R2++;
      debug(name, index, value);
      t4[name] = index;
      src[index] = value;
      safeSrc[index] = safe;
      re[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t4.NUMERICIDENTIFIER]})\\.(${src[t4.NUMERICIDENTIFIER]})\\.(${src[t4.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t4.NUMERICIDENTIFIERLOOSE]})\\.(${src[t4.NUMERICIDENTIFIERLOOSE]})\\.(${src[t4.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t4.NONNUMERICIDENTIFIER]}|${src[t4.NUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t4.NONNUMERICIDENTIFIER]}|${src[t4.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASE", `(?:-(${src[t4.PRERELEASEIDENTIFIER]}(?:\\.${src[t4.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t4.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t4.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t4.BUILDIDENTIFIER]}(?:\\.${src[t4.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t4.MAINVERSION]}${src[t4.PRERELEASE]}?${src[t4.BUILD]}?`);
    createToken("FULL", `^${src[t4.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t4.MAINVERSIONLOOSE]}${src[t4.PRERELEASELOOSE]}?${src[t4.BUILD]}?`);
    createToken("LOOSE", `^${src[t4.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t4.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t4.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t4.XRANGEIDENTIFIER]})(?:\\.(${src[t4.XRANGEIDENTIFIER]})(?:\\.(${src[t4.XRANGEIDENTIFIER]})(?:${src[t4.PRERELEASE]})?${src[t4.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t4.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t4.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t4.XRANGEIDENTIFIERLOOSE]})(?:${src[t4.PRERELEASELOOSE]})?${src[t4.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t4.GTLT]}\\s*${src[t4.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t4.GTLT]}\\s*${src[t4.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    createToken("COERCE", `${src[t4.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src[t4.COERCEPLAIN] + `(?:${src[t4.PRERELEASE]})?(?:${src[t4.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t4.COERCE], true);
    createToken("COERCERTLFULL", src[t4.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t4.LONETILDE]}\\s+`, true);
    exports2.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t4.LONETILDE]}${src[t4.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t4.LONETILDE]}${src[t4.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t4.LONECARET]}\\s+`, true);
    exports2.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t4.LONECARET]}${src[t4.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t4.LONECARET]}${src[t4.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t4.GTLT]}\\s*(${src[t4.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t4.GTLT]}\\s*(${src[t4.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t4.GTLT]}\\s*(${src[t4.LOOSEPLAIN]}|${src[t4.XRANGEPLAIN]})`, true);
    exports2.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t4.XRANGEPLAIN]})\\s+-\\s+(${src[t4.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t4.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t4.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});

// asset-input/node_modules/semver/internal/parse-options.js
var require_parse_options = __commonJS({
  "asset-input/node_modules/semver/internal/parse-options.js"(exports2, module2) {
    "use strict";
    var looseOption = Object.freeze({ loose: true });
    var emptyOpts = Object.freeze({});
    var parseOptions = (options) => {
      if (!options) {
        return emptyOpts;
      }
      if (typeof options !== "object") {
        return looseOption;
      }
      return options;
    };
    module2.exports = parseOptions;
  }
});

// asset-input/node_modules/semver/internal/identifiers.js
var require_identifiers = __commonJS({
  "asset-input/node_modules/semver/internal/identifiers.js"(exports2, module2) {
    "use strict";
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = (a3, b2) => {
      if (typeof a3 === "number" && typeof b2 === "number") {
        return a3 === b2 ? 0 : a3 < b2 ? -1 : 1;
      }
      const anum = numeric.test(a3);
      const bnum = numeric.test(b2);
      if (anum && bnum) {
        a3 = +a3;
        b2 = +b2;
      }
      return a3 === b2 ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a3 < b2 ? -1 : 1;
    };
    var rcompareIdentifiers = (a3, b2) => compareIdentifiers(b2, a3);
    module2.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});

// asset-input/node_modules/semver/classes/semver.js
var require_semver = __commonJS({
  "asset-input/node_modules/semver/classes/semver.js"(exports2, module2) {
    "use strict";
    var debug = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
    var { safeRe: re, t: t4 } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var SemVer = class _SemVer {
      constructor(version, options) {
        options = parseOptions(options);
        if (version instanceof _SemVer) {
          if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
            return version;
          } else {
            version = version.version;
          }
        } else if (typeof version !== "string") {
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug("SemVer", version, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m2 = version.trim().match(options.loose ? re[t4.LOOSE] : re[t4.FULL]);
        if (!m2) {
          throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        this.major = +m2[1];
        this.minor = +m2[2];
        this.patch = +m2[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m2[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m2[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m2[5] ? m2[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof _SemVer)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new _SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.major < other.major) {
          return -1;
        }
        if (this.major > other.major) {
          return 1;
        }
        if (this.minor < other.minor) {
          return -1;
        }
        if (this.minor > other.minor) {
          return 1;
        }
        if (this.patch < other.patch) {
          return -1;
        }
        if (this.patch > other.patch) {
          return 1;
        }
        return 0;
      }
      comparePre(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i2 = 0;
        do {
          const a3 = this.prerelease[i2];
          const b2 = other.prerelease[i2];
          debug("prerelease compare", i2, a3, b2);
          if (a3 === void 0 && b2 === void 0) {
            return 0;
          } else if (b2 === void 0) {
            return 1;
          } else if (a3 === void 0) {
            return -1;
          } else if (a3 === b2) {
            continue;
          } else {
            return compareIdentifiers(a3, b2);
          }
        } while (++i2);
      }
      compareBuild(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        let i2 = 0;
        do {
          const a3 = this.build[i2];
          const b2 = other.build[i2];
          debug("build compare", i2, a3, b2);
          if (a3 === void 0 && b2 === void 0) {
            return 0;
          } else if (b2 === void 0) {
            return 1;
          } else if (a3 === void 0) {
            return -1;
          } else if (a3 === b2) {
            continue;
          } else {
            return compareIdentifiers(a3, b2);
          }
        } while (++i2);
      }
      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc(release, identifier, identifierBase) {
        if (release.startsWith("pre")) {
          if (!identifier && identifierBase === false) {
            throw new Error("invalid increment argument: identifier is empty");
          }
          if (identifier) {
            const match = `-${identifier}`.match(this.options.loose ? re[t4.PRERELEASELOOSE] : re[t4.PRERELEASE]);
            if (!match || match[1] !== identifier) {
              throw new Error(`invalid identifier: ${identifier}`);
            }
          }
        }
        switch (release) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier, identifierBase);
            this.inc("pre", identifier, identifierBase);
            break;
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier, identifierBase);
            }
            this.inc("pre", identifier, identifierBase);
            break;
          case "release":
            if (this.prerelease.length === 0) {
              throw new Error(`version ${this.raw} is not a prerelease`);
            }
            this.prerelease.length = 0;
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          case "pre": {
            const base = Number(identifierBase) ? 1 : 0;
            if (this.prerelease.length === 0) {
              this.prerelease = [base];
            } else {
              let i2 = this.prerelease.length;
              while (--i2 >= 0) {
                if (typeof this.prerelease[i2] === "number") {
                  this.prerelease[i2]++;
                  i2 = -2;
                }
              }
              if (i2 === -1) {
                if (identifier === this.prerelease.join(".") && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(base);
              }
            }
            if (identifier) {
              let prerelease = [identifier, base];
              if (identifierBase === false) {
                prerelease = [identifier];
              }
              if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = prerelease;
                }
              } else {
                this.prerelease = prerelease;
              }
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
          this.raw += `+${this.build.join(".")}`;
        }
        return this;
      }
    };
    module2.exports = SemVer;
  }
});

// asset-input/node_modules/semver/functions/parse.js
var require_parse = __commonJS({
  "asset-input/node_modules/semver/functions/parse.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var parse = (version, options, throwErrors = false) => {
      if (version instanceof SemVer) {
        return version;
      }
      try {
        return new SemVer(version, options);
      } catch (er) {
        if (!throwErrors) {
          return null;
        }
        throw er;
      }
    };
    module2.exports = parse;
  }
});

// asset-input/node_modules/semver/functions/valid.js
var require_valid = __commonJS({
  "asset-input/node_modules/semver/functions/valid.js"(exports2, module2) {
    "use strict";
    var parse = require_parse();
    var valid = (version, options) => {
      const v2 = parse(version, options);
      return v2 ? v2.version : null;
    };
    module2.exports = valid;
  }
});

// asset-input/node_modules/semver/functions/clean.js
var require_clean = __commonJS({
  "asset-input/node_modules/semver/functions/clean.js"(exports2, module2) {
    "use strict";
    var parse = require_parse();
    var clean = (version, options) => {
      const s = parse(version.trim().replace(/^[=v]+/, ""), options);
      return s ? s.version : null;
    };
    module2.exports = clean;
  }
});

// asset-input/node_modules/semver/functions/inc.js
var require_inc = __commonJS({
  "asset-input/node_modules/semver/functions/inc.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var inc = (version, release, options, identifier, identifierBase) => {
      if (typeof options === "string") {
        identifierBase = identifier;
        identifier = options;
        options = void 0;
      }
      try {
        return new SemVer(
          version instanceof SemVer ? version.version : version,
          options
        ).inc(release, identifier, identifierBase).version;
      } catch (er) {
        return null;
      }
    };
    module2.exports = inc;
  }
});

// asset-input/node_modules/semver/functions/diff.js
var require_diff = __commonJS({
  "asset-input/node_modules/semver/functions/diff.js"(exports2, module2) {
    "use strict";
    var parse = require_parse();
    var diff = (version1, version2) => {
      const v1 = parse(version1, null, true);
      const v2 = parse(version2, null, true);
      const comparison = v1.compare(v2);
      if (comparison === 0) {
        return null;
      }
      const v1Higher = comparison > 0;
      const highVersion = v1Higher ? v1 : v2;
      const lowVersion = v1Higher ? v2 : v1;
      const highHasPre = !!highVersion.prerelease.length;
      const lowHasPre = !!lowVersion.prerelease.length;
      if (lowHasPre && !highHasPre) {
        if (!lowVersion.patch && !lowVersion.minor) {
          return "major";
        }
        if (lowVersion.compareMain(highVersion) === 0) {
          if (lowVersion.minor && !lowVersion.patch) {
            return "minor";
          }
          return "patch";
        }
      }
      const prefix = highHasPre ? "pre" : "";
      if (v1.major !== v2.major) {
        return prefix + "major";
      }
      if (v1.minor !== v2.minor) {
        return prefix + "minor";
      }
      if (v1.patch !== v2.patch) {
        return prefix + "patch";
      }
      return "prerelease";
    };
    module2.exports = diff;
  }
});

// asset-input/node_modules/semver/functions/major.js
var require_major = __commonJS({
  "asset-input/node_modules/semver/functions/major.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var major = (a3, loose) => new SemVer(a3, loose).major;
    module2.exports = major;
  }
});

// asset-input/node_modules/semver/functions/minor.js
var require_minor = __commonJS({
  "asset-input/node_modules/semver/functions/minor.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var minor = (a3, loose) => new SemVer(a3, loose).minor;
    module2.exports = minor;
  }
});

// asset-input/node_modules/semver/functions/patch.js
var require_patch = __commonJS({
  "asset-input/node_modules/semver/functions/patch.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var patch = (a3, loose) => new SemVer(a3, loose).patch;
    module2.exports = patch;
  }
});

// asset-input/node_modules/semver/functions/prerelease.js
var require_prerelease = __commonJS({
  "asset-input/node_modules/semver/functions/prerelease.js"(exports2, module2) {
    "use strict";
    var parse = require_parse();
    var prerelease = (version, options) => {
      const parsed = parse(version, options);
      return parsed && parsed.prerelease.length ? parsed.prerelease : null;
    };
    module2.exports = prerelease;
  }
});

// asset-input/node_modules/semver/functions/compare.js
var require_compare = __commonJS({
  "asset-input/node_modules/semver/functions/compare.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var compare = (a3, b2, loose) => new SemVer(a3, loose).compare(new SemVer(b2, loose));
    module2.exports = compare;
  }
});

// asset-input/node_modules/semver/functions/rcompare.js
var require_rcompare = __commonJS({
  "asset-input/node_modules/semver/functions/rcompare.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var rcompare = (a3, b2, loose) => compare(b2, a3, loose);
    module2.exports = rcompare;
  }
});

// asset-input/node_modules/semver/functions/compare-loose.js
var require_compare_loose = __commonJS({
  "asset-input/node_modules/semver/functions/compare-loose.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var compareLoose = (a3, b2) => compare(a3, b2, true);
    module2.exports = compareLoose;
  }
});

// asset-input/node_modules/semver/functions/compare-build.js
var require_compare_build = __commonJS({
  "asset-input/node_modules/semver/functions/compare-build.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var compareBuild = (a3, b2, loose) => {
      const versionA = new SemVer(a3, loose);
      const versionB = new SemVer(b2, loose);
      return versionA.compare(versionB) || versionA.compareBuild(versionB);
    };
    module2.exports = compareBuild;
  }
});

// asset-input/node_modules/semver/functions/sort.js
var require_sort = __commonJS({
  "asset-input/node_modules/semver/functions/sort.js"(exports2, module2) {
    "use strict";
    var compareBuild = require_compare_build();
    var sort = (list, loose) => list.sort((a3, b2) => compareBuild(a3, b2, loose));
    module2.exports = sort;
  }
});

// asset-input/node_modules/semver/functions/rsort.js
var require_rsort = __commonJS({
  "asset-input/node_modules/semver/functions/rsort.js"(exports2, module2) {
    "use strict";
    var compareBuild = require_compare_build();
    var rsort = (list, loose) => list.sort((a3, b2) => compareBuild(b2, a3, loose));
    module2.exports = rsort;
  }
});

// asset-input/node_modules/semver/functions/gt.js
var require_gt = __commonJS({
  "asset-input/node_modules/semver/functions/gt.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var gt2 = (a3, b2, loose) => compare(a3, b2, loose) > 0;
    module2.exports = gt2;
  }
});

// asset-input/node_modules/semver/functions/lt.js
var require_lt = __commonJS({
  "asset-input/node_modules/semver/functions/lt.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var lt2 = (a3, b2, loose) => compare(a3, b2, loose) < 0;
    module2.exports = lt2;
  }
});

// asset-input/node_modules/semver/functions/eq.js
var require_eq = __commonJS({
  "asset-input/node_modules/semver/functions/eq.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var eq = (a3, b2, loose) => compare(a3, b2, loose) === 0;
    module2.exports = eq;
  }
});

// asset-input/node_modules/semver/functions/neq.js
var require_neq = __commonJS({
  "asset-input/node_modules/semver/functions/neq.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var neq = (a3, b2, loose) => compare(a3, b2, loose) !== 0;
    module2.exports = neq;
  }
});

// asset-input/node_modules/semver/functions/gte.js
var require_gte = __commonJS({
  "asset-input/node_modules/semver/functions/gte.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var gte = (a3, b2, loose) => compare(a3, b2, loose) >= 0;
    module2.exports = gte;
  }
});

// asset-input/node_modules/semver/functions/lte.js
var require_lte = __commonJS({
  "asset-input/node_modules/semver/functions/lte.js"(exports2, module2) {
    "use strict";
    var compare = require_compare();
    var lte = (a3, b2, loose) => compare(a3, b2, loose) <= 0;
    module2.exports = lte;
  }
});

// asset-input/node_modules/semver/functions/cmp.js
var require_cmp = __commonJS({
  "asset-input/node_modules/semver/functions/cmp.js"(exports2, module2) {
    "use strict";
    var eq = require_eq();
    var neq = require_neq();
    var gt2 = require_gt();
    var gte = require_gte();
    var lt2 = require_lt();
    var lte = require_lte();
    var cmp = (a3, op, b2, loose) => {
      switch (op) {
        case "===":
          if (typeof a3 === "object") {
            a3 = a3.version;
          }
          if (typeof b2 === "object") {
            b2 = b2.version;
          }
          return a3 === b2;
        case "!==":
          if (typeof a3 === "object") {
            a3 = a3.version;
          }
          if (typeof b2 === "object") {
            b2 = b2.version;
          }
          return a3 !== b2;
        case "":
        case "=":
        case "==":
          return eq(a3, b2, loose);
        case "!=":
          return neq(a3, b2, loose);
        case ">":
          return gt2(a3, b2, loose);
        case ">=":
          return gte(a3, b2, loose);
        case "<":
          return lt2(a3, b2, loose);
        case "<=":
          return lte(a3, b2, loose);
        default:
          throw new TypeError(`Invalid operator: ${op}`);
      }
    };
    module2.exports = cmp;
  }
});

// asset-input/node_modules/semver/functions/coerce.js
var require_coerce = __commonJS({
  "asset-input/node_modules/semver/functions/coerce.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var parse = require_parse();
    var { safeRe: re, t: t4 } = require_re();
    var coerce = (version, options) => {
      if (version instanceof SemVer) {
        return version;
      }
      if (typeof version === "number") {
        version = String(version);
      }
      if (typeof version !== "string") {
        return null;
      }
      options = options || {};
      let match = null;
      if (!options.rtl) {
        match = version.match(options.includePrerelease ? re[t4.COERCEFULL] : re[t4.COERCE]);
      } else {
        const coerceRtlRegex = options.includePrerelease ? re[t4.COERCERTLFULL] : re[t4.COERCERTL];
        let next;
        while ((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)) {
          if (!match || next.index + next[0].length !== match.index + match[0].length) {
            match = next;
          }
          coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
        }
        coerceRtlRegex.lastIndex = -1;
      }
      if (match === null) {
        return null;
      }
      const major = match[2];
      const minor = match[3] || "0";
      const patch = match[4] || "0";
      const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : "";
      const build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
      return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
    };
    module2.exports = coerce;
  }
});

// asset-input/node_modules/semver/internal/lrucache.js
var require_lrucache = __commonJS({
  "asset-input/node_modules/semver/internal/lrucache.js"(exports2, module2) {
    "use strict";
    var LRUCache = class {
      constructor() {
        this.max = 1e3;
        this.map = /* @__PURE__ */ new Map();
      }
      get(key) {
        const value = this.map.get(key);
        if (value === void 0) {
          return void 0;
        } else {
          this.map.delete(key);
          this.map.set(key, value);
          return value;
        }
      }
      delete(key) {
        return this.map.delete(key);
      }
      set(key, value) {
        const deleted = this.delete(key);
        if (!deleted && value !== void 0) {
          if (this.map.size >= this.max) {
            const firstKey = this.map.keys().next().value;
            this.delete(firstKey);
          }
          this.map.set(key, value);
        }
        return this;
      }
    };
    module2.exports = LRUCache;
  }
});

// asset-input/node_modules/semver/classes/range.js
var require_range = __commonJS({
  "asset-input/node_modules/semver/classes/range.js"(exports2, module2) {
    "use strict";
    var SPACE_CHARACTERS = /\s+/g;
    var Range = class _Range {
      constructor(range, options) {
        options = parseOptions(options);
        if (range instanceof _Range) {
          if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
            return range;
          } else {
            return new _Range(range.raw, options);
          }
        }
        if (range instanceof Comparator) {
          this.raw = range.value;
          this.set = [[range]];
          this.formatted = void 0;
          return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        this.raw = range.trim().replace(SPACE_CHARACTERS, " ");
        this.set = this.raw.split("||").map((r2) => this.parseRange(r2.trim())).filter((c3) => c3.length);
        if (!this.set.length) {
          throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        if (this.set.length > 1) {
          const first = this.set[0];
          this.set = this.set.filter((c3) => !isNullSet(c3[0]));
          if (this.set.length === 0) {
            this.set = [first];
          } else if (this.set.length > 1) {
            for (const c3 of this.set) {
              if (c3.length === 1 && isAny(c3[0])) {
                this.set = [c3];
                break;
              }
            }
          }
        }
        this.formatted = void 0;
      }
      get range() {
        if (this.formatted === void 0) {
          this.formatted = "";
          for (let i2 = 0; i2 < this.set.length; i2++) {
            if (i2 > 0) {
              this.formatted += "||";
            }
            const comps = this.set[i2];
            for (let k2 = 0; k2 < comps.length; k2++) {
              if (k2 > 0) {
                this.formatted += " ";
              }
              this.formatted += comps[k2].toString().trim();
            }
          }
        }
        return this.formatted;
      }
      format() {
        return this.range;
      }
      toString() {
        return this.range;
      }
      parseRange(range) {
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ":" + range;
        const cached = cache.get(memoKey);
        if (cached) {
          return cached;
        }
        const loose = this.options.loose;
        const hr = loose ? re[t4.HYPHENRANGELOOSE] : re[t4.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug("hyphen replace", range);
        range = range.replace(re[t4.COMPARATORTRIM], comparatorTrimReplace);
        debug("comparator trim", range);
        range = range.replace(re[t4.TILDETRIM], tildeTrimReplace);
        debug("tilde trim", range);
        range = range.replace(re[t4.CARETTRIM], caretTrimReplace);
        debug("caret trim", range);
        let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
        if (loose) {
          rangeList = rangeList.filter((comp) => {
            debug("loose invalid filter", comp, this.options);
            return !!comp.match(re[t4.COMPARATORLOOSE]);
          });
        }
        debug("range list", rangeList);
        const rangeMap = /* @__PURE__ */ new Map();
        const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
        for (const comp of comparators) {
          if (isNullSet(comp)) {
            return [comp];
          }
          rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has("")) {
          rangeMap.delete("");
        }
        const result = [...rangeMap.values()];
        cache.set(memoKey, result);
        return result;
      }
      intersects(range, options) {
        if (!(range instanceof _Range)) {
          throw new TypeError("a Range is required");
        }
        return this.set.some((thisComparators) => {
          return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => {
            return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options);
              });
            });
          });
        });
      }
      // if ANY of the sets match ALL of its comparators, then pass
      test(version) {
        if (!version) {
          return false;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        for (let i2 = 0; i2 < this.set.length; i2++) {
          if (testSet(this.set[i2], version, this.options)) {
            return true;
          }
        }
        return false;
      }
    };
    module2.exports = Range;
    var LRU = require_lrucache();
    var cache = new LRU();
    var parseOptions = require_parse_options();
    var Comparator = require_comparator();
    var debug = require_debug();
    var SemVer = require_semver();
    var {
      safeRe: re,
      t: t4,
      comparatorTrimReplace,
      tildeTrimReplace,
      caretTrimReplace
    } = require_re();
    var { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants();
    var isNullSet = (c3) => c3.value === "<0.0.0-0";
    var isAny = (c3) => c3.value === "";
    var isSatisfiable = (comparators, options) => {
      let result = true;
      const remainingComparators = comparators.slice();
      let testComparator = remainingComparators.pop();
      while (result && remainingComparators.length) {
        result = remainingComparators.every((otherComparator) => {
          return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
      }
      return result;
    };
    var parseComparator = (comp, options) => {
      comp = comp.replace(re[t4.BUILD], "");
      debug("comp", comp, options);
      comp = replaceCarets(comp, options);
      debug("caret", comp);
      comp = replaceTildes(comp, options);
      debug("tildes", comp);
      comp = replaceXRanges(comp, options);
      debug("xrange", comp);
      comp = replaceStars(comp, options);
      debug("stars", comp);
      return comp;
    };
    var isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
    var replaceTildes = (comp, options) => {
      return comp.trim().split(/\s+/).map((c3) => replaceTilde(c3, options)).join(" ");
    };
    var replaceTilde = (comp, options) => {
      const r2 = options.loose ? re[t4.TILDELOOSE] : re[t4.TILDE];
      return comp.replace(r2, (_2, M2, m2, p2, pr) => {
        debug("tilde", comp, _2, M2, m2, p2, pr);
        let ret;
        if (isX(M2)) {
          ret = "";
        } else if (isX(m2)) {
          ret = `>=${M2}.0.0 <${+M2 + 1}.0.0-0`;
        } else if (isX(p2)) {
          ret = `>=${M2}.${m2}.0 <${M2}.${+m2 + 1}.0-0`;
        } else if (pr) {
          debug("replaceTilde pr", pr);
          ret = `>=${M2}.${m2}.${p2}-${pr} <${M2}.${+m2 + 1}.0-0`;
        } else {
          ret = `>=${M2}.${m2}.${p2} <${M2}.${+m2 + 1}.0-0`;
        }
        debug("tilde return", ret);
        return ret;
      });
    };
    var replaceCarets = (comp, options) => {
      return comp.trim().split(/\s+/).map((c3) => replaceCaret(c3, options)).join(" ");
    };
    var replaceCaret = (comp, options) => {
      debug("caret", comp, options);
      const r2 = options.loose ? re[t4.CARETLOOSE] : re[t4.CARET];
      const z2 = options.includePrerelease ? "-0" : "";
      return comp.replace(r2, (_2, M2, m2, p2, pr) => {
        debug("caret", comp, _2, M2, m2, p2, pr);
        let ret;
        if (isX(M2)) {
          ret = "";
        } else if (isX(m2)) {
          ret = `>=${M2}.0.0${z2} <${+M2 + 1}.0.0-0`;
        } else if (isX(p2)) {
          if (M2 === "0") {
            ret = `>=${M2}.${m2}.0${z2} <${M2}.${+m2 + 1}.0-0`;
          } else {
            ret = `>=${M2}.${m2}.0${z2} <${+M2 + 1}.0.0-0`;
          }
        } else if (pr) {
          debug("replaceCaret pr", pr);
          if (M2 === "0") {
            if (m2 === "0") {
              ret = `>=${M2}.${m2}.${p2}-${pr} <${M2}.${m2}.${+p2 + 1}-0`;
            } else {
              ret = `>=${M2}.${m2}.${p2}-${pr} <${M2}.${+m2 + 1}.0-0`;
            }
          } else {
            ret = `>=${M2}.${m2}.${p2}-${pr} <${+M2 + 1}.0.0-0`;
          }
        } else {
          debug("no pr");
          if (M2 === "0") {
            if (m2 === "0") {
              ret = `>=${M2}.${m2}.${p2}${z2} <${M2}.${m2}.${+p2 + 1}-0`;
            } else {
              ret = `>=${M2}.${m2}.${p2}${z2} <${M2}.${+m2 + 1}.0-0`;
            }
          } else {
            ret = `>=${M2}.${m2}.${p2} <${+M2 + 1}.0.0-0`;
          }
        }
        debug("caret return", ret);
        return ret;
      });
    };
    var replaceXRanges = (comp, options) => {
      debug("replaceXRanges", comp, options);
      return comp.split(/\s+/).map((c3) => replaceXRange(c3, options)).join(" ");
    };
    var replaceXRange = (comp, options) => {
      comp = comp.trim();
      const r2 = options.loose ? re[t4.XRANGELOOSE] : re[t4.XRANGE];
      return comp.replace(r2, (ret, gtlt, M2, m2, p2, pr) => {
        debug("xRange", comp, ret, gtlt, M2, m2, p2, pr);
        const xM = isX(M2);
        const xm = xM || isX(m2);
        const xp = xm || isX(p2);
        const anyX = xp;
        if (gtlt === "=" && anyX) {
          gtlt = "";
        }
        pr = options.includePrerelease ? "-0" : "";
        if (xM) {
          if (gtlt === ">" || gtlt === "<") {
            ret = "<0.0.0-0";
          } else {
            ret = "*";
          }
        } else if (gtlt && anyX) {
          if (xm) {
            m2 = 0;
          }
          p2 = 0;
          if (gtlt === ">") {
            gtlt = ">=";
            if (xm) {
              M2 = +M2 + 1;
              m2 = 0;
              p2 = 0;
            } else {
              m2 = +m2 + 1;
              p2 = 0;
            }
          } else if (gtlt === "<=") {
            gtlt = "<";
            if (xm) {
              M2 = +M2 + 1;
            } else {
              m2 = +m2 + 1;
            }
          }
          if (gtlt === "<") {
            pr = "-0";
          }
          ret = `${gtlt + M2}.${m2}.${p2}${pr}`;
        } else if (xm) {
          ret = `>=${M2}.0.0${pr} <${+M2 + 1}.0.0-0`;
        } else if (xp) {
          ret = `>=${M2}.${m2}.0${pr} <${M2}.${+m2 + 1}.0-0`;
        }
        debug("xRange return", ret);
        return ret;
      });
    };
    var replaceStars = (comp, options) => {
      debug("replaceStars", comp, options);
      return comp.trim().replace(re[t4.STAR], "");
    };
    var replaceGTE0 = (comp, options) => {
      debug("replaceGTE0", comp, options);
      return comp.trim().replace(re[options.includePrerelease ? t4.GTE0PRE : t4.GTE0], "");
    };
    var hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) => {
      if (isX(fM)) {
        from = "";
      } else if (isX(fm)) {
        from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
      } else if (isX(fp)) {
        from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
      } else if (fpr) {
        from = `>=${from}`;
      } else {
        from = `>=${from}${incPr ? "-0" : ""}`;
      }
      if (isX(tM)) {
        to = "";
      } else if (isX(tm)) {
        to = `<${+tM + 1}.0.0-0`;
      } else if (isX(tp)) {
        to = `<${tM}.${+tm + 1}.0-0`;
      } else if (tpr) {
        to = `<=${tM}.${tm}.${tp}-${tpr}`;
      } else if (incPr) {
        to = `<${tM}.${tm}.${+tp + 1}-0`;
      } else {
        to = `<=${to}`;
      }
      return `${from} ${to}`.trim();
    };
    var testSet = (set, version, options) => {
      for (let i2 = 0; i2 < set.length; i2++) {
        if (!set[i2].test(version)) {
          return false;
        }
      }
      if (version.prerelease.length && !options.includePrerelease) {
        for (let i2 = 0; i2 < set.length; i2++) {
          debug(set[i2].semver);
          if (set[i2].semver === Comparator.ANY) {
            continue;
          }
          if (set[i2].semver.prerelease.length > 0) {
            const allowed = set[i2].semver;
            if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
              return true;
            }
          }
        }
        return false;
      }
      return true;
    };
  }
});

// asset-input/node_modules/semver/classes/comparator.js
var require_comparator = __commonJS({
  "asset-input/node_modules/semver/classes/comparator.js"(exports2, module2) {
    "use strict";
    var ANY = Symbol("SemVer ANY");
    var Comparator = class _Comparator {
      static get ANY() {
        return ANY;
      }
      constructor(comp, options) {
        options = parseOptions(options);
        if (comp instanceof _Comparator) {
          if (comp.loose === !!options.loose) {
            return comp;
          } else {
            comp = comp.value;
          }
        }
        comp = comp.trim().split(/\s+/).join(" ");
        debug("comparator", comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
          this.value = "";
        } else {
          this.value = this.operator + this.semver.version;
        }
        debug("comp", this);
      }
      parse(comp) {
        const r2 = this.options.loose ? re[t4.COMPARATORLOOSE] : re[t4.COMPARATOR];
        const m2 = comp.match(r2);
        if (!m2) {
          throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m2[1] !== void 0 ? m2[1] : "";
        if (this.operator === "=") {
          this.operator = "";
        }
        if (!m2[2]) {
          this.semver = ANY;
        } else {
          this.semver = new SemVer(m2[2], this.options.loose);
        }
      }
      toString() {
        return this.value;
      }
      test(version) {
        debug("Comparator.test", version, this.options.loose);
        if (this.semver === ANY || version === ANY) {
          return true;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        return cmp(version, this.operator, this.semver, this.options);
      }
      intersects(comp, options) {
        if (!(comp instanceof _Comparator)) {
          throw new TypeError("a Comparator is required");
        }
        if (this.operator === "") {
          if (this.value === "") {
            return true;
          }
          return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === "") {
          if (comp.value === "") {
            return true;
          }
          return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
          return false;
        }
        if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
          return false;
        }
        if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
          return true;
        }
        if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
          return true;
        }
        if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
          return true;
        }
        if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
          return true;
        }
        if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
          return true;
        }
        return false;
      }
    };
    module2.exports = Comparator;
    var parseOptions = require_parse_options();
    var { safeRe: re, t: t4 } = require_re();
    var cmp = require_cmp();
    var debug = require_debug();
    var SemVer = require_semver();
    var Range = require_range();
  }
});

// asset-input/node_modules/semver/functions/satisfies.js
var require_satisfies = __commonJS({
  "asset-input/node_modules/semver/functions/satisfies.js"(exports2, module2) {
    "use strict";
    var Range = require_range();
    var satisfies = (version, range, options) => {
      try {
        range = new Range(range, options);
      } catch (er) {
        return false;
      }
      return range.test(version);
    };
    module2.exports = satisfies;
  }
});

// asset-input/node_modules/semver/ranges/to-comparators.js
var require_to_comparators = __commonJS({
  "asset-input/node_modules/semver/ranges/to-comparators.js"(exports2, module2) {
    "use strict";
    var Range = require_range();
    var toComparators = (range, options) => new Range(range, options).set.map((comp) => comp.map((c3) => c3.value).join(" ").trim().split(" "));
    module2.exports = toComparators;
  }
});

// asset-input/node_modules/semver/ranges/max-satisfying.js
var require_max_satisfying = __commonJS({
  "asset-input/node_modules/semver/ranges/max-satisfying.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var Range = require_range();
    var maxSatisfying = (versions, range, options) => {
      let max = null;
      let maxSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v2) => {
        if (rangeObj.test(v2)) {
          if (!max || maxSV.compare(v2) === -1) {
            max = v2;
            maxSV = new SemVer(max, options);
          }
        }
      });
      return max;
    };
    module2.exports = maxSatisfying;
  }
});

// asset-input/node_modules/semver/ranges/min-satisfying.js
var require_min_satisfying = __commonJS({
  "asset-input/node_modules/semver/ranges/min-satisfying.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var Range = require_range();
    var minSatisfying = (versions, range, options) => {
      let min = null;
      let minSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v2) => {
        if (rangeObj.test(v2)) {
          if (!min || minSV.compare(v2) === 1) {
            min = v2;
            minSV = new SemVer(min, options);
          }
        }
      });
      return min;
    };
    module2.exports = minSatisfying;
  }
});

// asset-input/node_modules/semver/ranges/min-version.js
var require_min_version = __commonJS({
  "asset-input/node_modules/semver/ranges/min-version.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var Range = require_range();
    var gt2 = require_gt();
    var minVersion = (range, loose) => {
      range = new Range(range, loose);
      let minver = new SemVer("0.0.0");
      if (range.test(minver)) {
        return minver;
      }
      minver = new SemVer("0.0.0-0");
      if (range.test(minver)) {
        return minver;
      }
      minver = null;
      for (let i2 = 0; i2 < range.set.length; ++i2) {
        const comparators = range.set[i2];
        let setMin = null;
        comparators.forEach((comparator) => {
          const compver = new SemVer(comparator.semver.version);
          switch (comparator.operator) {
            case ">":
              if (compver.prerelease.length === 0) {
                compver.patch++;
              } else {
                compver.prerelease.push(0);
              }
              compver.raw = compver.format();
            case "":
            case ">=":
              if (!setMin || gt2(compver, setMin)) {
                setMin = compver;
              }
              break;
            case "<":
            case "<=":
              break;
            default:
              throw new Error(`Unexpected operation: ${comparator.operator}`);
          }
        });
        if (setMin && (!minver || gt2(minver, setMin))) {
          minver = setMin;
        }
      }
      if (minver && range.test(minver)) {
        return minver;
      }
      return null;
    };
    module2.exports = minVersion;
  }
});

// asset-input/node_modules/semver/ranges/valid.js
var require_valid2 = __commonJS({
  "asset-input/node_modules/semver/ranges/valid.js"(exports2, module2) {
    "use strict";
    var Range = require_range();
    var validRange = (range, options) => {
      try {
        return new Range(range, options).range || "*";
      } catch (er) {
        return null;
      }
    };
    module2.exports = validRange;
  }
});

// asset-input/node_modules/semver/ranges/outside.js
var require_outside = __commonJS({
  "asset-input/node_modules/semver/ranges/outside.js"(exports2, module2) {
    "use strict";
    var SemVer = require_semver();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var Range = require_range();
    var satisfies = require_satisfies();
    var gt2 = require_gt();
    var lt2 = require_lt();
    var lte = require_lte();
    var gte = require_gte();
    var outside = (version, range, hilo, options) => {
      version = new SemVer(version, options);
      range = new Range(range, options);
      let gtfn, ltefn, ltfn, comp, ecomp;
      switch (hilo) {
        case ">":
          gtfn = gt2;
          ltefn = lte;
          ltfn = lt2;
          comp = ">";
          ecomp = ">=";
          break;
        case "<":
          gtfn = lt2;
          ltefn = gte;
          ltfn = gt2;
          comp = "<";
          ecomp = "<=";
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (satisfies(version, range, options)) {
        return false;
      }
      for (let i2 = 0; i2 < range.set.length; ++i2) {
        const comparators = range.set[i2];
        let high = null;
        let low = null;
        comparators.forEach((comparator) => {
          if (comparator.semver === ANY) {
            comparator = new Comparator(">=0.0.0");
          }
          high = high || comparator;
          low = low || comparator;
          if (gtfn(comparator.semver, high.semver, options)) {
            high = comparator;
          } else if (ltfn(comparator.semver, low.semver, options)) {
            low = comparator;
          }
        });
        if (high.operator === comp || high.operator === ecomp) {
          return false;
        }
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
          return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
          return false;
        }
      }
      return true;
    };
    module2.exports = outside;
  }
});

// asset-input/node_modules/semver/ranges/gtr.js
var require_gtr = __commonJS({
  "asset-input/node_modules/semver/ranges/gtr.js"(exports2, module2) {
    "use strict";
    var outside = require_outside();
    var gtr = (version, range, options) => outside(version, range, ">", options);
    module2.exports = gtr;
  }
});

// asset-input/node_modules/semver/ranges/ltr.js
var require_ltr = __commonJS({
  "asset-input/node_modules/semver/ranges/ltr.js"(exports2, module2) {
    "use strict";
    var outside = require_outside();
    var ltr = (version, range, options) => outside(version, range, "<", options);
    module2.exports = ltr;
  }
});

// asset-input/node_modules/semver/ranges/intersects.js
var require_intersects = __commonJS({
  "asset-input/node_modules/semver/ranges/intersects.js"(exports2, module2) {
    "use strict";
    var Range = require_range();
    var intersects = (r1, r2, options) => {
      r1 = new Range(r1, options);
      r2 = new Range(r2, options);
      return r1.intersects(r2, options);
    };
    module2.exports = intersects;
  }
});

// asset-input/node_modules/semver/ranges/simplify.js
var require_simplify = __commonJS({
  "asset-input/node_modules/semver/ranges/simplify.js"(exports2, module2) {
    "use strict";
    var satisfies = require_satisfies();
    var compare = require_compare();
    module2.exports = (versions, range, options) => {
      const set = [];
      let first = null;
      let prev = null;
      const v2 = versions.sort((a3, b2) => compare(a3, b2, options));
      for (const version of v2) {
        const included = satisfies(version, range, options);
        if (included) {
          prev = version;
          if (!first) {
            first = version;
          }
        } else {
          if (prev) {
            set.push([first, prev]);
          }
          prev = null;
          first = null;
        }
      }
      if (first) {
        set.push([first, null]);
      }
      const ranges = [];
      for (const [min, max] of set) {
        if (min === max) {
          ranges.push(min);
        } else if (!max && min === v2[0]) {
          ranges.push("*");
        } else if (!max) {
          ranges.push(`>=${min}`);
        } else if (min === v2[0]) {
          ranges.push(`<=${max}`);
        } else {
          ranges.push(`${min} - ${max}`);
        }
      }
      const simplified = ranges.join(" || ");
      const original = typeof range.raw === "string" ? range.raw : String(range);
      return simplified.length < original.length ? simplified : range;
    };
  }
});

// asset-input/node_modules/semver/ranges/subset.js
var require_subset = __commonJS({
  "asset-input/node_modules/semver/ranges/subset.js"(exports2, module2) {
    "use strict";
    var Range = require_range();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var satisfies = require_satisfies();
    var compare = require_compare();
    var subset = (sub, dom, options = {}) => {
      if (sub === dom) {
        return true;
      }
      sub = new Range(sub, options);
      dom = new Range(dom, options);
      let sawNonNull = false;
      OUTER: for (const simpleSub of sub.set) {
        for (const simpleDom of dom.set) {
          const isSub = simpleSubset(simpleSub, simpleDom, options);
          sawNonNull = sawNonNull || isSub !== null;
          if (isSub) {
            continue OUTER;
          }
        }
        if (sawNonNull) {
          return false;
        }
      }
      return true;
    };
    var minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
    var minimumVersion = [new Comparator(">=0.0.0")];
    var simpleSubset = (sub, dom, options) => {
      if (sub === dom) {
        return true;
      }
      if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
          return true;
        } else if (options.includePrerelease) {
          sub = minimumVersionWithPreRelease;
        } else {
          sub = minimumVersion;
        }
      }
      if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) {
          return true;
        } else {
          dom = minimumVersion;
        }
      }
      const eqSet = /* @__PURE__ */ new Set();
      let gt2, lt2;
      for (const c3 of sub) {
        if (c3.operator === ">" || c3.operator === ">=") {
          gt2 = higherGT(gt2, c3, options);
        } else if (c3.operator === "<" || c3.operator === "<=") {
          lt2 = lowerLT(lt2, c3, options);
        } else {
          eqSet.add(c3.semver);
        }
      }
      if (eqSet.size > 1) {
        return null;
      }
      let gtltComp;
      if (gt2 && lt2) {
        gtltComp = compare(gt2.semver, lt2.semver, options);
        if (gtltComp > 0) {
          return null;
        } else if (gtltComp === 0 && (gt2.operator !== ">=" || lt2.operator !== "<=")) {
          return null;
        }
      }
      for (const eq of eqSet) {
        if (gt2 && !satisfies(eq, String(gt2), options)) {
          return null;
        }
        if (lt2 && !satisfies(eq, String(lt2), options)) {
          return null;
        }
        for (const c3 of dom) {
          if (!satisfies(eq, String(c3), options)) {
            return false;
          }
        }
        return true;
      }
      let higher, lower;
      let hasDomLT, hasDomGT;
      let needDomLTPre = lt2 && !options.includePrerelease && lt2.semver.prerelease.length ? lt2.semver : false;
      let needDomGTPre = gt2 && !options.includePrerelease && gt2.semver.prerelease.length ? gt2.semver : false;
      if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt2.operator === "<" && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
      }
      for (const c3 of dom) {
        hasDomGT = hasDomGT || c3.operator === ">" || c3.operator === ">=";
        hasDomLT = hasDomLT || c3.operator === "<" || c3.operator === "<=";
        if (gt2) {
          if (needDomGTPre) {
            if (c3.semver.prerelease && c3.semver.prerelease.length && c3.semver.major === needDomGTPre.major && c3.semver.minor === needDomGTPre.minor && c3.semver.patch === needDomGTPre.patch) {
              needDomGTPre = false;
            }
          }
          if (c3.operator === ">" || c3.operator === ">=") {
            higher = higherGT(gt2, c3, options);
            if (higher === c3 && higher !== gt2) {
              return false;
            }
          } else if (gt2.operator === ">=" && !satisfies(gt2.semver, String(c3), options)) {
            return false;
          }
        }
        if (lt2) {
          if (needDomLTPre) {
            if (c3.semver.prerelease && c3.semver.prerelease.length && c3.semver.major === needDomLTPre.major && c3.semver.minor === needDomLTPre.minor && c3.semver.patch === needDomLTPre.patch) {
              needDomLTPre = false;
            }
          }
          if (c3.operator === "<" || c3.operator === "<=") {
            lower = lowerLT(lt2, c3, options);
            if (lower === c3 && lower !== lt2) {
              return false;
            }
          } else if (lt2.operator === "<=" && !satisfies(lt2.semver, String(c3), options)) {
            return false;
          }
        }
        if (!c3.operator && (lt2 || gt2) && gtltComp !== 0) {
          return false;
        }
      }
      if (gt2 && hasDomLT && !lt2 && gtltComp !== 0) {
        return false;
      }
      if (lt2 && hasDomGT && !gt2 && gtltComp !== 0) {
        return false;
      }
      if (needDomGTPre || needDomLTPre) {
        return false;
      }
      return true;
    };
    var higherGT = (a3, b2, options) => {
      if (!a3) {
        return b2;
      }
      const comp = compare(a3.semver, b2.semver, options);
      return comp > 0 ? a3 : comp < 0 ? b2 : b2.operator === ">" && a3.operator === ">=" ? b2 : a3;
    };
    var lowerLT = (a3, b2, options) => {
      if (!a3) {
        return b2;
      }
      const comp = compare(a3.semver, b2.semver, options);
      return comp < 0 ? a3 : comp > 0 ? b2 : b2.operator === "<" && a3.operator === "<=" ? b2 : a3;
    };
    module2.exports = subset;
  }
});

// asset-input/node_modules/semver/index.js
var require_semver2 = __commonJS({
  "asset-input/node_modules/semver/index.js"(exports2, module2) {
    "use strict";
    var internalRe = require_re();
    var constants = require_constants();
    var SemVer = require_semver();
    var identifiers = require_identifiers();
    var parse = require_parse();
    var valid = require_valid();
    var clean = require_clean();
    var inc = require_inc();
    var diff = require_diff();
    var major = require_major();
    var minor = require_minor();
    var patch = require_patch();
    var prerelease = require_prerelease();
    var compare = require_compare();
    var rcompare = require_rcompare();
    var compareLoose = require_compare_loose();
    var compareBuild = require_compare_build();
    var sort = require_sort();
    var rsort = require_rsort();
    var gt2 = require_gt();
    var lt2 = require_lt();
    var eq = require_eq();
    var neq = require_neq();
    var gte = require_gte();
    var lte = require_lte();
    var cmp = require_cmp();
    var coerce = require_coerce();
    var Comparator = require_comparator();
    var Range = require_range();
    var satisfies = require_satisfies();
    var toComparators = require_to_comparators();
    var maxSatisfying = require_max_satisfying();
    var minSatisfying = require_min_satisfying();
    var minVersion = require_min_version();
    var validRange = require_valid2();
    var outside = require_outside();
    var gtr = require_gtr();
    var ltr = require_ltr();
    var intersects = require_intersects();
    var simplifyRange = require_simplify();
    var subset = require_subset();
    module2.exports = {
      parse,
      valid,
      clean,
      inc,
      diff,
      major,
      minor,
      patch,
      prerelease,
      compare,
      rcompare,
      compareLoose,
      compareBuild,
      sort,
      rsort,
      gt: gt2,
      lt: lt2,
      eq,
      neq,
      gte,
      lte,
      cmp,
      coerce,
      Comparator,
      Range,
      satisfies,
      toComparators,
      maxSatisfying,
      minSatisfying,
      minVersion,
      validRange,
      outside,
      gtr,
      ltr,
      intersects,
      simplifyRange,
      subset,
      SemVer,
      re: internalRe.re,
      src: internalRe.src,
      tokens: internalRe.t,
      SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
      RELEASE_TYPES: constants.RELEASE_TYPES,
      compareIdentifiers: identifiers.compareIdentifiers,
      rcompareIdentifiers: identifiers.rcompareIdentifiers
    };
  }
});

// asset-input/node_modules/jsonwebtoken/lib/asymmetricKeyDetailsSupported.js
var require_asymmetricKeyDetailsSupported = __commonJS({
  "asset-input/node_modules/jsonwebtoken/lib/asymmetricKeyDetailsSupported.js"(exports2, module2) {
    var semver = require_semver2();
    module2.exports = semver.satisfies(process.version, ">=15.7.0");
  }
});

// asset-input/node_modules/jsonwebtoken/lib/rsaPssKeyDetailsSupported.js
var require_rsaPssKeyDetailsSupported = __commonJS({
  "asset-input/node_modules/jsonwebtoken/lib/rsaPssKeyDetailsSupported.js"(exports2, module2) {
    var semver = require_semver2();
    module2.exports = semver.satisfies(process.version, ">=16.9.0");
  }
});

// asset-input/node_modules/jsonwebtoken/lib/validateAsymmetricKey.js
var require_validateAsymmetricKey = __commonJS({
  "asset-input/node_modules/jsonwebtoken/lib/validateAsymmetricKey.js"(exports2, module2) {
    var ASYMMETRIC_KEY_DETAILS_SUPPORTED = require_asymmetricKeyDetailsSupported();
    var RSA_PSS_KEY_DETAILS_SUPPORTED = require_rsaPssKeyDetailsSupported();
    var allowedAlgorithmsForKeys = {
      "ec": ["ES256", "ES384", "ES512"],
      "rsa": ["RS256", "PS256", "RS384", "PS384", "RS512", "PS512"],
      "rsa-pss": ["PS256", "PS384", "PS512"]
    };
    var allowedCurves = {
      ES256: "prime256v1",
      ES384: "secp384r1",
      ES512: "secp521r1"
    };
    module2.exports = function(algorithm, key) {
      if (!algorithm || !key) return;
      const keyType = key.asymmetricKeyType;
      if (!keyType) return;
      const allowedAlgorithms = allowedAlgorithmsForKeys[keyType];
      if (!allowedAlgorithms) {
        throw new Error(`Unknown key type "${keyType}".`);
      }
      if (!allowedAlgorithms.includes(algorithm)) {
        throw new Error(`"alg" parameter for "${keyType}" key type must be one of: ${allowedAlgorithms.join(", ")}.`);
      }
      if (ASYMMETRIC_KEY_DETAILS_SUPPORTED) {
        switch (keyType) {
          case "ec":
            const keyCurve = key.asymmetricKeyDetails.namedCurve;
            const allowedCurve = allowedCurves[algorithm];
            if (keyCurve !== allowedCurve) {
              throw new Error(`"alg" parameter "${algorithm}" requires curve "${allowedCurve}".`);
            }
            break;
          case "rsa-pss":
            if (RSA_PSS_KEY_DETAILS_SUPPORTED) {
              const length = parseInt(algorithm.slice(-3), 10);
              const { hashAlgorithm, mgf1HashAlgorithm, saltLength } = key.asymmetricKeyDetails;
              if (hashAlgorithm !== `sha${length}` || mgf1HashAlgorithm !== hashAlgorithm) {
                throw new Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${algorithm}.`);
              }
              if (saltLength !== void 0 && saltLength > length >> 3) {
                throw new Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${algorithm}.`);
              }
            }
            break;
        }
      }
    };
  }
});

// asset-input/node_modules/jsonwebtoken/lib/psSupported.js
var require_psSupported = __commonJS({
  "asset-input/node_modules/jsonwebtoken/lib/psSupported.js"(exports2, module2) {
    var semver = require_semver2();
    module2.exports = semver.satisfies(process.version, "^6.12.0 || >=8.0.0");
  }
});

// asset-input/node_modules/jsonwebtoken/verify.js
var require_verify = __commonJS({
  "asset-input/node_modules/jsonwebtoken/verify.js"(exports2, module2) {
    var JsonWebTokenError = require_JsonWebTokenError();
    var NotBeforeError = require_NotBeforeError();
    var TokenExpiredError = require_TokenExpiredError();
    var decode = require_decode();
    var timespan = require_timespan();
    var validateAsymmetricKey = require_validateAsymmetricKey();
    var PS_SUPPORTED = require_psSupported();
    var jws = require_jws();
    var { KeyObject, createSecretKey, createPublicKey } = require("crypto");
    var PUB_KEY_ALGS = ["RS256", "RS384", "RS512"];
    var EC_KEY_ALGS = ["ES256", "ES384", "ES512"];
    var RSA_KEY_ALGS = ["RS256", "RS384", "RS512"];
    var HS_ALGS = ["HS256", "HS384", "HS512"];
    if (PS_SUPPORTED) {
      PUB_KEY_ALGS.splice(PUB_KEY_ALGS.length, 0, "PS256", "PS384", "PS512");
      RSA_KEY_ALGS.splice(RSA_KEY_ALGS.length, 0, "PS256", "PS384", "PS512");
    }
    module2.exports = function(jwtString, secretOrPublicKey, options, callback) {
      if (typeof options === "function" && !callback) {
        callback = options;
        options = {};
      }
      if (!options) {
        options = {};
      }
      options = Object.assign({}, options);
      let done;
      if (callback) {
        done = callback;
      } else {
        done = function(err, data) {
          if (err) throw err;
          return data;
        };
      }
      if (options.clockTimestamp && typeof options.clockTimestamp !== "number") {
        return done(new JsonWebTokenError("clockTimestamp must be a number"));
      }
      if (options.nonce !== void 0 && (typeof options.nonce !== "string" || options.nonce.trim() === "")) {
        return done(new JsonWebTokenError("nonce must be a non-empty string"));
      }
      if (options.allowInvalidAsymmetricKeyTypes !== void 0 && typeof options.allowInvalidAsymmetricKeyTypes !== "boolean") {
        return done(new JsonWebTokenError("allowInvalidAsymmetricKeyTypes must be a boolean"));
      }
      const clockTimestamp = options.clockTimestamp || Math.floor(Date.now() / 1e3);
      if (!jwtString) {
        return done(new JsonWebTokenError("jwt must be provided"));
      }
      if (typeof jwtString !== "string") {
        return done(new JsonWebTokenError("jwt must be a string"));
      }
      const parts = jwtString.split(".");
      if (parts.length !== 3) {
        return done(new JsonWebTokenError("jwt malformed"));
      }
      let decodedToken;
      try {
        decodedToken = decode(jwtString, { complete: true });
      } catch (err) {
        return done(err);
      }
      if (!decodedToken) {
        return done(new JsonWebTokenError("invalid token"));
      }
      const header = decodedToken.header;
      let getSecret;
      if (typeof secretOrPublicKey === "function") {
        if (!callback) {
          return done(new JsonWebTokenError("verify must be called asynchronous if secret or public key is provided as a callback"));
        }
        getSecret = secretOrPublicKey;
      } else {
        getSecret = function(header2, secretCallback) {
          return secretCallback(null, secretOrPublicKey);
        };
      }
      return getSecret(header, function(err, secretOrPublicKey2) {
        if (err) {
          return done(new JsonWebTokenError("error in secret or public key callback: " + err.message));
        }
        const hasSignature = parts[2].trim() !== "";
        if (!hasSignature && secretOrPublicKey2) {
          return done(new JsonWebTokenError("jwt signature is required"));
        }
        if (hasSignature && !secretOrPublicKey2) {
          return done(new JsonWebTokenError("secret or public key must be provided"));
        }
        if (!hasSignature && !options.algorithms) {
          return done(new JsonWebTokenError('please specify "none" in "algorithms" to verify unsigned tokens'));
        }
        if (secretOrPublicKey2 != null && !(secretOrPublicKey2 instanceof KeyObject)) {
          try {
            secretOrPublicKey2 = createPublicKey(secretOrPublicKey2);
          } catch (_2) {
            try {
              secretOrPublicKey2 = createSecretKey(typeof secretOrPublicKey2 === "string" ? Buffer.from(secretOrPublicKey2) : secretOrPublicKey2);
            } catch (_3) {
              return done(new JsonWebTokenError("secretOrPublicKey is not valid key material"));
            }
          }
        }
        if (!options.algorithms) {
          if (secretOrPublicKey2.type === "secret") {
            options.algorithms = HS_ALGS;
          } else if (["rsa", "rsa-pss"].includes(secretOrPublicKey2.asymmetricKeyType)) {
            options.algorithms = RSA_KEY_ALGS;
          } else if (secretOrPublicKey2.asymmetricKeyType === "ec") {
            options.algorithms = EC_KEY_ALGS;
          } else {
            options.algorithms = PUB_KEY_ALGS;
          }
        }
        if (options.algorithms.indexOf(decodedToken.header.alg) === -1) {
          return done(new JsonWebTokenError("invalid algorithm"));
        }
        if (header.alg.startsWith("HS") && secretOrPublicKey2.type !== "secret") {
          return done(new JsonWebTokenError(`secretOrPublicKey must be a symmetric key when using ${header.alg}`));
        } else if (/^(?:RS|PS|ES)/.test(header.alg) && secretOrPublicKey2.type !== "public") {
          return done(new JsonWebTokenError(`secretOrPublicKey must be an asymmetric key when using ${header.alg}`));
        }
        if (!options.allowInvalidAsymmetricKeyTypes) {
          try {
            validateAsymmetricKey(header.alg, secretOrPublicKey2);
          } catch (e2) {
            return done(e2);
          }
        }
        let valid;
        try {
          valid = jws.verify(jwtString, decodedToken.header.alg, secretOrPublicKey2);
        } catch (e2) {
          return done(e2);
        }
        if (!valid) {
          return done(new JsonWebTokenError("invalid signature"));
        }
        const payload = decodedToken.payload;
        if (typeof payload.nbf !== "undefined" && !options.ignoreNotBefore) {
          if (typeof payload.nbf !== "number") {
            return done(new JsonWebTokenError("invalid nbf value"));
          }
          if (payload.nbf > clockTimestamp + (options.clockTolerance || 0)) {
            return done(new NotBeforeError("jwt not active", new Date(payload.nbf * 1e3)));
          }
        }
        if (typeof payload.exp !== "undefined" && !options.ignoreExpiration) {
          if (typeof payload.exp !== "number") {
            return done(new JsonWebTokenError("invalid exp value"));
          }
          if (clockTimestamp >= payload.exp + (options.clockTolerance || 0)) {
            return done(new TokenExpiredError("jwt expired", new Date(payload.exp * 1e3)));
          }
        }
        if (options.audience) {
          const audiences = Array.isArray(options.audience) ? options.audience : [options.audience];
          const target = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
          const match = target.some(function(targetAudience) {
            return audiences.some(function(audience) {
              return audience instanceof RegExp ? audience.test(targetAudience) : audience === targetAudience;
            });
          });
          if (!match) {
            return done(new JsonWebTokenError("jwt audience invalid. expected: " + audiences.join(" or ")));
          }
        }
        if (options.issuer) {
          const invalid_issuer = typeof options.issuer === "string" && payload.iss !== options.issuer || Array.isArray(options.issuer) && options.issuer.indexOf(payload.iss) === -1;
          if (invalid_issuer) {
            return done(new JsonWebTokenError("jwt issuer invalid. expected: " + options.issuer));
          }
        }
        if (options.subject) {
          if (payload.sub !== options.subject) {
            return done(new JsonWebTokenError("jwt subject invalid. expected: " + options.subject));
          }
        }
        if (options.jwtid) {
          if (payload.jti !== options.jwtid) {
            return done(new JsonWebTokenError("jwt jwtid invalid. expected: " + options.jwtid));
          }
        }
        if (options.nonce) {
          if (payload.nonce !== options.nonce) {
            return done(new JsonWebTokenError("jwt nonce invalid. expected: " + options.nonce));
          }
        }
        if (options.maxAge) {
          if (typeof payload.iat !== "number") {
            return done(new JsonWebTokenError("iat required when maxAge is specified"));
          }
          const maxAgeTimestamp = timespan(options.maxAge, payload.iat);
          if (typeof maxAgeTimestamp === "undefined") {
            return done(new JsonWebTokenError('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
          }
          if (clockTimestamp >= maxAgeTimestamp + (options.clockTolerance || 0)) {
            return done(new TokenExpiredError("maxAge exceeded", new Date(maxAgeTimestamp * 1e3)));
          }
        }
        if (options.complete === true) {
          const signature = decodedToken.signature;
          return done(null, {
            header,
            payload,
            signature
          });
        }
        return done(null, payload);
      });
    };
  }
});

// asset-input/node_modules/lodash.includes/index.js
var require_lodash = __commonJS({
  "asset-input/node_modules/lodash.includes/index.js"(exports2, module2) {
    var INFINITY = 1 / 0;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var MAX_INTEGER = 17976931348623157e292;
    var NAN = 0 / 0;
    var argsTag = "[object Arguments]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var freeParseInt = parseInt;
    function arrayMap(array, iteratee) {
      var index = -1, length = array ? array.length : 0, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    function baseIndexOf(array, value, fromIndex) {
      if (value !== value) {
        return baseFindIndex(array, baseIsNaN, fromIndex);
      }
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    function baseIsNaN(value) {
      return value !== value;
    }
    function baseTimes(n3, iteratee) {
      var index = -1, result = Array(n3);
      while (++index < n3) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseValues(object, props) {
      return arrayMap(props, function(key) {
        return object[key];
      });
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeKeys = overArg(Object.keys, Object);
    var nativeMax = Math.max;
    function arrayLikeKeys(value, inherited) {
      var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
      var length = result.length, skipIndexes = !!length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString2(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
    }
    function isArguments(value) {
      return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
    }
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isString2(value) {
      return typeof value == "string" || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    function values(object) {
      return object ? baseValues(object, keys(object)) : [];
    }
    module2.exports = includes;
  }
});

// asset-input/node_modules/lodash.isboolean/index.js
var require_lodash2 = __commonJS({
  "asset-input/node_modules/lodash.isboolean/index.js"(exports2, module2) {
    var boolTag = "[object Boolean]";
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    function isBoolean(value) {
      return value === true || value === false || isObjectLike(value) && objectToString.call(value) == boolTag;
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    module2.exports = isBoolean;
  }
});

// asset-input/node_modules/lodash.isinteger/index.js
var require_lodash3 = __commonJS({
  "asset-input/node_modules/lodash.isinteger/index.js"(exports2, module2) {
    var INFINITY = 1 / 0;
    var MAX_INTEGER = 17976931348623157e292;
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    function isInteger(value) {
      return typeof value == "number" && value == toInteger(value);
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module2.exports = isInteger;
  }
});

// asset-input/node_modules/lodash.isnumber/index.js
var require_lodash4 = __commonJS({
  "asset-input/node_modules/lodash.isnumber/index.js"(exports2, module2) {
    var numberTag = "[object Number]";
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isNumber2(value) {
      return typeof value == "number" || isObjectLike(value) && objectToString.call(value) == numberTag;
    }
    module2.exports = isNumber2;
  }
});

// asset-input/node_modules/lodash.isplainobject/index.js
var require_lodash5 = __commonJS({
  "asset-input/node_modules/lodash.isplainobject/index.js"(exports2, module2) {
    var objectTag = "[object Object]";
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e2) {
        }
      }
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);
    var objectToString = objectProto.toString;
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isPlainObject2(value) {
      if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    module2.exports = isPlainObject2;
  }
});

// asset-input/node_modules/lodash.isstring/index.js
var require_lodash6 = __commonJS({
  "asset-input/node_modules/lodash.isstring/index.js"(exports2, module2) {
    var stringTag = "[object String]";
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var isArray = Array.isArray;
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isString2(value) {
      return typeof value == "string" || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
    }
    module2.exports = isString2;
  }
});

// asset-input/node_modules/lodash.once/index.js
var require_lodash7 = __commonJS({
  "asset-input/node_modules/lodash.once/index.js"(exports2, module2) {
    var FUNC_ERROR_TEXT = "Expected a function";
    var INFINITY = 1 / 0;
    var MAX_INTEGER = 17976931348623157e292;
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    function before(n3, func) {
      var result;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n3 = toInteger(n3);
      return function() {
        if (--n3 > 0) {
          result = func.apply(this, arguments);
        }
        if (n3 <= 1) {
          func = void 0;
        }
        return result;
      };
    }
    function once(func) {
      return before(2, func);
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module2.exports = once;
  }
});

// asset-input/node_modules/jsonwebtoken/sign.js
var require_sign = __commonJS({
  "asset-input/node_modules/jsonwebtoken/sign.js"(exports2, module2) {
    var timespan = require_timespan();
    var PS_SUPPORTED = require_psSupported();
    var validateAsymmetricKey = require_validateAsymmetricKey();
    var jws = require_jws();
    var includes = require_lodash();
    var isBoolean = require_lodash2();
    var isInteger = require_lodash3();
    var isNumber2 = require_lodash4();
    var isPlainObject2 = require_lodash5();
    var isString2 = require_lodash6();
    var once = require_lodash7();
    var { KeyObject, createSecretKey, createPrivateKey } = require("crypto");
    var SUPPORTED_ALGS = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512", "HS256", "HS384", "HS512", "none"];
    if (PS_SUPPORTED) {
      SUPPORTED_ALGS.splice(3, 0, "PS256", "PS384", "PS512");
    }
    var sign_options_schema = {
      expiresIn: { isValid: function(value) {
        return isInteger(value) || isString2(value) && value;
      }, message: '"expiresIn" should be a number of seconds or string representing a timespan' },
      notBefore: { isValid: function(value) {
        return isInteger(value) || isString2(value) && value;
      }, message: '"notBefore" should be a number of seconds or string representing a timespan' },
      audience: { isValid: function(value) {
        return isString2(value) || Array.isArray(value);
      }, message: '"audience" must be a string or array' },
      algorithm: { isValid: includes.bind(null, SUPPORTED_ALGS), message: '"algorithm" must be a valid string enum value' },
      header: { isValid: isPlainObject2, message: '"header" must be an object' },
      encoding: { isValid: isString2, message: '"encoding" must be a string' },
      issuer: { isValid: isString2, message: '"issuer" must be a string' },
      subject: { isValid: isString2, message: '"subject" must be a string' },
      jwtid: { isValid: isString2, message: '"jwtid" must be a string' },
      noTimestamp: { isValid: isBoolean, message: '"noTimestamp" must be a boolean' },
      keyid: { isValid: isString2, message: '"keyid" must be a string' },
      mutatePayload: { isValid: isBoolean, message: '"mutatePayload" must be a boolean' },
      allowInsecureKeySizes: { isValid: isBoolean, message: '"allowInsecureKeySizes" must be a boolean' },
      allowInvalidAsymmetricKeyTypes: { isValid: isBoolean, message: '"allowInvalidAsymmetricKeyTypes" must be a boolean' }
    };
    var registered_claims_schema = {
      iat: { isValid: isNumber2, message: '"iat" should be a number of seconds' },
      exp: { isValid: isNumber2, message: '"exp" should be a number of seconds' },
      nbf: { isValid: isNumber2, message: '"nbf" should be a number of seconds' }
    };
    function validate(schema, allowUnknown, object, parameterName) {
      if (!isPlainObject2(object)) {
        throw new Error('Expected "' + parameterName + '" to be a plain object.');
      }
      Object.keys(object).forEach(function(key) {
        const validator = schema[key];
        if (!validator) {
          if (!allowUnknown) {
            throw new Error('"' + key + '" is not allowed in "' + parameterName + '"');
          }
          return;
        }
        if (!validator.isValid(object[key])) {
          throw new Error(validator.message);
        }
      });
    }
    function validateOptions(options) {
      return validate(sign_options_schema, false, options, "options");
    }
    function validatePayload(payload) {
      return validate(registered_claims_schema, true, payload, "payload");
    }
    var options_to_payload = {
      "audience": "aud",
      "issuer": "iss",
      "subject": "sub",
      "jwtid": "jti"
    };
    var options_for_objects = [
      "expiresIn",
      "notBefore",
      "noTimestamp",
      "audience",
      "issuer",
      "subject",
      "jwtid"
    ];
    module2.exports = function(payload, secretOrPrivateKey, options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      } else {
        options = options || {};
      }
      const isObjectPayload = typeof payload === "object" && !Buffer.isBuffer(payload);
      const header = Object.assign({
        alg: options.algorithm || "HS256",
        typ: isObjectPayload ? "JWT" : void 0,
        kid: options.keyid
      }, options.header);
      function failure(err) {
        if (callback) {
          return callback(err);
        }
        throw err;
      }
      if (!secretOrPrivateKey && options.algorithm !== "none") {
        return failure(new Error("secretOrPrivateKey must have a value"));
      }
      if (secretOrPrivateKey != null && !(secretOrPrivateKey instanceof KeyObject)) {
        try {
          secretOrPrivateKey = createPrivateKey(secretOrPrivateKey);
        } catch (_2) {
          try {
            secretOrPrivateKey = createSecretKey(typeof secretOrPrivateKey === "string" ? Buffer.from(secretOrPrivateKey) : secretOrPrivateKey);
          } catch (_3) {
            return failure(new Error("secretOrPrivateKey is not valid key material"));
          }
        }
      }
      if (header.alg.startsWith("HS") && secretOrPrivateKey.type !== "secret") {
        return failure(new Error(`secretOrPrivateKey must be a symmetric key when using ${header.alg}`));
      } else if (/^(?:RS|PS|ES)/.test(header.alg)) {
        if (secretOrPrivateKey.type !== "private") {
          return failure(new Error(`secretOrPrivateKey must be an asymmetric key when using ${header.alg}`));
        }
        if (!options.allowInsecureKeySizes && !header.alg.startsWith("ES") && secretOrPrivateKey.asymmetricKeyDetails !== void 0 && //KeyObject.asymmetricKeyDetails is supported in Node 15+
        secretOrPrivateKey.asymmetricKeyDetails.modulusLength < 2048) {
          return failure(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`));
        }
      }
      if (typeof payload === "undefined") {
        return failure(new Error("payload is required"));
      } else if (isObjectPayload) {
        try {
          validatePayload(payload);
        } catch (error) {
          return failure(error);
        }
        if (!options.mutatePayload) {
          payload = Object.assign({}, payload);
        }
      } else {
        const invalid_options = options_for_objects.filter(function(opt) {
          return typeof options[opt] !== "undefined";
        });
        if (invalid_options.length > 0) {
          return failure(new Error("invalid " + invalid_options.join(",") + " option for " + typeof payload + " payload"));
        }
      }
      if (typeof payload.exp !== "undefined" && typeof options.expiresIn !== "undefined") {
        return failure(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
      }
      if (typeof payload.nbf !== "undefined" && typeof options.notBefore !== "undefined") {
        return failure(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
      }
      try {
        validateOptions(options);
      } catch (error) {
        return failure(error);
      }
      if (!options.allowInvalidAsymmetricKeyTypes) {
        try {
          validateAsymmetricKey(header.alg, secretOrPrivateKey);
        } catch (error) {
          return failure(error);
        }
      }
      const timestamp = payload.iat || Math.floor(Date.now() / 1e3);
      if (options.noTimestamp) {
        delete payload.iat;
      } else if (isObjectPayload) {
        payload.iat = timestamp;
      }
      if (typeof options.notBefore !== "undefined") {
        try {
          payload.nbf = timespan(options.notBefore, timestamp);
        } catch (err) {
          return failure(err);
        }
        if (typeof payload.nbf === "undefined") {
          return failure(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        }
      }
      if (typeof options.expiresIn !== "undefined" && typeof payload === "object") {
        try {
          payload.exp = timespan(options.expiresIn, timestamp);
        } catch (err) {
          return failure(err);
        }
        if (typeof payload.exp === "undefined") {
          return failure(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        }
      }
      Object.keys(options_to_payload).forEach(function(key) {
        const claim = options_to_payload[key];
        if (typeof options[key] !== "undefined") {
          if (typeof payload[claim] !== "undefined") {
            return failure(new Error('Bad "options.' + key + '" option. The payload already has an "' + claim + '" property.'));
          }
          payload[claim] = options[key];
        }
      });
      const encoding = options.encoding || "utf8";
      if (typeof callback === "function") {
        callback = callback && once(callback);
        jws.createSign({
          header,
          privateKey: secretOrPrivateKey,
          payload,
          encoding
        }).once("error", callback).once("done", function(signature) {
          if (!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
            return callback(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`));
          }
          callback(null, signature);
        });
      } else {
        let signature = jws.sign({ header, payload, secret: secretOrPrivateKey, encoding });
        if (!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
          throw new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`);
        }
        return signature;
      }
    };
  }
});

// asset-input/node_modules/jsonwebtoken/index.js
var require_jsonwebtoken = __commonJS({
  "asset-input/node_modules/jsonwebtoken/index.js"(exports2, module2) {
    module2.exports = {
      decode: require_decode(),
      verify: require_verify(),
      sign: require_sign(),
      JsonWebTokenError: require_JsonWebTokenError(),
      NotBeforeError: require_NotBeforeError(),
      TokenExpiredError: require_TokenExpiredError()
    };
  }
});

// asset-input/src/handlers/chatHandler.ts
var chatHandler_exports = {};
__export(chatHandler_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(chatHandler_exports);

// asset-input/node_modules/@inversifyjs/common/lib/esm/index.js
function e(e2) {
  return ("object" == typeof e2 && null !== e2 || "function" == typeof e2) && "function" == typeof e2.then;
}
function t(e2) {
  switch (typeof e2) {
    case "string":
    case "symbol":
      return e2.toString();
    case "function":
      return e2.name;
    default:
      throw new Error(`Unexpected ${typeof e2} service id type`);
  }
}
var n = Symbol.for("@inversifyjs/common/islazyServiceIdentifier");
var r = class {
  [n];
  #e;
  constructor(e2) {
    this.#e = e2, this[n] = true;
  }
  static is(e2) {
    return "object" == typeof e2 && null !== e2 && true === e2[n];
  }
  unwrap() {
    return this.#e();
  }
};

// asset-input/node_modules/@inversifyjs/container/lib/esm/index.js
var import_lite = __toESM(require_ReflectLite(), 1);

// asset-input/node_modules/@inversifyjs/reflect-metadata-utils/lib/esm/index.js
function c(t4, n3, e2) {
  return Reflect.getOwnMetadata(n3, t4, e2);
}
function a(t4, n3, e2, u2) {
  Reflect.defineMetadata(n3, e2, t4, u2);
}
function i(t4, n3, e2, u2, f2) {
  const r2 = u2(c(t4, n3, f2) ?? e2());
  Reflect.defineMetadata(n3, r2, t4, f2);
}

// asset-input/node_modules/@inversifyjs/core/lib/esm/index.js
var a2 = "@inversifyjs/container/bindingId";
function c2() {
  const i2 = c(Object, a2) ?? 0;
  return i2 === Number.MAX_SAFE_INTEGER ? a(Object, a2, Number.MIN_SAFE_INTEGER) : i(Object, a2, () => i2, (e2) => e2 + 1), i2;
}
var d = { Request: "Request", Singleton: "Singleton", Transient: "Transient" };
var u = { ConstantValue: "ConstantValue", DynamicValue: "DynamicValue", Factory: "Factory", Instance: "Instance", Provider: "Provider", ResolvedValue: "ResolvedValue", ServiceRedirection: "ServiceRedirection" };
function* l(...e2) {
  for (const t4 of e2) yield* t4;
}
var p = class _p {
  #e;
  #t;
  #n;
  constructor(e2) {
    this.#e = /* @__PURE__ */ new Map(), this.#t = {};
    for (const t4 of Reflect.ownKeys(e2)) this.#t[t4] = /* @__PURE__ */ new Map();
    this.#n = e2;
  }
  add(e2, t4) {
    this.#i(e2).push(t4);
    for (const n3 of Reflect.ownKeys(t4)) this.#o(n3, t4[n3]).push(e2);
  }
  clone() {
    const e2 = this.#r(), t4 = this.#s(), n3 = Reflect.ownKeys(this.#n), i2 = this._buildNewInstance(this.#n);
    this.#a(this.#e, i2.#e, e2, t4);
    for (const t5 of n3) this.#c(this.#t[t5], i2.#t[t5], e2);
    return i2;
  }
  get(e2, t4) {
    return this.#t[e2].get(t4);
  }
  getAllKeys(e2) {
    return this.#t[e2].keys();
  }
  removeByRelation(e2, t4) {
    const n3 = this.get(e2, t4);
    if (void 0 === n3) return;
    const i2 = new Set(n3);
    for (const n4 of i2) {
      const i3 = this.#e.get(n4);
      if (void 0 === i3) throw new Error("Expecting model relation, none found");
      for (const o of i3) o[e2] === t4 && this.#d(n4, o);
      this.#e.delete(n4);
    }
  }
  _buildNewInstance(e2) {
    return new _p(e2);
  }
  _cloneModel(e2) {
    return e2;
  }
  _cloneRelation(e2) {
    return e2;
  }
  #r() {
    const e2 = /* @__PURE__ */ new Map();
    for (const t4 of this.#e.keys()) {
      const n3 = this._cloneModel(t4);
      e2.set(t4, n3);
    }
    return e2;
  }
  #s() {
    const e2 = /* @__PURE__ */ new Map();
    for (const t4 of this.#e.values()) for (const n3 of t4) {
      const t5 = this._cloneRelation(n3);
      e2.set(n3, t5);
    }
    return e2;
  }
  #i(e2) {
    let t4 = this.#e.get(e2);
    return void 0 === t4 && (t4 = [], this.#e.set(e2, t4)), t4;
  }
  #o(e2, t4) {
    let n3 = this.#t[e2].get(t4);
    return void 0 === n3 && (n3 = [], this.#t[e2].set(t4, n3)), n3;
  }
  #u(e2, t4) {
    const n3 = t4.get(e2);
    if (void 0 === n3) throw new Error("Expecting model to be cloned, none found");
    return n3;
  }
  #l(e2, t4) {
    const n3 = t4.get(e2);
    if (void 0 === n3) throw new Error("Expecting relation to be cloned, none found");
    return n3;
  }
  #c(e2, t4, n3) {
    for (const [i2, o] of e2) {
      const e3 = new Array();
      for (const t5 of o) e3.push(this.#u(t5, n3));
      t4.set(i2, e3);
    }
  }
  #a(e2, t4, n3, i2) {
    for (const [o, r2] of e2) {
      const e3 = new Array();
      for (const t5 of r2) e3.push(this.#l(t5, i2));
      t4.set(this.#u(o, n3), e3);
    }
  }
  #d(e2, t4) {
    for (const n3 of Reflect.ownKeys(t4)) this.#p(e2, n3, t4[n3]);
  }
  #p(e2, t4, n3) {
    const i2 = this.#t[t4].get(n3);
    if (void 0 !== i2) {
      const o = i2.indexOf(e2);
      -1 !== o && i2.splice(o, 1), 0 === i2.length && this.#t[t4].delete(n3);
    }
  }
};
var f;
!function(e2) {
  e2.moduleId = "moduleId", e2.serviceId = "serviceId";
}(f || (f = {}));
var v = class _v {
  #f;
  #v;
  constructor(e2, t4) {
    this.#f = t4 ?? new p({ moduleId: { isOptional: true }, serviceId: { isOptional: false } }), this.#v = e2;
  }
  static build(e2) {
    return new _v(e2);
  }
  add(e2, t4) {
    this.#f.add(e2, t4);
  }
  clone() {
    return new _v(this.#v, this.#f.clone());
  }
  get(e2) {
    const t4 = [], n3 = this.#f.get(f.serviceId, e2);
    void 0 !== n3 && t4.push(n3);
    const i2 = this.#v()?.get(e2);
    if (void 0 !== i2 && t4.push(i2), 0 !== t4.length) return l(...t4);
  }
  removeAllByModuleId(e2) {
    this.#f.removeByRelation(f.moduleId, e2);
  }
  removeAllByServiceId(e2) {
    this.#f.removeByRelation(f.serviceId, e2);
  }
};
var h = "@inversifyjs/core/classMetadataReflectKey";
function g() {
  return { constructorArguments: [], lifecycle: { postConstructMethodNames: /* @__PURE__ */ new Set(), preDestroyMethodNames: /* @__PURE__ */ new Set() }, properties: /* @__PURE__ */ new Map(), scope: void 0 };
}
var m = "@inversifyjs/core/pendingClassMetadataCountReflectKey";
var y = Symbol.for("@inversifyjs/core/InversifyCoreError");
var M = class _M extends Error {
  [y];
  kind;
  constructor(e2, t4, n3) {
    super(t4, n3), this[y] = true, this.kind = e2;
  }
  static is(e2) {
    return "object" == typeof e2 && null !== e2 && true === e2[y];
  }
  static isErrorOfKind(e2, t4) {
    return _M.is(e2) && e2.kind === t4;
  }
};
var I;
var b;
var w;
var C;
var S;
function N(t4) {
  const n3 = c(t4, h) ?? g();
  if (!function(t5) {
    const n4 = c(t5, m);
    return void 0 !== n4 && 0 !== n4;
  }(t4)) return function(e2, t5) {
    const n4 = [];
    if (t5.length < e2.length) throw new M(I.missingInjectionDecorator, `Found unexpected missing metadata on type "${e2.name}". "${e2.name}" constructor requires at least ${e2.length.toString()} arguments, found ${t5.length.toString()} instead.
Are you using @inject, @multiInject or @unmanaged decorators in every non optional constructor argument?

If you're using typescript and want to rely on auto injection, set "emitDecoratorMetadata" compiler option to true`);
    for (let e3 = 0; e3 < t5.length; ++e3) void 0 === t5[e3] && n4.push(e3);
    if (n4.length > 0) throw new M(I.missingInjectionDecorator, `Found unexpected missing metadata on type "${e2.name}" at constructor indexes "${n4.join('", "')}".

Are you using @inject, @multiInject or @unmanaged decorators at those indexes?

If you're using typescript and want to rely on auto injection, set "emitDecoratorMetadata" compiler option to true`);
  }(t4, n3.constructorArguments), n3;
  !function(e2, t5) {
    const n4 = [];
    for (let i2 = 0; i2 < t5.constructorArguments.length; ++i2) {
      const o = t5.constructorArguments[i2];
      void 0 !== o && o.kind !== b.unknown || n4.push(`  - Missing or incomplete metadata for type "${e2.name}" at constructor argument with index ${i2.toString()}.
Every constructor parameter must be decorated either with @inject, @multiInject or @unmanaged decorator.`);
    }
    for (const [i2, o] of t5.properties) o.kind === b.unknown && n4.push(`  - Missing or incomplete metadata for type "${e2.name}" at property "${i2.toString()}".
This property must be decorated either with @inject or @multiInject decorator.`);
    if (0 === n4.length) throw new M(I.unknown, `Unexpected class metadata for type "${e2.name}" with uncompletion traces.
This might be caused by one of the following reasons:

1. A third party library is targeting inversify reflection metadata.
2. A bug is causing the issue. Consider submiting an issue to fix it.`);
    throw new M(I.missingInjectionDecorator, `Invalid class metadata at type ${e2.name}:

${n4.join("\n\n")}`);
  }(t4, n3);
}
function P(e2, t4) {
  const n3 = N(t4).scope ?? e2.scope;
  return { cache: { isRight: false, value: void 0 }, id: c2(), implementationType: t4, isSatisfiedBy: () => true, moduleId: void 0, onActivation: void 0, onDeactivation: void 0, scope: n3, serviceIdentifier: t4, type: u.Instance };
}
function A(e2) {
  return e2.isRight ? { isRight: true, value: e2.value } : e2;
}
function x(e2) {
  switch (e2.type) {
    case u.ConstantValue:
    case u.DynamicValue:
      return function(e3) {
        return { cache: A(e3.cache), id: e3.id, isSatisfiedBy: e3.isSatisfiedBy, moduleId: e3.moduleId, onActivation: e3.onActivation, onDeactivation: e3.onDeactivation, scope: e3.scope, serviceIdentifier: e3.serviceIdentifier, type: e3.type, value: e3.value };
      }(e2);
    case u.Factory:
      return function(e3) {
        return { cache: A(e3.cache), factory: e3.factory, id: e3.id, isSatisfiedBy: e3.isSatisfiedBy, moduleId: e3.moduleId, onActivation: e3.onActivation, onDeactivation: e3.onDeactivation, scope: e3.scope, serviceIdentifier: e3.serviceIdentifier, type: e3.type };
      }(e2);
    case u.Instance:
      return function(e3) {
        return { cache: A(e3.cache), id: e3.id, implementationType: e3.implementationType, isSatisfiedBy: e3.isSatisfiedBy, moduleId: e3.moduleId, onActivation: e3.onActivation, onDeactivation: e3.onDeactivation, scope: e3.scope, serviceIdentifier: e3.serviceIdentifier, type: e3.type };
      }(e2);
    case u.Provider:
      return function(e3) {
        return { cache: A(e3.cache), id: e3.id, isSatisfiedBy: e3.isSatisfiedBy, moduleId: e3.moduleId, onActivation: e3.onActivation, onDeactivation: e3.onDeactivation, provider: e3.provider, scope: e3.scope, serviceIdentifier: e3.serviceIdentifier, type: e3.type };
      }(e2);
    case u.ResolvedValue:
      return function(e3) {
        return { cache: A(e3.cache), factory: e3.factory, id: e3.id, isSatisfiedBy: e3.isSatisfiedBy, metadata: e3.metadata, moduleId: e3.moduleId, onActivation: e3.onActivation, onDeactivation: e3.onDeactivation, scope: e3.scope, serviceIdentifier: e3.serviceIdentifier, type: e3.type };
      }(e2);
    case u.ServiceRedirection:
      return function(e3) {
        return { id: e3.id, isSatisfiedBy: e3.isSatisfiedBy, moduleId: e3.moduleId, serviceIdentifier: e3.serviceIdentifier, targetServiceIdentifier: e3.targetServiceIdentifier, type: e3.type };
      }(e2);
  }
}
!function(e2) {
  e2[e2.injectionDecoratorConflict = 0] = "injectionDecoratorConflict", e2[e2.missingInjectionDecorator = 1] = "missingInjectionDecorator", e2[e2.planning = 2] = "planning", e2[e2.resolution = 3] = "resolution", e2[e2.unknown = 4] = "unknown";
}(I || (I = {})), function(e2) {
  e2[e2.unknown = 32] = "unknown";
}(b || (b = {})), function(e2) {
  e2.id = "id", e2.moduleId = "moduleId", e2.serviceId = "serviceId";
}(w || (w = {}));
var R = class _R extends p {
  _buildNewInstance(e2) {
    return new _R(e2);
  }
  _cloneModel(e2) {
    return x(e2);
  }
};
var T = class _T {
  #h;
  #g;
  #v;
  constructor(e2, t4, n3) {
    this.#g = n3 ?? new R({ id: { isOptional: false }, moduleId: { isOptional: true }, serviceId: { isOptional: false } }), this.#v = e2, this.#h = t4;
  }
  static build(e2, t4) {
    return new _T(e2, t4);
  }
  clone() {
    return new _T(this.#v, this.#h, this.#g.clone());
  }
  get(e2) {
    const t4 = this.getNonParentBindings(e2) ?? this.#v()?.get(e2);
    if (void 0 !== t4) return t4;
    const n3 = this.#m(e2);
    return void 0 === n3 ? n3 : [n3];
  }
  *getChained(e2) {
    const t4 = this.getNonParentBindings(e2);
    void 0 !== t4 && (yield* t4);
    const n3 = this.#v();
    if (void 0 === n3) {
      if (void 0 === t4) {
        const t5 = this.#m(e2);
        void 0 !== t5 && (yield t5);
      }
    } else yield* n3.getChained(e2);
  }
  getBoundServices() {
    const e2 = new Set(this.#g.getAllKeys(w.serviceId)), t4 = this.#v();
    if (void 0 !== t4) for (const n3 of t4.getBoundServices()) e2.add(n3);
    return e2;
  }
  getById(e2) {
    return this.#g.get(w.id, e2) ?? this.#v()?.getById(e2);
  }
  getByModuleId(e2) {
    return this.#g.get(w.moduleId, e2) ?? this.#v()?.getByModuleId(e2);
  }
  getNonParentBindings(e2) {
    return this.#g.get(w.serviceId, e2);
  }
  getNonParentBoundServices() {
    return this.#g.getAllKeys(w.serviceId);
  }
  removeById(e2) {
    this.#g.removeByRelation(w.id, e2);
  }
  removeAllByModuleId(e2) {
    this.#g.removeByRelation(w.moduleId, e2);
  }
  removeAllByServiceId(e2) {
    this.#g.removeByRelation(w.serviceId, e2);
  }
  set(e2) {
    const t4 = { [w.id]: e2.id, [w.serviceId]: e2.serviceIdentifier };
    void 0 !== e2.moduleId && (t4[w.moduleId] = e2.moduleId), this.#g.add(e2, t4);
  }
  #m(e2) {
    if (void 0 === this.#h || "function" != typeof e2) return;
    const t4 = P(this.#h, e2);
    return this.set(t4), t4;
  }
};
!function(e2) {
  e2.moduleId = "moduleId", e2.serviceId = "serviceId";
}(C || (C = {}));
var j = class _j {
  #y;
  #v;
  constructor(e2, t4) {
    this.#y = t4 ?? new p({ moduleId: { isOptional: true }, serviceId: { isOptional: false } }), this.#v = e2;
  }
  static build(e2) {
    return new _j(e2);
  }
  add(e2, t4) {
    this.#y.add(e2, t4);
  }
  clone() {
    return new _j(this.#v, this.#y.clone());
  }
  get(e2) {
    const t4 = [], n3 = this.#y.get(C.serviceId, e2);
    void 0 !== n3 && t4.push(n3);
    const i2 = this.#v()?.get(e2);
    if (void 0 !== i2 && t4.push(i2), 0 !== t4.length) return l(...t4);
  }
  removeAllByModuleId(e2) {
    this.#y.removeByRelation(C.moduleId, e2);
  }
  removeAllByServiceId(e2) {
    this.#y.removeByRelation(C.serviceId, e2);
  }
};
function $(e2, t4) {
  return (...n3) => (i2) => {
    if (void 0 === i2) return e2(...n3);
    if (i2.kind === S.unmanaged) throw new M(I.injectionDecoratorConflict, "Unexpected injection found. Multiple @inject, @multiInject or @unmanaged decorators found");
    return t4(i2, ...n3);
  };
}
function D(e2) {
  if (e2.kind !== b.unknown && true !== e2.isFromTypescriptParamType) throw new M(I.injectionDecoratorConflict, "Unexpected injection found. Multiple @inject, @multiInject or @unmanaged decorators found");
}
!function(e2) {
  e2[e2.multipleInjection = 0] = "multipleInjection", e2[e2.singleInjection = 1] = "singleInjection", e2[e2.unmanaged = 2] = "unmanaged";
}(S || (S = {}));
var V = $(function(e2, t4, n3) {
  return e2 === S.multipleInjection ? { chained: n3?.chained ?? false, kind: e2, name: void 0, optional: false, tags: /* @__PURE__ */ new Map(), value: t4 } : { kind: e2, name: void 0, optional: false, tags: /* @__PURE__ */ new Map(), value: t4 };
}, function(e2, t4, n3, i2) {
  return D(e2), t4 === S.multipleInjection ? { ...e2, chained: i2?.chained ?? false, kind: t4, value: n3 } : { ...e2, kind: t4, value: n3 };
});
var E;
!function(e2) {
  e2[e2.method = 0] = "method", e2[e2.parameter = 1] = "parameter", e2[e2.property = 2] = "property";
}(E || (E = {}));
var K = "@inversifyjs/core/classIsInjectableFlagReflectKey";
var q = [Array, BigInt, Boolean, Function, Number, Object, String];
function G(t4) {
  const i2 = c(t4, "design:paramtypes");
  void 0 !== i2 && i(t4, h, g, /* @__PURE__ */ function(e2) {
    return (t5) => (e2.forEach((e3, n3) => {
      var i3;
      void 0 !== t5.constructorArguments[n3] || (i3 = e3, q.includes(i3)) || (t5.constructorArguments[n3] = function(e4) {
        return { isFromTypescriptParamType: true, kind: S.singleInjection, name: void 0, optional: false, tags: /* @__PURE__ */ new Map(), value: e4 };
      }(e3));
    }), t5);
  }(i2));
}
function W(i2) {
  return (o) => {
    !function(n3) {
      if (void 0 !== c(n3, K)) throw new M(I.injectionDecoratorConflict, `Cannot apply @injectable decorator multiple times at class "${n3.name}"`);
      a(n3, K, true);
    }(o), G(o), void 0 !== i2 && i(o, h, g, (e2) => ({ ...e2, scope: i2 }));
  };
}
function ue() {
  return { kind: S.unmanaged };
}
var le = $(ue, function(e2) {
  if (D(e2), function(e3) {
    return void 0 !== e3.name || e3.optional || e3.tags.size > 0;
  }(e2)) throw new M(I.injectionDecoratorConflict, "Unexpected injection found. Found @unmanaged injection with additional @named, @optional, @tagged or @targetName injections");
  return ue();
});
var fe;
!function(e2) {
  e2[e2.multipleInjection = 0] = "multipleInjection", e2[e2.singleInjection = 1] = "singleInjection";
}(fe || (fe = {}));
var ve = /stack space|call stack|too much recursion/i;
var he = /too much recursion/;
function ge(e2) {
  try {
    return e2 instanceof Error && (e2 instanceof RangeError && ve.test(e2.message) || "InternalError" === e2.name && he.test(e2.message));
  } catch (e3) {
    return e3 instanceof SyntaxError && e3.message.includes("Stack overflow");
  }
}
function me(e2, t4) {
  if (ge(t4)) {
    const n3 = function(e3) {
      const t5 = [...e3];
      if (0 === t5.length) return "(No dependency trace)";
      return t5.map(t).join(" -> ");
    }(function(e3) {
      const t5 = /* @__PURE__ */ new Set();
      for (const n4 of e3.servicesBranch) {
        if (t5.has(n4)) return [...t5, n4];
        t5.add(n4);
      }
      return [...t5];
    }(e2));
    throw new M(I.planning, `Circular dependency found: ${n3}`, { cause: t4 });
  }
  throw t4;
}
var ye = Symbol.for("@inversifyjs/core/LazyPlanServiceNode");
var Me = class {
  [ye];
  _serviceIdentifier;
  _serviceNode;
  constructor(e2, t4) {
    this[ye] = true, this._serviceNode = e2, this._serviceIdentifier = t4;
  }
  get bindings() {
    return this._getNode().bindings;
  }
  get isContextFree() {
    return this._getNode().isContextFree;
  }
  get serviceIdentifier() {
    return this._serviceIdentifier;
  }
  set bindings(e2) {
    this._getNode().bindings = e2;
  }
  set isContextFree(e2) {
    this._getNode().isContextFree = e2;
  }
  static is(e2) {
    return "object" == typeof e2 && null !== e2 && true === e2[ye];
  }
  invalidate() {
    this._serviceNode = void 0;
  }
  isExpanded() {
    return void 0 !== this._serviceNode;
  }
  _getNode() {
    return void 0 === this._serviceNode && (this._serviceNode = this._buildPlanServiceNode()), this._serviceNode;
  }
};
var Ie = class _Ie {
  #M;
  constructor(e2) {
    this.#M = e2;
  }
  get name() {
    return this.#M.elem.name;
  }
  get serviceIdentifier() {
    return this.#M.elem.serviceIdentifier;
  }
  get tags() {
    return this.#M.elem.tags;
  }
  getAncestor() {
    if (this.#M.elem.getAncestorsCalled = true, void 0 !== this.#M.previous) return new _Ie(this.#M.previous);
  }
};
function be(e2, t4, n3) {
  const i2 = n3?.customServiceIdentifier ?? t4.serviceIdentifier, o = (true === n3?.chained ? [...e2.operations.getBindingsChained(i2)] : [...e2.operations.getBindings(i2) ?? []]).filter((e3) => e3.isSatisfiedBy(t4));
  if (0 === o.length && void 0 !== e2.autobindOptions && "function" == typeof i2) {
    const n4 = P(e2.autobindOptions, i2);
    e2.operations.setBinding(n4), n4.isSatisfiedBy(t4) && o.push(n4);
  }
  return o;
}
var we = class _we {
  last;
  constructor(e2) {
    this.last = e2;
  }
  concat(e2) {
    return new _we({ elem: e2, previous: this.last });
  }
  [Symbol.iterator]() {
    let e2 = this.last;
    return { next: () => {
      if (void 0 === e2) return { done: true, value: void 0 };
      const t4 = e2.elem;
      return e2 = e2.previous, { done: false, value: t4 };
    } };
  }
};
function Ce(e2) {
  const t4 = /* @__PURE__ */ new Map();
  return void 0 !== e2.rootConstraints.tag && t4.set(e2.rootConstraints.tag.key, e2.rootConstraints.tag.value), new we({ elem: { getAncestorsCalled: false, name: e2.rootConstraints.name, serviceIdentifier: e2.rootConstraints.serviceIdentifier, tags: t4 }, previous: void 0 });
}
function Se(e2) {
  return void 0 !== e2.redirections;
}
function Ne(e2, t4, n3, i2) {
  const r2 = n3.elem.serviceIdentifier, s = n3.previous?.elem.serviceIdentifier;
  Array.isArray(e2) ? function(e3, t5, n4, i3, r3, s2) {
    if (0 !== e3.length) {
      const t6 = s2[s2.length - 1] ?? n4, a3 = `Ambiguous bindings found for service: "${t(t6)}".${Re(s2)}

Registered bindings:

${e3.map((e4) => function(e5) {
        switch (e5.type) {
          case u.Instance:
            return `[ type: "${e5.type}", serviceIdentifier: "${t(e5.serviceIdentifier)}", scope: "${e5.scope}", implementationType: "${e5.implementationType.name}" ]`;
          case u.ServiceRedirection:
            return `[ type: "${e5.type}", serviceIdentifier: "${t(e5.serviceIdentifier)}", redirection: "${t(e5.targetServiceIdentifier)}" ]`;
          default:
            return `[ type: "${e5.type}", serviceIdentifier: "${t(e5.serviceIdentifier)}", scope: "${e5.scope}" ]`;
        }
      }(e4.binding)).join("\n")}

Trying to resolve bindings for "${Ae(n4, i3)}".${xe(r3)}`;
      throw new M(I.planning, a3);
    }
    t5 || Pe(n4, i3, r3, s2);
  }(e2, t4, r2, s, n3.elem, i2) : function(e3, t5, n4, i3, o, r3) {
    void 0 !== e3 || t5 || Pe(n4, i3, o, r3);
  }(e2, t4, r2, s, n3.elem, i2);
}
function Pe(e2, t4, n3, i2) {
  const r2 = i2[i2.length - 1] ?? e2, s = `No bindings found for service: "${t(r2)}".

Trying to resolve bindings for "${Ae(e2, t4)}".${Re(i2)}${xe(n3)}`;
  throw new M(I.planning, s);
}
function Ae(e2, t4) {
  return void 0 === t4 ? `${t(e2)} (Root service)` : t(t4);
}
function xe(e2) {
  const t4 = 0 === e2.tags.size ? "" : `
- tags:
  - ${[...e2.tags.keys()].map((e3) => e3.toString()).join("\n  - ")}`;
  return `

Binding constraints:
- service identifier: ${t(e2.serviceIdentifier)}
- name: ${e2.name?.toString() ?? "-"}${t4}`;
}
function Re(e2) {
  return 0 === e2.length ? "" : `

- service redirections:
  - ${e2.map((e3) => t(e3)).join("\n  - ")}`;
}
function Te(e2, t4, n3, i2) {
  if (1 === e2.redirections.length) {
    const [o] = e2.redirections;
    return void (Se(o) && Te(o, t4, n3, [...i2, o.binding.targetServiceIdentifier]));
  }
  Ne(e2.redirections, t4, n3, i2);
}
function je(e2, t4, n3) {
  if (Array.isArray(e2.bindings) && 1 === e2.bindings.length) {
    const [i2] = e2.bindings;
    return void (Se(i2) && Te(i2, t4, n3, [i2.binding.targetServiceIdentifier]));
  }
  Ne(e2.bindings, t4, n3, []);
}
function Be(e2) {
  return r.is(e2) ? e2.unwrap() : e2;
}
function Fe(e2) {
  return (t4, n3, i2) => {
    const o = Be(i2.value), r2 = n3.concat({ getAncestorsCalled: false, name: i2.name, serviceIdentifier: o, tags: i2.tags }), s = new Ie(r2.last), a3 = i2.kind === S.multipleInjection && i2.chained, c3 = be(t4, s, { chained: a3 }), d2 = [], u2 = { bindings: d2, isContextFree: true, serviceIdentifier: o };
    if (d2.push(...e2(t4, r2, c3, u2, a3)), u2.isContextFree = !r2.last.elem.getAncestorsCalled, i2.kind === S.singleInjection) {
      je(u2, i2.optional, r2.last);
      const [e3] = d2;
      u2.bindings = e3;
    }
    return u2;
  };
}
function ke(e2) {
  return (t4, n3, i2) => {
    const o = Be(i2.value), r2 = n3.concat({ getAncestorsCalled: false, name: i2.name, serviceIdentifier: o, tags: i2.tags }), s = new Ie(r2.last), a3 = i2.kind === fe.multipleInjection && i2.chained, c3 = be(t4, s, { chained: a3 }), d2 = [], u2 = { bindings: d2, isContextFree: true, serviceIdentifier: o };
    if (d2.push(...e2(t4, r2, c3, u2, a3)), u2.isContextFree = !r2.last.elem.getAncestorsCalled, i2.kind === fe.singleInjection) {
      je(u2, i2.optional, r2.last);
      const [e3] = d2;
      u2.bindings = e3;
    }
    return u2;
  };
}
function $e(e2) {
  const t4 = /* @__PURE__ */ function(e3) {
    return (t5, n4, i3) => {
      const o2 = { binding: n4, classMetadata: t5.operations.getClassMetadata(n4.implementationType), constructorParams: [], propertyParams: /* @__PURE__ */ new Map() }, r2 = { autobindOptions: t5.autobindOptions, node: o2, operations: t5.operations, servicesBranch: t5.servicesBranch };
      return e3(r2, i3);
    };
  }(e2), n3 = /* @__PURE__ */ function(e3) {
    return (t5, n4, i3) => {
      const o2 = { binding: n4, params: [] }, r2 = { autobindOptions: t5.autobindOptions, node: o2, operations: t5.operations, servicesBranch: t5.servicesBranch };
      return e3(r2, i3);
    };
  }(e2), i2 = (e3, i3, r2, s, a3) => {
    const c3 = Se(s) ? s.binding.targetServiceIdentifier : s.serviceIdentifier;
    e3.servicesBranch.push(c3);
    const d2 = [];
    for (const s2 of r2) switch (s2.type) {
      case u.Instance:
        d2.push(t4(e3, s2, i3));
        break;
      case u.ResolvedValue:
        d2.push(n3(e3, s2, i3));
        break;
      case u.ServiceRedirection: {
        const t5 = o(e3, i3, s2, a3);
        d2.push(t5);
        break;
      }
      default:
        d2.push({ binding: s2 });
    }
    return e3.servicesBranch.pop(), d2;
  }, o = /* @__PURE__ */ function(e3) {
    return (t5, n4, i3, o2) => {
      const r2 = { binding: i3, redirections: [] }, s = be(t5, new Ie(n4.last), { chained: o2, customServiceIdentifier: i3.targetServiceIdentifier });
      return r2.redirections.push(...e3(t5, n4, s, r2, o2)), r2;
    };
  }(i2);
  return i2;
}
function De(e2, t4, n3, i2) {
  if (void 0 !== e2 && (Me.is(n3) && !n3.isExpanded() || n3.isContextFree)) {
    const i3 = { tree: { root: n3 } };
    t4.setPlan(e2, i3);
  } else t4.setNonCachedServiceNode(n3, i2);
}
var Ve = class extends Me {
  #I;
  #b;
  #w;
  #C;
  constructor(e2, t4, n3, i2, o) {
    super(o, Be(i2.value)), this.#b = t4, this.#I = e2, this.#w = n3, this.#C = i2;
  }
  _buildPlanServiceNode() {
    return this.#b(this.#I, this.#w, this.#C);
  }
};
var Oe = class extends Me {
  #I;
  #S;
  #w;
  #N;
  constructor(e2, t4, n3, i2, o) {
    super(o, Be(i2.value)), this.#I = e2, this.#S = t4, this.#w = n3, this.#N = i2;
  }
  _buildPlanServiceNode() {
    return this.#S(this.#I, this.#w, this.#N);
  }
};
function Ee(e2, t4, n3, i2) {
  const o = /* @__PURE__ */ function(e3, t5) {
    const n4 = /* @__PURE__ */ function(e4, t6) {
      return (n5, i3, o2) => {
        if (o2.kind === S.unmanaged) return;
        const s2 = function(e5) {
          let t7;
          if (0 === e5.tags.size) t7 = void 0;
          else {
            if (1 !== e5.tags.size) return;
            {
              const [n7, i4] = e5.tags.entries().next().value;
              t7 = { key: n7, value: i4 };
            }
          }
          const n6 = r.is(e5.value) ? e5.value.unwrap() : e5.value;
          return e5.kind === S.multipleInjection ? { chained: e5.chained, isMultiple: true, name: e5.name, optional: e5.optional, serviceIdentifier: n6, tag: t7 } : { isMultiple: false, name: e5.name, optional: e5.optional, serviceIdentifier: n6, tag: t7 };
        }(o2);
        if (void 0 !== s2) {
          const e5 = n5.operations.getPlan(s2);
          if (void 0 !== e5 && e5.tree.root.isContextFree) return e5.tree.root;
        }
        const a3 = t6(n5, i3, o2), c3 = new Ve(n5, e4, i3, o2, a3);
        return De(s2, n5.operations, c3, { bindingConstraintsList: i3, chainedBindings: o2.kind === S.multipleInjection && o2.chained, optionalBindings: o2.optional }), c3;
      };
    }(e3, t5);
    return (e4, t6, i3) => {
      const o2 = t6.classMetadata;
      for (const [r2, s2] of o2.constructorArguments.entries()) t6.constructorParams[r2] = n4(e4, i3, s2);
      for (const [r2, s2] of o2.properties) {
        const o3 = n4(e4, i3, s2);
        void 0 !== o3 && t6.propertyParams.set(r2, o3);
      }
      return e4.node;
    };
  }(e2, n3), s = /* @__PURE__ */ function(e3, t5) {
    const n4 = /* @__PURE__ */ function(e4, t6) {
      return (n5, i3, o2) => {
        const s2 = function(e5) {
          let t7;
          if (0 === e5.tags.size) t7 = void 0;
          else {
            if (1 !== e5.tags.size) return;
            {
              const [n7, i4] = e5.tags.entries().next().value;
              t7 = { key: n7, value: i4 };
            }
          }
          const n6 = r.is(e5.value) ? e5.value.unwrap() : e5.value;
          return e5.kind === fe.multipleInjection ? { chained: e5.chained, isMultiple: true, name: e5.name, optional: e5.optional, serviceIdentifier: n6, tag: t7 } : { isMultiple: false, name: e5.name, optional: e5.optional, serviceIdentifier: n6, tag: t7 };
        }(o2);
        if (void 0 !== s2) {
          const e5 = n5.operations.getPlan(s2);
          if (void 0 !== e5 && e5.tree.root.isContextFree) return e5.tree.root;
        }
        const a3 = t6(n5, i3, o2), c3 = new Oe(n5, e4, i3, o2, a3);
        return De(s2, n5.operations, c3, { bindingConstraintsList: i3, chainedBindings: o2.kind === fe.multipleInjection && o2.chained, optionalBindings: o2.optional }), c3;
      };
    }(e3, t5);
    return (e4, t6, i3) => {
      const o2 = t6.binding.metadata;
      for (const [r2, s2] of o2.arguments.entries()) t6.params[r2] = n4(e4, i3, s2);
      return e4.node;
    };
  }(t4, i2);
  return (e3, t5) => e3.node.binding.type === u.Instance ? o(e3, e3.node, t5) : s(e3, e3.node, t5);
}
var _e = class extends Me {
  #I;
  constructor(e2, t4) {
    super(t4, t4.serviceIdentifier), this.#I = e2;
  }
  _buildPlanServiceNode() {
    return qe(this.#I);
  }
};
var ze = Fe(Ke);
var Le = ke(Ke);
var Ue = $e(Ee(ze, Le, ze, Le));
function Ke(e2, t4, n3, i2, o) {
  return Ue(e2, t4, n3, i2, o);
}
var qe = /* @__PURE__ */ function(e2) {
  return (t4) => {
    const n3 = Ce(t4), i2 = new Ie(n3.last), o = t4.rootConstraints.isMultiple && t4.rootConstraints.chained, r2 = be(t4, i2, { chained: o }), s = [], a3 = { bindings: s, isContextFree: true, serviceIdentifier: t4.rootConstraints.serviceIdentifier };
    if (s.push(...e2(t4, n3, r2, a3, o)), a3.isContextFree = !n3.last.elem.getAncestorsCalled, !t4.rootConstraints.isMultiple) {
      je(a3, t4.rootConstraints.isOptional ?? false, n3.last);
      const [e3] = s;
      a3.bindings = e3;
    }
    return a3;
  };
}(Ue);
function Ge(e2) {
  try {
    const t4 = function(e3) {
      return e3.rootConstraints.isMultiple ? { chained: e3.rootConstraints.chained, isMultiple: true, name: e3.rootConstraints.name, optional: e3.rootConstraints.isOptional ?? false, serviceIdentifier: e3.rootConstraints.serviceIdentifier, tag: e3.rootConstraints.tag } : { isMultiple: false, name: e3.rootConstraints.name, optional: e3.rootConstraints.isOptional ?? false, serviceIdentifier: e3.rootConstraints.serviceIdentifier, tag: e3.rootConstraints.tag };
    }(e2), n3 = e2.operations.getPlan(t4);
    if (void 0 !== n3) return n3;
    const i2 = qe(e2), o = { tree: { root: new _e(e2, i2) } };
    return e2.operations.setPlan(t4, o), o;
  } catch (t4) {
    me(e2, t4);
  }
}
var We;
!function(e2) {
  e2.bindingAdded = "bindingAdded", e2.bindingRemoved = "bindingRemoved";
}(We || (We = {}));
var Xe = class {
  #P;
  #A;
  #x;
  constructor() {
    this.#P = [], this.#A = 8, this.#x = 1024;
  }
  *[Symbol.iterator]() {
    let e2 = 0;
    for (const t4 of this.#P) {
      const n3 = t4.deref();
      void 0 === n3 ? ++e2 : yield n3;
    }
    this.#P.length >= this.#A && this.#R(e2) && this.#T(e2);
  }
  push(e2) {
    const t4 = new WeakRef(e2);
    if (this.#P.push(t4), this.#P.length >= this.#A && this.#P.length % this.#x === 0) {
      let e3 = 0;
      for (const t5 of this.#P) void 0 === t5.deref() && ++e3;
      this.#R(e3) && this.#T(e3);
    }
  }
  #T(e2) {
    const t4 = new Array(this.#P.length - e2);
    let n3 = 0;
    for (const e3 of this.#P) e3.deref() && (t4[n3++] = e3);
    this.#P = t4;
  }
  #R(e2) {
    return e2 >= 0.5 * this.#P.length;
  }
};
var He = $e(Ee(ze, Le, function(e2, t4, n3) {
  return Je(e2, t4, n3);
}, function(e2, t4, n3) {
  return Qe(e2, t4, n3);
}));
var Je = function(e2) {
  const t4 = Fe(e2);
  return (e3, n3, i2) => {
    try {
      return t4(e3, n3, i2);
    } catch (e4) {
      if (M.isErrorOfKind(e4, I.planning)) return;
      throw e4;
    }
  };
}(He);
var Qe = function(e2) {
  const t4 = ke(e2);
  return (e3, n3, i2) => {
    try {
      return t4(e3, n3, i2);
    } catch (e4) {
      if (M.isErrorOfKind(e4, I.planning)) return;
      throw e4;
    }
  };
}(He);
function Ye(e2, t4, n3, i2, o) {
  if (Me.is(t4) && !t4.isExpanded()) return { isContextFreeBinding: true, shouldInvalidateServiceNode: false };
  const r2 = new Ie(i2.last);
  return !n3.isSatisfiedBy(r2) || i2.last.elem.getAncestorsCalled ? { isContextFreeBinding: !i2.last.elem.getAncestorsCalled, shouldInvalidateServiceNode: false } : function(e3, t5, n4, i3, o2) {
    let r3;
    try {
      [r3] = He(e3, i3, [n4], t5, o2);
    } catch (e4) {
      if (ge(e4)) return { isContextFreeBinding: false, shouldInvalidateServiceNode: true };
      throw e4;
    }
    return function(e4, t6) {
      if (Array.isArray(e4.bindings)) e4.bindings.push(t6);
      else {
        if (void 0 !== e4.bindings) {
          if (!Me.is(e4)) throw new M(I.planning, "Unexpected non-lazy plan service node. This is likely a bug in the planning logic. Please, report this issue");
          return { isContextFreeBinding: true, shouldInvalidateServiceNode: true };
        }
        e4.bindings = t6;
      }
      return { isContextFreeBinding: true, shouldInvalidateServiceNode: false };
    }(t5, r3);
  }(e2, t4, n3, i2, o);
}
function Ze(e2, t4, n3, i2) {
  if (Me.is(e2) && !e2.isExpanded()) return { bindingNodeRemoved: void 0, isContextFreeBinding: true };
  const o = new Ie(n3.last);
  if (!t4.isSatisfiedBy(o) || n3.last.elem.getAncestorsCalled) return { bindingNodeRemoved: void 0, isContextFreeBinding: !n3.last.elem.getAncestorsCalled };
  let r2;
  if (Array.isArray(e2.bindings)) e2.bindings = e2.bindings.filter((e3) => e3.binding !== t4 || (r2 = e3, false));
  else if (e2.bindings?.binding === t4) if (r2 = e2.bindings, i2) e2.bindings = void 0;
  else {
    if (!Me.is(e2)) throw new M(I.planning, "Unexpected non-lazy plan service node. This is likely a bug in the planning logic. Please, report this issue");
    e2.invalidate();
  }
  return { bindingNodeRemoved: r2, isContextFreeBinding: true };
}
var et = class {
  #j;
  #B;
  #F;
  #k;
  #$;
  #D;
  constructor() {
    this.#j = /* @__PURE__ */ new Map(), this.#B = this.#V(), this.#F = this.#V(), this.#k = this.#V(), this.#$ = this.#V(), this.#D = new Xe();
  }
  clearCache() {
    for (const e2 of this.#O()) e2.clear();
    for (const e2 of this.#D) e2.clearCache();
  }
  get(e2) {
    return void 0 === e2.name ? void 0 === e2.tag ? this.#E(this.#B, e2).get(e2.serviceIdentifier) : this.#E(this.#$, e2).get(e2.serviceIdentifier)?.get(e2.tag.key)?.get(e2.tag.value) : void 0 === e2.tag ? this.#E(this.#F, e2).get(e2.serviceIdentifier)?.get(e2.name) : this.#E(this.#k, e2).get(e2.serviceIdentifier)?.get(e2.name)?.get(e2.tag.key)?.get(e2.tag.value);
  }
  invalidateServiceBinding(e2) {
    this.#_(e2), this.#z(e2), this.#L(e2), this.#U(e2), this.#K(e2);
    for (const t4 of this.#D) t4.invalidateServiceBinding(e2);
  }
  set(e2, t4) {
    void 0 === e2.name ? void 0 === e2.tag ? this.#E(this.#B, e2).set(e2.serviceIdentifier, t4) : this.#q(this.#q(this.#E(this.#$, e2), e2.serviceIdentifier), e2.tag.key).set(e2.tag.value, t4) : void 0 === e2.tag ? this.#q(this.#E(this.#F, e2), e2.serviceIdentifier).set(e2.name, t4) : this.#q(this.#q(this.#q(this.#E(this.#k, e2), e2.serviceIdentifier), e2.name), e2.tag.key).set(e2.tag.value, t4);
  }
  setNonCachedServiceNode(e2, t4) {
    let n3 = this.#j.get(e2.serviceIdentifier);
    void 0 === n3 && (n3 = /* @__PURE__ */ new Map(), this.#j.set(e2.serviceIdentifier, n3)), n3.set(e2, t4);
  }
  subscribe(e2) {
    this.#D.push(e2);
  }
  #V() {
    const e2 = new Array(8);
    for (let t4 = 0; t4 < e2.length; ++t4) e2[t4] = /* @__PURE__ */ new Map();
    return e2;
  }
  #G(e2, t4, n3, i2) {
    const o = !!(2 & t4);
    let r2;
    if (o) {
      r2 = { chained: !!(0 & t4), isMultiple: o, serviceIdentifier: e2.binding.serviceIdentifier };
    } else r2 = { isMultiple: o, serviceIdentifier: e2.binding.serviceIdentifier };
    return !!(1 & t4) && (r2.isOptional = true), void 0 !== n3 && (r2.name = n3), void 0 !== i2 && (r2.tag = i2), { autobindOptions: void 0, operations: e2.operations, rootConstraints: r2, servicesBranch: [] };
  }
  #q(e2, t4) {
    let n3 = e2.get(t4);
    return void 0 === n3 && (n3 = /* @__PURE__ */ new Map(), e2.set(t4, n3)), n3;
  }
  #E(e2, t4) {
    return e2[this.#W(t4)];
  }
  #O() {
    return [this.#j, ...this.#B, ...this.#F, ...this.#k, ...this.#$];
  }
  #W(e2) {
    return e2.isMultiple ? (e2.chained ? 4 : 0) | (e2.optional ? 1 : 0) | 2 : e2.optional ? 1 : 0;
  }
  #z(e2) {
    for (const [t4, n3] of this.#F.entries()) {
      const i2 = n3.get(e2.binding.serviceIdentifier);
      if (void 0 !== i2) for (const [n4, o] of i2.entries()) this.#X(e2, o, t4, n4, void 0);
    }
  }
  #L(e2) {
    for (const [t4, n3] of this.#k.entries()) {
      const i2 = n3.get(e2.binding.serviceIdentifier);
      if (void 0 !== i2) for (const [n4, o] of i2.entries()) for (const [i3, r2] of o.entries()) for (const [o2, s] of r2.entries()) this.#X(e2, s, t4, n4, { key: i3, value: o2 });
    }
  }
  #H(e2) {
    switch (e2.binding.type) {
      case u.ServiceRedirection:
        for (const t4 of e2.redirections) this.#H(t4);
        break;
      case u.Instance:
        for (const t4 of e2.constructorParams) void 0 !== t4 && this.#J(t4);
        for (const t4 of e2.propertyParams.values()) this.#J(t4);
        break;
      case u.ResolvedValue:
        for (const t4 of e2.params) this.#J(t4);
    }
  }
  #J(e2) {
    const t4 = this.#j.get(e2.serviceIdentifier);
    void 0 !== t4 && t4.has(e2) && (t4.delete(e2), this.#Q(e2));
  }
  #Q(e2) {
    if ((!Me.is(e2) || e2.isExpanded()) && void 0 !== e2.bindings) if (Array.isArray(e2.bindings)) for (const t4 of e2.bindings) this.#H(t4);
    else this.#H(e2.bindings);
  }
  #K(e2) {
    const t4 = this.#j.get(e2.binding.serviceIdentifier);
    if (void 0 !== t4) switch (e2.kind) {
      case We.bindingAdded:
        for (const [n3, i2] of t4) {
          const t5 = Ye({ autobindOptions: void 0, operations: e2.operations, servicesBranch: [] }, n3, e2.binding, i2.bindingConstraintsList, i2.chainedBindings);
          t5.isContextFreeBinding ? t5.shouldInvalidateServiceNode && Me.is(n3) && (this.#Q(n3), n3.invalidate()) : this.clearCache();
        }
        break;
      case We.bindingRemoved:
        for (const [n3, i2] of t4) {
          const t5 = Ze(n3, e2.binding, i2.bindingConstraintsList, i2.optionalBindings);
          t5.isContextFreeBinding ? void 0 !== t5.bindingNodeRemoved && this.#H(t5.bindingNodeRemoved) : this.clearCache();
        }
    }
  }
  #_(e2) {
    for (const [t4, n3] of this.#B.entries()) {
      const i2 = n3.get(e2.binding.serviceIdentifier);
      this.#X(e2, i2, t4, void 0, void 0);
    }
  }
  #U(e2) {
    for (const [t4, n3] of this.#$.entries()) {
      const i2 = n3.get(e2.binding.serviceIdentifier);
      if (void 0 !== i2) for (const [n4, o] of i2.entries()) for (const [i3, r2] of o.entries()) this.#X(e2, r2, t4, void 0, { key: n4, value: i3 });
    }
  }
  #X(e2, t4, n3, i2, o) {
    if (void 0 !== t4 && Me.is(t4.tree.root)) {
      const c3 = this.#G(e2, n3, i2, o);
      switch (e2.kind) {
        case We.bindingAdded:
          {
            const n4 = (r2 = c3, s = t4.tree.root, a3 = e2.binding, Me.is(s) && !s.isExpanded() ? { isContextFreeBinding: true, shouldInvalidateServiceNode: false } : Ye(r2, s, a3, Ce(r2), r2.rootConstraints.isMultiple && r2.rootConstraints.chained));
            n4.isContextFreeBinding ? n4.shouldInvalidateServiceNode && (this.#Q(t4.tree.root), t4.tree.root.invalidate()) : this.clearCache();
          }
          break;
        case We.bindingRemoved: {
          const n4 = function(e3, t5, n5) {
            return Me.is(t5) && !t5.isExpanded() ? { bindingNodeRemoved: void 0, isContextFreeBinding: true } : Ze(t5, n5, Ce(e3), e3.rootConstraints.isOptional ?? false);
          }(c3, t4.tree.root, e2.binding);
          n4.isContextFreeBinding ? void 0 !== n4.bindingNodeRemoved && this.#H(n4.bindingNodeRemoved) : this.clearCache();
        }
      }
    }
    var r2, s, a3;
  }
};
function tt(e2, t4) {
  if (ge(t4)) {
    const n3 = function(e3) {
      const t5 = [...e3];
      if (0 === t5.length) return "(No dependency trace)";
      return t5.map(t).join(" -> ");
    }(function(e3) {
      const t5 = e3.planResult.tree.root, n4 = [];
      function i2(e4) {
        const t6 = n4.indexOf(e4);
        if (-1 !== t6) {
          return [...n4.slice(t6), e4].map((e5) => e5.serviceIdentifier);
        }
        n4.push(e4);
        try {
          for (const t7 of function(e5) {
            const t8 = [], n5 = e5.bindings;
            if (void 0 === n5) return t8;
            const i3 = (e6) => {
              if (Se(e6)) for (const t9 of e6.redirections) i3(t9);
              else switch (e6.binding.type) {
                case u.Instance: {
                  const n6 = e6;
                  for (const e7 of n6.constructorParams) void 0 !== e7 && t8.push(e7);
                  for (const e7 of n6.propertyParams.values()) t8.push(e7);
                  break;
                }
                case u.ResolvedValue: {
                  const n6 = e6;
                  for (const e7 of n6.params) t8.push(e7);
                  break;
                }
              }
            };
            if (Array.isArray(n5)) for (const e6 of n5) i3(e6);
            else i3(n5);
            return t8;
          }(e4)) {
            const e5 = i2(t7);
            if (void 0 !== e5) return e5;
          }
        } finally {
          n4.pop();
        }
      }
      return i2(t5) ?? [];
    }(e2));
    throw new M(I.planning, `Circular dependency found: ${n3}`, { cause: t4 });
  }
  throw t4;
}
function nt(e2, t4) {
  return e(t4) ? (e2.cache = { isRight: true, value: t4 }, t4.then((t5) => it(e2, t5))) : it(e2, t4);
}
function it(e2, t4) {
  return e2.cache = { isRight: true, value: t4 }, t4;
}
function ot(e2, t4, n3) {
  const i2 = e2.getActivations(t4);
  return void 0 === i2 ? n3 : e(n3) ? rt(e2, n3, i2[Symbol.iterator]()) : function(e3, t5, n4) {
    let i3 = t5, o = n4.next();
    for (; true !== o.done; ) {
      const t6 = o.value(e3.context, i3);
      if (e(t6)) return rt(e3, t6, n4);
      i3 = t6, o = n4.next();
    }
    return i3;
  }(e2, n3, i2[Symbol.iterator]());
}
async function rt(e2, t4, n3) {
  let i2 = await t4, o = n3.next();
  for (; true !== o.done; ) i2 = await o.value(e2.context, i2), o = n3.next();
  return i2;
}
function st(e2, t4, n3) {
  let i2 = n3;
  if (void 0 !== t4.onActivation) {
    const n4 = t4.onActivation;
    i2 = e(i2) ? i2.then((t5) => n4(e2.context, t5)) : n4(e2.context, i2);
  }
  return ot(e2, t4.serviceIdentifier, i2);
}
function at(e2) {
  return (t4, n3) => {
    if (n3.cache.isRight) return n3.cache.value;
    return nt(n3, st(t4, n3, e2(t4, n3)));
  };
}
var ct = at(function(e2, t4) {
  return t4.value;
});
function dt(e2) {
  return e2;
}
function ut(e2, t4) {
  return (n3, i2) => {
    const o = e2(i2);
    switch (o.scope) {
      case d.Singleton:
        if (o.cache.isRight) return o.cache.value;
        return nt(o, st(n3, o, t4(n3, i2)));
      case d.Request: {
        if (n3.requestScopeCache.has(o.id)) return n3.requestScopeCache.get(o.id);
        const e3 = st(n3, o, t4(n3, i2));
        return n3.requestScopeCache.set(o.id, e3), e3;
      }
      case d.Transient:
        return st(n3, o, t4(n3, i2));
    }
  };
}
var lt = ((e2) => ut(dt, e2))(function(e2, t4) {
  return t4.value(e2.context);
});
var pt = at(function(e2, t4) {
  return t4.factory(e2.context);
});
function ft(e2, t4, n3) {
  const i2 = function(e3, t5, n4) {
    if (!(n4 in e3)) throw new M(I.resolution, `Expecting a "${n4.toString()}" property when resolving "${t5.implementationType.name}" class @postConstruct decorated method, none found.`);
    if ("function" != typeof e3[n4]) throw new M(I.resolution, `Expecting a "${n4.toString()}" method when resolving "${t5.implementationType.name}" class @postConstruct decorated method, a non function property was found instead.`);
    {
      let i3;
      try {
        i3 = e3[n4]();
      } catch (e4) {
        throw new M(I.resolution, `Unexpected error found when calling "${n4.toString()}" @postConstruct decorated method on class "${t5.implementationType.name}"`, { cause: e4 });
      }
      if (e(i3)) return async function(e4, t6, n5) {
        try {
          await n5;
        } catch (n6) {
          throw new M(I.resolution, `Unexpected error found when calling "${t6.toString()}" @postConstruct decorated method on class "${e4.implementationType.name}"`, { cause: n6 });
        }
      }(t5, n4, i3);
    }
  }(e2, t4, n3);
  return e(i2) ? i2.then(() => e2) : e2;
}
function vt(e2, t4, n3) {
  if (0 === n3.size) return e2;
  let i2 = e2;
  for (const e3 of n3) i2 = e(i2) ? i2.then((n4) => ft(n4, t4, e3)) : ft(i2, t4, e3);
  return i2;
}
function ht(e2) {
  return (t4, n3, i2) => {
    const o = new i2.binding.implementationType(...t4), r2 = e2(n3, o, i2);
    return e(r2) ? r2.then(() => vt(o, i2.binding, i2.classMetadata.lifecycle.postConstructMethodNames)) : vt(o, i2.binding, i2.classMetadata.lifecycle.postConstructMethodNames);
  };
}
var gt = at(function(e2, t4) {
  return t4.provider(e2.context);
});
function mt(e2) {
  return e2.binding;
}
function yt(e2) {
  return e2.binding;
}
var Mt = /* @__PURE__ */ function(e2) {
  return (t4, n3, i2) => {
    const o = [];
    for (const [r2, a3] of i2.propertyParams) {
      const c3 = i2.classMetadata.properties.get(r2);
      if (void 0 === c3) throw new M(I.resolution, `Expecting metadata at property "${r2.toString()}", none found`);
      c3.kind !== S.unmanaged && void 0 !== a3.bindings && (n3[r2] = e2(t4, a3), e(n3[r2]) && o.push((async () => {
        n3[r2] = await n3[r2];
      })()));
    }
    if (o.length > 0) return Promise.all(o).then(() => {
    });
  };
}(At);
var It = /* @__PURE__ */ function(e2) {
  return function t4(n3, i2) {
    const o = [];
    for (const r2 of i2.redirections) Se(r2) ? o.push(...t4(n3, r2)) : o.push(e2(n3, r2));
    return o;
  };
}(Pt);
var bt = /* @__PURE__ */ function(e2, t4, n3) {
  return (i2, o) => {
    const r2 = e2(i2, o);
    return e(r2) ? t4(r2, i2, o) : n3(r2, i2, o);
  };
}(/* @__PURE__ */ function(e2) {
  return (t4, n3) => {
    const i2 = [];
    for (const o of n3.constructorParams) void 0 === o ? i2.push(void 0) : i2.push(e2(t4, o));
    return i2.some(e) ? Promise.all(i2) : i2;
  };
}(At), /* @__PURE__ */ function(e2) {
  return async (t4, n3, i2) => {
    const o = await t4;
    return e2(o, n3, i2);
  };
}(ht(Mt)), ht(Mt));
var wt = /* @__PURE__ */ function(e2) {
  return (t4, n3) => {
    const i2 = e2(t4, n3);
    return e(i2) ? i2.then((e3) => n3.binding.factory(...e3)) : n3.binding.factory(...i2);
  };
}(/* @__PURE__ */ function(e2) {
  return (t4, n3) => {
    const i2 = [];
    for (const o of n3.params) i2.push(e2(t4, o));
    return i2.some(e) ? Promise.all(i2) : i2;
  };
}(At));
var Ct = ((e2) => ut(mt, e2))(bt);
var St = ((e2) => ut(yt, e2))(wt);
function Nt(e2) {
  try {
    return At(e2, e2.planResult.tree.root);
  } catch (t4) {
    tt(e2, t4);
  }
}
function Pt(e2, t4) {
  switch (t4.binding.type) {
    case u.ConstantValue:
      return ct(e2, t4.binding);
    case u.DynamicValue:
      return lt(e2, t4.binding);
    case u.Factory:
      return pt(e2, t4.binding);
    case u.Instance:
      return Ct(e2, t4);
    case u.Provider:
      return gt(e2, t4.binding);
    case u.ResolvedValue:
      return St(e2, t4);
  }
}
function At(e2, t4) {
  if (void 0 !== t4.bindings) return Array.isArray(t4.bindings) ? function(e3, t5) {
    const n3 = [];
    for (const i2 of t5) Se(i2) ? n3.push(...It(e3, i2)) : n3.push(Pt(e3, i2));
    if (n3.some(e)) return Promise.all(n3);
    return n3;
  }(e2, t4.bindings) : function(e3, t5) {
    if (Se(t5)) {
      const n3 = It(e3, t5);
      if (1 === n3.length) return n3[0];
      throw new M(I.resolution, "Unexpected multiple resolved values on single injection");
    }
    return Pt(e3, t5);
  }(e2, t4.bindings);
}
function xt(e2) {
  return void 0 !== e2.scope;
}
function Rt(e2, t4) {
  if ("function" == typeof e2[t4]) {
    return e2[t4]();
  }
}
function Tt(e2, t4) {
  const n3 = e2.lifecycle.preDestroyMethodNames;
  if (0 === n3.size) return;
  let i2;
  for (const e3 of n3) i2 = void 0 === i2 ? Rt(t4, e3) : i2.then(() => Rt(t4, e3));
  return i2;
}
function jt(e2, t4, n3) {
  const i2 = e2.getDeactivations(t4);
  if (void 0 !== i2) return e(n3) ? Bt(n3, i2[Symbol.iterator]()) : function(e3, t5) {
    let n4 = t5.next();
    for (; true !== n4.done; ) {
      const i3 = n4.value(e3);
      if (e(i3)) return Bt(e3, t5);
      n4 = t5.next();
    }
  }(n3, i2[Symbol.iterator]());
}
async function Bt(e2, t4) {
  const n3 = await e2;
  let i2 = t4.next();
  for (; true !== i2.done; ) await i2.value(n3), i2 = t4.next();
}
function Ft(e2, t4) {
  const n3 = function(e3, t5) {
    if (t5.type === u.Instance) {
      const n4 = e3.getClassMetadata(t5.implementationType), i2 = t5.cache.value;
      return e(i2) ? i2.then((e4) => Tt(n4, e4)) : Tt(n4, i2);
    }
  }(e2, t4);
  return void 0 === n3 ? kt(e2, t4) : n3.then(() => kt(e2, t4));
}
function kt(e2, t4) {
  const n3 = t4.cache;
  return e(n3.value) ? n3.value.then((n4) => $t(e2, t4, n4)) : $t(e2, t4, n3.value);
}
function $t(e2, t4, n3) {
  let i2;
  if (void 0 !== t4.onDeactivation) {
    i2 = (0, t4.onDeactivation)(n3);
  }
  return void 0 === i2 ? jt(e2, t4.serviceIdentifier, n3) : i2.then(() => jt(e2, t4.serviceIdentifier, n3));
}
function Dt(e2, t4) {
  if (void 0 === t4) return;
  const n3 = function(e3) {
    const t5 = [];
    for (const n4 of e3) xt(n4) && n4.scope === d.Singleton && n4.cache.isRight && t5.push(n4);
    return t5;
  }(t4), i2 = [];
  for (const t5 of n3) {
    const n4 = Ft(e2, t5);
    void 0 !== n4 && i2.push(n4);
  }
  return i2.length > 0 ? Promise.all(i2).then(() => {
  }) : void 0;
}
function Vt(e2, t4) {
  const n3 = e2.getBindingsFromModule(t4);
  return Dt(e2, n3);
}
function Ot(e2, t4) {
  const n3 = e2.getBindings(t4);
  return Dt(e2, n3);
}

// asset-input/node_modules/@inversifyjs/plugin/lib/esm/index.js
var t3 = Symbol.for("@inversifyjs/plugin/isPlugin");
var n2 = class {
  [t3] = true;
  _container;
  _context;
  constructor(t4, n3) {
    this._container = t4, this._context = n3;
  }
};

// asset-input/node_modules/@inversifyjs/container/lib/esm/index.js
var A2 = Symbol.for("@inversifyjs/container/bindingIdentifier");
function I2(e2) {
  return "object" == typeof e2 && null !== e2 && true === e2[A2];
}
var P2 = class {
  static always = (e2) => true;
};
var C2 = Symbol.for("@inversifyjs/container/InversifyContainerError");
var B = class _B extends Error {
  [C2];
  kind;
  constructor(e2, n3, i2) {
    super(n3, i2), this[C2] = true, this.kind = e2;
  }
  static is(e2) {
    return "object" == typeof e2 && null !== e2 && true === e2[C2];
  }
  static isErrorOfKind(e2, n3) {
    return _B.is(e2) && e2.kind === n3;
  }
};
var O;
function x2(e2) {
  return { [A2]: true, id: e2.id };
}
function k(e2) {
  return (n3) => {
    for (let i2 = n3.getAncestor(); void 0 !== i2; i2 = i2.getAncestor()) if (e2(i2)) return true;
    return false;
  };
}
function N2(e2) {
  return (n3) => n3.name === e2;
}
function U(e2) {
  return (n3) => n3.serviceIdentifier === e2;
}
function F(e2, n3) {
  return (i2) => i2.tags.has(e2) && i2.tags.get(e2) === n3;
}
function D2(e2) {
  return void 0 === e2.name && 0 === e2.tags.size;
}
function j2(e2) {
  const n3 = k(e2);
  return (e3) => !n3(e3);
}
function T2(e2) {
  return (n3) => {
    const i2 = n3.getAncestor();
    return void 0 === i2 || !e2(i2);
  };
}
function V2(e2) {
  return (n3) => {
    const i2 = n3.getAncestor();
    return void 0 !== i2 && e2(i2);
  };
}
!function(e2) {
  e2[e2.invalidOperation = 0] = "invalidOperation";
}(O || (O = {}));
var E2 = class {
  #i;
  constructor(e2) {
    this.#i = e2;
  }
  getIdentifier() {
    return x2(this.#i);
  }
  inRequestScope() {
    return this.#i.scope = d.Request, new G2(this.#i);
  }
  inSingletonScope() {
    return this.#i.scope = d.Singleton, new G2(this.#i);
  }
  inTransientScope() {
    return this.#i.scope = d.Transient, new G2(this.#i);
  }
};
var L = class {
  #t;
  #r;
  #a;
  #s;
  constructor(e2, n3, i2, t4) {
    this.#t = e2, this.#r = n3, this.#a = i2, this.#s = t4;
  }
  to(e2) {
    const n3 = N(e2), i2 = { cache: { isRight: false, value: void 0 }, id: c2(), implementationType: e2, isSatisfiedBy: P2.always, moduleId: this.#r, onActivation: void 0, onDeactivation: void 0, scope: n3.scope ?? this.#a, serviceIdentifier: this.#s, type: u.Instance };
    return this.#t(i2), new H(i2);
  }
  toSelf() {
    if ("function" != typeof this.#s) throw new Error('"toSelf" function can only be applied when a newable function is used as service identifier');
    return this.to(this.#s);
  }
  toConstantValue(e2) {
    const n3 = { cache: { isRight: false, value: void 0 }, id: c2(), isSatisfiedBy: P2.always, moduleId: this.#r, onActivation: void 0, onDeactivation: void 0, scope: d.Singleton, serviceIdentifier: this.#s, type: u.ConstantValue, value: e2 };
    return this.#t(n3), new G2(n3);
  }
  toDynamicValue(e2) {
    const n3 = { cache: { isRight: false, value: void 0 }, id: c2(), isSatisfiedBy: P2.always, moduleId: this.#r, onActivation: void 0, onDeactivation: void 0, scope: this.#a, serviceIdentifier: this.#s, type: u.DynamicValue, value: e2 };
    return this.#t(n3), new H(n3);
  }
  toResolvedValue(e2, n3) {
    const i2 = { cache: { isRight: false, value: void 0 }, factory: e2, id: c2(), isSatisfiedBy: P2.always, metadata: this.#o(n3), moduleId: this.#r, onActivation: void 0, onDeactivation: void 0, scope: this.#a, serviceIdentifier: this.#s, type: u.ResolvedValue };
    return this.#t(i2), new H(i2);
  }
  toFactory(e2) {
    const n3 = { cache: { isRight: false, value: void 0 }, factory: e2, id: c2(), isSatisfiedBy: P2.always, moduleId: this.#r, onActivation: void 0, onDeactivation: void 0, scope: d.Singleton, serviceIdentifier: this.#s, type: u.Factory };
    return this.#t(n3), new G2(n3);
  }
  toProvider(e2) {
    const n3 = { cache: { isRight: false, value: void 0 }, id: c2(), isSatisfiedBy: P2.always, moduleId: this.#r, onActivation: void 0, onDeactivation: void 0, provider: e2, scope: d.Singleton, serviceIdentifier: this.#s, type: u.Provider };
    return this.#t(n3), new G2(n3);
  }
  toService(e2) {
    const n3 = { id: c2(), isSatisfiedBy: P2.always, moduleId: this.#r, serviceIdentifier: this.#s, targetServiceIdentifier: e2, type: u.ServiceRedirection };
    this.#t(n3);
  }
  #o(e2) {
    return { arguments: (e2 ?? []).map((e3) => function(e4) {
      return "object" == typeof e4 && !r.is(e4);
    }(e3) ? function(e4) {
      return true === e4.isMultiple;
    }(e3) ? { chained: e3.chained ?? false, kind: fe.multipleInjection, name: e3.name, optional: e3.optional ?? false, tags: new Map((e3.tags ?? []).map((e4) => [e4.key, e4.value])), value: e3.serviceIdentifier } : { kind: fe.singleInjection, name: e3.name, optional: e3.optional ?? false, tags: new Map((e3.tags ?? []).map((e4) => [e4.key, e4.value])), value: e3.serviceIdentifier } : { kind: fe.singleInjection, name: void 0, optional: false, tags: /* @__PURE__ */ new Map(), value: e3 }) };
  }
};
var $2 = class {
  #i;
  constructor(e2) {
    this.#i = e2;
  }
  getIdentifier() {
    return x2(this.#i);
  }
  onActivation(e2) {
    return this.#i.onActivation = e2, new q2(this.#i);
  }
  onDeactivation(e2) {
    if (this.#i.onDeactivation = e2, this.#i.scope !== d.Singleton) throw new B(O.invalidOperation, `Binding for service "${t(this.#i.serviceIdentifier)}" has a deactivation function, but its scope is not singleton. Deactivation functions can only be used with singleton bindings.`);
    return new q2(this.#i);
  }
};
var q2 = class {
  #i;
  constructor(e2) {
    this.#i = e2;
  }
  getIdentifier() {
    return x2(this.#i);
  }
  when(e2) {
    return this.#i.isSatisfiedBy = e2, new $2(this.#i);
  }
  whenAnyAncestor(e2) {
    return this.when(k(e2));
  }
  whenAnyAncestorIs(e2) {
    return this.when(k(U(e2)));
  }
  whenAnyAncestorNamed(e2) {
    return this.when(function(e3) {
      return k(N2(e3));
    }(e2));
  }
  whenAnyAncestorTagged(e2, n3) {
    return this.when(function(e3, n4) {
      return k(F(e3, n4));
    }(e2, n3));
  }
  whenDefault() {
    return this.when(D2);
  }
  whenNamed(e2) {
    return this.when(N2(e2));
  }
  whenNoParent(e2) {
    return this.when(T2(e2));
  }
  whenNoParentIs(e2) {
    return this.when(T2(U(e2)));
  }
  whenNoParentNamed(e2) {
    return this.when(function(e3) {
      return T2(N2(e3));
    }(e2));
  }
  whenNoParentTagged(e2, n3) {
    return this.when(function(e3, n4) {
      return T2(F(e3, n4));
    }(e2, n3));
  }
  whenParent(e2) {
    return this.when(V2(e2));
  }
  whenParentIs(e2) {
    return this.when(V2(U(e2)));
  }
  whenParentNamed(e2) {
    return this.when(function(e3) {
      return V2(N2(e3));
    }(e2));
  }
  whenParentTagged(e2, n3) {
    return this.when(function(e3, n4) {
      return V2(F(e3, n4));
    }(e2, n3));
  }
  whenTagged(e2, n3) {
    return this.when(F(e2, n3));
  }
  whenNoAncestor(e2) {
    return this.when(j2(e2));
  }
  whenNoAncestorIs(e2) {
    return this.when(j2(U(e2)));
  }
  whenNoAncestorNamed(e2) {
    return this.when(function(e3) {
      return j2(N2(e3));
    }(e2));
  }
  whenNoAncestorTagged(e2, n3) {
    return this.when(function(e3, n4) {
      return j2(F(e3, n4));
    }(e2, n3));
  }
};
var G2 = class extends q2 {
  #c;
  constructor(e2) {
    super(e2), this.#c = new $2(e2);
  }
  onActivation(e2) {
    return this.#c.onActivation(e2);
  }
  onDeactivation(e2) {
    return this.#c.onDeactivation(e2);
  }
};
var H = class extends G2 {
  #d;
  constructor(e2) {
    super(e2), this.#d = new E2(e2);
  }
  inRequestScope() {
    return this.#d.inRequestScope();
  }
  inSingletonScope() {
    return this.#d.inSingletonScope();
  }
  inTransientScope() {
    return this.#d.inTransientScope();
  }
};
var _ = class {
  #l;
  #a;
  #u;
  #h;
  constructor(e2, n3, i2, t4) {
    this.#l = e2, this.#a = n3, this.#u = i2, this.#h = t4;
  }
  bind(e2) {
    return new L((e3) => {
      this.#v(e3);
    }, void 0, this.#a, e2);
  }
  isBound(e2, n3) {
    const i2 = this.#h.bindingService.get(e2);
    return this.#g(e2, i2, n3);
  }
  isCurrentBound(e2, n3) {
    const i2 = this.#h.bindingService.getNonParentBindings(e2);
    return this.#g(e2, i2, n3);
  }
  async rebind(e2) {
    return await this.unbind(e2), this.bind(e2);
  }
  rebindSync(e2) {
    return this.unbindSync(e2), this.bind(e2);
  }
  async unbind(e2) {
    await this.#b(e2);
  }
  async unbindAll() {
    await this.#f();
  }
  unbindAllSync() {
    if (void 0 !== this.#f()) throw new B(O.invalidOperation, "Unexpected asynchronous deactivation when unbinding all services. Consider using Container.unbindAll() instead.");
  }
  unbindSync(e2) {
    void 0 !== this.#b(e2) && this.#p(e2);
  }
  #v(e2) {
    this.#h.bindingService.set(e2), this.#u.invalidateService({ binding: e2, kind: We.bindingAdded });
  }
  #p(e2) {
    let n3;
    if (I2(e2)) {
      const t4 = this.#h.bindingService.getById(e2.id), r2 = (i2 = t4, function(e3) {
        if (void 0 === e3) return;
        const n4 = e3.next();
        return true !== n4.done ? n4.value : void 0;
      }(i2?.[Symbol.iterator]()))?.serviceIdentifier;
      n3 = void 0 === r2 ? "Unexpected asynchronous deactivation when unbinding binding identifier. Consider using Container.unbind() instead." : `Unexpected asynchronous deactivation when unbinding "${t(r2)}" binding. Consider using Container.unbind() instead.`;
    } else n3 = `Unexpected asynchronous deactivation when unbinding "${t(e2)}" service. Consider using Container.unbind() instead.`;
    var i2;
    throw new B(O.invalidOperation, n3);
  }
  #b(e2) {
    return I2(e2) ? this.#S(e2) : this.#M(e2);
  }
  #S(e2) {
    const n3 = this.#h.bindingService.getById(e2.id), i2 = void 0 === n3 ? void 0 : [...n3], t4 = Dt(this.#l, n3);
    if (void 0 !== t4) return t4.then(() => {
      this.#R(i2, e2);
    });
    this.#R(i2, e2);
  }
  #R(e2, n3) {
    if (this.#h.bindingService.removeById(n3.id), void 0 !== e2) for (const n4 of e2) this.#u.invalidateService({ binding: n4, kind: We.bindingRemoved });
  }
  #f() {
    const e2 = [...this.#h.bindingService.getNonParentBoundServices()], n3 = e2.map((e3) => Ot(this.#l, e3));
    if (n3.some((e3) => e(e3))) return Promise.all(n3).then(() => {
      this.#y(e2);
    });
    this.#y(e2);
  }
  #y(e2) {
    for (const n3 of e2) this.#h.activationService.removeAllByServiceId(n3), this.#h.bindingService.removeAllByServiceId(n3), this.#h.deactivationService.removeAllByServiceId(n3);
    this.#h.planResultCacheService.clearCache();
  }
  #M(e2) {
    const n3 = this.#h.bindingService.get(e2), i2 = void 0 === n3 ? void 0 : [...n3], t4 = Dt(this.#l, n3);
    if (void 0 !== t4) return t4.then(() => {
      this.#m(e2, i2);
    });
    this.#m(e2, i2);
  }
  #m(e2, n3) {
    if (this.#h.activationService.removeAllByServiceId(e2), this.#h.bindingService.removeAllByServiceId(e2), this.#h.deactivationService.removeAllByServiceId(e2), void 0 !== n3) for (const e3 of n3) this.#u.invalidateService({ binding: e3, kind: We.bindingRemoved });
  }
  #g(e2, n3, i2) {
    if (void 0 === n3) return false;
    const t4 = { getAncestor: () => {
    }, name: i2?.name, serviceIdentifier: e2, tags: /* @__PURE__ */ new Map() };
    void 0 !== i2?.tag && t4.tags.set(i2.tag.key, i2.tag.value);
    for (const e3 of n3) if (e3.isSatisfiedBy(t4)) return true;
    return false;
  }
};
var z = class {
  #w;
  #l;
  #a;
  #u;
  #h;
  constructor(e2, n3, i2, t4, r2) {
    this.#w = e2, this.#l = n3, this.#a = i2, this.#u = t4, this.#h = r2;
  }
  async load(...e2) {
    await Promise.all(this.#n(...e2));
  }
  loadSync(...e2) {
    const n3 = this.#n(...e2);
    for (const e3 of n3) if (void 0 !== e3) throw new B(O.invalidOperation, "Unexpected asynchronous module load. Consider using Container.load() instead.");
  }
  async unload(...e2) {
    await Promise.all(this.#A(...e2)), this.#I(e2);
  }
  unloadSync(...e2) {
    const n3 = this.#A(...e2);
    for (const e3 of n3) if (void 0 !== e3) throw new B(O.invalidOperation, "Unexpected asynchronous module unload. Consider using Container.unload() instead.");
    this.#I(e2);
  }
  #P(e2) {
    return { bind: (n3) => new L((e3) => {
      this.#v(e3);
    }, e2, this.#a, n3), isBound: this.#w.isBound.bind(this.#w), onActivation: (n3, i2) => {
      this.#h.activationService.add(i2, { moduleId: e2, serviceId: n3 });
    }, onDeactivation: (n3, i2) => {
      this.#h.deactivationService.add(i2, { moduleId: e2, serviceId: n3 });
    }, rebind: this.#w.rebind.bind(this.#w), rebindSync: this.#w.rebindSync.bind(this.#w), unbind: this.#w.unbind.bind(this.#w), unbindSync: this.#w.unbindSync.bind(this.#w) };
  }
  #I(e2) {
    for (const n3 of e2) this.#h.activationService.removeAllByModuleId(n3.id), this.#h.bindingService.removeAllByModuleId(n3.id), this.#h.deactivationService.removeAllByModuleId(n3.id);
    this.#h.planResultCacheService.clearCache();
  }
  #n(...e2) {
    return e2.map((e3) => e3.load(this.#P(e3.id)));
  }
  #v(e2) {
    this.#h.bindingService.set(e2), this.#u.invalidateService({ binding: e2, kind: We.bindingAdded });
  }
  #A(...e2) {
    return e2.map((e3) => Vt(this.#l, e3.id));
  }
};
var K2 = class {
  deactivationParams;
  constructor(e2) {
    this.deactivationParams = function(e3) {
      return { getBindings: e3.bindingService.get.bind(e3.bindingService), getBindingsFromModule: e3.bindingService.getByModuleId.bind(e3.bindingService), getClassMetadata: N, getDeactivations: e3.deactivationService.get.bind(e3.deactivationService) };
    }(e2), e2.onReset(() => {
      !function(e3, n3) {
        n3.getBindings = e3.bindingService.get.bind(e3.bindingService), n3.getBindingsFromModule = e3.bindingService.getByModuleId.bind(e3.bindingService), n3.getDeactivations = e3.deactivationService.get.bind(e3.deactivationService);
      }(e2, this.deactivationParams);
    });
  }
};
var X = class {
  planParamsOperations;
  #h;
  constructor(e2) {
    this.#h = e2, this.planParamsOperations = { getBindings: this.#h.bindingService.get.bind(this.#h.bindingService), getBindingsChained: this.#h.bindingService.getChained.bind(this.#h.bindingService), getClassMetadata: N, getPlan: this.#h.planResultCacheService.get.bind(this.#h.planResultCacheService), setBinding: this.#v.bind(this), setNonCachedServiceNode: this.#h.planResultCacheService.setNonCachedServiceNode.bind(this.#h.planResultCacheService), setPlan: this.#h.planResultCacheService.set.bind(this.#h.planResultCacheService) }, this.#h.onReset(() => {
      this.#C();
    });
  }
  #C() {
    this.planParamsOperations.getBindings = this.#h.bindingService.get.bind(this.#h.bindingService), this.planParamsOperations.getBindingsChained = this.#h.bindingService.getChained.bind(this.#h.bindingService), this.planParamsOperations.setBinding = this.#v.bind(this);
  }
  #v(e2) {
    this.#h.bindingService.set(e2), this.#h.planResultCacheService.invalidateServiceBinding({ binding: e2, kind: We.bindingAdded, operations: this.planParamsOperations });
  }
};
var J = class {
  #B;
  #h;
  constructor(e2, n3) {
    this.#B = e2, this.#h = n3;
  }
  invalidateService(e2) {
    this.#h.planResultCacheService.invalidateServiceBinding({ ...e2, operations: this.#B.planParamsOperations });
  }
};
var Q = class {
  #O;
  #x;
  #k;
  #h;
  constructor(e2, n3, i2) {
    this.#h = n3, this.#k = i2, this.#O = this.#N(e2), this.#x = this.#U();
  }
  register(e2, n3) {
    const i2 = new n3(e2, this.#x);
    if (true !== i2[t3]) throw new B(O.invalidOperation, "Invalid plugin. The plugin must extend the Plugin class");
    i2.load(this.#O);
  }
  #N(e2) {
    return { define: (n3, i2) => {
      if (Object.prototype.hasOwnProperty.call(e2, n3)) throw new B(O.invalidOperation, `Container already has a method named "${String(n3)}"`);
      e2[n3] = i2;
    }, onPlan: this.#k.onPlan.bind(this.#k) };
  }
  #U() {
    const e2 = this.#h;
    return { get activationService() {
      return e2.activationService;
    }, get bindingService() {
      return e2.bindingService;
    }, get deactivationService() {
      return e2.deactivationService;
    }, get planResultCacheService() {
      return e2.planResultCacheService;
    } };
  }
};
var W2 = class {
  activationService;
  bindingService;
  deactivationService;
  planResultCacheService;
  #F;
  constructor(e2, n3, i2, t4) {
    this.activationService = e2, this.bindingService = n3, this.deactivationService = i2, this.planResultCacheService = t4, this.#F = [];
  }
  reset(e2, n3, i2) {
    this.activationService = e2, this.bindingService = n3, this.deactivationService = i2, this.planResultCacheService.clearCache();
    for (const e3 of this.#F) e3();
  }
  onReset(e2) {
    this.#F.push(e2);
  }
};
var Y = class {
  #D;
  #a;
  #j;
  #T;
  #V;
  #B;
  #h;
  constructor(e2, n3, i2, t4) {
    this.#B = e2, this.#h = n3, this.#T = this.#E(), this.#D = i2, this.#a = t4, this.#j = (e3) => this.#h.activationService.get(e3), this.#V = [], this.#h.onReset(() => {
      this.#C();
    });
  }
  get(e2, n3) {
    const i2 = this.#L(false, e2, n3), t4 = this.#$(i2);
    if (e(t4)) throw new B(O.invalidOperation, `Unexpected asynchronous service when resolving service "${t(e2)}"`);
    return t4;
  }
  getAll(e2, n3) {
    const i2 = this.#L(true, e2, n3), t4 = this.#$(i2);
    if (e(t4)) throw new B(O.invalidOperation, `Unexpected asynchronous service when resolving service "${t(e2)}"`);
    return t4;
  }
  async getAllAsync(e2, n3) {
    const i2 = this.#L(true, e2, n3);
    return this.#$(i2);
  }
  async getAsync(e2, n3) {
    const i2 = this.#L(false, e2, n3);
    return this.#$(i2);
  }
  onPlan(e2) {
    this.#V.push(e2);
  }
  #C() {
    this.#T = this.#E();
  }
  #q(e2, n3, i2) {
    const t4 = i2?.name, r2 = i2?.optional ?? false, a3 = i2?.tag;
    return e2 ? { chained: i2?.chained ?? false, isMultiple: e2, name: t4, optional: r2, serviceIdentifier: n3, tag: a3 } : { isMultiple: e2, name: t4, optional: r2, serviceIdentifier: n3, tag: a3 };
  }
  #G(e2, n3, i2) {
    const t4 = { autobindOptions: i2?.autobind ?? this.#D ? { scope: this.#a } : void 0, operations: this.#B.planParamsOperations, rootConstraints: this.#H(e2, n3, i2), servicesBranch: [] };
    return this.#_(t4, i2), t4;
  }
  #H(e2, n3, i2) {
    return n3 ? { chained: i2?.chained ?? false, isMultiple: n3, serviceIdentifier: e2 } : { isMultiple: n3, serviceIdentifier: e2 };
  }
  #L(e2, n3, i2) {
    const t4 = this.#q(e2, n3, i2), r2 = this.#h.planResultCacheService.get(t4);
    if (void 0 !== r2) return r2;
    const a3 = Ge(this.#G(n3, e2, i2));
    for (const e3 of this.#V) e3(t4, a3);
    return a3;
  }
  #E() {
    return { get: this.get.bind(this), getAll: this.getAll.bind(this), getAllAsync: this.getAllAsync.bind(this), getAsync: this.getAsync.bind(this) };
  }
  #$(e2) {
    return Nt({ context: this.#T, getActivations: this.#j, planResult: e2, requestScopeCache: /* @__PURE__ */ new Map() });
  }
  #_(e2, n3) {
    void 0 !== n3 && (void 0 !== n3.name && (e2.rootConstraints.name = n3.name), true === n3.optional && (e2.rootConstraints.isOptional = true), void 0 !== n3.tag && (e2.rootConstraints.tag = { key: n3.tag.key, value: n3.tag.value }), e2.rootConstraints.isMultiple && (e2.rootConstraints.chained = n3?.chained ?? false));
  }
};
var Z = class {
  #h;
  #z;
  constructor(e2) {
    this.#h = e2, this.#z = [];
  }
  restore() {
    const e2 = this.#z.pop();
    if (void 0 === e2) throw new B(O.invalidOperation, "No snapshot available to restore");
    this.#h.reset(e2.activationService, e2.bindingService, e2.deactivationService);
  }
  snapshot() {
    this.#z.push({ activationService: this.#h.activationService.clone(), bindingService: this.#h.bindingService.clone(), deactivationService: this.#h.deactivationService.clone() });
  }
};
var ee = d.Transient;
var ne = class {
  #w;
  #K;
  #X;
  #h;
  #k;
  #J;
  constructor(e2) {
    const n3 = e2?.autobind ?? false, i2 = e2?.defaultScope ?? ee;
    this.#h = this.#Q(e2, n3, i2);
    const t4 = new X(this.#h), r2 = new J(t4, this.#h), a3 = new K2(this.#h);
    this.#w = new _(a3.deactivationParams, i2, r2, this.#h), this.#K = new z(this.#w, a3.deactivationParams, i2, r2, this.#h), this.#k = new Y(t4, this.#h, n3, i2), this.#X = new Q(this, this.#h, this.#k), this.#J = new Z(this.#h);
  }
  bind(e2) {
    return this.#w.bind(e2);
  }
  get(e2, n3) {
    return this.#k.get(e2, n3);
  }
  getAll(e2, n3) {
    return this.#k.getAll(e2, n3);
  }
  async getAllAsync(e2, n3) {
    return this.#k.getAllAsync(e2, n3);
  }
  async getAsync(e2, n3) {
    return this.#k.getAsync(e2, n3);
  }
  isBound(e2, n3) {
    return this.#w.isBound(e2, n3);
  }
  isCurrentBound(e2, n3) {
    return this.#w.isCurrentBound(e2, n3);
  }
  async load(...e2) {
    return this.#K.load(...e2);
  }
  loadSync(...e2) {
    this.#K.loadSync(...e2);
  }
  onActivation(e2, n3) {
    this.#h.activationService.add(n3, { serviceId: e2 });
  }
  onDeactivation(e2, n3) {
    this.#h.deactivationService.add(n3, { serviceId: e2 });
  }
  register(e2) {
    this.#X.register(this, e2);
  }
  restore() {
    this.#J.restore();
  }
  async rebind(e2) {
    return this.#w.rebind(e2);
  }
  rebindSync(e2) {
    return this.#w.rebindSync(e2);
  }
  snapshot() {
    this.#J.snapshot();
  }
  async unbind(e2) {
    await this.#w.unbind(e2);
  }
  async unbindAll() {
    await this.#w.unbindAll();
  }
  unbindAllSync() {
    this.#w.unbindAllSync();
  }
  unbindSync(e2) {
    this.#w.unbindSync(e2);
  }
  async unload(...e2) {
    return this.#K.unload(...e2);
  }
  unloadSync(...e2) {
    this.#K.unloadSync(...e2);
  }
  #W(e2, n3) {
    if (e2) return { scope: n3 };
  }
  #Q(e2, n3, i2) {
    const t4 = this.#W(n3, i2);
    if (void 0 === e2?.parent) return new W2(v.build(() => {
    }), T.build(() => {
    }, t4), j.build(() => {
    }), new et());
    const r2 = new et(), a3 = e2.parent;
    return a3.#h.planResultCacheService.subscribe(r2), new W2(v.build(() => a3.#h.activationService), T.build(() => a3.#h.bindingService, t4), j.build(() => a3.#h.deactivationService), r2);
  }
};

// asset-input/node_modules/@aws-lambda-powertools/logger/lib/esm/constants.js
var LogJsonIndent = {
  PRETTY: 4,
  COMPACT: 0
};
var LogLevelThreshold = {
  TRACE: 6,
  DEBUG: 8,
  INFO: 12,
  WARN: 16,
  ERROR: 20,
  CRITICAL: 24,
  SILENT: 28
};
var ReservedKeys = [
  "level",
  "message",
  "sampling_rate",
  "service",
  "timestamp"
];
var UncaughtErrorLogMessage = "Uncaught error detected, flushing log buffer before exit";

// asset-input/node_modules/@aws/lambda-invoke-store/dist-es/invoke-store.js
var PROTECTED_KEYS = {
  REQUEST_ID: Symbol.for("_AWS_LAMBDA_REQUEST_ID"),
  X_RAY_TRACE_ID: Symbol.for("_AWS_LAMBDA_X_RAY_TRACE_ID"),
  TENANT_ID: Symbol.for("_AWS_LAMBDA_TENANT_ID")
};
var NO_GLOBAL_AWS_LAMBDA = ["true", "1"].includes(process.env?.AWS_LAMBDA_NODEJS_NO_GLOBAL_AWSLAMBDA ?? "");
if (!NO_GLOBAL_AWS_LAMBDA) {
  globalThis.awslambda = globalThis.awslambda || {};
}
var InvokeStoreBase = class {
  static PROTECTED_KEYS = PROTECTED_KEYS;
  isProtectedKey(key) {
    return Object.values(PROTECTED_KEYS).includes(key);
  }
  getRequestId() {
    return this.get(PROTECTED_KEYS.REQUEST_ID) ?? "-";
  }
  getXRayTraceId() {
    return this.get(PROTECTED_KEYS.X_RAY_TRACE_ID);
  }
  getTenantId() {
    return this.get(PROTECTED_KEYS.TENANT_ID);
  }
};
var InvokeStoreSingle = class extends InvokeStoreBase {
  currentContext;
  getContext() {
    return this.currentContext;
  }
  hasContext() {
    return this.currentContext !== void 0;
  }
  get(key) {
    return this.currentContext?.[key];
  }
  set(key, value) {
    if (this.isProtectedKey(key)) {
      throw new Error(`Cannot modify protected Lambda context field: ${String(key)}`);
    }
    this.currentContext = this.currentContext || {};
    this.currentContext[key] = value;
  }
  run(context, fn) {
    this.currentContext = context;
    return fn();
  }
};
var InvokeStoreMulti = class _InvokeStoreMulti extends InvokeStoreBase {
  als;
  static async create() {
    const instance = new _InvokeStoreMulti();
    const asyncHooks = await import("node:async_hooks");
    instance.als = new asyncHooks.AsyncLocalStorage();
    return instance;
  }
  getContext() {
    return this.als.getStore();
  }
  hasContext() {
    return this.als.getStore() !== void 0;
  }
  get(key) {
    return this.als.getStore()?.[key];
  }
  set(key, value) {
    if (this.isProtectedKey(key)) {
      throw new Error(`Cannot modify protected Lambda context field: ${String(key)}`);
    }
    const store = this.als.getStore();
    if (!store) {
      throw new Error("No context available");
    }
    store[key] = value;
  }
  run(context, fn) {
    return this.als.run(context, fn);
  }
};
var InvokeStore;
(function(InvokeStore2) {
  let instance = null;
  async function getInstanceAsync() {
    if (!instance) {
      instance = (async () => {
        const isMulti = "AWS_LAMBDA_MAX_CONCURRENCY" in process.env;
        const newInstance = isMulti ? await InvokeStoreMulti.create() : new InvokeStoreSingle();
        if (!NO_GLOBAL_AWS_LAMBDA && globalThis.awslambda?.InvokeStore) {
          return globalThis.awslambda.InvokeStore;
        } else if (!NO_GLOBAL_AWS_LAMBDA && globalThis.awslambda) {
          globalThis.awslambda.InvokeStore = newInstance;
          return newInstance;
        } else {
          return newInstance;
        }
      })();
    }
    return instance;
  }
  InvokeStore2.getInstanceAsync = getInstanceAsync;
  InvokeStore2._testing = process.env.AWS_LAMBDA_BENCHMARK_MODE === "1" ? {
    reset: () => {
      instance = null;
      if (globalThis.awslambda?.InvokeStore) {
        delete globalThis.awslambda.InvokeStore;
      }
      globalThis.awslambda = { InvokeStore: void 0 };
    }
  } : void 0;
})(InvokeStore || (InvokeStore = {}));

// asset-input/node_modules/@aws-lambda-powertools/commons/lib/esm/constants.js
var AWS_LAMBDA_MAX_CONCURRENCY = "AWS_LAMBDA_MAX_CONCURRENCY";
var POWERTOOLS_DEV_ENV_VAR = "POWERTOOLS_DEV";
var XRAY_TRACE_ID_ENV_VAR = "_X_AMZN_TRACE_ID";

// asset-input/node_modules/@aws-lambda-powertools/commons/lib/esm/envUtils.js
var getStringFromEnv = ({ key, defaultValue, errorMessage }) => {
  const value = process.env[key];
  if (value === void 0) {
    if (defaultValue !== void 0) {
      return defaultValue;
    }
    if (errorMessage) {
      throw new Error(errorMessage);
    }
    throw new Error(`Environment variable ${key} is required`);
  }
  return value.trim();
};
var getNumberFromEnv = ({ key, defaultValue, errorMessage }) => {
  const value = getStringFromEnv({
    key,
    defaultValue: String(defaultValue),
    errorMessage
  });
  const parsedValue = Number(value);
  if (Number.isNaN(parsedValue)) {
    throw new TypeError(`Environment variable ${key} must be a number`);
  }
  return parsedValue;
};
var truthyValues = /* @__PURE__ */ new Set(["1", "y", "yes", "t", "true", "on"]);
var falsyValues = /* @__PURE__ */ new Set(["0", "n", "no", "f", "false", "off"]);
var getBooleanFromEnv = ({ key, defaultValue, errorMessage, extendedParsing }) => {
  const value = getStringFromEnv({
    key,
    defaultValue: String(defaultValue),
    errorMessage
  });
  const parsedValue = value.toLowerCase();
  if (extendedParsing) {
    if (truthyValues.has(parsedValue)) {
      return true;
    }
    if (falsyValues.has(parsedValue)) {
      return false;
    }
  }
  if (parsedValue !== "true" && parsedValue !== "false") {
    throw new Error(`Environment variable ${key} must be a boolean`);
  }
  return parsedValue === "true";
};
var isDevMode = () => {
  try {
    return getBooleanFromEnv({
      key: POWERTOOLS_DEV_ENV_VAR,
      extendedParsing: true
    });
  } catch {
    return false;
  }
};
var getXrayTraceDataFromEnv = () => {
  const xRayTraceEnv = globalThis.awslambda?.InvokeStore?.getXRayTraceId() ?? getStringFromEnv({
    key: XRAY_TRACE_ID_ENV_VAR,
    defaultValue: ""
  });
  if (xRayTraceEnv === "") {
    return void 0;
  }
  if (!xRayTraceEnv.includes("=")) {
    return {
      Root: xRayTraceEnv
    };
  }
  const xRayTraceData = {};
  for (const field of xRayTraceEnv.split(";")) {
    const [key, value] = field.split("=");
    xRayTraceData[key] = value;
  }
  return xRayTraceData;
};
var shouldUseInvokeStore = () => {
  const res = getStringFromEnv({
    key: AWS_LAMBDA_MAX_CONCURRENCY,
    defaultValue: ""
  });
  return res !== "";
};
var getXRayTraceIdFromEnv = () => {
  const xRayTraceData = getXrayTraceDataFromEnv();
  return xRayTraceData?.Root;
};

// asset-input/node_modules/@aws-lambda-powertools/logger/lib/esm/formatter/LogFormatter.js
var LogFormatter = class {
  /**
   * Format an error into a loggable object.
   *
   * @example
   * ```json
   * {
   *   "name": "Error",
   *   "location": "file.js:1",
   *   "message": "An error occurred",
   *   "stack": "Error: An error occurred\n    at file.js:1\n    at file.js:2\n    at file.js:3",
   *   "cause": {
   *     "name": "OtherError",
   *     "location": "file.js:2",
   *     "message": "Another error occurred",
   *     "stack": "Error: Another error occurred\n    at file.js:2\n    at file.js:3\n    at file.js:4"
   *   }
   * }
   * ```
   *
   * @param error - Error to format
   */
  formatError(error) {
    const { name, message, stack, cause, ...errorAttributes } = error;
    const formattedError = {
      name,
      location: this.getCodeLocation(error.stack),
      message,
      stack: isDevMode() && typeof stack === "string" ? stack?.split("\n") : stack,
      cause: cause instanceof Error ? this.formatError(cause) : cause
    };
    for (const key in error) {
      if (typeof key === "string" && !["name", "message", "stack", "cause"].includes(key)) {
        formattedError[key] = errorAttributes[key];
      }
    }
    return formattedError;
  }
  /**
   * Format a date into an ISO 8601 string with the configured timezone.
   *
   * The timezone is read from the `TZ` environment variable, if present.
   * Otherwise, the timezone defaults to ':UTC'.
   *
   * @param now - The date to format
   */
  formatTimestamp(now) {
    const defaultTimezone = "UTC";
    const configuredTimezone = getStringFromEnv({
      key: "TZ",
      defaultValue: ""
    });
    if (configuredTimezone && !configuredTimezone.includes(defaultTimezone))
      return this.#generateISOTimestampWithOffset(now, configuredTimezone);
    return now.toISOString();
  }
  /**
   * Get the location of an error from a stack trace.
   *
   * @param stack - stack trace to parse
   */
  getCodeLocation(stack) {
    if (!stack) {
      return "";
    }
    const stackLines = stack.split("\n");
    const regex = /\(([^()]*?):(\d+?):(\d+?)\)\\?$/;
    for (const item of stackLines) {
      const match = regex.exec(item);
      if (Array.isArray(match)) {
        return `${match[1]}:${Number(match[2])}`;
      }
    }
    return "";
  }
  /**
   * Create a new Intl.DateTimeFormat object configured with the specified time zone
   * and formatting options.
   *
   * The time is displayed in 24-hour format (hour12: false).
   *
   * @param timezone - IANA time zone identifier (e.g., "Asia/Dhaka").
   */
  #getDateFormatter = (timezone) => {
    const twoDigitFormatOption = "2-digit";
    const validTimeZone = Intl.supportedValuesOf("timeZone").includes(timezone) ? timezone : "UTC";
    return new Intl.DateTimeFormat("en", {
      hourCycle: "h23",
      year: "numeric",
      month: twoDigitFormatOption,
      day: twoDigitFormatOption,
      hour: twoDigitFormatOption,
      minute: twoDigitFormatOption,
      second: twoDigitFormatOption,
      timeZone: validTimeZone
    });
  };
  /**
   * Generate an ISO 8601 timestamp string with the specified time zone and the local time zone offset.
   *
   * @param date - date to format
   * @param timezone - IANA time zone identifier (e.g., "Asia/Dhaka").
   */
  #generateISOTimestampWithOffset(date, timezone) {
    const { year, month, day, hour, minute, second } = this.#getDateFormatter(timezone).formatToParts(date).reduce((acc, item) => {
      acc[item.type] = item.value;
      return acc;
    }, {});
    const datePart = `${year}-${month}-${day}T${hour}:${minute}:${second}`;
    const offset = -date.getTimezoneOffset();
    const offsetSign = offset >= 0 ? "+" : "-";
    const offsetHours = Math.abs(Math.floor(offset / 60)).toString().padStart(2, "0");
    const offsetMinutes = Math.abs(offset % 60).toString().padStart(2, "0");
    const millisecondPart = date.getMilliseconds().toString().padStart(3, "0");
    const offsetPart = `${offsetSign}${offsetHours}:${offsetMinutes}`;
    return `${datePart}.${millisecondPart}${offsetPart}`;
  }
};

// asset-input/node_modules/@aws-lambda-powertools/commons/lib/esm/version.js
var PT_VERSION = "2.31.0";

// asset-input/node_modules/@aws-lambda-powertools/commons/lib/esm/awsSdkUtils.js
var EXEC_ENV = process.env.AWS_EXECUTION_ENV || "NA";

// asset-input/node_modules/@aws-lambda-powertools/commons/lib/esm/deepMerge.js
var UNSAFE_KEYS = /* @__PURE__ */ new Set(["__proto__", "constructor"]);
var isPlainObject = (value) => {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
};
var mergeArrayItemsByIndex = (targetArray, sourceArray, seen) => {
  for (let i2 = 0; i2 < sourceArray.length; i2++) {
    const srcItem = sourceArray[i2];
    const tgtItem = targetArray[i2];
    const isSrcPlainObject = isPlainObject(srcItem);
    if (isSrcPlainObject && seen.has(srcItem)) {
      continue;
    }
    if (isSrcPlainObject && isPlainObject(tgtItem)) {
      seen.add(srcItem);
      mergeRecursive(tgtItem, srcItem, seen);
      continue;
    }
    targetArray[i2] = srcItem;
  }
};
var handleArrayMerge = (target, key, sourceArray, targetValue, seen) => {
  if (!Array.isArray(targetValue)) {
    target[key] = [...sourceArray];
    return;
  }
  mergeArrayItemsByIndex(targetValue, sourceArray, seen);
};
var handleObjectMerge = (target, key, sourceObject, targetValue, seen) => {
  if (isPlainObject(targetValue)) {
    mergeRecursive(targetValue, sourceObject, seen);
    return;
  }
  const newTarget = {};
  mergeRecursive(newTarget, sourceObject, seen);
  target[key] = newTarget;
};
var mergeRecursive = (target, source, seen) => {
  for (const key of Object.keys(source)) {
    if (UNSAFE_KEYS.has(key)) {
      continue;
    }
    const sourceValue = source[key];
    const targetValue = target[key];
    if (Array.isArray(sourceValue)) {
      if (seen.has(sourceValue))
        continue;
      seen.add(sourceValue);
      handleArrayMerge(target, key, sourceValue, targetValue, seen);
      continue;
    }
    if (isPlainObject(sourceValue)) {
      if (seen.has(sourceValue))
        continue;
      seen.add(sourceValue);
      handleObjectMerge(target, key, sourceValue, targetValue, seen);
      continue;
    }
    target[key] = sourceValue;
  }
};
var deepMerge = (target, ...sources) => {
  const seen = /* @__PURE__ */ new WeakSet();
  seen.add(target);
  for (const source of sources) {
    if (source != null) {
      seen.add(source);
      mergeRecursive(target, source, seen);
    }
  }
  return target;
};

// asset-input/node_modules/@aws-lambda-powertools/commons/lib/esm/middleware/constants.js
var PREFIX = "powertools-for-aws";
var TRACER_KEY = `${PREFIX}.tracer`;
var METRICS_KEY = `${PREFIX}.metrics`;
var LOGGER_KEY = `${PREFIX}.logger`;
var IDEMPOTENCY_KEY = `${PREFIX}.idempotency`;

// asset-input/node_modules/@aws-lambda-powertools/commons/lib/esm/typeUtils.js
var isString = (value) => {
  return typeof value === "string";
};
var isNull = (value) => {
  return Object.is(value, null);
};
var isNullOrUndefined = (value) => {
  return isNull(value) || Object.is(value, void 0);
};

// asset-input/node_modules/@aws-lambda-powertools/commons/lib/esm/Utility.js
var Utility = class {
  #initializationType;
  coldStart = true;
  defaultServiceName = "service_undefined";
  constructor() {
    this.#initializationType = this.getInitializationType();
    if (this.#initializationType !== "on-demand") {
      this.coldStart = false;
    }
  }
  /**
   * Get the value of the `AWS_LAMBDA_INITIALIZATION_TYPE` environment variable.
   */
  getInitializationType() {
    const envVarValue = process.env.AWS_LAMBDA_INITIALIZATION_TYPE?.trim();
    if (envVarValue === "on-demand") {
      return "on-demand";
    }
    if (envVarValue === "provisioned-concurrency") {
      return "provisioned-concurrency";
    }
    return "unknown";
  }
  /**
   * Get the cold start status of the current execution environment.
   *
   * The method also flips the cold start status to `false` after the first invocation.
   */
  getColdStart() {
    if (this.#initializationType !== "on-demand") {
      return false;
    }
    if (this.coldStart) {
      this.coldStart = false;
      return true;
    }
    return false;
  }
  /**
   * Validate that the service name provided is valid.
   * Used internally during initialization.
   *
   * @param serviceName Service name to validate
   */
  isValidServiceName(serviceName) {
    return typeof serviceName === "string" && serviceName.trim().length > 0;
  }
};

// asset-input/node_modules/@aws-lambda-powertools/commons/lib/esm/index.js
var env = process.env.AWS_EXECUTION_ENV || "NA";
if (process.env.AWS_SDK_UA_APP_ID) {
  process.env.AWS_SDK_UA_APP_ID = `${process.env.AWS_SDK_UA_APP_ID}/PT/NO-OP/${PT_VERSION}/PTEnv/${env}`;
} else {
  process.env.AWS_SDK_UA_APP_ID = `PT/NO-OP/${PT_VERSION}/PTEnv/${env}`;
}

// asset-input/node_modules/@aws-lambda-powertools/logger/lib/esm/formatter/LogItem.js
var LogItem = class {
  /**
   * The attributes of the log item.
   */
  attributes = {};
  /**
   * Constructor for LogItem.
   *
   * Attributes are added in the following order:
   * - Standard keys provided by the logger (e.g. `message`, `level`, `timestamp`)
   * - Persistent attributes provided by developer, not formatted (done later)
   * - Ephemeral attributes provided as parameters for a single log item (done later)
   *
   * @param params - The parameters for the LogItem.
   */
  constructor(params) {
    this.setAttributes(params.attributes);
  }
  /**
   * Add attributes to the log item.
   *
   * @param attributes - The attributes to add to the log item.
   */
  addAttributes(attributes) {
    deepMerge(this.attributes, attributes);
    return this;
  }
  /**
   * Get the attributes of the log item.
   */
  getAttributes() {
    return this.attributes;
  }
  /**
   * Prepare the log item for printing.
   *
   * This operation removes empty keys from the log item, see {@link removeEmptyKeys | removeEmptyKeys()} for more information.
   */
  prepareForPrint() {
    this.attributes = this.removeEmptyKeys(this.getAttributes());
  }
  /**
   * Remove empty keys from the log item, where empty keys are defined as keys with
   * values of `undefined`, empty strings (`''`), or `null`.
   *
   * @param attributes - The attributes to remove empty keys from.
   */
  removeEmptyKeys(attributes) {
    const newAttributes = {};
    for (const key in attributes) {
      if (attributes[key] !== void 0 && attributes[key] !== "" && attributes[key] !== null) {
        newAttributes[key] = attributes[key];
      }
    }
    return newAttributes;
  }
  /**
   * Replace the attributes of the log item.
   *
   * @param attributes - The attributes to set for the log item.
   */
  setAttributes(attributes) {
    this.attributes = attributes;
  }
};

// asset-input/node_modules/@aws-lambda-powertools/logger/lib/esm/Logger.js
var import_node_console = require("node:console");
var import_node_crypto = require("node:crypto");

// asset-input/node_modules/@aws-lambda-powertools/logger/lib/esm/formatter/PowertoolsLogFormatter.js
var PowertoolsLogFormatter = class extends LogFormatter {
  /**
   * List of keys to order log attributes by.
   *
   * This can be a set of keys or an array of keys.
   */
  #logRecordOrder;
  constructor(options) {
    super();
    this.#logRecordOrder = options?.logRecordOrder;
  }
  /**
   * It formats key-value pairs of log attributes.
   *
   * @param {UnformattedAttributes} attributes - unformatted attributes
   * @param {LogAttributes} additionalLogAttributes - additional log attributes
   */
  formatAttributes(attributes, additionalLogAttributes) {
    const baseAttributes = {
      level: attributes.logLevel,
      message: attributes.message,
      timestamp: this.formatTimestamp(attributes.timestamp),
      service: attributes.serviceName,
      cold_start: attributes.lambdaContext?.coldStart,
      function_arn: attributes.lambdaContext?.invokedFunctionArn,
      function_memory_size: attributes.lambdaContext?.memoryLimitInMB,
      function_name: attributes.lambdaContext?.functionName,
      function_request_id: attributes.lambdaContext?.awsRequestId,
      sampling_rate: attributes.sampleRateValue,
      xray_trace_id: attributes.xRayTraceId,
      tenant_id: attributes.lambdaContext?.tenantId
    };
    if (this.#logRecordOrder === void 0) {
      return new LogItem({ attributes: baseAttributes }).addAttributes(additionalLogAttributes);
    }
    const orderedAttributes = {};
    for (const key of this.#logRecordOrder) {
      if (key in baseAttributes && !(key in orderedAttributes)) {
        orderedAttributes[key] = baseAttributes[key];
      } else if (key in additionalLogAttributes && !(key in orderedAttributes)) {
        orderedAttributes[key] = additionalLogAttributes[key];
      }
    }
    for (const key in baseAttributes) {
      if (!(key in orderedAttributes)) {
        orderedAttributes[key] = baseAttributes[key];
      }
    }
    for (const key in additionalLogAttributes) {
      if (!(key in orderedAttributes)) {
        orderedAttributes[key] = additionalLogAttributes[key];
      }
    }
    const powertoolsLogItem = new LogItem({
      attributes: orderedAttributes
    });
    return powertoolsLogItem;
  }
};

// asset-input/node_modules/@aws-lambda-powertools/logger/lib/esm/LogAttributesStore.js
var LogAttributesStore = class {
  #temporaryAttributesKey = Symbol("powertools.logger.temporaryAttributes");
  #keysKey = Symbol("powertools.logger.keys");
  #fallbackTemporaryAttributes = {};
  #fallbackKeys = /* @__PURE__ */ new Map();
  #persistentAttributes = {};
  #getTemporaryAttributes() {
    if (!shouldUseInvokeStore()) {
      return this.#fallbackTemporaryAttributes;
    }
    if (globalThis.awslambda?.InvokeStore === void 0) {
      throw new Error("InvokeStore is not available");
    }
    const store = globalThis.awslambda.InvokeStore;
    let stored = store.get(this.#temporaryAttributesKey);
    if (stored == null) {
      stored = {};
      store.set(this.#temporaryAttributesKey, stored);
    }
    return stored;
  }
  #getKeys() {
    if (!shouldUseInvokeStore()) {
      return this.#fallbackKeys;
    }
    if (globalThis.awslambda?.InvokeStore === void 0) {
      throw new Error("InvokeStore is not available");
    }
    const store = globalThis.awslambda.InvokeStore;
    let stored = store.get(this.#keysKey);
    if (stored == null) {
      stored = /* @__PURE__ */ new Map();
      store.set(this.#keysKey, stored);
    }
    return stored;
  }
  appendTemporaryKeys(attributes) {
    const tempAttrs = this.#getTemporaryAttributes();
    deepMerge(tempAttrs, attributes);
    const keysMap = this.#getKeys();
    for (const key of Object.keys(attributes)) {
      keysMap.set(key, "temp");
    }
  }
  removeTemporaryKeys(keys) {
    const tempAttrs = this.#getTemporaryAttributes();
    const keysMap = this.#getKeys();
    for (const key of keys) {
      tempAttrs[key] = void 0;
      if (this.#persistentAttributes[key]) {
        keysMap.set(key, "persistent");
      } else {
        keysMap.delete(key);
      }
    }
  }
  getTemporaryAttributes() {
    return { ...this.#getTemporaryAttributes() };
  }
  clearTemporaryAttributes() {
    const tempAttrs = this.#getTemporaryAttributes();
    const keysMap = this.#getKeys();
    for (const key of Object.keys(tempAttrs)) {
      if (this.#persistentAttributes[key]) {
        keysMap.set(key, "persistent");
      } else {
        keysMap.delete(key);
      }
    }
    if (!shouldUseInvokeStore()) {
      this.#fallbackTemporaryAttributes = {};
      return;
    }
    globalThis.awslambda.InvokeStore?.set(this.#temporaryAttributesKey, {});
  }
  setPersistentAttributes(attributes) {
    const keysMap = this.#getKeys();
    this.#persistentAttributes = { ...attributes };
    for (const key of Object.keys(attributes)) {
      keysMap.set(key, "persistent");
    }
  }
  getPersistentAttributes() {
    return { ...this.#persistentAttributes };
  }
  getAllAttributes() {
    const result = {};
    const tempAttrs = this.#getTemporaryAttributes();
    const keysMap = this.#getKeys();
    for (const [key, value] of Object.entries(this.#persistentAttributes)) {
      if (value !== void 0) {
        result[key] = value;
      }
    }
    for (const [key, type] of keysMap.entries()) {
      if (type === "temp" && tempAttrs[key] !== void 0) {
        result[key] = tempAttrs[key];
      }
    }
    return result;
  }
  removePersistentKeys(keys) {
    const keysMap = this.#getKeys();
    const tempAttrs = this.#getTemporaryAttributes();
    for (const key of keys) {
      this.#persistentAttributes[key] = void 0;
      if (tempAttrs[key]) {
        keysMap.set(key, "temp");
      } else {
        keysMap.delete(key);
      }
    }
  }
};

// asset-input/node_modules/@aws-lambda-powertools/logger/lib/esm/logBuffer.js
var SizedItem = class {
  value;
  logLevel;
  byteSize;
  constructor(value, logLevel) {
    if (!isString(value)) {
      throw new Error("Value should be a string");
    }
    this.value = value;
    this.logLevel = logLevel;
    this.byteSize = Buffer.byteLength(value);
  }
};
var SizedSet = class extends Set {
  currentBytesSize = 0;
  hasEvictedLog = false;
  /**
   * Adds an item to the set and updates the current byte size.
   *
   * @param item - The item to add
   */
  add(item) {
    this.currentBytesSize += item.byteSize;
    super.add(item);
    return this;
  }
  /**
   * Deletes an item from the set and updates the current byte size.
   *
   * @param item - The item to delete
   */
  delete(item) {
    const wasDeleted = super.delete(item);
    if (wasDeleted) {
      this.currentBytesSize -= item.byteSize;
    }
    return wasDeleted;
  }
  /**
   * Clears all items from the set and resets the current byte size.
   */
  clear() {
    super.clear();
    this.currentBytesSize = 0;
  }
  /**
   * Removes the first item from the set and returns it.
   */
  shift() {
    const firstElement = this.values().next().value;
    if (firstElement) {
      this.delete(firstElement);
    }
    return firstElement;
  }
};
var CircularMap = class extends Map {
  #maxBytesSize;
  #onBufferOverflow;
  constructor({ maxBytesSize, onBufferOverflow }) {
    super();
    this.#maxBytesSize = maxBytesSize;
    this.#onBufferOverflow = onBufferOverflow;
  }
  /**
   * Adds an item to the buffer, evicting older items if necessary.
   *
   * @param key - The key to associate with the item
   * @param value - The item to add
   * @param logLevel - The log level of the item
   */
  setItem(key, value, logLevel) {
    const item = new SizedItem(value, logLevel);
    if (item.byteSize > this.#maxBytesSize) {
      throw new Error("Item too big");
    }
    const buffer = this.get(key) || new SizedSet();
    if (buffer.currentBytesSize !== 0 && buffer.currentBytesSize + item.byteSize >= this.#maxBytesSize) {
      this.#deleteFromBufferUntilSizeIsLessThanMax(buffer, item);
      if (this.#onBufferOverflow) {
        this.#onBufferOverflow();
      }
    }
    buffer.add(item);
    super.set(key, buffer);
    return this;
  }
  /**
   * Deletes an item from the buffer.
   *
   * @param key - The key associated with the item
   * @param value - The item to delete
   */
  #deleteFromBufferUntilSizeIsLessThanMax(buffer, item) {
    while (buffer.size !== 0 && buffer.currentBytesSize + item.byteSize >= this.#maxBytesSize) {
      buffer.shift();
      buffer.hasEvictedLog = true;
    }
  }
};

// asset-input/node_modules/@aws-lambda-powertools/logger/lib/esm/Logger.js
var Logger = class _Logger extends Utility {
  /**
   * Console instance used to print logs.
   *
   * In AWS Lambda, we create a new instance of the Console class so that we can have
   * full control over the output of the logs. In testing environments, we use the
   * default console instance.
   *
   * This property is initialized in the constructor in `setOptions()`.
   */
  console;
  /**
   * Custom config service instance used to configure the logger.
   */
  customConfigService;
  /**
   * Whether to print the Lambda invocation event in the logs.
   */
  logEvent = false;
  /**
   * Formatter used to format the log items.
   * @default new PowertoolsLogFormatter()
   */
  logFormatter;
  /**
   * JSON indentation used to format the logs.
   */
  logIndentation = LogJsonIndent.COMPACT;
  /**
   * Log level used internally by the current instance of Logger.
   */
  logLevel = LogLevelThreshold.INFO;
  /**
   * Advanced Logging Control Log Level
   * If not a valid value this will be left undefined, even if the
   * environment variable AWS_LAMBDA_LOG_LEVEL is set
   */
  #alcLogLevel;
  /**
   * Standard attributes managed by Powertools that will be logged in all log items.
   */
  powertoolsLogData = {
    sampleRateValue: 0
  };
  /**
   * Store for managing temporary and persistent log attributes.
   */
  #attributesStore = new LogAttributesStore();
  /**
   * Buffer used to store logs until the logger is initialized.
   *
   * Sometimes we need to log warnings before the logger is fully initialized, however we can't log them
   * immediately because the logger is not ready yet. This buffer stores those logs until the logger is ready.
   */
  #initBuffer = [];
  /**
   * Flag used to determine if the logger is initialized.
   */
  #isInitialized = false;
  /**
   * This is the initial log leval as set during the initialization of the logger.
   *
   * We keep this value to be able to reset the log level to the initial value when the sample rate is refreshed.
   */
  #initialLogLevel = LogLevelThreshold.INFO;
  /**
   * Replacer function used to serialize the log items.
   */
  #jsonReplacerFn;
  /**
   * Buffer configuration options.
   */
  #bufferConfig = {
    enabled: false,
    flushOnErrorLog: true,
    maxBytes: 20480,
    bufferAtVerbosity: LogLevelThreshold.DEBUG
  };
  /**
   * Contains buffered logs, grouped by `_X_AMZN_TRACE_ID`, each group with a max size of `maxBufferBytesSize`
   */
  #buffer;
  /**
   * Search function for the correlation ID.
   */
  #correlationIdSearchFn;
  /**
   * The debug sampling rate configuration.
   */
  #debugLogSampling = {
    /**
     * The sampling rate value used to determine if the log level should be set to DEBUG.
     */
    sampleRateValue: 0,
    /**
     * The number of times the debug sampling rate has been refreshed.
     *
     * We use this to determine if we should refresh it again.
     */
    refreshedTimes: 0
  };
  /**
   * Map used to store the warning messages that have already been logged.
   */
  #warnOnceMap = /* @__PURE__ */ new Map();
  /**
   * Log level used by the current instance of Logger.
   *
   * Returns the log level as a number. The higher the number, the less verbose the logs.
   * To get the log level name, use the {@link getLevelName()} method.
   */
  get level() {
    return this.logLevel;
  }
  constructor(options = {}) {
    super();
    const { customConfigService, ...rest } = options;
    this.customConfigService = customConfigService;
    this.setOptions(rest);
    this.#isInitialized = true;
    for (const [level, log] of this.#initBuffer) {
      this.printLog(level, this.createAndPopulateLogItem(...log));
    }
    this.#initBuffer = [];
  }
  /**
   * Add the current Lambda function's invocation context data to the powertoolLogData property of the instance.
   * This context data will be part of all printed log items.
   *
   * @param context - The Lambda function's invocation context.
   */
  addContext(context) {
    this.addToPowertoolsLogData({
      lambdaContext: {
        invokedFunctionArn: context.invokedFunctionArn,
        coldStart: this.getColdStart(),
        awsRequestId: context.awsRequestId,
        memoryLimitInMB: context.memoryLimitInMB,
        functionName: context.functionName,
        functionVersion: context.functionVersion,
        tenantId: context.tenantId
      }
    });
  }
  /**
   * @deprecated This method is deprecated and will be removed in the future major versions, please use {@link appendPersistentKeys() `appendPersistentKeys()`} instead.
   */
  addPersistentLogAttributes(attributes) {
    this.appendPersistentKeys(attributes);
  }
  /**
   * Add the given temporary attributes (key-value pairs) to all log items generated by this Logger instance.
   *
   * If the key already exists in the attributes, it will be overwritten. If the key is one of `level`, `message`, `sampling_rate`,
   * `service`, or `timestamp` we will log a warning and drop the value.
   *
   * @param attributes - The attributes to add to all log items.
   */
  appendKeys(attributes) {
    this.#appendKeys(attributes, "temp");
  }
  /**
   * Add the given persistent attributes (key-value pairs) to all log items generated by this Logger instance.
   *
   * If the key already exists in the attributes, it will be overwritten. If the key is one of `level`, `message`, `sampling_rate`,
   * `service`, or `timestamp` we will log a warning and drop the value.
   *
   * @param attributes - The attributes to add to all log items.
   */
  appendPersistentKeys(attributes) {
    this.#appendKeys(attributes, "persistent");
  }
  /**
   * Create a separate Logger instance, identical to the current one.
   * It's possible to overwrite the new instance options by passing them.
   *
   * @param options - The options to initialize the child logger with.
   */
  createChild(options = {}) {
    const persistentKeyName = "persistentLogAttributes" in options && !("persistentKeys" in options) ? "persistentLogAttributes" : "persistentKeys";
    const childLogger = this.createLogger(
      // Merge parent logger options with options passed to createChild,
      // the latter having precedence.
      deepMerge({}, {
        logLevel: this.getLevelName(),
        serviceName: this.powertoolsLogData.serviceName,
        sampleRateValue: this.#debugLogSampling.sampleRateValue,
        logFormatter: this.getLogFormatter(),
        customConfigService: this.getCustomConfigService(),
        environment: this.powertoolsLogData.environment,
        [persistentKeyName]: this.#attributesStore.getPersistentAttributes(),
        jsonReplacerFn: this.#jsonReplacerFn,
        correlationIdSearchFn: this.#correlationIdSearchFn,
        ...this.#bufferConfig.enabled && {
          logBufferOptions: {
            maxBytes: this.#bufferConfig.maxBytes,
            bufferAtVerbosity: this.getLogLevelNameFromNumber(this.#bufferConfig.bufferAtVerbosity),
            flushOnErrorLog: this.#bufferConfig.flushOnErrorLog
          }
        }
      }, options)
    );
    if (this.powertoolsLogData.lambdaContext)
      childLogger.addContext(this.powertoolsLogData.lambdaContext);
    const temporaryAttributes = this.#attributesStore.getTemporaryAttributes();
    if (Object.keys(temporaryAttributes).length > 0) {
      childLogger.appendKeys(temporaryAttributes);
    }
    return childLogger;
  }
  /**
   * Print a log item with level CRITICAL.
   *
   * @param input - The log message.
   * @param extraInput - The extra input to log.
   */
  critical(input, ...extraInput) {
    this.processLogItem(LogLevelThreshold.CRITICAL, input, extraInput);
  }
  /**
   * Print a log item with level DEBUG.
   *
   * @param input
   * @param extraInput - The extra input to log.
   */
  debug(input, ...extraInput) {
    this.processLogItem(LogLevelThreshold.DEBUG, input, extraInput);
  }
  /**
   * Print a log item with level ERROR.
   *
   * @param input - The log message.
   * @param extraInput - The extra input to log.
   */
  error(input, ...extraInput) {
    if (this.#bufferConfig.enabled && this.#bufferConfig.flushOnErrorLog) {
      this.flushBuffer();
    }
    this.processLogItem(LogLevelThreshold.ERROR, input, extraInput);
  }
  /**
   * Get the log level name of the current instance of Logger.
   *
   * Returns the log level name, i.e. `INFO`, `DEBUG`, etc.
   * To get the log level as a number, use the {@link Logger.level} property.
   */
  getLevelName() {
    return this.getLogLevelNameFromNumber(this.logLevel);
  }
  /**
   * Return a boolean value. True means that the Lambda invocation events
   * are printed in the logs.
   */
  getLogEvent() {
    return this.logEvent;
  }
  /**
   * Return the persistent log attributes, which are the attributes
   * that will be logged in all log items.
   */
  getPersistentLogAttributes() {
    return this.#attributesStore.getPersistentAttributes();
  }
  /**
   * Print a log item with level INFO.
   *
   * @param input - The log message.
   * @param extraInput - The extra input to log.
   */
  info(input, ...extraInput) {
    this.processLogItem(LogLevelThreshold.INFO, input, extraInput);
  }
  /**
   * Class method decorator that adds the current Lambda function context as extra
   * information in all log items.
   *
   * This decorator is useful when you want to enrich your logs with information
   * from the function context, such as the function name, version, and request ID, and more.
   *
   * @example
   * ```typescript
   * import { Logger } from '@aws-lambda-powertools/logger';
   * import type { LambdaInterface } from '@aws-lambda-powertools/commons/types';
   *
   * const logger = new Logger({ serviceName: 'serverlessAirline' });
   *
   * class Lambda implements LambdaInterface {
   *   // Decorate your handler class method
   *   ⁣@logger.injectLambdaContext()
   *   public async handler(_event: unknown, _context: unknown): Promise<void> {
   *     logger.info('This is an INFO log with some context');
   *   }
   * }
   *
   * const handlerClass = new Lambda();
   * export const handler = handlerClass.handler.bind(handlerClass);
   * ```
   *
   * The decorator can also be used to log the Lambda invocation event; this can be configured both via
   * the `logEvent` parameter and the `POWERTOOLS_LOGGER_LOG_EVENT` environment variable. When both
   * are set, the `logEvent` parameter takes precedence.
   *
   * Additionally, the decorator can be used to reset the temporary keys added with the `appendKeys()` method
   * after the invocation, or to flush the buffer when an uncaught error is thrown in the handler.
   *
   * @see https://www.typescriptlang.org/docs/handbook/decorators.html#method-decorators
   *
   * @param options.logEvent - When `true` the logger will log the event.
   * @param options.resetKeys - When `true` the logger will clear temporary keys added with {@link Logger.appendKeys() `appendKeys()`} method.
   * @param options.flushBufferOnUncaughtError - When `true` the logger will flush the buffer when an uncaught error is thrown in the handler.
   */
  injectLambdaContext(options) {
    return (_target, _propertyKey, descriptor) => {
      const originalMethod = descriptor.value;
      const loggerRef = this;
      descriptor.value = async function(...args) {
        loggerRef.refreshSampleRateCalculation();
        loggerRef.addContext(args[1]);
        loggerRef.logEventIfEnabled(args[0], options?.logEvent);
        if (options?.correlationIdPath) {
          loggerRef.setCorrelationId(args[0], options?.correlationIdPath);
        }
        try {
          return await originalMethod.apply(this, args);
        } catch (error) {
          if (options?.flushBufferOnUncaughtError) {
            loggerRef.flushBuffer();
            loggerRef.error({
              message: UncaughtErrorLogMessage,
              error
            });
          }
          throw error;
        } finally {
          if (options?.clearState || options?.resetKeys)
            loggerRef.resetKeys();
          loggerRef.clearBuffer();
        }
      };
    };
  }
  /**
   * @deprecated This method is deprecated and will be removed in the future major versions. Use {@link resetKeys()} instead.
   */
  /* v8 ignore next -- @preserve */
  static injectLambdaContextAfterOrOnError(logger, _persistentAttributes, options) {
    if (options && (options.clearState || options?.resetKeys)) {
      logger.resetKeys();
    }
  }
  /**
   * @deprecated - This method is deprecated and will be removed in the next major version.
   */
  /* v8 ignore next -- @preserve */
  static injectLambdaContextBefore(logger, event, context, options) {
    logger.addContext(context);
    logger.logEventIfEnabled(event, options?.logEvent);
  }
  /**
   * Log the AWS Lambda event payload for the current invocation if the environment variable `POWERTOOLS_LOGGER_LOG_EVENT` is set to `true`.
   *
   * @example
   * ```ts
   * process.env.POWERTOOLS_LOGGER_LOG_EVENT = 'true';
   *
   * import { Logger } from '@aws-lambda-powertools/logger';
   *
   * const logger = new Logger();
   *
   * export const handler = async (event) => {
   *   logger.logEventIfEnabled(event);
   *   // ... your handler code
   * }
   * ```
   *
   * @param event - The AWS Lambda event payload.
   * @param overwriteValue - Overwrite the environment variable value.
   */
  logEventIfEnabled(event, overwriteValue) {
    if (!this.shouldLogEvent(overwriteValue))
      return;
    this.info("Lambda invocation event", { event });
  }
  /**
   * This method allows recalculating the initial sampling decision for changing
   * the log level to DEBUG based on a sample rate value used during initialization,
   * potentially yielding a different outcome.
   *
   * This only works for warm starts, because we don't to avoid double sampling.
   */
  refreshSampleRateCalculation() {
    if (this.#debugLogSampling.refreshedTimes === 0) {
      this.#debugLogSampling.refreshedTimes++;
      return;
    }
    if (this.#shouldEnableDebugSampling() && this.logLevel > LogLevelThreshold.TRACE) {
      this.setLogLevel("DEBUG");
      this.debug("Setting log level to DEBUG due to sampling rate");
    } else {
      this.setLogLevel(this.getLogLevelNameFromNumber(this.#initialLogLevel));
    }
  }
  /**
   * Remove temporary attributes based on provided keys to all log items generated by this Logger instance.
   *
   * @param keys - The keys to remove.
   */
  removeKeys(keys) {
    this.#attributesStore.removeTemporaryKeys(keys);
  }
  /**
   * Remove the given keys from the persistent keys.
   *
   * @example
   * ```typescript
   * import { Logger } from '@aws-lambda-powertools/logger';
   *
   * const logger = new Logger({
   *   persistentKeys: {
   *     environment: 'prod',
   *   },
   * });
   *
   * logger.removePersistentKeys(['environment']);
   * ```
   *
   * @param keys - The keys to remove from the persistent attributes.
   */
  removePersistentKeys(keys) {
    this.#attributesStore.removePersistentKeys(keys);
  }
  /**
   * @deprecated This method is deprecated and will be removed in the future major versions. Use {@link removePersistentKeys()} instead.
   */
  removePersistentLogAttributes(keys) {
    this.removePersistentKeys(keys);
  }
  /**
   * Remove all temporary log attributes added with {@link appendKeys() `appendKeys()`} method.
   */
  resetKeys() {
    this.#attributesStore.clearTemporaryAttributes();
  }
  /**
   * Set the log level for this Logger instance.
   *
   * If the log level is set using AWS Lambda Advanced Logging Controls, it sets it
   * instead of the given log level to avoid data loss.
   *
   * @param logLevel The log level to set, i.e. `error`, `warn`, `info`, `debug`, etc.
   */
  setLogLevel(logLevel) {
    if (this.awsLogLevelShortCircuit(logLevel))
      return;
    if (this.isValidLogLevel(logLevel)) {
      this.logLevel = LogLevelThreshold[logLevel];
    } else {
      throw new Error(`Invalid log level: ${logLevel}`);
    }
  }
  /**
   * @deprecated This method is deprecated and will be removed in the future major versions, please use {@link appendPersistentKeys() `appendPersistentKeys()`} instead.
   */
  setPersistentLogAttributes(attributes) {
    const filtered = this.#filterReservedAttributeKeys(attributes);
    this.#attributesStore.setPersistentAttributes(filtered);
  }
  /**
   * @deprecated Use getPersistentLogAttributes() instead
   */
  get persistentLogAttributes() {
    return this.#attributesStore.getPersistentAttributes();
  }
  /**
   * Check whether the current Lambda invocation event should be printed in the logs or not.
   *
   * @param overwriteValue - Overwrite the environment variable value.
   */
  shouldLogEvent(overwriteValue) {
    if (typeof overwriteValue === "boolean") {
      return overwriteValue;
    }
    return this.getLogEvent();
  }
  /**
   * Print a log item with level TRACE.
   *
   * @param input - The log message.
   * @param extraInput - The extra input to log.
   */
  trace(input, ...extraInput) {
    this.processLogItem(LogLevelThreshold.TRACE, input, extraInput);
  }
  /**
   * Print a log item with level WARN.
   *
   * @param input - The log message.
   * @param extraInput - The extra input to log.
   */
  warn(input, ...extraInput) {
    this.processLogItem(LogLevelThreshold.WARN, input, extraInput);
  }
  /**
   * Log a warning message once per unique message.
   *
   * @param message - The log message.
   */
  #warnOnce(message) {
    if (this.#warnOnceMap.has(message))
      return;
    this.#warnOnceMap.set(message, true);
    this.warn(message);
  }
  /**
   * Factory method for instantiating logger instances. Used by `createChild` method.
   * Important for customization and subclassing. It allows subclasses, like `MyOwnLogger`,
   * to override its behavior while keeping the main business logic in `createChild` intact.
   *
   * @example
   * ```typescript
   * // MyOwnLogger subclass
   * class MyOwnLogger extends Logger {
   *   protected createLogger(options?: ConstructorOptions): MyOwnLogger {
   *     return new MyOwnLogger(options);
   *   }
   *   // No need to re-implement business logic from `createChild` and keep track on changes
   *   public createChild(options?: ConstructorOptions): MyOwnLogger {
   *     return super.createChild(options) as MyOwnLogger;
   *   }
   * }
   * ```
   *
   * @param options - Logger configuration options.
   */
  createLogger(options) {
    return new _Logger(options);
  }
  /**
   * A custom JSON replacer function that is used to serialize the log items.
   *
   * By default, we already extend the default serialization behavior to handle `BigInt` and `Error` objects, as well as remove circular references.
   * When a custom JSON replacer function is passed to the Logger constructor, it will be called **before** our custom rules for each key-value pair in the object being stringified.
   *
   * This allows you to customize the serialization while still benefiting from the default behavior.
   *
   * @see {@link ConstructorOptions.jsonReplacerFn}
   */
  getJsonReplacer() {
    const references = /* @__PURE__ */ new WeakSet();
    return (key, value) => {
      let replacedValue = value;
      if (this.#jsonReplacerFn)
        replacedValue = this.#jsonReplacerFn?.(key, replacedValue);
      if (replacedValue instanceof Error) {
        replacedValue = this.getLogFormatter().formatError(replacedValue);
      }
      if (typeof replacedValue === "bigint") {
        return replacedValue.toString();
      }
      if (typeof replacedValue === "object" && replacedValue !== null) {
        if (references.has(replacedValue)) {
          return;
        }
        references.add(replacedValue);
      }
      return replacedValue;
    };
  }
  /**
   * Store information that is printed in all log items.
   *
   * @param attributes - The attributes to add to all log items.
   */
  addToPowertoolsLogData(attributes) {
    deepMerge(this.powertoolsLogData, attributes);
  }
  #filterReservedAttributeKeys(attributes) {
    const filtered = {};
    for (const [key, value] of Object.entries(attributes)) {
      if (!this.#checkReservedKeyAndWarn(key)) {
        filtered[key] = value;
      }
    }
    return filtered;
  }
  /**
   * Shared logic for adding keys to the logger instance.
   *
   * @param attributes - The attributes to add to the log item.
   * @param type - The type of the attributes to add.
   */
  #appendKeys(attributes, type) {
    const filtered = this.#filterReservedAttributeKeys(attributes);
    if (type === "temp") {
      this.#attributesStore.appendTemporaryKeys(filtered);
    } else {
      const current = this.#attributesStore.getPersistentAttributes();
      this.#attributesStore.setPersistentAttributes(deepMerge(current, filtered));
    }
  }
  awsLogLevelShortCircuit(selectedLogLevel) {
    if (this.#alcLogLevel !== void 0) {
      this.logLevel = LogLevelThreshold[this.#alcLogLevel];
      if (this.isValidLogLevel(selectedLogLevel) && this.logLevel > LogLevelThreshold[selectedLogLevel]) {
        this.#warnOnce(`Current log level (${selectedLogLevel}) does not match AWS Lambda Advanced Logging Controls minimum log level (${this.#alcLogLevel}). This can lead to data loss, consider adjusting them.`);
      }
      return true;
    }
    return false;
  }
  /**
   * Create a log item and populate it with the given log level, input, and extra input.
   */
  createAndPopulateLogItem(logLevel, input, extraInput) {
    const unformattedBaseAttributes = {
      logLevel: this.getLogLevelNameFromNumber(logLevel),
      timestamp: /* @__PURE__ */ new Date(),
      xRayTraceId: getXRayTraceIdFromEnv(),
      ...this.getPowertoolsLogData(),
      message: ""
    };
    const additionalAttributes = this.#attributesStore.getAllAttributes();
    this.#processMainInput(input, unformattedBaseAttributes, additionalAttributes);
    this.#processExtraInput(extraInput, additionalAttributes);
    return this.getLogFormatter().formatAttributes(unformattedBaseAttributes, additionalAttributes);
  }
  /**
   * Process the main input message and add it to the attributes
   */
  #processMainInput(input, baseAttributes, additionalAttributes) {
    if (typeof input === "string") {
      baseAttributes.message = input;
      return;
    }
    const { message, ...rest } = input;
    baseAttributes.message = message;
    for (const [key, value] of Object.entries(rest)) {
      if (!this.#checkReservedKeyAndWarn(key)) {
        additionalAttributes[key] = value;
      }
    }
  }
  /**
   * Process extra input items and add them to additional attributes
   */
  #processExtraInput(extraInput, additionalAttributes) {
    for (const item of extraInput) {
      if (isNullOrUndefined(item)) {
        continue;
      }
      if (item instanceof Error) {
        additionalAttributes.error = item;
      } else if (typeof item === "string") {
        additionalAttributes.extra = item;
      } else {
        this.#processExtraObject(item, additionalAttributes);
      }
    }
  }
  /**
   * Process an extra input object and add its properties to additional attributes
   */
  #processExtraObject(item, additionalAttributes) {
    for (const [key, value] of Object.entries(item)) {
      if (!this.#checkReservedKeyAndWarn(key)) {
        additionalAttributes[key] = value;
      }
    }
  }
  /**
   * Make a new debug log sampling decision based on the sample rate value.
   */
  #shouldEnableDebugSampling() {
    return this.#debugLogSampling.sampleRateValue && (0, import_node_crypto.randomInt)(0, 100) / 100 <= this.#debugLogSampling.sampleRateValue;
  }
  /**
   * Check if a given key is reserved and warn the user if it is.
   *
   * @param key - The key to check
   */
  #checkReservedKeyAndWarn(key) {
    if (ReservedKeys.includes(key)) {
      this.warn(`The key "${key}" is a reserved key and will be dropped.`);
      return true;
    }
    return false;
  }
  /**
   * Get the custom config service, an abstraction used to fetch environment variables.
   */
  getCustomConfigService() {
    return this.customConfigService;
  }
  /**
   * Get the instance of a service that formats the structure of a
   * log item's keys and values in the desired way.
   */
  getLogFormatter() {
    return this.logFormatter;
  }
  /**
   * Get the log level name from the log level number.
   *
   * For example, if the log level is 16, it will return 'WARN'.
   *
   * @param logLevel - The log level to get the name of
   */
  getLogLevelNameFromNumber(logLevel) {
    let found;
    for (const [key, value] of Object.entries(LogLevelThreshold)) {
      if (value === logLevel) {
        found = key;
        break;
      }
    }
    return found;
  }
  /**
   * Get information that will be added in all log item by
   * this Logger instance (different from user-provided persistent attributes).
   */
  getPowertoolsLogData() {
    return this.powertoolsLogData;
  }
  /**
   * Check if a given log level is valid.
   *
   * @param logLevel - The log level to check
   */
  isValidLogLevel(logLevel) {
    return typeof logLevel === "string" && logLevel in LogLevelThreshold;
  }
  /**
   * Check if a given sample rate value is valid.
   *
   * @param sampleRateValue - The sample rate value to check
   */
  isValidSampleRate(sampleRateValue) {
    return typeof sampleRateValue === "number" && 0 <= sampleRateValue && sampleRateValue <= 1;
  }
  /**
   * Print a given log with given log level.
   *
   * @param logLevel - The log level
   * @param log - The log item to print
   */
  printLog(logLevel, log) {
    log.prepareForPrint();
    const consoleMethod = logLevel === LogLevelThreshold.CRITICAL ? "error" : this.getLogLevelNameFromNumber(logLevel).toLowerCase();
    this.console[consoleMethod](JSON.stringify(log.getAttributes(), this.getJsonReplacer(), this.logIndentation));
  }
  /**
   * Print or buffer a given log with given log level.
   *
   * @param logLevel - The log level threshold
   * @param input - The log message
   * @param extraInput - The extra input to log
   */
  processLogItem(logLevel, input, extraInput) {
    const traceId = getXRayTraceIdFromEnv();
    if (traceId !== void 0 && this.shouldBufferLog(traceId, logLevel)) {
      try {
        this.bufferLogItem(traceId, this.createAndPopulateLogItem(logLevel, input, extraInput), logLevel);
      } catch (error) {
        this.printLog(LogLevelThreshold.WARN, this.createAndPopulateLogItem(LogLevelThreshold.WARN, `Unable to buffer log: ${error.message}`, [error]));
        this.printLog(logLevel, this.createAndPopulateLogItem(logLevel, input, extraInput));
      }
      return;
    }
    if (logLevel >= this.logLevel) {
      if (this.#isInitialized) {
        this.printLog(logLevel, this.createAndPopulateLogItem(logLevel, input, extraInput));
      } else {
        this.#initBuffer.push([logLevel, [logLevel, input, extraInput]]);
      }
    }
  }
  /**
   * Initialize the console property as an instance of the internal version of Console() class (PR #748)
   * or as the global node console if the `POWERTOOLS_DEV' env variable is set and has truthy value.
   */
  setConsole() {
    if (isDevMode()) {
      this.console = console;
    } else {
      this.console = new import_node_console.Console({
        stdout: process.stdout,
        stderr: process.stderr
      });
    }
    this.console.trace = (message, ...optionalParams) => {
      this.console.log(message, ...optionalParams);
    };
  }
  /**
   * Set the initial Logger log level based on the following order:
   * 1. If a log level is set using AWS Lambda Advanced Logging Controls, it sets it.
   * 2. If a log level is passed to the constructor, it sets it.
   * 3. If a log level is set via custom config service, it sets it.
   * 4. If a log level is set via env variables, it sets it.
   *
   * If none of the above is true, the default log level applies (`INFO`).
   *
   * @param logLevel - Log level passed to the constructor
   */
  setInitialLogLevel(logLevel) {
    const constructorLogLevel = logLevel?.toUpperCase();
    if (this.awsLogLevelShortCircuit(constructorLogLevel)) {
      this.#initialLogLevel = this.logLevel;
      return;
    }
    if (this.isValidLogLevel(constructorLogLevel)) {
      this.logLevel = LogLevelThreshold[constructorLogLevel];
      this.#initialLogLevel = this.logLevel;
      return;
    }
    const customConfigValue = this.getCustomConfigService()?.getLogLevel()?.toUpperCase();
    if (this.isValidLogLevel(customConfigValue)) {
      this.logLevel = LogLevelThreshold[customConfigValue];
      this.#initialLogLevel = this.logLevel;
      return;
    }
    const logLevelVariable = getStringFromEnv({
      key: "POWERTOOLS_LOG_LEVEL",
      defaultValue: ""
    });
    const logLevelVariableAlias = getStringFromEnv({
      key: "LOG_LEVEL",
      defaultValue: ""
    });
    const logLevelValue = logLevelVariable || logLevelVariableAlias;
    if (this.isValidLogLevel(logLevelValue)) {
      this.logLevel = LogLevelThreshold[logLevelValue];
      this.#initialLogLevel = this.logLevel;
    }
  }
  /**
   * Set the sample rate value with the following priority:
   * 1. Constructor value
   * 2. Custom config service value
   * 3. Environment variable value
   * 4. Default value (zero)
   *
   * @param sampleRateValue - The sample rate value
   */
  setInitialSampleRate(sampleRateValue) {
    const constructorValue = sampleRateValue;
    const customConfigValue = this.getCustomConfigService()?.getSampleRateValue();
    const sampleRateEnvVariable = getNumberFromEnv({
      key: "POWERTOOLS_LOGGER_SAMPLE_RATE",
      defaultValue: 0
    });
    for (const value of [
      constructorValue,
      customConfigValue,
      sampleRateEnvVariable
    ]) {
      if (this.isValidSampleRate(value)) {
        this.#debugLogSampling.sampleRateValue = value;
        this.powertoolsLogData.sampleRateValue = value;
        if (this.#shouldEnableDebugSampling() && this.logLevel > LogLevelThreshold.TRACE) {
          this.setLogLevel("DEBUG");
          this.debug("Setting log level to DEBUG due to sampling rate");
        }
        break;
      }
    }
  }
  /**
   * If the log event feature is enabled via env variable, it sets a property that tracks whether
   * the event passed to the Lambda function handler should be logged or not.
   */
  setLogEvent() {
    this.logEvent = getBooleanFromEnv({
      key: "POWERTOOLS_LOGGER_LOG_EVENT",
      defaultValue: false
    });
  }
  /**
   * Set the log formatter instance, in charge of giving a custom format
   * to the structured logs, and optionally the ordering for keys within logs.
   *
   * @param logFormatter - The log formatter
   * @param logRecordOrder - Optional list of keys to specify order in logs
   */
  setLogFormatter(logFormatter, logRecordOrder) {
    this.logFormatter = logFormatter ?? new PowertoolsLogFormatter({
      logRecordOrder
    });
  }
  /**
   * If the `POWERTOOLS_DEV` env variable is set,
   * add JSON indentation for pretty printing logs.
   */
  setLogIndentation() {
    if (isDevMode()) {
      this.logIndentation = LogJsonIndent.PRETTY;
    }
  }
  /**
   * Configure the Logger instance settings that will affect the Logger's behaviour
   * and the content of all logs.
   *
   * @param options - Options to configure the Logger instance
   */
  setOptions(options) {
    const {
      logLevel,
      serviceName,
      sampleRateValue,
      logFormatter,
      persistentKeys,
      persistentLogAttributes,
      // deprecated in favor of persistentKeys
      environment,
      jsonReplacerFn,
      logRecordOrder,
      logBufferOptions,
      correlationIdSearchFn
    } = options;
    if (persistentLogAttributes && Object.keys(persistentLogAttributes).length > 0 && persistentKeys && Object.keys(persistentKeys).length > 0) {
      this.warn("Both persistentLogAttributes and persistentKeys options were provided. Using persistentKeys as persistentLogAttributes is deprecated and will be removed in future releases");
    }
    this.setPowertoolsLogData(serviceName, environment, persistentKeys || persistentLogAttributes);
    const lambdaLogLevel = getStringFromEnv({
      key: "AWS_LAMBDA_LOG_LEVEL",
      defaultValue: ""
    });
    const AlcLogLevel = lambdaLogLevel === "FATAL" ? "CRITICAL" : lambdaLogLevel;
    if (this.isValidLogLevel(AlcLogLevel)) {
      this.#alcLogLevel = AlcLogLevel;
    }
    this.setLogEvent();
    this.setInitialLogLevel(logLevel);
    this.setInitialSampleRate(sampleRateValue);
    this.setLogFormatter(logFormatter, logRecordOrder);
    this.setConsole();
    this.setLogIndentation();
    this.#jsonReplacerFn = jsonReplacerFn;
    this.#setLogBuffering(logBufferOptions);
    this.#correlationIdSearchFn = correlationIdSearchFn;
    return this;
  }
  /**
   * Add important data to the Logger instance that will affect the content of all logs.
   *
   * @param serviceName - The service name
   * @param environment - The environment
   * @param persistentKeys - The persistent log attributes
   */
  setPowertoolsLogData(serviceName, environment, persistentKeys) {
    this.addToPowertoolsLogData({
      awsRegion: getStringFromEnv({
        key: "AWS_REGION",
        defaultValue: ""
      }),
      environment: environment || this.getCustomConfigService()?.getCurrentEnvironment() || getStringFromEnv({
        key: "ENVIRONMENT",
        defaultValue: ""
      }),
      serviceName: serviceName || this.getCustomConfigService()?.getServiceName() || getStringFromEnv({
        key: "POWERTOOLS_SERVICE_NAME",
        defaultValue: ""
      }) || this.defaultServiceName
    });
    persistentKeys && this.appendPersistentKeys(persistentKeys);
  }
  /**
   * Configure the buffer settings for the Logger instance.
   *
   * @param options - Options to configure the Logger instance
   */
  #setLogBuffering(options) {
    if (options === void 0) {
      return;
    }
    this.#bufferConfig.enabled = options?.enabled !== false;
    if (this.#bufferConfig.enabled === false)
      return;
    if (options?.maxBytes !== void 0) {
      this.#bufferConfig.maxBytes = options.maxBytes;
    }
    this.#buffer = new CircularMap({
      maxBytesSize: this.#bufferConfig.maxBytes
    });
    if (options?.flushOnErrorLog === false) {
      this.#bufferConfig.flushOnErrorLog = false;
    }
    const bufferAtLogLevel = options?.bufferAtVerbosity?.toUpperCase();
    if (this.isValidLogLevel(bufferAtLogLevel)) {
      this.#bufferConfig.bufferAtVerbosity = LogLevelThreshold[bufferAtLogLevel];
    }
    if (this.#alcLogLevel !== void 0 && LogLevelThreshold[this.#alcLogLevel] > this.#bufferConfig.bufferAtVerbosity) {
      this.#warnOnce("Advanced Loggging Controls (ALC) Log Level is less verbose than Log Buffering Log Level. Buffered logs will be filtered by ALC");
    }
  }
  /**
   * Add a log to the buffer.
   *
   * @param xrayTraceId - `_X_AMZN_TRACE_ID` of the request
   * @param log - Log to be buffered
   * @param logLevel - The level of log to be buffered
   */
  bufferLogItem(xrayTraceId, log, logLevel) {
    log.prepareForPrint();
    if (this.#buffer?.has(xrayTraceId) === false) {
      this.#buffer?.clear();
    }
    this.#buffer?.setItem(xrayTraceId, JSON.stringify(log.getAttributes(), this.getJsonReplacer(), this.logIndentation), logLevel);
  }
  /**
   * Flush all logs in the request buffer.
   *
   * This is called automatically when you use the {@link injectLambdaContext | `@logger.injectLambdaContext()`} decorator and
   * your function throws an error.
   */
  flushBuffer() {
    const traceId = getXRayTraceIdFromEnv();
    if (traceId === void 0) {
      return;
    }
    const buffer = this.#buffer?.get(traceId);
    if (buffer === void 0) {
      return;
    }
    for (const item of buffer) {
      const consoleMethod = this.getLogLevelNameFromNumber(item.logLevel).toLowerCase();
      this.console[consoleMethod](item.value);
    }
    if (buffer.hasEvictedLog) {
      this.printLog(LogLevelThreshold.WARN, this.createAndPopulateLogItem(LogLevelThreshold.WARN, "Some logs are not displayed because they were evicted from the buffer. Increase buffer size to store more logs in the buffer", []));
    }
    if (this.#alcLogLevel !== void 0 && LogLevelThreshold[this.#alcLogLevel] > this.#bufferConfig.bufferAtVerbosity) {
      this.#warnOnce("Advanced Loggging Controls (ALC) Log Level is less verbose than Log Buffering Log Level. Some logs might be missing.");
    }
    this.#buffer?.delete(traceId);
  }
  /**
   * Empties the buffer for the current request
   */
  clearBuffer() {
    const traceId = getXRayTraceIdFromEnv();
    if (traceId === void 0) {
      return;
    }
    this.#buffer?.delete(traceId);
  }
  /**
   * Test if the log meets the criteria to be buffered.
   *
   * @param traceId - `_X_AMZN_TRACE_ID` of the request
   * @param logLevel - The level of the log being considered
   */
  shouldBufferLog(traceId, logLevel) {
    return this.#bufferConfig.enabled && traceId !== void 0 && logLevel <= this.#bufferConfig.bufferAtVerbosity;
  }
  /**
   * Set the correlation ID for the log item.
   *
   * This method can be used to set the correlation ID for the log item or to search for the correlation ID in the event.
   *
   * @example
   * ```typescript
   * import { Logger } from '@aws-lambda-powertools/logger';
   *
   * const logger = new Logger();
   * logger.setCorrelationId('my-correlation-id'); // sets the correlation ID directly with the first argument as value
   * ```
   *
   * @example
   * ```typescript
   * import { Logger } from '@aws-lambda-powertools/logger';
   * import { search } from '@aws-lambda-powertools/logger/correlationId';
   *
   * const logger = new Logger({ correlationIdSearchFn: search });
   * logger.setCorrelationId(event, 'requestContext.requestId'); // sets the correlation ID from the event using JMSPath expression
   * ```
   *
   * @param value - The value to set as the correlation ID or the event to search for the correlation ID
   * @param correlationIdPath - Optional JMESPath expression to extract the correlation ID for the payload
   */
  setCorrelationId(value, correlationIdPath) {
    if (typeof correlationIdPath === "string") {
      if (!this.#correlationIdSearchFn) {
        this.#warnOnce("correlationIdPath is set but no search function was provided. The correlation ID will not be added to the log attributes.");
        return;
      }
      const correlationId = this.#correlationIdSearchFn(correlationIdPath, value);
      if (correlationId)
        this.appendKeys({ correlation_id: correlationId });
      return;
    }
    this.appendKeys({ correlation_id: value });
  }
  /**
   * Get the correlation ID from the log attributes.
   */
  getCorrelationId() {
    return this.#attributesStore.getTemporaryAttributes().correlation_id;
  }
};

// asset-input/src/infrastructure/config/types.ts
var TYPES = {
  // Domain Services
  TravelAgentService: Symbol.for("TravelAgentService"),
  UserProfileService: Symbol.for("UserProfileService"),
  ConversationService: Symbol.for("ConversationService"),
  // Repositories
  UserProfileRepository: Symbol.for("UserProfileRepository"),
  ChatHistoryRepository: Symbol.for("ChatHistoryRepository"),
  FlightDataRepository: Symbol.for("FlightDataRepository"),
  // External Services
  AIService: Symbol.for("AIService"),
  FlightSearchService: Symbol.for("FlightSearchService"),
  NotificationService: Symbol.for("NotificationService"),
  // Configuration
  AppConfig: Symbol.for("AppConfig"),
  // Logging & Monitoring
  Logger: Symbol.for("Logger"),
  Tracer: Symbol.for("Tracer"),
  Metrics: Symbol.for("Metrics")
};

// asset-input/src/infrastructure/config/AWSConfigService.ts
var AWSConfigService = class _AWSConfigService {
  static instance;
  config = null;
  constructor() {
  }
  static getInstance() {
    if (!_AWSConfigService.instance) {
      _AWSConfigService.instance = new _AWSConfigService();
    }
    return _AWSConfigService.instance;
  }
  async loadConfig() {
    if (this.config) {
      return this.config;
    }
    const env2 = process.env;
    const config = {
      // GitHub Models configuration
      useGitHubModels: env2["USE_GITHUB_MODELS"] === "true",
      githubModelsBaseUrl: env2["GITHUB_MODELS_BASE_URL"] || "https://models.inference.ai.azure.com",
      githubTextModelId: env2["GITHUB_TEXT_MODEL_ID"] || "gpt-4o",
      githubEmbeddingModelId: env2["GITHUB_EMBEDDING_MODEL_ID"] || "openai/text-embedding-ada-002",
      // AWS configuration
      awsRegion: env2["AWS_REGION"] || "us-east-1",
      bedrockModel: env2["BEDROCK_MODEL"] || "anthropic.claude-3-sonnet-20240229-v1:0",
      // DynamoDB configuration
      dynamoDBTablePrefix: env2["DYNAMODB_TABLE_PREFIX"] || "contoso-travel",
      dynamoDBChatHistoryTable: env2["DYNAMODB_CHAT_HISTORY_TABLE"] || "contoso-travel-chat-history",
      dynamoDBUserProfileTable: env2["DYNAMODB_USER_PROFILE_TABLE"] || "contoso-travel-user-profiles",
      dynamoDBFlightsTable: env2["DYNAMODB_FLIGHTS_TABLE"] || "contoso-travel-flights",
      // OpenTelemetry configuration
      // Mem0 configuration
      mem0Endpoint: env2["MEM0_ENDPOINT"] || "https://api.mem0.ai",
      // Lambda/API configuration
      jwtSecret: env2["JWT_SECRET"] || "development-secret-change-in-production",
      cognitoUserPoolId: env2["COGNITO_USER_POOL_ID"] || "us-east-1_development",
      environment: env2["NODE_ENV"] || "development"
    };
    if (env2["GITHUB_TOKEN"]) {
      Object.assign(config, { githubToken: env2["GITHUB_TOKEN"] });
    }
    if (env2["BEDROCK_ENDPOINT"]) {
      Object.assign(config, { bedrockEndpoint: env2["BEDROCK_ENDPOINT"] });
    }
    if (env2["AWS_ACCESS_KEY_ID"]) {
      Object.assign(config, { awsAccessKeyId: env2["AWS_ACCESS_KEY_ID"] });
    }
    if (env2["AWS_SECRET_ACCESS_KEY"]) {
      Object.assign(config, { awsSecretAccessKey: env2["AWS_SECRET_ACCESS_KEY"] });
    }
    if (env2["OTEL_EXPORTER_OTLP_ENDPOINT"]) {
      Object.assign(config, { otelExporterOtlpEndpoint: env2["OTEL_EXPORTER_OTLP_ENDPOINT"] });
    }
    if (env2["MEM0_API_KEY"]) {
      Object.assign(config, { mem0ApiKey: env2["MEM0_API_KEY"] });
    }
    this.config = config;
    return config;
  }
  getConfig() {
    if (!this.config) {
      throw new Error("Configuration not loaded. Call loadConfig() first.");
    }
    return this.config;
  }
  /**
   * Validates that all required configuration is present
   */
  validateConfig() {
    if (!this.config) {
      return { isValid: false, missingKeys: ["Configuration not loaded"] };
    }
    const requiredForProduction = [
      "awsRegion",
      "bedrockModel",
      "dynamoDBTablePrefix",
      "jwtSecret",
      "cognitoUserPoolId"
    ];
    const missingKeys = [];
    if (this.config.environment === "production") {
      for (const key of requiredForProduction) {
        const value = this.config[key];
        if (!value || typeof value === "string" && value.includes("development")) {
          missingKeys.push(key);
        }
      }
      if (this.config.jwtSecret === "development-secret-change-in-production") {
        missingKeys.push("jwtSecret (using development value)");
      }
      if (this.config.cognitoUserPoolId.includes("development")) {
        missingKeys.push("cognitoUserPoolId (using development value)");
      }
    }
    return {
      isValid: missingKeys.length === 0,
      missingKeys
    };
  }
  /**
   * Gets DynamoDB configuration
   */
  getDynamoDBConfig() {
    const config = this.getConfig();
    const endpoint = config.environment === "development" ? process.env["DYNAMODB_ENDPOINT"] : void 0;
    return {
      region: config.awsRegion,
      tablePrefix: config.dynamoDBTablePrefix,
      ...endpoint ? { endpoint } : {}
    };
  }
  /**
   * Gets Bedrock configuration
   */
  getBedrockConfig() {
    const config = this.getConfig();
    return {
      region: config.awsRegion,
      model: config.bedrockModel,
      endpoint: config.bedrockEndpoint
    };
  }
  /**
   * Gets authentication configuration
   */
  getAuthConfig() {
    const config = this.getConfig();
    return {
      jwtSecret: config.jwtSecret,
      cognitoUserPoolId: config.cognitoUserPoolId,
      region: config.awsRegion
    };
  }
};

// asset-input/src/infrastructure/adapters/DynamoDBUserProfileRepository.ts
var import_lib_dynamodb2 = require("@aws-sdk/lib-dynamodb");

// asset-input/src/infrastructure/adapters/BaseDynamoDBRepository.ts
var import_client_dynamodb = require("@aws-sdk/client-dynamodb");
var import_lib_dynamodb = require("@aws-sdk/lib-dynamodb");
var BaseDynamoDBRepository = class {
  client;
  docClient;
  logger;
  tablePrefix;
  constructor(config, logger) {
    this.client = new import_client_dynamodb.DynamoDBClient({
      region: config.region,
      ...config.endpoint && { endpoint: config.endpoint }
    });
    this.docClient = import_lib_dynamodb.DynamoDBDocumentClient.from(this.client);
    this.logger = logger;
    this.tablePrefix = config.tablePrefix;
  }
  getTableName(baseName) {
    return `${this.tablePrefix}-${baseName}`;
  }
  async ensureTableExists(tableName) {
    try {
      await this.client.send(new import_client_dynamodb.DescribeTableCommand({ TableName: tableName }));
      this.logger.debug(`Table ${tableName} exists`);
    } catch (error) {
      if (error.name === "ResourceNotFoundException") {
        this.logger.warn(`Table ${tableName} does not exist. In production, tables should be created via CDK.`);
      } else {
        throw error;
      }
    }
  }
  handleDynamoDBError(error, operation) {
    this.logger.error(`DynamoDB ${operation} failed`, { error });
    if (error.name === "ConditionalCheckFailedException") {
      throw new Error("Record was modified by another process");
    }
    if (error.name === "ResourceNotFoundException") {
      throw new Error("Table or item not found");
    }
    if (error.name === "ValidationException") {
      throw new Error("Invalid request parameters");
    }
    throw new Error(`DynamoDB ${operation} failed: ${error.message}`);
  }
};

// asset-input/src/infrastructure/adapters/DynamoDBUserProfileRepository.ts
var DynamoDBUserProfileRepository = class extends BaseDynamoDBRepository {
  tableName;
  constructor(config, logger) {
    super(config, logger);
    this.tableName = this.getTableName("user-profiles");
  }
  async findById(userId) {
    try {
      const result = await this.docClient.send(new import_lib_dynamodb2.GetCommand({
        TableName: this.tableName,
        Key: { userId }
      }));
      if (!result.Item) {
        return null;
      }
      return this.mapDynamoItemToUserProfile(result.Item);
    } catch (error) {
      this.handleDynamoDBError(error, "findById");
    }
  }
  async save(userProfile) {
    try {
      const item = this.mapUserProfileToDynamoItem(userProfile);
      await this.docClient.send(new import_lib_dynamodb2.PutCommand({
        TableName: this.tableName,
        Item: item,
        // Ensure we don't overwrite if created by another process
        ConditionExpression: "attribute_not_exists(userId) OR updatedAt < :newUpdatedAt",
        ExpressionAttributeValues: {
          ":newUpdatedAt": item.updatedAt
        }
      }));
      this.logger.info("User profile saved", { userId: userProfile.userId });
    } catch (error) {
      this.handleDynamoDBError(error, "save");
    }
  }
  async delete(userId) {
    try {
      await this.docClient.send(new import_lib_dynamodb2.DeleteCommand({
        TableName: this.tableName,
        Key: { userId },
        ConditionExpression: "attribute_exists(userId)"
      }));
      this.logger.info("User profile deleted", { userId });
    } catch (error) {
      this.handleDynamoDBError(error, "delete");
    }
  }
  async findByEmail(email) {
    try {
      const result = await this.docClient.send(new import_lib_dynamodb2.QueryCommand({
        TableName: this.tableName,
        IndexName: "email-index",
        KeyConditionExpression: "email = :email",
        ExpressionAttributeValues: {
          ":email": email
        },
        Limit: 1
      }));
      if (!result.Items || result.Items.length === 0) {
        return null;
      }
      return this.mapDynamoItemToUserProfile(result.Items[0]);
    } catch (error) {
      this.handleDynamoDBError(error, "findByEmail");
    }
  }
  async updatePreferences(userId, preferences) {
    try {
      const updateExpression = "SET preferences = :preferences, updatedAt = :updatedAt";
      await this.docClient.send(new import_lib_dynamodb2.UpdateCommand({
        TableName: this.tableName,
        Key: { userId },
        UpdateExpression: updateExpression,
        ExpressionAttributeValues: {
          ":preferences": preferences,
          ":updatedAt": (/* @__PURE__ */ new Date()).toISOString()
        },
        ConditionExpression: "attribute_exists(userId)"
      }));
      this.logger.info("User preferences updated", { userId });
    } catch (error) {
      this.handleDynamoDBError(error, "updatePreferences");
    }
  }
  mapUserProfileToDynamoItem(profile) {
    return {
      userId: profile.userId,
      email: profile.email,
      name: profile.name,
      preferences: profile.preferences,
      travelHistory: profile.travelHistory,
      loyaltyPrograms: profile.loyaltyPrograms,
      paymentMethods: profile.paymentMethods,
      createdAt: profile.createdAt.toISOString(),
      updatedAt: profile.updatedAt.toISOString(),
      // Add TTL for data retention (optional)
      ttl: Math.floor((Date.now() + 365 * 24 * 60 * 60 * 1e3) / 1e3)
      // 1 year TTL
    };
  }
  mapDynamoItemToUserProfile(item) {
    return {
      userId: item.userId,
      email: item.email,
      name: item.name,
      preferences: item.preferences,
      travelHistory: item.travelHistory,
      loyaltyPrograms: item.loyaltyPrograms || [],
      paymentMethods: item.paymentMethods || [],
      createdAt: new Date(item.createdAt),
      updatedAt: new Date(item.updatedAt)
    };
  }
};
DynamoDBUserProfileRepository = __decorateClass([
  W()
], DynamoDBUserProfileRepository);

// asset-input/src/infrastructure/adapters/DynamoDBChatHistoryRepository.ts
var import_lib_dynamodb3 = require("@aws-sdk/lib-dynamodb");
var DynamoDBChatHistoryRepository = class extends BaseDynamoDBRepository {
  tableName;
  constructor(config, logger) {
    super(config, logger);
    this.tableName = this.getTableName("chat-history");
  }
  async save(message) {
    try {
      const item = this.mapMessageToDynamoItem(message);
      await this.docClient.send(new import_lib_dynamodb3.PutCommand({
        TableName: this.tableName,
        Item: item
      }));
      this.logger.debug("Chat message saved", {
        messageId: message.id,
        sessionId: message.sessionId,
        role: message.role
      });
    } catch (error) {
      this.handleDynamoDBError(error, "save message");
    }
  }
  async findBySessionId(sessionId) {
    try {
      const result = await this.docClient.send(new import_lib_dynamodb3.QueryCommand({
        TableName: this.tableName,
        KeyConditionExpression: "sessionId = :sessionId",
        ExpressionAttributeValues: {
          ":sessionId": sessionId
        },
        ScanIndexForward: true
        // Sort by timestamp ascending
      }));
      if (!result.Items) {
        return [];
      }
      return result.Items.map((item) => this.mapDynamoItemToMessage(item));
    } catch (error) {
      this.handleDynamoDBError(error, "findBySessionId");
    }
  }
  async findByUserId(userId, limit = 50) {
    try {
      const result = await this.docClient.send(new import_lib_dynamodb3.QueryCommand({
        TableName: this.tableName,
        IndexName: "userId-timestamp-index",
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
          ":userId": userId
        },
        ScanIndexForward: false,
        // Sort by timestamp descending (newest first)
        Limit: limit
      }));
      if (!result.Items) {
        return [];
      }
      return result.Items.map((item) => this.mapDynamoItemToMessage(item));
    } catch (error) {
      this.handleDynamoDBError(error, "findByUserId");
    }
  }
  async deleteSession(sessionId) {
    try {
      const messages = await this.findBySessionId(sessionId);
      for (const message of messages) {
        await this.docClient.send(new import_lib_dynamodb3.DeleteCommand({
          TableName: this.tableName,
          Key: {
            sessionId: message.sessionId,
            timestamp: message.timestamp.toISOString()
          }
        }));
      }
      this.logger.info("Chat session deleted", { sessionId, messageCount: messages.length });
    } catch (error) {
      this.handleDynamoDBError(error, "deleteSession");
    }
  }
  mapMessageToDynamoItem(message) {
    const timestamp = message.timestamp.toISOString();
    return {
      sessionId: message.sessionId,
      timestamp,
      // Sort key
      messageId: message.id,
      userId: message.userId,
      role: message.role,
      content: message.content,
      metadata: message.metadata || {},
      // TTL for automatic cleanup (90 days)
      ttl: Math.floor((Date.now() + 90 * 24 * 60 * 60 * 1e3) / 1e3)
    };
  }
  mapDynamoItemToMessage(item) {
    return {
      id: item.messageId,
      sessionId: item.sessionId,
      userId: item.userId,
      role: item.role,
      content: item.content,
      timestamp: new Date(item.timestamp),
      metadata: item.metadata && Object.keys(item.metadata).length > 0 ? item.metadata : void 0
    };
  }
};
DynamoDBChatHistoryRepository = __decorateClass([
  W()
], DynamoDBChatHistoryRepository);

// asset-input/src/infrastructure/adapters/DynamoDBFlightSearchRepository.ts
var import_lib_dynamodb4 = require("@aws-sdk/lib-dynamodb");
var DynamoDBFlightSearchRepository = class extends BaseDynamoDBRepository {
  tableName;
  constructor(config, logger) {
    super(config, logger);
    this.tableName = this.getTableName("flights-data");
  }
  async search(query) {
    try {
      const routeId = this.buildRouteId(
        query.departure?.airport || query.departure?.city || "",
        query.arrival?.airport || query.arrival?.city || ""
      );
      let queryCommand;
      if (query.departure?.date) {
        const flightDate = query.departure.date.toISOString().split("T")[0];
        queryCommand = new import_lib_dynamodb4.QueryCommand({
          TableName: this.tableName,
          KeyConditionExpression: "routeId = :routeId AND flightDate = :flightDate",
          ExpressionAttributeValues: {
            ":routeId": routeId,
            ":flightDate": flightDate
          }
        });
      } else {
        queryCommand = new import_lib_dynamodb4.QueryCommand({
          TableName: this.tableName,
          KeyConditionExpression: "routeId = :routeId",
          ExpressionAttributeValues: {
            ":routeId": routeId
          },
          Limit: 50
          // Don't return too many results
        });
      }
      const result = await this.docClient.send(queryCommand);
      let flights = (result.Items || []).map((item) => this.mapDynamoItemToFlight(item));
      flights = this.applyQueryFilters(flights, query);
      flights = this.sortFlightsByPreference(flights, query);
      this.logger.debug("Flight search completed", {
        routeId,
        queryDate: query.departure?.date?.toISOString(),
        resultCount: flights.length
      });
      return flights;
    } catch (error) {
      this.handleDynamoDBError(error, "search flights");
    }
  }
  async findById(flightId) {
    try {
      const result = await this.docClient.send(new import_lib_dynamodb4.ScanCommand({
        TableName: this.tableName,
        FilterExpression: "flightId = :flightId",
        ExpressionAttributeValues: {
          ":flightId": flightId
        },
        Limit: 1
      }));
      if (!result.Items || result.Items.length === 0) {
        return null;
      }
      return this.mapDynamoItemToFlight(result.Items[0]);
    } catch (error) {
      this.handleDynamoDBError(error, "findById");
    }
  }
  async findByRoute(departure, arrival, date) {
    try {
      const routeId = this.buildRouteId(departure, arrival);
      const flightDate = date.toISOString().split("T")[0];
      const result = await this.docClient.send(new import_lib_dynamodb4.QueryCommand({
        TableName: this.tableName,
        KeyConditionExpression: "routeId = :routeId AND flightDate = :flightDate",
        ExpressionAttributeValues: {
          ":routeId": routeId,
          ":flightDate": flightDate
        }
      }));
      if (!result.Items) {
        return [];
      }
      return result.Items.map((item) => this.mapDynamoItemToFlight(item));
    } catch (error) {
      this.handleDynamoDBError(error, "findByRoute");
    }
  }
  buildRouteId(departure, arrival) {
    const dep = departure.toUpperCase().trim();
    const arr = arrival.toUpperCase().trim();
    return `${dep}-${arr}`;
  }
  applyQueryFilters(flights, query) {
    let filtered = [...flights];
    if (query.maxPrice) {
      filtered = filtered.filter((flight) => flight.price <= query.maxPrice);
    }
    if (query.preferences?.directFlights) {
      filtered = filtered.filter((flight) => flight.stops === 0);
    }
    if (query.preferences?.maxStops !== void 0) {
      filtered = filtered.filter((flight) => flight.stops <= query.preferences.maxStops);
    }
    if (query.preferences?.departureTimeRange) {
      filtered = filtered.filter((flight) => {
        const departureTime = flight.departure.datetime.toTimeString().slice(0, 5);
        const earliest = query.preferences.departureTimeRange.earliest;
        const latest = query.preferences.departureTimeRange.latest;
        return departureTime >= earliest && departureTime <= latest;
      });
    }
    return filtered;
  }
  sortFlightsByPreference(flights, query) {
    return flights.sort((a3, b2) => {
      if (query.maxPrice) {
        if (a3.price !== b2.price) {
          return a3.price - b2.price;
        }
      }
      if (a3.stops !== b2.stops) {
        return a3.stops - b2.stops;
      }
      if (a3.duration !== b2.duration) {
        return a3.duration - b2.duration;
      }
      return 0;
    });
  }
  mapDynamoItemToFlight(item) {
    return {
      id: item.flightId,
      airline: item.airline,
      flightNumber: item.flightNumber,
      departure: {
        airport: item.departureAirport,
        city: item.departureCity,
        datetime: new Date(item.departureTime)
      },
      arrival: {
        airport: item.arrivalAirport,
        city: item.arrivalCity,
        datetime: new Date(item.arrivalTime)
      },
      price: item.price,
      currency: item.currency || "USD",
      duration: item.duration,
      stops: item.stops || 0,
      aircraft: item.aircraft
    };
  }
};
DynamoDBFlightSearchRepository = __decorateClass([
  W()
], DynamoDBFlightSearchRepository);

// asset-input/src/infrastructure/adapters/BedrockAIService.ts
var import_client_bedrock_runtime = require("@aws-sdk/client-bedrock-runtime");
var BedrockAIService = class {
  client;
  modelId;
  logger;
  constructor(config, logger) {
    this.client = new import_client_bedrock_runtime.BedrockRuntimeClient({
      region: config.awsRegion
    });
    this.modelId = config.bedrockModel;
    this.logger = logger;
    this.logger.info("BedrockAIService initialized", {
      region: config.awsRegion,
      modelId: this.modelId
    });
  }
  /**
   * Send a chat completion request to Bedrock
   */
  async chatCompletion(messages, options = {}) {
    try {
      const {
        temperature = 0.7,
        maxTokens = 1e3,
        systemPrompt
      } = options;
      const formattedMessages = this.formatMessagesForClaude(messages, systemPrompt);
      const request = {
        modelId: this.modelId,
        contentType: "application/json",
        accept: "application/json",
        body: JSON.stringify({
          anthropic_version: "bedrock-2023-05-31",
          max_tokens: maxTokens,
          temperature,
          messages: formattedMessages
        })
      };
      this.logger.debug("Sending Bedrock request", {
        modelId: this.modelId,
        messageCount: messages.length,
        temperature,
        maxTokens
      });
      const command = new import_client_bedrock_runtime.InvokeModelCommand(request);
      const response = await this.client.send(command);
      if (!response.body) {
        throw new Error("No response body from Bedrock");
      }
      const responseBody = JSON.parse(new TextDecoder().decode(response.body));
      if (responseBody.error) {
        throw new Error(`Bedrock error: ${responseBody.error.message}`);
      }
      const content = responseBody.content?.[0]?.text;
      if (!content) {
        throw new Error("No content in Bedrock response");
      }
      this.logger.info("Bedrock response received", {
        inputTokens: responseBody.usage?.input_tokens,
        outputTokens: responseBody.usage?.output_tokens
      });
      return {
        message: content,
        tokenUsage: {
          inputTokens: responseBody.usage?.input_tokens || 0,
          outputTokens: responseBody.usage?.output_tokens || 0
        }
      };
    } catch (error) {
      this.logger.error("Bedrock chat completion failed", { error });
      throw error;
    }
  }
  /**
   * Stream chat completion from Bedrock
   */
  async *streamChatCompletion(messages, options = {}) {
    try {
      const {
        temperature = 0.7,
        maxTokens = 1e3,
        systemPrompt
      } = options;
      const formattedMessages = this.formatMessagesForClaude(messages, systemPrompt);
      const request = {
        modelId: this.modelId,
        contentType: "application/json",
        accept: "application/json",
        body: JSON.stringify({
          anthropic_version: "bedrock-2023-05-31",
          max_tokens: maxTokens,
          temperature,
          messages: formattedMessages,
          stream: true
        })
      };
      const command = new import_client_bedrock_runtime.InvokeModelWithResponseStreamCommand(request);
      const response = await this.client.send(command);
      if (!response.body) {
        throw new Error("No response stream from Bedrock");
      }
      for await (const chunk of response.body) {
        if (chunk.chunk?.bytes) {
          const chunkData = JSON.parse(new TextDecoder().decode(chunk.chunk.bytes));
          if (chunkData.type === "content_block_delta" && chunkData.delta?.text) {
            yield chunkData.delta.text;
          }
        }
      }
    } catch (error) {
      this.logger.error("Bedrock stream completion failed", { error });
      throw error;
    }
  }
  /**
   * Generate embeddings using Bedrock
   */
  async generateEmbedding(text) {
    try {
      const embeddingModelId = "amazon.titan-embed-text-v1";
      const request = {
        modelId: embeddingModelId,
        contentType: "application/json",
        accept: "application/json",
        body: JSON.stringify({
          inputText: text
        })
      };
      const command = new import_client_bedrock_runtime.InvokeModelCommand(request);
      const response = await this.client.send(command);
      if (!response.body) {
        throw new Error("No response body from Bedrock embeddings");
      }
      const responseBody = JSON.parse(new TextDecoder().decode(response.body));
      if (!responseBody.embedding) {
        throw new Error("No embedding in response");
      }
      this.logger.debug("Generated embedding", {
        textLength: text.length,
        embeddingDimensions: responseBody.embedding.length
      });
      return responseBody.embedding;
    } catch (error) {
      this.logger.error("Bedrock embedding generation failed", { error });
      throw error;
    }
  }
  /**
   * Format messages for Claude/Anthropic format
   */
  formatMessagesForClaude(messages, systemPrompt) {
    const formatted = [];
    if (systemPrompt) {
      formatted.push({
        role: "system",
        content: systemPrompt
      });
    }
    for (const message of messages) {
      if (message.role === "system" && systemPrompt) {
        continue;
      }
      formatted.push({
        role: message.role,
        content: message.content
      });
    }
    return formatted;
  }
  /**
   * Test connection to Bedrock
   */
  async testConnection() {
    try {
      const testMessage = {
        role: "user",
        content: 'Hello, please respond with "Connection successful"'
      };
      const response = await this.chatCompletion([testMessage], {
        maxTokens: 50,
        temperature: 0
      });
      const isSuccessful = response.message.toLowerCase().includes("connection successful");
      this.logger.info("Bedrock connection test", {
        successful: isSuccessful,
        response: response.message
      });
      return isSuccessful;
    } catch (error) {
      this.logger.error("Bedrock connection test failed", { error });
      return false;
    }
  }
};

// asset-input/src/application/agents/ContosoTravelAgent.ts
var ContosoTravelAgent = class {
  aiService;
  flightTools;
  chatHistoryRepo;
  logger;
  constructor(config, flightTools, chatHistoryRepo, logger) {
    this.aiService = new BedrockAIService(config, logger);
    this.flightTools = flightTools;
    this.chatHistoryRepo = chatHistoryRepo;
    this.logger = logger;
  }
  async initialize() {
    this.logger.debug("ContosoTravelAgent initialized");
  }
  async processMessage(message, context) {
    const normalizedMessage = message.toLowerCase();
    let toolCalls = [];
    if (this.isFlightSearchIntent(normalizedMessage)) {
      const parsed = this.tryParseRoute(message);
      if (parsed) {
        const request = {
          name: "search_flights",
          arguments: {
            origin: parsed.origin,
            destination: parsed.destination
          }
        };
        const toolResult = await this.flightTools.executeToolCall(request);
        toolCalls = [
          {
            tool: request.name,
            input: request.arguments,
            output: toolResult
          }
        ];
        if (toolResult.success) {
          const flights = toolResult.data?.flights?.length ?? 0;
          const reply = flights > 0 ? `I found ${flights} flight option(s) from ${parsed.origin} to ${parsed.destination}. Would you like me to compare by price, duration, or convenience?` : `I couldn't find flights from ${parsed.origin} to ${parsed.destination} right now. Would you like to try nearby airports or flexible dates?`;
          await this.saveConversationMessages(context.sessionId, context.userId, [
            { role: "user", content: message },
            { role: "assistant", content: reply }
          ]);
          return {
            message: reply,
            conversationId: context.sessionId,
            toolCalls,
            reasoning: "Used flight search tool for route lookup"
          };
        }
      }
    }
    const aiResponse = await this.aiService.chatCompletion(this.toChatMessages(message, context), {
      systemPrompt: "You are Contoso Travel Assistant. Be concise, practical, and ask one follow-up question when helpful."
    });
    await this.saveConversationMessages(context.sessionId, context.userId, [
      { role: "user", content: message },
      { role: "assistant", content: aiResponse.message }
    ]);
    return {
      message: aiResponse.message,
      conversationId: context.sessionId,
      toolCalls,
      reasoning: "Generated response using Bedrock model"
    };
  }
  async getConversationHistory(sessionId) {
    return this.chatHistoryRepo.findBySessionId(sessionId);
  }
  isFlightSearchIntent(message) {
    return ["flight", "flights", "fly", "airfare", "ticket"].some((token) => message.includes(token));
  }
  tryParseRoute(message) {
    const routeRegex = /from\s+([a-zA-Z\s]+?)\s+to\s+([a-zA-Z\s]+?)(?:[.!?]|$)/i;
    const match = message.match(routeRegex);
    if (!match?.[1] || !match?.[2]) {
      return null;
    }
    return {
      origin: match[1].trim(),
      destination: match[2].trim()
    };
  }
  toChatMessages(message, context) {
    const historyMessages = context.history.slice(-10).map((item) => ({
      role: item.role === "system" ? "system" : item.role,
      content: item.content,
      timestamp: item.timestamp
    }));
    historyMessages.push({ role: "user", content: message });
    return historyMessages;
  }
  async saveConversationMessages(sessionId, userId, messages) {
    for (const message of messages) {
      await this.chatHistoryRepo.save({
        id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        sessionId,
        userId,
        role: message.role,
        content: message.content,
        timestamp: /* @__PURE__ */ new Date()
      });
    }
  }
};

// asset-input/src/application/tools/FlightTools.ts
var FlightTools = class {
  constructor(flightRepository, logger) {
    this.flightRepository = flightRepository;
    this.logger = logger;
  }
  async executeToolCall(request) {
    if (request.name !== "search_flights") {
      return {
        success: false,
        error: `Unsupported tool: ${request.name}`
      };
    }
    try {
      const departure = request.arguments.departureDate ? {
        city: request.arguments.origin,
        date: new Date(request.arguments.departureDate)
      } : {
        city: request.arguments.origin
      };
      const travelQuery = {
        id: `tool-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        userId: "tool-user",
        sessionId: "tool-session",
        query: `Find flights from ${request.arguments.origin} to ${request.arguments.destination}`,
        departure,
        arrival: {
          city: request.arguments.destination
        },
        passengers: request.arguments.travelers ?? 1,
        ...request.arguments.maxBudget !== void 0 ? { maxPrice: request.arguments.maxBudget } : {},
        timestamp: /* @__PURE__ */ new Date()
      };
      const flights = await this.flightRepository.search(travelQuery);
      return {
        success: true,
        data: {
          flights
        }
      };
    } catch (error) {
      this.logger.error("Flight tool execution failed", { error, request });
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown flight tool error"
      };
    }
  }
};

// asset-input/src/application/services/TravelAgentService.ts
var TravelAgentService = class {
  constructor(flightRepository, chatHistoryRepository, userProfileRepository, config, logger) {
    this.flightRepository = flightRepository;
    this.chatHistoryRepository = chatHistoryRepository;
    this.userProfileRepository = userProfileRepository;
    this.config = config;
    this.logger = logger;
  }
  agents = /* @__PURE__ */ new Map();
  sessions = /* @__PURE__ */ new Map();
  pendingApprovals = /* @__PURE__ */ new Map();
  async getAgent(sessionId, userId) {
    const existing = this.agents.get(sessionId);
    if (existing) {
      return existing;
    }
    const flightTools = new FlightTools(this.flightRepository, this.logger);
    const agent = new ContosoTravelAgent(this.config, flightTools, this.chatHistoryRepository, this.logger);
    await agent.initialize();
    this.agents.set(sessionId, agent);
    this.sessions.set(sessionId, {
      sessionId,
      userId,
      status: "active",
      lastActivity: /* @__PURE__ */ new Date()
    });
    return agent;
  }
  async processMessage(sessionId, userId, message) {
    try {
      const agent = await this.getAgent(sessionId, userId);
      const context = await this.buildConversationContext(sessionId, userId);
      this.touchSession(sessionId);
      const response = await agent.processMessage(message, context);
      const requiresApproval = this.needsApproval(response);
      if (!requiresApproval) {
        return {
          success: true,
          data: {
            message: response.message,
            conversationId: response.conversationId,
            toolCalls: response.toolCalls
          }
        };
      }
      const approvalId = this.createApproval("agent_response", sessionId, userId, response);
      return {
        success: true,
        requiresApproval: true,
        approvalId,
        data: {
          message: "I prepared options, and this step requires approval before I continue."
        }
      };
    } catch (error) {
      this.logger.error("Message processing failed", { sessionId, userId, error });
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error"
      };
    }
  }
  async requestBooking(sessionId, userId, bookingRequest) {
    const flight = await this.flightRepository.findById(bookingRequest.flightId);
    if (!flight) {
      return { success: false, error: "Flight not found" };
    }
    if (this.shouldRequireApproval(flight)) {
      const approvalId = this.createApproval("booking", sessionId, userId, { bookingRequest, flight });
      return {
        success: true,
        requiresApproval: true,
        approvalId,
        data: {
          message: `Booking request queued for approval for flight ${flight.flightNumber}.`
        }
      };
    }
    return this.finalizeBooking(bookingRequest, flight);
  }
  async handleApprovalResponse(approvalId, decision) {
    const pending = this.pendingApprovals.get(approvalId);
    if (!pending) {
      return { success: false, error: "Approval request not found" };
    }
    pending.status = decision.status;
    if (pending.type === "booking" && decision.status === "approved") {
      const payload = pending.requestData;
      return this.finalizeBooking(payload.bookingRequest, payload.flight);
    }
    return {
      success: true,
      data: {
        approvalId,
        status: decision.status,
        reviewerId: decision.reviewerId,
        comments: decision.comments
      }
    };
  }
  getSessionInfo(sessionId) {
    return this.sessions.get(sessionId) ?? null;
  }
  async cleanupInactiveSessions(maxAgeMinutes = 60) {
    const threshold = Date.now() - maxAgeMinutes * 60 * 1e3;
    let cleaned = 0;
    for (const [sessionId, session] of this.sessions.entries()) {
      if (session.lastActivity.getTime() < threshold) {
        this.sessions.delete(sessionId);
        this.agents.delete(sessionId);
        cleaned += 1;
      }
    }
    return cleaned;
  }
  async buildConversationContext(sessionId, userId) {
    const history = await this.chatHistoryRepository.findBySessionId(sessionId);
    try {
      const user = await this.userProfileRepository.findById(userId);
      return {
        sessionId,
        userId,
        history: history.slice(-20),
        preferences: user?.preferences
      };
    } catch {
      return {
        sessionId,
        userId,
        history: history.slice(-20)
      };
    }
  }
  touchSession(sessionId) {
    const session = this.sessions.get(sessionId);
    if (!session) {
      return;
    }
    session.lastActivity = /* @__PURE__ */ new Date();
  }
  needsApproval(response) {
    const content = response.message.toLowerCase();
    const bookingKeywords = ["book", "reserve", "purchase", "confirm"];
    return bookingKeywords.some((keyword) => content.includes(keyword));
  }
  createApproval(type, sessionId, requesterId, requestData) {
    const id = `approval-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    this.pendingApprovals.set(id, {
      id,
      type,
      sessionId,
      requesterId,
      requestData,
      status: "pending",
      createdAt: /* @__PURE__ */ new Date()
    });
    const session = this.sessions.get(sessionId);
    if (session) {
      session.status = "waiting_approval";
    }
    return id;
  }
  shouldRequireApproval(flight) {
    return flight.price >= 1e3;
  }
  async finalizeBooking(bookingRequest, flight) {
    const confirmation = `CTR-${Date.now()}`;
    const totalAmount = flight.price * bookingRequest.passengers.length;
    return {
      success: true,
      data: {
        confirmation,
        flight: {
          id: flight.id,
          airline: flight.airline,
          flightNumber: flight.flightNumber
        },
        passengers: bookingRequest.passengers,
        totalAmount,
        currency: flight.currency
      }
    };
  }
};

// asset-input/src/infrastructure/config/container.ts
async function configureContainer() {
  const container2 = new ne();
  const configService = AWSConfigService.getInstance();
  await configService.loadConfig();
  container2.bind(TYPES.AppConfig).toConstantValue(configService);
  const logger = new Logger({ serviceName: "contoso-travel-agent" });
  container2.bind(TYPES.Logger).toConstantValue(logger);
  container2.bind(TYPES.UserProfileRepository).toDynamicValue(() => {
    const config = container2.get(TYPES.AppConfig);
    const logger2 = container2.get(TYPES.Logger);
    return new DynamoDBUserProfileRepository(config.getDynamoDBConfig(), logger2);
  });
  container2.bind(TYPES.ChatHistoryRepository).toDynamicValue(() => {
    const config = container2.get(TYPES.AppConfig);
    const logger2 = container2.get(TYPES.Logger);
    return new DynamoDBChatHistoryRepository(config.getDynamoDBConfig(), logger2);
  });
  container2.bind(TYPES.FlightDataRepository).toDynamicValue(() => {
    const config = container2.get(TYPES.AppConfig);
    const logger2 = container2.get(TYPES.Logger);
    return new DynamoDBFlightSearchRepository(config.getDynamoDBConfig(), logger2);
  });
  container2.bind(TYPES.TravelAgentService).toDynamicValue(() => {
    const configService2 = container2.get(TYPES.AppConfig);
    const logger2 = container2.get(TYPES.Logger);
    const flightRepository = container2.get(TYPES.FlightDataRepository);
    const chatHistoryRepository = container2.get(TYPES.ChatHistoryRepository);
    const userProfileRepository = container2.get(TYPES.UserProfileRepository);
    return new TravelAgentService(
      flightRepository,
      chatHistoryRepository,
      userProfileRepository,
      configService2.getConfig(),
      logger2
    );
  });
  return container2;
}
var container = configureContainer();

// asset-input/src/auth/jwtValidator.ts
var import_jsonwebtoken = __toESM(require_jsonwebtoken());
async function validateJWT(authorizationHeader) {
  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    throw new Error("Missing or invalid Authorization header");
  }
  const token = authorizationHeader.slice("Bearer ".length).trim();
  const secret = process.env["JWT_SECRET"];
  if (!secret) {
    throw new Error("JWT_SECRET is not configured");
  }
  const payload = import_jsonwebtoken.default.verify(token, secret);
  const subject = payload.sub;
  if (!subject) {
    throw new Error("Token missing subject");
  }
  const emailClaim = payload["email"];
  const scopeClaim = payload["scope"];
  const email = typeof emailClaim === "string" ? emailClaim : void 0;
  const scope = typeof scopeClaim === "string" ? scopeClaim : void 0;
  return {
    sub: subject,
    ...email ? { email } : {},
    ...scope ? { scope } : {}
  };
}

// asset-input/src/handlers/chatHandler.ts
function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(body)
  };
}
var handler = async (event) => {
  try {
    const user = await validateJWT(event.headers?.["authorization"]);
    if (!event.body) {
      return jsonResponse(400, { success: false, error: "Request body is required" });
    }
    const parsed = JSON.parse(event.body);
    if (!parsed.message || !parsed.sessionId) {
      return jsonResponse(400, { success: false, error: "message and sessionId are required" });
    }
    const container2 = await container;
    const travelAgentService = container2.get(TYPES.TravelAgentService);
    const result = await travelAgentService.processMessage(parsed.sessionId, user.sub, parsed.message);
    return jsonResponse(result.success ? 200 : 500, result);
  } catch (error) {
    return jsonResponse(401, {
      success: false,
      error: error instanceof Error ? error.message : "Unauthorized"
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/*! Bundled license information:

reflect-metadata/ReflectLite.js:
  (*! *****************************************************************************
  Copyright (C) Microsoft. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

@aws-lambda-powertools/logger/lib/esm/logBuffer.js:
  (* v8 ignore next -- @preserve *)

@aws-lambda-powertools/logger/lib/esm/Logger.js:
  (* v8 ignore next -- @preserve *)
*/

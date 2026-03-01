"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
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
  for (var i3 = decorators.length - 1, decorator; i3 >= 0; i3--)
    if (decorator = decorators[i3])
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
          for (var i3 = decorators.length - 1; i3 >= 0; --i3) {
            var decorator = decorators[i3];
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
          for (var i3 = decorators.length - 1; i3 >= 0; --i3) {
            var decorator = decorators[i3];
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
        function Type(x4) {
          if (x4 === null)
            return 1;
          switch (typeof x4) {
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
              return x4 === null ? 1 : 6;
            default:
              return 6;
          }
        }
        function IsUndefined(x4) {
          return x4 === void 0;
        }
        function IsNull(x4) {
          return x4 === null;
        }
        function IsSymbol(x4) {
          return typeof x4 === "symbol";
        }
        function IsObject(x4) {
          return typeof x4 === "object" ? x4 !== null : typeof x4 === "function";
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
          var f4 = iterator["return"];
          if (f4)
            f4.call(iterator);
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
        function fail(e3) {
          throw e3;
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
              } catch (e3) {
                try {
                  IteratorClose(iterator);
                } finally {
                  throw e3;
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
    var Buffer4 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer4.from && Buffer4.alloc && Buffer4.allocUnsafe && Buffer4.allocUnsafeSlow) {
      module2.exports = buffer;
    } else {
      copyProps(buffer, exports2);
      exports2.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer4(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer4.prototype);
    copyProps(Buffer4, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer4(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer4(size);
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
      return Buffer4(size);
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
    var Buffer4 = require_safe_buffer().Buffer;
    var Stream3 = require("stream");
    var util = require("util");
    function DataStream(data) {
      this.buffer = null;
      this.writable = true;
      this.readable = true;
      if (!data) {
        this.buffer = Buffer4.alloc(0);
        return this;
      }
      if (typeof data.pipe === "function") {
        this.buffer = Buffer4.alloc(0);
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
    util.inherits(DataStream, Stream3);
    DataStream.prototype.write = function write(data) {
      this.buffer = Buffer4.concat([this.buffer, Buffer4.from(data)]);
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
    var Buffer4 = require_safe_buffer().Buffer;
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
      if (Buffer4.isBuffer(signature)) {
        return signature;
      } else if ("string" === typeof signature) {
        return Buffer4.from(signature, "base64");
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
      var dst = Buffer4.allocUnsafe(rPadding + rLength + sPadding + sLength);
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
      var dst = Buffer4.allocUnsafe((shortLength ? 2 : 3) + rsBytes);
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
    var Buffer4 = require("buffer").Buffer;
    var SlowBuffer = require("buffer").SlowBuffer;
    module2.exports = bufferEq;
    function bufferEq(a3, b2) {
      if (!Buffer4.isBuffer(a3) || !Buffer4.isBuffer(b2)) {
        return false;
      }
      if (a3.length !== b2.length) {
        return false;
      }
      var c3 = 0;
      for (var i3 = 0; i3 < a3.length; i3++) {
        c3 |= a3[i3] ^ b2[i3];
      }
      return c3 === 0;
    }
    bufferEq.install = function() {
      Buffer4.prototype.equal = SlowBuffer.prototype.equal = function equal(that) {
        return bufferEq(this, that);
      };
    };
    var origBufEqual = Buffer4.prototype.equal;
    var origSlowBufEqual = SlowBuffer.prototype.equal;
    bufferEq.restore = function() {
      Buffer4.prototype.equal = origBufEqual;
      SlowBuffer.prototype.equal = origSlowBufEqual;
    };
  }
});

// asset-input/node_modules/jwa/index.js
var require_jwa = __commonJS({
  "asset-input/node_modules/jwa/index.js"(exports2, module2) {
    var Buffer4 = require_safe_buffer().Buffer;
    var crypto2 = require("crypto");
    var formatEcdsa = require_ecdsa_sig_formatter();
    var util = require("util");
    var MSG_INVALID_ALGORITHM = '"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".';
    var MSG_INVALID_SECRET = "secret must be a string or buffer";
    var MSG_INVALID_VERIFIER_KEY = "key must be a string or a buffer";
    var MSG_INVALID_SIGNER_KEY = "key must be a string, a buffer or an object";
    var supportsKeyObjects = typeof crypto2.createPublicKey === "function";
    if (supportsKeyObjects) {
      MSG_INVALID_VERIFIER_KEY += " or a KeyObject";
      MSG_INVALID_SECRET += "or a KeyObject";
    }
    function checkIsPublicKey(key) {
      if (Buffer4.isBuffer(key)) {
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
      if (Buffer4.isBuffer(key)) {
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
      if (Buffer4.isBuffer(key)) {
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
        for (var i3 = 0; i3 < padding; ++i3) {
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
      return Buffer4.isBuffer(obj) || typeof obj === "string";
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
        var hmac = crypto2.createHmac("sha" + bits, secret);
        var sig = (hmac.update(thing), hmac.digest("base64"));
        return fromBase64(sig);
      };
    }
    var bufferEqual;
    var timingSafeEqual = "timingSafeEqual" in crypto2 ? function timingSafeEqual2(a3, b2) {
      if (a3.byteLength !== b2.byteLength) {
        return false;
      }
      return crypto2.timingSafeEqual(a3, b2);
    } : function timingSafeEqual2(a3, b2) {
      if (!bufferEqual) {
        bufferEqual = require_buffer_equal_constant_time();
      }
      return bufferEqual(a3, b2);
    };
    function createHmacVerifier(bits) {
      return function verify(thing, signature, secret) {
        var computedSig = createHmacSigner(bits)(thing, secret);
        return timingSafeEqual(Buffer4.from(signature), Buffer4.from(computedSig));
      };
    }
    function createKeySigner(bits) {
      return function sign(thing, privateKey) {
        checkIsPrivateKey(privateKey);
        thing = normalizeInput(thing);
        var signer = crypto2.createSign("RSA-SHA" + bits);
        var sig = (signer.update(thing), signer.sign(privateKey, "base64"));
        return fromBase64(sig);
      };
    }
    function createKeyVerifier(bits) {
      return function verify(thing, signature, publicKey) {
        checkIsPublicKey(publicKey);
        thing = normalizeInput(thing);
        signature = toBase64(signature);
        var verifier = crypto2.createVerify("RSA-SHA" + bits);
        verifier.update(thing);
        return verifier.verify(publicKey, signature, "base64");
      };
    }
    function createPSSKeySigner(bits) {
      return function sign(thing, privateKey) {
        checkIsPrivateKey(privateKey);
        thing = normalizeInput(thing);
        var signer = crypto2.createSign("RSA-SHA" + bits);
        var sig = (signer.update(thing), signer.sign({
          key: privateKey,
          padding: crypto2.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: crypto2.constants.RSA_PSS_SALTLEN_DIGEST
        }, "base64"));
        return fromBase64(sig);
      };
    }
    function createPSSKeyVerifier(bits) {
      return function verify(thing, signature, publicKey) {
        checkIsPublicKey(publicKey);
        thing = normalizeInput(thing);
        signature = toBase64(signature);
        var verifier = crypto2.createVerify("RSA-SHA" + bits);
        verifier.update(thing);
        return verifier.verify({
          key: publicKey,
          padding: crypto2.constants.RSA_PKCS1_PSS_PADDING,
          saltLength: crypto2.constants.RSA_PSS_SALTLEN_DIGEST
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
    var Buffer4 = require("buffer").Buffer;
    module2.exports = function toString(obj) {
      if (typeof obj === "string")
        return obj;
      if (typeof obj === "number" || Buffer4.isBuffer(obj))
        return obj.toString();
      return JSON.stringify(obj);
    };
  }
});

// asset-input/node_modules/jws/lib/sign-stream.js
var require_sign_stream = __commonJS({
  "asset-input/node_modules/jws/lib/sign-stream.js"(exports2, module2) {
    var Buffer4 = require_safe_buffer().Buffer;
    var DataStream = require_data_stream();
    var jwa = require_jwa();
    var Stream3 = require("stream");
    var toString = require_tostring();
    var util = require("util");
    function base64url(string, encoding) {
      return Buffer4.from(string, encoding).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
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
    util.inherits(SignStream, Stream3);
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
      } catch (e3) {
        this.readable = false;
        this.emit("error", e3);
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
    var Buffer4 = require_safe_buffer().Buffer;
    var DataStream = require_data_stream();
    var jwa = require_jwa();
    var Stream3 = require("stream");
    var toString = require_tostring();
    var util = require("util");
    var JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
    function isObject2(thing) {
      return Object.prototype.toString.call(thing) === "[object Object]";
    }
    function safeJsonParse(thing) {
      if (isObject2(thing))
        return thing;
      try {
        return JSON.parse(thing);
      } catch (e3) {
        return void 0;
      }
    }
    function headerFromJWS(jwsSig) {
      var encodedHeader = jwsSig.split(".", 1)[0];
      return safeJsonParse(Buffer4.from(encodedHeader, "base64").toString("binary"));
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
      return Buffer4.from(payload, "base64").toString(encoding);
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
    util.inherits(VerifyStream, Stream3);
    VerifyStream.prototype.verify = function verify() {
      try {
        var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);
        var obj = jwsDecode(this.signature.buffer, this.encoding);
        this.emit("done", valid, obj);
        this.emit("data", valid);
        this.emit("end");
        this.readable = false;
        return valid;
      } catch (e3) {
        this.readable = false;
        this.emit("error", e3);
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
        } catch (e3) {
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
    var JsonWebTokenError = function(message2, error) {
      Error.call(this, message2);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
      this.name = "JsonWebTokenError";
      this.message = message2;
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
    var NotBeforeError = function(message2, date) {
      JsonWebTokenError.call(this, message2);
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
    var TokenExpiredError = function(message2, expiredAt) {
      JsonWebTokenError.call(this, message2);
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
    var s2 = 1e3;
    var m3 = s2 * 60;
    var h3 = m3 * 60;
    var d2 = h3 * 24;
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
          return n3 * h3;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n3 * m3;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n3 * s2;
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
    function fmtShort(ms2) {
      var msAbs = Math.abs(ms2);
      if (msAbs >= d2) {
        return Math.round(ms2 / d2) + "d";
      }
      if (msAbs >= h3) {
        return Math.round(ms2 / h3) + "h";
      }
      if (msAbs >= m3) {
        return Math.round(ms2 / m3) + "m";
      }
      if (msAbs >= s2) {
        return Math.round(ms2 / s2) + "s";
      }
      return ms2 + "ms";
    }
    function fmtLong(ms2) {
      var msAbs = Math.abs(ms2);
      if (msAbs >= d2) {
        return plural(ms2, msAbs, d2, "day");
      }
      if (msAbs >= h3) {
        return plural(ms2, msAbs, h3, "hour");
      }
      if (msAbs >= m3) {
        return plural(ms2, msAbs, m3, "minute");
      }
      if (msAbs >= s2) {
        return plural(ms2, msAbs, s2, "second");
      }
      return ms2 + " ms";
    }
    function plural(ms2, msAbs, n3, name) {
      var isPlural = msAbs >= n3 * 1.5;
      return Math.round(ms2 / n3) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// asset-input/node_modules/jsonwebtoken/lib/timespan.js
var require_timespan = __commonJS({
  "asset-input/node_modules/jsonwebtoken/lib/timespan.js"(exports2, module2) {
    var ms2 = require_ms();
    module2.exports = function(time, iat) {
      var timestamp = iat || Math.floor(Date.now() / 1e3);
      if (typeof time === "string") {
        var milliseconds = ms2(time);
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
    var debug4 = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module2.exports = debug4;
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
    var debug4 = require_debug();
    exports2 = module2.exports = {};
    var re = exports2.re = [];
    var safeRe = exports2.safeRe = [];
    var src = exports2.src = [];
    var safeSrc = exports2.safeSrc = [];
    var t5 = exports2.t = {};
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
      debug4(name, index, value);
      t5[name] = index;
      src[index] = value;
      safeSrc[index] = safe;
      re[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t5.NUMERICIDENTIFIER]})\\.(${src[t5.NUMERICIDENTIFIER]})\\.(${src[t5.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t5.NUMERICIDENTIFIERLOOSE]})\\.(${src[t5.NUMERICIDENTIFIERLOOSE]})\\.(${src[t5.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t5.NONNUMERICIDENTIFIER]}|${src[t5.NUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t5.NONNUMERICIDENTIFIER]}|${src[t5.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASE", `(?:-(${src[t5.PRERELEASEIDENTIFIER]}(?:\\.${src[t5.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t5.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t5.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t5.BUILDIDENTIFIER]}(?:\\.${src[t5.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t5.MAINVERSION]}${src[t5.PRERELEASE]}?${src[t5.BUILD]}?`);
    createToken("FULL", `^${src[t5.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t5.MAINVERSIONLOOSE]}${src[t5.PRERELEASELOOSE]}?${src[t5.BUILD]}?`);
    createToken("LOOSE", `^${src[t5.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t5.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t5.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t5.XRANGEIDENTIFIER]})(?:\\.(${src[t5.XRANGEIDENTIFIER]})(?:\\.(${src[t5.XRANGEIDENTIFIER]})(?:${src[t5.PRERELEASE]})?${src[t5.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t5.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t5.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t5.XRANGEIDENTIFIERLOOSE]})(?:${src[t5.PRERELEASELOOSE]})?${src[t5.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t5.GTLT]}\\s*${src[t5.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t5.GTLT]}\\s*${src[t5.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    createToken("COERCE", `${src[t5.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src[t5.COERCEPLAIN] + `(?:${src[t5.PRERELEASE]})?(?:${src[t5.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t5.COERCE], true);
    createToken("COERCERTLFULL", src[t5.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t5.LONETILDE]}\\s+`, true);
    exports2.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t5.LONETILDE]}${src[t5.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t5.LONETILDE]}${src[t5.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t5.LONECARET]}\\s+`, true);
    exports2.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t5.LONECARET]}${src[t5.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t5.LONECARET]}${src[t5.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t5.GTLT]}\\s*(${src[t5.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t5.GTLT]}\\s*(${src[t5.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t5.GTLT]}\\s*(${src[t5.LOOSEPLAIN]}|${src[t5.XRANGEPLAIN]})`, true);
    exports2.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t5.XRANGEPLAIN]})\\s+-\\s+(${src[t5.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t5.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t5.XRANGEPLAINLOOSE]})\\s*$`);
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
    var debug4 = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
    var { safeRe: re, t: t5 } = require_re();
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
        debug4("SemVer", version, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m3 = version.trim().match(options.loose ? re[t5.LOOSE] : re[t5.FULL]);
        if (!m3) {
          throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        this.major = +m3[1];
        this.minor = +m3[2];
        this.patch = +m3[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m3[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m3[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m3[5] ? m3[5].split(".") : [];
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
        debug4("SemVer.compare", this.version, this.options, other);
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
        let i3 = 0;
        do {
          const a3 = this.prerelease[i3];
          const b2 = other.prerelease[i3];
          debug4("prerelease compare", i3, a3, b2);
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
        } while (++i3);
      }
      compareBuild(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        let i3 = 0;
        do {
          const a3 = this.build[i3];
          const b2 = other.build[i3];
          debug4("build compare", i3, a3, b2);
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
        } while (++i3);
      }
      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc(release, identifier, identifierBase) {
        if (release.startsWith("pre")) {
          if (!identifier && identifierBase === false) {
            throw new Error("invalid increment argument: identifier is empty");
          }
          if (identifier) {
            const match = `-${identifier}`.match(this.options.loose ? re[t5.PRERELEASELOOSE] : re[t5.PRERELEASE]);
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
              let i3 = this.prerelease.length;
              while (--i3 >= 0) {
                if (typeof this.prerelease[i3] === "number") {
                  this.prerelease[i3]++;
                  i3 = -2;
                }
              }
              if (i3 === -1) {
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
      const s2 = parse(version.trim().replace(/^[=v]+/, ""), options);
      return s2 ? s2.version : null;
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
    var { safeRe: re, t: t5 } = require_re();
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
        match = version.match(options.includePrerelease ? re[t5.COERCEFULL] : re[t5.COERCE]);
      } else {
        const coerceRtlRegex = options.includePrerelease ? re[t5.COERCERTLFULL] : re[t5.COERCERTL];
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
        this.set = this.raw.split("||").map((r3) => this.parseRange(r3.trim())).filter((c3) => c3.length);
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
          for (let i3 = 0; i3 < this.set.length; i3++) {
            if (i3 > 0) {
              this.formatted += "||";
            }
            const comps = this.set[i3];
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
        const hr = loose ? re[t5.HYPHENRANGELOOSE] : re[t5.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug4("hyphen replace", range);
        range = range.replace(re[t5.COMPARATORTRIM], comparatorTrimReplace);
        debug4("comparator trim", range);
        range = range.replace(re[t5.TILDETRIM], tildeTrimReplace);
        debug4("tilde trim", range);
        range = range.replace(re[t5.CARETTRIM], caretTrimReplace);
        debug4("caret trim", range);
        let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
        if (loose) {
          rangeList = rangeList.filter((comp) => {
            debug4("loose invalid filter", comp, this.options);
            return !!comp.match(re[t5.COMPARATORLOOSE]);
          });
        }
        debug4("range list", rangeList);
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
        for (let i3 = 0; i3 < this.set.length; i3++) {
          if (testSet(this.set[i3], version, this.options)) {
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
    var debug4 = require_debug();
    var SemVer = require_semver();
    var {
      safeRe: re,
      t: t5,
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
      comp = comp.replace(re[t5.BUILD], "");
      debug4("comp", comp, options);
      comp = replaceCarets(comp, options);
      debug4("caret", comp);
      comp = replaceTildes(comp, options);
      debug4("tildes", comp);
      comp = replaceXRanges(comp, options);
      debug4("xrange", comp);
      comp = replaceStars(comp, options);
      debug4("stars", comp);
      return comp;
    };
    var isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
    var replaceTildes = (comp, options) => {
      return comp.trim().split(/\s+/).map((c3) => replaceTilde(c3, options)).join(" ");
    };
    var replaceTilde = (comp, options) => {
      const r3 = options.loose ? re[t5.TILDELOOSE] : re[t5.TILDE];
      return comp.replace(r3, (_2, M2, m3, p2, pr) => {
        debug4("tilde", comp, _2, M2, m3, p2, pr);
        let ret;
        if (isX(M2)) {
          ret = "";
        } else if (isX(m3)) {
          ret = `>=${M2}.0.0 <${+M2 + 1}.0.0-0`;
        } else if (isX(p2)) {
          ret = `>=${M2}.${m3}.0 <${M2}.${+m3 + 1}.0-0`;
        } else if (pr) {
          debug4("replaceTilde pr", pr);
          ret = `>=${M2}.${m3}.${p2}-${pr} <${M2}.${+m3 + 1}.0-0`;
        } else {
          ret = `>=${M2}.${m3}.${p2} <${M2}.${+m3 + 1}.0-0`;
        }
        debug4("tilde return", ret);
        return ret;
      });
    };
    var replaceCarets = (comp, options) => {
      return comp.trim().split(/\s+/).map((c3) => replaceCaret(c3, options)).join(" ");
    };
    var replaceCaret = (comp, options) => {
      debug4("caret", comp, options);
      const r3 = options.loose ? re[t5.CARETLOOSE] : re[t5.CARET];
      const z2 = options.includePrerelease ? "-0" : "";
      return comp.replace(r3, (_2, M2, m3, p2, pr) => {
        debug4("caret", comp, _2, M2, m3, p2, pr);
        let ret;
        if (isX(M2)) {
          ret = "";
        } else if (isX(m3)) {
          ret = `>=${M2}.0.0${z2} <${+M2 + 1}.0.0-0`;
        } else if (isX(p2)) {
          if (M2 === "0") {
            ret = `>=${M2}.${m3}.0${z2} <${M2}.${+m3 + 1}.0-0`;
          } else {
            ret = `>=${M2}.${m3}.0${z2} <${+M2 + 1}.0.0-0`;
          }
        } else if (pr) {
          debug4("replaceCaret pr", pr);
          if (M2 === "0") {
            if (m3 === "0") {
              ret = `>=${M2}.${m3}.${p2}-${pr} <${M2}.${m3}.${+p2 + 1}-0`;
            } else {
              ret = `>=${M2}.${m3}.${p2}-${pr} <${M2}.${+m3 + 1}.0-0`;
            }
          } else {
            ret = `>=${M2}.${m3}.${p2}-${pr} <${+M2 + 1}.0.0-0`;
          }
        } else {
          debug4("no pr");
          if (M2 === "0") {
            if (m3 === "0") {
              ret = `>=${M2}.${m3}.${p2}${z2} <${M2}.${m3}.${+p2 + 1}-0`;
            } else {
              ret = `>=${M2}.${m3}.${p2}${z2} <${M2}.${+m3 + 1}.0-0`;
            }
          } else {
            ret = `>=${M2}.${m3}.${p2} <${+M2 + 1}.0.0-0`;
          }
        }
        debug4("caret return", ret);
        return ret;
      });
    };
    var replaceXRanges = (comp, options) => {
      debug4("replaceXRanges", comp, options);
      return comp.split(/\s+/).map((c3) => replaceXRange(c3, options)).join(" ");
    };
    var replaceXRange = (comp, options) => {
      comp = comp.trim();
      const r3 = options.loose ? re[t5.XRANGELOOSE] : re[t5.XRANGE];
      return comp.replace(r3, (ret, gtlt, M2, m3, p2, pr) => {
        debug4("xRange", comp, ret, gtlt, M2, m3, p2, pr);
        const xM = isX(M2);
        const xm = xM || isX(m3);
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
            m3 = 0;
          }
          p2 = 0;
          if (gtlt === ">") {
            gtlt = ">=";
            if (xm) {
              M2 = +M2 + 1;
              m3 = 0;
              p2 = 0;
            } else {
              m3 = +m3 + 1;
              p2 = 0;
            }
          } else if (gtlt === "<=") {
            gtlt = "<";
            if (xm) {
              M2 = +M2 + 1;
            } else {
              m3 = +m3 + 1;
            }
          }
          if (gtlt === "<") {
            pr = "-0";
          }
          ret = `${gtlt + M2}.${m3}.${p2}${pr}`;
        } else if (xm) {
          ret = `>=${M2}.0.0${pr} <${+M2 + 1}.0.0-0`;
        } else if (xp) {
          ret = `>=${M2}.${m3}.0${pr} <${M2}.${+m3 + 1}.0-0`;
        }
        debug4("xRange return", ret);
        return ret;
      });
    };
    var replaceStars = (comp, options) => {
      debug4("replaceStars", comp, options);
      return comp.trim().replace(re[t5.STAR], "");
    };
    var replaceGTE0 = (comp, options) => {
      debug4("replaceGTE0", comp, options);
      return comp.trim().replace(re[options.includePrerelease ? t5.GTE0PRE : t5.GTE0], "");
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
      for (let i3 = 0; i3 < set.length; i3++) {
        if (!set[i3].test(version)) {
          return false;
        }
      }
      if (version.prerelease.length && !options.includePrerelease) {
        for (let i3 = 0; i3 < set.length; i3++) {
          debug4(set[i3].semver);
          if (set[i3].semver === Comparator.ANY) {
            continue;
          }
          if (set[i3].semver.prerelease.length > 0) {
            const allowed = set[i3].semver;
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
        debug4("comparator", comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
          this.value = "";
        } else {
          this.value = this.operator + this.semver.version;
        }
        debug4("comp", this);
      }
      parse(comp) {
        const r3 = this.options.loose ? re[t5.COMPARATORLOOSE] : re[t5.COMPARATOR];
        const m3 = comp.match(r3);
        if (!m3) {
          throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m3[1] !== void 0 ? m3[1] : "";
        if (this.operator === "=") {
          this.operator = "";
        }
        if (!m3[2]) {
          this.semver = ANY;
        } else {
          this.semver = new SemVer(m3[2], this.options.loose);
        }
      }
      toString() {
        return this.value;
      }
      test(version) {
        debug4("Comparator.test", version, this.options.loose);
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
    var { safeRe: re, t: t5 } = require_re();
    var cmp = require_cmp();
    var debug4 = require_debug();
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
      for (let i3 = 0; i3 < range.set.length; ++i3) {
        const comparators = range.set[i3];
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
      for (let i3 = 0; i3 < range.set.length; ++i3) {
        const comparators = range.set[i3];
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
    var intersects = (r1, r22, options) => {
      r1 = new Range(r1, options);
      r22 = new Range(r22, options);
      return r1.intersects(r22, options);
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
      let higher, lower2;
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
            lower2 = lowerLT(lt2, c3, options);
            if (lower2 === c3 && lower2 !== lt2) {
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
    var decode2 = require_decode();
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
        decodedToken = decode2(jwtString, { complete: true });
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
          } catch (e3) {
            return done(e3);
          }
        }
        let valid;
        try {
          valid = jws.verify(jwtString, decodedToken.header.alg, secretOrPublicKey2);
        } catch (e3) {
          return done(e3);
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
      return isObjectLike2(value) && isArrayLike(value);
    }
    function isFunction(value) {
      var tag = isObject2(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject2(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike2(value) {
      return !!value && typeof value == "object";
    }
    function isString2(value) {
      return typeof value == "string" || !isArray(value) && isObjectLike2(value) && objectToString.call(value) == stringTag;
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike2(value) && objectToString.call(value) == symbolTag;
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
      if (isObject2(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject2(other) ? other + "" : other;
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
      return value === true || value === false || isObjectLike2(value) && objectToString.call(value) == boolTag;
    }
    function isObjectLike2(value) {
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
    function isObject2(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike2(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike2(value) && objectToString.call(value) == symbolTag;
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
      if (isObject2(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject2(other) ? other + "" : other;
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
    function isObjectLike2(value) {
      return !!value && typeof value == "object";
    }
    function isNumber2(value) {
      return typeof value == "number" || isObjectLike2(value) && objectToString.call(value) == numberTag;
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
        } catch (e3) {
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
    function isObjectLike2(value) {
      return !!value && typeof value == "object";
    }
    function isPlainObject2(value) {
      if (!isObjectLike2(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
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
    function isObjectLike2(value) {
      return !!value && typeof value == "object";
    }
    function isString2(value) {
      return typeof value == "string" || !isArray(value) && isObjectLike2(value) && objectToString.call(value) == stringTag;
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
    function isObject2(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike2(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike2(value) && objectToString.call(value) == symbolTag;
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
      if (isObject2(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject2(other) ? other + "" : other;
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

// asset-input/node_modules/debug/src/common.js
var require_common = __commonJS({
  "asset-input/node_modules/debug/src/common.js"(exports2, module2) {
    function setup(env2) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env2).forEach((key) => {
        createDebug[key] = env2[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i3 = 0; i3 < namespace.length; i3++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i3);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug4(...args) {
          if (!debug4.enabled) {
            return;
          }
          const self2 = debug4;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms2 = curr - (prevTime || curr);
          self2.diff = ms2;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self2, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args);
        }
        debug4.namespace = namespace;
        debug4.useColors = createDebug.useColors();
        debug4.color = createDebug.selectColor(namespace);
        debug4.extend = extend;
        debug4.destroy = createDebug.destroy;
        Object.defineProperty(debug4, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v2) => {
            enableOverride = v2;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug4);
        }
        return debug4;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
        for (const ns of split) {
          if (ns[0] === "-") {
            createDebug.skips.push(ns.slice(1));
          } else {
            createDebug.names.push(ns);
          }
        }
      }
      function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while (searchIndex < search.length) {
          if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
            if (template[templateIndex] === "*") {
              starIndex = templateIndex;
              matchIndex = searchIndex;
              templateIndex++;
            } else {
              searchIndex++;
              templateIndex++;
            }
          } else if (starIndex !== -1) {
            templateIndex = starIndex + 1;
            matchIndex++;
            searchIndex = matchIndex;
          } else {
            return false;
          }
        }
        while (templateIndex < template.length && template[templateIndex] === "*") {
          templateIndex++;
        }
        return templateIndex === template.length;
      }
      function disable() {
        const namespaces = [
          ...createDebug.names,
          ...createDebug.skips.map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        for (const skip of createDebug.skips) {
          if (matchesTemplate(name, skip)) {
            return false;
          }
        }
        for (const ns of createDebug.names) {
          if (matchesTemplate(name, ns)) {
            return true;
          }
        }
        return false;
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module2.exports = setup;
  }
});

// asset-input/node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "asset-input/node_modules/debug/src/browser.js"(exports2, module2) {
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.storage = localstorage();
    exports2.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports2.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      let m3;
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && (m3 = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m3[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c3 = "color: " + this.color;
      args.splice(1, 0, c3, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c3);
    }
    exports2.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports2.storage.setItem("debug", namespaces);
        } else {
          exports2.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r3;
      try {
        r3 = exports2.storage.getItem("debug") || exports2.storage.getItem("DEBUG");
      } catch (error) {
      }
      if (!r3 && typeof process !== "undefined" && "env" in process) {
        r3 = process.env.DEBUG;
      }
      return r3;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module2.exports = require_common()(exports2);
    var { formatters } = module2.exports;
    formatters.j = function(v2) {
      try {
        return JSON.stringify(v2);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// asset-input/node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "asset-input/node_modules/has-flag/index.js"(exports2, module2) {
    "use strict";
    module2.exports = (flag, argv = process.argv) => {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv.indexOf(prefix + flag);
      const terminatorPosition = argv.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    };
  }
});

// asset-input/node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "asset-input/node_modules/supports-color/index.js"(exports2, module2) {
    "use strict";
    var os = require("os");
    var tty = require("tty");
    var hasFlag = require_has_flag();
    var { env: env2 } = process;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      forceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = 1;
    }
    if ("FORCE_COLOR" in env2) {
      if (env2.FORCE_COLOR === "true") {
        forceColor = 1;
      } else if (env2.FORCE_COLOR === "false") {
        forceColor = 0;
      } else {
        forceColor = env2.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env2.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(haveStream, streamIsTTY) {
      if (forceColor === 0) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env2.TERM === "dumb") {
        return min;
      }
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env2) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => sign in env2) || env2.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env2) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env2.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env2.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env2) {
        const version = parseInt((env2.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env2.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env2.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env2.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env2) {
        return 1;
      }
      return min;
    }
    function getSupportLevel(stream) {
      const level = supportsColor(stream, stream && stream.isTTY);
      return translateLevel(level);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: translateLevel(supportsColor(true, tty.isatty(1))),
      stderr: translateLevel(supportsColor(true, tty.isatty(2)))
    };
  }
});

// asset-input/node_modules/debug/src/node.js
var require_node = __commonJS({
  "asset-input/node_modules/debug/src/node.js"(exports2, module2) {
    var tty = require("tty");
    var util = require("util");
    exports2.init = init;
    exports2.log = log;
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.destroy = util.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
    exports2.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = require_supports_color();
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports2.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error) {
    }
    exports2.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_2, k2) => {
        return k2.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports2.inspectOpts ? Boolean(exports2.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c3 = this.color;
        const colorCode = "\x1B[3" + (c3 < 8 ? c3 : "8;5;" + c3);
        const prefix = `  ${colorCode};1m${name} \x1B[0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module2.exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    function getDate() {
      if (exports2.inspectOpts.hideDate) {
        return "";
      }
      return (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function log(...args) {
      return process.stderr.write(util.formatWithOptions(exports2.inspectOpts, ...args) + "\n");
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function init(debug4) {
      debug4.inspectOpts = {};
      const keys = Object.keys(exports2.inspectOpts);
      for (let i3 = 0; i3 < keys.length; i3++) {
        debug4.inspectOpts[keys[i3]] = exports2.inspectOpts[keys[i3]];
      }
    }
    module2.exports = require_common()(exports2);
    var { formatters } = module2.exports;
    formatters.o = function(v2) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v2, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v2) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v2, this.inspectOpts);
    };
  }
});

// asset-input/node_modules/debug/src/index.js
var require_src = __commonJS({
  "asset-input/node_modules/debug/src/index.js"(exports2, module2) {
    if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
      module2.exports = require_browser();
    } else {
      module2.exports = require_node();
    }
  }
});

// asset-input/node_modules/web-streams-polyfill/dist/ponyfill.es2018.js
var require_ponyfill_es2018 = __commonJS({
  "asset-input/node_modules/web-streams-polyfill/dist/ponyfill.es2018.js"(exports2, module2) {
    (function(global2, factory) {
      typeof exports2 === "object" && typeof module2 !== "undefined" ? factory(exports2) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.WebStreamsPolyfill = {}));
    })(exports2, function(exports3) {
      "use strict";
      function noop2() {
        return void 0;
      }
      function typeIsObject(x4) {
        return typeof x4 === "object" && x4 !== null || typeof x4 === "function";
      }
      const rethrowAssertionErrorRejection = noop2;
      function setFunctionName(fn, name) {
        try {
          Object.defineProperty(fn, "name", {
            value: name,
            configurable: true
          });
        } catch (_a2) {
        }
      }
      const originalPromise = Promise;
      const originalPromiseThen = Promise.prototype.then;
      const originalPromiseReject = Promise.reject.bind(originalPromise);
      function newPromise(executor) {
        return new originalPromise(executor);
      }
      function promiseResolvedWith(value) {
        return newPromise((resolve) => resolve(value));
      }
      function promiseRejectedWith(reason) {
        return originalPromiseReject(reason);
      }
      function PerformPromiseThen(promise, onFulfilled, onRejected) {
        return originalPromiseThen.call(promise, onFulfilled, onRejected);
      }
      function uponPromise(promise, onFulfilled, onRejected) {
        PerformPromiseThen(PerformPromiseThen(promise, onFulfilled, onRejected), void 0, rethrowAssertionErrorRejection);
      }
      function uponFulfillment(promise, onFulfilled) {
        uponPromise(promise, onFulfilled);
      }
      function uponRejection(promise, onRejected) {
        uponPromise(promise, void 0, onRejected);
      }
      function transformPromiseWith(promise, fulfillmentHandler, rejectionHandler) {
        return PerformPromiseThen(promise, fulfillmentHandler, rejectionHandler);
      }
      function setPromiseIsHandledToTrue(promise) {
        PerformPromiseThen(promise, void 0, rethrowAssertionErrorRejection);
      }
      let _queueMicrotask = (callback) => {
        if (typeof queueMicrotask === "function") {
          _queueMicrotask = queueMicrotask;
        } else {
          const resolvedPromise = promiseResolvedWith(void 0);
          _queueMicrotask = (cb) => PerformPromiseThen(resolvedPromise, cb);
        }
        return _queueMicrotask(callback);
      };
      function reflectCall(F3, V3, args) {
        if (typeof F3 !== "function") {
          throw new TypeError("Argument is not a function");
        }
        return Function.prototype.apply.call(F3, V3, args);
      }
      function promiseCall(F3, V3, args) {
        try {
          return promiseResolvedWith(reflectCall(F3, V3, args));
        } catch (value) {
          return promiseRejectedWith(value);
        }
      }
      const QUEUE_MAX_ARRAY_SIZE = 16384;
      class SimpleQueue {
        constructor() {
          this._cursor = 0;
          this._size = 0;
          this._front = {
            _elements: [],
            _next: void 0
          };
          this._back = this._front;
          this._cursor = 0;
          this._size = 0;
        }
        get length() {
          return this._size;
        }
        // For exception safety, this method is structured in order:
        // 1. Read state
        // 2. Calculate required state mutations
        // 3. Perform state mutations
        push(element) {
          const oldBack = this._back;
          let newBack = oldBack;
          if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1) {
            newBack = {
              _elements: [],
              _next: void 0
            };
          }
          oldBack._elements.push(element);
          if (newBack !== oldBack) {
            this._back = newBack;
            oldBack._next = newBack;
          }
          ++this._size;
        }
        // Like push(), shift() follows the read -> calculate -> mutate pattern for
        // exception safety.
        shift() {
          const oldFront = this._front;
          let newFront = oldFront;
          const oldCursor = this._cursor;
          let newCursor = oldCursor + 1;
          const elements = oldFront._elements;
          const element = elements[oldCursor];
          if (newCursor === QUEUE_MAX_ARRAY_SIZE) {
            newFront = oldFront._next;
            newCursor = 0;
          }
          --this._size;
          this._cursor = newCursor;
          if (oldFront !== newFront) {
            this._front = newFront;
          }
          elements[oldCursor] = void 0;
          return element;
        }
        // The tricky thing about forEach() is that it can be called
        // re-entrantly. The queue may be mutated inside the callback. It is easy to
        // see that push() within the callback has no negative effects since the end
        // of the queue is checked for on every iteration. If shift() is called
        // repeatedly within the callback then the next iteration may return an
        // element that has been removed. In this case the callback will be called
        // with undefined values until we either "catch up" with elements that still
        // exist or reach the back of the queue.
        forEach(callback) {
          let i3 = this._cursor;
          let node = this._front;
          let elements = node._elements;
          while (i3 !== elements.length || node._next !== void 0) {
            if (i3 === elements.length) {
              node = node._next;
              elements = node._elements;
              i3 = 0;
              if (elements.length === 0) {
                break;
              }
            }
            callback(elements[i3]);
            ++i3;
          }
        }
        // Return the element that would be returned if shift() was called now,
        // without modifying the queue.
        peek() {
          const front = this._front;
          const cursor = this._cursor;
          return front._elements[cursor];
        }
      }
      const AbortSteps = Symbol("[[AbortSteps]]");
      const ErrorSteps = Symbol("[[ErrorSteps]]");
      const CancelSteps = Symbol("[[CancelSteps]]");
      const PullSteps = Symbol("[[PullSteps]]");
      const ReleaseSteps = Symbol("[[ReleaseSteps]]");
      function ReadableStreamReaderGenericInitialize(reader, stream) {
        reader._ownerReadableStream = stream;
        stream._reader = reader;
        if (stream._state === "readable") {
          defaultReaderClosedPromiseInitialize(reader);
        } else if (stream._state === "closed") {
          defaultReaderClosedPromiseInitializeAsResolved(reader);
        } else {
          defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
        }
      }
      function ReadableStreamReaderGenericCancel(reader, reason) {
        const stream = reader._ownerReadableStream;
        return ReadableStreamCancel(stream, reason);
      }
      function ReadableStreamReaderGenericRelease(reader) {
        const stream = reader._ownerReadableStream;
        if (stream._state === "readable") {
          defaultReaderClosedPromiseReject(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
        } else {
          defaultReaderClosedPromiseResetToRejected(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
        }
        stream._readableStreamController[ReleaseSteps]();
        stream._reader = void 0;
        reader._ownerReadableStream = void 0;
      }
      function readerLockException(name) {
        return new TypeError("Cannot " + name + " a stream using a released reader");
      }
      function defaultReaderClosedPromiseInitialize(reader) {
        reader._closedPromise = newPromise((resolve, reject) => {
          reader._closedPromise_resolve = resolve;
          reader._closedPromise_reject = reject;
        });
      }
      function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
        defaultReaderClosedPromiseInitialize(reader);
        defaultReaderClosedPromiseReject(reader, reason);
      }
      function defaultReaderClosedPromiseInitializeAsResolved(reader) {
        defaultReaderClosedPromiseInitialize(reader);
        defaultReaderClosedPromiseResolve(reader);
      }
      function defaultReaderClosedPromiseReject(reader, reason) {
        if (reader._closedPromise_reject === void 0) {
          return;
        }
        setPromiseIsHandledToTrue(reader._closedPromise);
        reader._closedPromise_reject(reason);
        reader._closedPromise_resolve = void 0;
        reader._closedPromise_reject = void 0;
      }
      function defaultReaderClosedPromiseResetToRejected(reader, reason) {
        defaultReaderClosedPromiseInitializeAsRejected(reader, reason);
      }
      function defaultReaderClosedPromiseResolve(reader) {
        if (reader._closedPromise_resolve === void 0) {
          return;
        }
        reader._closedPromise_resolve(void 0);
        reader._closedPromise_resolve = void 0;
        reader._closedPromise_reject = void 0;
      }
      const NumberIsFinite = Number.isFinite || function(x4) {
        return typeof x4 === "number" && isFinite(x4);
      };
      const MathTrunc = Math.trunc || function(v2) {
        return v2 < 0 ? Math.ceil(v2) : Math.floor(v2);
      };
      function isDictionary(x4) {
        return typeof x4 === "object" || typeof x4 === "function";
      }
      function assertDictionary(obj, context) {
        if (obj !== void 0 && !isDictionary(obj)) {
          throw new TypeError(`${context} is not an object.`);
        }
      }
      function assertFunction(x4, context) {
        if (typeof x4 !== "function") {
          throw new TypeError(`${context} is not a function.`);
        }
      }
      function isObject2(x4) {
        return typeof x4 === "object" && x4 !== null || typeof x4 === "function";
      }
      function assertObject(x4, context) {
        if (!isObject2(x4)) {
          throw new TypeError(`${context} is not an object.`);
        }
      }
      function assertRequiredArgument(x4, position, context) {
        if (x4 === void 0) {
          throw new TypeError(`Parameter ${position} is required in '${context}'.`);
        }
      }
      function assertRequiredField(x4, field, context) {
        if (x4 === void 0) {
          throw new TypeError(`${field} is required in '${context}'.`);
        }
      }
      function convertUnrestrictedDouble(value) {
        return Number(value);
      }
      function censorNegativeZero(x4) {
        return x4 === 0 ? 0 : x4;
      }
      function integerPart(x4) {
        return censorNegativeZero(MathTrunc(x4));
      }
      function convertUnsignedLongLongWithEnforceRange(value, context) {
        const lowerBound = 0;
        const upperBound = Number.MAX_SAFE_INTEGER;
        let x4 = Number(value);
        x4 = censorNegativeZero(x4);
        if (!NumberIsFinite(x4)) {
          throw new TypeError(`${context} is not a finite number`);
        }
        x4 = integerPart(x4);
        if (x4 < lowerBound || x4 > upperBound) {
          throw new TypeError(`${context} is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`);
        }
        if (!NumberIsFinite(x4) || x4 === 0) {
          return 0;
        }
        return x4;
      }
      function assertReadableStream(x4, context) {
        if (!IsReadableStream(x4)) {
          throw new TypeError(`${context} is not a ReadableStream.`);
        }
      }
      function AcquireReadableStreamDefaultReader(stream) {
        return new ReadableStreamDefaultReader(stream);
      }
      function ReadableStreamAddReadRequest(stream, readRequest) {
        stream._reader._readRequests.push(readRequest);
      }
      function ReadableStreamFulfillReadRequest(stream, chunk, done) {
        const reader = stream._reader;
        const readRequest = reader._readRequests.shift();
        if (done) {
          readRequest._closeSteps();
        } else {
          readRequest._chunkSteps(chunk);
        }
      }
      function ReadableStreamGetNumReadRequests(stream) {
        return stream._reader._readRequests.length;
      }
      function ReadableStreamHasDefaultReader(stream) {
        const reader = stream._reader;
        if (reader === void 0) {
          return false;
        }
        if (!IsReadableStreamDefaultReader(reader)) {
          return false;
        }
        return true;
      }
      class ReadableStreamDefaultReader {
        constructor(stream) {
          assertRequiredArgument(stream, 1, "ReadableStreamDefaultReader");
          assertReadableStream(stream, "First parameter");
          if (IsReadableStreamLocked(stream)) {
            throw new TypeError("This stream has already been locked for exclusive reading by another reader");
          }
          ReadableStreamReaderGenericInitialize(this, stream);
          this._readRequests = new SimpleQueue();
        }
        /**
         * Returns a promise that will be fulfilled when the stream becomes closed,
         * or rejected if the stream ever errors or the reader's lock is released before the stream finishes closing.
         */
        get closed() {
          if (!IsReadableStreamDefaultReader(this)) {
            return promiseRejectedWith(defaultReaderBrandCheckException("closed"));
          }
          return this._closedPromise;
        }
        /**
         * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
         */
        cancel(reason = void 0) {
          if (!IsReadableStreamDefaultReader(this)) {
            return promiseRejectedWith(defaultReaderBrandCheckException("cancel"));
          }
          if (this._ownerReadableStream === void 0) {
            return promiseRejectedWith(readerLockException("cancel"));
          }
          return ReadableStreamReaderGenericCancel(this, reason);
        }
        /**
         * Returns a promise that allows access to the next chunk from the stream's internal queue, if available.
         *
         * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
         */
        read() {
          if (!IsReadableStreamDefaultReader(this)) {
            return promiseRejectedWith(defaultReaderBrandCheckException("read"));
          }
          if (this._ownerReadableStream === void 0) {
            return promiseRejectedWith(readerLockException("read from"));
          }
          let resolvePromise;
          let rejectPromise;
          const promise = newPromise((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
          });
          const readRequest = {
            _chunkSteps: (chunk) => resolvePromise({ value: chunk, done: false }),
            _closeSteps: () => resolvePromise({ value: void 0, done: true }),
            _errorSteps: (e3) => rejectPromise(e3)
          };
          ReadableStreamDefaultReaderRead(this, readRequest);
          return promise;
        }
        /**
         * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
         * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
         * from now on; otherwise, the reader will appear closed.
         *
         * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
         * the reader's {@link ReadableStreamDefaultReader.read | read()} method has not yet been settled. Attempting to
         * do so will throw a `TypeError` and leave the reader locked to the stream.
         */
        releaseLock() {
          if (!IsReadableStreamDefaultReader(this)) {
            throw defaultReaderBrandCheckException("releaseLock");
          }
          if (this._ownerReadableStream === void 0) {
            return;
          }
          ReadableStreamDefaultReaderRelease(this);
        }
      }
      Object.defineProperties(ReadableStreamDefaultReader.prototype, {
        cancel: { enumerable: true },
        read: { enumerable: true },
        releaseLock: { enumerable: true },
        closed: { enumerable: true }
      });
      setFunctionName(ReadableStreamDefaultReader.prototype.cancel, "cancel");
      setFunctionName(ReadableStreamDefaultReader.prototype.read, "read");
      setFunctionName(ReadableStreamDefaultReader.prototype.releaseLock, "releaseLock");
      if (typeof Symbol.toStringTag === "symbol") {
        Object.defineProperty(ReadableStreamDefaultReader.prototype, Symbol.toStringTag, {
          value: "ReadableStreamDefaultReader",
          configurable: true
        });
      }
      function IsReadableStreamDefaultReader(x4) {
        if (!typeIsObject(x4)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x4, "_readRequests")) {
          return false;
        }
        return x4 instanceof ReadableStreamDefaultReader;
      }
      function ReadableStreamDefaultReaderRead(reader, readRequest) {
        const stream = reader._ownerReadableStream;
        stream._disturbed = true;
        if (stream._state === "closed") {
          readRequest._closeSteps();
        } else if (stream._state === "errored") {
          readRequest._errorSteps(stream._storedError);
        } else {
          stream._readableStreamController[PullSteps](readRequest);
        }
      }
      function ReadableStreamDefaultReaderRelease(reader) {
        ReadableStreamReaderGenericRelease(reader);
        const e3 = new TypeError("Reader was released");
        ReadableStreamDefaultReaderErrorReadRequests(reader, e3);
      }
      function ReadableStreamDefaultReaderErrorReadRequests(reader, e3) {
        const readRequests = reader._readRequests;
        reader._readRequests = new SimpleQueue();
        readRequests.forEach((readRequest) => {
          readRequest._errorSteps(e3);
        });
      }
      function defaultReaderBrandCheckException(name) {
        return new TypeError(`ReadableStreamDefaultReader.prototype.${name} can only be used on a ReadableStreamDefaultReader`);
      }
      const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
      }).prototype);
      class ReadableStreamAsyncIteratorImpl {
        constructor(reader, preventCancel) {
          this._ongoingPromise = void 0;
          this._isFinished = false;
          this._reader = reader;
          this._preventCancel = preventCancel;
        }
        next() {
          const nextSteps = () => this._nextSteps();
          this._ongoingPromise = this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps) : nextSteps();
          return this._ongoingPromise;
        }
        return(value) {
          const returnSteps = () => this._returnSteps(value);
          return this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, returnSteps, returnSteps) : returnSteps();
        }
        _nextSteps() {
          if (this._isFinished) {
            return Promise.resolve({ value: void 0, done: true });
          }
          const reader = this._reader;
          let resolvePromise;
          let rejectPromise;
          const promise = newPromise((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
          });
          const readRequest = {
            _chunkSteps: (chunk) => {
              this._ongoingPromise = void 0;
              _queueMicrotask(() => resolvePromise({ value: chunk, done: false }));
            },
            _closeSteps: () => {
              this._ongoingPromise = void 0;
              this._isFinished = true;
              ReadableStreamReaderGenericRelease(reader);
              resolvePromise({ value: void 0, done: true });
            },
            _errorSteps: (reason) => {
              this._ongoingPromise = void 0;
              this._isFinished = true;
              ReadableStreamReaderGenericRelease(reader);
              rejectPromise(reason);
            }
          };
          ReadableStreamDefaultReaderRead(reader, readRequest);
          return promise;
        }
        _returnSteps(value) {
          if (this._isFinished) {
            return Promise.resolve({ value, done: true });
          }
          this._isFinished = true;
          const reader = this._reader;
          if (!this._preventCancel) {
            const result = ReadableStreamReaderGenericCancel(reader, value);
            ReadableStreamReaderGenericRelease(reader);
            return transformPromiseWith(result, () => ({ value, done: true }));
          }
          ReadableStreamReaderGenericRelease(reader);
          return promiseResolvedWith({ value, done: true });
        }
      }
      const ReadableStreamAsyncIteratorPrototype = {
        next() {
          if (!IsReadableStreamAsyncIterator(this)) {
            return promiseRejectedWith(streamAsyncIteratorBrandCheckException("next"));
          }
          return this._asyncIteratorImpl.next();
        },
        return(value) {
          if (!IsReadableStreamAsyncIterator(this)) {
            return promiseRejectedWith(streamAsyncIteratorBrandCheckException("return"));
          }
          return this._asyncIteratorImpl.return(value);
        }
      };
      Object.setPrototypeOf(ReadableStreamAsyncIteratorPrototype, AsyncIteratorPrototype);
      function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
        const reader = AcquireReadableStreamDefaultReader(stream);
        const impl = new ReadableStreamAsyncIteratorImpl(reader, preventCancel);
        const iterator = Object.create(ReadableStreamAsyncIteratorPrototype);
        iterator._asyncIteratorImpl = impl;
        return iterator;
      }
      function IsReadableStreamAsyncIterator(x4) {
        if (!typeIsObject(x4)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x4, "_asyncIteratorImpl")) {
          return false;
        }
        try {
          return x4._asyncIteratorImpl instanceof ReadableStreamAsyncIteratorImpl;
        } catch (_a2) {
          return false;
        }
      }
      function streamAsyncIteratorBrandCheckException(name) {
        return new TypeError(`ReadableStreamAsyncIterator.${name} can only be used on a ReadableSteamAsyncIterator`);
      }
      const NumberIsNaN = Number.isNaN || function(x4) {
        return x4 !== x4;
      };
      var _a, _b, _c;
      function CreateArrayFromList(elements) {
        return elements.slice();
      }
      function CopyDataBlockBytes(dest, destOffset, src, srcOffset, n3) {
        new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n3), destOffset);
      }
      let TransferArrayBuffer = (O2) => {
        if (typeof O2.transfer === "function") {
          TransferArrayBuffer = (buffer) => buffer.transfer();
        } else if (typeof structuredClone === "function") {
          TransferArrayBuffer = (buffer) => structuredClone(buffer, { transfer: [buffer] });
        } else {
          TransferArrayBuffer = (buffer) => buffer;
        }
        return TransferArrayBuffer(O2);
      };
      let IsDetachedBuffer = (O2) => {
        if (typeof O2.detached === "boolean") {
          IsDetachedBuffer = (buffer) => buffer.detached;
        } else {
          IsDetachedBuffer = (buffer) => buffer.byteLength === 0;
        }
        return IsDetachedBuffer(O2);
      };
      function ArrayBufferSlice(buffer, begin, end) {
        if (buffer.slice) {
          return buffer.slice(begin, end);
        }
        const length = end - begin;
        const slice = new ArrayBuffer(length);
        CopyDataBlockBytes(slice, 0, buffer, begin, length);
        return slice;
      }
      function GetMethod(receiver, prop) {
        const func = receiver[prop];
        if (func === void 0 || func === null) {
          return void 0;
        }
        if (typeof func !== "function") {
          throw new TypeError(`${String(prop)} is not a function`);
        }
        return func;
      }
      function CreateAsyncFromSyncIterator(syncIteratorRecord) {
        const syncIterable = {
          [Symbol.iterator]: () => syncIteratorRecord.iterator
        };
        const asyncIterator = async function* () {
          return yield* syncIterable;
        }();
        const nextMethod = asyncIterator.next;
        return { iterator: asyncIterator, nextMethod, done: false };
      }
      const SymbolAsyncIterator = (_c = (_a = Symbol.asyncIterator) !== null && _a !== void 0 ? _a : (_b = Symbol.for) === null || _b === void 0 ? void 0 : _b.call(Symbol, "Symbol.asyncIterator")) !== null && _c !== void 0 ? _c : "@@asyncIterator";
      function GetIterator(obj, hint = "sync", method) {
        if (method === void 0) {
          if (hint === "async") {
            method = GetMethod(obj, SymbolAsyncIterator);
            if (method === void 0) {
              const syncMethod = GetMethod(obj, Symbol.iterator);
              const syncIteratorRecord = GetIterator(obj, "sync", syncMethod);
              return CreateAsyncFromSyncIterator(syncIteratorRecord);
            }
          } else {
            method = GetMethod(obj, Symbol.iterator);
          }
        }
        if (method === void 0) {
          throw new TypeError("The object is not iterable");
        }
        const iterator = reflectCall(method, obj, []);
        if (!typeIsObject(iterator)) {
          throw new TypeError("The iterator method must return an object");
        }
        const nextMethod = iterator.next;
        return { iterator, nextMethod, done: false };
      }
      function IteratorNext(iteratorRecord) {
        const result = reflectCall(iteratorRecord.nextMethod, iteratorRecord.iterator, []);
        if (!typeIsObject(result)) {
          throw new TypeError("The iterator.next() method must return an object");
        }
        return result;
      }
      function IteratorComplete(iterResult) {
        return Boolean(iterResult.done);
      }
      function IteratorValue(iterResult) {
        return iterResult.value;
      }
      function IsNonNegativeNumber(v2) {
        if (typeof v2 !== "number") {
          return false;
        }
        if (NumberIsNaN(v2)) {
          return false;
        }
        if (v2 < 0) {
          return false;
        }
        return true;
      }
      function CloneAsUint8Array(O2) {
        const buffer = ArrayBufferSlice(O2.buffer, O2.byteOffset, O2.byteOffset + O2.byteLength);
        return new Uint8Array(buffer);
      }
      function DequeueValue(container2) {
        const pair = container2._queue.shift();
        container2._queueTotalSize -= pair.size;
        if (container2._queueTotalSize < 0) {
          container2._queueTotalSize = 0;
        }
        return pair.value;
      }
      function EnqueueValueWithSize(container2, value, size) {
        if (!IsNonNegativeNumber(size) || size === Infinity) {
          throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
        }
        container2._queue.push({ value, size });
        container2._queueTotalSize += size;
      }
      function PeekQueueValue(container2) {
        const pair = container2._queue.peek();
        return pair.value;
      }
      function ResetQueue(container2) {
        container2._queue = new SimpleQueue();
        container2._queueTotalSize = 0;
      }
      function isDataViewConstructor(ctor) {
        return ctor === DataView;
      }
      function isDataView(view) {
        return isDataViewConstructor(view.constructor);
      }
      function arrayBufferViewElementSize(ctor) {
        if (isDataViewConstructor(ctor)) {
          return 1;
        }
        return ctor.BYTES_PER_ELEMENT;
      }
      class ReadableStreamBYOBRequest {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        /**
         * Returns the view for writing in to, or `null` if the BYOB request has already been responded to.
         */
        get view() {
          if (!IsReadableStreamBYOBRequest(this)) {
            throw byobRequestBrandCheckException("view");
          }
          return this._view;
        }
        respond(bytesWritten) {
          if (!IsReadableStreamBYOBRequest(this)) {
            throw byobRequestBrandCheckException("respond");
          }
          assertRequiredArgument(bytesWritten, 1, "respond");
          bytesWritten = convertUnsignedLongLongWithEnforceRange(bytesWritten, "First parameter");
          if (this._associatedReadableByteStreamController === void 0) {
            throw new TypeError("This BYOB request has been invalidated");
          }
          if (IsDetachedBuffer(this._view.buffer)) {
            throw new TypeError(`The BYOB request's buffer has been detached and so cannot be used as a response`);
          }
          ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
        }
        respondWithNewView(view) {
          if (!IsReadableStreamBYOBRequest(this)) {
            throw byobRequestBrandCheckException("respondWithNewView");
          }
          assertRequiredArgument(view, 1, "respondWithNewView");
          if (!ArrayBuffer.isView(view)) {
            throw new TypeError("You can only respond with array buffer views");
          }
          if (this._associatedReadableByteStreamController === void 0) {
            throw new TypeError("This BYOB request has been invalidated");
          }
          if (IsDetachedBuffer(view.buffer)) {
            throw new TypeError("The given view's buffer has been detached and so cannot be used as a response");
          }
          ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
        }
      }
      Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
        respond: { enumerable: true },
        respondWithNewView: { enumerable: true },
        view: { enumerable: true }
      });
      setFunctionName(ReadableStreamBYOBRequest.prototype.respond, "respond");
      setFunctionName(ReadableStreamBYOBRequest.prototype.respondWithNewView, "respondWithNewView");
      if (typeof Symbol.toStringTag === "symbol") {
        Object.defineProperty(ReadableStreamBYOBRequest.prototype, Symbol.toStringTag, {
          value: "ReadableStreamBYOBRequest",
          configurable: true
        });
      }
      class ReadableByteStreamController {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        /**
         * Returns the current BYOB pull request, or `null` if there isn't one.
         */
        get byobRequest() {
          if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException("byobRequest");
          }
          return ReadableByteStreamControllerGetBYOBRequest(this);
        }
        /**
         * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
         * over-full. An underlying byte source ought to use this information to determine when and how to apply backpressure.
         */
        get desiredSize() {
          if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException("desiredSize");
          }
          return ReadableByteStreamControllerGetDesiredSize(this);
        }
        /**
         * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
         * the stream, but once those are read, the stream will become closed.
         */
        close() {
          if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException("close");
          }
          if (this._closeRequested) {
            throw new TypeError("The stream has already been closed; do not close it again!");
          }
          const state = this._controlledReadableByteStream._state;
          if (state !== "readable") {
            throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be closed`);
          }
          ReadableByteStreamControllerClose(this);
        }
        enqueue(chunk) {
          if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException("enqueue");
          }
          assertRequiredArgument(chunk, 1, "enqueue");
          if (!ArrayBuffer.isView(chunk)) {
            throw new TypeError("chunk must be an array buffer view");
          }
          if (chunk.byteLength === 0) {
            throw new TypeError("chunk must have non-zero byteLength");
          }
          if (chunk.buffer.byteLength === 0) {
            throw new TypeError(`chunk's buffer must have non-zero byteLength`);
          }
          if (this._closeRequested) {
            throw new TypeError("stream is closed or draining");
          }
          const state = this._controlledReadableByteStream._state;
          if (state !== "readable") {
            throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be enqueued to`);
          }
          ReadableByteStreamControllerEnqueue(this, chunk);
        }
        /**
         * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
         */
        error(e3 = void 0) {
          if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException("error");
          }
          ReadableByteStreamControllerError(this, e3);
        }
        /** @internal */
        [CancelSteps](reason) {
          ReadableByteStreamControllerClearPendingPullIntos(this);
          ResetQueue(this);
          const result = this._cancelAlgorithm(reason);
          ReadableByteStreamControllerClearAlgorithms(this);
          return result;
        }
        /** @internal */
        [PullSteps](readRequest) {
          const stream = this._controlledReadableByteStream;
          if (this._queueTotalSize > 0) {
            ReadableByteStreamControllerFillReadRequestFromQueue(this, readRequest);
            return;
          }
          const autoAllocateChunkSize = this._autoAllocateChunkSize;
          if (autoAllocateChunkSize !== void 0) {
            let buffer;
            try {
              buffer = new ArrayBuffer(autoAllocateChunkSize);
            } catch (bufferE) {
              readRequest._errorSteps(bufferE);
              return;
            }
            const pullIntoDescriptor = {
              buffer,
              bufferByteLength: autoAllocateChunkSize,
              byteOffset: 0,
              byteLength: autoAllocateChunkSize,
              bytesFilled: 0,
              minimumFill: 1,
              elementSize: 1,
              viewConstructor: Uint8Array,
              readerType: "default"
            };
            this._pendingPullIntos.push(pullIntoDescriptor);
          }
          ReadableStreamAddReadRequest(stream, readRequest);
          ReadableByteStreamControllerCallPullIfNeeded(this);
        }
        /** @internal */
        [ReleaseSteps]() {
          if (this._pendingPullIntos.length > 0) {
            const firstPullInto = this._pendingPullIntos.peek();
            firstPullInto.readerType = "none";
            this._pendingPullIntos = new SimpleQueue();
            this._pendingPullIntos.push(firstPullInto);
          }
        }
      }
      Object.defineProperties(ReadableByteStreamController.prototype, {
        close: { enumerable: true },
        enqueue: { enumerable: true },
        error: { enumerable: true },
        byobRequest: { enumerable: true },
        desiredSize: { enumerable: true }
      });
      setFunctionName(ReadableByteStreamController.prototype.close, "close");
      setFunctionName(ReadableByteStreamController.prototype.enqueue, "enqueue");
      setFunctionName(ReadableByteStreamController.prototype.error, "error");
      if (typeof Symbol.toStringTag === "symbol") {
        Object.defineProperty(ReadableByteStreamController.prototype, Symbol.toStringTag, {
          value: "ReadableByteStreamController",
          configurable: true
        });
      }
      function IsReadableByteStreamController(x4) {
        if (!typeIsObject(x4)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x4, "_controlledReadableByteStream")) {
          return false;
        }
        return x4 instanceof ReadableByteStreamController;
      }
      function IsReadableStreamBYOBRequest(x4) {
        if (!typeIsObject(x4)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x4, "_associatedReadableByteStreamController")) {
          return false;
        }
        return x4 instanceof ReadableStreamBYOBRequest;
      }
      function ReadableByteStreamControllerCallPullIfNeeded(controller) {
        const shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
        if (!shouldPull) {
          return;
        }
        if (controller._pulling) {
          controller._pullAgain = true;
          return;
        }
        controller._pulling = true;
        const pullPromise = controller._pullAlgorithm();
        uponPromise(pullPromise, () => {
          controller._pulling = false;
          if (controller._pullAgain) {
            controller._pullAgain = false;
            ReadableByteStreamControllerCallPullIfNeeded(controller);
          }
          return null;
        }, (e3) => {
          ReadableByteStreamControllerError(controller, e3);
          return null;
        });
      }
      function ReadableByteStreamControllerClearPendingPullIntos(controller) {
        ReadableByteStreamControllerInvalidateBYOBRequest(controller);
        controller._pendingPullIntos = new SimpleQueue();
      }
      function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
        let done = false;
        if (stream._state === "closed") {
          done = true;
        }
        const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
        if (pullIntoDescriptor.readerType === "default") {
          ReadableStreamFulfillReadRequest(stream, filledView, done);
        } else {
          ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
        }
      }
      function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
        const bytesFilled = pullIntoDescriptor.bytesFilled;
        const elementSize = pullIntoDescriptor.elementSize;
        return new pullIntoDescriptor.viewConstructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
      }
      function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
        controller._queue.push({ buffer, byteOffset, byteLength });
        controller._queueTotalSize += byteLength;
      }
      function ReadableByteStreamControllerEnqueueClonedChunkToQueue(controller, buffer, byteOffset, byteLength) {
        let clonedChunk;
        try {
          clonedChunk = ArrayBufferSlice(buffer, byteOffset, byteOffset + byteLength);
        } catch (cloneE) {
          ReadableByteStreamControllerError(controller, cloneE);
          throw cloneE;
        }
        ReadableByteStreamControllerEnqueueChunkToQueue(controller, clonedChunk, 0, byteLength);
      }
      function ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue(controller, firstDescriptor) {
        if (firstDescriptor.bytesFilled > 0) {
          ReadableByteStreamControllerEnqueueClonedChunkToQueue(controller, firstDescriptor.buffer, firstDescriptor.byteOffset, firstDescriptor.bytesFilled);
        }
        ReadableByteStreamControllerShiftPendingPullInto(controller);
      }
      function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
        const maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
        const maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
        let totalBytesToCopyRemaining = maxBytesToCopy;
        let ready = false;
        const remainderBytes = maxBytesFilled % pullIntoDescriptor.elementSize;
        const maxAlignedBytes = maxBytesFilled - remainderBytes;
        if (maxAlignedBytes >= pullIntoDescriptor.minimumFill) {
          totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
          ready = true;
        }
        const queue = controller._queue;
        while (totalBytesToCopyRemaining > 0) {
          const headOfQueue = queue.peek();
          const bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
          const destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
          CopyDataBlockBytes(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
          if (headOfQueue.byteLength === bytesToCopy) {
            queue.shift();
          } else {
            headOfQueue.byteOffset += bytesToCopy;
            headOfQueue.byteLength -= bytesToCopy;
          }
          controller._queueTotalSize -= bytesToCopy;
          ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
          totalBytesToCopyRemaining -= bytesToCopy;
        }
        return ready;
      }
      function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
        pullIntoDescriptor.bytesFilled += size;
      }
      function ReadableByteStreamControllerHandleQueueDrain(controller) {
        if (controller._queueTotalSize === 0 && controller._closeRequested) {
          ReadableByteStreamControllerClearAlgorithms(controller);
          ReadableStreamClose(controller._controlledReadableByteStream);
        } else {
          ReadableByteStreamControllerCallPullIfNeeded(controller);
        }
      }
      function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
        if (controller._byobRequest === null) {
          return;
        }
        controller._byobRequest._associatedReadableByteStreamController = void 0;
        controller._byobRequest._view = null;
        controller._byobRequest = null;
      }
      function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
        while (controller._pendingPullIntos.length > 0) {
          if (controller._queueTotalSize === 0) {
            return;
          }
          const pullIntoDescriptor = controller._pendingPullIntos.peek();
          if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
            ReadableByteStreamControllerShiftPendingPullInto(controller);
            ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
          }
        }
      }
      function ReadableByteStreamControllerProcessReadRequestsUsingQueue(controller) {
        const reader = controller._controlledReadableByteStream._reader;
        while (reader._readRequests.length > 0) {
          if (controller._queueTotalSize === 0) {
            return;
          }
          const readRequest = reader._readRequests.shift();
          ReadableByteStreamControllerFillReadRequestFromQueue(controller, readRequest);
        }
      }
      function ReadableByteStreamControllerPullInto(controller, view, min, readIntoRequest) {
        const stream = controller._controlledReadableByteStream;
        const ctor = view.constructor;
        const elementSize = arrayBufferViewElementSize(ctor);
        const { byteOffset, byteLength } = view;
        const minimumFill = min * elementSize;
        let buffer;
        try {
          buffer = TransferArrayBuffer(view.buffer);
        } catch (e3) {
          readIntoRequest._errorSteps(e3);
          return;
        }
        const pullIntoDescriptor = {
          buffer,
          bufferByteLength: buffer.byteLength,
          byteOffset,
          byteLength,
          bytesFilled: 0,
          minimumFill,
          elementSize,
          viewConstructor: ctor,
          readerType: "byob"
        };
        if (controller._pendingPullIntos.length > 0) {
          controller._pendingPullIntos.push(pullIntoDescriptor);
          ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
          return;
        }
        if (stream._state === "closed") {
          const emptyView = new ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
          readIntoRequest._closeSteps(emptyView);
          return;
        }
        if (controller._queueTotalSize > 0) {
          if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
            const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
            ReadableByteStreamControllerHandleQueueDrain(controller);
            readIntoRequest._chunkSteps(filledView);
            return;
          }
          if (controller._closeRequested) {
            const e3 = new TypeError("Insufficient bytes to fill elements in the given buffer");
            ReadableByteStreamControllerError(controller, e3);
            readIntoRequest._errorSteps(e3);
            return;
          }
        }
        controller._pendingPullIntos.push(pullIntoDescriptor);
        ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
        ReadableByteStreamControllerCallPullIfNeeded(controller);
      }
      function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
        if (firstDescriptor.readerType === "none") {
          ReadableByteStreamControllerShiftPendingPullInto(controller);
        }
        const stream = controller._controlledReadableByteStream;
        if (ReadableStreamHasBYOBReader(stream)) {
          while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
            const pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
            ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
          }
        }
      }
      function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
        ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
        if (pullIntoDescriptor.readerType === "none") {
          ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue(controller, pullIntoDescriptor);
          ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
          return;
        }
        if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.minimumFill) {
          return;
        }
        ReadableByteStreamControllerShiftPendingPullInto(controller);
        const remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
        if (remainderSize > 0) {
          const end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
          ReadableByteStreamControllerEnqueueClonedChunkToQueue(controller, pullIntoDescriptor.buffer, end - remainderSize, remainderSize);
        }
        pullIntoDescriptor.bytesFilled -= remainderSize;
        ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
        ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
      }
      function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
        const firstDescriptor = controller._pendingPullIntos.peek();
        ReadableByteStreamControllerInvalidateBYOBRequest(controller);
        const state = controller._controlledReadableByteStream._state;
        if (state === "closed") {
          ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor);
        } else {
          ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
        }
        ReadableByteStreamControllerCallPullIfNeeded(controller);
      }
      function ReadableByteStreamControllerShiftPendingPullInto(controller) {
        const descriptor = controller._pendingPullIntos.shift();
        return descriptor;
      }
      function ReadableByteStreamControllerShouldCallPull(controller) {
        const stream = controller._controlledReadableByteStream;
        if (stream._state !== "readable") {
          return false;
        }
        if (controller._closeRequested) {
          return false;
        }
        if (!controller._started) {
          return false;
        }
        if (ReadableStreamHasDefaultReader(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
          return true;
        }
        if (ReadableStreamHasBYOBReader(stream) && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
          return true;
        }
        const desiredSize = ReadableByteStreamControllerGetDesiredSize(controller);
        if (desiredSize > 0) {
          return true;
        }
        return false;
      }
      function ReadableByteStreamControllerClearAlgorithms(controller) {
        controller._pullAlgorithm = void 0;
        controller._cancelAlgorithm = void 0;
      }
      function ReadableByteStreamControllerClose(controller) {
        const stream = controller._controlledReadableByteStream;
        if (controller._closeRequested || stream._state !== "readable") {
          return;
        }
        if (controller._queueTotalSize > 0) {
          controller._closeRequested = true;
          return;
        }
        if (controller._pendingPullIntos.length > 0) {
          const firstPendingPullInto = controller._pendingPullIntos.peek();
          if (firstPendingPullInto.bytesFilled % firstPendingPullInto.elementSize !== 0) {
            const e3 = new TypeError("Insufficient bytes to fill elements in the given buffer");
            ReadableByteStreamControllerError(controller, e3);
            throw e3;
          }
        }
        ReadableByteStreamControllerClearAlgorithms(controller);
        ReadableStreamClose(stream);
      }
      function ReadableByteStreamControllerEnqueue(controller, chunk) {
        const stream = controller._controlledReadableByteStream;
        if (controller._closeRequested || stream._state !== "readable") {
          return;
        }
        const { buffer, byteOffset, byteLength } = chunk;
        if (IsDetachedBuffer(buffer)) {
          throw new TypeError("chunk's buffer is detached and so cannot be enqueued");
        }
        const transferredBuffer = TransferArrayBuffer(buffer);
        if (controller._pendingPullIntos.length > 0) {
          const firstPendingPullInto = controller._pendingPullIntos.peek();
          if (IsDetachedBuffer(firstPendingPullInto.buffer)) {
            throw new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk");
          }
          ReadableByteStreamControllerInvalidateBYOBRequest(controller);
          firstPendingPullInto.buffer = TransferArrayBuffer(firstPendingPullInto.buffer);
          if (firstPendingPullInto.readerType === "none") {
            ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue(controller, firstPendingPullInto);
          }
        }
        if (ReadableStreamHasDefaultReader(stream)) {
          ReadableByteStreamControllerProcessReadRequestsUsingQueue(controller);
          if (ReadableStreamGetNumReadRequests(stream) === 0) {
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
          } else {
            if (controller._pendingPullIntos.length > 0) {
              ReadableByteStreamControllerShiftPendingPullInto(controller);
            }
            const transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
            ReadableStreamFulfillReadRequest(stream, transferredView, false);
          }
        } else if (ReadableStreamHasBYOBReader(stream)) {
          ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
          ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
        } else {
          ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
        }
        ReadableByteStreamControllerCallPullIfNeeded(controller);
      }
      function ReadableByteStreamControllerError(controller, e3) {
        const stream = controller._controlledReadableByteStream;
        if (stream._state !== "readable") {
          return;
        }
        ReadableByteStreamControllerClearPendingPullIntos(controller);
        ResetQueue(controller);
        ReadableByteStreamControllerClearAlgorithms(controller);
        ReadableStreamError(stream, e3);
      }
      function ReadableByteStreamControllerFillReadRequestFromQueue(controller, readRequest) {
        const entry = controller._queue.shift();
        controller._queueTotalSize -= entry.byteLength;
        ReadableByteStreamControllerHandleQueueDrain(controller);
        const view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
        readRequest._chunkSteps(view);
      }
      function ReadableByteStreamControllerGetBYOBRequest(controller) {
        if (controller._byobRequest === null && controller._pendingPullIntos.length > 0) {
          const firstDescriptor = controller._pendingPullIntos.peek();
          const view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
          const byobRequest = Object.create(ReadableStreamBYOBRequest.prototype);
          SetUpReadableStreamBYOBRequest(byobRequest, controller, view);
          controller._byobRequest = byobRequest;
        }
        return controller._byobRequest;
      }
      function ReadableByteStreamControllerGetDesiredSize(controller) {
        const state = controller._controlledReadableByteStream._state;
        if (state === "errored") {
          return null;
        }
        if (state === "closed") {
          return 0;
        }
        return controller._strategyHWM - controller._queueTotalSize;
      }
      function ReadableByteStreamControllerRespond(controller, bytesWritten) {
        const firstDescriptor = controller._pendingPullIntos.peek();
        const state = controller._controlledReadableByteStream._state;
        if (state === "closed") {
          if (bytesWritten !== 0) {
            throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
          }
        } else {
          if (bytesWritten === 0) {
            throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
          }
          if (firstDescriptor.bytesFilled + bytesWritten > firstDescriptor.byteLength) {
            throw new RangeError("bytesWritten out of range");
          }
        }
        firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
        ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
      }
      function ReadableByteStreamControllerRespondWithNewView(controller, view) {
        const firstDescriptor = controller._pendingPullIntos.peek();
        const state = controller._controlledReadableByteStream._state;
        if (state === "closed") {
          if (view.byteLength !== 0) {
            throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
          }
        } else {
          if (view.byteLength === 0) {
            throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
          }
        }
        if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
          throw new RangeError("The region specified by view does not match byobRequest");
        }
        if (firstDescriptor.bufferByteLength !== view.buffer.byteLength) {
          throw new RangeError("The buffer of view has different capacity than byobRequest");
        }
        if (firstDescriptor.bytesFilled + view.byteLength > firstDescriptor.byteLength) {
          throw new RangeError("The region specified by view is larger than byobRequest");
        }
        const viewByteLength = view.byteLength;
        firstDescriptor.buffer = TransferArrayBuffer(view.buffer);
        ReadableByteStreamControllerRespondInternal(controller, viewByteLength);
      }
      function SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize) {
        controller._controlledReadableByteStream = stream;
        controller._pullAgain = false;
        controller._pulling = false;
        controller._byobRequest = null;
        controller._queue = controller._queueTotalSize = void 0;
        ResetQueue(controller);
        controller._closeRequested = false;
        controller._started = false;
        controller._strategyHWM = highWaterMark;
        controller._pullAlgorithm = pullAlgorithm;
        controller._cancelAlgorithm = cancelAlgorithm;
        controller._autoAllocateChunkSize = autoAllocateChunkSize;
        controller._pendingPullIntos = new SimpleQueue();
        stream._readableStreamController = controller;
        const startResult = startAlgorithm();
        uponPromise(promiseResolvedWith(startResult), () => {
          controller._started = true;
          ReadableByteStreamControllerCallPullIfNeeded(controller);
          return null;
        }, (r3) => {
          ReadableByteStreamControllerError(controller, r3);
          return null;
        });
      }
      function SetUpReadableByteStreamControllerFromUnderlyingSource(stream, underlyingByteSource, highWaterMark) {
        const controller = Object.create(ReadableByteStreamController.prototype);
        let startAlgorithm;
        let pullAlgorithm;
        let cancelAlgorithm;
        if (underlyingByteSource.start !== void 0) {
          startAlgorithm = () => underlyingByteSource.start(controller);
        } else {
          startAlgorithm = () => void 0;
        }
        if (underlyingByteSource.pull !== void 0) {
          pullAlgorithm = () => underlyingByteSource.pull(controller);
        } else {
          pullAlgorithm = () => promiseResolvedWith(void 0);
        }
        if (underlyingByteSource.cancel !== void 0) {
          cancelAlgorithm = (reason) => underlyingByteSource.cancel(reason);
        } else {
          cancelAlgorithm = () => promiseResolvedWith(void 0);
        }
        const autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
        if (autoAllocateChunkSize === 0) {
          throw new TypeError("autoAllocateChunkSize must be greater than 0");
        }
        SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize);
      }
      function SetUpReadableStreamBYOBRequest(request, controller, view) {
        request._associatedReadableByteStreamController = controller;
        request._view = view;
      }
      function byobRequestBrandCheckException(name) {
        return new TypeError(`ReadableStreamBYOBRequest.prototype.${name} can only be used on a ReadableStreamBYOBRequest`);
      }
      function byteStreamControllerBrandCheckException(name) {
        return new TypeError(`ReadableByteStreamController.prototype.${name} can only be used on a ReadableByteStreamController`);
      }
      function convertReaderOptions(options, context) {
        assertDictionary(options, context);
        const mode = options === null || options === void 0 ? void 0 : options.mode;
        return {
          mode: mode === void 0 ? void 0 : convertReadableStreamReaderMode(mode, `${context} has member 'mode' that`)
        };
      }
      function convertReadableStreamReaderMode(mode, context) {
        mode = `${mode}`;
        if (mode !== "byob") {
          throw new TypeError(`${context} '${mode}' is not a valid enumeration value for ReadableStreamReaderMode`);
        }
        return mode;
      }
      function convertByobReadOptions(options, context) {
        var _a2;
        assertDictionary(options, context);
        const min = (_a2 = options === null || options === void 0 ? void 0 : options.min) !== null && _a2 !== void 0 ? _a2 : 1;
        return {
          min: convertUnsignedLongLongWithEnforceRange(min, `${context} has member 'min' that`)
        };
      }
      function AcquireReadableStreamBYOBReader(stream) {
        return new ReadableStreamBYOBReader(stream);
      }
      function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
        stream._reader._readIntoRequests.push(readIntoRequest);
      }
      function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
        const reader = stream._reader;
        const readIntoRequest = reader._readIntoRequests.shift();
        if (done) {
          readIntoRequest._closeSteps(chunk);
        } else {
          readIntoRequest._chunkSteps(chunk);
        }
      }
      function ReadableStreamGetNumReadIntoRequests(stream) {
        return stream._reader._readIntoRequests.length;
      }
      function ReadableStreamHasBYOBReader(stream) {
        const reader = stream._reader;
        if (reader === void 0) {
          return false;
        }
        if (!IsReadableStreamBYOBReader(reader)) {
          return false;
        }
        return true;
      }
      class ReadableStreamBYOBReader {
        constructor(stream) {
          assertRequiredArgument(stream, 1, "ReadableStreamBYOBReader");
          assertReadableStream(stream, "First parameter");
          if (IsReadableStreamLocked(stream)) {
            throw new TypeError("This stream has already been locked for exclusive reading by another reader");
          }
          if (!IsReadableByteStreamController(stream._readableStreamController)) {
            throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
          }
          ReadableStreamReaderGenericInitialize(this, stream);
          this._readIntoRequests = new SimpleQueue();
        }
        /**
         * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
         * the reader's lock is released before the stream finishes closing.
         */
        get closed() {
          if (!IsReadableStreamBYOBReader(this)) {
            return promiseRejectedWith(byobReaderBrandCheckException("closed"));
          }
          return this._closedPromise;
        }
        /**
         * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
         */
        cancel(reason = void 0) {
          if (!IsReadableStreamBYOBReader(this)) {
            return promiseRejectedWith(byobReaderBrandCheckException("cancel"));
          }
          if (this._ownerReadableStream === void 0) {
            return promiseRejectedWith(readerLockException("cancel"));
          }
          return ReadableStreamReaderGenericCancel(this, reason);
        }
        read(view, rawOptions = {}) {
          if (!IsReadableStreamBYOBReader(this)) {
            return promiseRejectedWith(byobReaderBrandCheckException("read"));
          }
          if (!ArrayBuffer.isView(view)) {
            return promiseRejectedWith(new TypeError("view must be an array buffer view"));
          }
          if (view.byteLength === 0) {
            return promiseRejectedWith(new TypeError("view must have non-zero byteLength"));
          }
          if (view.buffer.byteLength === 0) {
            return promiseRejectedWith(new TypeError(`view's buffer must have non-zero byteLength`));
          }
          if (IsDetachedBuffer(view.buffer)) {
            return promiseRejectedWith(new TypeError("view's buffer has been detached"));
          }
          let options;
          try {
            options = convertByobReadOptions(rawOptions, "options");
          } catch (e3) {
            return promiseRejectedWith(e3);
          }
          const min = options.min;
          if (min === 0) {
            return promiseRejectedWith(new TypeError("options.min must be greater than 0"));
          }
          if (!isDataView(view)) {
            if (min > view.length) {
              return promiseRejectedWith(new RangeError("options.min must be less than or equal to view's length"));
            }
          } else if (min > view.byteLength) {
            return promiseRejectedWith(new RangeError("options.min must be less than or equal to view's byteLength"));
          }
          if (this._ownerReadableStream === void 0) {
            return promiseRejectedWith(readerLockException("read from"));
          }
          let resolvePromise;
          let rejectPromise;
          const promise = newPromise((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
          });
          const readIntoRequest = {
            _chunkSteps: (chunk) => resolvePromise({ value: chunk, done: false }),
            _closeSteps: (chunk) => resolvePromise({ value: chunk, done: true }),
            _errorSteps: (e3) => rejectPromise(e3)
          };
          ReadableStreamBYOBReaderRead(this, view, min, readIntoRequest);
          return promise;
        }
        /**
         * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
         * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
         * from now on; otherwise, the reader will appear closed.
         *
         * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
         * the reader's {@link ReadableStreamBYOBReader.read | read()} method has not yet been settled. Attempting to
         * do so will throw a `TypeError` and leave the reader locked to the stream.
         */
        releaseLock() {
          if (!IsReadableStreamBYOBReader(this)) {
            throw byobReaderBrandCheckException("releaseLock");
          }
          if (this._ownerReadableStream === void 0) {
            return;
          }
          ReadableStreamBYOBReaderRelease(this);
        }
      }
      Object.defineProperties(ReadableStreamBYOBReader.prototype, {
        cancel: { enumerable: true },
        read: { enumerable: true },
        releaseLock: { enumerable: true },
        closed: { enumerable: true }
      });
      setFunctionName(ReadableStreamBYOBReader.prototype.cancel, "cancel");
      setFunctionName(ReadableStreamBYOBReader.prototype.read, "read");
      setFunctionName(ReadableStreamBYOBReader.prototype.releaseLock, "releaseLock");
      if (typeof Symbol.toStringTag === "symbol") {
        Object.defineProperty(ReadableStreamBYOBReader.prototype, Symbol.toStringTag, {
          value: "ReadableStreamBYOBReader",
          configurable: true
        });
      }
      function IsReadableStreamBYOBReader(x4) {
        if (!typeIsObject(x4)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x4, "_readIntoRequests")) {
          return false;
        }
        return x4 instanceof ReadableStreamBYOBReader;
      }
      function ReadableStreamBYOBReaderRead(reader, view, min, readIntoRequest) {
        const stream = reader._ownerReadableStream;
        stream._disturbed = true;
        if (stream._state === "errored") {
          readIntoRequest._errorSteps(stream._storedError);
        } else {
          ReadableByteStreamControllerPullInto(stream._readableStreamController, view, min, readIntoRequest);
        }
      }
      function ReadableStreamBYOBReaderRelease(reader) {
        ReadableStreamReaderGenericRelease(reader);
        const e3 = new TypeError("Reader was released");
        ReadableStreamBYOBReaderErrorReadIntoRequests(reader, e3);
      }
      function ReadableStreamBYOBReaderErrorReadIntoRequests(reader, e3) {
        const readIntoRequests = reader._readIntoRequests;
        reader._readIntoRequests = new SimpleQueue();
        readIntoRequests.forEach((readIntoRequest) => {
          readIntoRequest._errorSteps(e3);
        });
      }
      function byobReaderBrandCheckException(name) {
        return new TypeError(`ReadableStreamBYOBReader.prototype.${name} can only be used on a ReadableStreamBYOBReader`);
      }
      function ExtractHighWaterMark(strategy, defaultHWM) {
        const { highWaterMark } = strategy;
        if (highWaterMark === void 0) {
          return defaultHWM;
        }
        if (NumberIsNaN(highWaterMark) || highWaterMark < 0) {
          throw new RangeError("Invalid highWaterMark");
        }
        return highWaterMark;
      }
      function ExtractSizeAlgorithm(strategy) {
        const { size } = strategy;
        if (!size) {
          return () => 1;
        }
        return size;
      }
      function convertQueuingStrategy(init, context) {
        assertDictionary(init, context);
        const highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
        const size = init === null || init === void 0 ? void 0 : init.size;
        return {
          highWaterMark: highWaterMark === void 0 ? void 0 : convertUnrestrictedDouble(highWaterMark),
          size: size === void 0 ? void 0 : convertQueuingStrategySize(size, `${context} has member 'size' that`)
        };
      }
      function convertQueuingStrategySize(fn, context) {
        assertFunction(fn, context);
        return (chunk) => convertUnrestrictedDouble(fn(chunk));
      }
      function convertUnderlyingSink(original, context) {
        assertDictionary(original, context);
        const abort = original === null || original === void 0 ? void 0 : original.abort;
        const close = original === null || original === void 0 ? void 0 : original.close;
        const start = original === null || original === void 0 ? void 0 : original.start;
        const type = original === null || original === void 0 ? void 0 : original.type;
        const write = original === null || original === void 0 ? void 0 : original.write;
        return {
          abort: abort === void 0 ? void 0 : convertUnderlyingSinkAbortCallback(abort, original, `${context} has member 'abort' that`),
          close: close === void 0 ? void 0 : convertUnderlyingSinkCloseCallback(close, original, `${context} has member 'close' that`),
          start: start === void 0 ? void 0 : convertUnderlyingSinkStartCallback(start, original, `${context} has member 'start' that`),
          write: write === void 0 ? void 0 : convertUnderlyingSinkWriteCallback(write, original, `${context} has member 'write' that`),
          type
        };
      }
      function convertUnderlyingSinkAbortCallback(fn, original, context) {
        assertFunction(fn, context);
        return (reason) => promiseCall(fn, original, [reason]);
      }
      function convertUnderlyingSinkCloseCallback(fn, original, context) {
        assertFunction(fn, context);
        return () => promiseCall(fn, original, []);
      }
      function convertUnderlyingSinkStartCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => reflectCall(fn, original, [controller]);
      }
      function convertUnderlyingSinkWriteCallback(fn, original, context) {
        assertFunction(fn, context);
        return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
      }
      function assertWritableStream(x4, context) {
        if (!IsWritableStream(x4)) {
          throw new TypeError(`${context} is not a WritableStream.`);
        }
      }
      function isAbortSignal2(value) {
        if (typeof value !== "object" || value === null) {
          return false;
        }
        try {
          return typeof value.aborted === "boolean";
        } catch (_a2) {
          return false;
        }
      }
      const supportsAbortController = typeof AbortController === "function";
      function createAbortController() {
        if (supportsAbortController) {
          return new AbortController();
        }
        return void 0;
      }
      class WritableStream {
        constructor(rawUnderlyingSink = {}, rawStrategy = {}) {
          if (rawUnderlyingSink === void 0) {
            rawUnderlyingSink = null;
          } else {
            assertObject(rawUnderlyingSink, "First parameter");
          }
          const strategy = convertQueuingStrategy(rawStrategy, "Second parameter");
          const underlyingSink = convertUnderlyingSink(rawUnderlyingSink, "First parameter");
          InitializeWritableStream(this);
          const type = underlyingSink.type;
          if (type !== void 0) {
            throw new RangeError("Invalid type is specified");
          }
          const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
          const highWaterMark = ExtractHighWaterMark(strategy, 1);
          SetUpWritableStreamDefaultControllerFromUnderlyingSink(this, underlyingSink, highWaterMark, sizeAlgorithm);
        }
        /**
         * Returns whether or not the writable stream is locked to a writer.
         */
        get locked() {
          if (!IsWritableStream(this)) {
            throw streamBrandCheckException$2("locked");
          }
          return IsWritableStreamLocked(this);
        }
        /**
         * Aborts the stream, signaling that the producer can no longer successfully write to the stream and it is to be
         * immediately moved to an errored state, with any queued-up writes discarded. This will also execute any abort
         * mechanism of the underlying sink.
         *
         * The returned promise will fulfill if the stream shuts down successfully, or reject if the underlying sink signaled
         * that there was an error doing so. Additionally, it will reject with a `TypeError` (without attempting to cancel
         * the stream) if the stream is currently locked.
         */
        abort(reason = void 0) {
          if (!IsWritableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$2("abort"));
          }
          if (IsWritableStreamLocked(this)) {
            return promiseRejectedWith(new TypeError("Cannot abort a stream that already has a writer"));
          }
          return WritableStreamAbort(this, reason);
        }
        /**
         * Closes the stream. The underlying sink will finish processing any previously-written chunks, before invoking its
         * close behavior. During this time any further attempts to write will fail (without erroring the stream).
         *
         * The method returns a promise that will fulfill if all remaining chunks are successfully written and the stream
         * successfully closes, or rejects if an error is encountered during this process. Additionally, it will reject with
         * a `TypeError` (without attempting to cancel the stream) if the stream is currently locked.
         */
        close() {
          if (!IsWritableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$2("close"));
          }
          if (IsWritableStreamLocked(this)) {
            return promiseRejectedWith(new TypeError("Cannot close a stream that already has a writer"));
          }
          if (WritableStreamCloseQueuedOrInFlight(this)) {
            return promiseRejectedWith(new TypeError("Cannot close an already-closing stream"));
          }
          return WritableStreamClose(this);
        }
        /**
         * Creates a {@link WritableStreamDefaultWriter | writer} and locks the stream to the new writer. While the stream
         * is locked, no other writer can be acquired until this one is released.
         *
         * This functionality is especially useful for creating abstractions that desire the ability to write to a stream
         * without interruption or interleaving. By getting a writer for the stream, you can ensure nobody else can write at
         * the same time, which would cause the resulting written data to be unpredictable and probably useless.
         */
        getWriter() {
          if (!IsWritableStream(this)) {
            throw streamBrandCheckException$2("getWriter");
          }
          return AcquireWritableStreamDefaultWriter(this);
        }
      }
      Object.defineProperties(WritableStream.prototype, {
        abort: { enumerable: true },
        close: { enumerable: true },
        getWriter: { enumerable: true },
        locked: { enumerable: true }
      });
      setFunctionName(WritableStream.prototype.abort, "abort");
      setFunctionName(WritableStream.prototype.close, "close");
      setFunctionName(WritableStream.prototype.getWriter, "getWriter");
      if (typeof Symbol.toStringTag === "symbol") {
        Object.defineProperty(WritableStream.prototype, Symbol.toStringTag, {
          value: "WritableStream",
          configurable: true
        });
      }
      function AcquireWritableStreamDefaultWriter(stream) {
        return new WritableStreamDefaultWriter(stream);
      }
      function CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
        const stream = Object.create(WritableStream.prototype);
        InitializeWritableStream(stream);
        const controller = Object.create(WritableStreamDefaultController.prototype);
        SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
        return stream;
      }
      function InitializeWritableStream(stream) {
        stream._state = "writable";
        stream._storedError = void 0;
        stream._writer = void 0;
        stream._writableStreamController = void 0;
        stream._writeRequests = new SimpleQueue();
        stream._inFlightWriteRequest = void 0;
        stream._closeRequest = void 0;
        stream._inFlightCloseRequest = void 0;
        stream._pendingAbortRequest = void 0;
        stream._backpressure = false;
      }
      function IsWritableStream(x4) {
        if (!typeIsObject(x4)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x4, "_writableStreamController")) {
          return false;
        }
        return x4 instanceof WritableStream;
      }
      function IsWritableStreamLocked(stream) {
        if (stream._writer === void 0) {
          return false;
        }
        return true;
      }
      function WritableStreamAbort(stream, reason) {
        var _a2;
        if (stream._state === "closed" || stream._state === "errored") {
          return promiseResolvedWith(void 0);
        }
        stream._writableStreamController._abortReason = reason;
        (_a2 = stream._writableStreamController._abortController) === null || _a2 === void 0 ? void 0 : _a2.abort(reason);
        const state = stream._state;
        if (state === "closed" || state === "errored") {
          return promiseResolvedWith(void 0);
        }
        if (stream._pendingAbortRequest !== void 0) {
          return stream._pendingAbortRequest._promise;
        }
        let wasAlreadyErroring = false;
        if (state === "erroring") {
          wasAlreadyErroring = true;
          reason = void 0;
        }
        const promise = newPromise((resolve, reject) => {
          stream._pendingAbortRequest = {
            _promise: void 0,
            _resolve: resolve,
            _reject: reject,
            _reason: reason,
            _wasAlreadyErroring: wasAlreadyErroring
          };
        });
        stream._pendingAbortRequest._promise = promise;
        if (!wasAlreadyErroring) {
          WritableStreamStartErroring(stream, reason);
        }
        return promise;
      }
      function WritableStreamClose(stream) {
        const state = stream._state;
        if (state === "closed" || state === "errored") {
          return promiseRejectedWith(new TypeError(`The stream (in ${state} state) is not in the writable state and cannot be closed`));
        }
        const promise = newPromise((resolve, reject) => {
          const closeRequest = {
            _resolve: resolve,
            _reject: reject
          };
          stream._closeRequest = closeRequest;
        });
        const writer = stream._writer;
        if (writer !== void 0 && stream._backpressure && state === "writable") {
          defaultWriterReadyPromiseResolve(writer);
        }
        WritableStreamDefaultControllerClose(stream._writableStreamController);
        return promise;
      }
      function WritableStreamAddWriteRequest(stream) {
        const promise = newPromise((resolve, reject) => {
          const writeRequest = {
            _resolve: resolve,
            _reject: reject
          };
          stream._writeRequests.push(writeRequest);
        });
        return promise;
      }
      function WritableStreamDealWithRejection(stream, error) {
        const state = stream._state;
        if (state === "writable") {
          WritableStreamStartErroring(stream, error);
          return;
        }
        WritableStreamFinishErroring(stream);
      }
      function WritableStreamStartErroring(stream, reason) {
        const controller = stream._writableStreamController;
        stream._state = "erroring";
        stream._storedError = reason;
        const writer = stream._writer;
        if (writer !== void 0) {
          WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
        }
        if (!WritableStreamHasOperationMarkedInFlight(stream) && controller._started) {
          WritableStreamFinishErroring(stream);
        }
      }
      function WritableStreamFinishErroring(stream) {
        stream._state = "errored";
        stream._writableStreamController[ErrorSteps]();
        const storedError = stream._storedError;
        stream._writeRequests.forEach((writeRequest) => {
          writeRequest._reject(storedError);
        });
        stream._writeRequests = new SimpleQueue();
        if (stream._pendingAbortRequest === void 0) {
          WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
          return;
        }
        const abortRequest = stream._pendingAbortRequest;
        stream._pendingAbortRequest = void 0;
        if (abortRequest._wasAlreadyErroring) {
          abortRequest._reject(storedError);
          WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
          return;
        }
        const promise = stream._writableStreamController[AbortSteps](abortRequest._reason);
        uponPromise(promise, () => {
          abortRequest._resolve();
          WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
          return null;
        }, (reason) => {
          abortRequest._reject(reason);
          WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
          return null;
        });
      }
      function WritableStreamFinishInFlightWrite(stream) {
        stream._inFlightWriteRequest._resolve(void 0);
        stream._inFlightWriteRequest = void 0;
      }
      function WritableStreamFinishInFlightWriteWithError(stream, error) {
        stream._inFlightWriteRequest._reject(error);
        stream._inFlightWriteRequest = void 0;
        WritableStreamDealWithRejection(stream, error);
      }
      function WritableStreamFinishInFlightClose(stream) {
        stream._inFlightCloseRequest._resolve(void 0);
        stream._inFlightCloseRequest = void 0;
        const state = stream._state;
        if (state === "erroring") {
          stream._storedError = void 0;
          if (stream._pendingAbortRequest !== void 0) {
            stream._pendingAbortRequest._resolve();
            stream._pendingAbortRequest = void 0;
          }
        }
        stream._state = "closed";
        const writer = stream._writer;
        if (writer !== void 0) {
          defaultWriterClosedPromiseResolve(writer);
        }
      }
      function WritableStreamFinishInFlightCloseWithError(stream, error) {
        stream._inFlightCloseRequest._reject(error);
        stream._inFlightCloseRequest = void 0;
        if (stream._pendingAbortRequest !== void 0) {
          stream._pendingAbortRequest._reject(error);
          stream._pendingAbortRequest = void 0;
        }
        WritableStreamDealWithRejection(stream, error);
      }
      function WritableStreamCloseQueuedOrInFlight(stream) {
        if (stream._closeRequest === void 0 && stream._inFlightCloseRequest === void 0) {
          return false;
        }
        return true;
      }
      function WritableStreamHasOperationMarkedInFlight(stream) {
        if (stream._inFlightWriteRequest === void 0 && stream._inFlightCloseRequest === void 0) {
          return false;
        }
        return true;
      }
      function WritableStreamMarkCloseRequestInFlight(stream) {
        stream._inFlightCloseRequest = stream._closeRequest;
        stream._closeRequest = void 0;
      }
      function WritableStreamMarkFirstWriteRequestInFlight(stream) {
        stream._inFlightWriteRequest = stream._writeRequests.shift();
      }
      function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
        if (stream._closeRequest !== void 0) {
          stream._closeRequest._reject(stream._storedError);
          stream._closeRequest = void 0;
        }
        const writer = stream._writer;
        if (writer !== void 0) {
          defaultWriterClosedPromiseReject(writer, stream._storedError);
        }
      }
      function WritableStreamUpdateBackpressure(stream, backpressure) {
        const writer = stream._writer;
        if (writer !== void 0 && backpressure !== stream._backpressure) {
          if (backpressure) {
            defaultWriterReadyPromiseReset(writer);
          } else {
            defaultWriterReadyPromiseResolve(writer);
          }
        }
        stream._backpressure = backpressure;
      }
      class WritableStreamDefaultWriter {
        constructor(stream) {
          assertRequiredArgument(stream, 1, "WritableStreamDefaultWriter");
          assertWritableStream(stream, "First parameter");
          if (IsWritableStreamLocked(stream)) {
            throw new TypeError("This stream has already been locked for exclusive writing by another writer");
          }
          this._ownerWritableStream = stream;
          stream._writer = this;
          const state = stream._state;
          if (state === "writable") {
            if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._backpressure) {
              defaultWriterReadyPromiseInitialize(this);
            } else {
              defaultWriterReadyPromiseInitializeAsResolved(this);
            }
            defaultWriterClosedPromiseInitialize(this);
          } else if (state === "erroring") {
            defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
            defaultWriterClosedPromiseInitialize(this);
          } else if (state === "closed") {
            defaultWriterReadyPromiseInitializeAsResolved(this);
            defaultWriterClosedPromiseInitializeAsResolved(this);
          } else {
            const storedError = stream._storedError;
            defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
            defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
          }
        }
        /**
         * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
         * the writer’s lock is released before the stream finishes closing.
         */
        get closed() {
          if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException("closed"));
          }
          return this._closedPromise;
        }
        /**
         * Returns the desired size to fill the stream’s internal queue. It can be negative, if the queue is over-full.
         * A producer can use this information to determine the right amount of data to write.
         *
         * It will be `null` if the stream cannot be successfully written to (due to either being errored, or having an abort
         * queued up). It will return zero if the stream is closed. And the getter will throw an exception if invoked when
         * the writer’s lock is released.
         */
        get desiredSize() {
          if (!IsWritableStreamDefaultWriter(this)) {
            throw defaultWriterBrandCheckException("desiredSize");
          }
          if (this._ownerWritableStream === void 0) {
            throw defaultWriterLockException("desiredSize");
          }
          return WritableStreamDefaultWriterGetDesiredSize(this);
        }
        /**
         * Returns a promise that will be fulfilled when the desired size to fill the stream’s internal queue transitions
         * from non-positive to positive, signaling that it is no longer applying backpressure. Once the desired size dips
         * back to zero or below, the getter will return a new promise that stays pending until the next transition.
         *
         * If the stream becomes errored or aborted, or the writer’s lock is released, the returned promise will become
         * rejected.
         */
        get ready() {
          if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException("ready"));
          }
          return this._readyPromise;
        }
        /**
         * If the reader is active, behaves the same as {@link WritableStream.abort | stream.abort(reason)}.
         */
        abort(reason = void 0) {
          if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException("abort"));
          }
          if (this._ownerWritableStream === void 0) {
            return promiseRejectedWith(defaultWriterLockException("abort"));
          }
          return WritableStreamDefaultWriterAbort(this, reason);
        }
        /**
         * If the reader is active, behaves the same as {@link WritableStream.close | stream.close()}.
         */
        close() {
          if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException("close"));
          }
          const stream = this._ownerWritableStream;
          if (stream === void 0) {
            return promiseRejectedWith(defaultWriterLockException("close"));
          }
          if (WritableStreamCloseQueuedOrInFlight(stream)) {
            return promiseRejectedWith(new TypeError("Cannot close an already-closing stream"));
          }
          return WritableStreamDefaultWriterClose(this);
        }
        /**
         * Releases the writer’s lock on the corresponding stream. After the lock is released, the writer is no longer active.
         * If the associated stream is errored when the lock is released, the writer will appear errored in the same way from
         * now on; otherwise, the writer will appear closed.
         *
         * Note that the lock can still be released even if some ongoing writes have not yet finished (i.e. even if the
         * promises returned from previous calls to {@link WritableStreamDefaultWriter.write | write()} have not yet settled).
         * It’s not necessary to hold the lock on the writer for the duration of the write; the lock instead simply prevents
         * other producers from writing in an interleaved manner.
         */
        releaseLock() {
          if (!IsWritableStreamDefaultWriter(this)) {
            throw defaultWriterBrandCheckException("releaseLock");
          }
          const stream = this._ownerWritableStream;
          if (stream === void 0) {
            return;
          }
          WritableStreamDefaultWriterRelease(this);
        }
        write(chunk = void 0) {
          if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException("write"));
          }
          if (this._ownerWritableStream === void 0) {
            return promiseRejectedWith(defaultWriterLockException("write to"));
          }
          return WritableStreamDefaultWriterWrite(this, chunk);
        }
      }
      Object.defineProperties(WritableStreamDefaultWriter.prototype, {
        abort: { enumerable: true },
        close: { enumerable: true },
        releaseLock: { enumerable: true },
        write: { enumerable: true },
        closed: { enumerable: true },
        desiredSize: { enumerable: true },
        ready: { enumerable: true }
      });
      setFunctionName(WritableStreamDefaultWriter.prototype.abort, "abort");
      setFunctionName(WritableStreamDefaultWriter.prototype.close, "close");
      setFunctionName(WritableStreamDefaultWriter.prototype.releaseLock, "releaseLock");
      setFunctionName(WritableStreamDefaultWriter.prototype.write, "write");
      if (typeof Symbol.toStringTag === "symbol") {
        Object.defineProperty(WritableStreamDefaultWriter.prototype, Symbol.toStringTag, {
          value: "WritableStreamDefaultWriter",
          configurable: true
        });
      }
      function IsWritableStreamDefaultWriter(x4) {
        if (!typeIsObject(x4)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x4, "_ownerWritableStream")) {
          return false;
        }
        return x4 instanceof WritableStreamDefaultWriter;
      }
      function WritableStreamDefaultWriterAbort(writer, reason) {
        const stream = writer._ownerWritableStream;
        return WritableStreamAbort(stream, reason);
      }
      function WritableStreamDefaultWriterClose(writer) {
        const stream = writer._ownerWritableStream;
        return WritableStreamClose(stream);
      }
      function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
        const stream = writer._ownerWritableStream;
        const state = stream._state;
        if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed") {
          return promiseResolvedWith(void 0);
        }
        if (state === "errored") {
          return promiseRejectedWith(stream._storedError);
        }
        return WritableStreamDefaultWriterClose(writer);
      }
      function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error) {
        if (writer._closedPromiseState === "pending") {
          defaultWriterClosedPromiseReject(writer, error);
        } else {
          defaultWriterClosedPromiseResetToRejected(writer, error);
        }
      }
      function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error) {
        if (writer._readyPromiseState === "pending") {
          defaultWriterReadyPromiseReject(writer, error);
        } else {
          defaultWriterReadyPromiseResetToRejected(writer, error);
        }
      }
      function WritableStreamDefaultWriterGetDesiredSize(writer) {
        const stream = writer._ownerWritableStream;
        const state = stream._state;
        if (state === "errored" || state === "erroring") {
          return null;
        }
        if (state === "closed") {
          return 0;
        }
        return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
      }
      function WritableStreamDefaultWriterRelease(writer) {
        const stream = writer._ownerWritableStream;
        const releasedError = new TypeError(`Writer was released and can no longer be used to monitor the stream's closedness`);
        WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
        WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
        stream._writer = void 0;
        writer._ownerWritableStream = void 0;
      }
      function WritableStreamDefaultWriterWrite(writer, chunk) {
        const stream = writer._ownerWritableStream;
        const controller = stream._writableStreamController;
        const chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
        if (stream !== writer._ownerWritableStream) {
          return promiseRejectedWith(defaultWriterLockException("write to"));
        }
        const state = stream._state;
        if (state === "errored") {
          return promiseRejectedWith(stream._storedError);
        }
        if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed") {
          return promiseRejectedWith(new TypeError("The stream is closing or closed and cannot be written to"));
        }
        if (state === "erroring") {
          return promiseRejectedWith(stream._storedError);
        }
        const promise = WritableStreamAddWriteRequest(stream);
        WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
        return promise;
      }
      const closeSentinel = {};
      class WritableStreamDefaultController {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        /**
         * The reason which was passed to `WritableStream.abort(reason)` when the stream was aborted.
         *
         * @deprecated
         *  This property has been removed from the specification, see https://github.com/whatwg/streams/pull/1177.
         *  Use {@link WritableStreamDefaultController.signal}'s `reason` instead.
         */
        get abortReason() {
          if (!IsWritableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$2("abortReason");
          }
          return this._abortReason;
        }
        /**
         * An `AbortSignal` that can be used to abort the pending write or close operation when the stream is aborted.
         */
        get signal() {
          if (!IsWritableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$2("signal");
          }
          if (this._abortController === void 0) {
            throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
          }
          return this._abortController.signal;
        }
        /**
         * Closes the controlled writable stream, making all future interactions with it fail with the given error `e`.
         *
         * This method is rarely used, since usually it suffices to return a rejected promise from one of the underlying
         * sink's methods. However, it can be useful for suddenly shutting down a stream in response to an event outside the
         * normal lifecycle of interactions with the underlying sink.
         */
        error(e3 = void 0) {
          if (!IsWritableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$2("error");
          }
          const state = this._controlledWritableStream._state;
          if (state !== "writable") {
            return;
          }
          WritableStreamDefaultControllerError(this, e3);
        }
        /** @internal */
        [AbortSteps](reason) {
          const result = this._abortAlgorithm(reason);
          WritableStreamDefaultControllerClearAlgorithms(this);
          return result;
        }
        /** @internal */
        [ErrorSteps]() {
          ResetQueue(this);
        }
      }
      Object.defineProperties(WritableStreamDefaultController.prototype, {
        abortReason: { enumerable: true },
        signal: { enumerable: true },
        error: { enumerable: true }
      });
      if (typeof Symbol.toStringTag === "symbol") {
        Object.defineProperty(WritableStreamDefaultController.prototype, Symbol.toStringTag, {
          value: "WritableStreamDefaultController",
          configurable: true
        });
      }
      function IsWritableStreamDefaultController(x4) {
        if (!typeIsObject(x4)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x4, "_controlledWritableStream")) {
          return false;
        }
        return x4 instanceof WritableStreamDefaultController;
      }
      function SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
        controller._controlledWritableStream = stream;
        stream._writableStreamController = controller;
        controller._queue = void 0;
        controller._queueTotalSize = void 0;
        ResetQueue(controller);
        controller._abortReason = void 0;
        controller._abortController = createAbortController();
        controller._started = false;
        controller._strategySizeAlgorithm = sizeAlgorithm;
        controller._strategyHWM = highWaterMark;
        controller._writeAlgorithm = writeAlgorithm;
        controller._closeAlgorithm = closeAlgorithm;
        controller._abortAlgorithm = abortAlgorithm;
        const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
        WritableStreamUpdateBackpressure(stream, backpressure);
        const startResult = startAlgorithm();
        const startPromise = promiseResolvedWith(startResult);
        uponPromise(startPromise, () => {
          controller._started = true;
          WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
          return null;
        }, (r3) => {
          controller._started = true;
          WritableStreamDealWithRejection(stream, r3);
          return null;
        });
      }
      function SetUpWritableStreamDefaultControllerFromUnderlyingSink(stream, underlyingSink, highWaterMark, sizeAlgorithm) {
        const controller = Object.create(WritableStreamDefaultController.prototype);
        let startAlgorithm;
        let writeAlgorithm;
        let closeAlgorithm;
        let abortAlgorithm;
        if (underlyingSink.start !== void 0) {
          startAlgorithm = () => underlyingSink.start(controller);
        } else {
          startAlgorithm = () => void 0;
        }
        if (underlyingSink.write !== void 0) {
          writeAlgorithm = (chunk) => underlyingSink.write(chunk, controller);
        } else {
          writeAlgorithm = () => promiseResolvedWith(void 0);
        }
        if (underlyingSink.close !== void 0) {
          closeAlgorithm = () => underlyingSink.close();
        } else {
          closeAlgorithm = () => promiseResolvedWith(void 0);
        }
        if (underlyingSink.abort !== void 0) {
          abortAlgorithm = (reason) => underlyingSink.abort(reason);
        } else {
          abortAlgorithm = () => promiseResolvedWith(void 0);
        }
        SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
      }
      function WritableStreamDefaultControllerClearAlgorithms(controller) {
        controller._writeAlgorithm = void 0;
        controller._closeAlgorithm = void 0;
        controller._abortAlgorithm = void 0;
        controller._strategySizeAlgorithm = void 0;
      }
      function WritableStreamDefaultControllerClose(controller) {
        EnqueueValueWithSize(controller, closeSentinel, 0);
        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
      }
      function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
        try {
          return controller._strategySizeAlgorithm(chunk);
        } catch (chunkSizeE) {
          WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
          return 1;
        }
      }
      function WritableStreamDefaultControllerGetDesiredSize(controller) {
        return controller._strategyHWM - controller._queueTotalSize;
      }
      function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
        try {
          EnqueueValueWithSize(controller, chunk, chunkSize);
        } catch (enqueueE) {
          WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
          return;
        }
        const stream = controller._controlledWritableStream;
        if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._state === "writable") {
          const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
          WritableStreamUpdateBackpressure(stream, backpressure);
        }
        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
      }
      function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
        const stream = controller._controlledWritableStream;
        if (!controller._started) {
          return;
        }
        if (stream._inFlightWriteRequest !== void 0) {
          return;
        }
        const state = stream._state;
        if (state === "erroring") {
          WritableStreamFinishErroring(stream);
          return;
        }
        if (controller._queue.length === 0) {
          return;
        }
        const value = PeekQueueValue(controller);
        if (value === closeSentinel) {
          WritableStreamDefaultControllerProcessClose(controller);
        } else {
          WritableStreamDefaultControllerProcessWrite(controller, value);
        }
      }
      function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
        if (controller._controlledWritableStream._state === "writable") {
          WritableStreamDefaultControllerError(controller, error);
        }
      }
      function WritableStreamDefaultControllerProcessClose(controller) {
        const stream = controller._controlledWritableStream;
        WritableStreamMarkCloseRequestInFlight(stream);
        DequeueValue(controller);
        const sinkClosePromise = controller._closeAlgorithm();
        WritableStreamDefaultControllerClearAlgorithms(controller);
        uponPromise(sinkClosePromise, () => {
          WritableStreamFinishInFlightClose(stream);
          return null;
        }, (reason) => {
          WritableStreamFinishInFlightCloseWithError(stream, reason);
          return null;
        });
      }
      function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
        const stream = controller._controlledWritableStream;
        WritableStreamMarkFirstWriteRequestInFlight(stream);
        const sinkWritePromise = controller._writeAlgorithm(chunk);
        uponPromise(sinkWritePromise, () => {
          WritableStreamFinishInFlightWrite(stream);
          const state = stream._state;
          DequeueValue(controller);
          if (!WritableStreamCloseQueuedOrInFlight(stream) && state === "writable") {
            const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
            WritableStreamUpdateBackpressure(stream, backpressure);
          }
          WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
          return null;
        }, (reason) => {
          if (stream._state === "writable") {
            WritableStreamDefaultControllerClearAlgorithms(controller);
          }
          WritableStreamFinishInFlightWriteWithError(stream, reason);
          return null;
        });
      }
      function WritableStreamDefaultControllerGetBackpressure(controller) {
        const desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
        return desiredSize <= 0;
      }
      function WritableStreamDefaultControllerError(controller, error) {
        const stream = controller._controlledWritableStream;
        WritableStreamDefaultControllerClearAlgorithms(controller);
        WritableStreamStartErroring(stream, error);
      }
      function streamBrandCheckException$2(name) {
        return new TypeError(`WritableStream.prototype.${name} can only be used on a WritableStream`);
      }
      function defaultControllerBrandCheckException$2(name) {
        return new TypeError(`WritableStreamDefaultController.prototype.${name} can only be used on a WritableStreamDefaultController`);
      }
      function defaultWriterBrandCheckException(name) {
        return new TypeError(`WritableStreamDefaultWriter.prototype.${name} can only be used on a WritableStreamDefaultWriter`);
      }
      function defaultWriterLockException(name) {
        return new TypeError("Cannot " + name + " a stream using a released writer");
      }
      function defaultWriterClosedPromiseInitialize(writer) {
        writer._closedPromise = newPromise((resolve, reject) => {
          writer._closedPromise_resolve = resolve;
          writer._closedPromise_reject = reject;
          writer._closedPromiseState = "pending";
        });
      }
      function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
        defaultWriterClosedPromiseInitialize(writer);
        defaultWriterClosedPromiseReject(writer, reason);
      }
      function defaultWriterClosedPromiseInitializeAsResolved(writer) {
        defaultWriterClosedPromiseInitialize(writer);
        defaultWriterClosedPromiseResolve(writer);
      }
      function defaultWriterClosedPromiseReject(writer, reason) {
        if (writer._closedPromise_reject === void 0) {
          return;
        }
        setPromiseIsHandledToTrue(writer._closedPromise);
        writer._closedPromise_reject(reason);
        writer._closedPromise_resolve = void 0;
        writer._closedPromise_reject = void 0;
        writer._closedPromiseState = "rejected";
      }
      function defaultWriterClosedPromiseResetToRejected(writer, reason) {
        defaultWriterClosedPromiseInitializeAsRejected(writer, reason);
      }
      function defaultWriterClosedPromiseResolve(writer) {
        if (writer._closedPromise_resolve === void 0) {
          return;
        }
        writer._closedPromise_resolve(void 0);
        writer._closedPromise_resolve = void 0;
        writer._closedPromise_reject = void 0;
        writer._closedPromiseState = "resolved";
      }
      function defaultWriterReadyPromiseInitialize(writer) {
        writer._readyPromise = newPromise((resolve, reject) => {
          writer._readyPromise_resolve = resolve;
          writer._readyPromise_reject = reject;
        });
        writer._readyPromiseState = "pending";
      }
      function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
        defaultWriterReadyPromiseInitialize(writer);
        defaultWriterReadyPromiseReject(writer, reason);
      }
      function defaultWriterReadyPromiseInitializeAsResolved(writer) {
        defaultWriterReadyPromiseInitialize(writer);
        defaultWriterReadyPromiseResolve(writer);
      }
      function defaultWriterReadyPromiseReject(writer, reason) {
        if (writer._readyPromise_reject === void 0) {
          return;
        }
        setPromiseIsHandledToTrue(writer._readyPromise);
        writer._readyPromise_reject(reason);
        writer._readyPromise_resolve = void 0;
        writer._readyPromise_reject = void 0;
        writer._readyPromiseState = "rejected";
      }
      function defaultWriterReadyPromiseReset(writer) {
        defaultWriterReadyPromiseInitialize(writer);
      }
      function defaultWriterReadyPromiseResetToRejected(writer, reason) {
        defaultWriterReadyPromiseInitializeAsRejected(writer, reason);
      }
      function defaultWriterReadyPromiseResolve(writer) {
        if (writer._readyPromise_resolve === void 0) {
          return;
        }
        writer._readyPromise_resolve(void 0);
        writer._readyPromise_resolve = void 0;
        writer._readyPromise_reject = void 0;
        writer._readyPromiseState = "fulfilled";
      }
      function getGlobals() {
        if (typeof globalThis !== "undefined") {
          return globalThis;
        } else if (typeof self !== "undefined") {
          return self;
        } else if (typeof global !== "undefined") {
          return global;
        }
        return void 0;
      }
      const globals = getGlobals();
      function isDOMExceptionConstructor(ctor) {
        if (!(typeof ctor === "function" || typeof ctor === "object")) {
          return false;
        }
        if (ctor.name !== "DOMException") {
          return false;
        }
        try {
          new ctor();
          return true;
        } catch (_a2) {
          return false;
        }
      }
      function getFromGlobal() {
        const ctor = globals === null || globals === void 0 ? void 0 : globals.DOMException;
        return isDOMExceptionConstructor(ctor) ? ctor : void 0;
      }
      function createPolyfill() {
        const ctor = function DOMException3(message2, name) {
          this.message = message2 || "";
          this.name = name || "Error";
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
          }
        };
        setFunctionName(ctor, "DOMException");
        ctor.prototype = Object.create(Error.prototype);
        Object.defineProperty(ctor.prototype, "constructor", { value: ctor, writable: true, configurable: true });
        return ctor;
      }
      const DOMException2 = getFromGlobal() || createPolyfill();
      function ReadableStreamPipeTo(source, dest, preventClose, preventAbort, preventCancel, signal) {
        const reader = AcquireReadableStreamDefaultReader(source);
        const writer = AcquireWritableStreamDefaultWriter(dest);
        source._disturbed = true;
        let shuttingDown = false;
        let currentWrite = promiseResolvedWith(void 0);
        return newPromise((resolve, reject) => {
          let abortAlgorithm;
          if (signal !== void 0) {
            abortAlgorithm = () => {
              const error = signal.reason !== void 0 ? signal.reason : new DOMException2("Aborted", "AbortError");
              const actions = [];
              if (!preventAbort) {
                actions.push(() => {
                  if (dest._state === "writable") {
                    return WritableStreamAbort(dest, error);
                  }
                  return promiseResolvedWith(void 0);
                });
              }
              if (!preventCancel) {
                actions.push(() => {
                  if (source._state === "readable") {
                    return ReadableStreamCancel(source, error);
                  }
                  return promiseResolvedWith(void 0);
                });
              }
              shutdownWithAction(() => Promise.all(actions.map((action) => action())), true, error);
            };
            if (signal.aborted) {
              abortAlgorithm();
              return;
            }
            signal.addEventListener("abort", abortAlgorithm);
          }
          function pipeLoop() {
            return newPromise((resolveLoop, rejectLoop) => {
              function next(done) {
                if (done) {
                  resolveLoop();
                } else {
                  PerformPromiseThen(pipeStep(), next, rejectLoop);
                }
              }
              next(false);
            });
          }
          function pipeStep() {
            if (shuttingDown) {
              return promiseResolvedWith(true);
            }
            return PerformPromiseThen(writer._readyPromise, () => {
              return newPromise((resolveRead, rejectRead) => {
                ReadableStreamDefaultReaderRead(reader, {
                  _chunkSteps: (chunk) => {
                    currentWrite = PerformPromiseThen(WritableStreamDefaultWriterWrite(writer, chunk), void 0, noop2);
                    resolveRead(false);
                  },
                  _closeSteps: () => resolveRead(true),
                  _errorSteps: rejectRead
                });
              });
            });
          }
          isOrBecomesErrored(source, reader._closedPromise, (storedError) => {
            if (!preventAbort) {
              shutdownWithAction(() => WritableStreamAbort(dest, storedError), true, storedError);
            } else {
              shutdown(true, storedError);
            }
            return null;
          });
          isOrBecomesErrored(dest, writer._closedPromise, (storedError) => {
            if (!preventCancel) {
              shutdownWithAction(() => ReadableStreamCancel(source, storedError), true, storedError);
            } else {
              shutdown(true, storedError);
            }
            return null;
          });
          isOrBecomesClosed(source, reader._closedPromise, () => {
            if (!preventClose) {
              shutdownWithAction(() => WritableStreamDefaultWriterCloseWithErrorPropagation(writer));
            } else {
              shutdown();
            }
            return null;
          });
          if (WritableStreamCloseQueuedOrInFlight(dest) || dest._state === "closed") {
            const destClosed = new TypeError("the destination writable stream closed before all data could be piped to it");
            if (!preventCancel) {
              shutdownWithAction(() => ReadableStreamCancel(source, destClosed), true, destClosed);
            } else {
              shutdown(true, destClosed);
            }
          }
          setPromiseIsHandledToTrue(pipeLoop());
          function waitForWritesToFinish() {
            const oldCurrentWrite = currentWrite;
            return PerformPromiseThen(currentWrite, () => oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : void 0);
          }
          function isOrBecomesErrored(stream, promise, action) {
            if (stream._state === "errored") {
              action(stream._storedError);
            } else {
              uponRejection(promise, action);
            }
          }
          function isOrBecomesClosed(stream, promise, action) {
            if (stream._state === "closed") {
              action();
            } else {
              uponFulfillment(promise, action);
            }
          }
          function shutdownWithAction(action, originalIsError, originalError) {
            if (shuttingDown) {
              return;
            }
            shuttingDown = true;
            if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest)) {
              uponFulfillment(waitForWritesToFinish(), doTheRest);
            } else {
              doTheRest();
            }
            function doTheRest() {
              uponPromise(action(), () => finalize(originalIsError, originalError), (newError) => finalize(true, newError));
              return null;
            }
          }
          function shutdown(isError, error) {
            if (shuttingDown) {
              return;
            }
            shuttingDown = true;
            if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest)) {
              uponFulfillment(waitForWritesToFinish(), () => finalize(isError, error));
            } else {
              finalize(isError, error);
            }
          }
          function finalize(isError, error) {
            WritableStreamDefaultWriterRelease(writer);
            ReadableStreamReaderGenericRelease(reader);
            if (signal !== void 0) {
              signal.removeEventListener("abort", abortAlgorithm);
            }
            if (isError) {
              reject(error);
            } else {
              resolve(void 0);
            }
            return null;
          }
        });
      }
      class ReadableStreamDefaultController {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        /**
         * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
         * over-full. An underlying source ought to use this information to determine when and how to apply backpressure.
         */
        get desiredSize() {
          if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1("desiredSize");
          }
          return ReadableStreamDefaultControllerGetDesiredSize(this);
        }
        /**
         * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
         * the stream, but once those are read, the stream will become closed.
         */
        close() {
          if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1("close");
          }
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
            throw new TypeError("The stream is not in a state that permits close");
          }
          ReadableStreamDefaultControllerClose(this);
        }
        enqueue(chunk = void 0) {
          if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1("enqueue");
          }
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
            throw new TypeError("The stream is not in a state that permits enqueue");
          }
          return ReadableStreamDefaultControllerEnqueue(this, chunk);
        }
        /**
         * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
         */
        error(e3 = void 0) {
          if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1("error");
          }
          ReadableStreamDefaultControllerError(this, e3);
        }
        /** @internal */
        [CancelSteps](reason) {
          ResetQueue(this);
          const result = this._cancelAlgorithm(reason);
          ReadableStreamDefaultControllerClearAlgorithms(this);
          return result;
        }
        /** @internal */
        [PullSteps](readRequest) {
          const stream = this._controlledReadableStream;
          if (this._queue.length > 0) {
            const chunk = DequeueValue(this);
            if (this._closeRequested && this._queue.length === 0) {
              ReadableStreamDefaultControllerClearAlgorithms(this);
              ReadableStreamClose(stream);
            } else {
              ReadableStreamDefaultControllerCallPullIfNeeded(this);
            }
            readRequest._chunkSteps(chunk);
          } else {
            ReadableStreamAddReadRequest(stream, readRequest);
            ReadableStreamDefaultControllerCallPullIfNeeded(this);
          }
        }
        /** @internal */
        [ReleaseSteps]() {
        }
      }
      Object.defineProperties(ReadableStreamDefaultController.prototype, {
        close: { enumerable: true },
        enqueue: { enumerable: true },
        error: { enumerable: true },
        desiredSize: { enumerable: true }
      });
      setFunctionName(ReadableStreamDefaultController.prototype.close, "close");
      setFunctionName(ReadableStreamDefaultController.prototype.enqueue, "enqueue");
      setFunctionName(ReadableStreamDefaultController.prototype.error, "error");
      if (typeof Symbol.toStringTag === "symbol") {
        Object.defineProperty(ReadableStreamDefaultController.prototype, Symbol.toStringTag, {
          value: "ReadableStreamDefaultController",
          configurable: true
        });
      }
      function IsReadableStreamDefaultController(x4) {
        if (!typeIsObject(x4)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x4, "_controlledReadableStream")) {
          return false;
        }
        return x4 instanceof ReadableStreamDefaultController;
      }
      function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
        const shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
        if (!shouldPull) {
          return;
        }
        if (controller._pulling) {
          controller._pullAgain = true;
          return;
        }
        controller._pulling = true;
        const pullPromise = controller._pullAlgorithm();
        uponPromise(pullPromise, () => {
          controller._pulling = false;
          if (controller._pullAgain) {
            controller._pullAgain = false;
            ReadableStreamDefaultControllerCallPullIfNeeded(controller);
          }
          return null;
        }, (e3) => {
          ReadableStreamDefaultControllerError(controller, e3);
          return null;
        });
      }
      function ReadableStreamDefaultControllerShouldCallPull(controller) {
        const stream = controller._controlledReadableStream;
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
          return false;
        }
        if (!controller._started) {
          return false;
        }
        if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
          return true;
        }
        const desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
        if (desiredSize > 0) {
          return true;
        }
        return false;
      }
      function ReadableStreamDefaultControllerClearAlgorithms(controller) {
        controller._pullAlgorithm = void 0;
        controller._cancelAlgorithm = void 0;
        controller._strategySizeAlgorithm = void 0;
      }
      function ReadableStreamDefaultControllerClose(controller) {
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
          return;
        }
        const stream = controller._controlledReadableStream;
        controller._closeRequested = true;
        if (controller._queue.length === 0) {
          ReadableStreamDefaultControllerClearAlgorithms(controller);
          ReadableStreamClose(stream);
        }
      }
      function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
          return;
        }
        const stream = controller._controlledReadableStream;
        if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
          ReadableStreamFulfillReadRequest(stream, chunk, false);
        } else {
          let chunkSize;
          try {
            chunkSize = controller._strategySizeAlgorithm(chunk);
          } catch (chunkSizeE) {
            ReadableStreamDefaultControllerError(controller, chunkSizeE);
            throw chunkSizeE;
          }
          try {
            EnqueueValueWithSize(controller, chunk, chunkSize);
          } catch (enqueueE) {
            ReadableStreamDefaultControllerError(controller, enqueueE);
            throw enqueueE;
          }
        }
        ReadableStreamDefaultControllerCallPullIfNeeded(controller);
      }
      function ReadableStreamDefaultControllerError(controller, e3) {
        const stream = controller._controlledReadableStream;
        if (stream._state !== "readable") {
          return;
        }
        ResetQueue(controller);
        ReadableStreamDefaultControllerClearAlgorithms(controller);
        ReadableStreamError(stream, e3);
      }
      function ReadableStreamDefaultControllerGetDesiredSize(controller) {
        const state = controller._controlledReadableStream._state;
        if (state === "errored") {
          return null;
        }
        if (state === "closed") {
          return 0;
        }
        return controller._strategyHWM - controller._queueTotalSize;
      }
      function ReadableStreamDefaultControllerHasBackpressure(controller) {
        if (ReadableStreamDefaultControllerShouldCallPull(controller)) {
          return false;
        }
        return true;
      }
      function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
        const state = controller._controlledReadableStream._state;
        if (!controller._closeRequested && state === "readable") {
          return true;
        }
        return false;
      }
      function SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
        controller._controlledReadableStream = stream;
        controller._queue = void 0;
        controller._queueTotalSize = void 0;
        ResetQueue(controller);
        controller._started = false;
        controller._closeRequested = false;
        controller._pullAgain = false;
        controller._pulling = false;
        controller._strategySizeAlgorithm = sizeAlgorithm;
        controller._strategyHWM = highWaterMark;
        controller._pullAlgorithm = pullAlgorithm;
        controller._cancelAlgorithm = cancelAlgorithm;
        stream._readableStreamController = controller;
        const startResult = startAlgorithm();
        uponPromise(promiseResolvedWith(startResult), () => {
          controller._started = true;
          ReadableStreamDefaultControllerCallPullIfNeeded(controller);
          return null;
        }, (r3) => {
          ReadableStreamDefaultControllerError(controller, r3);
          return null;
        });
      }
      function SetUpReadableStreamDefaultControllerFromUnderlyingSource(stream, underlyingSource, highWaterMark, sizeAlgorithm) {
        const controller = Object.create(ReadableStreamDefaultController.prototype);
        let startAlgorithm;
        let pullAlgorithm;
        let cancelAlgorithm;
        if (underlyingSource.start !== void 0) {
          startAlgorithm = () => underlyingSource.start(controller);
        } else {
          startAlgorithm = () => void 0;
        }
        if (underlyingSource.pull !== void 0) {
          pullAlgorithm = () => underlyingSource.pull(controller);
        } else {
          pullAlgorithm = () => promiseResolvedWith(void 0);
        }
        if (underlyingSource.cancel !== void 0) {
          cancelAlgorithm = (reason) => underlyingSource.cancel(reason);
        } else {
          cancelAlgorithm = () => promiseResolvedWith(void 0);
        }
        SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
      }
      function defaultControllerBrandCheckException$1(name) {
        return new TypeError(`ReadableStreamDefaultController.prototype.${name} can only be used on a ReadableStreamDefaultController`);
      }
      function ReadableStreamTee(stream, cloneForBranch2) {
        if (IsReadableByteStreamController(stream._readableStreamController)) {
          return ReadableByteStreamTee(stream);
        }
        return ReadableStreamDefaultTee(stream);
      }
      function ReadableStreamDefaultTee(stream, cloneForBranch2) {
        const reader = AcquireReadableStreamDefaultReader(stream);
        let reading = false;
        let readAgain = false;
        let canceled1 = false;
        let canceled2 = false;
        let reason1;
        let reason2;
        let branch1;
        let branch2;
        let resolveCancelPromise;
        const cancelPromise = newPromise((resolve) => {
          resolveCancelPromise = resolve;
        });
        function pullAlgorithm() {
          if (reading) {
            readAgain = true;
            return promiseResolvedWith(void 0);
          }
          reading = true;
          const readRequest = {
            _chunkSteps: (chunk) => {
              _queueMicrotask(() => {
                readAgain = false;
                const chunk1 = chunk;
                const chunk2 = chunk;
                if (!canceled1) {
                  ReadableStreamDefaultControllerEnqueue(branch1._readableStreamController, chunk1);
                }
                if (!canceled2) {
                  ReadableStreamDefaultControllerEnqueue(branch2._readableStreamController, chunk2);
                }
                reading = false;
                if (readAgain) {
                  pullAlgorithm();
                }
              });
            },
            _closeSteps: () => {
              reading = false;
              if (!canceled1) {
                ReadableStreamDefaultControllerClose(branch1._readableStreamController);
              }
              if (!canceled2) {
                ReadableStreamDefaultControllerClose(branch2._readableStreamController);
              }
              if (!canceled1 || !canceled2) {
                resolveCancelPromise(void 0);
              }
            },
            _errorSteps: () => {
              reading = false;
            }
          };
          ReadableStreamDefaultReaderRead(reader, readRequest);
          return promiseResolvedWith(void 0);
        }
        function cancel1Algorithm(reason) {
          canceled1 = true;
          reason1 = reason;
          if (canceled2) {
            const compositeReason = CreateArrayFromList([reason1, reason2]);
            const cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
          }
          return cancelPromise;
        }
        function cancel2Algorithm(reason) {
          canceled2 = true;
          reason2 = reason;
          if (canceled1) {
            const compositeReason = CreateArrayFromList([reason1, reason2]);
            const cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
          }
          return cancelPromise;
        }
        function startAlgorithm() {
        }
        branch1 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel1Algorithm);
        branch2 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel2Algorithm);
        uponRejection(reader._closedPromise, (r3) => {
          ReadableStreamDefaultControllerError(branch1._readableStreamController, r3);
          ReadableStreamDefaultControllerError(branch2._readableStreamController, r3);
          if (!canceled1 || !canceled2) {
            resolveCancelPromise(void 0);
          }
          return null;
        });
        return [branch1, branch2];
      }
      function ReadableByteStreamTee(stream) {
        let reader = AcquireReadableStreamDefaultReader(stream);
        let reading = false;
        let readAgainForBranch1 = false;
        let readAgainForBranch2 = false;
        let canceled1 = false;
        let canceled2 = false;
        let reason1;
        let reason2;
        let branch1;
        let branch2;
        let resolveCancelPromise;
        const cancelPromise = newPromise((resolve) => {
          resolveCancelPromise = resolve;
        });
        function forwardReaderError(thisReader) {
          uponRejection(thisReader._closedPromise, (r3) => {
            if (thisReader !== reader) {
              return null;
            }
            ReadableByteStreamControllerError(branch1._readableStreamController, r3);
            ReadableByteStreamControllerError(branch2._readableStreamController, r3);
            if (!canceled1 || !canceled2) {
              resolveCancelPromise(void 0);
            }
            return null;
          });
        }
        function pullWithDefaultReader() {
          if (IsReadableStreamBYOBReader(reader)) {
            ReadableStreamReaderGenericRelease(reader);
            reader = AcquireReadableStreamDefaultReader(stream);
            forwardReaderError(reader);
          }
          const readRequest = {
            _chunkSteps: (chunk) => {
              _queueMicrotask(() => {
                readAgainForBranch1 = false;
                readAgainForBranch2 = false;
                const chunk1 = chunk;
                let chunk2 = chunk;
                if (!canceled1 && !canceled2) {
                  try {
                    chunk2 = CloneAsUint8Array(chunk);
                  } catch (cloneE) {
                    ReadableByteStreamControllerError(branch1._readableStreamController, cloneE);
                    ReadableByteStreamControllerError(branch2._readableStreamController, cloneE);
                    resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                    return;
                  }
                }
                if (!canceled1) {
                  ReadableByteStreamControllerEnqueue(branch1._readableStreamController, chunk1);
                }
                if (!canceled2) {
                  ReadableByteStreamControllerEnqueue(branch2._readableStreamController, chunk2);
                }
                reading = false;
                if (readAgainForBranch1) {
                  pull1Algorithm();
                } else if (readAgainForBranch2) {
                  pull2Algorithm();
                }
              });
            },
            _closeSteps: () => {
              reading = false;
              if (!canceled1) {
                ReadableByteStreamControllerClose(branch1._readableStreamController);
              }
              if (!canceled2) {
                ReadableByteStreamControllerClose(branch2._readableStreamController);
              }
              if (branch1._readableStreamController._pendingPullIntos.length > 0) {
                ReadableByteStreamControllerRespond(branch1._readableStreamController, 0);
              }
              if (branch2._readableStreamController._pendingPullIntos.length > 0) {
                ReadableByteStreamControllerRespond(branch2._readableStreamController, 0);
              }
              if (!canceled1 || !canceled2) {
                resolveCancelPromise(void 0);
              }
            },
            _errorSteps: () => {
              reading = false;
            }
          };
          ReadableStreamDefaultReaderRead(reader, readRequest);
        }
        function pullWithBYOBReader(view, forBranch2) {
          if (IsReadableStreamDefaultReader(reader)) {
            ReadableStreamReaderGenericRelease(reader);
            reader = AcquireReadableStreamBYOBReader(stream);
            forwardReaderError(reader);
          }
          const byobBranch = forBranch2 ? branch2 : branch1;
          const otherBranch = forBranch2 ? branch1 : branch2;
          const readIntoRequest = {
            _chunkSteps: (chunk) => {
              _queueMicrotask(() => {
                readAgainForBranch1 = false;
                readAgainForBranch2 = false;
                const byobCanceled = forBranch2 ? canceled2 : canceled1;
                const otherCanceled = forBranch2 ? canceled1 : canceled2;
                if (!otherCanceled) {
                  let clonedChunk;
                  try {
                    clonedChunk = CloneAsUint8Array(chunk);
                  } catch (cloneE) {
                    ReadableByteStreamControllerError(byobBranch._readableStreamController, cloneE);
                    ReadableByteStreamControllerError(otherBranch._readableStreamController, cloneE);
                    resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                    return;
                  }
                  if (!byobCanceled) {
                    ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                  }
                  ReadableByteStreamControllerEnqueue(otherBranch._readableStreamController, clonedChunk);
                } else if (!byobCanceled) {
                  ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                }
                reading = false;
                if (readAgainForBranch1) {
                  pull1Algorithm();
                } else if (readAgainForBranch2) {
                  pull2Algorithm();
                }
              });
            },
            _closeSteps: (chunk) => {
              reading = false;
              const byobCanceled = forBranch2 ? canceled2 : canceled1;
              const otherCanceled = forBranch2 ? canceled1 : canceled2;
              if (!byobCanceled) {
                ReadableByteStreamControllerClose(byobBranch._readableStreamController);
              }
              if (!otherCanceled) {
                ReadableByteStreamControllerClose(otherBranch._readableStreamController);
              }
              if (chunk !== void 0) {
                if (!byobCanceled) {
                  ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                }
                if (!otherCanceled && otherBranch._readableStreamController._pendingPullIntos.length > 0) {
                  ReadableByteStreamControllerRespond(otherBranch._readableStreamController, 0);
                }
              }
              if (!byobCanceled || !otherCanceled) {
                resolveCancelPromise(void 0);
              }
            },
            _errorSteps: () => {
              reading = false;
            }
          };
          ReadableStreamBYOBReaderRead(reader, view, 1, readIntoRequest);
        }
        function pull1Algorithm() {
          if (reading) {
            readAgainForBranch1 = true;
            return promiseResolvedWith(void 0);
          }
          reading = true;
          const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch1._readableStreamController);
          if (byobRequest === null) {
            pullWithDefaultReader();
          } else {
            pullWithBYOBReader(byobRequest._view, false);
          }
          return promiseResolvedWith(void 0);
        }
        function pull2Algorithm() {
          if (reading) {
            readAgainForBranch2 = true;
            return promiseResolvedWith(void 0);
          }
          reading = true;
          const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch2._readableStreamController);
          if (byobRequest === null) {
            pullWithDefaultReader();
          } else {
            pullWithBYOBReader(byobRequest._view, true);
          }
          return promiseResolvedWith(void 0);
        }
        function cancel1Algorithm(reason) {
          canceled1 = true;
          reason1 = reason;
          if (canceled2) {
            const compositeReason = CreateArrayFromList([reason1, reason2]);
            const cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
          }
          return cancelPromise;
        }
        function cancel2Algorithm(reason) {
          canceled2 = true;
          reason2 = reason;
          if (canceled1) {
            const compositeReason = CreateArrayFromList([reason1, reason2]);
            const cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
          }
          return cancelPromise;
        }
        function startAlgorithm() {
          return;
        }
        branch1 = CreateReadableByteStream(startAlgorithm, pull1Algorithm, cancel1Algorithm);
        branch2 = CreateReadableByteStream(startAlgorithm, pull2Algorithm, cancel2Algorithm);
        forwardReaderError(reader);
        return [branch1, branch2];
      }
      function isReadableStreamLike(stream) {
        return typeIsObject(stream) && typeof stream.getReader !== "undefined";
      }
      function ReadableStreamFrom(source) {
        if (isReadableStreamLike(source)) {
          return ReadableStreamFromDefaultReader(source.getReader());
        }
        return ReadableStreamFromIterable(source);
      }
      function ReadableStreamFromIterable(asyncIterable) {
        let stream;
        const iteratorRecord = GetIterator(asyncIterable, "async");
        const startAlgorithm = noop2;
        function pullAlgorithm() {
          let nextResult;
          try {
            nextResult = IteratorNext(iteratorRecord);
          } catch (e3) {
            return promiseRejectedWith(e3);
          }
          const nextPromise = promiseResolvedWith(nextResult);
          return transformPromiseWith(nextPromise, (iterResult) => {
            if (!typeIsObject(iterResult)) {
              throw new TypeError("The promise returned by the iterator.next() method must fulfill with an object");
            }
            const done = IteratorComplete(iterResult);
            if (done) {
              ReadableStreamDefaultControllerClose(stream._readableStreamController);
            } else {
              const value = IteratorValue(iterResult);
              ReadableStreamDefaultControllerEnqueue(stream._readableStreamController, value);
            }
          });
        }
        function cancelAlgorithm(reason) {
          const iterator = iteratorRecord.iterator;
          let returnMethod;
          try {
            returnMethod = GetMethod(iterator, "return");
          } catch (e3) {
            return promiseRejectedWith(e3);
          }
          if (returnMethod === void 0) {
            return promiseResolvedWith(void 0);
          }
          let returnResult;
          try {
            returnResult = reflectCall(returnMethod, iterator, [reason]);
          } catch (e3) {
            return promiseRejectedWith(e3);
          }
          const returnPromise = promiseResolvedWith(returnResult);
          return transformPromiseWith(returnPromise, (iterResult) => {
            if (!typeIsObject(iterResult)) {
              throw new TypeError("The promise returned by the iterator.return() method must fulfill with an object");
            }
            return void 0;
          });
        }
        stream = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, 0);
        return stream;
      }
      function ReadableStreamFromDefaultReader(reader) {
        let stream;
        const startAlgorithm = noop2;
        function pullAlgorithm() {
          let readPromise;
          try {
            readPromise = reader.read();
          } catch (e3) {
            return promiseRejectedWith(e3);
          }
          return transformPromiseWith(readPromise, (readResult) => {
            if (!typeIsObject(readResult)) {
              throw new TypeError("The promise returned by the reader.read() method must fulfill with an object");
            }
            if (readResult.done) {
              ReadableStreamDefaultControllerClose(stream._readableStreamController);
            } else {
              const value = readResult.value;
              ReadableStreamDefaultControllerEnqueue(stream._readableStreamController, value);
            }
          });
        }
        function cancelAlgorithm(reason) {
          try {
            return promiseResolvedWith(reader.cancel(reason));
          } catch (e3) {
            return promiseRejectedWith(e3);
          }
        }
        stream = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, 0);
        return stream;
      }
      function convertUnderlyingDefaultOrByteSource(source, context) {
        assertDictionary(source, context);
        const original = source;
        const autoAllocateChunkSize = original === null || original === void 0 ? void 0 : original.autoAllocateChunkSize;
        const cancel = original === null || original === void 0 ? void 0 : original.cancel;
        const pull = original === null || original === void 0 ? void 0 : original.pull;
        const start = original === null || original === void 0 ? void 0 : original.start;
        const type = original === null || original === void 0 ? void 0 : original.type;
        return {
          autoAllocateChunkSize: autoAllocateChunkSize === void 0 ? void 0 : convertUnsignedLongLongWithEnforceRange(autoAllocateChunkSize, `${context} has member 'autoAllocateChunkSize' that`),
          cancel: cancel === void 0 ? void 0 : convertUnderlyingSourceCancelCallback(cancel, original, `${context} has member 'cancel' that`),
          pull: pull === void 0 ? void 0 : convertUnderlyingSourcePullCallback(pull, original, `${context} has member 'pull' that`),
          start: start === void 0 ? void 0 : convertUnderlyingSourceStartCallback(start, original, `${context} has member 'start' that`),
          type: type === void 0 ? void 0 : convertReadableStreamType(type, `${context} has member 'type' that`)
        };
      }
      function convertUnderlyingSourceCancelCallback(fn, original, context) {
        assertFunction(fn, context);
        return (reason) => promiseCall(fn, original, [reason]);
      }
      function convertUnderlyingSourcePullCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => promiseCall(fn, original, [controller]);
      }
      function convertUnderlyingSourceStartCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => reflectCall(fn, original, [controller]);
      }
      function convertReadableStreamType(type, context) {
        type = `${type}`;
        if (type !== "bytes") {
          throw new TypeError(`${context} '${type}' is not a valid enumeration value for ReadableStreamType`);
        }
        return type;
      }
      function convertIteratorOptions(options, context) {
        assertDictionary(options, context);
        const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
        return { preventCancel: Boolean(preventCancel) };
      }
      function convertPipeOptions(options, context) {
        assertDictionary(options, context);
        const preventAbort = options === null || options === void 0 ? void 0 : options.preventAbort;
        const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
        const preventClose = options === null || options === void 0 ? void 0 : options.preventClose;
        const signal = options === null || options === void 0 ? void 0 : options.signal;
        if (signal !== void 0) {
          assertAbortSignal(signal, `${context} has member 'signal' that`);
        }
        return {
          preventAbort: Boolean(preventAbort),
          preventCancel: Boolean(preventCancel),
          preventClose: Boolean(preventClose),
          signal
        };
      }
      function assertAbortSignal(signal, context) {
        if (!isAbortSignal2(signal)) {
          throw new TypeError(`${context} is not an AbortSignal.`);
        }
      }
      function convertReadableWritablePair(pair, context) {
        assertDictionary(pair, context);
        const readable = pair === null || pair === void 0 ? void 0 : pair.readable;
        assertRequiredField(readable, "readable", "ReadableWritablePair");
        assertReadableStream(readable, `${context} has member 'readable' that`);
        const writable = pair === null || pair === void 0 ? void 0 : pair.writable;
        assertRequiredField(writable, "writable", "ReadableWritablePair");
        assertWritableStream(writable, `${context} has member 'writable' that`);
        return { readable, writable };
      }
      class ReadableStream2 {
        constructor(rawUnderlyingSource = {}, rawStrategy = {}) {
          if (rawUnderlyingSource === void 0) {
            rawUnderlyingSource = null;
          } else {
            assertObject(rawUnderlyingSource, "First parameter");
          }
          const strategy = convertQueuingStrategy(rawStrategy, "Second parameter");
          const underlyingSource = convertUnderlyingDefaultOrByteSource(rawUnderlyingSource, "First parameter");
          InitializeReadableStream(this);
          if (underlyingSource.type === "bytes") {
            if (strategy.size !== void 0) {
              throw new RangeError("The strategy for a byte stream cannot have a size function");
            }
            const highWaterMark = ExtractHighWaterMark(strategy, 0);
            SetUpReadableByteStreamControllerFromUnderlyingSource(this, underlyingSource, highWaterMark);
          } else {
            const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
            const highWaterMark = ExtractHighWaterMark(strategy, 1);
            SetUpReadableStreamDefaultControllerFromUnderlyingSource(this, underlyingSource, highWaterMark, sizeAlgorithm);
          }
        }
        /**
         * Whether or not the readable stream is locked to a {@link ReadableStreamDefaultReader | reader}.
         */
        get locked() {
          if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1("locked");
          }
          return IsReadableStreamLocked(this);
        }
        /**
         * Cancels the stream, signaling a loss of interest in the stream by a consumer.
         *
         * The supplied `reason` argument will be given to the underlying source's {@link UnderlyingSource.cancel | cancel()}
         * method, which might or might not use it.
         */
        cancel(reason = void 0) {
          if (!IsReadableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$1("cancel"));
          }
          if (IsReadableStreamLocked(this)) {
            return promiseRejectedWith(new TypeError("Cannot cancel a stream that already has a reader"));
          }
          return ReadableStreamCancel(this, reason);
        }
        getReader(rawOptions = void 0) {
          if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1("getReader");
          }
          const options = convertReaderOptions(rawOptions, "First parameter");
          if (options.mode === void 0) {
            return AcquireReadableStreamDefaultReader(this);
          }
          return AcquireReadableStreamBYOBReader(this);
        }
        pipeThrough(rawTransform, rawOptions = {}) {
          if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1("pipeThrough");
          }
          assertRequiredArgument(rawTransform, 1, "pipeThrough");
          const transform = convertReadableWritablePair(rawTransform, "First parameter");
          const options = convertPipeOptions(rawOptions, "Second parameter");
          if (IsReadableStreamLocked(this)) {
            throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
          }
          if (IsWritableStreamLocked(transform.writable)) {
            throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
          }
          const promise = ReadableStreamPipeTo(this, transform.writable, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
          setPromiseIsHandledToTrue(promise);
          return transform.readable;
        }
        pipeTo(destination, rawOptions = {}) {
          if (!IsReadableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$1("pipeTo"));
          }
          if (destination === void 0) {
            return promiseRejectedWith(`Parameter 1 is required in 'pipeTo'.`);
          }
          if (!IsWritableStream(destination)) {
            return promiseRejectedWith(new TypeError(`ReadableStream.prototype.pipeTo's first argument must be a WritableStream`));
          }
          let options;
          try {
            options = convertPipeOptions(rawOptions, "Second parameter");
          } catch (e3) {
            return promiseRejectedWith(e3);
          }
          if (IsReadableStreamLocked(this)) {
            return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"));
          }
          if (IsWritableStreamLocked(destination)) {
            return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"));
          }
          return ReadableStreamPipeTo(this, destination, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
        }
        /**
         * Tees this readable stream, returning a two-element array containing the two resulting branches as
         * new {@link ReadableStream} instances.
         *
         * Teeing a stream will lock it, preventing any other consumer from acquiring a reader.
         * To cancel the stream, cancel both of the resulting branches; a composite cancellation reason will then be
         * propagated to the stream's underlying source.
         *
         * Note that the chunks seen in each branch will be the same object. If the chunks are not immutable,
         * this could allow interference between the two branches.
         */
        tee() {
          if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1("tee");
          }
          const branches = ReadableStreamTee(this);
          return CreateArrayFromList(branches);
        }
        values(rawOptions = void 0) {
          if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1("values");
          }
          const options = convertIteratorOptions(rawOptions, "First parameter");
          return AcquireReadableStreamAsyncIterator(this, options.preventCancel);
        }
        [SymbolAsyncIterator](options) {
          return this.values(options);
        }
        /**
         * Creates a new ReadableStream wrapping the provided iterable or async iterable.
         *
         * This can be used to adapt various kinds of objects into a readable stream,
         * such as an array, an async generator, or a Node.js readable stream.
         */
        static from(asyncIterable) {
          return ReadableStreamFrom(asyncIterable);
        }
      }
      Object.defineProperties(ReadableStream2, {
        from: { enumerable: true }
      });
      Object.defineProperties(ReadableStream2.prototype, {
        cancel: { enumerable: true },
        getReader: { enumerable: true },
        pipeThrough: { enumerable: true },
        pipeTo: { enumerable: true },
        tee: { enumerable: true },
        values: { enumerable: true },
        locked: { enumerable: true }
      });
      setFunctionName(ReadableStream2.from, "from");
      setFunctionName(ReadableStream2.prototype.cancel, "cancel");
      setFunctionName(ReadableStream2.prototype.getReader, "getReader");
      setFunctionName(ReadableStream2.prototype.pipeThrough, "pipeThrough");
      setFunctionName(ReadableStream2.prototype.pipeTo, "pipeTo");
      setFunctionName(ReadableStream2.prototype.tee, "tee");
      setFunctionName(ReadableStream2.prototype.values, "values");
      if (typeof Symbol.toStringTag === "symbol") {
        Object.defineProperty(ReadableStream2.prototype, Symbol.toStringTag, {
          value: "ReadableStream",
          configurable: true
        });
      }
      Object.defineProperty(ReadableStream2.prototype, SymbolAsyncIterator, {
        value: ReadableStream2.prototype.values,
        writable: true,
        configurable: true
      });
      function CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
        const stream = Object.create(ReadableStream2.prototype);
        InitializeReadableStream(stream);
        const controller = Object.create(ReadableStreamDefaultController.prototype);
        SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
        return stream;
      }
      function CreateReadableByteStream(startAlgorithm, pullAlgorithm, cancelAlgorithm) {
        const stream = Object.create(ReadableStream2.prototype);
        InitializeReadableStream(stream);
        const controller = Object.create(ReadableByteStreamController.prototype);
        SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, 0, void 0);
        return stream;
      }
      function InitializeReadableStream(stream) {
        stream._state = "readable";
        stream._reader = void 0;
        stream._storedError = void 0;
        stream._disturbed = false;
      }
      function IsReadableStream(x4) {
        if (!typeIsObject(x4)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x4, "_readableStreamController")) {
          return false;
        }
        return x4 instanceof ReadableStream2;
      }
      function IsReadableStreamLocked(stream) {
        if (stream._reader === void 0) {
          return false;
        }
        return true;
      }
      function ReadableStreamCancel(stream, reason) {
        stream._disturbed = true;
        if (stream._state === "closed") {
          return promiseResolvedWith(void 0);
        }
        if (stream._state === "errored") {
          return promiseRejectedWith(stream._storedError);
        }
        ReadableStreamClose(stream);
        const reader = stream._reader;
        if (reader !== void 0 && IsReadableStreamBYOBReader(reader)) {
          const readIntoRequests = reader._readIntoRequests;
          reader._readIntoRequests = new SimpleQueue();
          readIntoRequests.forEach((readIntoRequest) => {
            readIntoRequest._closeSteps(void 0);
          });
        }
        const sourceCancelPromise = stream._readableStreamController[CancelSteps](reason);
        return transformPromiseWith(sourceCancelPromise, noop2);
      }
      function ReadableStreamClose(stream) {
        stream._state = "closed";
        const reader = stream._reader;
        if (reader === void 0) {
          return;
        }
        defaultReaderClosedPromiseResolve(reader);
        if (IsReadableStreamDefaultReader(reader)) {
          const readRequests = reader._readRequests;
          reader._readRequests = new SimpleQueue();
          readRequests.forEach((readRequest) => {
            readRequest._closeSteps();
          });
        }
      }
      function ReadableStreamError(stream, e3) {
        stream._state = "errored";
        stream._storedError = e3;
        const reader = stream._reader;
        if (reader === void 0) {
          return;
        }
        defaultReaderClosedPromiseReject(reader, e3);
        if (IsReadableStreamDefaultReader(reader)) {
          ReadableStreamDefaultReaderErrorReadRequests(reader, e3);
        } else {
          ReadableStreamBYOBReaderErrorReadIntoRequests(reader, e3);
        }
      }
      function streamBrandCheckException$1(name) {
        return new TypeError(`ReadableStream.prototype.${name} can only be used on a ReadableStream`);
      }
      function convertQueuingStrategyInit(init, context) {
        assertDictionary(init, context);
        const highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
        assertRequiredField(highWaterMark, "highWaterMark", "QueuingStrategyInit");
        return {
          highWaterMark: convertUnrestrictedDouble(highWaterMark)
        };
      }
      const byteLengthSizeFunction = (chunk) => {
        return chunk.byteLength;
      };
      setFunctionName(byteLengthSizeFunction, "size");
      class ByteLengthQueuingStrategy {
        constructor(options) {
          assertRequiredArgument(options, 1, "ByteLengthQueuingStrategy");
          options = convertQueuingStrategyInit(options, "First parameter");
          this._byteLengthQueuingStrategyHighWaterMark = options.highWaterMark;
        }
        /**
         * Returns the high water mark provided to the constructor.
         */
        get highWaterMark() {
          if (!IsByteLengthQueuingStrategy(this)) {
            throw byteLengthBrandCheckException("highWaterMark");
          }
          return this._byteLengthQueuingStrategyHighWaterMark;
        }
        /**
         * Measures the size of `chunk` by returning the value of its `byteLength` property.
         */
        get size() {
          if (!IsByteLengthQueuingStrategy(this)) {
            throw byteLengthBrandCheckException("size");
          }
          return byteLengthSizeFunction;
        }
      }
      Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
        highWaterMark: { enumerable: true },
        size: { enumerable: true }
      });
      if (typeof Symbol.toStringTag === "symbol") {
        Object.defineProperty(ByteLengthQueuingStrategy.prototype, Symbol.toStringTag, {
          value: "ByteLengthQueuingStrategy",
          configurable: true
        });
      }
      function byteLengthBrandCheckException(name) {
        return new TypeError(`ByteLengthQueuingStrategy.prototype.${name} can only be used on a ByteLengthQueuingStrategy`);
      }
      function IsByteLengthQueuingStrategy(x4) {
        if (!typeIsObject(x4)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x4, "_byteLengthQueuingStrategyHighWaterMark")) {
          return false;
        }
        return x4 instanceof ByteLengthQueuingStrategy;
      }
      const countSizeFunction = () => {
        return 1;
      };
      setFunctionName(countSizeFunction, "size");
      class CountQueuingStrategy {
        constructor(options) {
          assertRequiredArgument(options, 1, "CountQueuingStrategy");
          options = convertQueuingStrategyInit(options, "First parameter");
          this._countQueuingStrategyHighWaterMark = options.highWaterMark;
        }
        /**
         * Returns the high water mark provided to the constructor.
         */
        get highWaterMark() {
          if (!IsCountQueuingStrategy(this)) {
            throw countBrandCheckException("highWaterMark");
          }
          return this._countQueuingStrategyHighWaterMark;
        }
        /**
         * Measures the size of `chunk` by always returning 1.
         * This ensures that the total queue size is a count of the number of chunks in the queue.
         */
        get size() {
          if (!IsCountQueuingStrategy(this)) {
            throw countBrandCheckException("size");
          }
          return countSizeFunction;
        }
      }
      Object.defineProperties(CountQueuingStrategy.prototype, {
        highWaterMark: { enumerable: true },
        size: { enumerable: true }
      });
      if (typeof Symbol.toStringTag === "symbol") {
        Object.defineProperty(CountQueuingStrategy.prototype, Symbol.toStringTag, {
          value: "CountQueuingStrategy",
          configurable: true
        });
      }
      function countBrandCheckException(name) {
        return new TypeError(`CountQueuingStrategy.prototype.${name} can only be used on a CountQueuingStrategy`);
      }
      function IsCountQueuingStrategy(x4) {
        if (!typeIsObject(x4)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x4, "_countQueuingStrategyHighWaterMark")) {
          return false;
        }
        return x4 instanceof CountQueuingStrategy;
      }
      function convertTransformer(original, context) {
        assertDictionary(original, context);
        const cancel = original === null || original === void 0 ? void 0 : original.cancel;
        const flush = original === null || original === void 0 ? void 0 : original.flush;
        const readableType = original === null || original === void 0 ? void 0 : original.readableType;
        const start = original === null || original === void 0 ? void 0 : original.start;
        const transform = original === null || original === void 0 ? void 0 : original.transform;
        const writableType = original === null || original === void 0 ? void 0 : original.writableType;
        return {
          cancel: cancel === void 0 ? void 0 : convertTransformerCancelCallback(cancel, original, `${context} has member 'cancel' that`),
          flush: flush === void 0 ? void 0 : convertTransformerFlushCallback(flush, original, `${context} has member 'flush' that`),
          readableType,
          start: start === void 0 ? void 0 : convertTransformerStartCallback(start, original, `${context} has member 'start' that`),
          transform: transform === void 0 ? void 0 : convertTransformerTransformCallback(transform, original, `${context} has member 'transform' that`),
          writableType
        };
      }
      function convertTransformerFlushCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => promiseCall(fn, original, [controller]);
      }
      function convertTransformerStartCallback(fn, original, context) {
        assertFunction(fn, context);
        return (controller) => reflectCall(fn, original, [controller]);
      }
      function convertTransformerTransformCallback(fn, original, context) {
        assertFunction(fn, context);
        return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
      }
      function convertTransformerCancelCallback(fn, original, context) {
        assertFunction(fn, context);
        return (reason) => promiseCall(fn, original, [reason]);
      }
      class TransformStream {
        constructor(rawTransformer = {}, rawWritableStrategy = {}, rawReadableStrategy = {}) {
          if (rawTransformer === void 0) {
            rawTransformer = null;
          }
          const writableStrategy = convertQueuingStrategy(rawWritableStrategy, "Second parameter");
          const readableStrategy = convertQueuingStrategy(rawReadableStrategy, "Third parameter");
          const transformer = convertTransformer(rawTransformer, "First parameter");
          if (transformer.readableType !== void 0) {
            throw new RangeError("Invalid readableType specified");
          }
          if (transformer.writableType !== void 0) {
            throw new RangeError("Invalid writableType specified");
          }
          const readableHighWaterMark = ExtractHighWaterMark(readableStrategy, 0);
          const readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy);
          const writableHighWaterMark = ExtractHighWaterMark(writableStrategy, 1);
          const writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy);
          let startPromise_resolve;
          const startPromise = newPromise((resolve) => {
            startPromise_resolve = resolve;
          });
          InitializeTransformStream(this, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
          SetUpTransformStreamDefaultControllerFromTransformer(this, transformer);
          if (transformer.start !== void 0) {
            startPromise_resolve(transformer.start(this._transformStreamController));
          } else {
            startPromise_resolve(void 0);
          }
        }
        /**
         * The readable side of the transform stream.
         */
        get readable() {
          if (!IsTransformStream(this)) {
            throw streamBrandCheckException("readable");
          }
          return this._readable;
        }
        /**
         * The writable side of the transform stream.
         */
        get writable() {
          if (!IsTransformStream(this)) {
            throw streamBrandCheckException("writable");
          }
          return this._writable;
        }
      }
      Object.defineProperties(TransformStream.prototype, {
        readable: { enumerable: true },
        writable: { enumerable: true }
      });
      if (typeof Symbol.toStringTag === "symbol") {
        Object.defineProperty(TransformStream.prototype, Symbol.toStringTag, {
          value: "TransformStream",
          configurable: true
        });
      }
      function InitializeTransformStream(stream, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm) {
        function startAlgorithm() {
          return startPromise;
        }
        function writeAlgorithm(chunk) {
          return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk);
        }
        function abortAlgorithm(reason) {
          return TransformStreamDefaultSinkAbortAlgorithm(stream, reason);
        }
        function closeAlgorithm() {
          return TransformStreamDefaultSinkCloseAlgorithm(stream);
        }
        stream._writable = CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, writableHighWaterMark, writableSizeAlgorithm);
        function pullAlgorithm() {
          return TransformStreamDefaultSourcePullAlgorithm(stream);
        }
        function cancelAlgorithm(reason) {
          return TransformStreamDefaultSourceCancelAlgorithm(stream, reason);
        }
        stream._readable = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
        stream._backpressure = void 0;
        stream._backpressureChangePromise = void 0;
        stream._backpressureChangePromise_resolve = void 0;
        TransformStreamSetBackpressure(stream, true);
        stream._transformStreamController = void 0;
      }
      function IsTransformStream(x4) {
        if (!typeIsObject(x4)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x4, "_transformStreamController")) {
          return false;
        }
        return x4 instanceof TransformStream;
      }
      function TransformStreamError(stream, e3) {
        ReadableStreamDefaultControllerError(stream._readable._readableStreamController, e3);
        TransformStreamErrorWritableAndUnblockWrite(stream, e3);
      }
      function TransformStreamErrorWritableAndUnblockWrite(stream, e3) {
        TransformStreamDefaultControllerClearAlgorithms(stream._transformStreamController);
        WritableStreamDefaultControllerErrorIfNeeded(stream._writable._writableStreamController, e3);
        TransformStreamUnblockWrite(stream);
      }
      function TransformStreamUnblockWrite(stream) {
        if (stream._backpressure) {
          TransformStreamSetBackpressure(stream, false);
        }
      }
      function TransformStreamSetBackpressure(stream, backpressure) {
        if (stream._backpressureChangePromise !== void 0) {
          stream._backpressureChangePromise_resolve();
        }
        stream._backpressureChangePromise = newPromise((resolve) => {
          stream._backpressureChangePromise_resolve = resolve;
        });
        stream._backpressure = backpressure;
      }
      class TransformStreamDefaultController {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        /**
         * Returns the desired size to fill the readable side’s internal queue. It can be negative, if the queue is over-full.
         */
        get desiredSize() {
          if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException("desiredSize");
          }
          const readableController = this._controlledTransformStream._readable._readableStreamController;
          return ReadableStreamDefaultControllerGetDesiredSize(readableController);
        }
        enqueue(chunk = void 0) {
          if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException("enqueue");
          }
          TransformStreamDefaultControllerEnqueue(this, chunk);
        }
        /**
         * Errors both the readable side and the writable side of the controlled transform stream, making all future
         * interactions with it fail with the given error `e`. Any chunks queued for transformation will be discarded.
         */
        error(reason = void 0) {
          if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException("error");
          }
          TransformStreamDefaultControllerError(this, reason);
        }
        /**
         * Closes the readable side and errors the writable side of the controlled transform stream. This is useful when the
         * transformer only needs to consume a portion of the chunks written to the writable side.
         */
        terminate() {
          if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException("terminate");
          }
          TransformStreamDefaultControllerTerminate(this);
        }
      }
      Object.defineProperties(TransformStreamDefaultController.prototype, {
        enqueue: { enumerable: true },
        error: { enumerable: true },
        terminate: { enumerable: true },
        desiredSize: { enumerable: true }
      });
      setFunctionName(TransformStreamDefaultController.prototype.enqueue, "enqueue");
      setFunctionName(TransformStreamDefaultController.prototype.error, "error");
      setFunctionName(TransformStreamDefaultController.prototype.terminate, "terminate");
      if (typeof Symbol.toStringTag === "symbol") {
        Object.defineProperty(TransformStreamDefaultController.prototype, Symbol.toStringTag, {
          value: "TransformStreamDefaultController",
          configurable: true
        });
      }
      function IsTransformStreamDefaultController(x4) {
        if (!typeIsObject(x4)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x4, "_controlledTransformStream")) {
          return false;
        }
        return x4 instanceof TransformStreamDefaultController;
      }
      function SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm, cancelAlgorithm) {
        controller._controlledTransformStream = stream;
        stream._transformStreamController = controller;
        controller._transformAlgorithm = transformAlgorithm;
        controller._flushAlgorithm = flushAlgorithm;
        controller._cancelAlgorithm = cancelAlgorithm;
        controller._finishPromise = void 0;
        controller._finishPromise_resolve = void 0;
        controller._finishPromise_reject = void 0;
      }
      function SetUpTransformStreamDefaultControllerFromTransformer(stream, transformer) {
        const controller = Object.create(TransformStreamDefaultController.prototype);
        let transformAlgorithm;
        let flushAlgorithm;
        let cancelAlgorithm;
        if (transformer.transform !== void 0) {
          transformAlgorithm = (chunk) => transformer.transform(chunk, controller);
        } else {
          transformAlgorithm = (chunk) => {
            try {
              TransformStreamDefaultControllerEnqueue(controller, chunk);
              return promiseResolvedWith(void 0);
            } catch (transformResultE) {
              return promiseRejectedWith(transformResultE);
            }
          };
        }
        if (transformer.flush !== void 0) {
          flushAlgorithm = () => transformer.flush(controller);
        } else {
          flushAlgorithm = () => promiseResolvedWith(void 0);
        }
        if (transformer.cancel !== void 0) {
          cancelAlgorithm = (reason) => transformer.cancel(reason);
        } else {
          cancelAlgorithm = () => promiseResolvedWith(void 0);
        }
        SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm, cancelAlgorithm);
      }
      function TransformStreamDefaultControllerClearAlgorithms(controller) {
        controller._transformAlgorithm = void 0;
        controller._flushAlgorithm = void 0;
        controller._cancelAlgorithm = void 0;
      }
      function TransformStreamDefaultControllerEnqueue(controller, chunk) {
        const stream = controller._controlledTransformStream;
        const readableController = stream._readable._readableStreamController;
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(readableController)) {
          throw new TypeError("Readable side is not in a state that permits enqueue");
        }
        try {
          ReadableStreamDefaultControllerEnqueue(readableController, chunk);
        } catch (e3) {
          TransformStreamErrorWritableAndUnblockWrite(stream, e3);
          throw stream._readable._storedError;
        }
        const backpressure = ReadableStreamDefaultControllerHasBackpressure(readableController);
        if (backpressure !== stream._backpressure) {
          TransformStreamSetBackpressure(stream, true);
        }
      }
      function TransformStreamDefaultControllerError(controller, e3) {
        TransformStreamError(controller._controlledTransformStream, e3);
      }
      function TransformStreamDefaultControllerPerformTransform(controller, chunk) {
        const transformPromise = controller._transformAlgorithm(chunk);
        return transformPromiseWith(transformPromise, void 0, (r3) => {
          TransformStreamError(controller._controlledTransformStream, r3);
          throw r3;
        });
      }
      function TransformStreamDefaultControllerTerminate(controller) {
        const stream = controller._controlledTransformStream;
        const readableController = stream._readable._readableStreamController;
        ReadableStreamDefaultControllerClose(readableController);
        const error = new TypeError("TransformStream terminated");
        TransformStreamErrorWritableAndUnblockWrite(stream, error);
      }
      function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
        const controller = stream._transformStreamController;
        if (stream._backpressure) {
          const backpressureChangePromise = stream._backpressureChangePromise;
          return transformPromiseWith(backpressureChangePromise, () => {
            const writable = stream._writable;
            const state = writable._state;
            if (state === "erroring") {
              throw writable._storedError;
            }
            return TransformStreamDefaultControllerPerformTransform(controller, chunk);
          });
        }
        return TransformStreamDefaultControllerPerformTransform(controller, chunk);
      }
      function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
        const controller = stream._transformStreamController;
        if (controller._finishPromise !== void 0) {
          return controller._finishPromise;
        }
        const readable = stream._readable;
        controller._finishPromise = newPromise((resolve, reject) => {
          controller._finishPromise_resolve = resolve;
          controller._finishPromise_reject = reject;
        });
        const cancelPromise = controller._cancelAlgorithm(reason);
        TransformStreamDefaultControllerClearAlgorithms(controller);
        uponPromise(cancelPromise, () => {
          if (readable._state === "errored") {
            defaultControllerFinishPromiseReject(controller, readable._storedError);
          } else {
            ReadableStreamDefaultControllerError(readable._readableStreamController, reason);
            defaultControllerFinishPromiseResolve(controller);
          }
          return null;
        }, (r3) => {
          ReadableStreamDefaultControllerError(readable._readableStreamController, r3);
          defaultControllerFinishPromiseReject(controller, r3);
          return null;
        });
        return controller._finishPromise;
      }
      function TransformStreamDefaultSinkCloseAlgorithm(stream) {
        const controller = stream._transformStreamController;
        if (controller._finishPromise !== void 0) {
          return controller._finishPromise;
        }
        const readable = stream._readable;
        controller._finishPromise = newPromise((resolve, reject) => {
          controller._finishPromise_resolve = resolve;
          controller._finishPromise_reject = reject;
        });
        const flushPromise = controller._flushAlgorithm();
        TransformStreamDefaultControllerClearAlgorithms(controller);
        uponPromise(flushPromise, () => {
          if (readable._state === "errored") {
            defaultControllerFinishPromiseReject(controller, readable._storedError);
          } else {
            ReadableStreamDefaultControllerClose(readable._readableStreamController);
            defaultControllerFinishPromiseResolve(controller);
          }
          return null;
        }, (r3) => {
          ReadableStreamDefaultControllerError(readable._readableStreamController, r3);
          defaultControllerFinishPromiseReject(controller, r3);
          return null;
        });
        return controller._finishPromise;
      }
      function TransformStreamDefaultSourcePullAlgorithm(stream) {
        TransformStreamSetBackpressure(stream, false);
        return stream._backpressureChangePromise;
      }
      function TransformStreamDefaultSourceCancelAlgorithm(stream, reason) {
        const controller = stream._transformStreamController;
        if (controller._finishPromise !== void 0) {
          return controller._finishPromise;
        }
        const writable = stream._writable;
        controller._finishPromise = newPromise((resolve, reject) => {
          controller._finishPromise_resolve = resolve;
          controller._finishPromise_reject = reject;
        });
        const cancelPromise = controller._cancelAlgorithm(reason);
        TransformStreamDefaultControllerClearAlgorithms(controller);
        uponPromise(cancelPromise, () => {
          if (writable._state === "errored") {
            defaultControllerFinishPromiseReject(controller, writable._storedError);
          } else {
            WritableStreamDefaultControllerErrorIfNeeded(writable._writableStreamController, reason);
            TransformStreamUnblockWrite(stream);
            defaultControllerFinishPromiseResolve(controller);
          }
          return null;
        }, (r3) => {
          WritableStreamDefaultControllerErrorIfNeeded(writable._writableStreamController, r3);
          TransformStreamUnblockWrite(stream);
          defaultControllerFinishPromiseReject(controller, r3);
          return null;
        });
        return controller._finishPromise;
      }
      function defaultControllerBrandCheckException(name) {
        return new TypeError(`TransformStreamDefaultController.prototype.${name} can only be used on a TransformStreamDefaultController`);
      }
      function defaultControllerFinishPromiseResolve(controller) {
        if (controller._finishPromise_resolve === void 0) {
          return;
        }
        controller._finishPromise_resolve();
        controller._finishPromise_resolve = void 0;
        controller._finishPromise_reject = void 0;
      }
      function defaultControllerFinishPromiseReject(controller, reason) {
        if (controller._finishPromise_reject === void 0) {
          return;
        }
        setPromiseIsHandledToTrue(controller._finishPromise);
        controller._finishPromise_reject(reason);
        controller._finishPromise_resolve = void 0;
        controller._finishPromise_reject = void 0;
      }
      function streamBrandCheckException(name) {
        return new TypeError(`TransformStream.prototype.${name} can only be used on a TransformStream`);
      }
      exports3.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy;
      exports3.CountQueuingStrategy = CountQueuingStrategy;
      exports3.ReadableByteStreamController = ReadableByteStreamController;
      exports3.ReadableStream = ReadableStream2;
      exports3.ReadableStreamBYOBReader = ReadableStreamBYOBReader;
      exports3.ReadableStreamBYOBRequest = ReadableStreamBYOBRequest;
      exports3.ReadableStreamDefaultController = ReadableStreamDefaultController;
      exports3.ReadableStreamDefaultReader = ReadableStreamDefaultReader;
      exports3.TransformStream = TransformStream;
      exports3.TransformStreamDefaultController = TransformStreamDefaultController;
      exports3.WritableStream = WritableStream;
      exports3.WritableStreamDefaultController = WritableStreamDefaultController;
      exports3.WritableStreamDefaultWriter = WritableStreamDefaultWriter;
    });
  }
});

// asset-input/node_modules/fetch-blob/streams.cjs
var require_streams = __commonJS({
  "asset-input/node_modules/fetch-blob/streams.cjs"() {
    var POOL_SIZE2 = 65536;
    if (!globalThis.ReadableStream) {
      try {
        const process2 = require("node:process");
        const { emitWarning } = process2;
        try {
          process2.emitWarning = () => {
          };
          Object.assign(globalThis, require("node:stream/web"));
          process2.emitWarning = emitWarning;
        } catch (error) {
          process2.emitWarning = emitWarning;
          throw error;
        }
      } catch (error) {
        Object.assign(globalThis, require_ponyfill_es2018());
      }
    }
    try {
      const { Blob: Blob3 } = require("buffer");
      if (Blob3 && !Blob3.prototype.stream) {
        Blob3.prototype.stream = function name(params) {
          let position = 0;
          const blob = this;
          return new ReadableStream({
            type: "bytes",
            async pull(ctrl) {
              const chunk = blob.slice(position, Math.min(blob.size, position + POOL_SIZE2));
              const buffer = await chunk.arrayBuffer();
              position += buffer.byteLength;
              ctrl.enqueue(new Uint8Array(buffer));
              if (position === blob.size) {
                ctrl.close();
              }
            }
          });
        };
      }
    } catch (error) {
    }
  }
});

// asset-input/node_modules/fetch-blob/index.js
async function* toIterator(parts, clone2 = true) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* (
        /** @type {AsyncIterableIterator<Uint8Array>} */
        part.stream()
      );
    } else if (ArrayBuffer.isView(part)) {
      if (clone2) {
        let position = part.byteOffset;
        const end = part.byteOffset + part.byteLength;
        while (position !== end) {
          const size = Math.min(end - position, POOL_SIZE);
          const chunk = part.buffer.slice(position, position + size);
          position += chunk.byteLength;
          yield new Uint8Array(chunk);
        }
      } else {
        yield part;
      }
    } else {
      let position = 0, b2 = (
        /** @type {Blob} */
        part
      );
      while (position !== b2.size) {
        const chunk = b2.slice(position, Math.min(b2.size, position + POOL_SIZE));
        const buffer = await chunk.arrayBuffer();
        position += buffer.byteLength;
        yield new Uint8Array(buffer);
      }
    }
  }
}
var import_streams, POOL_SIZE, _Blob, Blob2, fetch_blob_default;
var init_fetch_blob = __esm({
  "asset-input/node_modules/fetch-blob/index.js"() {
    import_streams = __toESM(require_streams(), 1);
    POOL_SIZE = 65536;
    _Blob = class Blob {
      /** @type {Array.<(Blob|Uint8Array)>} */
      #parts = [];
      #type = "";
      #size = 0;
      #endings = "transparent";
      /**
       * The Blob() constructor returns a new Blob object. The content
       * of the blob consists of the concatenation of the values given
       * in the parameter array.
       *
       * @param {*} blobParts
       * @param {{ type?: string, endings?: string }} [options]
       */
      constructor(blobParts = [], options = {}) {
        if (typeof blobParts !== "object" || blobParts === null) {
          throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
        }
        if (typeof blobParts[Symbol.iterator] !== "function") {
          throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
        }
        if (typeof options !== "object" && typeof options !== "function") {
          throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
        }
        if (options === null) options = {};
        const encoder2 = new TextEncoder();
        for (const element of blobParts) {
          let part;
          if (ArrayBuffer.isView(element)) {
            part = new Uint8Array(element.buffer.slice(element.byteOffset, element.byteOffset + element.byteLength));
          } else if (element instanceof ArrayBuffer) {
            part = new Uint8Array(element.slice(0));
          } else if (element instanceof Blob) {
            part = element;
          } else {
            part = encoder2.encode(`${element}`);
          }
          this.#size += ArrayBuffer.isView(part) ? part.byteLength : part.size;
          this.#parts.push(part);
        }
        this.#endings = `${options.endings === void 0 ? "transparent" : options.endings}`;
        const type = options.type === void 0 ? "" : String(options.type);
        this.#type = /^[\x20-\x7E]*$/.test(type) ? type : "";
      }
      /**
       * The Blob interface's size property returns the
       * size of the Blob in bytes.
       */
      get size() {
        return this.#size;
      }
      /**
       * The type property of a Blob object returns the MIME type of the file.
       */
      get type() {
        return this.#type;
      }
      /**
       * The text() method in the Blob interface returns a Promise
       * that resolves with a string containing the contents of
       * the blob, interpreted as UTF-8.
       *
       * @return {Promise<string>}
       */
      async text() {
        const decoder2 = new TextDecoder();
        let str = "";
        for await (const part of toIterator(this.#parts, false)) {
          str += decoder2.decode(part, { stream: true });
        }
        str += decoder2.decode();
        return str;
      }
      /**
       * The arrayBuffer() method in the Blob interface returns a
       * Promise that resolves with the contents of the blob as
       * binary data contained in an ArrayBuffer.
       *
       * @return {Promise<ArrayBuffer>}
       */
      async arrayBuffer() {
        const data = new Uint8Array(this.size);
        let offset = 0;
        for await (const chunk of toIterator(this.#parts, false)) {
          data.set(chunk, offset);
          offset += chunk.length;
        }
        return data.buffer;
      }
      stream() {
        const it2 = toIterator(this.#parts, true);
        return new globalThis.ReadableStream({
          // @ts-ignore
          type: "bytes",
          async pull(ctrl) {
            const chunk = await it2.next();
            chunk.done ? ctrl.close() : ctrl.enqueue(chunk.value);
          },
          async cancel() {
            await it2.return();
          }
        });
      }
      /**
       * The Blob interface's slice() method creates and returns a
       * new Blob object which contains data from a subset of the
       * blob on which it's called.
       *
       * @param {number} [start]
       * @param {number} [end]
       * @param {string} [type]
       */
      slice(start = 0, end = this.size, type = "") {
        const { size } = this;
        let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
        let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
        const span = Math.max(relativeEnd - relativeStart, 0);
        const parts = this.#parts;
        const blobParts = [];
        let added = 0;
        for (const part of parts) {
          if (added >= span) {
            break;
          }
          const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
          if (relativeStart && size2 <= relativeStart) {
            relativeStart -= size2;
            relativeEnd -= size2;
          } else {
            let chunk;
            if (ArrayBuffer.isView(part)) {
              chunk = part.subarray(relativeStart, Math.min(size2, relativeEnd));
              added += chunk.byteLength;
            } else {
              chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
              added += chunk.size;
            }
            relativeEnd -= size2;
            blobParts.push(chunk);
            relativeStart = 0;
          }
        }
        const blob = new Blob([], { type: String(type).toLowerCase() });
        blob.#size = span;
        blob.#parts = blobParts;
        return blob;
      }
      get [Symbol.toStringTag]() {
        return "Blob";
      }
      static [Symbol.hasInstance](object) {
        return object && typeof object === "object" && typeof object.constructor === "function" && (typeof object.stream === "function" || typeof object.arrayBuffer === "function") && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
      }
    };
    Object.defineProperties(_Blob.prototype, {
      size: { enumerable: true },
      type: { enumerable: true },
      slice: { enumerable: true }
    });
    Blob2 = _Blob;
    fetch_blob_default = Blob2;
  }
});

// asset-input/node_modules/fetch-blob/file.js
var _File, File2, file_default;
var init_file = __esm({
  "asset-input/node_modules/fetch-blob/file.js"() {
    init_fetch_blob();
    _File = class File extends fetch_blob_default {
      #lastModified = 0;
      #name = "";
      /**
       * @param {*[]} fileBits
       * @param {string} fileName
       * @param {{lastModified?: number, type?: string}} options
       */
      // @ts-ignore
      constructor(fileBits, fileName, options = {}) {
        if (arguments.length < 2) {
          throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
        }
        super(fileBits, options);
        if (options === null) options = {};
        const lastModified = options.lastModified === void 0 ? Date.now() : Number(options.lastModified);
        if (!Number.isNaN(lastModified)) {
          this.#lastModified = lastModified;
        }
        this.#name = String(fileName);
      }
      get name() {
        return this.#name;
      }
      get lastModified() {
        return this.#lastModified;
      }
      get [Symbol.toStringTag]() {
        return "File";
      }
      static [Symbol.hasInstance](object) {
        return !!object && object instanceof fetch_blob_default && /^(File)$/.test(object[Symbol.toStringTag]);
      }
    };
    File2 = _File;
    file_default = File2;
  }
});

// asset-input/node_modules/formdata-polyfill/esm.min.js
function formDataToBlob(F3, B3 = fetch_blob_default) {
  var b2 = `${r2()}${r2()}`.replace(/\./g, "").slice(-28).padStart(32, "-"), c3 = [], p2 = `--${b2}\r
Content-Disposition: form-data; name="`;
  F3.forEach((v2, n3) => typeof v2 == "string" ? c3.push(p2 + e2(n3) + `"\r
\r
${v2.replace(/\r(?!\n)|(?<!\r)\n/g, "\r\n")}\r
`) : c3.push(p2 + e2(n3) + `"; filename="${e2(v2.name, 1)}"\r
Content-Type: ${v2.type || "application/octet-stream"}\r
\r
`, v2, "\r\n"));
  c3.push(`--${b2}--`);
  return new B3(c3, { type: "multipart/form-data; boundary=" + b2 });
}
var t4, i2, h2, r2, m2, f2, e2, x3, FormData;
var init_esm_min = __esm({
  "asset-input/node_modules/formdata-polyfill/esm.min.js"() {
    init_fetch_blob();
    init_file();
    ({ toStringTag: t4, iterator: i2, hasInstance: h2 } = Symbol);
    r2 = Math.random;
    m2 = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(",");
    f2 = (a3, b2, c3) => (a3 += "", /^(Blob|File)$/.test(b2 && b2[t4]) ? [(c3 = c3 !== void 0 ? c3 + "" : b2[t4] == "File" ? b2.name : "blob", a3), b2.name !== c3 || b2[t4] == "blob" ? new file_default([b2], c3, b2) : b2] : [a3, b2 + ""]);
    e2 = (c3, f4) => (f4 ? c3 : c3.replace(/\r?\n|\r/g, "\r\n")).replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22");
    x3 = (n3, a3, e3) => {
      if (a3.length < e3) {
        throw new TypeError(`Failed to execute '${n3}' on 'FormData': ${e3} arguments required, but only ${a3.length} present.`);
      }
    };
    FormData = class FormData2 {
      #d = [];
      constructor(...a3) {
        if (a3.length) throw new TypeError(`Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.`);
      }
      get [t4]() {
        return "FormData";
      }
      [i2]() {
        return this.entries();
      }
      static [h2](o) {
        return o && typeof o === "object" && o[t4] === "FormData" && !m2.some((m3) => typeof o[m3] != "function");
      }
      append(...a3) {
        x3("append", arguments, 2);
        this.#d.push(f2(...a3));
      }
      delete(a3) {
        x3("delete", arguments, 1);
        a3 += "";
        this.#d = this.#d.filter(([b2]) => b2 !== a3);
      }
      get(a3) {
        x3("get", arguments, 1);
        a3 += "";
        for (var b2 = this.#d, l2 = b2.length, c3 = 0; c3 < l2; c3++) if (b2[c3][0] === a3) return b2[c3][1];
        return null;
      }
      getAll(a3, b2) {
        x3("getAll", arguments, 1);
        b2 = [];
        a3 += "";
        this.#d.forEach((c3) => c3[0] === a3 && b2.push(c3[1]));
        return b2;
      }
      has(a3) {
        x3("has", arguments, 1);
        a3 += "";
        return this.#d.some((b2) => b2[0] === a3);
      }
      forEach(a3, b2) {
        x3("forEach", arguments, 1);
        for (var [c3, d2] of this) a3.call(b2, d2, c3, this);
      }
      set(...a3) {
        x3("set", arguments, 2);
        var b2 = [], c3 = true;
        a3 = f2(...a3);
        this.#d.forEach((d2) => {
          d2[0] === a3[0] ? c3 && (c3 = !b2.push(a3)) : b2.push(d2);
        });
        c3 && b2.push(a3);
        this.#d = b2;
      }
      *entries() {
        yield* this.#d;
      }
      *keys() {
        for (var [a3] of this) yield a3;
      }
      *values() {
        for (var [, a3] of this) yield a3;
      }
    };
  }
});

// asset-input/node_modules/node-domexception/index.js
var require_node_domexception = __commonJS({
  "asset-input/node_modules/node-domexception/index.js"(exports2, module2) {
    if (!globalThis.DOMException) {
      try {
        const { MessageChannel } = require("worker_threads"), port = new MessageChannel().port1, ab = new ArrayBuffer();
        port.postMessage(ab, [ab, ab]);
      } catch (err) {
        err.constructor.name === "DOMException" && (globalThis.DOMException = err.constructor);
      }
    }
    module2.exports = globalThis.DOMException;
  }
});

// asset-input/node_modules/fetch-blob/from.js
var import_node_fs, import_node_domexception, stat;
var init_from = __esm({
  "asset-input/node_modules/fetch-blob/from.js"() {
    import_node_fs = require("node:fs");
    import_node_domexception = __toESM(require_node_domexception(), 1);
    init_file();
    init_fetch_blob();
    ({ stat } = import_node_fs.promises);
  }
});

// asset-input/node_modules/node-fetch/src/utils/multipart-parser.js
var multipart_parser_exports = {};
__export(multipart_parser_exports, {
  toFormData: () => toFormData
});
function _fileName(headerValue) {
  const m3 = headerValue.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
  if (!m3) {
    return;
  }
  const match = m3[2] || m3[3] || "";
  let filename = match.slice(match.lastIndexOf("\\") + 1);
  filename = filename.replace(/%22/g, '"');
  filename = filename.replace(/&#(\d{4});/g, (m4, code) => {
    return String.fromCharCode(code);
  });
  return filename;
}
async function toFormData(Body2, ct2) {
  if (!/multipart/i.test(ct2)) {
    throw new TypeError("Failed to fetch");
  }
  const m3 = ct2.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
  if (!m3) {
    throw new TypeError("no or bad content-type header, no multipart boundary");
  }
  const parser = new MultipartParser(m3[1] || m3[2]);
  let headerField;
  let headerValue;
  let entryValue;
  let entryName;
  let contentType;
  let filename;
  const entryChunks = [];
  const formData = new FormData();
  const onPartData = (ui8a) => {
    entryValue += decoder2.decode(ui8a, { stream: true });
  };
  const appendToFile = (ui8a) => {
    entryChunks.push(ui8a);
  };
  const appendFileToFormData = () => {
    const file = new file_default(entryChunks, filename, { type: contentType });
    formData.append(entryName, file);
  };
  const appendEntryToFormData = () => {
    formData.append(entryName, entryValue);
  };
  const decoder2 = new TextDecoder("utf-8");
  decoder2.decode();
  parser.onPartBegin = function() {
    parser.onPartData = onPartData;
    parser.onPartEnd = appendEntryToFormData;
    headerField = "";
    headerValue = "";
    entryValue = "";
    entryName = "";
    contentType = "";
    filename = null;
    entryChunks.length = 0;
  };
  parser.onHeaderField = function(ui8a) {
    headerField += decoder2.decode(ui8a, { stream: true });
  };
  parser.onHeaderValue = function(ui8a) {
    headerValue += decoder2.decode(ui8a, { stream: true });
  };
  parser.onHeaderEnd = function() {
    headerValue += decoder2.decode();
    headerField = headerField.toLowerCase();
    if (headerField === "content-disposition") {
      const m4 = headerValue.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);
      if (m4) {
        entryName = m4[2] || m4[3] || "";
      }
      filename = _fileName(headerValue);
      if (filename) {
        parser.onPartData = appendToFile;
        parser.onPartEnd = appendFileToFormData;
      }
    } else if (headerField === "content-type") {
      contentType = headerValue;
    }
    headerValue = "";
    headerField = "";
  };
  for await (const chunk of Body2) {
    parser.write(chunk);
  }
  parser.end();
  return formData;
}
var s, S2, f3, F2, LF, CR, SPACE, HYPHEN, COLON, A3, Z3, lower, noop, MultipartParser;
var init_multipart_parser = __esm({
  "asset-input/node_modules/node-fetch/src/utils/multipart-parser.js"() {
    init_from();
    init_esm_min();
    s = 0;
    S2 = {
      START_BOUNDARY: s++,
      HEADER_FIELD_START: s++,
      HEADER_FIELD: s++,
      HEADER_VALUE_START: s++,
      HEADER_VALUE: s++,
      HEADER_VALUE_ALMOST_DONE: s++,
      HEADERS_ALMOST_DONE: s++,
      PART_DATA_START: s++,
      PART_DATA: s++,
      END: s++
    };
    f3 = 1;
    F2 = {
      PART_BOUNDARY: f3,
      LAST_BOUNDARY: f3 *= 2
    };
    LF = 10;
    CR = 13;
    SPACE = 32;
    HYPHEN = 45;
    COLON = 58;
    A3 = 97;
    Z3 = 122;
    lower = (c3) => c3 | 32;
    noop = () => {
    };
    MultipartParser = class {
      /**
       * @param {string} boundary
       */
      constructor(boundary) {
        this.index = 0;
        this.flags = 0;
        this.onHeaderEnd = noop;
        this.onHeaderField = noop;
        this.onHeadersEnd = noop;
        this.onHeaderValue = noop;
        this.onPartBegin = noop;
        this.onPartData = noop;
        this.onPartEnd = noop;
        this.boundaryChars = {};
        boundary = "\r\n--" + boundary;
        const ui8a = new Uint8Array(boundary.length);
        for (let i3 = 0; i3 < boundary.length; i3++) {
          ui8a[i3] = boundary.charCodeAt(i3);
          this.boundaryChars[ui8a[i3]] = true;
        }
        this.boundary = ui8a;
        this.lookbehind = new Uint8Array(this.boundary.length + 8);
        this.state = S2.START_BOUNDARY;
      }
      /**
       * @param {Uint8Array} data
       */
      write(data) {
        let i3 = 0;
        const length_ = data.length;
        let previousIndex = this.index;
        let { lookbehind, boundary, boundaryChars, index, state, flags } = this;
        const boundaryLength = this.boundary.length;
        const boundaryEnd = boundaryLength - 1;
        const bufferLength = data.length;
        let c3;
        let cl;
        const mark = (name) => {
          this[name + "Mark"] = i3;
        };
        const clear = (name) => {
          delete this[name + "Mark"];
        };
        const callback = (callbackSymbol, start, end, ui8a) => {
          if (start === void 0 || start !== end) {
            this[callbackSymbol](ui8a && ui8a.subarray(start, end));
          }
        };
        const dataCallback = (name, clear2) => {
          const markSymbol = name + "Mark";
          if (!(markSymbol in this)) {
            return;
          }
          if (clear2) {
            callback(name, this[markSymbol], i3, data);
            delete this[markSymbol];
          } else {
            callback(name, this[markSymbol], data.length, data);
            this[markSymbol] = 0;
          }
        };
        for (i3 = 0; i3 < length_; i3++) {
          c3 = data[i3];
          switch (state) {
            case S2.START_BOUNDARY:
              if (index === boundary.length - 2) {
                if (c3 === HYPHEN) {
                  flags |= F2.LAST_BOUNDARY;
                } else if (c3 !== CR) {
                  return;
                }
                index++;
                break;
              } else if (index - 1 === boundary.length - 2) {
                if (flags & F2.LAST_BOUNDARY && c3 === HYPHEN) {
                  state = S2.END;
                  flags = 0;
                } else if (!(flags & F2.LAST_BOUNDARY) && c3 === LF) {
                  index = 0;
                  callback("onPartBegin");
                  state = S2.HEADER_FIELD_START;
                } else {
                  return;
                }
                break;
              }
              if (c3 !== boundary[index + 2]) {
                index = -2;
              }
              if (c3 === boundary[index + 2]) {
                index++;
              }
              break;
            case S2.HEADER_FIELD_START:
              state = S2.HEADER_FIELD;
              mark("onHeaderField");
              index = 0;
            case S2.HEADER_FIELD:
              if (c3 === CR) {
                clear("onHeaderField");
                state = S2.HEADERS_ALMOST_DONE;
                break;
              }
              index++;
              if (c3 === HYPHEN) {
                break;
              }
              if (c3 === COLON) {
                if (index === 1) {
                  return;
                }
                dataCallback("onHeaderField", true);
                state = S2.HEADER_VALUE_START;
                break;
              }
              cl = lower(c3);
              if (cl < A3 || cl > Z3) {
                return;
              }
              break;
            case S2.HEADER_VALUE_START:
              if (c3 === SPACE) {
                break;
              }
              mark("onHeaderValue");
              state = S2.HEADER_VALUE;
            case S2.HEADER_VALUE:
              if (c3 === CR) {
                dataCallback("onHeaderValue", true);
                callback("onHeaderEnd");
                state = S2.HEADER_VALUE_ALMOST_DONE;
              }
              break;
            case S2.HEADER_VALUE_ALMOST_DONE:
              if (c3 !== LF) {
                return;
              }
              state = S2.HEADER_FIELD_START;
              break;
            case S2.HEADERS_ALMOST_DONE:
              if (c3 !== LF) {
                return;
              }
              callback("onHeadersEnd");
              state = S2.PART_DATA_START;
              break;
            case S2.PART_DATA_START:
              state = S2.PART_DATA;
              mark("onPartData");
            case S2.PART_DATA:
              previousIndex = index;
              if (index === 0) {
                i3 += boundaryEnd;
                while (i3 < bufferLength && !(data[i3] in boundaryChars)) {
                  i3 += boundaryLength;
                }
                i3 -= boundaryEnd;
                c3 = data[i3];
              }
              if (index < boundary.length) {
                if (boundary[index] === c3) {
                  if (index === 0) {
                    dataCallback("onPartData", true);
                  }
                  index++;
                } else {
                  index = 0;
                }
              } else if (index === boundary.length) {
                index++;
                if (c3 === CR) {
                  flags |= F2.PART_BOUNDARY;
                } else if (c3 === HYPHEN) {
                  flags |= F2.LAST_BOUNDARY;
                } else {
                  index = 0;
                }
              } else if (index - 1 === boundary.length) {
                if (flags & F2.PART_BOUNDARY) {
                  index = 0;
                  if (c3 === LF) {
                    flags &= ~F2.PART_BOUNDARY;
                    callback("onPartEnd");
                    callback("onPartBegin");
                    state = S2.HEADER_FIELD_START;
                    break;
                  }
                } else if (flags & F2.LAST_BOUNDARY) {
                  if (c3 === HYPHEN) {
                    callback("onPartEnd");
                    state = S2.END;
                    flags = 0;
                  } else {
                    index = 0;
                  }
                } else {
                  index = 0;
                }
              }
              if (index > 0) {
                lookbehind[index - 1] = c3;
              } else if (previousIndex > 0) {
                const _lookbehind = new Uint8Array(lookbehind.buffer, lookbehind.byteOffset, lookbehind.byteLength);
                callback("onPartData", 0, previousIndex, _lookbehind);
                previousIndex = 0;
                mark("onPartData");
                i3--;
              }
              break;
            case S2.END:
              break;
            default:
              throw new Error(`Unexpected state entered: ${state}`);
          }
        }
        dataCallback("onHeaderField");
        dataCallback("onHeaderValue");
        dataCallback("onPartData");
        this.index = index;
        this.state = state;
        this.flags = flags;
      }
      end() {
        if (this.state === S2.HEADER_FIELD_START && this.index === 0 || this.state === S2.PART_DATA && this.index === this.boundary.length) {
          this.onPartEnd();
        } else if (this.state !== S2.END) {
          throw new Error("MultipartParser.end(): stream ended unexpectedly");
        }
      }
    };
  }
});

// asset-input/node_modules/rate-limiter-flexible/lib/RateLimiterAbstract.js
var require_RateLimiterAbstract = __commonJS({
  "asset-input/node_modules/rate-limiter-flexible/lib/RateLimiterAbstract.js"(exports2, module2) {
    module2.exports = class RateLimiterAbstract {
      /**
       *
       * @param opts Object Defaults {
       *   points: 4, // Number of points
       *   duration: 1, // Per seconds
       *   blockDuration: 0, // Block if consumed more than points in current duration for blockDuration seconds
       *   execEvenly: false, // Execute allowed actions evenly over duration
       *   execEvenlyMinDelayMs: duration * 1000 / points, // ms, works with execEvenly=true option
       *   keyPrefix: 'rlflx',
       * }
       */
      constructor(opts = {}) {
        this.points = opts.points;
        this.duration = opts.duration;
        this.blockDuration = opts.blockDuration;
        this.execEvenly = opts.execEvenly;
        this.execEvenlyMinDelayMs = opts.execEvenlyMinDelayMs;
        this.keyPrefix = opts.keyPrefix;
      }
      get points() {
        return this._points;
      }
      set points(value) {
        this._points = value >= 0 ? value : 4;
      }
      get duration() {
        return this._duration;
      }
      set duration(value) {
        this._duration = typeof value === "undefined" ? 1 : value;
      }
      get msDuration() {
        return this.duration * 1e3;
      }
      get blockDuration() {
        return this._blockDuration;
      }
      set blockDuration(value) {
        this._blockDuration = typeof value === "undefined" ? 0 : value;
      }
      get msBlockDuration() {
        return this.blockDuration * 1e3;
      }
      get execEvenly() {
        return this._execEvenly;
      }
      set execEvenly(value) {
        this._execEvenly = typeof value === "undefined" ? false : Boolean(value);
      }
      get execEvenlyMinDelayMs() {
        return this._execEvenlyMinDelayMs;
      }
      set execEvenlyMinDelayMs(value) {
        this._execEvenlyMinDelayMs = typeof value === "undefined" ? Math.ceil(this.msDuration / this.points) : value;
      }
      get keyPrefix() {
        return this._keyPrefix;
      }
      set keyPrefix(value) {
        if (typeof value === "undefined") {
          value = "rlflx";
        }
        if (typeof value !== "string") {
          throw new Error("keyPrefix must be string");
        }
        this._keyPrefix = value;
      }
      _getKeySecDuration(options = {}) {
        return options && options.customDuration >= 0 ? options.customDuration : this.duration;
      }
      getKey(key) {
        return this.keyPrefix.length > 0 ? `${this.keyPrefix}:${key}` : key;
      }
      parseKey(rlKey) {
        return rlKey.substring(this.keyPrefix.length);
      }
      consume() {
        throw new Error("You have to implement the method 'consume'!");
      }
      penalty() {
        throw new Error("You have to implement the method 'penalty'!");
      }
      reward() {
        throw new Error("You have to implement the method 'reward'!");
      }
      get() {
        throw new Error("You have to implement the method 'get'!");
      }
      set() {
        throw new Error("You have to implement the method 'set'!");
      }
      block() {
        throw new Error("You have to implement the method 'block'!");
      }
      delete() {
        throw new Error("You have to implement the method 'delete'!");
      }
    };
  }
});

// asset-input/node_modules/rate-limiter-flexible/lib/component/BlockedKeys/BlockedKeys.js
var require_BlockedKeys = __commonJS({
  "asset-input/node_modules/rate-limiter-flexible/lib/component/BlockedKeys/BlockedKeys.js"(exports2, module2) {
    module2.exports = class BlockedKeys {
      constructor() {
        this._keys = {};
        this._addedKeysAmount = 0;
      }
      collectExpired() {
        const now = Date.now();
        Object.keys(this._keys).forEach((key) => {
          if (this._keys[key] <= now) {
            delete this._keys[key];
          }
        });
        this._addedKeysAmount = Object.keys(this._keys).length;
      }
      /**
       * Add new blocked key
       *
       * @param key String
       * @param sec Number
       */
      add(key, sec) {
        this.addMs(key, sec * 1e3);
      }
      /**
       * Add new blocked key for ms
       *
       * @param key String
       * @param ms Number
       */
      addMs(key, ms2) {
        this._keys[key] = Date.now() + ms2;
        this._addedKeysAmount++;
        if (this._addedKeysAmount > 999) {
          this.collectExpired();
        }
      }
      /**
       * 0 means not blocked
       *
       * @param key
       * @returns {number}
       */
      msBeforeExpire(key) {
        const expire = this._keys[key];
        if (expire && expire >= Date.now()) {
          this.collectExpired();
          const now = Date.now();
          return expire >= now ? expire - now : 0;
        }
        return 0;
      }
      /**
       * If key is not given, delete all data in memory
       * 
       * @param {string|undefined} key
       */
      delete(key) {
        if (key) {
          delete this._keys[key];
        } else {
          Object.keys(this._keys).forEach((key2) => {
            delete this._keys[key2];
          });
        }
      }
    };
  }
});

// asset-input/node_modules/rate-limiter-flexible/lib/component/BlockedKeys/index.js
var require_BlockedKeys2 = __commonJS({
  "asset-input/node_modules/rate-limiter-flexible/lib/component/BlockedKeys/index.js"(exports2, module2) {
    var BlockedKeys = require_BlockedKeys();
    module2.exports = BlockedKeys;
  }
});

// asset-input/node_modules/rate-limiter-flexible/lib/RateLimiterRes.js
var require_RateLimiterRes = __commonJS({
  "asset-input/node_modules/rate-limiter-flexible/lib/RateLimiterRes.js"(exports2, module2) {
    module2.exports = class RateLimiterRes {
      constructor(remainingPoints, msBeforeNext, consumedPoints, isFirstInDuration) {
        this.remainingPoints = typeof remainingPoints === "undefined" ? 0 : remainingPoints;
        this.msBeforeNext = typeof msBeforeNext === "undefined" ? 0 : msBeforeNext;
        this.consumedPoints = typeof consumedPoints === "undefined" ? 0 : consumedPoints;
        this.isFirstInDuration = typeof isFirstInDuration === "undefined" ? false : isFirstInDuration;
      }
      get msBeforeNext() {
        return this._msBeforeNext;
      }
      set msBeforeNext(ms2) {
        this._msBeforeNext = ms2;
        return this;
      }
      get remainingPoints() {
        return this._remainingPoints;
      }
      set remainingPoints(p2) {
        this._remainingPoints = p2;
        return this;
      }
      get consumedPoints() {
        return this._consumedPoints;
      }
      set consumedPoints(p2) {
        this._consumedPoints = p2;
        return this;
      }
      get isFirstInDuration() {
        return this._isFirstInDuration;
      }
      set isFirstInDuration(value) {
        this._isFirstInDuration = Boolean(value);
      }
      _getDecoratedProperties() {
        return {
          remainingPoints: this.remainingPoints,
          msBeforeNext: this.msBeforeNext,
          consumedPoints: this.consumedPoints,
          isFirstInDuration: this.isFirstInDuration
        };
      }
      [Symbol.for("nodejs.util.inspect.custom")]() {
        return this._getDecoratedProperties();
      }
      toString() {
        return JSON.stringify(this._getDecoratedProperties());
      }
      toJSON() {
        return this._getDecoratedProperties();
      }
    };
  }
});

// asset-input/node_modules/rate-limiter-flexible/lib/RateLimiterStoreAbstract.js
var require_RateLimiterStoreAbstract = __commonJS({
  "asset-input/node_modules/rate-limiter-flexible/lib/RateLimiterStoreAbstract.js"(exports2, module2) {
    var RateLimiterAbstract = require_RateLimiterAbstract();
    var BlockedKeys = require_BlockedKeys2();
    var RateLimiterRes = require_RateLimiterRes();
    module2.exports = class RateLimiterStoreAbstract extends RateLimiterAbstract {
      /**
       *
       * @param opts Object Defaults {
       *   ... see other in RateLimiterAbstract
       *
       *   inMemoryBlockOnConsumed: 40, // Number of points when key is blocked
       *   inMemoryBlockDuration: 10, // Block duration in seconds
       *   insuranceLimiter: RateLimiterAbstract
       * }
       */
      constructor(opts = {}) {
        super(opts);
        this.inMemoryBlockOnConsumed = opts.inMemoryBlockOnConsumed || opts.inmemoryBlockOnConsumed;
        this.inMemoryBlockDuration = opts.inMemoryBlockDuration || opts.inmemoryBlockDuration;
        this.insuranceLimiter = opts.insuranceLimiter;
        this._inMemoryBlockedKeys = new BlockedKeys();
      }
      get client() {
        return this._client;
      }
      set client(value) {
        if (typeof value === "undefined") {
          throw new Error("storeClient is not set");
        }
        this._client = value;
      }
      /**
       * Have to be launched after consume
       * It blocks key and execute evenly depending on result from store
       *
       * It uses _getRateLimiterRes function to prepare RateLimiterRes from store result
       *
       * @param resolve
       * @param reject
       * @param rlKey
       * @param changedPoints
       * @param storeResult
       * @param {Object} options
       * @private
       */
      _afterConsume(resolve, reject, rlKey, changedPoints, storeResult, options = {}) {
        const res = this._getRateLimiterRes(rlKey, changedPoints, storeResult);
        if (this.inMemoryBlockOnConsumed > 0 && !(this.inMemoryBlockDuration > 0) && res.consumedPoints >= this.inMemoryBlockOnConsumed) {
          this._inMemoryBlockedKeys.addMs(rlKey, res.msBeforeNext);
          if (res.consumedPoints > this.points) {
            return reject(res);
          } else {
            return resolve(res);
          }
        } else if (res.consumedPoints > this.points) {
          let blockPromise = Promise.resolve();
          if (this.blockDuration > 0 && res.consumedPoints <= this.points + changedPoints) {
            res.msBeforeNext = this.msBlockDuration;
            blockPromise = this._block(rlKey, res.consumedPoints, this.msBlockDuration, options);
          }
          if (this.inMemoryBlockOnConsumed > 0 && res.consumedPoints >= this.inMemoryBlockOnConsumed) {
            this._inMemoryBlockedKeys.add(rlKey, this.inMemoryBlockDuration);
            res.msBeforeNext = this.msInMemoryBlockDuration;
          }
          blockPromise.then(() => {
            reject(res);
          }).catch((err) => {
            reject(err);
          });
        } else if (this.execEvenly && res.msBeforeNext > 0 && !res.isFirstInDuration) {
          let delay = Math.ceil(res.msBeforeNext / (res.remainingPoints + 2));
          if (delay < this.execEvenlyMinDelayMs) {
            delay = res.consumedPoints * this.execEvenlyMinDelayMs;
          }
          setTimeout(resolve, delay, res);
        } else {
          resolve(res);
        }
      }
      _handleError(err, funcName, resolve, reject, key, data = false, options = {}) {
        if (!(this.insuranceLimiter instanceof RateLimiterAbstract)) {
          reject(err);
        } else {
          this.insuranceLimiter[funcName](key, data, options).then((res) => {
            resolve(res);
          }).catch((res) => {
            reject(res);
          });
        }
      }
      /**
       * @deprecated Use camelCase version
       * @returns {BlockedKeys}
       * @private
       */
      get _inmemoryBlockedKeys() {
        return this._inMemoryBlockedKeys;
      }
      /**
       * @deprecated Use camelCase version
       * @param rlKey
       * @returns {number}
       */
      getInmemoryBlockMsBeforeExpire(rlKey) {
        return this.getInMemoryBlockMsBeforeExpire(rlKey);
      }
      /**
       * @deprecated Use camelCase version
       * @returns {number|number}
       */
      get inmemoryBlockOnConsumed() {
        return this.inMemoryBlockOnConsumed;
      }
      /**
       * @deprecated Use camelCase version
       * @param value
       */
      set inmemoryBlockOnConsumed(value) {
        this.inMemoryBlockOnConsumed = value;
      }
      /**
       * @deprecated Use camelCase version
       * @returns {number|number}
       */
      get inmemoryBlockDuration() {
        return this.inMemoryBlockDuration;
      }
      /**
       * @deprecated Use camelCase version
       * @param value
       */
      set inmemoryBlockDuration(value) {
        this.inMemoryBlockDuration = value;
      }
      /**
       * @deprecated Use camelCase version
       * @returns {number}
       */
      get msInmemoryBlockDuration() {
        return this.inMemoryBlockDuration * 1e3;
      }
      getInMemoryBlockMsBeforeExpire(rlKey) {
        if (this.inMemoryBlockOnConsumed > 0) {
          return this._inMemoryBlockedKeys.msBeforeExpire(rlKey);
        }
        return 0;
      }
      get inMemoryBlockOnConsumed() {
        return this._inMemoryBlockOnConsumed;
      }
      set inMemoryBlockOnConsumed(value) {
        this._inMemoryBlockOnConsumed = value ? parseInt(value) : 0;
        if (this.inMemoryBlockOnConsumed > 0 && this.points > this.inMemoryBlockOnConsumed) {
          throw new Error('inMemoryBlockOnConsumed option must be greater or equal "points" option');
        }
      }
      get inMemoryBlockDuration() {
        return this._inMemoryBlockDuration;
      }
      set inMemoryBlockDuration(value) {
        this._inMemoryBlockDuration = value ? parseInt(value) : 0;
        if (this.inMemoryBlockDuration > 0 && this.inMemoryBlockOnConsumed === 0) {
          throw new Error("inMemoryBlockOnConsumed option must be set up");
        }
      }
      get msInMemoryBlockDuration() {
        return this._inMemoryBlockDuration * 1e3;
      }
      get insuranceLimiter() {
        return this._insuranceLimiter;
      }
      set insuranceLimiter(value) {
        if (typeof value !== "undefined" && !(value instanceof RateLimiterAbstract)) {
          throw new Error("insuranceLimiter must be instance of RateLimiterAbstract");
        }
        this._insuranceLimiter = value;
        if (this._insuranceLimiter) {
          this._insuranceLimiter.blockDuration = this.blockDuration;
          this._insuranceLimiter.execEvenly = this.execEvenly;
        }
      }
      /**
       * Block any key for secDuration seconds
       *
       * @param key
       * @param secDuration
       * @param {Object} options
       *
       * @return Promise<RateLimiterRes>
       */
      block(key, secDuration, options = {}) {
        const msDuration = secDuration * 1e3;
        return this._block(this.getKey(key), this.points + 1, msDuration, options);
      }
      /**
       * Set points by key for any duration
       *
       * @param key
       * @param points
       * @param secDuration
       * @param {Object} options
       *
       * @return Promise<RateLimiterRes>
       */
      set(key, points, secDuration, options = {}) {
        const msDuration = (secDuration >= 0 ? secDuration : this.duration) * 1e3;
        return this._block(this.getKey(key), points, msDuration, options);
      }
      /**
       *
       * @param key
       * @param pointsToConsume
       * @param {Object} options
       * @returns Promise<RateLimiterRes>
       */
      consume(key, pointsToConsume = 1, options = {}) {
        return new Promise((resolve, reject) => {
          const rlKey = this.getKey(key);
          const inMemoryBlockMsBeforeExpire = this.getInMemoryBlockMsBeforeExpire(rlKey);
          if (inMemoryBlockMsBeforeExpire > 0) {
            return reject(new RateLimiterRes(0, inMemoryBlockMsBeforeExpire));
          }
          this._upsert(rlKey, pointsToConsume, this._getKeySecDuration(options) * 1e3, false, options).then((res) => {
            this._afterConsume(resolve, reject, rlKey, pointsToConsume, res);
          }).catch((err) => {
            this._handleError(err, "consume", resolve, reject, key, pointsToConsume, options);
          });
        });
      }
      /**
       *
       * @param key
       * @param points
       * @param {Object} options
       * @returns Promise<RateLimiterRes>
       */
      penalty(key, points = 1, options = {}) {
        const rlKey = this.getKey(key);
        return new Promise((resolve, reject) => {
          this._upsert(rlKey, points, this._getKeySecDuration(options) * 1e3, false, options).then((res) => {
            resolve(this._getRateLimiterRes(rlKey, points, res));
          }).catch((err) => {
            this._handleError(err, "penalty", resolve, reject, key, points, options);
          });
        });
      }
      /**
       *
       * @param key
       * @param points
       * @param {Object} options
       * @returns Promise<RateLimiterRes>
       */
      reward(key, points = 1, options = {}) {
        const rlKey = this.getKey(key);
        return new Promise((resolve, reject) => {
          this._upsert(rlKey, -points, this._getKeySecDuration(options) * 1e3, false, options).then((res) => {
            resolve(this._getRateLimiterRes(rlKey, -points, res));
          }).catch((err) => {
            this._handleError(err, "reward", resolve, reject, key, points, options);
          });
        });
      }
      /**
       *
       * @param key
       * @param {Object} options
       * @returns Promise<RateLimiterRes>|null
       */
      get(key, options = {}) {
        const rlKey = this.getKey(key);
        return new Promise((resolve, reject) => {
          this._get(rlKey, options).then((res) => {
            if (res === null || typeof res === "undefined") {
              resolve(null);
            } else {
              resolve(this._getRateLimiterRes(rlKey, 0, res));
            }
          }).catch((err) => {
            this._handleError(err, "get", resolve, reject, key, options);
          });
        });
      }
      /**
       *
       * @param key
       * @param {Object} options
       * @returns Promise<boolean>
       */
      delete(key, options = {}) {
        const rlKey = this.getKey(key);
        return new Promise((resolve, reject) => {
          this._delete(rlKey, options).then((res) => {
            this._inMemoryBlockedKeys.delete(rlKey);
            resolve(res);
          }).catch((err) => {
            this._handleError(err, "delete", resolve, reject, key, options);
          });
        });
      }
      /**
       * Cleanup keys no-matter expired or not.
       */
      deleteInMemoryBlockedAll() {
        this._inMemoryBlockedKeys.delete();
      }
      /**
       * Get RateLimiterRes object filled depending on storeResult, which specific for exact store
       *
       * @param rlKey
       * @param changedPoints
       * @param storeResult
       * @private
       */
      _getRateLimiterRes(rlKey, changedPoints, storeResult) {
        throw new Error("You have to implement the method '_getRateLimiterRes'!");
      }
      /**
       * Block key for this.msBlockDuration milliseconds
       * Usually, it just prolongs lifetime of key
       *
       * @param rlKey
       * @param initPoints
       * @param msDuration
       * @param {Object} options
       *
       * @return Promise<any>
       */
      _block(rlKey, initPoints, msDuration, options = {}) {
        return new Promise((resolve, reject) => {
          this._upsert(rlKey, initPoints, msDuration, true, options).then(() => {
            resolve(new RateLimiterRes(0, msDuration > 0 ? msDuration : -1, initPoints));
          }).catch((err) => {
            this._handleError(err, "block", resolve, reject, this.parseKey(rlKey), msDuration / 1e3, options);
          });
        });
      }
      /**
       * Have to be implemented in every limiter
       * Resolve with raw result from Store OR null if rlKey is not set
       * or Reject with error
       *
       * @param rlKey
       * @param {Object} options
       * @private
       *
       * @return Promise<any>
       */
      _get(rlKey, options = {}) {
        throw new Error("You have to implement the method '_get'!");
      }
      /**
       * Have to be implemented
       * Resolve with true OR false if rlKey doesn't exist
       * or Reject with error
       *
       * @param rlKey
       * @param {Object} options
       * @private
       *
       * @return Promise<any>
       */
      _delete(rlKey, options = {}) {
        throw new Error("You have to implement the method '_delete'!");
      }
      /**
       * Have to be implemented
       * Resolve with object used for {@link _getRateLimiterRes} to generate {@link RateLimiterRes}
       *
       * @param {string} rlKey
       * @param {number} points
       * @param {number} msDuration
       * @param {boolean} forceExpire
       * @param {Object} options
       * @abstract
       *
       * @return Promise<Object>
       */
      _upsert(rlKey, points, msDuration, forceExpire = false, options = {}) {
        throw new Error("You have to implement the method '_upsert'!");
      }
    };
  }
});

// asset-input/node_modules/rate-limiter-flexible/lib/RateLimiterRedis.js
var require_RateLimiterRedis = __commonJS({
  "asset-input/node_modules/rate-limiter-flexible/lib/RateLimiterRedis.js"(exports2, module2) {
    var RateLimiterStoreAbstract = require_RateLimiterStoreAbstract();
    var RateLimiterRes = require_RateLimiterRes();
    var incrTtlLuaScript = `redis.call('set', KEYS[1], 0, 'EX', ARGV[2], 'NX') local consumed = redis.call('incrby', KEYS[1], ARGV[1]) local ttl = redis.call('pttl', KEYS[1]) if ttl == -1 then   redis.call('expire', KEYS[1], ARGV[2])   ttl = 1000 * ARGV[2] end return {consumed, ttl} `;
    var RateLimiterRedis = class extends RateLimiterStoreAbstract {
      /**
       *
       * @param {Object} opts
       * Defaults {
       *   ... see other in RateLimiterStoreAbstract
       *
       *   redis: RedisClient
       *   rejectIfRedisNotReady: boolean = false - reject / invoke insuranceLimiter immediately when redis connection is not "ready"
       * }
       */
      constructor(opts) {
        super(opts);
        if (opts.redis) {
          this.client = opts.redis;
        } else {
          this.client = opts.storeClient;
        }
        this._rejectIfRedisNotReady = !!opts.rejectIfRedisNotReady;
        if (typeof this.client.defineCommand === "function") {
          this.client.defineCommand("rlflxIncr", {
            numberOfKeys: 1,
            lua: incrTtlLuaScript
          });
        }
      }
      /**
       * Prevent actual redis call if redis connection is not ready
       * Because of different connection state checks for ioredis and node-redis, only this clients would be actually checked.
       * For any other clients all the requests would be passed directly to redis client
       * @return {boolean}
       * @private
       */
      _isRedisReady() {
        if (!this._rejectIfRedisNotReady) {
          return true;
        }
        if (this.client.status && this.client.status !== "ready") {
          return false;
        }
        if (typeof this.client.isReady === "function" && !this.client.isReady()) {
          return false;
        }
        return true;
      }
      _getRateLimiterRes(rlKey, changedPoints, result) {
        let [consumed, resTtlMs] = result;
        if (Array.isArray(consumed)) {
          [, consumed] = consumed;
          [, resTtlMs] = resTtlMs;
        }
        const res = new RateLimiterRes();
        res.consumedPoints = parseInt(consumed);
        res.isFirstInDuration = res.consumedPoints === changedPoints;
        res.remainingPoints = Math.max(this.points - res.consumedPoints, 0);
        res.msBeforeNext = resTtlMs;
        return res;
      }
      _upsert(rlKey, points, msDuration, forceExpire = false) {
        return new Promise((resolve, reject) => {
          if (!this._isRedisReady()) {
            return reject(new Error("Redis connection is not ready"));
          }
          const secDuration = Math.floor(msDuration / 1e3);
          const multi = this.client.multi();
          if (forceExpire) {
            if (secDuration > 0) {
              multi.set(rlKey, points, "EX", secDuration);
            } else {
              multi.set(rlKey, points);
            }
            multi.pttl(rlKey).exec((err, res) => {
              if (err) {
                return reject(err);
              }
              return resolve(res);
            });
          } else {
            if (secDuration > 0) {
              const incrCallback = function(err, result) {
                if (err) {
                  return reject(err);
                }
                return resolve(result);
              };
              if (typeof this.client.rlflxIncr === "function") {
                this.client.rlflxIncr(rlKey, points, secDuration, incrCallback);
              } else {
                this.client.eval(incrTtlLuaScript, 1, rlKey, points, secDuration, incrCallback);
              }
            } else {
              multi.incrby(rlKey, points).pttl(rlKey).exec((err, res) => {
                if (err) {
                  return reject(err);
                }
                return resolve(res);
              });
            }
          }
        });
      }
      _get(rlKey) {
        return new Promise((resolve, reject) => {
          if (!this._isRedisReady()) {
            return reject(new Error("Redis connection is not ready"));
          }
          this.client.multi().get(rlKey).pttl(rlKey).exec((err, res) => {
            if (err) {
              reject(err);
            } else {
              const [points] = res;
              if (points === null) {
                return resolve(null);
              }
              resolve(res);
            }
          });
        });
      }
      _delete(rlKey) {
        return new Promise((resolve, reject) => {
          this.client.del(rlKey, (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(res > 0);
            }
          });
        });
      }
    };
    module2.exports = RateLimiterRedis;
  }
});

// asset-input/node_modules/rate-limiter-flexible/lib/RateLimiterMongo.js
var require_RateLimiterMongo = __commonJS({
  "asset-input/node_modules/rate-limiter-flexible/lib/RateLimiterMongo.js"(exports2, module2) {
    var RateLimiterStoreAbstract = require_RateLimiterStoreAbstract();
    var RateLimiterRes = require_RateLimiterRes();
    function getDriverVersion(client) {
      try {
        const _client = client.client ? client.client : client;
        const { version } = _client.topology.s.options.metadata.driver;
        const _v = version.split(".").map((v2) => parseInt(v2));
        return {
          major: _v[0],
          feature: _v[1],
          patch: _v[2]
        };
      } catch (err) {
        return { major: 0, feature: 0, patch: 0 };
      }
    }
    var RateLimiterMongo = class _RateLimiterMongo extends RateLimiterStoreAbstract {
      /**
       *
       * @param {Object} opts
       * Defaults {
       *   indexKeyPrefix: {attr1: 1, attr2: 1}
       *   ... see other in RateLimiterStoreAbstract
       *
       *   mongo: MongoClient
       * }
       */
      constructor(opts) {
        super(opts);
        this.dbName = opts.dbName;
        this.tableName = opts.tableName;
        this.indexKeyPrefix = opts.indexKeyPrefix;
        if (opts.mongo) {
          this.client = opts.mongo;
        } else {
          this.client = opts.storeClient;
        }
        if (typeof this.client.then === "function") {
          this.client.then((conn) => {
            this.client = conn;
            this._initCollection();
            this._driverVersion = getDriverVersion(this.client);
          });
        } else {
          this._initCollection();
          this._driverVersion = getDriverVersion(this.client);
        }
      }
      get dbName() {
        return this._dbName;
      }
      set dbName(value) {
        this._dbName = typeof value === "undefined" ? _RateLimiterMongo.getDbName() : value;
      }
      static getDbName() {
        return "node-rate-limiter-flexible";
      }
      get tableName() {
        return this._tableName;
      }
      set tableName(value) {
        this._tableName = typeof value === "undefined" ? this.keyPrefix : value;
      }
      get client() {
        return this._client;
      }
      set client(value) {
        if (typeof value === "undefined") {
          throw new Error("mongo is not set");
        }
        this._client = value;
      }
      get indexKeyPrefix() {
        return this._indexKeyPrefix;
      }
      set indexKeyPrefix(obj) {
        this._indexKeyPrefix = obj || {};
      }
      _initCollection() {
        const db = typeof this.client.db === "function" ? this.client.db(this.dbName) : this.client;
        const collection = db.collection(this.tableName);
        collection.createIndex({ expire: -1 }, { expireAfterSeconds: 0 });
        collection.createIndex(Object.assign({}, this.indexKeyPrefix, { key: 1 }), { unique: true });
        this._collection = collection;
      }
      _getRateLimiterRes(rlKey, changedPoints, result) {
        const res = new RateLimiterRes();
        let doc;
        if (typeof result.value === "undefined") {
          doc = result;
        } else {
          doc = result.value;
        }
        res.isFirstInDuration = doc.points === changedPoints;
        res.consumedPoints = doc.points;
        res.remainingPoints = Math.max(this.points - res.consumedPoints, 0);
        res.msBeforeNext = doc.expire !== null ? Math.max(new Date(doc.expire).getTime() - Date.now(), 0) : -1;
        return res;
      }
      _upsert(key, points, msDuration, forceExpire = false, options = {}) {
        if (!this._collection) {
          return Promise.reject(Error("Mongo connection is not established"));
        }
        const docAttrs = options.attrs || {};
        let where;
        let upsertData;
        if (forceExpire) {
          where = { key };
          where = Object.assign(where, docAttrs);
          upsertData = {
            $set: {
              key,
              points,
              expire: msDuration > 0 ? new Date(Date.now() + msDuration) : null
            }
          };
          upsertData.$set = Object.assign(upsertData.$set, docAttrs);
        } else {
          where = {
            $or: [
              { expire: { $gt: /* @__PURE__ */ new Date() } },
              { expire: { $eq: null } }
            ],
            key
          };
          where = Object.assign(where, docAttrs);
          upsertData = {
            $setOnInsert: {
              key,
              expire: msDuration > 0 ? new Date(Date.now() + msDuration) : null
            },
            $inc: { points }
          };
          upsertData.$setOnInsert = Object.assign(upsertData.$setOnInsert, docAttrs);
        }
        const upsertOptions = {
          upsert: true
        };
        if (this._driverVersion.major >= 4 || (this._driverVersion.major === 3 && this._driverVersion.feature >= 7 || this._driverVersion.feature >= 6 && this._driverVersion.patch >= 7)) {
          upsertOptions.returnDocument = "after";
        } else {
          upsertOptions.returnOriginal = false;
        }
        return new Promise((resolve, reject) => {
          this._collection.findOneAndUpdate(
            where,
            upsertData,
            upsertOptions
          ).then((res) => {
            resolve(res);
          }).catch((errUpsert) => {
            if (errUpsert && errUpsert.code === 11e3) {
              const replaceWhere = Object.assign({
                // try to replace OLD limit doc
                $or: [
                  { expire: { $lte: /* @__PURE__ */ new Date() } },
                  { expire: { $eq: null } }
                ],
                key
              }, docAttrs);
              const replaceTo = {
                $set: Object.assign({
                  key,
                  points,
                  expire: msDuration > 0 ? new Date(Date.now() + msDuration) : null
                }, docAttrs)
              };
              this._collection.findOneAndUpdate(
                replaceWhere,
                replaceTo,
                upsertOptions
              ).then((res) => {
                resolve(res);
              }).catch((errReplace) => {
                if (errReplace && errReplace.code === 11e3) {
                  this._upsert(key, points, msDuration, forceExpire).then((res) => resolve(res)).catch((err) => reject(err));
                } else {
                  reject(errReplace);
                }
              });
            } else {
              reject(errUpsert);
            }
          });
        });
      }
      _get(rlKey, options = {}) {
        if (!this._collection) {
          return Promise.reject(Error("Mongo connection is not established"));
        }
        const docAttrs = options.attrs || {};
        const where = Object.assign({
          key: rlKey,
          $or: [
            { expire: { $gt: /* @__PURE__ */ new Date() } },
            { expire: { $eq: null } }
          ]
        }, docAttrs);
        return this._collection.findOne(where);
      }
      _delete(rlKey, options = {}) {
        if (!this._collection) {
          return Promise.reject(Error("Mongo connection is not established"));
        }
        const docAttrs = options.attrs || {};
        const where = Object.assign({ key: rlKey }, docAttrs);
        return this._collection.deleteOne(where).then((res) => res.deletedCount > 0);
      }
    };
    module2.exports = RateLimiterMongo;
  }
});

// asset-input/node_modules/rate-limiter-flexible/lib/RateLimiterMySQL.js
var require_RateLimiterMySQL = __commonJS({
  "asset-input/node_modules/rate-limiter-flexible/lib/RateLimiterMySQL.js"(exports2, module2) {
    var RateLimiterStoreAbstract = require_RateLimiterStoreAbstract();
    var RateLimiterRes = require_RateLimiterRes();
    var RateLimiterMySQL = class extends RateLimiterStoreAbstract {
      /**
       * @callback callback
       * @param {Object} err
       *
       * @param {Object} opts
       * @param {callback} cb
       * Defaults {
       *   ... see other in RateLimiterStoreAbstract
       *
       *   storeClient: anySqlClient,
       *   storeType: 'knex', // required only for Knex instance
       *   dbName: 'string',
       *   tableName: 'string',
       * }
       */
      constructor(opts, cb = null) {
        super(opts);
        this.client = opts.storeClient;
        this.clientType = opts.storeType;
        this.dbName = opts.dbName;
        this.tableName = opts.tableName;
        this.clearExpiredByTimeout = opts.clearExpiredByTimeout;
        this.tableCreated = opts.tableCreated;
        if (!this.tableCreated) {
          this._createDbAndTable().then(() => {
            this.tableCreated = true;
            if (this.clearExpiredByTimeout) {
              this._clearExpiredHourAgo();
            }
            if (typeof cb === "function") {
              cb();
            }
          }).catch((err) => {
            if (typeof cb === "function") {
              cb(err);
            } else {
              throw err;
            }
          });
        } else {
          if (this.clearExpiredByTimeout) {
            this._clearExpiredHourAgo();
          }
          if (typeof cb === "function") {
            cb();
          }
        }
      }
      clearExpired(expire) {
        return new Promise((resolve) => {
          this._getConnection().then((conn) => {
            conn.query(`DELETE FROM ??.?? WHERE expire < ?`, [this.dbName, this.tableName, expire], () => {
              this._releaseConnection(conn);
              resolve();
            });
          }).catch(() => {
            resolve();
          });
        });
      }
      _clearExpiredHourAgo() {
        if (this._clearExpiredTimeoutId) {
          clearTimeout(this._clearExpiredTimeoutId);
        }
        this._clearExpiredTimeoutId = setTimeout(() => {
          this.clearExpired(Date.now() - 36e5).then(() => {
            this._clearExpiredHourAgo();
          });
        }, 3e5);
        this._clearExpiredTimeoutId.unref();
      }
      /**
       *
       * @return Promise<any>
       * @private
       */
      _getConnection() {
        switch (this.clientType) {
          case "pool":
            return new Promise((resolve, reject) => {
              this.client.getConnection((errConn, conn) => {
                if (errConn) {
                  return reject(errConn);
                }
                resolve(conn);
              });
            });
          case "sequelize":
            return this.client.connectionManager.getConnection();
          case "knex":
            return this.client.client.acquireConnection();
          default:
            return Promise.resolve(this.client);
        }
      }
      _releaseConnection(conn) {
        switch (this.clientType) {
          case "pool":
            return conn.release();
          case "sequelize":
            return this.client.connectionManager.releaseConnection(conn);
          case "knex":
            return this.client.client.releaseConnection(conn);
          default:
            return true;
        }
      }
      /**
       *
       * @returns {Promise<any>}
       * @private
       */
      _createDbAndTable() {
        return new Promise((resolve, reject) => {
          this._getConnection().then((conn) => {
            conn.query(`CREATE DATABASE IF NOT EXISTS \`${this.dbName}\`;`, (errDb) => {
              if (errDb) {
                this._releaseConnection(conn);
                return reject(errDb);
              }
              conn.query(this._getCreateTableStmt(), (err) => {
                if (err) {
                  this._releaseConnection(conn);
                  return reject(err);
                }
                this._releaseConnection(conn);
                resolve();
              });
            });
          }).catch((err) => {
            reject(err);
          });
        });
      }
      _getCreateTableStmt() {
        return `CREATE TABLE IF NOT EXISTS \`${this.dbName}\`.\`${this.tableName}\` (\`key\` VARCHAR(255) CHARACTER SET utf8 NOT NULL,\`points\` INT(9) NOT NULL default 0,\`expire\` BIGINT UNSIGNED,PRIMARY KEY (\`key\`)) ENGINE = INNODB;`;
      }
      get clientType() {
        return this._clientType;
      }
      set clientType(value) {
        if (typeof value === "undefined") {
          if (this.client.constructor.name === "Connection") {
            value = "connection";
          } else if (this.client.constructor.name === "Pool") {
            value = "pool";
          } else if (this.client.constructor.name === "Sequelize") {
            value = "sequelize";
          } else {
            throw new Error("storeType is not defined");
          }
        }
        this._clientType = value.toLowerCase();
      }
      get dbName() {
        return this._dbName;
      }
      set dbName(value) {
        this._dbName = typeof value === "undefined" ? "rtlmtrflx" : value;
      }
      get tableName() {
        return this._tableName;
      }
      set tableName(value) {
        this._tableName = typeof value === "undefined" ? this.keyPrefix : value;
      }
      get tableCreated() {
        return this._tableCreated;
      }
      set tableCreated(value) {
        this._tableCreated = typeof value === "undefined" ? false : !!value;
      }
      get clearExpiredByTimeout() {
        return this._clearExpiredByTimeout;
      }
      set clearExpiredByTimeout(value) {
        this._clearExpiredByTimeout = typeof value === "undefined" ? true : Boolean(value);
      }
      _getRateLimiterRes(rlKey, changedPoints, result) {
        const res = new RateLimiterRes();
        const [row] = result;
        res.isFirstInDuration = changedPoints === row.points;
        res.consumedPoints = res.isFirstInDuration ? changedPoints : row.points;
        res.remainingPoints = Math.max(this.points - res.consumedPoints, 0);
        res.msBeforeNext = row.expire ? Math.max(row.expire - Date.now(), 0) : -1;
        return res;
      }
      _upsertTransaction(conn, key, points, msDuration, forceExpire) {
        return new Promise((resolve, reject) => {
          conn.query("BEGIN", (errBegin) => {
            if (errBegin) {
              conn.rollback();
              return reject(errBegin);
            }
            const dateNow = Date.now();
            const newExpire = msDuration > 0 ? dateNow + msDuration : null;
            let q3;
            let values;
            if (forceExpire) {
              q3 = `INSERT INTO ??.?? VALUES (?, ?, ?)
          ON DUPLICATE KEY UPDATE 
            points = ?, 
            expire = ?;`;
              values = [
                this.dbName,
                this.tableName,
                key,
                points,
                newExpire,
                points,
                newExpire
              ];
            } else {
              q3 = `INSERT INTO ??.?? VALUES (?, ?, ?)
          ON DUPLICATE KEY UPDATE 
            points = IF(expire <= ?, ?, points + (?)), 
            expire = IF(expire <= ?, ?, expire);`;
              values = [
                this.dbName,
                this.tableName,
                key,
                points,
                newExpire,
                dateNow,
                points,
                points,
                dateNow,
                newExpire
              ];
            }
            conn.query(q3, values, (errUpsert) => {
              if (errUpsert) {
                conn.rollback();
                return reject(errUpsert);
              }
              conn.query("SELECT points, expire FROM ??.?? WHERE `key` = ?;", [this.dbName, this.tableName, key], (errSelect, res) => {
                if (errSelect) {
                  conn.rollback();
                  return reject(errSelect);
                }
                conn.query("COMMIT", (err) => {
                  if (err) {
                    conn.rollback();
                    return reject(err);
                  }
                  resolve(res);
                });
              });
            });
          });
        });
      }
      _upsert(key, points, msDuration, forceExpire = false) {
        if (!this.tableCreated) {
          return Promise.reject(Error("Table is not created yet"));
        }
        return new Promise((resolve, reject) => {
          this._getConnection().then((conn) => {
            this._upsertTransaction(conn, key, points, msDuration, forceExpire).then((res) => {
              resolve(res);
              this._releaseConnection(conn);
            }).catch((err) => {
              reject(err);
              this._releaseConnection(conn);
            });
          }).catch((err) => {
            reject(err);
          });
        });
      }
      _get(rlKey) {
        if (!this.tableCreated) {
          return Promise.reject(Error("Table is not created yet"));
        }
        return new Promise((resolve, reject) => {
          this._getConnection().then((conn) => {
            conn.query(
              "SELECT points, expire FROM ??.?? WHERE `key` = ? AND (`expire` > ? OR `expire` IS NULL)",
              [this.dbName, this.tableName, rlKey, Date.now()],
              (err, res) => {
                if (err) {
                  reject(err);
                } else if (res.length === 0) {
                  resolve(null);
                } else {
                  resolve(res);
                }
                this._releaseConnection(conn);
              }
              // eslint-disable-line
            );
          }).catch((err) => {
            reject(err);
          });
        });
      }
      _delete(rlKey) {
        if (!this.tableCreated) {
          return Promise.reject(Error("Table is not created yet"));
        }
        return new Promise((resolve, reject) => {
          this._getConnection().then((conn) => {
            conn.query(
              "DELETE FROM ??.?? WHERE `key` = ?",
              [this.dbName, this.tableName, rlKey],
              (err, res) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(res.affectedRows > 0);
                }
                this._releaseConnection(conn);
              }
              // eslint-disable-line
            );
          }).catch((err) => {
            reject(err);
          });
        });
      }
    };
    module2.exports = RateLimiterMySQL;
  }
});

// asset-input/node_modules/rate-limiter-flexible/lib/RateLimiterPostgres.js
var require_RateLimiterPostgres = __commonJS({
  "asset-input/node_modules/rate-limiter-flexible/lib/RateLimiterPostgres.js"(exports2, module2) {
    var RateLimiterStoreAbstract = require_RateLimiterStoreAbstract();
    var RateLimiterRes = require_RateLimiterRes();
    var RateLimiterPostgres = class extends RateLimiterStoreAbstract {
      /**
       * @callback callback
       * @param {Object} err
       *
       * @param {Object} opts
       * @param {callback} cb
       * Defaults {
       *   ... see other in RateLimiterStoreAbstract
       *
       *   storeClient: postgresClient,
       *   storeType: 'knex', // required only for Knex instance
       *   tableName: 'string',
       * }
       */
      constructor(opts, cb = null) {
        super(opts);
        this.client = opts.storeClient;
        this.clientType = opts.storeType;
        this.tableName = opts.tableName;
        this.clearExpiredByTimeout = opts.clearExpiredByTimeout;
        this.tableCreated = opts.tableCreated;
        if (!this.tableCreated) {
          this._createTable().then(() => {
            this.tableCreated = true;
            if (this.clearExpiredByTimeout) {
              this._clearExpiredHourAgo();
            }
            if (typeof cb === "function") {
              cb();
            }
          }).catch((err) => {
            if (typeof cb === "function") {
              cb(err);
            } else {
              throw err;
            }
          });
        } else {
          if (typeof cb === "function") {
            cb();
          }
        }
      }
      clearExpired(expire) {
        return new Promise((resolve) => {
          const q3 = {
            name: "rlflx-clear-expired",
            text: `DELETE FROM ${this.tableName} WHERE expire < $1`,
            values: [expire]
          };
          this._query(q3).then(() => {
            resolve();
          }).catch(() => {
            resolve();
          });
        });
      }
      /**
       * Delete all rows expired 1 hour ago once per 5 minutes
       *
       * @private
       */
      _clearExpiredHourAgo() {
        if (this._clearExpiredTimeoutId) {
          clearTimeout(this._clearExpiredTimeoutId);
        }
        this._clearExpiredTimeoutId = setTimeout(() => {
          this.clearExpired(Date.now() - 36e5).then(() => {
            this._clearExpiredHourAgo();
          });
        }, 3e5);
        this._clearExpiredTimeoutId.unref();
      }
      /**
       *
       * @return Promise<any>
       * @private
       */
      _getConnection() {
        switch (this.clientType) {
          case "pool":
            return Promise.resolve(this.client);
          case "sequelize":
            return this.client.connectionManager.getConnection();
          case "knex":
            return this.client.client.acquireConnection();
          case "typeorm":
            return Promise.resolve(this.client.driver.master);
          default:
            return Promise.resolve(this.client);
        }
      }
      _releaseConnection(conn) {
        switch (this.clientType) {
          case "pool":
            return true;
          case "sequelize":
            return this.client.connectionManager.releaseConnection(conn);
          case "knex":
            return this.client.client.releaseConnection(conn);
          case "typeorm":
            return true;
          default:
            return true;
        }
      }
      /**
       *
       * @returns {Promise<any>}
       * @private
       */
      _createTable() {
        return new Promise((resolve, reject) => {
          this._query({
            text: this._getCreateTableStmt()
          }).then(() => {
            resolve();
          }).catch((err) => {
            if (err.code === "23505") {
              resolve();
            } else {
              reject(err);
            }
          });
        });
      }
      _getCreateTableStmt() {
        return `CREATE TABLE IF NOT EXISTS ${this.tableName} ( 
      key varchar(255) PRIMARY KEY,
      points integer NOT NULL DEFAULT 0,
      expire bigint
    );`;
      }
      get clientType() {
        return this._clientType;
      }
      set clientType(value) {
        const constructorName = this.client.constructor.name;
        if (typeof value === "undefined") {
          if (constructorName === "Client") {
            value = "client";
          } else if (constructorName === "Pool" || constructorName === "BoundPool") {
            value = "pool";
          } else if (constructorName === "Sequelize") {
            value = "sequelize";
          } else {
            throw new Error("storeType is not defined");
          }
        }
        this._clientType = value.toLowerCase();
      }
      get tableName() {
        return this._tableName;
      }
      set tableName(value) {
        this._tableName = typeof value === "undefined" ? this.keyPrefix : value;
      }
      get tableCreated() {
        return this._tableCreated;
      }
      set tableCreated(value) {
        this._tableCreated = typeof value === "undefined" ? false : !!value;
      }
      get clearExpiredByTimeout() {
        return this._clearExpiredByTimeout;
      }
      set clearExpiredByTimeout(value) {
        this._clearExpiredByTimeout = typeof value === "undefined" ? true : Boolean(value);
      }
      _getRateLimiterRes(rlKey, changedPoints, result) {
        const res = new RateLimiterRes();
        const row = result.rows[0];
        res.isFirstInDuration = changedPoints === row.points;
        res.consumedPoints = res.isFirstInDuration ? changedPoints : row.points;
        res.remainingPoints = Math.max(this.points - res.consumedPoints, 0);
        res.msBeforeNext = row.expire ? Math.max(row.expire - Date.now(), 0) : -1;
        return res;
      }
      _query(q3) {
        const prefix = this.tableName.toLowerCase();
        const queryObj = { name: `${prefix}:${q3.name}`, text: q3.text, values: q3.values };
        return new Promise((resolve, reject) => {
          this._getConnection().then((conn) => {
            conn.query(queryObj).then((res) => {
              resolve(res);
              this._releaseConnection(conn);
            }).catch((err) => {
              reject(err);
              this._releaseConnection(conn);
            });
          }).catch((err) => {
            reject(err);
          });
        });
      }
      _upsert(key, points, msDuration, forceExpire = false) {
        if (!this.tableCreated) {
          return Promise.reject(Error("Table is not created yet"));
        }
        const newExpire = msDuration > 0 ? Date.now() + msDuration : null;
        const expireQ = forceExpire ? " $3 " : ` CASE
             WHEN ${this.tableName}.expire <= $4 THEN $3
             ELSE ${this.tableName}.expire
            END `;
        return this._query({
          name: forceExpire ? "rlflx-upsert-force" : "rlflx-upsert",
          text: `
            INSERT INTO ${this.tableName} VALUES ($1, $2, $3)
              ON CONFLICT(key) DO UPDATE SET
                points = CASE
                          WHEN (${this.tableName}.expire <= $4 OR 1=${forceExpire ? 1 : 0}) THEN $2
                          ELSE ${this.tableName}.points + ($2)
                         END,
                expire = ${expireQ}
            RETURNING points, expire;`,
          values: [key, points, newExpire, Date.now()]
        });
      }
      _get(rlKey) {
        if (!this.tableCreated) {
          return Promise.reject(Error("Table is not created yet"));
        }
        return new Promise((resolve, reject) => {
          this._query({
            name: "rlflx-get",
            text: `
            SELECT points, expire FROM ${this.tableName} WHERE key = $1 AND (expire > $2 OR expire IS NULL);`,
            values: [rlKey, Date.now()]
          }).then((res) => {
            if (res.rowCount === 0) {
              res = null;
            }
            resolve(res);
          }).catch((err) => {
            reject(err);
          });
        });
      }
      _delete(rlKey) {
        if (!this.tableCreated) {
          return Promise.reject(Error("Table is not created yet"));
        }
        return this._query({
          name: "rlflx-delete",
          text: `DELETE FROM ${this.tableName} WHERE key = $1`,
          values: [rlKey]
        }).then((res) => res.rowCount > 0);
      }
    };
    module2.exports = RateLimiterPostgres;
  }
});

// asset-input/node_modules/rate-limiter-flexible/lib/component/MemoryStorage/Record.js
var require_Record = __commonJS({
  "asset-input/node_modules/rate-limiter-flexible/lib/component/MemoryStorage/Record.js"(exports2, module2) {
    module2.exports = class Record {
      /**
       *
       * @param value int
       * @param expiresAt Date|int
       * @param timeoutId
       */
      constructor(value, expiresAt, timeoutId = null) {
        this.value = value;
        this.expiresAt = expiresAt;
        this.timeoutId = timeoutId;
      }
      get value() {
        return this._value;
      }
      set value(value) {
        this._value = parseInt(value);
      }
      get expiresAt() {
        return this._expiresAt;
      }
      set expiresAt(value) {
        if (!(value instanceof Date) && Number.isInteger(value)) {
          value = new Date(value);
        }
        this._expiresAt = value;
      }
      get timeoutId() {
        return this._timeoutId;
      }
      set timeoutId(value) {
        this._timeoutId = value;
      }
    };
  }
});

// asset-input/node_modules/rate-limiter-flexible/lib/component/MemoryStorage/MemoryStorage.js
var require_MemoryStorage = __commonJS({
  "asset-input/node_modules/rate-limiter-flexible/lib/component/MemoryStorage/MemoryStorage.js"(exports2, module2) {
    var Record = require_Record();
    var RateLimiterRes = require_RateLimiterRes();
    module2.exports = class MemoryStorage {
      constructor() {
        this._storage = {};
      }
      incrby(key, value, durationSec) {
        if (this._storage[key]) {
          const msBeforeExpires = this._storage[key].expiresAt ? this._storage[key].expiresAt.getTime() - (/* @__PURE__ */ new Date()).getTime() : -1;
          if (msBeforeExpires !== 0) {
            this._storage[key].value = this._storage[key].value + value;
            return new RateLimiterRes(0, msBeforeExpires, this._storage[key].value, false);
          }
          return this.set(key, value, durationSec);
        }
        return this.set(key, value, durationSec);
      }
      set(key, value, durationSec) {
        const durationMs = durationSec * 1e3;
        if (this._storage[key] && this._storage[key].timeoutId) {
          clearTimeout(this._storage[key].timeoutId);
        }
        this._storage[key] = new Record(
          value,
          durationMs > 0 ? new Date(Date.now() + durationMs) : null
        );
        if (durationMs > 0) {
          this._storage[key].timeoutId = setTimeout(() => {
            delete this._storage[key];
          }, durationMs);
          if (this._storage[key].timeoutId.unref) {
            this._storage[key].timeoutId.unref();
          }
        }
        return new RateLimiterRes(0, durationMs === 0 ? -1 : durationMs, this._storage[key].value, true);
      }
      /**
       *
       * @param key
       * @returns {*}
       */
      get(key) {
        if (this._storage[key]) {
          const msBeforeExpires = this._storage[key].expiresAt ? this._storage[key].expiresAt.getTime() - (/* @__PURE__ */ new Date()).getTime() : -1;
          return new RateLimiterRes(0, msBeforeExpires, this._storage[key].value, false);
        }
        return null;
      }
      /**
       *
       * @param key
       * @returns {boolean}
       */
      delete(key) {
        if (this._storage[key]) {
          if (this._storage[key].timeoutId) {
            clearTimeout(this._storage[key].timeoutId);
          }
          delete this._storage[key];
          return true;
        }
        return false;
      }
    };
  }
});

// asset-input/node_modules/rate-limiter-flexible/lib/RateLimiterMemory.js
var require_RateLimiterMemory = __commonJS({
  "asset-input/node_modules/rate-limiter-flexible/lib/RateLimiterMemory.js"(exports2, module2) {
    var RateLimiterAbstract = require_RateLimiterAbstract();
    var MemoryStorage = require_MemoryStorage();
    var RateLimiterRes = require_RateLimiterRes();
    var RateLimiterMemory2 = class extends RateLimiterAbstract {
      constructor(opts = {}) {
        super(opts);
        this._memoryStorage = new MemoryStorage();
      }
      /**
       *
       * @param key
       * @param pointsToConsume
       * @param {Object} options
       * @returns {Promise<RateLimiterRes>}
       */
      consume(key, pointsToConsume = 1, options = {}) {
        return new Promise((resolve, reject) => {
          const rlKey = this.getKey(key);
          const secDuration = this._getKeySecDuration(options);
          let res = this._memoryStorage.incrby(rlKey, pointsToConsume, secDuration);
          res.remainingPoints = Math.max(this.points - res.consumedPoints, 0);
          if (res.consumedPoints > this.points) {
            if (this.blockDuration > 0 && res.consumedPoints <= this.points + pointsToConsume) {
              res = this._memoryStorage.set(rlKey, res.consumedPoints, this.blockDuration);
            }
            reject(res);
          } else if (this.execEvenly && res.msBeforeNext > 0 && !res.isFirstInDuration) {
            let delay = Math.ceil(res.msBeforeNext / (res.remainingPoints + 2));
            if (delay < this.execEvenlyMinDelayMs) {
              delay = res.consumedPoints * this.execEvenlyMinDelayMs;
            }
            setTimeout(resolve, delay, res);
          } else {
            resolve(res);
          }
        });
      }
      penalty(key, points = 1, options = {}) {
        const rlKey = this.getKey(key);
        return new Promise((resolve) => {
          const secDuration = this._getKeySecDuration(options);
          const res = this._memoryStorage.incrby(rlKey, points, secDuration);
          res.remainingPoints = Math.max(this.points - res.consumedPoints, 0);
          resolve(res);
        });
      }
      reward(key, points = 1, options = {}) {
        const rlKey = this.getKey(key);
        return new Promise((resolve) => {
          const secDuration = this._getKeySecDuration(options);
          const res = this._memoryStorage.incrby(rlKey, -points, secDuration);
          res.remainingPoints = Math.max(this.points - res.consumedPoints, 0);
          resolve(res);
        });
      }
      /**
       * Block any key for secDuration seconds
       *
       * @param key
       * @param secDuration
       */
      block(key, secDuration) {
        const msDuration = secDuration * 1e3;
        const initPoints = this.points + 1;
        this._memoryStorage.set(this.getKey(key), initPoints, secDuration);
        return Promise.resolve(
          new RateLimiterRes(0, msDuration === 0 ? -1 : msDuration, initPoints)
        );
      }
      set(key, points, secDuration) {
        const msDuration = (secDuration >= 0 ? secDuration : this.duration) * 1e3;
        this._memoryStorage.set(this.getKey(key), points, secDuration);
        return Promise.resolve(
          new RateLimiterRes(0, msDuration === 0 ? -1 : msDuration, points)
        );
      }
      get(key) {
        const res = this._memoryStorage.get(this.getKey(key));
        if (res !== null) {
          res.remainingPoints = Math.max(this.points - res.consumedPoints, 0);
        }
        return Promise.resolve(res);
      }
      delete(key) {
        return Promise.resolve(this._memoryStorage.delete(this.getKey(key)));
      }
    };
    module2.exports = RateLimiterMemory2;
  }
});

// asset-input/node_modules/rate-limiter-flexible/lib/RateLimiterCluster.js
var require_RateLimiterCluster = __commonJS({
  "asset-input/node_modules/rate-limiter-flexible/lib/RateLimiterCluster.js"(exports2, module2) {
    var cluster = require("cluster");
    var crypto2 = require("crypto");
    var RateLimiterAbstract = require_RateLimiterAbstract();
    var RateLimiterMemory2 = require_RateLimiterMemory();
    var RateLimiterRes = require_RateLimiterRes();
    var channel = "rate_limiter_flexible";
    var masterInstance = null;
    var masterSendToWorker = function(worker, msg, type, res) {
      let data;
      if (res === null || res === true || res === false) {
        data = res;
      } else {
        data = {
          remainingPoints: res.remainingPoints,
          msBeforeNext: res.msBeforeNext,
          consumedPoints: res.consumedPoints,
          isFirstInDuration: res.isFirstInDuration
        };
      }
      worker.send({
        channel,
        keyPrefix: msg.keyPrefix,
        // which rate limiter exactly
        promiseId: msg.promiseId,
        type,
        data
      });
    };
    var workerWaitInit = function(payload) {
      setTimeout(() => {
        if (this._initiated) {
          process.send(payload);
        } else if (typeof this._promises[payload.promiseId] !== "undefined") {
          workerWaitInit.call(this, payload);
        }
      }, 30);
    };
    var workerSendToMaster = function(func, promiseId, key, arg, opts) {
      const payload = {
        channel,
        keyPrefix: this.keyPrefix,
        func,
        promiseId,
        data: {
          key,
          arg,
          opts
        }
      };
      if (!this._initiated) {
        workerWaitInit.call(this, payload);
      } else {
        process.send(payload);
      }
    };
    var masterProcessMsg = function(worker, msg) {
      if (!msg || msg.channel !== channel || typeof this._rateLimiters[msg.keyPrefix] === "undefined") {
        return false;
      }
      let promise;
      switch (msg.func) {
        case "consume":
          promise = this._rateLimiters[msg.keyPrefix].consume(msg.data.key, msg.data.arg, msg.data.opts);
          break;
        case "penalty":
          promise = this._rateLimiters[msg.keyPrefix].penalty(msg.data.key, msg.data.arg, msg.data.opts);
          break;
        case "reward":
          promise = this._rateLimiters[msg.keyPrefix].reward(msg.data.key, msg.data.arg, msg.data.opts);
          break;
        case "block":
          promise = this._rateLimiters[msg.keyPrefix].block(msg.data.key, msg.data.arg, msg.data.opts);
          break;
        case "get":
          promise = this._rateLimiters[msg.keyPrefix].get(msg.data.key, msg.data.opts);
          break;
        case "delete":
          promise = this._rateLimiters[msg.keyPrefix].delete(msg.data.key, msg.data.opts);
          break;
        default:
          return false;
      }
      if (promise) {
        promise.then((res) => {
          masterSendToWorker(worker, msg, "resolve", res);
        }).catch((rejRes) => {
          masterSendToWorker(worker, msg, "reject", rejRes);
        });
      }
    };
    var workerProcessMsg = function(msg) {
      if (!msg || msg.channel !== channel || msg.keyPrefix !== this.keyPrefix) {
        return false;
      }
      if (this._promises[msg.promiseId]) {
        clearTimeout(this._promises[msg.promiseId].timeoutId);
        let res;
        if (msg.data === null || msg.data === true || msg.data === false) {
          res = msg.data;
        } else {
          res = new RateLimiterRes(
            msg.data.remainingPoints,
            msg.data.msBeforeNext,
            msg.data.consumedPoints,
            msg.data.isFirstInDuration
            // eslint-disable-line comma-dangle
          );
        }
        switch (msg.type) {
          case "resolve":
            this._promises[msg.promiseId].resolve(res);
            break;
          case "reject":
            this._promises[msg.promiseId].reject(res);
            break;
          default:
            throw new Error(`RateLimiterCluster: no such message type '${msg.type}'`);
        }
        delete this._promises[msg.promiseId];
      }
    };
    var getOpts = function() {
      return {
        points: this.points,
        duration: this.duration,
        blockDuration: this.blockDuration,
        execEvenly: this.execEvenly,
        execEvenlyMinDelayMs: this.execEvenlyMinDelayMs,
        keyPrefix: this.keyPrefix
      };
    };
    var savePromise = function(resolve, reject) {
      const hrtime = process.hrtime();
      let promiseId = hrtime[0].toString() + hrtime[1].toString();
      if (typeof this._promises[promiseId] !== "undefined") {
        promiseId += crypto2.randomBytes(12).toString("base64");
      }
      this._promises[promiseId] = {
        resolve,
        reject,
        timeoutId: setTimeout(() => {
          delete this._promises[promiseId];
          reject(new Error("RateLimiterCluster timeout: no answer from master in time"));
        }, this.timeoutMs)
      };
      return promiseId;
    };
    var RateLimiterClusterMaster = class {
      constructor() {
        if (masterInstance) {
          return masterInstance;
        }
        this._rateLimiters = {};
        cluster.setMaxListeners(0);
        cluster.on("message", (worker, msg) => {
          if (msg && msg.channel === channel && msg.type === "init") {
            if (typeof this._rateLimiters[msg.opts.keyPrefix] === "undefined") {
              this._rateLimiters[msg.opts.keyPrefix] = new RateLimiterMemory2(msg.opts);
            }
            worker.send({
              channel,
              type: "init",
              keyPrefix: msg.opts.keyPrefix
            });
          } else {
            masterProcessMsg.call(this, worker, msg);
          }
        });
        masterInstance = this;
      }
    };
    var RateLimiterClusterMasterPM2 = class {
      constructor(pm2) {
        if (masterInstance) {
          return masterInstance;
        }
        this._rateLimiters = {};
        pm2.launchBus((err, pm2Bus) => {
          pm2Bus.on("process:msg", (packet) => {
            const msg = packet.raw;
            if (msg && msg.channel === channel && msg.type === "init") {
              if (typeof this._rateLimiters[msg.opts.keyPrefix] === "undefined") {
                this._rateLimiters[msg.opts.keyPrefix] = new RateLimiterMemory2(msg.opts);
              }
              pm2.sendDataToProcessId(packet.process.pm_id, {
                data: {},
                topic: channel,
                channel,
                type: "init",
                keyPrefix: msg.opts.keyPrefix
              }, (sendErr, res) => {
                if (sendErr) {
                  console.log(sendErr, res);
                }
              });
            } else {
              const worker = {
                send: (msgData) => {
                  const pm2Message = msgData;
                  pm2Message.topic = channel;
                  if (typeof pm2Message.data === "undefined") {
                    pm2Message.data = {};
                  }
                  pm2.sendDataToProcessId(packet.process.pm_id, pm2Message, (sendErr, res) => {
                    if (sendErr) {
                      console.log(sendErr, res);
                    }
                  });
                }
              };
              masterProcessMsg.call(this, worker, msg);
            }
          });
        });
        masterInstance = this;
      }
    };
    var RateLimiterClusterWorker = class extends RateLimiterAbstract {
      get timeoutMs() {
        return this._timeoutMs;
      }
      set timeoutMs(value) {
        this._timeoutMs = typeof value === "undefined" ? 5e3 : Math.abs(parseInt(value));
      }
      constructor(opts = {}) {
        super(opts);
        process.setMaxListeners(0);
        this.timeoutMs = opts.timeoutMs;
        this._initiated = false;
        process.on("message", (msg) => {
          if (msg && msg.channel === channel && msg.type === "init" && msg.keyPrefix === this.keyPrefix) {
            this._initiated = true;
          } else {
            workerProcessMsg.call(this, msg);
          }
        });
        process.send({
          channel,
          type: "init",
          opts: getOpts.call(this)
        });
        this._promises = {};
      }
      consume(key, pointsToConsume = 1, options = {}) {
        return new Promise((resolve, reject) => {
          const promiseId = savePromise.call(this, resolve, reject);
          workerSendToMaster.call(this, "consume", promiseId, key, pointsToConsume, options);
        });
      }
      penalty(key, points = 1, options = {}) {
        return new Promise((resolve, reject) => {
          const promiseId = savePromise.call(this, resolve, reject);
          workerSendToMaster.call(this, "penalty", promiseId, key, points, options);
        });
      }
      reward(key, points = 1, options = {}) {
        return new Promise((resolve, reject) => {
          const promiseId = savePromise.call(this, resolve, reject);
          workerSendToMaster.call(this, "reward", promiseId, key, points, options);
        });
      }
      block(key, secDuration, options = {}) {
        return new Promise((resolve, reject) => {
          const promiseId = savePromise.call(this, resolve, reject);
          workerSendToMaster.call(this, "block", promiseId, key, secDuration, options);
        });
      }
      get(key, options = {}) {
        return new Promise((resolve, reject) => {
          const promiseId = savePromise.call(this, resolve, reject);
          workerSendToMaster.call(this, "get", promiseId, key, options);
        });
      }
      delete(key, options = {}) {
        return new Promise((resolve, reject) => {
          const promiseId = savePromise.call(this, resolve, reject);
          workerSendToMaster.call(this, "delete", promiseId, key, options);
        });
      }
    };
    module2.exports = {
      RateLimiterClusterMaster,
      RateLimiterClusterMasterPM2,
      RateLimiterCluster: RateLimiterClusterWorker
    };
  }
});

// asset-input/node_modules/rate-limiter-flexible/lib/RateLimiterMemcache.js
var require_RateLimiterMemcache = __commonJS({
  "asset-input/node_modules/rate-limiter-flexible/lib/RateLimiterMemcache.js"(exports2, module2) {
    var RateLimiterStoreAbstract = require_RateLimiterStoreAbstract();
    var RateLimiterRes = require_RateLimiterRes();
    var RateLimiterMemcache = class extends RateLimiterStoreAbstract {
      /**
       *
       * @param {Object} opts
       * Defaults {
       *   ... see other in RateLimiterStoreAbstract
       *
       *   storeClient: memcacheClient
       * }
       */
      constructor(opts) {
        super(opts);
        this.client = opts.storeClient;
      }
      _getRateLimiterRes(rlKey, changedPoints, result) {
        const res = new RateLimiterRes();
        res.consumedPoints = parseInt(result.consumedPoints);
        res.isFirstInDuration = result.consumedPoints === changedPoints;
        res.remainingPoints = Math.max(this.points - res.consumedPoints, 0);
        res.msBeforeNext = result.msBeforeNext;
        return res;
      }
      _upsert(rlKey, points, msDuration, forceExpire = false, options = {}) {
        return new Promise((resolve, reject) => {
          const nowMs = Date.now();
          const secDuration = Math.floor(msDuration / 1e3);
          if (forceExpire) {
            this.client.set(rlKey, points, secDuration, (err) => {
              if (!err) {
                this.client.set(
                  `${rlKey}_expire`,
                  secDuration > 0 ? nowMs + secDuration * 1e3 : -1,
                  secDuration,
                  () => {
                    const res = {
                      consumedPoints: points,
                      msBeforeNext: secDuration > 0 ? secDuration * 1e3 : -1
                    };
                    resolve(res);
                  }
                );
              } else {
                reject(err);
              }
            });
          } else {
            this.client.incr(rlKey, points, (err, consumedPoints) => {
              if (err || consumedPoints === false) {
                this.client.add(rlKey, points, secDuration, (errAddKey, createdNew) => {
                  if (errAddKey || !createdNew) {
                    if (typeof options.attemptNumber === "undefined" || options.attemptNumber < 3) {
                      const nextOptions = Object.assign({}, options);
                      nextOptions.attemptNumber = nextOptions.attemptNumber ? nextOptions.attemptNumber + 1 : 1;
                      this._upsert(rlKey, points, msDuration, forceExpire, nextOptions).then((resUpsert) => resolve(resUpsert)).catch((errUpsert) => reject(errUpsert));
                    } else {
                      reject(new Error("Can not add key"));
                    }
                  } else {
                    this.client.add(
                      `${rlKey}_expire`,
                      secDuration > 0 ? nowMs + secDuration * 1e3 : -1,
                      secDuration,
                      () => {
                        const res = {
                          consumedPoints: points,
                          msBeforeNext: secDuration > 0 ? secDuration * 1e3 : -1
                        };
                        resolve(res);
                      }
                    );
                  }
                });
              } else {
                this.client.get(`${rlKey}_expire`, (errGetExpire, resGetExpireMs) => {
                  if (errGetExpire) {
                    reject(errGetExpire);
                  } else {
                    const expireMs = resGetExpireMs === false ? 0 : resGetExpireMs;
                    const res = {
                      consumedPoints,
                      msBeforeNext: expireMs >= 0 ? Math.max(expireMs - nowMs, 0) : -1
                    };
                    resolve(res);
                  }
                });
              }
            });
          }
        });
      }
      _get(rlKey) {
        return new Promise((resolve, reject) => {
          const nowMs = Date.now();
          this.client.get(rlKey, (err, consumedPoints) => {
            if (!consumedPoints) {
              resolve(null);
            } else {
              this.client.get(`${rlKey}_expire`, (errGetExpire, resGetExpireMs) => {
                if (errGetExpire) {
                  reject(errGetExpire);
                } else {
                  const expireMs = resGetExpireMs === false ? 0 : resGetExpireMs;
                  const res = {
                    consumedPoints,
                    msBeforeNext: expireMs >= 0 ? Math.max(expireMs - nowMs, 0) : -1
                  };
                  resolve(res);
                }
              });
            }
          });
        });
      }
      _delete(rlKey) {
        return new Promise((resolve, reject) => {
          this.client.del(rlKey, (err, res) => {
            if (err) {
              reject(err);
            } else if (res === false) {
              resolve(res);
            } else {
              this.client.del(`${rlKey}_expire`, (errDelExpire) => {
                if (errDelExpire) {
                  reject(errDelExpire);
                } else {
                  resolve(res);
                }
              });
            }
          });
        });
      }
    };
    module2.exports = RateLimiterMemcache;
  }
});

// asset-input/node_modules/rate-limiter-flexible/lib/RLWrapperBlackAndWhite.js
var require_RLWrapperBlackAndWhite = __commonJS({
  "asset-input/node_modules/rate-limiter-flexible/lib/RLWrapperBlackAndWhite.js"(exports2, module2) {
    var RateLimiterRes = require_RateLimiterRes();
    module2.exports = class RLWrapperBlackAndWhite {
      constructor(opts = {}) {
        this.limiter = opts.limiter;
        this.blackList = opts.blackList;
        this.whiteList = opts.whiteList;
        this.isBlackListed = opts.isBlackListed;
        this.isWhiteListed = opts.isWhiteListed;
        this.runActionAnyway = opts.runActionAnyway;
      }
      get limiter() {
        return this._limiter;
      }
      set limiter(value) {
        if (typeof value === "undefined") {
          throw new Error("limiter is not set");
        }
        this._limiter = value;
      }
      get runActionAnyway() {
        return this._runActionAnyway;
      }
      set runActionAnyway(value) {
        this._runActionAnyway = typeof value === "undefined" ? false : value;
      }
      get blackList() {
        return this._blackList;
      }
      set blackList(value) {
        this._blackList = Array.isArray(value) ? value : [];
      }
      get isBlackListed() {
        return this._isBlackListed;
      }
      set isBlackListed(func) {
        if (typeof func === "undefined") {
          func = () => false;
        }
        if (typeof func !== "function") {
          throw new Error("isBlackListed must be function");
        }
        this._isBlackListed = func;
      }
      get whiteList() {
        return this._whiteList;
      }
      set whiteList(value) {
        this._whiteList = Array.isArray(value) ? value : [];
      }
      get isWhiteListed() {
        return this._isWhiteListed;
      }
      set isWhiteListed(func) {
        if (typeof func === "undefined") {
          func = () => false;
        }
        if (typeof func !== "function") {
          throw new Error("isWhiteListed must be function");
        }
        this._isWhiteListed = func;
      }
      isBlackListedSomewhere(key) {
        return this.blackList.indexOf(key) >= 0 || this.isBlackListed(key);
      }
      isWhiteListedSomewhere(key) {
        return this.whiteList.indexOf(key) >= 0 || this.isWhiteListed(key);
      }
      getBlackRes() {
        return new RateLimiterRes(0, Number.MAX_SAFE_INTEGER, 0, false);
      }
      getWhiteRes() {
        return new RateLimiterRes(Number.MAX_SAFE_INTEGER, 0, 0, false);
      }
      rejectBlack() {
        return Promise.reject(this.getBlackRes());
      }
      resolveBlack() {
        return Promise.resolve(this.getBlackRes());
      }
      resolveWhite() {
        return Promise.resolve(this.getWhiteRes());
      }
      consume(key, pointsToConsume = 1) {
        let res;
        if (this.isWhiteListedSomewhere(key)) {
          res = this.resolveWhite();
        } else if (this.isBlackListedSomewhere(key)) {
          res = this.rejectBlack();
        }
        if (typeof res === "undefined") {
          return this.limiter.consume(key, pointsToConsume);
        }
        if (this.runActionAnyway) {
          this.limiter.consume(key, pointsToConsume).catch(() => {
          });
        }
        return res;
      }
      block(key, secDuration) {
        let res;
        if (this.isWhiteListedSomewhere(key)) {
          res = this.resolveWhite();
        } else if (this.isBlackListedSomewhere(key)) {
          res = this.resolveBlack();
        }
        if (typeof res === "undefined") {
          return this.limiter.block(key, secDuration);
        }
        if (this.runActionAnyway) {
          this.limiter.block(key, secDuration).catch(() => {
          });
        }
        return res;
      }
      penalty(key, points) {
        let res;
        if (this.isWhiteListedSomewhere(key)) {
          res = this.resolveWhite();
        } else if (this.isBlackListedSomewhere(key)) {
          res = this.resolveBlack();
        }
        if (typeof res === "undefined") {
          return this.limiter.penalty(key, points);
        }
        if (this.runActionAnyway) {
          this.limiter.penalty(key, points).catch(() => {
          });
        }
        return res;
      }
      reward(key, points) {
        let res;
        if (this.isWhiteListedSomewhere(key)) {
          res = this.resolveWhite();
        } else if (this.isBlackListedSomewhere(key)) {
          res = this.resolveBlack();
        }
        if (typeof res === "undefined") {
          return this.limiter.reward(key, points);
        }
        if (this.runActionAnyway) {
          this.limiter.reward(key, points).catch(() => {
          });
        }
        return res;
      }
      get(key) {
        let res;
        if (this.isWhiteListedSomewhere(key)) {
          res = this.resolveWhite();
        } else if (this.isBlackListedSomewhere(key)) {
          res = this.resolveBlack();
        }
        if (typeof res === "undefined" || this.runActionAnyway) {
          return this.limiter.get(key);
        }
        return res;
      }
      delete(key) {
        return this.limiter.delete(key);
      }
    };
  }
});

// asset-input/node_modules/rate-limiter-flexible/lib/RateLimiterUnion.js
var require_RateLimiterUnion = __commonJS({
  "asset-input/node_modules/rate-limiter-flexible/lib/RateLimiterUnion.js"(exports2, module2) {
    var RateLimiterAbstract = require_RateLimiterAbstract();
    module2.exports = class RateLimiterUnion {
      constructor(...limiters) {
        if (limiters.length < 1) {
          throw new Error("RateLimiterUnion: at least one limiter have to be passed");
        }
        limiters.forEach((limiter) => {
          if (!(limiter instanceof RateLimiterAbstract)) {
            throw new Error("RateLimiterUnion: all limiters have to be instance of RateLimiterAbstract");
          }
        });
        this._limiters = limiters;
      }
      consume(key, points = 1) {
        return new Promise((resolve, reject) => {
          const promises = [];
          this._limiters.forEach((limiter) => {
            promises.push(limiter.consume(key, points).catch((rej) => ({ rejected: true, rej })));
          });
          Promise.all(promises).then((res) => {
            const resObj = {};
            let rejected = false;
            res.forEach((item) => {
              if (item.rejected === true) {
                rejected = true;
              }
            });
            for (let i3 = 0; i3 < res.length; i3++) {
              if (rejected && res[i3].rejected === true) {
                resObj[this._limiters[i3].keyPrefix] = res[i3].rej;
              } else if (!rejected) {
                resObj[this._limiters[i3].keyPrefix] = res[i3];
              }
            }
            if (rejected) {
              reject(resObj);
            } else {
              resolve(resObj);
            }
          });
        });
      }
    };
  }
});

// asset-input/node_modules/rate-limiter-flexible/lib/component/RateLimiterQueueError.js
var require_RateLimiterQueueError = __commonJS({
  "asset-input/node_modules/rate-limiter-flexible/lib/component/RateLimiterQueueError.js"(exports2, module2) {
    module2.exports = class RateLimiterQueueError extends Error {
      constructor(message2, extra) {
        super();
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor);
        }
        this.name = "CustomError";
        this.message = message2;
        if (extra) {
          this.extra = extra;
        }
      }
    };
  }
});

// asset-input/node_modules/rate-limiter-flexible/lib/RateLimiterQueue.js
var require_RateLimiterQueue = __commonJS({
  "asset-input/node_modules/rate-limiter-flexible/lib/RateLimiterQueue.js"(exports2, module2) {
    var RateLimiterQueueError = require_RateLimiterQueueError();
    var MAX_QUEUE_SIZE = 4294967295;
    var KEY_DEFAULT = "limiter";
    module2.exports = class RateLimiterQueue {
      constructor(limiterFlexible, opts = {
        maxQueueSize: MAX_QUEUE_SIZE
      }) {
        this._queueLimiters = {
          KEY_DEFAULT: new RateLimiterQueueInternal(limiterFlexible, opts)
        };
        this._limiterFlexible = limiterFlexible;
        this._maxQueueSize = opts.maxQueueSize;
      }
      getTokensRemaining(key = KEY_DEFAULT) {
        if (this._queueLimiters[key]) {
          return this._queueLimiters[key].getTokensRemaining();
        } else {
          return Promise.resolve(this._limiterFlexible.points);
        }
      }
      removeTokens(tokens, key = KEY_DEFAULT) {
        if (!this._queueLimiters[key]) {
          this._queueLimiters[key] = new RateLimiterQueueInternal(
            this._limiterFlexible,
            {
              key,
              maxQueueSize: this._maxQueueSize
            }
          );
        }
        return this._queueLimiters[key].removeTokens(tokens);
      }
    };
    var RateLimiterQueueInternal = class {
      constructor(limiterFlexible, opts = {
        maxQueueSize: MAX_QUEUE_SIZE,
        key: KEY_DEFAULT
      }) {
        this._key = opts.key;
        this._waitTimeout = null;
        this._queue = [];
        this._limiterFlexible = limiterFlexible;
        this._maxQueueSize = opts.maxQueueSize;
      }
      getTokensRemaining() {
        return this._limiterFlexible.get(this._key).then((rlRes) => {
          return rlRes !== null ? rlRes.remainingPoints : this._limiterFlexible.points;
        });
      }
      removeTokens(tokens) {
        const _this = this;
        return new Promise((resolve, reject) => {
          if (tokens > _this._limiterFlexible.points) {
            reject(new RateLimiterQueueError(`Requested tokens ${tokens} exceeds maximum ${_this._limiterFlexible.points} tokens per interval`));
            return;
          }
          if (_this._queue.length > 0) {
            _this._queueRequest.call(_this, resolve, reject, tokens);
          } else {
            _this._limiterFlexible.consume(_this._key, tokens).then((res) => {
              resolve(res.remainingPoints);
            }).catch((rej) => {
              if (rej instanceof Error) {
                reject(rej);
              } else {
                _this._queueRequest.call(_this, resolve, reject, tokens);
                if (_this._waitTimeout === null) {
                  _this._waitTimeout = setTimeout(_this._processFIFO.bind(_this), rej.msBeforeNext);
                }
              }
            });
          }
        });
      }
      _queueRequest(resolve, reject, tokens) {
        const _this = this;
        if (_this._queue.length < _this._maxQueueSize) {
          _this._queue.push({ resolve, reject, tokens });
        } else {
          reject(new RateLimiterQueueError(`Number of requests reached it's maximum ${_this._maxQueueSize}`));
        }
      }
      _processFIFO() {
        const _this = this;
        if (_this._waitTimeout !== null) {
          clearTimeout(_this._waitTimeout);
          _this._waitTimeout = null;
        }
        if (_this._queue.length === 0) {
          return;
        }
        const item = _this._queue.shift();
        _this._limiterFlexible.consume(_this._key, item.tokens).then((res) => {
          item.resolve(res.remainingPoints);
          _this._processFIFO.call(_this);
        }).catch((rej) => {
          if (rej instanceof Error) {
            item.reject(rej);
            _this._processFIFO.call(_this);
          } else {
            _this._queue.unshift(item);
            if (_this._waitTimeout === null) {
              _this._waitTimeout = setTimeout(_this._processFIFO.bind(_this), rej.msBeforeNext);
            }
          }
        });
      }
    };
  }
});

// asset-input/node_modules/rate-limiter-flexible/lib/BurstyRateLimiter.js
var require_BurstyRateLimiter = __commonJS({
  "asset-input/node_modules/rate-limiter-flexible/lib/BurstyRateLimiter.js"(exports2, module2) {
    var RateLimiterRes = require_RateLimiterRes();
    module2.exports = class BurstyRateLimiter {
      constructor(rateLimiter, burstLimiter) {
        this._rateLimiter = rateLimiter;
        this._burstLimiter = burstLimiter;
      }
      /**
       * Merge rate limiter response objects. Responses can be null
       *
       * @param {RateLimiterRes} [rlRes] Rate limiter response
       * @param {RateLimiterRes} [blRes] Bursty limiter response
       */
      _combineRes(rlRes, blRes) {
        if (!rlRes) {
          return null;
        }
        return new RateLimiterRes(
          rlRes.remainingPoints,
          Math.min(rlRes.msBeforeNext, blRes ? blRes.msBeforeNext : 0),
          rlRes.consumedPoints,
          rlRes.isFirstInDuration
        );
      }
      /**
       * @param key
       * @param pointsToConsume
       * @param options
       * @returns {Promise<any>}
       */
      consume(key, pointsToConsume = 1, options = {}) {
        return this._rateLimiter.consume(key, pointsToConsume, options).catch((rlRej) => {
          if (rlRej instanceof RateLimiterRes) {
            return this._burstLimiter.consume(key, pointsToConsume, options).then((blRes) => {
              return Promise.resolve(this._combineRes(rlRej, blRes));
            }).catch(
              (blRej) => {
                if (blRej instanceof RateLimiterRes) {
                  return Promise.reject(this._combineRes(rlRej, blRej));
                } else {
                  return Promise.reject(blRej);
                }
              }
            );
          } else {
            return Promise.reject(rlRej);
          }
        });
      }
      /**
       * It doesn't expose available points from burstLimiter
       *
       * @param key
       * @returns {Promise<RateLimiterRes>}
       */
      get(key) {
        return Promise.all([
          this._rateLimiter.get(key),
          this._burstLimiter.get(key)
        ]).then(([rlRes, blRes]) => {
          return this._combineRes(rlRes, blRes);
        });
      }
      get points() {
        return this._rateLimiter.points;
      }
    };
  }
});

// asset-input/node_modules/rate-limiter-flexible/index.js
var require_rate_limiter_flexible = __commonJS({
  "asset-input/node_modules/rate-limiter-flexible/index.js"(exports2, module2) {
    var RateLimiterRedis = require_RateLimiterRedis();
    var RateLimiterMongo = require_RateLimiterMongo();
    var RateLimiterMySQL = require_RateLimiterMySQL();
    var RateLimiterPostgres = require_RateLimiterPostgres();
    var { RateLimiterClusterMaster, RateLimiterClusterMasterPM2, RateLimiterCluster } = require_RateLimiterCluster();
    var RateLimiterMemory2 = require_RateLimiterMemory();
    var RateLimiterMemcache = require_RateLimiterMemcache();
    var RLWrapperBlackAndWhite = require_RLWrapperBlackAndWhite();
    var RateLimiterUnion = require_RateLimiterUnion();
    var RateLimiterQueue = require_RateLimiterQueue();
    var BurstyRateLimiter = require_BurstyRateLimiter();
    var RateLimiterRes = require_RateLimiterRes();
    module2.exports = {
      RateLimiterRedis,
      RateLimiterMongo,
      RateLimiterMySQL,
      RateLimiterPostgres,
      RateLimiterMemory: RateLimiterMemory2,
      RateLimiterMemcache,
      RateLimiterClusterMaster,
      RateLimiterClusterMasterPM2,
      RateLimiterCluster,
      RLWrapperBlackAndWhite,
      RateLimiterUnion,
      RateLimiterQueue,
      BurstyRateLimiter,
      RateLimiterRes
    };
  }
});

// asset-input/node_modules/yallist/iterator.js
var require_iterator = __commonJS({
  "asset-input/node_modules/yallist/iterator.js"(exports2, module2) {
    "use strict";
    module2.exports = function(Yallist) {
      Yallist.prototype[Symbol.iterator] = function* () {
        for (let walker = this.head; walker; walker = walker.next) {
          yield walker.value;
        }
      };
    };
  }
});

// asset-input/node_modules/yallist/yallist.js
var require_yallist = __commonJS({
  "asset-input/node_modules/yallist/yallist.js"(exports2, module2) {
    "use strict";
    module2.exports = Yallist;
    Yallist.Node = Node;
    Yallist.create = Yallist;
    function Yallist(list) {
      var self2 = this;
      if (!(self2 instanceof Yallist)) {
        self2 = new Yallist();
      }
      self2.tail = null;
      self2.head = null;
      self2.length = 0;
      if (list && typeof list.forEach === "function") {
        list.forEach(function(item) {
          self2.push(item);
        });
      } else if (arguments.length > 0) {
        for (var i3 = 0, l2 = arguments.length; i3 < l2; i3++) {
          self2.push(arguments[i3]);
        }
      }
      return self2;
    }
    Yallist.prototype.removeNode = function(node) {
      if (node.list !== this) {
        throw new Error("removing node which does not belong to this list");
      }
      var next = node.next;
      var prev = node.prev;
      if (next) {
        next.prev = prev;
      }
      if (prev) {
        prev.next = next;
      }
      if (node === this.head) {
        this.head = next;
      }
      if (node === this.tail) {
        this.tail = prev;
      }
      node.list.length--;
      node.next = null;
      node.prev = null;
      node.list = null;
      return next;
    };
    Yallist.prototype.unshiftNode = function(node) {
      if (node === this.head) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var head = this.head;
      node.list = this;
      node.next = head;
      if (head) {
        head.prev = node;
      }
      this.head = node;
      if (!this.tail) {
        this.tail = node;
      }
      this.length++;
    };
    Yallist.prototype.pushNode = function(node) {
      if (node === this.tail) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var tail = this.tail;
      node.list = this;
      node.prev = tail;
      if (tail) {
        tail.next = node;
      }
      this.tail = node;
      if (!this.head) {
        this.head = node;
      }
      this.length++;
    };
    Yallist.prototype.push = function() {
      for (var i3 = 0, l2 = arguments.length; i3 < l2; i3++) {
        push(this, arguments[i3]);
      }
      return this.length;
    };
    Yallist.prototype.unshift = function() {
      for (var i3 = 0, l2 = arguments.length; i3 < l2; i3++) {
        unshift(this, arguments[i3]);
      }
      return this.length;
    };
    Yallist.prototype.pop = function() {
      if (!this.tail) {
        return void 0;
      }
      var res = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.shift = function() {
      if (!this.head) {
        return void 0;
      }
      var res = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.forEach = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.head, i3 = 0; walker !== null; i3++) {
        fn.call(thisp, walker.value, i3, this);
        walker = walker.next;
      }
    };
    Yallist.prototype.forEachReverse = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.tail, i3 = this.length - 1; walker !== null; i3--) {
        fn.call(thisp, walker.value, i3, this);
        walker = walker.prev;
      }
    };
    Yallist.prototype.get = function(n3) {
      for (var i3 = 0, walker = this.head; walker !== null && i3 < n3; i3++) {
        walker = walker.next;
      }
      if (i3 === n3 && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.getReverse = function(n3) {
      for (var i3 = 0, walker = this.tail; walker !== null && i3 < n3; i3++) {
        walker = walker.prev;
      }
      if (i3 === n3 && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.map = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.head; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.next;
      }
      return res;
    };
    Yallist.prototype.mapReverse = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.tail; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.prev;
      }
      return res;
    };
    Yallist.prototype.reduce = function(fn, initial) {
      var acc;
      var walker = this.head;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.head) {
        walker = this.head.next;
        acc = this.head.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i3 = 0; walker !== null; i3++) {
        acc = fn(acc, walker.value, i3);
        walker = walker.next;
      }
      return acc;
    };
    Yallist.prototype.reduceReverse = function(fn, initial) {
      var acc;
      var walker = this.tail;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.tail) {
        walker = this.tail.prev;
        acc = this.tail.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i3 = this.length - 1; walker !== null; i3--) {
        acc = fn(acc, walker.value, i3);
        walker = walker.prev;
      }
      return acc;
    };
    Yallist.prototype.toArray = function() {
      var arr = new Array(this.length);
      for (var i3 = 0, walker = this.head; walker !== null; i3++) {
        arr[i3] = walker.value;
        walker = walker.next;
      }
      return arr;
    };
    Yallist.prototype.toArrayReverse = function() {
      var arr = new Array(this.length);
      for (var i3 = 0, walker = this.tail; walker !== null; i3++) {
        arr[i3] = walker.value;
        walker = walker.prev;
      }
      return arr;
    };
    Yallist.prototype.slice = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i3 = 0, walker = this.head; walker !== null && i3 < from; i3++) {
        walker = walker.next;
      }
      for (; walker !== null && i3 < to; i3++, walker = walker.next) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.sliceReverse = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i3 = this.length, walker = this.tail; walker !== null && i3 > to; i3--) {
        walker = walker.prev;
      }
      for (; walker !== null && i3 > from; i3--, walker = walker.prev) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.splice = function(start, deleteCount, ...nodes) {
      if (start > this.length) {
        start = this.length - 1;
      }
      if (start < 0) {
        start = this.length + start;
      }
      for (var i3 = 0, walker = this.head; walker !== null && i3 < start; i3++) {
        walker = walker.next;
      }
      var ret = [];
      for (var i3 = 0; walker && i3 < deleteCount; i3++) {
        ret.push(walker.value);
        walker = this.removeNode(walker);
      }
      if (walker === null) {
        walker = this.tail;
      }
      if (walker !== this.head && walker !== this.tail) {
        walker = walker.prev;
      }
      for (var i3 = 0; i3 < nodes.length; i3++) {
        walker = insert(this, walker, nodes[i3]);
      }
      return ret;
    };
    Yallist.prototype.reverse = function() {
      var head = this.head;
      var tail = this.tail;
      for (var walker = head; walker !== null; walker = walker.prev) {
        var p2 = walker.prev;
        walker.prev = walker.next;
        walker.next = p2;
      }
      this.head = tail;
      this.tail = head;
      return this;
    };
    function insert(self2, node, value) {
      var inserted = node === self2.head ? new Node(value, null, node, self2) : new Node(value, node, node.next, self2);
      if (inserted.next === null) {
        self2.tail = inserted;
      }
      if (inserted.prev === null) {
        self2.head = inserted;
      }
      self2.length++;
      return inserted;
    }
    function push(self2, item) {
      self2.tail = new Node(item, self2.tail, null, self2);
      if (!self2.head) {
        self2.head = self2.tail;
      }
      self2.length++;
    }
    function unshift(self2, item) {
      self2.head = new Node(item, null, self2.head, self2);
      if (!self2.tail) {
        self2.tail = self2.head;
      }
      self2.length++;
    }
    function Node(value, prev, next, list) {
      if (!(this instanceof Node)) {
        return new Node(value, prev, next, list);
      }
      this.list = list;
      this.value = value;
      if (prev) {
        prev.next = this;
        this.prev = prev;
      } else {
        this.prev = null;
      }
      if (next) {
        next.prev = this;
        this.next = next;
      } else {
        this.next = null;
      }
    }
    try {
      require_iterator()(Yallist);
    } catch (er) {
    }
  }
});

// asset-input/node_modules/lru-cache/index.js
var require_lru_cache = __commonJS({
  "asset-input/node_modules/lru-cache/index.js"(exports2, module2) {
    "use strict";
    var Yallist = require_yallist();
    var MAX = Symbol("max");
    var LENGTH = Symbol("length");
    var LENGTH_CALCULATOR = Symbol("lengthCalculator");
    var ALLOW_STALE = Symbol("allowStale");
    var MAX_AGE = Symbol("maxAge");
    var DISPOSE = Symbol("dispose");
    var NO_DISPOSE_ON_SET = Symbol("noDisposeOnSet");
    var LRU_LIST = Symbol("lruList");
    var CACHE = Symbol("cache");
    var UPDATE_AGE_ON_GET = Symbol("updateAgeOnGet");
    var naiveLength = () => 1;
    var LRUCache = class {
      constructor(options) {
        if (typeof options === "number")
          options = { max: options };
        if (!options)
          options = {};
        if (options.max && (typeof options.max !== "number" || options.max < 0))
          throw new TypeError("max must be a non-negative number");
        const max = this[MAX] = options.max || Infinity;
        const lc = options.length || naiveLength;
        this[LENGTH_CALCULATOR] = typeof lc !== "function" ? naiveLength : lc;
        this[ALLOW_STALE] = options.stale || false;
        if (options.maxAge && typeof options.maxAge !== "number")
          throw new TypeError("maxAge must be a number");
        this[MAX_AGE] = options.maxAge || 0;
        this[DISPOSE] = options.dispose;
        this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
        this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
        this.reset();
      }
      // resize the cache when the max changes.
      set max(mL) {
        if (typeof mL !== "number" || mL < 0)
          throw new TypeError("max must be a non-negative number");
        this[MAX] = mL || Infinity;
        trim(this);
      }
      get max() {
        return this[MAX];
      }
      set allowStale(allowStale) {
        this[ALLOW_STALE] = !!allowStale;
      }
      get allowStale() {
        return this[ALLOW_STALE];
      }
      set maxAge(mA) {
        if (typeof mA !== "number")
          throw new TypeError("maxAge must be a non-negative number");
        this[MAX_AGE] = mA;
        trim(this);
      }
      get maxAge() {
        return this[MAX_AGE];
      }
      // resize the cache when the lengthCalculator changes.
      set lengthCalculator(lC) {
        if (typeof lC !== "function")
          lC = naiveLength;
        if (lC !== this[LENGTH_CALCULATOR]) {
          this[LENGTH_CALCULATOR] = lC;
          this[LENGTH] = 0;
          this[LRU_LIST].forEach((hit) => {
            hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
            this[LENGTH] += hit.length;
          });
        }
        trim(this);
      }
      get lengthCalculator() {
        return this[LENGTH_CALCULATOR];
      }
      get length() {
        return this[LENGTH];
      }
      get itemCount() {
        return this[LRU_LIST].length;
      }
      rforEach(fn, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].tail; walker !== null; ) {
          const prev = walker.prev;
          forEachStep(this, fn, walker, thisp);
          walker = prev;
        }
      }
      forEach(fn, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].head; walker !== null; ) {
          const next = walker.next;
          forEachStep(this, fn, walker, thisp);
          walker = next;
        }
      }
      keys() {
        return this[LRU_LIST].toArray().map((k2) => k2.key);
      }
      values() {
        return this[LRU_LIST].toArray().map((k2) => k2.value);
      }
      reset() {
        if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
          this[LRU_LIST].forEach((hit) => this[DISPOSE](hit.key, hit.value));
        }
        this[CACHE] = /* @__PURE__ */ new Map();
        this[LRU_LIST] = new Yallist();
        this[LENGTH] = 0;
      }
      dump() {
        return this[LRU_LIST].map((hit) => isStale(this, hit) ? false : {
          k: hit.key,
          v: hit.value,
          e: hit.now + (hit.maxAge || 0)
        }).toArray().filter((h3) => h3);
      }
      dumpLru() {
        return this[LRU_LIST];
      }
      set(key, value, maxAge) {
        maxAge = maxAge || this[MAX_AGE];
        if (maxAge && typeof maxAge !== "number")
          throw new TypeError("maxAge must be a number");
        const now = maxAge ? Date.now() : 0;
        const len = this[LENGTH_CALCULATOR](value, key);
        if (this[CACHE].has(key)) {
          if (len > this[MAX]) {
            del(this, this[CACHE].get(key));
            return false;
          }
          const node = this[CACHE].get(key);
          const item = node.value;
          if (this[DISPOSE]) {
            if (!this[NO_DISPOSE_ON_SET])
              this[DISPOSE](key, item.value);
          }
          item.now = now;
          item.maxAge = maxAge;
          item.value = value;
          this[LENGTH] += len - item.length;
          item.length = len;
          this.get(key);
          trim(this);
          return true;
        }
        const hit = new Entry(key, value, len, now, maxAge);
        if (hit.length > this[MAX]) {
          if (this[DISPOSE])
            this[DISPOSE](key, value);
          return false;
        }
        this[LENGTH] += hit.length;
        this[LRU_LIST].unshift(hit);
        this[CACHE].set(key, this[LRU_LIST].head);
        trim(this);
        return true;
      }
      has(key) {
        if (!this[CACHE].has(key)) return false;
        const hit = this[CACHE].get(key).value;
        return !isStale(this, hit);
      }
      get(key) {
        return get(this, key, true);
      }
      peek(key) {
        return get(this, key, false);
      }
      pop() {
        const node = this[LRU_LIST].tail;
        if (!node)
          return null;
        del(this, node);
        return node.value;
      }
      del(key) {
        del(this, this[CACHE].get(key));
      }
      load(arr) {
        this.reset();
        const now = Date.now();
        for (let l2 = arr.length - 1; l2 >= 0; l2--) {
          const hit = arr[l2];
          const expiresAt = hit.e || 0;
          if (expiresAt === 0)
            this.set(hit.k, hit.v);
          else {
            const maxAge = expiresAt - now;
            if (maxAge > 0) {
              this.set(hit.k, hit.v, maxAge);
            }
          }
        }
      }
      prune() {
        this[CACHE].forEach((value, key) => get(this, key, false));
      }
    };
    var get = (self2, key, doUse) => {
      const node = self2[CACHE].get(key);
      if (node) {
        const hit = node.value;
        if (isStale(self2, hit)) {
          del(self2, node);
          if (!self2[ALLOW_STALE])
            return void 0;
        } else {
          if (doUse) {
            if (self2[UPDATE_AGE_ON_GET])
              node.value.now = Date.now();
            self2[LRU_LIST].unshiftNode(node);
          }
        }
        return hit.value;
      }
    };
    var isStale = (self2, hit) => {
      if (!hit || !hit.maxAge && !self2[MAX_AGE])
        return false;
      const diff = Date.now() - hit.now;
      return hit.maxAge ? diff > hit.maxAge : self2[MAX_AGE] && diff > self2[MAX_AGE];
    };
    var trim = (self2) => {
      if (self2[LENGTH] > self2[MAX]) {
        for (let walker = self2[LRU_LIST].tail; self2[LENGTH] > self2[MAX] && walker !== null; ) {
          const prev = walker.prev;
          del(self2, walker);
          walker = prev;
        }
      }
    };
    var del = (self2, node) => {
      if (node) {
        const hit = node.value;
        if (self2[DISPOSE])
          self2[DISPOSE](hit.key, hit.value);
        self2[LENGTH] -= hit.length;
        self2[CACHE].delete(hit.key);
        self2[LRU_LIST].removeNode(node);
      }
    };
    var Entry = class {
      constructor(key, value, length, now, maxAge) {
        this.key = key;
        this.value = value;
        this.length = length;
        this.now = now;
        this.maxAge = maxAge || 0;
      }
    };
    var forEachStep = (self2, fn, node, thisp) => {
      let hit = node.value;
      if (isStale(self2, hit)) {
        del(self2, node);
        if (!self2[ALLOW_STALE])
          hit = void 0;
      }
      if (hit)
        fn.call(thisp, hit.value, hit.key, self2);
    };
    module2.exports = LRUCache;
  }
});

// asset-input/node_modules/lodash.clonedeep/index.js
var require_lodash8 = __commonJS({
  "asset-input/node_modules/lodash.clonedeep/index.js"(exports2, module2) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reFlags = /\w*$/;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    function addMapEntry(map, pair) {
      map.set(pair[0], pair[1]);
      return map;
    }
    function addSetEntry(set, value) {
      set.add(value);
      return set;
    }
    function arrayEach(array, iteratee) {
      var index = -1, length = array ? array.length : 0;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1, length = array ? array.length : 0;
      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    function baseTimes(n3, iteratee) {
      var index = -1, result = Array(n3);
      while (++index < n3) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e3) {
        }
      }
      return result;
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Buffer4 = moduleExports ? root.Buffer : void 0;
    var Symbol2 = root.Symbol;
    var Uint8Array2 = root.Uint8Array;
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    var objectCreate = Object.create;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var nativeIsBuffer = Buffer4 ? Buffer4.isBuffer : void 0;
    var nativeKeys = overArg(Object.keys, Object);
    var DataView2 = getNative(root, "DataView");
    var Map2 = getNative(root, "Map");
    var Promise2 = getNative(root, "Promise");
    var Set2 = getNative(root, "Set");
    var WeakMap2 = getNative(root, "WeakMap");
    var nativeCreate = getNative(Object, "create");
    var dataViewCtorString = toSource(DataView2);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap2);
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function Hash(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }
    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      return getMapData(this, key)["delete"](key);
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      getMapData(this, key).set(key, value);
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function Stack(entries) {
      this.__data__ = new ListCache(entries);
    }
    function stackClear() {
      this.__data__ = new ListCache();
    }
    function stackDelete(key) {
      return this.__data__["delete"](key);
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var cache = this.__data__;
      if (cache instanceof ListCache) {
        var pairs = cache.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          return this;
        }
        cache = this.__data__ = new MapCache(pairs);
      }
      cache.set(key, value);
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
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
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        object[key] = value;
      }
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }
    function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
      var result;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject2(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
          if (isHostObject(value)) {
            return object ? value : {};
          }
          result = initCloneObject(isFunc ? {} : value);
          if (!isDeep) {
            return copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, baseClone, isDeep);
        }
      }
      stack || (stack = new Stack());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (!isArr) {
        var props = isFull ? getAllKeys(value) : keys(value);
      }
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, isDeep, isFull, customizer, key2, value, stack));
      });
      return result;
    }
    function baseCreate(proto) {
      return isObject2(proto) ? objectCreate(proto) : {};
    }
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    function baseGetTag(value) {
      return objectToString.call(value);
    }
    function baseIsNative(value) {
      if (!isObject2(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
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
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var result = new buffer.constructor(buffer.length);
      buffer.copy(result);
      return result;
    }
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
      return result;
    }
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    function cloneMap(map, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
      return arrayReduce(array, addMapEntry, new map.constructor());
    }
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    function cloneSet(set, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
      return arrayReduce(array, addSetEntry, new set.constructor());
    }
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    function copyObject(source, props, object, customizer) {
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        assignValue(object, key, newValue === void 0 ? source[key] : newValue);
      }
      return object;
    }
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
    var getTag = baseGetTag;
    if (DataView2 && getTag(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
      getTag = function(value) {
        var result = objectToString.call(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : void 0;
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    function initCloneArray(array) {
      var length = array.length, result = array.constructor(length);
      if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    function initCloneByTag(object, tag, cloneFunc, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
          return new Ctor(+object);
        case dataViewTag:
          return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object, isDeep);
        case mapTag:
          return cloneMap(object, isDeep, cloneFunc);
        case numberTag:
        case stringTag:
          return new Ctor(object);
        case regexpTag:
          return cloneRegExp(object);
        case setTag:
          return cloneSet(object, isDeep, cloneFunc);
        case symbolTag:
          return cloneSymbol(object);
      }
    }
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e3) {
        }
        try {
          return func + "";
        } catch (e3) {
        }
      }
      return "";
    }
    function cloneDeep(value) {
      return baseClone(value, true, true);
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    function isArguments(value) {
      return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
    }
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike2(value) && isArrayLike(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isFunction(value) {
      var tag = isObject2(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject2(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike2(value) {
      return !!value && typeof value == "object";
    }
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    function stubArray() {
      return [];
    }
    function stubFalse() {
      return false;
    }
    module2.exports = cloneDeep;
  }
});

// asset-input/node_modules/lru-memoizer/lib/freeze.js
var require_freeze = __commonJS({
  "asset-input/node_modules/lru-memoizer/lib/freeze.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.deepFreeze = void 0;
    function deepFreeze(o) {
      if (o) {
        Object.freeze(o);
        Object.getOwnPropertyNames(o).forEach(function(prop) {
          if (o.hasOwnProperty(prop) && o[prop] !== null && (typeof o[prop] === "object" || typeof o[prop] === "function") && o[prop].constructor !== Buffer && !Object.isFrozen(o[prop])) {
            deepFreeze(o[prop]);
          }
        });
      }
      return o;
    }
    exports2.deepFreeze = deepFreeze;
  }
});

// asset-input/node_modules/lru-memoizer/lib/sync.js
var require_sync = __commonJS({
  "asset-input/node_modules/lru-memoizer/lib/sync.js"(exports2) {
    "use strict";
    var __read = exports2 && exports2.__read || function(o, n3) {
      var m3 = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m3) return o;
      var i3 = m3.call(o), r3, ar = [], e3;
      try {
        while ((n3 === void 0 || n3-- > 0) && !(r3 = i3.next()).done) ar.push(r3.value);
      } catch (error) {
        e3 = { error };
      } finally {
        try {
          if (r3 && !r3.done && (m3 = i3["return"])) m3.call(i3);
        } finally {
          if (e3) throw e3.error;
        }
      }
      return ar;
    };
    var __spread = exports2 && exports2.__spread || function() {
      for (var ar = [], i3 = 0; i3 < arguments.length; i3++) ar = ar.concat(__read(arguments[i3]));
      return ar;
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.syncMemoizer = void 0;
    var lru_cache_1 = __importDefault(require_lru_cache());
    var events_1 = require("events");
    var lodash_clonedeep_1 = __importDefault(require_lodash8());
    var freeze_1 = require_freeze();
    function syncMemoizer(options) {
      var cache = new lru_cache_1.default(options);
      var load = options.load;
      var hash = options.hash;
      var bypass = options.bypass;
      var itemMaxAge = options.itemMaxAge;
      var freeze = options.freeze;
      var clone2 = options.clone;
      var emitter = new events_1.EventEmitter();
      var defaultResult = Object.assign({
        del,
        reset: function() {
          return cache.reset();
        },
        keys: cache.keys.bind(cache),
        on: emitter.on.bind(emitter),
        once: emitter.once.bind(emitter)
      }, options);
      if (options.disable) {
        return Object.assign(load, defaultResult);
      }
      function del() {
        var key = hash.apply(void 0, __spread(arguments));
        cache.del(key);
      }
      function emit(event) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          parameters[_i - 1] = arguments[_i];
        }
        emitter.emit.apply(emitter, __spread([event], parameters));
      }
      function isPromise(result2) {
        return result2 && result2.then && typeof result2.then === "function";
      }
      function processResult(result2) {
        var res = result2;
        if (clone2) {
          if (isPromise(res)) {
            res = res.then(lodash_clonedeep_1.default);
          } else {
            res = lodash_clonedeep_1.default(res);
          }
        }
        if (freeze) {
          if (isPromise(res)) {
            res = res.then(freeze_1.deepFreeze);
          } else {
            freeze_1.deepFreeze(res);
          }
        }
        return res;
      }
      var result = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (bypass && bypass.apply(void 0, __spread(args))) {
          emit.apply(void 0, __spread(["miss"], args));
          return load.apply(void 0, __spread(args));
        }
        var key = hash.apply(void 0, __spread(args));
        var fromCache = cache.get(key);
        if (fromCache) {
          emit.apply(void 0, __spread(["hit"], args));
          return processResult(fromCache);
        }
        emit.apply(void 0, __spread(["miss"], args));
        var result2 = load.apply(void 0, __spread(args));
        if (itemMaxAge) {
          cache.set(key, result2, itemMaxAge.apply(void 0, __spread(args.concat([result2]))));
        } else {
          cache.set(key, result2);
        }
        return processResult(result2);
      };
      return Object.assign(result, defaultResult);
    }
    exports2.syncMemoizer = syncMemoizer;
  }
});

// asset-input/node_modules/lru-memoizer/lib/async.js
var require_async = __commonJS({
  "asset-input/node_modules/lru-memoizer/lib/async.js"(exports2) {
    "use strict";
    var __read = exports2 && exports2.__read || function(o, n3) {
      var m3 = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m3) return o;
      var i3 = m3.call(o), r3, ar = [], e3;
      try {
        while ((n3 === void 0 || n3-- > 0) && !(r3 = i3.next()).done) ar.push(r3.value);
      } catch (error) {
        e3 = { error };
      } finally {
        try {
          if (r3 && !r3.done && (m3 = i3["return"])) m3.call(i3);
        } finally {
          if (e3) throw e3.error;
        }
      }
      return ar;
    };
    var __spread = exports2 && exports2.__spread || function() {
      for (var ar = [], i3 = 0; i3 < arguments.length; i3++) ar = ar.concat(__read(arguments[i3]));
      return ar;
    };
    var __values = exports2 && exports2.__values || function(o) {
      var s2 = typeof Symbol === "function" && Symbol.iterator, m3 = s2 && o[s2], i3 = 0;
      if (m3) return m3.call(o);
      if (o && typeof o.length === "number") return {
        next: function() {
          if (o && i3 >= o.length) o = void 0;
          return { value: o && o[i3++], done: !o };
        }
      };
      throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.asyncMemoizer = void 0;
    var lru_cache_1 = __importDefault(require_lru_cache());
    var events_1 = require("events");
    var lodash_clonedeep_1 = __importDefault(require_lodash8());
    var freeze_1 = require_freeze();
    var sync_1 = require_sync();
    function asyncMemoizer(options) {
      var cache = new lru_cache_1.default(options);
      var load = options.load;
      var hash = options.hash;
      var bypass = options.bypass;
      var itemMaxAge = options.itemMaxAge;
      var freeze = options.freeze;
      var clone2 = options.clone;
      var queueMaxAge = options.queueMaxAge || 1e3;
      var loading = /* @__PURE__ */ new Map();
      var emitter = new events_1.EventEmitter();
      var memoizerMethods = Object.assign({
        del,
        reset: function() {
          return cache.reset();
        },
        keys: cache.keys.bind(cache),
        on: emitter.on.bind(emitter),
        once: emitter.once.bind(emitter)
      }, options);
      if (options.disable) {
        return Object.assign(load, memoizerMethods);
      }
      function del() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var key = hash.apply(void 0, __spread(args));
        cache.del(key);
      }
      function add(key, parameters, result) {
        if (freeze) {
          result.forEach(freeze_1.deepFreeze);
        }
        if (itemMaxAge) {
          cache.set(key, result, itemMaxAge.apply(void 0, __spread(parameters.concat(result))));
        } else {
          cache.set(key, result);
        }
      }
      function runCallbacks(callbacks, args) {
        var e_1, _a;
        try {
          for (var callbacks_1 = __values(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
            var callback = callbacks_1_1.value;
            if (clone2) {
              setImmediate.apply(void 0, __spread([callback], args.map(lodash_clonedeep_1.default)));
            } else {
              setImmediate.apply(void 0, __spread([callback], args));
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1.return)) _a.call(callbacks_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
      function emit(event) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          parameters[_i - 1] = arguments[_i];
        }
        emitter.emit.apply(emitter, __spread([event], parameters));
      }
      function memoizedFunction() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var parameters = args.slice(0, -1);
        var callback = args.slice(-1).pop();
        var key;
        if (bypass && bypass.apply(void 0, __spread(parameters))) {
          emit.apply(void 0, __spread(["miss"], parameters));
          return load.apply(void 0, __spread(args));
        }
        if (parameters.length === 0 && !hash) {
          key = "_";
        } else {
          key = hash.apply(void 0, __spread(parameters));
        }
        var fromCache = cache.get(key);
        if (fromCache) {
          emit.apply(void 0, __spread(["hit"], parameters));
          return runCallbacks([callback], [null].concat(fromCache));
        }
        var pendingLoad = loading.get(key);
        if (pendingLoad && pendingLoad.expiresAt > Date.now()) {
          pendingLoad.queue.push(callback);
          emit.apply(void 0, __spread(["queue"], parameters));
          return;
        }
        emit.apply(void 0, __spread(["miss"], parameters));
        var started = Date.now();
        var queue = [callback];
        loading.set(key, {
          queue,
          expiresAt: started + queueMaxAge
        });
        var loadHandler = function() {
          var args2 = [];
          for (var _i2 = 0; _i2 < arguments.length; _i2++) {
            args2[_i2] = arguments[_i2];
          }
          var err = args2[0];
          if (!err) {
            add(key, parameters, args2.slice(1));
          }
          loading.delete(key);
          emit.apply(void 0, __spread(["loaded", Date.now() - started], parameters));
          runCallbacks(queue, args2);
        };
        load.apply(void 0, __spread(parameters, [loadHandler]));
      }
      ;
      return Object.assign(memoizedFunction, memoizerMethods);
    }
    exports2.asyncMemoizer = asyncMemoizer;
    asyncMemoizer.sync = sync_1.syncMemoizer;
  }
});

// asset-input/node_modules/lru-memoizer/lib/index.js
var require_lib = __commonJS({
  "asset-input/node_modules/lru-memoizer/lib/index.js"(exports2, module2) {
    "use strict";
    var async_1 = require_async();
    module2.exports = async_1.asyncMemoizer;
  }
});

// asset-input/src/handlers/approvalHandler.ts
var approvalHandler_exports = {};
__export(approvalHandler_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(approvalHandler_exports);

// asset-input/node_modules/@inversifyjs/common/lib/esm/index.js
function e(e3) {
  return ("object" == typeof e3 && null !== e3 || "function" == typeof e3) && "function" == typeof e3.then;
}
function t(e3) {
  switch (typeof e3) {
    case "string":
    case "symbol":
      return e3.toString();
    case "function":
      return e3.name;
    default:
      throw new Error(`Unexpected ${typeof e3} service id type`);
  }
}
var n = Symbol.for("@inversifyjs/common/islazyServiceIdentifier");
var r = class {
  [n];
  #e;
  constructor(e3) {
    this.#e = e3, this[n] = true;
  }
  static is(e3) {
    return "object" == typeof e3 && null !== e3 && true === e3[n];
  }
  unwrap() {
    return this.#e();
  }
};

// asset-input/node_modules/@inversifyjs/container/lib/esm/index.js
var import_lite = __toESM(require_ReflectLite(), 1);

// asset-input/node_modules/@inversifyjs/reflect-metadata-utils/lib/esm/index.js
function c(t5, n3, e3) {
  return Reflect.getOwnMetadata(n3, t5, e3);
}
function a(t5, n3, e3, u2) {
  Reflect.defineMetadata(n3, e3, t5, u2);
}
function i(t5, n3, e3, u2, f4) {
  const r3 = u2(c(t5, n3, f4) ?? e3());
  Reflect.defineMetadata(n3, r3, t5, f4);
}

// asset-input/node_modules/@inversifyjs/core/lib/esm/index.js
var a2 = "@inversifyjs/container/bindingId";
function c2() {
  const i3 = c(Object, a2) ?? 0;
  return i3 === Number.MAX_SAFE_INTEGER ? a(Object, a2, Number.MIN_SAFE_INTEGER) : i(Object, a2, () => i3, (e3) => e3 + 1), i3;
}
var d = { Request: "Request", Singleton: "Singleton", Transient: "Transient" };
var u = { ConstantValue: "ConstantValue", DynamicValue: "DynamicValue", Factory: "Factory", Instance: "Instance", Provider: "Provider", ResolvedValue: "ResolvedValue", ServiceRedirection: "ServiceRedirection" };
function* l(...e3) {
  for (const t5 of e3) yield* t5;
}
var p = class _p {
  #e;
  #t;
  #n;
  constructor(e3) {
    this.#e = /* @__PURE__ */ new Map(), this.#t = {};
    for (const t5 of Reflect.ownKeys(e3)) this.#t[t5] = /* @__PURE__ */ new Map();
    this.#n = e3;
  }
  add(e3, t5) {
    this.#i(e3).push(t5);
    for (const n3 of Reflect.ownKeys(t5)) this.#o(n3, t5[n3]).push(e3);
  }
  clone() {
    const e3 = this.#r(), t5 = this.#s(), n3 = Reflect.ownKeys(this.#n), i3 = this._buildNewInstance(this.#n);
    this.#a(this.#e, i3.#e, e3, t5);
    for (const t6 of n3) this.#c(this.#t[t6], i3.#t[t6], e3);
    return i3;
  }
  get(e3, t5) {
    return this.#t[e3].get(t5);
  }
  getAllKeys(e3) {
    return this.#t[e3].keys();
  }
  removeByRelation(e3, t5) {
    const n3 = this.get(e3, t5);
    if (void 0 === n3) return;
    const i3 = new Set(n3);
    for (const n4 of i3) {
      const i4 = this.#e.get(n4);
      if (void 0 === i4) throw new Error("Expecting model relation, none found");
      for (const o of i4) o[e3] === t5 && this.#d(n4, o);
      this.#e.delete(n4);
    }
  }
  _buildNewInstance(e3) {
    return new _p(e3);
  }
  _cloneModel(e3) {
    return e3;
  }
  _cloneRelation(e3) {
    return e3;
  }
  #r() {
    const e3 = /* @__PURE__ */ new Map();
    for (const t5 of this.#e.keys()) {
      const n3 = this._cloneModel(t5);
      e3.set(t5, n3);
    }
    return e3;
  }
  #s() {
    const e3 = /* @__PURE__ */ new Map();
    for (const t5 of this.#e.values()) for (const n3 of t5) {
      const t6 = this._cloneRelation(n3);
      e3.set(n3, t6);
    }
    return e3;
  }
  #i(e3) {
    let t5 = this.#e.get(e3);
    return void 0 === t5 && (t5 = [], this.#e.set(e3, t5)), t5;
  }
  #o(e3, t5) {
    let n3 = this.#t[e3].get(t5);
    return void 0 === n3 && (n3 = [], this.#t[e3].set(t5, n3)), n3;
  }
  #u(e3, t5) {
    const n3 = t5.get(e3);
    if (void 0 === n3) throw new Error("Expecting model to be cloned, none found");
    return n3;
  }
  #l(e3, t5) {
    const n3 = t5.get(e3);
    if (void 0 === n3) throw new Error("Expecting relation to be cloned, none found");
    return n3;
  }
  #c(e3, t5, n3) {
    for (const [i3, o] of e3) {
      const e4 = new Array();
      for (const t6 of o) e4.push(this.#u(t6, n3));
      t5.set(i3, e4);
    }
  }
  #a(e3, t5, n3, i3) {
    for (const [o, r3] of e3) {
      const e4 = new Array();
      for (const t6 of r3) e4.push(this.#l(t6, i3));
      t5.set(this.#u(o, n3), e4);
    }
  }
  #d(e3, t5) {
    for (const n3 of Reflect.ownKeys(t5)) this.#p(e3, n3, t5[n3]);
  }
  #p(e3, t5, n3) {
    const i3 = this.#t[t5].get(n3);
    if (void 0 !== i3) {
      const o = i3.indexOf(e3);
      -1 !== o && i3.splice(o, 1), 0 === i3.length && this.#t[t5].delete(n3);
    }
  }
};
var f;
!function(e3) {
  e3.moduleId = "moduleId", e3.serviceId = "serviceId";
}(f || (f = {}));
var v = class _v {
  #f;
  #v;
  constructor(e3, t5) {
    this.#f = t5 ?? new p({ moduleId: { isOptional: true }, serviceId: { isOptional: false } }), this.#v = e3;
  }
  static build(e3) {
    return new _v(e3);
  }
  add(e3, t5) {
    this.#f.add(e3, t5);
  }
  clone() {
    return new _v(this.#v, this.#f.clone());
  }
  get(e3) {
    const t5 = [], n3 = this.#f.get(f.serviceId, e3);
    void 0 !== n3 && t5.push(n3);
    const i3 = this.#v()?.get(e3);
    if (void 0 !== i3 && t5.push(i3), 0 !== t5.length) return l(...t5);
  }
  removeAllByModuleId(e3) {
    this.#f.removeByRelation(f.moduleId, e3);
  }
  removeAllByServiceId(e3) {
    this.#f.removeByRelation(f.serviceId, e3);
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
  constructor(e3, t5, n3) {
    super(t5, n3), this[y] = true, this.kind = e3;
  }
  static is(e3) {
    return "object" == typeof e3 && null !== e3 && true === e3[y];
  }
  static isErrorOfKind(e3, t5) {
    return _M.is(e3) && e3.kind === t5;
  }
};
var I;
var b;
var w;
var C;
var S;
function N(t5) {
  const n3 = c(t5, h) ?? g();
  if (!function(t6) {
    const n4 = c(t6, m);
    return void 0 !== n4 && 0 !== n4;
  }(t5)) return function(e3, t6) {
    const n4 = [];
    if (t6.length < e3.length) throw new M(I.missingInjectionDecorator, `Found unexpected missing metadata on type "${e3.name}". "${e3.name}" constructor requires at least ${e3.length.toString()} arguments, found ${t6.length.toString()} instead.
Are you using @inject, @multiInject or @unmanaged decorators in every non optional constructor argument?

If you're using typescript and want to rely on auto injection, set "emitDecoratorMetadata" compiler option to true`);
    for (let e4 = 0; e4 < t6.length; ++e4) void 0 === t6[e4] && n4.push(e4);
    if (n4.length > 0) throw new M(I.missingInjectionDecorator, `Found unexpected missing metadata on type "${e3.name}" at constructor indexes "${n4.join('", "')}".

Are you using @inject, @multiInject or @unmanaged decorators at those indexes?

If you're using typescript and want to rely on auto injection, set "emitDecoratorMetadata" compiler option to true`);
  }(t5, n3.constructorArguments), n3;
  !function(e3, t6) {
    const n4 = [];
    for (let i3 = 0; i3 < t6.constructorArguments.length; ++i3) {
      const o = t6.constructorArguments[i3];
      void 0 !== o && o.kind !== b.unknown || n4.push(`  - Missing or incomplete metadata for type "${e3.name}" at constructor argument with index ${i3.toString()}.
Every constructor parameter must be decorated either with @inject, @multiInject or @unmanaged decorator.`);
    }
    for (const [i3, o] of t6.properties) o.kind === b.unknown && n4.push(`  - Missing or incomplete metadata for type "${e3.name}" at property "${i3.toString()}".
This property must be decorated either with @inject or @multiInject decorator.`);
    if (0 === n4.length) throw new M(I.unknown, `Unexpected class metadata for type "${e3.name}" with uncompletion traces.
This might be caused by one of the following reasons:

1. A third party library is targeting inversify reflection metadata.
2. A bug is causing the issue. Consider submiting an issue to fix it.`);
    throw new M(I.missingInjectionDecorator, `Invalid class metadata at type ${e3.name}:

${n4.join("\n\n")}`);
  }(t5, n3);
}
function P(e3, t5) {
  const n3 = N(t5).scope ?? e3.scope;
  return { cache: { isRight: false, value: void 0 }, id: c2(), implementationType: t5, isSatisfiedBy: () => true, moduleId: void 0, onActivation: void 0, onDeactivation: void 0, scope: n3, serviceIdentifier: t5, type: u.Instance };
}
function A(e3) {
  return e3.isRight ? { isRight: true, value: e3.value } : e3;
}
function x(e3) {
  switch (e3.type) {
    case u.ConstantValue:
    case u.DynamicValue:
      return function(e4) {
        return { cache: A(e4.cache), id: e4.id, isSatisfiedBy: e4.isSatisfiedBy, moduleId: e4.moduleId, onActivation: e4.onActivation, onDeactivation: e4.onDeactivation, scope: e4.scope, serviceIdentifier: e4.serviceIdentifier, type: e4.type, value: e4.value };
      }(e3);
    case u.Factory:
      return function(e4) {
        return { cache: A(e4.cache), factory: e4.factory, id: e4.id, isSatisfiedBy: e4.isSatisfiedBy, moduleId: e4.moduleId, onActivation: e4.onActivation, onDeactivation: e4.onDeactivation, scope: e4.scope, serviceIdentifier: e4.serviceIdentifier, type: e4.type };
      }(e3);
    case u.Instance:
      return function(e4) {
        return { cache: A(e4.cache), id: e4.id, implementationType: e4.implementationType, isSatisfiedBy: e4.isSatisfiedBy, moduleId: e4.moduleId, onActivation: e4.onActivation, onDeactivation: e4.onDeactivation, scope: e4.scope, serviceIdentifier: e4.serviceIdentifier, type: e4.type };
      }(e3);
    case u.Provider:
      return function(e4) {
        return { cache: A(e4.cache), id: e4.id, isSatisfiedBy: e4.isSatisfiedBy, moduleId: e4.moduleId, onActivation: e4.onActivation, onDeactivation: e4.onDeactivation, provider: e4.provider, scope: e4.scope, serviceIdentifier: e4.serviceIdentifier, type: e4.type };
      }(e3);
    case u.ResolvedValue:
      return function(e4) {
        return { cache: A(e4.cache), factory: e4.factory, id: e4.id, isSatisfiedBy: e4.isSatisfiedBy, metadata: e4.metadata, moduleId: e4.moduleId, onActivation: e4.onActivation, onDeactivation: e4.onDeactivation, scope: e4.scope, serviceIdentifier: e4.serviceIdentifier, type: e4.type };
      }(e3);
    case u.ServiceRedirection:
      return function(e4) {
        return { id: e4.id, isSatisfiedBy: e4.isSatisfiedBy, moduleId: e4.moduleId, serviceIdentifier: e4.serviceIdentifier, targetServiceIdentifier: e4.targetServiceIdentifier, type: e4.type };
      }(e3);
  }
}
!function(e3) {
  e3[e3.injectionDecoratorConflict = 0] = "injectionDecoratorConflict", e3[e3.missingInjectionDecorator = 1] = "missingInjectionDecorator", e3[e3.planning = 2] = "planning", e3[e3.resolution = 3] = "resolution", e3[e3.unknown = 4] = "unknown";
}(I || (I = {})), function(e3) {
  e3[e3.unknown = 32] = "unknown";
}(b || (b = {})), function(e3) {
  e3.id = "id", e3.moduleId = "moduleId", e3.serviceId = "serviceId";
}(w || (w = {}));
var R = class _R extends p {
  _buildNewInstance(e3) {
    return new _R(e3);
  }
  _cloneModel(e3) {
    return x(e3);
  }
};
var T = class _T {
  #h;
  #g;
  #v;
  constructor(e3, t5, n3) {
    this.#g = n3 ?? new R({ id: { isOptional: false }, moduleId: { isOptional: true }, serviceId: { isOptional: false } }), this.#v = e3, this.#h = t5;
  }
  static build(e3, t5) {
    return new _T(e3, t5);
  }
  clone() {
    return new _T(this.#v, this.#h, this.#g.clone());
  }
  get(e3) {
    const t5 = this.getNonParentBindings(e3) ?? this.#v()?.get(e3);
    if (void 0 !== t5) return t5;
    const n3 = this.#m(e3);
    return void 0 === n3 ? n3 : [n3];
  }
  *getChained(e3) {
    const t5 = this.getNonParentBindings(e3);
    void 0 !== t5 && (yield* t5);
    const n3 = this.#v();
    if (void 0 === n3) {
      if (void 0 === t5) {
        const t6 = this.#m(e3);
        void 0 !== t6 && (yield t6);
      }
    } else yield* n3.getChained(e3);
  }
  getBoundServices() {
    const e3 = new Set(this.#g.getAllKeys(w.serviceId)), t5 = this.#v();
    if (void 0 !== t5) for (const n3 of t5.getBoundServices()) e3.add(n3);
    return e3;
  }
  getById(e3) {
    return this.#g.get(w.id, e3) ?? this.#v()?.getById(e3);
  }
  getByModuleId(e3) {
    return this.#g.get(w.moduleId, e3) ?? this.#v()?.getByModuleId(e3);
  }
  getNonParentBindings(e3) {
    return this.#g.get(w.serviceId, e3);
  }
  getNonParentBoundServices() {
    return this.#g.getAllKeys(w.serviceId);
  }
  removeById(e3) {
    this.#g.removeByRelation(w.id, e3);
  }
  removeAllByModuleId(e3) {
    this.#g.removeByRelation(w.moduleId, e3);
  }
  removeAllByServiceId(e3) {
    this.#g.removeByRelation(w.serviceId, e3);
  }
  set(e3) {
    const t5 = { [w.id]: e3.id, [w.serviceId]: e3.serviceIdentifier };
    void 0 !== e3.moduleId && (t5[w.moduleId] = e3.moduleId), this.#g.add(e3, t5);
  }
  #m(e3) {
    if (void 0 === this.#h || "function" != typeof e3) return;
    const t5 = P(this.#h, e3);
    return this.set(t5), t5;
  }
};
!function(e3) {
  e3.moduleId = "moduleId", e3.serviceId = "serviceId";
}(C || (C = {}));
var j = class _j {
  #y;
  #v;
  constructor(e3, t5) {
    this.#y = t5 ?? new p({ moduleId: { isOptional: true }, serviceId: { isOptional: false } }), this.#v = e3;
  }
  static build(e3) {
    return new _j(e3);
  }
  add(e3, t5) {
    this.#y.add(e3, t5);
  }
  clone() {
    return new _j(this.#v, this.#y.clone());
  }
  get(e3) {
    const t5 = [], n3 = this.#y.get(C.serviceId, e3);
    void 0 !== n3 && t5.push(n3);
    const i3 = this.#v()?.get(e3);
    if (void 0 !== i3 && t5.push(i3), 0 !== t5.length) return l(...t5);
  }
  removeAllByModuleId(e3) {
    this.#y.removeByRelation(C.moduleId, e3);
  }
  removeAllByServiceId(e3) {
    this.#y.removeByRelation(C.serviceId, e3);
  }
};
function $(e3, t5) {
  return (...n3) => (i3) => {
    if (void 0 === i3) return e3(...n3);
    if (i3.kind === S.unmanaged) throw new M(I.injectionDecoratorConflict, "Unexpected injection found. Multiple @inject, @multiInject or @unmanaged decorators found");
    return t5(i3, ...n3);
  };
}
function D(e3) {
  if (e3.kind !== b.unknown && true !== e3.isFromTypescriptParamType) throw new M(I.injectionDecoratorConflict, "Unexpected injection found. Multiple @inject, @multiInject or @unmanaged decorators found");
}
!function(e3) {
  e3[e3.multipleInjection = 0] = "multipleInjection", e3[e3.singleInjection = 1] = "singleInjection", e3[e3.unmanaged = 2] = "unmanaged";
}(S || (S = {}));
var V = $(function(e3, t5, n3) {
  return e3 === S.multipleInjection ? { chained: n3?.chained ?? false, kind: e3, name: void 0, optional: false, tags: /* @__PURE__ */ new Map(), value: t5 } : { kind: e3, name: void 0, optional: false, tags: /* @__PURE__ */ new Map(), value: t5 };
}, function(e3, t5, n3, i3) {
  return D(e3), t5 === S.multipleInjection ? { ...e3, chained: i3?.chained ?? false, kind: t5, value: n3 } : { ...e3, kind: t5, value: n3 };
});
var E;
!function(e3) {
  e3[e3.method = 0] = "method", e3[e3.parameter = 1] = "parameter", e3[e3.property = 2] = "property";
}(E || (E = {}));
var K = "@inversifyjs/core/classIsInjectableFlagReflectKey";
var q = [Array, BigInt, Boolean, Function, Number, Object, String];
function G(t5) {
  const i3 = c(t5, "design:paramtypes");
  void 0 !== i3 && i(t5, h, g, /* @__PURE__ */ function(e3) {
    return (t6) => (e3.forEach((e4, n3) => {
      var i4;
      void 0 !== t6.constructorArguments[n3] || (i4 = e4, q.includes(i4)) || (t6.constructorArguments[n3] = function(e5) {
        return { isFromTypescriptParamType: true, kind: S.singleInjection, name: void 0, optional: false, tags: /* @__PURE__ */ new Map(), value: e5 };
      }(e4));
    }), t6);
  }(i3));
}
function W(i3) {
  return (o) => {
    !function(n3) {
      if (void 0 !== c(n3, K)) throw new M(I.injectionDecoratorConflict, `Cannot apply @injectable decorator multiple times at class "${n3.name}"`);
      a(n3, K, true);
    }(o), G(o), void 0 !== i3 && i(o, h, g, (e3) => ({ ...e3, scope: i3 }));
  };
}
function ue() {
  return { kind: S.unmanaged };
}
var le = $(ue, function(e3) {
  if (D(e3), function(e4) {
    return void 0 !== e4.name || e4.optional || e4.tags.size > 0;
  }(e3)) throw new M(I.injectionDecoratorConflict, "Unexpected injection found. Found @unmanaged injection with additional @named, @optional, @tagged or @targetName injections");
  return ue();
});
var fe;
!function(e3) {
  e3[e3.multipleInjection = 0] = "multipleInjection", e3[e3.singleInjection = 1] = "singleInjection";
}(fe || (fe = {}));
var ve = /stack space|call stack|too much recursion/i;
var he = /too much recursion/;
function ge(e3) {
  try {
    return e3 instanceof Error && (e3 instanceof RangeError && ve.test(e3.message) || "InternalError" === e3.name && he.test(e3.message));
  } catch (e4) {
    return e4 instanceof SyntaxError && e4.message.includes("Stack overflow");
  }
}
function me(e3, t5) {
  if (ge(t5)) {
    const n3 = function(e4) {
      const t6 = [...e4];
      if (0 === t6.length) return "(No dependency trace)";
      return t6.map(t).join(" -> ");
    }(function(e4) {
      const t6 = /* @__PURE__ */ new Set();
      for (const n4 of e4.servicesBranch) {
        if (t6.has(n4)) return [...t6, n4];
        t6.add(n4);
      }
      return [...t6];
    }(e3));
    throw new M(I.planning, `Circular dependency found: ${n3}`, { cause: t5 });
  }
  throw t5;
}
var ye = Symbol.for("@inversifyjs/core/LazyPlanServiceNode");
var Me = class {
  [ye];
  _serviceIdentifier;
  _serviceNode;
  constructor(e3, t5) {
    this[ye] = true, this._serviceNode = e3, this._serviceIdentifier = t5;
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
  set bindings(e3) {
    this._getNode().bindings = e3;
  }
  set isContextFree(e3) {
    this._getNode().isContextFree = e3;
  }
  static is(e3) {
    return "object" == typeof e3 && null !== e3 && true === e3[ye];
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
  constructor(e3) {
    this.#M = e3;
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
function be(e3, t5, n3) {
  const i3 = n3?.customServiceIdentifier ?? t5.serviceIdentifier, o = (true === n3?.chained ? [...e3.operations.getBindingsChained(i3)] : [...e3.operations.getBindings(i3) ?? []]).filter((e4) => e4.isSatisfiedBy(t5));
  if (0 === o.length && void 0 !== e3.autobindOptions && "function" == typeof i3) {
    const n4 = P(e3.autobindOptions, i3);
    e3.operations.setBinding(n4), n4.isSatisfiedBy(t5) && o.push(n4);
  }
  return o;
}
var we = class _we {
  last;
  constructor(e3) {
    this.last = e3;
  }
  concat(e3) {
    return new _we({ elem: e3, previous: this.last });
  }
  [Symbol.iterator]() {
    let e3 = this.last;
    return { next: () => {
      if (void 0 === e3) return { done: true, value: void 0 };
      const t5 = e3.elem;
      return e3 = e3.previous, { done: false, value: t5 };
    } };
  }
};
function Ce(e3) {
  const t5 = /* @__PURE__ */ new Map();
  return void 0 !== e3.rootConstraints.tag && t5.set(e3.rootConstraints.tag.key, e3.rootConstraints.tag.value), new we({ elem: { getAncestorsCalled: false, name: e3.rootConstraints.name, serviceIdentifier: e3.rootConstraints.serviceIdentifier, tags: t5 }, previous: void 0 });
}
function Se(e3) {
  return void 0 !== e3.redirections;
}
function Ne(e3, t5, n3, i3) {
  const r3 = n3.elem.serviceIdentifier, s2 = n3.previous?.elem.serviceIdentifier;
  Array.isArray(e3) ? function(e4, t6, n4, i4, r4, s3) {
    if (0 !== e4.length) {
      const t7 = s3[s3.length - 1] ?? n4, a3 = `Ambiguous bindings found for service: "${t(t7)}".${Re(s3)}

Registered bindings:

${e4.map((e5) => function(e6) {
        switch (e6.type) {
          case u.Instance:
            return `[ type: "${e6.type}", serviceIdentifier: "${t(e6.serviceIdentifier)}", scope: "${e6.scope}", implementationType: "${e6.implementationType.name}" ]`;
          case u.ServiceRedirection:
            return `[ type: "${e6.type}", serviceIdentifier: "${t(e6.serviceIdentifier)}", redirection: "${t(e6.targetServiceIdentifier)}" ]`;
          default:
            return `[ type: "${e6.type}", serviceIdentifier: "${t(e6.serviceIdentifier)}", scope: "${e6.scope}" ]`;
        }
      }(e5.binding)).join("\n")}

Trying to resolve bindings for "${Ae(n4, i4)}".${xe(r4)}`;
      throw new M(I.planning, a3);
    }
    t6 || Pe(n4, i4, r4, s3);
  }(e3, t5, r3, s2, n3.elem, i3) : function(e4, t6, n4, i4, o, r4) {
    void 0 !== e4 || t6 || Pe(n4, i4, o, r4);
  }(e3, t5, r3, s2, n3.elem, i3);
}
function Pe(e3, t5, n3, i3) {
  const r3 = i3[i3.length - 1] ?? e3, s2 = `No bindings found for service: "${t(r3)}".

Trying to resolve bindings for "${Ae(e3, t5)}".${Re(i3)}${xe(n3)}`;
  throw new M(I.planning, s2);
}
function Ae(e3, t5) {
  return void 0 === t5 ? `${t(e3)} (Root service)` : t(t5);
}
function xe(e3) {
  const t5 = 0 === e3.tags.size ? "" : `
- tags:
  - ${[...e3.tags.keys()].map((e4) => e4.toString()).join("\n  - ")}`;
  return `

Binding constraints:
- service identifier: ${t(e3.serviceIdentifier)}
- name: ${e3.name?.toString() ?? "-"}${t5}`;
}
function Re(e3) {
  return 0 === e3.length ? "" : `

- service redirections:
  - ${e3.map((e4) => t(e4)).join("\n  - ")}`;
}
function Te(e3, t5, n3, i3) {
  if (1 === e3.redirections.length) {
    const [o] = e3.redirections;
    return void (Se(o) && Te(o, t5, n3, [...i3, o.binding.targetServiceIdentifier]));
  }
  Ne(e3.redirections, t5, n3, i3);
}
function je(e3, t5, n3) {
  if (Array.isArray(e3.bindings) && 1 === e3.bindings.length) {
    const [i3] = e3.bindings;
    return void (Se(i3) && Te(i3, t5, n3, [i3.binding.targetServiceIdentifier]));
  }
  Ne(e3.bindings, t5, n3, []);
}
function Be(e3) {
  return r.is(e3) ? e3.unwrap() : e3;
}
function Fe(e3) {
  return (t5, n3, i3) => {
    const o = Be(i3.value), r3 = n3.concat({ getAncestorsCalled: false, name: i3.name, serviceIdentifier: o, tags: i3.tags }), s2 = new Ie(r3.last), a3 = i3.kind === S.multipleInjection && i3.chained, c3 = be(t5, s2, { chained: a3 }), d2 = [], u2 = { bindings: d2, isContextFree: true, serviceIdentifier: o };
    if (d2.push(...e3(t5, r3, c3, u2, a3)), u2.isContextFree = !r3.last.elem.getAncestorsCalled, i3.kind === S.singleInjection) {
      je(u2, i3.optional, r3.last);
      const [e4] = d2;
      u2.bindings = e4;
    }
    return u2;
  };
}
function ke(e3) {
  return (t5, n3, i3) => {
    const o = Be(i3.value), r3 = n3.concat({ getAncestorsCalled: false, name: i3.name, serviceIdentifier: o, tags: i3.tags }), s2 = new Ie(r3.last), a3 = i3.kind === fe.multipleInjection && i3.chained, c3 = be(t5, s2, { chained: a3 }), d2 = [], u2 = { bindings: d2, isContextFree: true, serviceIdentifier: o };
    if (d2.push(...e3(t5, r3, c3, u2, a3)), u2.isContextFree = !r3.last.elem.getAncestorsCalled, i3.kind === fe.singleInjection) {
      je(u2, i3.optional, r3.last);
      const [e4] = d2;
      u2.bindings = e4;
    }
    return u2;
  };
}
function $e(e3) {
  const t5 = /* @__PURE__ */ function(e4) {
    return (t6, n4, i4) => {
      const o2 = { binding: n4, classMetadata: t6.operations.getClassMetadata(n4.implementationType), constructorParams: [], propertyParams: /* @__PURE__ */ new Map() }, r3 = { autobindOptions: t6.autobindOptions, node: o2, operations: t6.operations, servicesBranch: t6.servicesBranch };
      return e4(r3, i4);
    };
  }(e3), n3 = /* @__PURE__ */ function(e4) {
    return (t6, n4, i4) => {
      const o2 = { binding: n4, params: [] }, r3 = { autobindOptions: t6.autobindOptions, node: o2, operations: t6.operations, servicesBranch: t6.servicesBranch };
      return e4(r3, i4);
    };
  }(e3), i3 = (e4, i4, r3, s2, a3) => {
    const c3 = Se(s2) ? s2.binding.targetServiceIdentifier : s2.serviceIdentifier;
    e4.servicesBranch.push(c3);
    const d2 = [];
    for (const s3 of r3) switch (s3.type) {
      case u.Instance:
        d2.push(t5(e4, s3, i4));
        break;
      case u.ResolvedValue:
        d2.push(n3(e4, s3, i4));
        break;
      case u.ServiceRedirection: {
        const t6 = o(e4, i4, s3, a3);
        d2.push(t6);
        break;
      }
      default:
        d2.push({ binding: s3 });
    }
    return e4.servicesBranch.pop(), d2;
  }, o = /* @__PURE__ */ function(e4) {
    return (t6, n4, i4, o2) => {
      const r3 = { binding: i4, redirections: [] }, s2 = be(t6, new Ie(n4.last), { chained: o2, customServiceIdentifier: i4.targetServiceIdentifier });
      return r3.redirections.push(...e4(t6, n4, s2, r3, o2)), r3;
    };
  }(i3);
  return i3;
}
function De(e3, t5, n3, i3) {
  if (void 0 !== e3 && (Me.is(n3) && !n3.isExpanded() || n3.isContextFree)) {
    const i4 = { tree: { root: n3 } };
    t5.setPlan(e3, i4);
  } else t5.setNonCachedServiceNode(n3, i3);
}
var Ve = class extends Me {
  #I;
  #b;
  #w;
  #C;
  constructor(e3, t5, n3, i3, o) {
    super(o, Be(i3.value)), this.#b = t5, this.#I = e3, this.#w = n3, this.#C = i3;
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
  constructor(e3, t5, n3, i3, o) {
    super(o, Be(i3.value)), this.#I = e3, this.#S = t5, this.#w = n3, this.#N = i3;
  }
  _buildPlanServiceNode() {
    return this.#S(this.#I, this.#w, this.#N);
  }
};
function Ee(e3, t5, n3, i3) {
  const o = /* @__PURE__ */ function(e4, t6) {
    const n4 = /* @__PURE__ */ function(e5, t7) {
      return (n5, i4, o2) => {
        if (o2.kind === S.unmanaged) return;
        const s3 = function(e6) {
          let t8;
          if (0 === e6.tags.size) t8 = void 0;
          else {
            if (1 !== e6.tags.size) return;
            {
              const [n7, i5] = e6.tags.entries().next().value;
              t8 = { key: n7, value: i5 };
            }
          }
          const n6 = r.is(e6.value) ? e6.value.unwrap() : e6.value;
          return e6.kind === S.multipleInjection ? { chained: e6.chained, isMultiple: true, name: e6.name, optional: e6.optional, serviceIdentifier: n6, tag: t8 } : { isMultiple: false, name: e6.name, optional: e6.optional, serviceIdentifier: n6, tag: t8 };
        }(o2);
        if (void 0 !== s3) {
          const e6 = n5.operations.getPlan(s3);
          if (void 0 !== e6 && e6.tree.root.isContextFree) return e6.tree.root;
        }
        const a3 = t7(n5, i4, o2), c3 = new Ve(n5, e5, i4, o2, a3);
        return De(s3, n5.operations, c3, { bindingConstraintsList: i4, chainedBindings: o2.kind === S.multipleInjection && o2.chained, optionalBindings: o2.optional }), c3;
      };
    }(e4, t6);
    return (e5, t7, i4) => {
      const o2 = t7.classMetadata;
      for (const [r3, s3] of o2.constructorArguments.entries()) t7.constructorParams[r3] = n4(e5, i4, s3);
      for (const [r3, s3] of o2.properties) {
        const o3 = n4(e5, i4, s3);
        void 0 !== o3 && t7.propertyParams.set(r3, o3);
      }
      return e5.node;
    };
  }(e3, n3), s2 = /* @__PURE__ */ function(e4, t6) {
    const n4 = /* @__PURE__ */ function(e5, t7) {
      return (n5, i4, o2) => {
        const s3 = function(e6) {
          let t8;
          if (0 === e6.tags.size) t8 = void 0;
          else {
            if (1 !== e6.tags.size) return;
            {
              const [n7, i5] = e6.tags.entries().next().value;
              t8 = { key: n7, value: i5 };
            }
          }
          const n6 = r.is(e6.value) ? e6.value.unwrap() : e6.value;
          return e6.kind === fe.multipleInjection ? { chained: e6.chained, isMultiple: true, name: e6.name, optional: e6.optional, serviceIdentifier: n6, tag: t8 } : { isMultiple: false, name: e6.name, optional: e6.optional, serviceIdentifier: n6, tag: t8 };
        }(o2);
        if (void 0 !== s3) {
          const e6 = n5.operations.getPlan(s3);
          if (void 0 !== e6 && e6.tree.root.isContextFree) return e6.tree.root;
        }
        const a3 = t7(n5, i4, o2), c3 = new Oe(n5, e5, i4, o2, a3);
        return De(s3, n5.operations, c3, { bindingConstraintsList: i4, chainedBindings: o2.kind === fe.multipleInjection && o2.chained, optionalBindings: o2.optional }), c3;
      };
    }(e4, t6);
    return (e5, t7, i4) => {
      const o2 = t7.binding.metadata;
      for (const [r3, s3] of o2.arguments.entries()) t7.params[r3] = n4(e5, i4, s3);
      return e5.node;
    };
  }(t5, i3);
  return (e4, t6) => e4.node.binding.type === u.Instance ? o(e4, e4.node, t6) : s2(e4, e4.node, t6);
}
var _e = class extends Me {
  #I;
  constructor(e3, t5) {
    super(t5, t5.serviceIdentifier), this.#I = e3;
  }
  _buildPlanServiceNode() {
    return qe(this.#I);
  }
};
var ze = Fe(Ke);
var Le = ke(Ke);
var Ue = $e(Ee(ze, Le, ze, Le));
function Ke(e3, t5, n3, i3, o) {
  return Ue(e3, t5, n3, i3, o);
}
var qe = /* @__PURE__ */ function(e3) {
  return (t5) => {
    const n3 = Ce(t5), i3 = new Ie(n3.last), o = t5.rootConstraints.isMultiple && t5.rootConstraints.chained, r3 = be(t5, i3, { chained: o }), s2 = [], a3 = { bindings: s2, isContextFree: true, serviceIdentifier: t5.rootConstraints.serviceIdentifier };
    if (s2.push(...e3(t5, n3, r3, a3, o)), a3.isContextFree = !n3.last.elem.getAncestorsCalled, !t5.rootConstraints.isMultiple) {
      je(a3, t5.rootConstraints.isOptional ?? false, n3.last);
      const [e4] = s2;
      a3.bindings = e4;
    }
    return a3;
  };
}(Ue);
function Ge(e3) {
  try {
    const t5 = function(e4) {
      return e4.rootConstraints.isMultiple ? { chained: e4.rootConstraints.chained, isMultiple: true, name: e4.rootConstraints.name, optional: e4.rootConstraints.isOptional ?? false, serviceIdentifier: e4.rootConstraints.serviceIdentifier, tag: e4.rootConstraints.tag } : { isMultiple: false, name: e4.rootConstraints.name, optional: e4.rootConstraints.isOptional ?? false, serviceIdentifier: e4.rootConstraints.serviceIdentifier, tag: e4.rootConstraints.tag };
    }(e3), n3 = e3.operations.getPlan(t5);
    if (void 0 !== n3) return n3;
    const i3 = qe(e3), o = { tree: { root: new _e(e3, i3) } };
    return e3.operations.setPlan(t5, o), o;
  } catch (t5) {
    me(e3, t5);
  }
}
var We;
!function(e3) {
  e3.bindingAdded = "bindingAdded", e3.bindingRemoved = "bindingRemoved";
}(We || (We = {}));
var Xe = class {
  #P;
  #A;
  #x;
  constructor() {
    this.#P = [], this.#A = 8, this.#x = 1024;
  }
  *[Symbol.iterator]() {
    let e3 = 0;
    for (const t5 of this.#P) {
      const n3 = t5.deref();
      void 0 === n3 ? ++e3 : yield n3;
    }
    this.#P.length >= this.#A && this.#R(e3) && this.#T(e3);
  }
  push(e3) {
    const t5 = new WeakRef(e3);
    if (this.#P.push(t5), this.#P.length >= this.#A && this.#P.length % this.#x === 0) {
      let e4 = 0;
      for (const t6 of this.#P) void 0 === t6.deref() && ++e4;
      this.#R(e4) && this.#T(e4);
    }
  }
  #T(e3) {
    const t5 = new Array(this.#P.length - e3);
    let n3 = 0;
    for (const e4 of this.#P) e4.deref() && (t5[n3++] = e4);
    this.#P = t5;
  }
  #R(e3) {
    return e3 >= 0.5 * this.#P.length;
  }
};
var He = $e(Ee(ze, Le, function(e3, t5, n3) {
  return Je(e3, t5, n3);
}, function(e3, t5, n3) {
  return Qe(e3, t5, n3);
}));
var Je = function(e3) {
  const t5 = Fe(e3);
  return (e4, n3, i3) => {
    try {
      return t5(e4, n3, i3);
    } catch (e5) {
      if (M.isErrorOfKind(e5, I.planning)) return;
      throw e5;
    }
  };
}(He);
var Qe = function(e3) {
  const t5 = ke(e3);
  return (e4, n3, i3) => {
    try {
      return t5(e4, n3, i3);
    } catch (e5) {
      if (M.isErrorOfKind(e5, I.planning)) return;
      throw e5;
    }
  };
}(He);
function Ye(e3, t5, n3, i3, o) {
  if (Me.is(t5) && !t5.isExpanded()) return { isContextFreeBinding: true, shouldInvalidateServiceNode: false };
  const r3 = new Ie(i3.last);
  return !n3.isSatisfiedBy(r3) || i3.last.elem.getAncestorsCalled ? { isContextFreeBinding: !i3.last.elem.getAncestorsCalled, shouldInvalidateServiceNode: false } : function(e4, t6, n4, i4, o2) {
    let r4;
    try {
      [r4] = He(e4, i4, [n4], t6, o2);
    } catch (e5) {
      if (ge(e5)) return { isContextFreeBinding: false, shouldInvalidateServiceNode: true };
      throw e5;
    }
    return function(e5, t7) {
      if (Array.isArray(e5.bindings)) e5.bindings.push(t7);
      else {
        if (void 0 !== e5.bindings) {
          if (!Me.is(e5)) throw new M(I.planning, "Unexpected non-lazy plan service node. This is likely a bug in the planning logic. Please, report this issue");
          return { isContextFreeBinding: true, shouldInvalidateServiceNode: true };
        }
        e5.bindings = t7;
      }
      return { isContextFreeBinding: true, shouldInvalidateServiceNode: false };
    }(t6, r4);
  }(e3, t5, n3, i3, o);
}
function Ze(e3, t5, n3, i3) {
  if (Me.is(e3) && !e3.isExpanded()) return { bindingNodeRemoved: void 0, isContextFreeBinding: true };
  const o = new Ie(n3.last);
  if (!t5.isSatisfiedBy(o) || n3.last.elem.getAncestorsCalled) return { bindingNodeRemoved: void 0, isContextFreeBinding: !n3.last.elem.getAncestorsCalled };
  let r3;
  if (Array.isArray(e3.bindings)) e3.bindings = e3.bindings.filter((e4) => e4.binding !== t5 || (r3 = e4, false));
  else if (e3.bindings?.binding === t5) if (r3 = e3.bindings, i3) e3.bindings = void 0;
  else {
    if (!Me.is(e3)) throw new M(I.planning, "Unexpected non-lazy plan service node. This is likely a bug in the planning logic. Please, report this issue");
    e3.invalidate();
  }
  return { bindingNodeRemoved: r3, isContextFreeBinding: true };
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
    for (const e3 of this.#O()) e3.clear();
    for (const e3 of this.#D) e3.clearCache();
  }
  get(e3) {
    return void 0 === e3.name ? void 0 === e3.tag ? this.#E(this.#B, e3).get(e3.serviceIdentifier) : this.#E(this.#$, e3).get(e3.serviceIdentifier)?.get(e3.tag.key)?.get(e3.tag.value) : void 0 === e3.tag ? this.#E(this.#F, e3).get(e3.serviceIdentifier)?.get(e3.name) : this.#E(this.#k, e3).get(e3.serviceIdentifier)?.get(e3.name)?.get(e3.tag.key)?.get(e3.tag.value);
  }
  invalidateServiceBinding(e3) {
    this.#_(e3), this.#z(e3), this.#L(e3), this.#U(e3), this.#K(e3);
    for (const t5 of this.#D) t5.invalidateServiceBinding(e3);
  }
  set(e3, t5) {
    void 0 === e3.name ? void 0 === e3.tag ? this.#E(this.#B, e3).set(e3.serviceIdentifier, t5) : this.#q(this.#q(this.#E(this.#$, e3), e3.serviceIdentifier), e3.tag.key).set(e3.tag.value, t5) : void 0 === e3.tag ? this.#q(this.#E(this.#F, e3), e3.serviceIdentifier).set(e3.name, t5) : this.#q(this.#q(this.#q(this.#E(this.#k, e3), e3.serviceIdentifier), e3.name), e3.tag.key).set(e3.tag.value, t5);
  }
  setNonCachedServiceNode(e3, t5) {
    let n3 = this.#j.get(e3.serviceIdentifier);
    void 0 === n3 && (n3 = /* @__PURE__ */ new Map(), this.#j.set(e3.serviceIdentifier, n3)), n3.set(e3, t5);
  }
  subscribe(e3) {
    this.#D.push(e3);
  }
  #V() {
    const e3 = new Array(8);
    for (let t5 = 0; t5 < e3.length; ++t5) e3[t5] = /* @__PURE__ */ new Map();
    return e3;
  }
  #G(e3, t5, n3, i3) {
    const o = !!(2 & t5);
    let r3;
    if (o) {
      r3 = { chained: !!(0 & t5), isMultiple: o, serviceIdentifier: e3.binding.serviceIdentifier };
    } else r3 = { isMultiple: o, serviceIdentifier: e3.binding.serviceIdentifier };
    return !!(1 & t5) && (r3.isOptional = true), void 0 !== n3 && (r3.name = n3), void 0 !== i3 && (r3.tag = i3), { autobindOptions: void 0, operations: e3.operations, rootConstraints: r3, servicesBranch: [] };
  }
  #q(e3, t5) {
    let n3 = e3.get(t5);
    return void 0 === n3 && (n3 = /* @__PURE__ */ new Map(), e3.set(t5, n3)), n3;
  }
  #E(e3, t5) {
    return e3[this.#W(t5)];
  }
  #O() {
    return [this.#j, ...this.#B, ...this.#F, ...this.#k, ...this.#$];
  }
  #W(e3) {
    return e3.isMultiple ? (e3.chained ? 4 : 0) | (e3.optional ? 1 : 0) | 2 : e3.optional ? 1 : 0;
  }
  #z(e3) {
    for (const [t5, n3] of this.#F.entries()) {
      const i3 = n3.get(e3.binding.serviceIdentifier);
      if (void 0 !== i3) for (const [n4, o] of i3.entries()) this.#X(e3, o, t5, n4, void 0);
    }
  }
  #L(e3) {
    for (const [t5, n3] of this.#k.entries()) {
      const i3 = n3.get(e3.binding.serviceIdentifier);
      if (void 0 !== i3) for (const [n4, o] of i3.entries()) for (const [i4, r3] of o.entries()) for (const [o2, s2] of r3.entries()) this.#X(e3, s2, t5, n4, { key: i4, value: o2 });
    }
  }
  #H(e3) {
    switch (e3.binding.type) {
      case u.ServiceRedirection:
        for (const t5 of e3.redirections) this.#H(t5);
        break;
      case u.Instance:
        for (const t5 of e3.constructorParams) void 0 !== t5 && this.#J(t5);
        for (const t5 of e3.propertyParams.values()) this.#J(t5);
        break;
      case u.ResolvedValue:
        for (const t5 of e3.params) this.#J(t5);
    }
  }
  #J(e3) {
    const t5 = this.#j.get(e3.serviceIdentifier);
    void 0 !== t5 && t5.has(e3) && (t5.delete(e3), this.#Q(e3));
  }
  #Q(e3) {
    if ((!Me.is(e3) || e3.isExpanded()) && void 0 !== e3.bindings) if (Array.isArray(e3.bindings)) for (const t5 of e3.bindings) this.#H(t5);
    else this.#H(e3.bindings);
  }
  #K(e3) {
    const t5 = this.#j.get(e3.binding.serviceIdentifier);
    if (void 0 !== t5) switch (e3.kind) {
      case We.bindingAdded:
        for (const [n3, i3] of t5) {
          const t6 = Ye({ autobindOptions: void 0, operations: e3.operations, servicesBranch: [] }, n3, e3.binding, i3.bindingConstraintsList, i3.chainedBindings);
          t6.isContextFreeBinding ? t6.shouldInvalidateServiceNode && Me.is(n3) && (this.#Q(n3), n3.invalidate()) : this.clearCache();
        }
        break;
      case We.bindingRemoved:
        for (const [n3, i3] of t5) {
          const t6 = Ze(n3, e3.binding, i3.bindingConstraintsList, i3.optionalBindings);
          t6.isContextFreeBinding ? void 0 !== t6.bindingNodeRemoved && this.#H(t6.bindingNodeRemoved) : this.clearCache();
        }
    }
  }
  #_(e3) {
    for (const [t5, n3] of this.#B.entries()) {
      const i3 = n3.get(e3.binding.serviceIdentifier);
      this.#X(e3, i3, t5, void 0, void 0);
    }
  }
  #U(e3) {
    for (const [t5, n3] of this.#$.entries()) {
      const i3 = n3.get(e3.binding.serviceIdentifier);
      if (void 0 !== i3) for (const [n4, o] of i3.entries()) for (const [i4, r3] of o.entries()) this.#X(e3, r3, t5, void 0, { key: n4, value: i4 });
    }
  }
  #X(e3, t5, n3, i3, o) {
    if (void 0 !== t5 && Me.is(t5.tree.root)) {
      const c3 = this.#G(e3, n3, i3, o);
      switch (e3.kind) {
        case We.bindingAdded:
          {
            const n4 = (r3 = c3, s2 = t5.tree.root, a3 = e3.binding, Me.is(s2) && !s2.isExpanded() ? { isContextFreeBinding: true, shouldInvalidateServiceNode: false } : Ye(r3, s2, a3, Ce(r3), r3.rootConstraints.isMultiple && r3.rootConstraints.chained));
            n4.isContextFreeBinding ? n4.shouldInvalidateServiceNode && (this.#Q(t5.tree.root), t5.tree.root.invalidate()) : this.clearCache();
          }
          break;
        case We.bindingRemoved: {
          const n4 = function(e4, t6, n5) {
            return Me.is(t6) && !t6.isExpanded() ? { bindingNodeRemoved: void 0, isContextFreeBinding: true } : Ze(t6, n5, Ce(e4), e4.rootConstraints.isOptional ?? false);
          }(c3, t5.tree.root, e3.binding);
          n4.isContextFreeBinding ? void 0 !== n4.bindingNodeRemoved && this.#H(n4.bindingNodeRemoved) : this.clearCache();
        }
      }
    }
    var r3, s2, a3;
  }
};
function tt(e3, t5) {
  if (ge(t5)) {
    const n3 = function(e4) {
      const t6 = [...e4];
      if (0 === t6.length) return "(No dependency trace)";
      return t6.map(t).join(" -> ");
    }(function(e4) {
      const t6 = e4.planResult.tree.root, n4 = [];
      function i3(e5) {
        const t7 = n4.indexOf(e5);
        if (-1 !== t7) {
          return [...n4.slice(t7), e5].map((e6) => e6.serviceIdentifier);
        }
        n4.push(e5);
        try {
          for (const t8 of function(e6) {
            const t9 = [], n5 = e6.bindings;
            if (void 0 === n5) return t9;
            const i4 = (e7) => {
              if (Se(e7)) for (const t10 of e7.redirections) i4(t10);
              else switch (e7.binding.type) {
                case u.Instance: {
                  const n6 = e7;
                  for (const e8 of n6.constructorParams) void 0 !== e8 && t9.push(e8);
                  for (const e8 of n6.propertyParams.values()) t9.push(e8);
                  break;
                }
                case u.ResolvedValue: {
                  const n6 = e7;
                  for (const e8 of n6.params) t9.push(e8);
                  break;
                }
              }
            };
            if (Array.isArray(n5)) for (const e7 of n5) i4(e7);
            else i4(n5);
            return t9;
          }(e5)) {
            const e6 = i3(t8);
            if (void 0 !== e6) return e6;
          }
        } finally {
          n4.pop();
        }
      }
      return i3(t6) ?? [];
    }(e3));
    throw new M(I.planning, `Circular dependency found: ${n3}`, { cause: t5 });
  }
  throw t5;
}
function nt(e3, t5) {
  return e(t5) ? (e3.cache = { isRight: true, value: t5 }, t5.then((t6) => it(e3, t6))) : it(e3, t5);
}
function it(e3, t5) {
  return e3.cache = { isRight: true, value: t5 }, t5;
}
function ot(e3, t5, n3) {
  const i3 = e3.getActivations(t5);
  return void 0 === i3 ? n3 : e(n3) ? rt(e3, n3, i3[Symbol.iterator]()) : function(e4, t6, n4) {
    let i4 = t6, o = n4.next();
    for (; true !== o.done; ) {
      const t7 = o.value(e4.context, i4);
      if (e(t7)) return rt(e4, t7, n4);
      i4 = t7, o = n4.next();
    }
    return i4;
  }(e3, n3, i3[Symbol.iterator]());
}
async function rt(e3, t5, n3) {
  let i3 = await t5, o = n3.next();
  for (; true !== o.done; ) i3 = await o.value(e3.context, i3), o = n3.next();
  return i3;
}
function st(e3, t5, n3) {
  let i3 = n3;
  if (void 0 !== t5.onActivation) {
    const n4 = t5.onActivation;
    i3 = e(i3) ? i3.then((t6) => n4(e3.context, t6)) : n4(e3.context, i3);
  }
  return ot(e3, t5.serviceIdentifier, i3);
}
function at(e3) {
  return (t5, n3) => {
    if (n3.cache.isRight) return n3.cache.value;
    return nt(n3, st(t5, n3, e3(t5, n3)));
  };
}
var ct = at(function(e3, t5) {
  return t5.value;
});
function dt(e3) {
  return e3;
}
function ut(e3, t5) {
  return (n3, i3) => {
    const o = e3(i3);
    switch (o.scope) {
      case d.Singleton:
        if (o.cache.isRight) return o.cache.value;
        return nt(o, st(n3, o, t5(n3, i3)));
      case d.Request: {
        if (n3.requestScopeCache.has(o.id)) return n3.requestScopeCache.get(o.id);
        const e4 = st(n3, o, t5(n3, i3));
        return n3.requestScopeCache.set(o.id, e4), e4;
      }
      case d.Transient:
        return st(n3, o, t5(n3, i3));
    }
  };
}
var lt = ((e3) => ut(dt, e3))(function(e3, t5) {
  return t5.value(e3.context);
});
var pt = at(function(e3, t5) {
  return t5.factory(e3.context);
});
function ft(e3, t5, n3) {
  const i3 = function(e4, t6, n4) {
    if (!(n4 in e4)) throw new M(I.resolution, `Expecting a "${n4.toString()}" property when resolving "${t6.implementationType.name}" class @postConstruct decorated method, none found.`);
    if ("function" != typeof e4[n4]) throw new M(I.resolution, `Expecting a "${n4.toString()}" method when resolving "${t6.implementationType.name}" class @postConstruct decorated method, a non function property was found instead.`);
    {
      let i4;
      try {
        i4 = e4[n4]();
      } catch (e5) {
        throw new M(I.resolution, `Unexpected error found when calling "${n4.toString()}" @postConstruct decorated method on class "${t6.implementationType.name}"`, { cause: e5 });
      }
      if (e(i4)) return async function(e5, t7, n5) {
        try {
          await n5;
        } catch (n6) {
          throw new M(I.resolution, `Unexpected error found when calling "${t7.toString()}" @postConstruct decorated method on class "${e5.implementationType.name}"`, { cause: n6 });
        }
      }(t6, n4, i4);
    }
  }(e3, t5, n3);
  return e(i3) ? i3.then(() => e3) : e3;
}
function vt(e3, t5, n3) {
  if (0 === n3.size) return e3;
  let i3 = e3;
  for (const e4 of n3) i3 = e(i3) ? i3.then((n4) => ft(n4, t5, e4)) : ft(i3, t5, e4);
  return i3;
}
function ht(e3) {
  return (t5, n3, i3) => {
    const o = new i3.binding.implementationType(...t5), r3 = e3(n3, o, i3);
    return e(r3) ? r3.then(() => vt(o, i3.binding, i3.classMetadata.lifecycle.postConstructMethodNames)) : vt(o, i3.binding, i3.classMetadata.lifecycle.postConstructMethodNames);
  };
}
var gt = at(function(e3, t5) {
  return t5.provider(e3.context);
});
function mt(e3) {
  return e3.binding;
}
function yt(e3) {
  return e3.binding;
}
var Mt = /* @__PURE__ */ function(e3) {
  return (t5, n3, i3) => {
    const o = [];
    for (const [r3, a3] of i3.propertyParams) {
      const c3 = i3.classMetadata.properties.get(r3);
      if (void 0 === c3) throw new M(I.resolution, `Expecting metadata at property "${r3.toString()}", none found`);
      c3.kind !== S.unmanaged && void 0 !== a3.bindings && (n3[r3] = e3(t5, a3), e(n3[r3]) && o.push((async () => {
        n3[r3] = await n3[r3];
      })()));
    }
    if (o.length > 0) return Promise.all(o).then(() => {
    });
  };
}(At);
var It = /* @__PURE__ */ function(e3) {
  return function t5(n3, i3) {
    const o = [];
    for (const r3 of i3.redirections) Se(r3) ? o.push(...t5(n3, r3)) : o.push(e3(n3, r3));
    return o;
  };
}(Pt);
var bt = /* @__PURE__ */ function(e3, t5, n3) {
  return (i3, o) => {
    const r3 = e3(i3, o);
    return e(r3) ? t5(r3, i3, o) : n3(r3, i3, o);
  };
}(/* @__PURE__ */ function(e3) {
  return (t5, n3) => {
    const i3 = [];
    for (const o of n3.constructorParams) void 0 === o ? i3.push(void 0) : i3.push(e3(t5, o));
    return i3.some(e) ? Promise.all(i3) : i3;
  };
}(At), /* @__PURE__ */ function(e3) {
  return async (t5, n3, i3) => {
    const o = await t5;
    return e3(o, n3, i3);
  };
}(ht(Mt)), ht(Mt));
var wt = /* @__PURE__ */ function(e3) {
  return (t5, n3) => {
    const i3 = e3(t5, n3);
    return e(i3) ? i3.then((e4) => n3.binding.factory(...e4)) : n3.binding.factory(...i3);
  };
}(/* @__PURE__ */ function(e3) {
  return (t5, n3) => {
    const i3 = [];
    for (const o of n3.params) i3.push(e3(t5, o));
    return i3.some(e) ? Promise.all(i3) : i3;
  };
}(At));
var Ct = ((e3) => ut(mt, e3))(bt);
var St = ((e3) => ut(yt, e3))(wt);
function Nt(e3) {
  try {
    return At(e3, e3.planResult.tree.root);
  } catch (t5) {
    tt(e3, t5);
  }
}
function Pt(e3, t5) {
  switch (t5.binding.type) {
    case u.ConstantValue:
      return ct(e3, t5.binding);
    case u.DynamicValue:
      return lt(e3, t5.binding);
    case u.Factory:
      return pt(e3, t5.binding);
    case u.Instance:
      return Ct(e3, t5);
    case u.Provider:
      return gt(e3, t5.binding);
    case u.ResolvedValue:
      return St(e3, t5);
  }
}
function At(e3, t5) {
  if (void 0 !== t5.bindings) return Array.isArray(t5.bindings) ? function(e4, t6) {
    const n3 = [];
    for (const i3 of t6) Se(i3) ? n3.push(...It(e4, i3)) : n3.push(Pt(e4, i3));
    if (n3.some(e)) return Promise.all(n3);
    return n3;
  }(e3, t5.bindings) : function(e4, t6) {
    if (Se(t6)) {
      const n3 = It(e4, t6);
      if (1 === n3.length) return n3[0];
      throw new M(I.resolution, "Unexpected multiple resolved values on single injection");
    }
    return Pt(e4, t6);
  }(e3, t5.bindings);
}
function xt(e3) {
  return void 0 !== e3.scope;
}
function Rt(e3, t5) {
  if ("function" == typeof e3[t5]) {
    return e3[t5]();
  }
}
function Tt(e3, t5) {
  const n3 = e3.lifecycle.preDestroyMethodNames;
  if (0 === n3.size) return;
  let i3;
  for (const e4 of n3) i3 = void 0 === i3 ? Rt(t5, e4) : i3.then(() => Rt(t5, e4));
  return i3;
}
function jt(e3, t5, n3) {
  const i3 = e3.getDeactivations(t5);
  if (void 0 !== i3) return e(n3) ? Bt(n3, i3[Symbol.iterator]()) : function(e4, t6) {
    let n4 = t6.next();
    for (; true !== n4.done; ) {
      const i4 = n4.value(e4);
      if (e(i4)) return Bt(e4, t6);
      n4 = t6.next();
    }
  }(n3, i3[Symbol.iterator]());
}
async function Bt(e3, t5) {
  const n3 = await e3;
  let i3 = t5.next();
  for (; true !== i3.done; ) await i3.value(n3), i3 = t5.next();
}
function Ft(e3, t5) {
  const n3 = function(e4, t6) {
    if (t6.type === u.Instance) {
      const n4 = e4.getClassMetadata(t6.implementationType), i3 = t6.cache.value;
      return e(i3) ? i3.then((e5) => Tt(n4, e5)) : Tt(n4, i3);
    }
  }(e3, t5);
  return void 0 === n3 ? kt(e3, t5) : n3.then(() => kt(e3, t5));
}
function kt(e3, t5) {
  const n3 = t5.cache;
  return e(n3.value) ? n3.value.then((n4) => $t(e3, t5, n4)) : $t(e3, t5, n3.value);
}
function $t(e3, t5, n3) {
  let i3;
  if (void 0 !== t5.onDeactivation) {
    i3 = (0, t5.onDeactivation)(n3);
  }
  return void 0 === i3 ? jt(e3, t5.serviceIdentifier, n3) : i3.then(() => jt(e3, t5.serviceIdentifier, n3));
}
function Dt(e3, t5) {
  if (void 0 === t5) return;
  const n3 = function(e4) {
    const t6 = [];
    for (const n4 of e4) xt(n4) && n4.scope === d.Singleton && n4.cache.isRight && t6.push(n4);
    return t6;
  }(t5), i3 = [];
  for (const t6 of n3) {
    const n4 = Ft(e3, t6);
    void 0 !== n4 && i3.push(n4);
  }
  return i3.length > 0 ? Promise.all(i3).then(() => {
  }) : void 0;
}
function Vt(e3, t5) {
  const n3 = e3.getBindingsFromModule(t5);
  return Dt(e3, n3);
}
function Ot(e3, t5) {
  const n3 = e3.getBindings(t5);
  return Dt(e3, n3);
}

// asset-input/node_modules/@inversifyjs/plugin/lib/esm/index.js
var t3 = Symbol.for("@inversifyjs/plugin/isPlugin");
var n2 = class {
  [t3] = true;
  _container;
  _context;
  constructor(t5, n3) {
    this._container = t5, this._context = n3;
  }
};

// asset-input/node_modules/@inversifyjs/container/lib/esm/index.js
var A2 = Symbol.for("@inversifyjs/container/bindingIdentifier");
function I2(e3) {
  return "object" == typeof e3 && null !== e3 && true === e3[A2];
}
var P2 = class {
  static always = (e3) => true;
};
var C2 = Symbol.for("@inversifyjs/container/InversifyContainerError");
var B = class _B extends Error {
  [C2];
  kind;
  constructor(e3, n3, i3) {
    super(n3, i3), this[C2] = true, this.kind = e3;
  }
  static is(e3) {
    return "object" == typeof e3 && null !== e3 && true === e3[C2];
  }
  static isErrorOfKind(e3, n3) {
    return _B.is(e3) && e3.kind === n3;
  }
};
var O;
function x2(e3) {
  return { [A2]: true, id: e3.id };
}
function k(e3) {
  return (n3) => {
    for (let i3 = n3.getAncestor(); void 0 !== i3; i3 = i3.getAncestor()) if (e3(i3)) return true;
    return false;
  };
}
function N2(e3) {
  return (n3) => n3.name === e3;
}
function U(e3) {
  return (n3) => n3.serviceIdentifier === e3;
}
function F(e3, n3) {
  return (i3) => i3.tags.has(e3) && i3.tags.get(e3) === n3;
}
function D2(e3) {
  return void 0 === e3.name && 0 === e3.tags.size;
}
function j2(e3) {
  const n3 = k(e3);
  return (e4) => !n3(e4);
}
function T2(e3) {
  return (n3) => {
    const i3 = n3.getAncestor();
    return void 0 === i3 || !e3(i3);
  };
}
function V2(e3) {
  return (n3) => {
    const i3 = n3.getAncestor();
    return void 0 !== i3 && e3(i3);
  };
}
!function(e3) {
  e3[e3.invalidOperation = 0] = "invalidOperation";
}(O || (O = {}));
var E2 = class {
  #i;
  constructor(e3) {
    this.#i = e3;
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
  constructor(e3, n3, i3, t5) {
    this.#t = e3, this.#r = n3, this.#a = i3, this.#s = t5;
  }
  to(e3) {
    const n3 = N(e3), i3 = { cache: { isRight: false, value: void 0 }, id: c2(), implementationType: e3, isSatisfiedBy: P2.always, moduleId: this.#r, onActivation: void 0, onDeactivation: void 0, scope: n3.scope ?? this.#a, serviceIdentifier: this.#s, type: u.Instance };
    return this.#t(i3), new H(i3);
  }
  toSelf() {
    if ("function" != typeof this.#s) throw new Error('"toSelf" function can only be applied when a newable function is used as service identifier');
    return this.to(this.#s);
  }
  toConstantValue(e3) {
    const n3 = { cache: { isRight: false, value: void 0 }, id: c2(), isSatisfiedBy: P2.always, moduleId: this.#r, onActivation: void 0, onDeactivation: void 0, scope: d.Singleton, serviceIdentifier: this.#s, type: u.ConstantValue, value: e3 };
    return this.#t(n3), new G2(n3);
  }
  toDynamicValue(e3) {
    const n3 = { cache: { isRight: false, value: void 0 }, id: c2(), isSatisfiedBy: P2.always, moduleId: this.#r, onActivation: void 0, onDeactivation: void 0, scope: this.#a, serviceIdentifier: this.#s, type: u.DynamicValue, value: e3 };
    return this.#t(n3), new H(n3);
  }
  toResolvedValue(e3, n3) {
    const i3 = { cache: { isRight: false, value: void 0 }, factory: e3, id: c2(), isSatisfiedBy: P2.always, metadata: this.#o(n3), moduleId: this.#r, onActivation: void 0, onDeactivation: void 0, scope: this.#a, serviceIdentifier: this.#s, type: u.ResolvedValue };
    return this.#t(i3), new H(i3);
  }
  toFactory(e3) {
    const n3 = { cache: { isRight: false, value: void 0 }, factory: e3, id: c2(), isSatisfiedBy: P2.always, moduleId: this.#r, onActivation: void 0, onDeactivation: void 0, scope: d.Singleton, serviceIdentifier: this.#s, type: u.Factory };
    return this.#t(n3), new G2(n3);
  }
  toProvider(e3) {
    const n3 = { cache: { isRight: false, value: void 0 }, id: c2(), isSatisfiedBy: P2.always, moduleId: this.#r, onActivation: void 0, onDeactivation: void 0, provider: e3, scope: d.Singleton, serviceIdentifier: this.#s, type: u.Provider };
    return this.#t(n3), new G2(n3);
  }
  toService(e3) {
    const n3 = { id: c2(), isSatisfiedBy: P2.always, moduleId: this.#r, serviceIdentifier: this.#s, targetServiceIdentifier: e3, type: u.ServiceRedirection };
    this.#t(n3);
  }
  #o(e3) {
    return { arguments: (e3 ?? []).map((e4) => function(e5) {
      return "object" == typeof e5 && !r.is(e5);
    }(e4) ? function(e5) {
      return true === e5.isMultiple;
    }(e4) ? { chained: e4.chained ?? false, kind: fe.multipleInjection, name: e4.name, optional: e4.optional ?? false, tags: new Map((e4.tags ?? []).map((e5) => [e5.key, e5.value])), value: e4.serviceIdentifier } : { kind: fe.singleInjection, name: e4.name, optional: e4.optional ?? false, tags: new Map((e4.tags ?? []).map((e5) => [e5.key, e5.value])), value: e4.serviceIdentifier } : { kind: fe.singleInjection, name: void 0, optional: false, tags: /* @__PURE__ */ new Map(), value: e4 }) };
  }
};
var $2 = class {
  #i;
  constructor(e3) {
    this.#i = e3;
  }
  getIdentifier() {
    return x2(this.#i);
  }
  onActivation(e3) {
    return this.#i.onActivation = e3, new q2(this.#i);
  }
  onDeactivation(e3) {
    if (this.#i.onDeactivation = e3, this.#i.scope !== d.Singleton) throw new B(O.invalidOperation, `Binding for service "${t(this.#i.serviceIdentifier)}" has a deactivation function, but its scope is not singleton. Deactivation functions can only be used with singleton bindings.`);
    return new q2(this.#i);
  }
};
var q2 = class {
  #i;
  constructor(e3) {
    this.#i = e3;
  }
  getIdentifier() {
    return x2(this.#i);
  }
  when(e3) {
    return this.#i.isSatisfiedBy = e3, new $2(this.#i);
  }
  whenAnyAncestor(e3) {
    return this.when(k(e3));
  }
  whenAnyAncestorIs(e3) {
    return this.when(k(U(e3)));
  }
  whenAnyAncestorNamed(e3) {
    return this.when(function(e4) {
      return k(N2(e4));
    }(e3));
  }
  whenAnyAncestorTagged(e3, n3) {
    return this.when(function(e4, n4) {
      return k(F(e4, n4));
    }(e3, n3));
  }
  whenDefault() {
    return this.when(D2);
  }
  whenNamed(e3) {
    return this.when(N2(e3));
  }
  whenNoParent(e3) {
    return this.when(T2(e3));
  }
  whenNoParentIs(e3) {
    return this.when(T2(U(e3)));
  }
  whenNoParentNamed(e3) {
    return this.when(function(e4) {
      return T2(N2(e4));
    }(e3));
  }
  whenNoParentTagged(e3, n3) {
    return this.when(function(e4, n4) {
      return T2(F(e4, n4));
    }(e3, n3));
  }
  whenParent(e3) {
    return this.when(V2(e3));
  }
  whenParentIs(e3) {
    return this.when(V2(U(e3)));
  }
  whenParentNamed(e3) {
    return this.when(function(e4) {
      return V2(N2(e4));
    }(e3));
  }
  whenParentTagged(e3, n3) {
    return this.when(function(e4, n4) {
      return V2(F(e4, n4));
    }(e3, n3));
  }
  whenTagged(e3, n3) {
    return this.when(F(e3, n3));
  }
  whenNoAncestor(e3) {
    return this.when(j2(e3));
  }
  whenNoAncestorIs(e3) {
    return this.when(j2(U(e3)));
  }
  whenNoAncestorNamed(e3) {
    return this.when(function(e4) {
      return j2(N2(e4));
    }(e3));
  }
  whenNoAncestorTagged(e3, n3) {
    return this.when(function(e4, n4) {
      return j2(F(e4, n4));
    }(e3, n3));
  }
};
var G2 = class extends q2 {
  #c;
  constructor(e3) {
    super(e3), this.#c = new $2(e3);
  }
  onActivation(e3) {
    return this.#c.onActivation(e3);
  }
  onDeactivation(e3) {
    return this.#c.onDeactivation(e3);
  }
};
var H = class extends G2 {
  #d;
  constructor(e3) {
    super(e3), this.#d = new E2(e3);
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
  constructor(e3, n3, i3, t5) {
    this.#l = e3, this.#a = n3, this.#u = i3, this.#h = t5;
  }
  bind(e3) {
    return new L((e4) => {
      this.#v(e4);
    }, void 0, this.#a, e3);
  }
  isBound(e3, n3) {
    const i3 = this.#h.bindingService.get(e3);
    return this.#g(e3, i3, n3);
  }
  isCurrentBound(e3, n3) {
    const i3 = this.#h.bindingService.getNonParentBindings(e3);
    return this.#g(e3, i3, n3);
  }
  async rebind(e3) {
    return await this.unbind(e3), this.bind(e3);
  }
  rebindSync(e3) {
    return this.unbindSync(e3), this.bind(e3);
  }
  async unbind(e3) {
    await this.#b(e3);
  }
  async unbindAll() {
    await this.#f();
  }
  unbindAllSync() {
    if (void 0 !== this.#f()) throw new B(O.invalidOperation, "Unexpected asynchronous deactivation when unbinding all services. Consider using Container.unbindAll() instead.");
  }
  unbindSync(e3) {
    void 0 !== this.#b(e3) && this.#p(e3);
  }
  #v(e3) {
    this.#h.bindingService.set(e3), this.#u.invalidateService({ binding: e3, kind: We.bindingAdded });
  }
  #p(e3) {
    let n3;
    if (I2(e3)) {
      const t5 = this.#h.bindingService.getById(e3.id), r3 = (i3 = t5, function(e4) {
        if (void 0 === e4) return;
        const n4 = e4.next();
        return true !== n4.done ? n4.value : void 0;
      }(i3?.[Symbol.iterator]()))?.serviceIdentifier;
      n3 = void 0 === r3 ? "Unexpected asynchronous deactivation when unbinding binding identifier. Consider using Container.unbind() instead." : `Unexpected asynchronous deactivation when unbinding "${t(r3)}" binding. Consider using Container.unbind() instead.`;
    } else n3 = `Unexpected asynchronous deactivation when unbinding "${t(e3)}" service. Consider using Container.unbind() instead.`;
    var i3;
    throw new B(O.invalidOperation, n3);
  }
  #b(e3) {
    return I2(e3) ? this.#S(e3) : this.#M(e3);
  }
  #S(e3) {
    const n3 = this.#h.bindingService.getById(e3.id), i3 = void 0 === n3 ? void 0 : [...n3], t5 = Dt(this.#l, n3);
    if (void 0 !== t5) return t5.then(() => {
      this.#R(i3, e3);
    });
    this.#R(i3, e3);
  }
  #R(e3, n3) {
    if (this.#h.bindingService.removeById(n3.id), void 0 !== e3) for (const n4 of e3) this.#u.invalidateService({ binding: n4, kind: We.bindingRemoved });
  }
  #f() {
    const e3 = [...this.#h.bindingService.getNonParentBoundServices()], n3 = e3.map((e4) => Ot(this.#l, e4));
    if (n3.some((e4) => e(e4))) return Promise.all(n3).then(() => {
      this.#y(e3);
    });
    this.#y(e3);
  }
  #y(e3) {
    for (const n3 of e3) this.#h.activationService.removeAllByServiceId(n3), this.#h.bindingService.removeAllByServiceId(n3), this.#h.deactivationService.removeAllByServiceId(n3);
    this.#h.planResultCacheService.clearCache();
  }
  #M(e3) {
    const n3 = this.#h.bindingService.get(e3), i3 = void 0 === n3 ? void 0 : [...n3], t5 = Dt(this.#l, n3);
    if (void 0 !== t5) return t5.then(() => {
      this.#m(e3, i3);
    });
    this.#m(e3, i3);
  }
  #m(e3, n3) {
    if (this.#h.activationService.removeAllByServiceId(e3), this.#h.bindingService.removeAllByServiceId(e3), this.#h.deactivationService.removeAllByServiceId(e3), void 0 !== n3) for (const e4 of n3) this.#u.invalidateService({ binding: e4, kind: We.bindingRemoved });
  }
  #g(e3, n3, i3) {
    if (void 0 === n3) return false;
    const t5 = { getAncestor: () => {
    }, name: i3?.name, serviceIdentifier: e3, tags: /* @__PURE__ */ new Map() };
    void 0 !== i3?.tag && t5.tags.set(i3.tag.key, i3.tag.value);
    for (const e4 of n3) if (e4.isSatisfiedBy(t5)) return true;
    return false;
  }
};
var z = class {
  #w;
  #l;
  #a;
  #u;
  #h;
  constructor(e3, n3, i3, t5, r3) {
    this.#w = e3, this.#l = n3, this.#a = i3, this.#u = t5, this.#h = r3;
  }
  async load(...e3) {
    await Promise.all(this.#n(...e3));
  }
  loadSync(...e3) {
    const n3 = this.#n(...e3);
    for (const e4 of n3) if (void 0 !== e4) throw new B(O.invalidOperation, "Unexpected asynchronous module load. Consider using Container.load() instead.");
  }
  async unload(...e3) {
    await Promise.all(this.#A(...e3)), this.#I(e3);
  }
  unloadSync(...e3) {
    const n3 = this.#A(...e3);
    for (const e4 of n3) if (void 0 !== e4) throw new B(O.invalidOperation, "Unexpected asynchronous module unload. Consider using Container.unload() instead.");
    this.#I(e3);
  }
  #P(e3) {
    return { bind: (n3) => new L((e4) => {
      this.#v(e4);
    }, e3, this.#a, n3), isBound: this.#w.isBound.bind(this.#w), onActivation: (n3, i3) => {
      this.#h.activationService.add(i3, { moduleId: e3, serviceId: n3 });
    }, onDeactivation: (n3, i3) => {
      this.#h.deactivationService.add(i3, { moduleId: e3, serviceId: n3 });
    }, rebind: this.#w.rebind.bind(this.#w), rebindSync: this.#w.rebindSync.bind(this.#w), unbind: this.#w.unbind.bind(this.#w), unbindSync: this.#w.unbindSync.bind(this.#w) };
  }
  #I(e3) {
    for (const n3 of e3) this.#h.activationService.removeAllByModuleId(n3.id), this.#h.bindingService.removeAllByModuleId(n3.id), this.#h.deactivationService.removeAllByModuleId(n3.id);
    this.#h.planResultCacheService.clearCache();
  }
  #n(...e3) {
    return e3.map((e4) => e4.load(this.#P(e4.id)));
  }
  #v(e3) {
    this.#h.bindingService.set(e3), this.#u.invalidateService({ binding: e3, kind: We.bindingAdded });
  }
  #A(...e3) {
    return e3.map((e4) => Vt(this.#l, e4.id));
  }
};
var K2 = class {
  deactivationParams;
  constructor(e3) {
    this.deactivationParams = function(e4) {
      return { getBindings: e4.bindingService.get.bind(e4.bindingService), getBindingsFromModule: e4.bindingService.getByModuleId.bind(e4.bindingService), getClassMetadata: N, getDeactivations: e4.deactivationService.get.bind(e4.deactivationService) };
    }(e3), e3.onReset(() => {
      !function(e4, n3) {
        n3.getBindings = e4.bindingService.get.bind(e4.bindingService), n3.getBindingsFromModule = e4.bindingService.getByModuleId.bind(e4.bindingService), n3.getDeactivations = e4.deactivationService.get.bind(e4.deactivationService);
      }(e3, this.deactivationParams);
    });
  }
};
var X = class {
  planParamsOperations;
  #h;
  constructor(e3) {
    this.#h = e3, this.planParamsOperations = { getBindings: this.#h.bindingService.get.bind(this.#h.bindingService), getBindingsChained: this.#h.bindingService.getChained.bind(this.#h.bindingService), getClassMetadata: N, getPlan: this.#h.planResultCacheService.get.bind(this.#h.planResultCacheService), setBinding: this.#v.bind(this), setNonCachedServiceNode: this.#h.planResultCacheService.setNonCachedServiceNode.bind(this.#h.planResultCacheService), setPlan: this.#h.planResultCacheService.set.bind(this.#h.planResultCacheService) }, this.#h.onReset(() => {
      this.#C();
    });
  }
  #C() {
    this.planParamsOperations.getBindings = this.#h.bindingService.get.bind(this.#h.bindingService), this.planParamsOperations.getBindingsChained = this.#h.bindingService.getChained.bind(this.#h.bindingService), this.planParamsOperations.setBinding = this.#v.bind(this);
  }
  #v(e3) {
    this.#h.bindingService.set(e3), this.#h.planResultCacheService.invalidateServiceBinding({ binding: e3, kind: We.bindingAdded, operations: this.planParamsOperations });
  }
};
var J = class {
  #B;
  #h;
  constructor(e3, n3) {
    this.#B = e3, this.#h = n3;
  }
  invalidateService(e3) {
    this.#h.planResultCacheService.invalidateServiceBinding({ ...e3, operations: this.#B.planParamsOperations });
  }
};
var Q = class {
  #O;
  #x;
  #k;
  #h;
  constructor(e3, n3, i3) {
    this.#h = n3, this.#k = i3, this.#O = this.#N(e3), this.#x = this.#U();
  }
  register(e3, n3) {
    const i3 = new n3(e3, this.#x);
    if (true !== i3[t3]) throw new B(O.invalidOperation, "Invalid plugin. The plugin must extend the Plugin class");
    i3.load(this.#O);
  }
  #N(e3) {
    return { define: (n3, i3) => {
      if (Object.prototype.hasOwnProperty.call(e3, n3)) throw new B(O.invalidOperation, `Container already has a method named "${String(n3)}"`);
      e3[n3] = i3;
    }, onPlan: this.#k.onPlan.bind(this.#k) };
  }
  #U() {
    const e3 = this.#h;
    return { get activationService() {
      return e3.activationService;
    }, get bindingService() {
      return e3.bindingService;
    }, get deactivationService() {
      return e3.deactivationService;
    }, get planResultCacheService() {
      return e3.planResultCacheService;
    } };
  }
};
var W2 = class {
  activationService;
  bindingService;
  deactivationService;
  planResultCacheService;
  #F;
  constructor(e3, n3, i3, t5) {
    this.activationService = e3, this.bindingService = n3, this.deactivationService = i3, this.planResultCacheService = t5, this.#F = [];
  }
  reset(e3, n3, i3) {
    this.activationService = e3, this.bindingService = n3, this.deactivationService = i3, this.planResultCacheService.clearCache();
    for (const e4 of this.#F) e4();
  }
  onReset(e3) {
    this.#F.push(e3);
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
  constructor(e3, n3, i3, t5) {
    this.#B = e3, this.#h = n3, this.#T = this.#E(), this.#D = i3, this.#a = t5, this.#j = (e4) => this.#h.activationService.get(e4), this.#V = [], this.#h.onReset(() => {
      this.#C();
    });
  }
  get(e3, n3) {
    const i3 = this.#L(false, e3, n3), t5 = this.#$(i3);
    if (e(t5)) throw new B(O.invalidOperation, `Unexpected asynchronous service when resolving service "${t(e3)}"`);
    return t5;
  }
  getAll(e3, n3) {
    const i3 = this.#L(true, e3, n3), t5 = this.#$(i3);
    if (e(t5)) throw new B(O.invalidOperation, `Unexpected asynchronous service when resolving service "${t(e3)}"`);
    return t5;
  }
  async getAllAsync(e3, n3) {
    const i3 = this.#L(true, e3, n3);
    return this.#$(i3);
  }
  async getAsync(e3, n3) {
    const i3 = this.#L(false, e3, n3);
    return this.#$(i3);
  }
  onPlan(e3) {
    this.#V.push(e3);
  }
  #C() {
    this.#T = this.#E();
  }
  #q(e3, n3, i3) {
    const t5 = i3?.name, r3 = i3?.optional ?? false, a3 = i3?.tag;
    return e3 ? { chained: i3?.chained ?? false, isMultiple: e3, name: t5, optional: r3, serviceIdentifier: n3, tag: a3 } : { isMultiple: e3, name: t5, optional: r3, serviceIdentifier: n3, tag: a3 };
  }
  #G(e3, n3, i3) {
    const t5 = { autobindOptions: i3?.autobind ?? this.#D ? { scope: this.#a } : void 0, operations: this.#B.planParamsOperations, rootConstraints: this.#H(e3, n3, i3), servicesBranch: [] };
    return this.#_(t5, i3), t5;
  }
  #H(e3, n3, i3) {
    return n3 ? { chained: i3?.chained ?? false, isMultiple: n3, serviceIdentifier: e3 } : { isMultiple: n3, serviceIdentifier: e3 };
  }
  #L(e3, n3, i3) {
    const t5 = this.#q(e3, n3, i3), r3 = this.#h.planResultCacheService.get(t5);
    if (void 0 !== r3) return r3;
    const a3 = Ge(this.#G(n3, e3, i3));
    for (const e4 of this.#V) e4(t5, a3);
    return a3;
  }
  #E() {
    return { get: this.get.bind(this), getAll: this.getAll.bind(this), getAllAsync: this.getAllAsync.bind(this), getAsync: this.getAsync.bind(this) };
  }
  #$(e3) {
    return Nt({ context: this.#T, getActivations: this.#j, planResult: e3, requestScopeCache: /* @__PURE__ */ new Map() });
  }
  #_(e3, n3) {
    void 0 !== n3 && (void 0 !== n3.name && (e3.rootConstraints.name = n3.name), true === n3.optional && (e3.rootConstraints.isOptional = true), void 0 !== n3.tag && (e3.rootConstraints.tag = { key: n3.tag.key, value: n3.tag.value }), e3.rootConstraints.isMultiple && (e3.rootConstraints.chained = n3?.chained ?? false));
  }
};
var Z = class {
  #h;
  #z;
  constructor(e3) {
    this.#h = e3, this.#z = [];
  }
  restore() {
    const e3 = this.#z.pop();
    if (void 0 === e3) throw new B(O.invalidOperation, "No snapshot available to restore");
    this.#h.reset(e3.activationService, e3.bindingService, e3.deactivationService);
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
  constructor(e3) {
    const n3 = e3?.autobind ?? false, i3 = e3?.defaultScope ?? ee;
    this.#h = this.#Q(e3, n3, i3);
    const t5 = new X(this.#h), r3 = new J(t5, this.#h), a3 = new K2(this.#h);
    this.#w = new _(a3.deactivationParams, i3, r3, this.#h), this.#K = new z(this.#w, a3.deactivationParams, i3, r3, this.#h), this.#k = new Y(t5, this.#h, n3, i3), this.#X = new Q(this, this.#h, this.#k), this.#J = new Z(this.#h);
  }
  bind(e3) {
    return this.#w.bind(e3);
  }
  get(e3, n3) {
    return this.#k.get(e3, n3);
  }
  getAll(e3, n3) {
    return this.#k.getAll(e3, n3);
  }
  async getAllAsync(e3, n3) {
    return this.#k.getAllAsync(e3, n3);
  }
  async getAsync(e3, n3) {
    return this.#k.getAsync(e3, n3);
  }
  isBound(e3, n3) {
    return this.#w.isBound(e3, n3);
  }
  isCurrentBound(e3, n3) {
    return this.#w.isCurrentBound(e3, n3);
  }
  async load(...e3) {
    return this.#K.load(...e3);
  }
  loadSync(...e3) {
    this.#K.loadSync(...e3);
  }
  onActivation(e3, n3) {
    this.#h.activationService.add(n3, { serviceId: e3 });
  }
  onDeactivation(e3, n3) {
    this.#h.deactivationService.add(n3, { serviceId: e3 });
  }
  register(e3) {
    this.#X.register(this, e3);
  }
  restore() {
    this.#J.restore();
  }
  async rebind(e3) {
    return this.#w.rebind(e3);
  }
  rebindSync(e3) {
    return this.#w.rebindSync(e3);
  }
  snapshot() {
    this.#J.snapshot();
  }
  async unbind(e3) {
    await this.#w.unbind(e3);
  }
  async unbindAll() {
    await this.#w.unbindAll();
  }
  unbindAllSync() {
    this.#w.unbindAllSync();
  }
  unbindSync(e3) {
    this.#w.unbindSync(e3);
  }
  async unload(...e3) {
    return this.#K.unload(...e3);
  }
  unloadSync(...e3) {
    this.#K.unloadSync(...e3);
  }
  #W(e3, n3) {
    if (e3) return { scope: n3 };
  }
  #Q(e3, n3, i3) {
    const t5 = this.#W(n3, i3);
    if (void 0 === e3?.parent) return new W2(v.build(() => {
    }), T.build(() => {
    }, t5), j.build(() => {
    }), new et());
    const r3 = new et(), a3 = e3.parent;
    return a3.#h.planResultCacheService.subscribe(r3), new W2(v.build(() => a3.#h.activationService), T.build(() => a3.#h.bindingService, t5), j.build(() => a3.#h.deactivationService), r3);
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
    const { name, message: message2, stack, cause, ...errorAttributes } = error;
    const formattedError = {
      name,
      location: this.getCodeLocation(error.stack),
      message: message2,
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
  for (let i3 = 0; i3 < sourceArray.length; i3++) {
    const srcItem = sourceArray[i3];
    const tgtItem = targetArray[i3];
    const isSrcPlainObject = isPlainObject(srcItem);
    if (isSrcPlainObject && seen.has(srcItem)) {
      continue;
    }
    if (isSrcPlainObject && isPlainObject(tgtItem)) {
      seen.add(srcItem);
      mergeRecursive(tgtItem, srcItem, seen);
      continue;
    }
    targetArray[i3] = srcItem;
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
  static injectLambdaContextAfterOrOnError(logger2, _persistentAttributes, options) {
    if (options && (options.clearState || options?.resetKeys)) {
      logger2.resetKeys();
    }
  }
  /**
   * @deprecated - This method is deprecated and will be removed in the next major version.
   */
  /* v8 ignore next -- @preserve */
  static injectLambdaContextBefore(logger2, event, context, options) {
    logger2.addContext(context);
    logger2.logEventIfEnabled(event, options?.logEvent);
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
  #warnOnce(message2) {
    if (this.#warnOnceMap.has(message2))
      return;
    this.#warnOnceMap.set(message2, true);
    this.warn(message2);
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
    const { message: message2, ...rest } = input;
    baseAttributes.message = message2;
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
    this.console.trace = (message2, ...optionalParams) => {
      this.console.log(message2, ...optionalParams);
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
      jwtSecret: env2["JWT_SECRET"] || "",
      cognitoUserPoolId: env2["COGNITO_USER_POOL_ID"] || "",
      cognitoUserPoolClientId: env2["COGNITO_USER_POOL_CLIENT_ID"] || "",
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
    const requiredForAllEnvironments = [
      "awsRegion",
      "bedrockModel",
      "dynamoDBTablePrefix",
      "jwtSecret",
      "cognitoUserPoolId",
      "cognitoUserPoolClientId"
    ];
    const missingKeys = [];
    for (const key of requiredForAllEnvironments) {
      const value = this.config[key];
      if (!value || typeof value === "string" && value.trim().length === 0) {
        missingKeys.push(key);
      }
    }
    if (this.config.environment === "production") {
      if (this.config.cognitoUserPoolId.includes("development")) {
        missingKeys.push("cognitoUserPoolId (looks non-production)");
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
      cognitoUserPoolClientId: config.cognitoUserPoolClientId,
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
  constructor(config, logger2) {
    this.client = new import_client_dynamodb.DynamoDBClient({
      region: config.region,
      ...config.endpoint && { endpoint: config.endpoint }
    });
    this.docClient = import_lib_dynamodb.DynamoDBDocumentClient.from(this.client);
    this.logger = logger2;
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
  constructor(config, logger2) {
    super(config, logger2);
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
  constructor(config, logger2) {
    super(config, logger2);
    this.tableName = this.getTableName("chat-history");
  }
  async save(message2) {
    try {
      const item = this.mapMessageToDynamoItem(message2);
      await this.docClient.send(new import_lib_dynamodb3.PutCommand({
        TableName: this.tableName,
        Item: item
      }));
      this.logger.debug("Chat message saved", {
        messageId: message2.id,
        sessionId: message2.sessionId,
        role: message2.role
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
      for (const message2 of messages) {
        await this.docClient.send(new import_lib_dynamodb3.DeleteCommand({
          TableName: this.tableName,
          Key: {
            sessionId: message2.sessionId,
            timestamp: message2.timestamp.toISOString()
          }
        }));
      }
      this.logger.info("Chat session deleted", { sessionId, messageCount: messages.length });
    } catch (error) {
      this.handleDynamoDBError(error, "deleteSession");
    }
  }
  mapMessageToDynamoItem(message2) {
    const timestamp = message2.timestamp.toISOString();
    return {
      sessionId: message2.sessionId,
      timestamp,
      // Sort key
      messageId: message2.id,
      userId: message2.userId,
      role: message2.role,
      content: message2.content,
      metadata: message2.metadata || {},
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
  constructor(config, logger2) {
    super(config, logger2);
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
  constructor(config, logger2) {
    this.client = new import_client_bedrock_runtime.BedrockRuntimeClient({
      region: config.awsRegion
    });
    this.modelId = config.bedrockModel;
    this.logger = logger2;
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
    for (const message2 of messages) {
      if (message2.role === "system" && systemPrompt) {
        continue;
      }
      formatted.push({
        role: message2.role,
        content: message2.content
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
  constructor(config, flightTools, chatHistoryRepo, logger2) {
    this.aiService = new BedrockAIService(config, logger2);
    this.flightTools = flightTools;
    this.chatHistoryRepo = chatHistoryRepo;
    this.logger = logger2;
  }
  async initialize() {
    this.logger.debug("ContosoTravelAgent initialized");
  }
  async processMessage(message2, context) {
    const normalizedMessage = message2.toLowerCase();
    let toolCalls = [];
    if (this.isFlightSearchIntent(normalizedMessage)) {
      const parsed = this.tryParseRoute(message2);
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
            { role: "user", content: message2 },
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
    const aiResponse = await this.aiService.chatCompletion(this.toChatMessages(message2, context), {
      systemPrompt: "You are Contoso Travel Assistant. Be concise, practical, and ask one follow-up question when helpful."
    });
    await this.saveConversationMessages(context.sessionId, context.userId, [
      { role: "user", content: message2 },
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
  isFlightSearchIntent(message2) {
    return ["flight", "flights", "fly", "airfare", "ticket"].some((token) => message2.includes(token));
  }
  tryParseRoute(message2) {
    const routeRegex = /from\s+([a-zA-Z\s]+?)\s+to\s+([a-zA-Z\s]+?)(?:[.!?]|$)/i;
    const match = message2.match(routeRegex);
    if (!match?.[1] || !match?.[2]) {
      return null;
    }
    return {
      origin: match[1].trim(),
      destination: match[2].trim()
    };
  }
  toChatMessages(message2, context) {
    const historyMessages = context.history.slice(-10).map((item) => ({
      role: item.role === "system" ? "system" : item.role,
      content: item.content,
      timestamp: item.timestamp
    }));
    historyMessages.push({ role: "user", content: message2 });
    return historyMessages;
  }
  async saveConversationMessages(sessionId, userId, messages) {
    for (const message2 of messages) {
      await this.chatHistoryRepo.save({
        id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        sessionId,
        userId,
        role: message2.role,
        content: message2.content,
        timestamp: /* @__PURE__ */ new Date()
      });
    }
  }
};

// asset-input/src/application/tools/FlightTools.ts
var FlightTools = class {
  constructor(flightRepository, logger2) {
    this.flightRepository = flightRepository;
    this.logger = logger2;
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
  constructor(flightRepository, chatHistoryRepository, userProfileRepository, config, logger2) {
    this.flightRepository = flightRepository;
    this.chatHistoryRepository = chatHistoryRepository;
    this.userProfileRepository = userProfileRepository;
    this.config = config;
    this.logger = logger2;
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
  async processMessage(sessionId, userId, message2) {
    try {
      const agent = await this.getAgent(sessionId, userId);
      const context = await this.buildConversationContext(sessionId, userId);
      this.touchSession(sessionId);
      const response = await agent.processMessage(message2, context);
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
  const configValidation = configService.validateConfig();
  if (!configValidation.isValid) {
    throw new Error(`Invalid application configuration: ${configValidation.missingKeys.join(", ")}`);
  }
  container2.bind(TYPES.AppConfig).toConstantValue(configService);
  const logger2 = new Logger({ serviceName: "contoso-travel-agent" });
  container2.bind(TYPES.Logger).toConstantValue(logger2);
  container2.bind(TYPES.UserProfileRepository).toDynamicValue(() => {
    const config = container2.get(TYPES.AppConfig);
    const logger3 = container2.get(TYPES.Logger);
    return new DynamoDBUserProfileRepository(config.getDynamoDBConfig(), logger3);
  });
  container2.bind(TYPES.ChatHistoryRepository).toDynamicValue(() => {
    const config = container2.get(TYPES.AppConfig);
    const logger3 = container2.get(TYPES.Logger);
    return new DynamoDBChatHistoryRepository(config.getDynamoDBConfig(), logger3);
  });
  container2.bind(TYPES.FlightDataRepository).toDynamicValue(() => {
    const config = container2.get(TYPES.AppConfig);
    const logger3 = container2.get(TYPES.Logger);
    return new DynamoDBFlightSearchRepository(config.getDynamoDBConfig(), logger3);
  });
  container2.bind(TYPES.TravelAgentService).toDynamicValue(() => {
    const configService2 = container2.get(TYPES.AppConfig);
    const logger3 = container2.get(TYPES.Logger);
    const flightRepository = container2.get(TYPES.FlightDataRepository);
    const chatHistoryRepository = container2.get(TYPES.ChatHistoryRepository);
    const userProfileRepository = container2.get(TYPES.UserProfileRepository);
    return new TravelAgentService(
      flightRepository,
      chatHistoryRepository,
      userProfileRepository,
      configService2.getConfig(),
      logger3
    );
  });
  return container2;
}
var container = configureContainer();

// asset-input/src/auth/jwtValidator.ts
var import_jsonwebtoken = __toESM(require_jsonwebtoken());

// asset-input/node_modules/jwks-client/JwksClient.js
var import_debug3 = __toESM(require_src(), 1);

// asset-input/node_modules/node-fetch/src/index.js
var import_node_http2 = __toESM(require("node:http"), 1);
var import_node_https = __toESM(require("node:https"), 1);
var import_node_zlib = __toESM(require("node:zlib"), 1);
var import_node_stream2 = __toESM(require("node:stream"), 1);
var import_node_buffer2 = require("node:buffer");

// asset-input/node_modules/data-uri-to-buffer/dist/index.js
function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri)) {
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  }
  uri = uri.replace(/\r?\n/g, "");
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    throw new TypeError("malformed data: URI");
  }
  const meta = uri.substring(5, firstComma).split(";");
  let charset = "";
  let base64 = false;
  const type = meta[0] || "text/plain";
  let typeFull = type;
  for (let i3 = 1; i3 < meta.length; i3++) {
    if (meta[i3] === "base64") {
      base64 = true;
    } else if (meta[i3]) {
      typeFull += `;${meta[i3]}`;
      if (meta[i3].indexOf("charset=") === 0) {
        charset = meta[i3].substring(8);
      }
    }
  }
  if (!meta[0] && !charset.length) {
    typeFull += ";charset=US-ASCII";
    charset = "US-ASCII";
  }
  const encoding = base64 ? "base64" : "ascii";
  const data = unescape(uri.substring(firstComma + 1));
  const buffer = Buffer.from(data, encoding);
  buffer.type = type;
  buffer.typeFull = typeFull;
  buffer.charset = charset;
  return buffer;
}
var dist_default = dataUriToBuffer;

// asset-input/node_modules/node-fetch/src/body.js
var import_node_stream = __toESM(require("node:stream"), 1);
var import_node_util = require("node:util");
var import_node_buffer = require("node:buffer");
init_fetch_blob();
init_esm_min();

// asset-input/node_modules/node-fetch/src/errors/base.js
var FetchBaseError = class extends Error {
  constructor(message2, type) {
    super(message2);
    Error.captureStackTrace(this, this.constructor);
    this.type = type;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
};

// asset-input/node_modules/node-fetch/src/errors/fetch-error.js
var FetchError = class extends FetchBaseError {
  /**
   * @param  {string} message -      Error message for human
   * @param  {string} [type] -        Error type for machine
   * @param  {SystemError} [systemError] - For Node.js system error
   */
  constructor(message2, type, systemError) {
    super(message2, type);
    if (systemError) {
      this.code = this.errno = systemError.code;
      this.erroredSysCall = systemError.syscall;
    }
  }
};

// asset-input/node_modules/node-fetch/src/utils/is.js
var NAME = Symbol.toStringTag;
var isURLSearchParameters = (object) => {
  return typeof object === "object" && typeof object.append === "function" && typeof object.delete === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.has === "function" && typeof object.set === "function" && typeof object.sort === "function" && object[NAME] === "URLSearchParams";
};
var isBlob = (object) => {
  return object && typeof object === "object" && typeof object.arrayBuffer === "function" && typeof object.type === "string" && typeof object.stream === "function" && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[NAME]);
};
var isAbortSignal = (object) => {
  return typeof object === "object" && (object[NAME] === "AbortSignal" || object[NAME] === "EventTarget");
};
var isDomainOrSubdomain = (destination, original) => {
  const orig = new URL(original).hostname;
  const dest = new URL(destination).hostname;
  return orig === dest || orig.endsWith(`.${dest}`);
};
var isSameProtocol = (destination, original) => {
  const orig = new URL(original).protocol;
  const dest = new URL(destination).protocol;
  return orig === dest;
};

// asset-input/node_modules/node-fetch/src/body.js
var pipeline = (0, import_node_util.promisify)(import_node_stream.default.pipeline);
var INTERNALS = Symbol("Body internals");
var Body = class {
  constructor(body, {
    size = 0
  } = {}) {
    let boundary = null;
    if (body === null) {
      body = null;
    } else if (isURLSearchParameters(body)) {
      body = import_node_buffer.Buffer.from(body.toString());
    } else if (isBlob(body)) {
    } else if (import_node_buffer.Buffer.isBuffer(body)) {
    } else if (import_node_util.types.isAnyArrayBuffer(body)) {
      body = import_node_buffer.Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
      body = import_node_buffer.Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    } else if (body instanceof import_node_stream.default) {
    } else if (body instanceof FormData) {
      body = formDataToBlob(body);
      boundary = body.type.split("=")[1];
    } else {
      body = import_node_buffer.Buffer.from(String(body));
    }
    let stream = body;
    if (import_node_buffer.Buffer.isBuffer(body)) {
      stream = import_node_stream.default.Readable.from(body);
    } else if (isBlob(body)) {
      stream = import_node_stream.default.Readable.from(body.stream());
    }
    this[INTERNALS] = {
      body,
      stream,
      boundary,
      disturbed: false,
      error: null
    };
    this.size = size;
    if (body instanceof import_node_stream.default) {
      body.on("error", (error_) => {
        const error = error_ instanceof FetchBaseError ? error_ : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${error_.message}`, "system", error_);
        this[INTERNALS].error = error;
      });
    }
  }
  get body() {
    return this[INTERNALS].stream;
  }
  get bodyUsed() {
    return this[INTERNALS].disturbed;
  }
  /**
   * Decode response as ArrayBuffer
   *
   * @return  Promise
   */
  async arrayBuffer() {
    const { buffer, byteOffset, byteLength } = await consumeBody(this);
    return buffer.slice(byteOffset, byteOffset + byteLength);
  }
  async formData() {
    const ct2 = this.headers.get("content-type");
    if (ct2.startsWith("application/x-www-form-urlencoded")) {
      const formData = new FormData();
      const parameters = new URLSearchParams(await this.text());
      for (const [name, value] of parameters) {
        formData.append(name, value);
      }
      return formData;
    }
    const { toFormData: toFormData2 } = await Promise.resolve().then(() => (init_multipart_parser(), multipart_parser_exports));
    return toFormData2(this.body, ct2);
  }
  /**
   * Return raw response as Blob
   *
   * @return Promise
   */
  async blob() {
    const ct2 = this.headers && this.headers.get("content-type") || this[INTERNALS].body && this[INTERNALS].body.type || "";
    const buf = await this.arrayBuffer();
    return new fetch_blob_default([buf], {
      type: ct2
    });
  }
  /**
   * Decode response as json
   *
   * @return  Promise
   */
  async json() {
    const text = await this.text();
    return JSON.parse(text);
  }
  /**
   * Decode response as text
   *
   * @return  Promise
   */
  async text() {
    const buffer = await consumeBody(this);
    return new TextDecoder().decode(buffer);
  }
  /**
   * Decode response as buffer (non-spec api)
   *
   * @return  Promise
   */
  buffer() {
    return consumeBody(this);
  }
};
Body.prototype.buffer = (0, import_node_util.deprecate)(Body.prototype.buffer, "Please use 'response.arrayBuffer()' instead of 'response.buffer()'", "node-fetch#buffer");
Object.defineProperties(Body.prototype, {
  body: { enumerable: true },
  bodyUsed: { enumerable: true },
  arrayBuffer: { enumerable: true },
  blob: { enumerable: true },
  json: { enumerable: true },
  text: { enumerable: true },
  data: { get: (0, import_node_util.deprecate)(
    () => {
    },
    "data doesn't exist, use json(), text(), arrayBuffer(), or body instead",
    "https://github.com/node-fetch/node-fetch/issues/1000 (response)"
  ) }
});
async function consumeBody(data) {
  if (data[INTERNALS].disturbed) {
    throw new TypeError(`body used already for: ${data.url}`);
  }
  data[INTERNALS].disturbed = true;
  if (data[INTERNALS].error) {
    throw data[INTERNALS].error;
  }
  const { body } = data;
  if (body === null) {
    return import_node_buffer.Buffer.alloc(0);
  }
  if (!(body instanceof import_node_stream.default)) {
    return import_node_buffer.Buffer.alloc(0);
  }
  const accum = [];
  let accumBytes = 0;
  try {
    for await (const chunk of body) {
      if (data.size > 0 && accumBytes + chunk.length > data.size) {
        const error = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
        body.destroy(error);
        throw error;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error) {
    const error_ = error instanceof FetchBaseError ? error : new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error.message}`, "system", error);
    throw error_;
  }
  if (body.readableEnded === true || body._readableState.ended === true) {
    try {
      if (accum.every((c3) => typeof c3 === "string")) {
        return import_node_buffer.Buffer.from(accum.join(""));
      }
      return import_node_buffer.Buffer.concat(accum, accumBytes);
    } catch (error) {
      throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error.message}`, "system", error);
    }
  } else {
    throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
  }
}
var clone = (instance, highWaterMark) => {
  let p1;
  let p2;
  let { body } = instance[INTERNALS];
  if (instance.bodyUsed) {
    throw new Error("cannot clone body after it is used");
  }
  if (body instanceof import_node_stream.default && typeof body.getBoundary !== "function") {
    p1 = new import_node_stream.PassThrough({ highWaterMark });
    p2 = new import_node_stream.PassThrough({ highWaterMark });
    body.pipe(p1);
    body.pipe(p2);
    instance[INTERNALS].stream = p1;
    body = p2;
  }
  return body;
};
var getNonSpecFormDataBoundary = (0, import_node_util.deprecate)(
  (body) => body.getBoundary(),
  "form-data doesn't follow the spec and requires special treatment. Use alternative package",
  "https://github.com/node-fetch/node-fetch/issues/1167"
);
var extractContentType = (body, request) => {
  if (body === null) {
    return null;
  }
  if (typeof body === "string") {
    return "text/plain;charset=UTF-8";
  }
  if (isURLSearchParameters(body)) {
    return "application/x-www-form-urlencoded;charset=UTF-8";
  }
  if (isBlob(body)) {
    return body.type || null;
  }
  if (import_node_buffer.Buffer.isBuffer(body) || import_node_util.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
    return null;
  }
  if (body instanceof FormData) {
    return `multipart/form-data; boundary=${request[INTERNALS].boundary}`;
  }
  if (body && typeof body.getBoundary === "function") {
    return `multipart/form-data;boundary=${getNonSpecFormDataBoundary(body)}`;
  }
  if (body instanceof import_node_stream.default) {
    return null;
  }
  return "text/plain;charset=UTF-8";
};
var getTotalBytes = (request) => {
  const { body } = request[INTERNALS];
  if (body === null) {
    return 0;
  }
  if (isBlob(body)) {
    return body.size;
  }
  if (import_node_buffer.Buffer.isBuffer(body)) {
    return body.length;
  }
  if (body && typeof body.getLengthSync === "function") {
    return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
  }
  return null;
};
var writeToStream = async (dest, { body }) => {
  if (body === null) {
    dest.end();
  } else {
    await pipeline(body, dest);
  }
};

// asset-input/node_modules/node-fetch/src/headers.js
var import_node_util2 = require("node:util");
var import_node_http = __toESM(require("node:http"), 1);
var validateHeaderName = typeof import_node_http.default.validateHeaderName === "function" ? import_node_http.default.validateHeaderName : (name) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
    const error = new TypeError(`Header name must be a valid HTTP token [${name}]`);
    Object.defineProperty(error, "code", { value: "ERR_INVALID_HTTP_TOKEN" });
    throw error;
  }
};
var validateHeaderValue = typeof import_node_http.default.validateHeaderValue === "function" ? import_node_http.default.validateHeaderValue : (name, value) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
    const error = new TypeError(`Invalid character in header content ["${name}"]`);
    Object.defineProperty(error, "code", { value: "ERR_INVALID_CHAR" });
    throw error;
  }
};
var Headers = class _Headers extends URLSearchParams {
  /**
   * Headers class
   *
   * @constructor
   * @param {HeadersInit} [init] - Response headers
   */
  constructor(init) {
    let result = [];
    if (init instanceof _Headers) {
      const raw = init.raw();
      for (const [name, values] of Object.entries(raw)) {
        result.push(...values.map((value) => [name, value]));
      }
    } else if (init == null) {
    } else if (typeof init === "object" && !import_node_util2.types.isBoxedPrimitive(init)) {
      const method = init[Symbol.iterator];
      if (method == null) {
        result.push(...Object.entries(init));
      } else {
        if (typeof method !== "function") {
          throw new TypeError("Header pairs must be iterable");
        }
        result = [...init].map((pair) => {
          if (typeof pair !== "object" || import_node_util2.types.isBoxedPrimitive(pair)) {
            throw new TypeError("Each header pair must be an iterable object");
          }
          return [...pair];
        }).map((pair) => {
          if (pair.length !== 2) {
            throw new TypeError("Each header pair must be a name/value tuple");
          }
          return [...pair];
        });
      }
    } else {
      throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
    }
    result = result.length > 0 ? result.map(([name, value]) => {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return [String(name).toLowerCase(), String(value)];
    }) : void 0;
    super(result);
    return new Proxy(this, {
      get(target, p2, receiver) {
        switch (p2) {
          case "append":
          case "set":
            return (name, value) => {
              validateHeaderName(name);
              validateHeaderValue(name, String(value));
              return URLSearchParams.prototype[p2].call(
                target,
                String(name).toLowerCase(),
                String(value)
              );
            };
          case "delete":
          case "has":
          case "getAll":
            return (name) => {
              validateHeaderName(name);
              return URLSearchParams.prototype[p2].call(
                target,
                String(name).toLowerCase()
              );
            };
          case "keys":
            return () => {
              target.sort();
              return new Set(URLSearchParams.prototype.keys.call(target)).keys();
            };
          default:
            return Reflect.get(target, p2, receiver);
        }
      }
    });
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return Object.prototype.toString.call(this);
  }
  get(name) {
    const values = this.getAll(name);
    if (values.length === 0) {
      return null;
    }
    let value = values.join(", ");
    if (/^content-encoding$/i.test(name)) {
      value = value.toLowerCase();
    }
    return value;
  }
  forEach(callback, thisArg = void 0) {
    for (const name of this.keys()) {
      Reflect.apply(callback, thisArg, [this.get(name), name, this]);
    }
  }
  *values() {
    for (const name of this.keys()) {
      yield this.get(name);
    }
  }
  /**
   * @type {() => IterableIterator<[string, string]>}
   */
  *entries() {
    for (const name of this.keys()) {
      yield [name, this.get(name)];
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  /**
   * Node-fetch non-spec method
   * returning all headers and their values as array
   * @returns {Record<string, string[]>}
   */
  raw() {
    return [...this.keys()].reduce((result, key) => {
      result[key] = this.getAll(key);
      return result;
    }, {});
  }
  /**
   * For better console.log(headers) and also to convert Headers into Node.js Request compatible format
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((result, key) => {
      const values = this.getAll(key);
      if (key === "host") {
        result[key] = values[0];
      } else {
        result[key] = values.length > 1 ? values : values[0];
      }
      return result;
    }, {});
  }
};
Object.defineProperties(
  Headers.prototype,
  ["get", "entries", "forEach", "values"].reduce((result, property) => {
    result[property] = { enumerable: true };
    return result;
  }, {})
);
function fromRawHeaders(headers = []) {
  return new Headers(
    headers.reduce((result, value, index, array) => {
      if (index % 2 === 0) {
        result.push(array.slice(index, index + 2));
      }
      return result;
    }, []).filter(([name, value]) => {
      try {
        validateHeaderName(name);
        validateHeaderValue(name, String(value));
        return true;
      } catch {
        return false;
      }
    })
  );
}

// asset-input/node_modules/node-fetch/src/utils/is-redirect.js
var redirectStatus = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
var isRedirect = (code) => {
  return redirectStatus.has(code);
};

// asset-input/node_modules/node-fetch/src/response.js
var INTERNALS2 = Symbol("Response internals");
var Response = class _Response extends Body {
  constructor(body = null, options = {}) {
    super(body, options);
    const status = options.status != null ? options.status : 200;
    const headers = new Headers(options.headers);
    if (body !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(body, this);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    this[INTERNALS2] = {
      type: "default",
      url: options.url,
      status,
      statusText: options.statusText || "",
      headers,
      counter: options.counter,
      highWaterMark: options.highWaterMark
    };
  }
  get type() {
    return this[INTERNALS2].type;
  }
  get url() {
    return this[INTERNALS2].url || "";
  }
  get status() {
    return this[INTERNALS2].status;
  }
  /**
   * Convenience property representing if the request ended normally
   */
  get ok() {
    return this[INTERNALS2].status >= 200 && this[INTERNALS2].status < 300;
  }
  get redirected() {
    return this[INTERNALS2].counter > 0;
  }
  get statusText() {
    return this[INTERNALS2].statusText;
  }
  get headers() {
    return this[INTERNALS2].headers;
  }
  get highWaterMark() {
    return this[INTERNALS2].highWaterMark;
  }
  /**
   * Clone this response
   *
   * @return  Response
   */
  clone() {
    return new _Response(clone(this, this.highWaterMark), {
      type: this.type,
      url: this.url,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      ok: this.ok,
      redirected: this.redirected,
      size: this.size,
      highWaterMark: this.highWaterMark
    });
  }
  /**
   * @param {string} url    The URL that the new response is to originate from.
   * @param {number} status An optional status code for the response (e.g., 302.)
   * @returns {Response}    A Response object.
   */
  static redirect(url, status = 302) {
    if (!isRedirect(status)) {
      throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
    }
    return new _Response(null, {
      headers: {
        location: new URL(url).toString()
      },
      status
    });
  }
  static error() {
    const response = new _Response(null, { status: 0, statusText: "" });
    response[INTERNALS2].type = "error";
    return response;
  }
  static json(data = void 0, init = {}) {
    const body = JSON.stringify(data);
    if (body === void 0) {
      throw new TypeError("data is not JSON serializable");
    }
    const headers = new Headers(init && init.headers);
    if (!headers.has("content-type")) {
      headers.set("content-type", "application/json");
    }
    return new _Response(body, {
      ...init,
      headers
    });
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
};
Object.defineProperties(Response.prototype, {
  type: { enumerable: true },
  url: { enumerable: true },
  status: { enumerable: true },
  ok: { enumerable: true },
  redirected: { enumerable: true },
  statusText: { enumerable: true },
  headers: { enumerable: true },
  clone: { enumerable: true }
});

// asset-input/node_modules/node-fetch/src/request.js
var import_node_url = require("node:url");
var import_node_util3 = require("node:util");

// asset-input/node_modules/node-fetch/src/utils/get-search.js
var getSearch = (parsedURL) => {
  if (parsedURL.search) {
    return parsedURL.search;
  }
  const lastOffset = parsedURL.href.length - 1;
  const hash = parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
  return parsedURL.href[lastOffset - hash.length] === "?" ? "?" : "";
};

// asset-input/node_modules/node-fetch/src/utils/referrer.js
var import_node_net = require("node:net");
function stripURLForUseAsAReferrer(url, originOnly = false) {
  if (url == null) {
    return "no-referrer";
  }
  url = new URL(url);
  if (/^(about|blob|data):$/.test(url.protocol)) {
    return "no-referrer";
  }
  url.username = "";
  url.password = "";
  url.hash = "";
  if (originOnly) {
    url.pathname = "";
    url.search = "";
  }
  return url;
}
var ReferrerPolicy = /* @__PURE__ */ new Set([
  "",
  "no-referrer",
  "no-referrer-when-downgrade",
  "same-origin",
  "origin",
  "strict-origin",
  "origin-when-cross-origin",
  "strict-origin-when-cross-origin",
  "unsafe-url"
]);
var DEFAULT_REFERRER_POLICY = "strict-origin-when-cross-origin";
function validateReferrerPolicy(referrerPolicy) {
  if (!ReferrerPolicy.has(referrerPolicy)) {
    throw new TypeError(`Invalid referrerPolicy: ${referrerPolicy}`);
  }
  return referrerPolicy;
}
function isOriginPotentiallyTrustworthy(url) {
  if (/^(http|ws)s:$/.test(url.protocol)) {
    return true;
  }
  const hostIp = url.host.replace(/(^\[)|(]$)/g, "");
  const hostIPVersion = (0, import_node_net.isIP)(hostIp);
  if (hostIPVersion === 4 && /^127\./.test(hostIp)) {
    return true;
  }
  if (hostIPVersion === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(hostIp)) {
    return true;
  }
  if (url.host === "localhost" || url.host.endsWith(".localhost")) {
    return false;
  }
  if (url.protocol === "file:") {
    return true;
  }
  return false;
}
function isUrlPotentiallyTrustworthy(url) {
  if (/^about:(blank|srcdoc)$/.test(url)) {
    return true;
  }
  if (url.protocol === "data:") {
    return true;
  }
  if (/^(blob|filesystem):$/.test(url.protocol)) {
    return true;
  }
  return isOriginPotentiallyTrustworthy(url);
}
function determineRequestsReferrer(request, { referrerURLCallback, referrerOriginCallback } = {}) {
  if (request.referrer === "no-referrer" || request.referrerPolicy === "") {
    return null;
  }
  const policy = request.referrerPolicy;
  if (request.referrer === "about:client") {
    return "no-referrer";
  }
  const referrerSource = request.referrer;
  let referrerURL = stripURLForUseAsAReferrer(referrerSource);
  let referrerOrigin = stripURLForUseAsAReferrer(referrerSource, true);
  if (referrerURL.toString().length > 4096) {
    referrerURL = referrerOrigin;
  }
  if (referrerURLCallback) {
    referrerURL = referrerURLCallback(referrerURL);
  }
  if (referrerOriginCallback) {
    referrerOrigin = referrerOriginCallback(referrerOrigin);
  }
  const currentURL = new URL(request.url);
  switch (policy) {
    case "no-referrer":
      return "no-referrer";
    case "origin":
      return referrerOrigin;
    case "unsafe-url":
      return referrerURL;
    case "strict-origin":
      if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
        return "no-referrer";
      }
      return referrerOrigin.toString();
    case "strict-origin-when-cross-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
        return "no-referrer";
      }
      return referrerOrigin;
    case "same-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      return "no-referrer";
    case "origin-when-cross-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      return referrerOrigin;
    case "no-referrer-when-downgrade":
      if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
        return "no-referrer";
      }
      return referrerURL;
    default:
      throw new TypeError(`Invalid referrerPolicy: ${policy}`);
  }
}
function parseReferrerPolicyFromHeader(headers) {
  const policyTokens = (headers.get("referrer-policy") || "").split(/[,\s]+/);
  let policy = "";
  for (const token of policyTokens) {
    if (token && ReferrerPolicy.has(token)) {
      policy = token;
    }
  }
  return policy;
}

// asset-input/node_modules/node-fetch/src/request.js
var INTERNALS3 = Symbol("Request internals");
var isRequest = (object) => {
  return typeof object === "object" && typeof object[INTERNALS3] === "object";
};
var doBadDataWarn = (0, import_node_util3.deprecate)(
  () => {
  },
  ".data is not a valid RequestInit property, use .body instead",
  "https://github.com/node-fetch/node-fetch/issues/1000 (request)"
);
var Request = class _Request extends Body {
  constructor(input, init = {}) {
    let parsedURL;
    if (isRequest(input)) {
      parsedURL = new URL(input.url);
    } else {
      parsedURL = new URL(input);
      input = {};
    }
    if (parsedURL.username !== "" || parsedURL.password !== "") {
      throw new TypeError(`${parsedURL} is an url with embedded credentials.`);
    }
    let method = init.method || input.method || "GET";
    if (/^(delete|get|head|options|post|put)$/i.test(method)) {
      method = method.toUpperCase();
    }
    if (!isRequest(init) && "data" in init) {
      doBadDataWarn();
    }
    if ((init.body != null || isRequest(input) && input.body !== null) && (method === "GET" || method === "HEAD")) {
      throw new TypeError("Request with GET/HEAD method cannot have body");
    }
    const inputBody = init.body ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;
    super(inputBody, {
      size: init.size || input.size || 0
    });
    const headers = new Headers(init.headers || input.headers || {});
    if (inputBody !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(inputBody, this);
      if (contentType) {
        headers.set("Content-Type", contentType);
      }
    }
    let signal = isRequest(input) ? input.signal : null;
    if ("signal" in init) {
      signal = init.signal;
    }
    if (signal != null && !isAbortSignal(signal)) {
      throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");
    }
    let referrer = init.referrer == null ? input.referrer : init.referrer;
    if (referrer === "") {
      referrer = "no-referrer";
    } else if (referrer) {
      const parsedReferrer = new URL(referrer);
      referrer = /^about:(\/\/)?client$/.test(parsedReferrer) ? "client" : parsedReferrer;
    } else {
      referrer = void 0;
    }
    this[INTERNALS3] = {
      method,
      redirect: init.redirect || input.redirect || "follow",
      headers,
      parsedURL,
      signal,
      referrer
    };
    this.follow = init.follow === void 0 ? input.follow === void 0 ? 20 : input.follow : init.follow;
    this.compress = init.compress === void 0 ? input.compress === void 0 ? true : input.compress : init.compress;
    this.counter = init.counter || input.counter || 0;
    this.agent = init.agent || input.agent;
    this.highWaterMark = init.highWaterMark || input.highWaterMark || 16384;
    this.insecureHTTPParser = init.insecureHTTPParser || input.insecureHTTPParser || false;
    this.referrerPolicy = init.referrerPolicy || input.referrerPolicy || "";
  }
  /** @returns {string} */
  get method() {
    return this[INTERNALS3].method;
  }
  /** @returns {string} */
  get url() {
    return (0, import_node_url.format)(this[INTERNALS3].parsedURL);
  }
  /** @returns {Headers} */
  get headers() {
    return this[INTERNALS3].headers;
  }
  get redirect() {
    return this[INTERNALS3].redirect;
  }
  /** @returns {AbortSignal} */
  get signal() {
    return this[INTERNALS3].signal;
  }
  // https://fetch.spec.whatwg.org/#dom-request-referrer
  get referrer() {
    if (this[INTERNALS3].referrer === "no-referrer") {
      return "";
    }
    if (this[INTERNALS3].referrer === "client") {
      return "about:client";
    }
    if (this[INTERNALS3].referrer) {
      return this[INTERNALS3].referrer.toString();
    }
    return void 0;
  }
  get referrerPolicy() {
    return this[INTERNALS3].referrerPolicy;
  }
  set referrerPolicy(referrerPolicy) {
    this[INTERNALS3].referrerPolicy = validateReferrerPolicy(referrerPolicy);
  }
  /**
   * Clone this request
   *
   * @return  Request
   */
  clone() {
    return new _Request(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
};
Object.defineProperties(Request.prototype, {
  method: { enumerable: true },
  url: { enumerable: true },
  headers: { enumerable: true },
  redirect: { enumerable: true },
  clone: { enumerable: true },
  signal: { enumerable: true },
  referrer: { enumerable: true },
  referrerPolicy: { enumerable: true }
});
var getNodeRequestOptions = (request) => {
  const { parsedURL } = request[INTERNALS3];
  const headers = new Headers(request[INTERNALS3].headers);
  if (!headers.has("Accept")) {
    headers.set("Accept", "*/*");
  }
  let contentLengthValue = null;
  if (request.body === null && /^(post|put)$/i.test(request.method)) {
    contentLengthValue = "0";
  }
  if (request.body !== null) {
    const totalBytes = getTotalBytes(request);
    if (typeof totalBytes === "number" && !Number.isNaN(totalBytes)) {
      contentLengthValue = String(totalBytes);
    }
  }
  if (contentLengthValue) {
    headers.set("Content-Length", contentLengthValue);
  }
  if (request.referrerPolicy === "") {
    request.referrerPolicy = DEFAULT_REFERRER_POLICY;
  }
  if (request.referrer && request.referrer !== "no-referrer") {
    request[INTERNALS3].referrer = determineRequestsReferrer(request);
  } else {
    request[INTERNALS3].referrer = "no-referrer";
  }
  if (request[INTERNALS3].referrer instanceof URL) {
    headers.set("Referer", request.referrer);
  }
  if (!headers.has("User-Agent")) {
    headers.set("User-Agent", "node-fetch");
  }
  if (request.compress && !headers.has("Accept-Encoding")) {
    headers.set("Accept-Encoding", "gzip, deflate, br");
  }
  let { agent } = request;
  if (typeof agent === "function") {
    agent = agent(parsedURL);
  }
  const search = getSearch(parsedURL);
  const options = {
    // Overwrite search to retain trailing ? (issue #776)
    path: parsedURL.pathname + search,
    // The following options are not expressed in the URL
    method: request.method,
    headers: headers[Symbol.for("nodejs.util.inspect.custom")](),
    insecureHTTPParser: request.insecureHTTPParser,
    agent
  };
  return {
    /** @type {URL} */
    parsedURL,
    options
  };
};

// asset-input/node_modules/node-fetch/src/errors/abort-error.js
var AbortError = class extends FetchBaseError {
  constructor(message2, type = "aborted") {
    super(message2, type);
  }
};

// asset-input/node_modules/node-fetch/src/index.js
init_esm_min();
init_from();
var supportedSchemas = /* @__PURE__ */ new Set(["data:", "http:", "https:"]);
async function fetch(url, options_) {
  return new Promise((resolve, reject) => {
    const request = new Request(url, options_);
    const { parsedURL, options } = getNodeRequestOptions(request);
    if (!supportedSchemas.has(parsedURL.protocol)) {
      throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${parsedURL.protocol.replace(/:$/, "")}" is not supported.`);
    }
    if (parsedURL.protocol === "data:") {
      const data = dist_default(request.url);
      const response2 = new Response(data, { headers: { "Content-Type": data.typeFull } });
      resolve(response2);
      return;
    }
    const send = (parsedURL.protocol === "https:" ? import_node_https.default : import_node_http2.default).request;
    const { signal } = request;
    let response = null;
    const abort = () => {
      const error = new AbortError("The operation was aborted.");
      reject(error);
      if (request.body && request.body instanceof import_node_stream2.default.Readable) {
        request.body.destroy(error);
      }
      if (!response || !response.body) {
        return;
      }
      response.body.emit("error", error);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = () => {
      abort();
      finalize();
    };
    const request_ = send(parsedURL.toString(), options);
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    const finalize = () => {
      request_.abort();
      if (signal) {
        signal.removeEventListener("abort", abortAndFinalize);
      }
    };
    request_.on("error", (error) => {
      reject(new FetchError(`request to ${request.url} failed, reason: ${error.message}`, "system", error));
      finalize();
    });
    fixResponseChunkedTransferBadEnding(request_, (error) => {
      if (response && response.body) {
        response.body.destroy(error);
      }
    });
    if (process.version < "v14") {
      request_.on("socket", (s2) => {
        let endedWithEventsCount;
        s2.prependListener("end", () => {
          endedWithEventsCount = s2._eventsCount;
        });
        s2.prependListener("close", (hadError) => {
          if (response && endedWithEventsCount < s2._eventsCount && !hadError) {
            const error = new Error("Premature close");
            error.code = "ERR_STREAM_PREMATURE_CLOSE";
            response.body.emit("error", error);
          }
        });
      });
    }
    request_.on("response", (response_) => {
      request_.setTimeout(0);
      const headers = fromRawHeaders(response_.rawHeaders);
      if (isRedirect(response_.statusCode)) {
        const location = headers.get("Location");
        let locationURL = null;
        try {
          locationURL = location === null ? null : new URL(location, request.url);
        } catch {
          if (request.redirect !== "manual") {
            reject(new FetchError(`uri requested responds with an invalid redirect URL: ${location}`, "invalid-redirect"));
            finalize();
            return;
          }
        }
        switch (request.redirect) {
          case "error":
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
            finalize();
            return;
          case "manual":
            break;
          case "follow": {
            if (locationURL === null) {
              break;
            }
            if (request.counter >= request.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
              finalize();
              return;
            }
            const requestOptions = {
              headers: new Headers(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: clone(request),
              signal: request.signal,
              size: request.size,
              referrer: request.referrer,
              referrerPolicy: request.referrerPolicy
            };
            if (!isDomainOrSubdomain(request.url, locationURL) || !isSameProtocol(request.url, locationURL)) {
              for (const name of ["authorization", "www-authenticate", "cookie", "cookie2"]) {
                requestOptions.headers.delete(name);
              }
            }
            if (response_.statusCode !== 303 && request.body && options_.body instanceof import_node_stream2.default.Readable) {
              reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
              finalize();
              return;
            }
            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === "POST") {
              requestOptions.method = "GET";
              requestOptions.body = void 0;
              requestOptions.headers.delete("content-length");
            }
            const responseReferrerPolicy = parseReferrerPolicyFromHeader(headers);
            if (responseReferrerPolicy) {
              requestOptions.referrerPolicy = responseReferrerPolicy;
            }
            resolve(fetch(new Request(locationURL, requestOptions)));
            finalize();
            return;
          }
          default:
            return reject(new TypeError(`Redirect option '${request.redirect}' is not a valid value of RequestRedirect`));
        }
      }
      if (signal) {
        response_.once("end", () => {
          signal.removeEventListener("abort", abortAndFinalize);
        });
      }
      let body = (0, import_node_stream2.pipeline)(response_, new import_node_stream2.PassThrough(), (error) => {
        if (error) {
          reject(error);
        }
      });
      if (process.version < "v12.10") {
        response_.on("aborted", abortAndFinalize);
      }
      const responseOptions = {
        url: request.url,
        status: response_.statusCode,
        statusText: response_.statusMessage,
        headers,
        size: request.size,
        counter: request.counter,
        highWaterMark: request.highWaterMark
      };
      const codings = headers.get("Content-Encoding");
      if (!request.compress || request.method === "HEAD" || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
        response = new Response(body, responseOptions);
        resolve(response);
        return;
      }
      const zlibOptions = {
        flush: import_node_zlib.default.Z_SYNC_FLUSH,
        finishFlush: import_node_zlib.default.Z_SYNC_FLUSH
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body = (0, import_node_stream2.pipeline)(body, import_node_zlib.default.createGunzip(zlibOptions), (error) => {
          if (error) {
            reject(error);
          }
        });
        response = new Response(body, responseOptions);
        resolve(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        const raw = (0, import_node_stream2.pipeline)(response_, new import_node_stream2.PassThrough(), (error) => {
          if (error) {
            reject(error);
          }
        });
        raw.once("data", (chunk) => {
          if ((chunk[0] & 15) === 8) {
            body = (0, import_node_stream2.pipeline)(body, import_node_zlib.default.createInflate(), (error) => {
              if (error) {
                reject(error);
              }
            });
          } else {
            body = (0, import_node_stream2.pipeline)(body, import_node_zlib.default.createInflateRaw(), (error) => {
              if (error) {
                reject(error);
              }
            });
          }
          response = new Response(body, responseOptions);
          resolve(response);
        });
        raw.once("end", () => {
          if (!response) {
            response = new Response(body, responseOptions);
            resolve(response);
          }
        });
        return;
      }
      if (codings === "br") {
        body = (0, import_node_stream2.pipeline)(body, import_node_zlib.default.createBrotliDecompress(), (error) => {
          if (error) {
            reject(error);
          }
        });
        response = new Response(body, responseOptions);
        resolve(response);
        return;
      }
      response = new Response(body, responseOptions);
      resolve(response);
    });
    writeToStream(request_, request).catch(reject);
  });
}
function fixResponseChunkedTransferBadEnding(request, errorCallback) {
  const LAST_CHUNK = import_node_buffer2.Buffer.from("0\r\n\r\n");
  let isChunkedTransfer = false;
  let properLastChunkReceived = false;
  let previousChunk;
  request.on("response", (response) => {
    const { headers } = response;
    isChunkedTransfer = headers["transfer-encoding"] === "chunked" && !headers["content-length"];
  });
  request.on("socket", (socket) => {
    const onSocketClose = () => {
      if (isChunkedTransfer && !properLastChunkReceived) {
        const error = new Error("Premature close");
        error.code = "ERR_STREAM_PREMATURE_CLOSE";
        errorCallback(error);
      }
    };
    const onData = (buf) => {
      properLastChunkReceived = import_node_buffer2.Buffer.compare(buf.slice(-5), LAST_CHUNK) === 0;
      if (!properLastChunkReceived && previousChunk) {
        properLastChunkReceived = import_node_buffer2.Buffer.compare(previousChunk.slice(-3), LAST_CHUNK.slice(0, 3)) === 0 && import_node_buffer2.Buffer.compare(buf.slice(-2), LAST_CHUNK.slice(3)) === 0;
      }
      previousChunk = buf;
    };
    socket.prependListener("close", onSocketClose);
    socket.on("data", onData);
    request.on("close", () => {
      socket.removeListener("close", onSocketClose);
      socket.removeListener("data", onData);
    });
  });
}

// asset-input/node_modules/jose/dist/webapi/lib/buffer_utils.js
var encoder = new TextEncoder();
var decoder = new TextDecoder();
var MAX_INT32 = 2 ** 32;

// asset-input/node_modules/jose/dist/webapi/lib/base64.js
function encodeBase64(input) {
  if (Uint8Array.prototype.toBase64) {
    return input.toBase64();
  }
  const CHUNK_SIZE = 32768;
  const arr = [];
  for (let i3 = 0; i3 < input.length; i3 += CHUNK_SIZE) {
    arr.push(String.fromCharCode.apply(null, input.subarray(i3, i3 + CHUNK_SIZE)));
  }
  return btoa(arr.join(""));
}
function decodeBase64(encoded) {
  if (Uint8Array.fromBase64) {
    return Uint8Array.fromBase64(encoded);
  }
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let i3 = 0; i3 < binary.length; i3++) {
    bytes[i3] = binary.charCodeAt(i3);
  }
  return bytes;
}

// asset-input/node_modules/jose/dist/webapi/util/base64url.js
function decode(input) {
  if (Uint8Array.fromBase64) {
    return Uint8Array.fromBase64(typeof input === "string" ? input : decoder.decode(input), {
      alphabet: "base64url"
    });
  }
  let encoded = input;
  if (encoded instanceof Uint8Array) {
    encoded = decoder.decode(encoded);
  }
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/");
  try {
    return decodeBase64(encoded);
  } catch {
    throw new TypeError("The input to be decoded is not correctly encoded.");
  }
}

// asset-input/node_modules/jose/dist/webapi/util/errors.js
var JOSEError = class extends Error {
  static code = "ERR_JOSE_GENERIC";
  code = "ERR_JOSE_GENERIC";
  constructor(message2, options) {
    super(message2, options);
    this.name = this.constructor.name;
    Error.captureStackTrace?.(this, this.constructor);
  }
};
var JOSENotSupported = class extends JOSEError {
  static code = "ERR_JOSE_NOT_SUPPORTED";
  code = "ERR_JOSE_NOT_SUPPORTED";
};

// asset-input/node_modules/jose/dist/webapi/lib/invalid_key_input.js
function message(msg, actual, ...types3) {
  types3 = types3.filter(Boolean);
  if (types3.length > 2) {
    const last = types3.pop();
    msg += `one of type ${types3.join(", ")}, or ${last}.`;
  } else if (types3.length === 2) {
    msg += `one of type ${types3[0]} or ${types3[1]}.`;
  } else {
    msg += `of type ${types3[0]}.`;
  }
  if (actual == null) {
    msg += ` Received ${actual}`;
  } else if (typeof actual === "function" && actual.name) {
    msg += ` Received function ${actual.name}`;
  } else if (typeof actual === "object" && actual != null) {
    if (actual.constructor?.name) {
      msg += ` Received an instance of ${actual.constructor.name}`;
    }
  }
  return msg;
}
var invalidKeyInput = (actual, ...types3) => message("Key must be ", actual, ...types3);

// asset-input/node_modules/jose/dist/webapi/lib/is_key_like.js
var isCryptoKey = (key) => {
  if (key?.[Symbol.toStringTag] === "CryptoKey")
    return true;
  try {
    return key instanceof CryptoKey;
  } catch {
    return false;
  }
};
var isKeyObject = (key) => key?.[Symbol.toStringTag] === "KeyObject";

// asset-input/node_modules/jose/dist/webapi/lib/is_object.js
var isObjectLike = (value) => typeof value === "object" && value !== null;
function isObject(input) {
  if (!isObjectLike(input) || Object.prototype.toString.call(input) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(input) === null) {
    return true;
  }
  let proto = input;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(input) === proto;
}

// asset-input/node_modules/jose/dist/webapi/lib/asn1.js
var formatPEM = (b64, descriptor) => {
  const newlined = (b64.match(/.{1,64}/g) || []).join("\n");
  return `-----BEGIN ${descriptor}-----
${newlined}
-----END ${descriptor}-----`;
};
var genericExport = async (keyType, keyFormat, key) => {
  if (isKeyObject(key)) {
    if (key.type !== keyType) {
      throw new TypeError(`key is not a ${keyType} key`);
    }
    return key.export({ format: "pem", type: keyFormat });
  }
  if (!isCryptoKey(key)) {
    throw new TypeError(invalidKeyInput(key, "CryptoKey", "KeyObject"));
  }
  if (!key.extractable) {
    throw new TypeError("CryptoKey is not extractable");
  }
  if (key.type !== keyType) {
    throw new TypeError(`key is not a ${keyType} key`);
  }
  return formatPEM(encodeBase64(new Uint8Array(await crypto.subtle.exportKey(keyFormat, key))), `${keyType.toUpperCase()} KEY`);
};
var toSPKI = (key) => genericExport("public", "spki", key);

// asset-input/node_modules/jose/dist/webapi/lib/jwk_to_key.js
function subtleMapping(jwk) {
  let algorithm;
  let keyUsages;
  switch (jwk.kty) {
    case "AKP": {
      switch (jwk.alg) {
        case "ML-DSA-44":
        case "ML-DSA-65":
        case "ML-DSA-87":
          algorithm = { name: jwk.alg };
          keyUsages = jwk.priv ? ["sign"] : ["verify"];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "RSA": {
      switch (jwk.alg) {
        case "PS256":
        case "PS384":
        case "PS512":
          algorithm = { name: "RSA-PSS", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RS256":
        case "RS384":
        case "RS512":
          algorithm = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          algorithm = {
            name: "RSA-OAEP",
            hash: `SHA-${parseInt(jwk.alg.slice(-3), 10) || 1}`
          };
          keyUsages = jwk.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "EC": {
      switch (jwk.alg) {
        case "ES256":
          algorithm = { name: "ECDSA", namedCurve: "P-256" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES384":
          algorithm = { name: "ECDSA", namedCurve: "P-384" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES512":
          algorithm = { name: "ECDSA", namedCurve: "P-521" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: "ECDH", namedCurve: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "OKP": {
      switch (jwk.alg) {
        case "Ed25519":
        case "EdDSA":
          algorithm = { name: "Ed25519" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    default:
      throw new JOSENotSupported('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
  }
  return { algorithm, keyUsages };
}
async function jwkToKey(jwk) {
  if (!jwk.alg) {
    throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
  }
  const { algorithm, keyUsages } = subtleMapping(jwk);
  const keyData = { ...jwk };
  if (keyData.kty !== "AKP") {
    delete keyData.alg;
  }
  delete keyData.use;
  return crypto.subtle.importKey("jwk", keyData, algorithm, jwk.ext ?? (jwk.d || jwk.priv ? false : true), jwk.key_ops ?? keyUsages);
}

// asset-input/node_modules/jose/dist/webapi/key/import.js
async function importJWK(jwk, alg, options) {
  if (!isObject(jwk)) {
    throw new TypeError("JWK must be an object");
  }
  let ext;
  alg ??= jwk.alg;
  ext ??= options?.extractable ?? jwk.ext;
  switch (jwk.kty) {
    case "oct":
      if (typeof jwk.k !== "string" || !jwk.k) {
        throw new TypeError('missing "k" (Key Value) Parameter value');
      }
      return decode(jwk.k);
    case "RSA":
      if ("oth" in jwk && jwk.oth !== void 0) {
        throw new JOSENotSupported('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
      }
      return jwkToKey({ ...jwk, alg, ext });
    case "AKP": {
      if (typeof jwk.alg !== "string" || !jwk.alg) {
        throw new TypeError('missing "alg" (Algorithm) Parameter value');
      }
      if (alg !== void 0 && alg !== jwk.alg) {
        throw new TypeError("JWK alg and alg option value mismatch");
      }
      return jwkToKey({ ...jwk, ext });
    }
    case "EC":
    case "OKP":
      return jwkToKey({ ...jwk, alg, ext });
    default:
      throw new JOSENotSupported('Unsupported "kty" (Key Type) Parameter value');
  }
}

// asset-input/node_modules/jose/dist/webapi/key/export.js
async function exportSPKI(key) {
  return toSPKI(key);
}

// asset-input/node_modules/jwks-client/lib/errors/JwksError.js
function JwksError(message2) {
  Error.call(this, message2);
  Error.captureStackTrace(this, this.constructor);
  this.name = "JwksError";
  this.message = message2;
}
JwksError.prototype = Object.create(Error.prototype);
JwksError.prototype.constructor = JwksError;
var JwksError_default = JwksError;

// asset-input/node_modules/jwks-client/lib/errors/SigningKeyNotFoundError.js
function SigningKeyNotFoundError(message2) {
  Error.call(this, message2);
  Error.captureStackTrace(this, this.constructor);
  this.name = "SigningKeyNotFoundError";
  this.message = message2;
}
SigningKeyNotFoundError.prototype = Object.create(Error.prototype);
SigningKeyNotFoundError.prototype.constructor = SigningKeyNotFoundError;
var SigningKeyNotFoundError_default = SigningKeyNotFoundError;

// asset-input/node_modules/jwks-client/lib/wrappers/rateLimit.js
var import_rate_limiter_flexible = __toESM(require_rate_limiter_flexible(), 1);
var import_debug = __toESM(require_src(), 1);

// asset-input/node_modules/jwks-client/lib/errors/JwksRateLimitError.js
function JwksRateLimitError(message2) {
  Error.call(this, message2);
  Error.captureStackTrace(this, this.constructor);
  this.name = "JwksRateLimitError";
  this.message = message2;
}
JwksRateLimitError.prototype = Object.create(Error.prototype);
JwksRateLimitError.prototype.constructor = JwksRateLimitError;
var JwksRateLimitError_default = JwksRateLimitError;

// asset-input/node_modules/jwks-client/lib/wrappers/rateLimit.js
function rateLimit_default(client, { jwksRequestsPerMinute = 10 }) {
  const logger2 = (0, import_debug.default)("jwks");
  const getSigningKey = client.getSigningKey;
  const opts = {
    points: jwksRequestsPerMinute,
    duration: 60
  };
  const limiter = new import_rate_limiter_flexible.RateLimiterMemory(opts);
  logger2(`Configured rate limiting to JWKS endpoint at ${jwksRequestsPerMinute}/minute`);
  return (kid, cb) => {
    limiter.consume("app", 1).then((rateLimiterRes) => {
      logger2("Requests to the JWKS endpoint available for the next minute:", rateLimiterRes.remainingPoints);
      return getSigningKey(kid, cb);
    }).catch(() => {
      logger2("Too many requests to the JWKS endpoint");
      return cb(new JwksRateLimitError_default("Too many requests to the JWKS endpoint"));
    });
  };
}

// asset-input/node_modules/jwks-client/lib/wrappers/cache.js
var import_ms = __toESM(require_ms(), 1);
var import_lru_memoizer = __toESM(require_lib(), 1);
var import_debug2 = __toESM(require_src(), 1);
function cache_default(client, { cacheMaxEntries = 5, cacheMaxAge = "10h" }) {
  const logger2 = (0, import_debug2.default)("jwks");
  const getSigningKey = client.getSigningKey;
  let cacheAge = 36e5;
  if (typeof cacheMaxAge === "string" || cacheMaxAge instanceof String) {
    cacheAge = (0, import_ms.default)(cacheMaxAge);
  }
  logger2(`Configured caching of signing keys. Max: ${cacheMaxEntries} / Age: ${cacheAge}`);
  return (0, import_lru_memoizer.default)({
    load: (kid, callback) => {
      getSigningKey(kid, (err, key) => {
        if (err) {
          return callback(err);
        }
        logger2(`Caching signing key for '${kid}':`, key);
        return callback(null, key);
      });
    },
    hash: (kid) => kid,
    maxAge: cacheAge,
    max: cacheMaxEntries
  });
}

// asset-input/node_modules/jwks-client/JwksClient.js
var logger = (0, import_debug3.default)("jwks");
var JwksClient = class {
  constructor(options) {
    this.options = Object.assign({ rateLimit: false, cache: false, headers: {} }, options);
    let _this = this;
    this.getSigningKey = function(kid, cb) {
      logger(`Fetching signing key for '${kid}'`);
      _this.getSigningKeys((err, keys) => {
        if (err) {
          return cb(err);
        }
        const key = keys.find((k2) => k2.kid === kid);
        if (key) {
          return cb(null, key);
        } else {
          logger(`Unable to find a signing key that matches '${kid}'`);
          return cb(new SigningKeyNotFoundError_default(`Unable to find a signing key that matches '${kid}'`));
        }
      });
    };
    if (this.options.rateLimit) {
      this.getSigningKey = rateLimit_default(this, options);
    }
    if (this.options.cache) {
      this.getSigningKey = cache_default(this, options);
    }
  }
  async getKeys(cb) {
    logger(`Fetching keys from '${this.options.jwksUri}'`);
    try {
      const response = await fetch(this.options.jwksUri, {
        headers: this.options.headers
      });
      let data = await response.text();
      if (!response.ok) {
        logger("Failure:", response);
        return cb(new JwksError_default(data.message || data));
      } else {
        data = JSON.parse(data);
      }
      logger("Keys:", data.keys);
      return cb(null, data.keys);
    } catch (error) {
      cb(error);
    }
  }
  resolveAlg(jwk) {
    if (jwk.alg) {
      return jwk.alg;
    }
    if (jwk.kty === "RSA") {
      return "RS256";
    }
    if (jwk.kty === "EC") {
      switch (jwk.crv) {
        case "P-256":
          return "ES256";
        case "P-384":
          return "ES384";
        case "P-521":
          return "ES512";
      }
    }
    if (jwk.kty === "OKP") {
      switch (jwk.crv) {
        case "Ed25519":
        case "Ed448":
          return "EdDSA";
      }
    }
    return null;
  }
  getSigningKeys(cb) {
    this.getKeys(async (err, keys) => {
      if (err) {
        return cb(err);
      }
      if (!keys || !keys.length) {
        return cb(new JwksError_default("The JWKS endpoint did not contain any keys"));
      }
      const signingKeys = [];
      keys = keys.filter((key) => {
        return key.use === "sig" && key.kid;
      });
      for (const key of keys) {
        logger(`Processing ${key.kid}`);
        const algorithm = this.resolveAlg(key);
        logger(`Algorithm set as: ${algorithm}`);
        if (!algorithm) {
          logger("Algorithm was not supplied and could not make a valid guess, skipping");
          continue;
        }
        if (key.kty && key.kty === "EC" && key.d) {
          logger(`Mixed container supplied, this also contains the private key!`);
          delete key.d;
        }
        const importedKey = await importJWK(key, algorithm);
        if (importedKey.type === "public") {
          logger("Key imported:", importedKey);
          const publicKey = await exportSPKI(importedKey);
          let result = {
            kid: key.kid,
            nbf: key.nbf,
            publicKey
          };
          signingKeys.push(result);
        }
      }
      if (!signingKeys.length) {
        return cb(new JwksError_default("The JWKS endpoint did not contain any signing keys"));
      }
      logger("Signing Keys:", signingKeys);
      return cb(null, signingKeys);
    });
  }
};

// asset-input/node_modules/jwks-client/lib/errors/ArgumentError.js
function ArgumentError(message2) {
  Error.call(this, message2);
  Error.captureStackTrace(this, this.constructor);
  this.name = "ArgumentError";
  this.message = message2;
}
ArgumentError.prototype = Object.create(Error.prototype);
ArgumentError.prototype.constructor = ArgumentError;

// asset-input/node_modules/jwks-client/index.js
var jwks_client_default = (options) => {
  return new JwksClient(options);
};

// asset-input/src/auth/jwtValidator.ts
var jwksClientInstance = null;
function getRequiredEnv(name) {
  const value = process.env[name];
  if (!value || value.trim().length === 0) {
    throw new Error(`${name} is not configured`);
  }
  return value;
}
function getCognitoIssuer() {
  const region = getRequiredEnv("AWS_REGION");
  const userPoolId = getRequiredEnv("COGNITO_USER_POOL_ID");
  return `https://cognito-idp.${region}.amazonaws.com/${userPoolId}`;
}
function getExpectedClientId() {
  return getRequiredEnv("COGNITO_USER_POOL_CLIENT_ID");
}
function getJwksClient() {
  if (jwksClientInstance) {
    return jwksClientInstance;
  }
  jwksClientInstance = jwks_client_default({
    jwksUri: `${getCognitoIssuer()}/.well-known/jwks.json`,
    cache: true,
    cacheMaxAge: 10 * 60 * 1e3,
    rateLimit: true,
    jwksRequestsPerMinute: 10,
    timeout: 3e4
  });
  return jwksClientInstance;
}
async function getSigningKeyFromToken(token) {
  const decoded = import_jsonwebtoken.default.decode(token, { complete: true });
  if (!decoded || typeof decoded === "string") {
    throw new Error("Invalid JWT format");
  }
  const alg = decoded.header.alg;
  if (alg !== "RS256") {
    throw new Error("Unsupported JWT signing algorithm");
  }
  const keyId = decoded.header.kid;
  if (!keyId) {
    throw new Error("JWT missing key identifier (kid)");
  }
  const key = await getJwksClient().getSigningKey(keyId);
  const publicKey = key.getPublicKey();
  if (!publicKey) {
    throw new Error("Unable to resolve JWT signing key");
  }
  return publicKey;
}
async function validateJWT(authorizationHeader) {
  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    throw new Error("Missing or invalid Authorization header");
  }
  const token = authorizationHeader.slice("Bearer ".length).trim();
  const signingKey = await getSigningKeyFromToken(token);
  const payload = import_jsonwebtoken.default.verify(token, signingKey, {
    algorithms: ["RS256"],
    issuer: getCognitoIssuer(),
    ignoreExpiration: false
  });
  const subject = payload.sub;
  if (!subject) {
    throw new Error("Token missing subject");
  }
  const expectedClientId = getExpectedClientId();
  const audienceMatch = payload.aud === expectedClientId || payload.client_id === expectedClientId;
  if (!audienceMatch) {
    throw new Error("Token audience/client mismatch");
  }
  if (payload.token_use && payload.token_use !== "access") {
    throw new Error("Token must be an access token");
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

// asset-input/src/handlers/approvalHandler.ts
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
    if (!parsed.approvalId || !parsed.status) {
      return jsonResponse(400, { success: false, error: "approvalId and status are required" });
    }
    const decision = {
      status: parsed.status,
      reviewerId: user.sub,
      ...parsed.comments ? { comments: parsed.comments } : {}
    };
    const container2 = await container;
    const travelAgentService = container2.get(TYPES.TravelAgentService);
    const result = await travelAgentService.handleApprovalResponse(parsed.approvalId, decision);
    return jsonResponse(result.success ? 200 : 400, result);
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

web-streams-polyfill/dist/ponyfill.es2018.js:
  (**
   * @license
   * web-streams-polyfill v3.3.3
   * Copyright 2024 Mattias Buelens, Diwank Singh Tomer and other contributors.
   * This code is released under the MIT license.
   * SPDX-License-Identifier: MIT
   *)

fetch-blob/index.js:
  (*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> *)

formdata-polyfill/esm.min.js:
  (*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> *)

node-domexception/index.js:
  (*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> *)

@aws-lambda-powertools/logger/lib/esm/logBuffer.js:
  (* v8 ignore next -- @preserve *)

@aws-lambda-powertools/logger/lib/esm/Logger.js:
  (* v8 ignore next -- @preserve *)
*/

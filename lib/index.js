"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidId = exports.generateId = exports.Delayed = exports.Clock = void 0;
const timer_1 = __importStar(require("@gamestdio/timer"));
exports.Clock = timer_1.default;
Object.defineProperty(exports, "Delayed", { enumerable: true, get: function () { return timer_1.Delayed; } });
const nanoid_1 = __importDefault(require("nanoid"));
// Core classes
var Server_1 = require("./Server");
Object.defineProperty(exports, "Server", { enumerable: true, get: function () { return Server_1.Server; } });
var Room_1 = require("./Room");
Object.defineProperty(exports, "Room", { enumerable: true, get: function () { return Room_1.Room; } });
var Protocol_1 = require("./Protocol");
Object.defineProperty(exports, "Protocol", { enumerable: true, get: function () { return Protocol_1.Protocol; } });
var RegisteredHandler_1 = require("./matchmaker/RegisteredHandler");
Object.defineProperty(exports, "RegisteredHandler", { enumerable: true, get: function () { return RegisteredHandler_1.RegisteredHandler; } });
var LocalPresence_1 = require("./presence/LocalPresence");
Object.defineProperty(exports, "LocalPresence", { enumerable: true, get: function () { return LocalPresence_1.LocalPresence; } });
var RedisPresence_1 = require("./presence/RedisPresence");
Object.defineProperty(exports, "RedisPresence", { enumerable: true, get: function () { return RedisPresence_1.RedisPresence; } });
// Serializers
var FossilDeltaSerializer_1 = require("./serializer/FossilDeltaSerializer");
Object.defineProperty(exports, "FossilDeltaSerializer", { enumerable: true, get: function () { return FossilDeltaSerializer_1.FossilDeltaSerializer; } });
var SchemaSerializer_1 = require("./serializer/SchemaSerializer");
Object.defineProperty(exports, "SchemaSerializer", { enumerable: true, get: function () { return SchemaSerializer_1.SchemaSerializer; } });
var Serializer_1 = require("./serializer/Serializer");
Object.defineProperty(exports, "serialize", { enumerable: true, get: function () { return Serializer_1.serialize; } });
var nonenumerable_1 = require("nonenumerable");
Object.defineProperty(exports, "nosync", { enumerable: true, get: function () { return nonenumerable_1.nonenumerable; } });
function generateId() { return nanoid_1.default(9); }
exports.generateId = generateId;
function isValidId(id) { return id && /^[a-zA-Z0-9_\-]{9}$/.test(id); }
exports.isValidId = isValidId;

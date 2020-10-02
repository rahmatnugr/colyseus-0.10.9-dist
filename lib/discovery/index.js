"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unregisterNode = exports.registerNode = void 0;
const internal_ip_1 = __importDefault(require("internal-ip"));
const NODES_SET = 'colyseus:nodes';
const DISCOVERY_CHANNEL = 'colyseus:nodes:discovery';
function getNodeAddress(node) {
    // const address = (node.addressInfo.address === '::') ? `[${node.addressInfo.address}]` : node.addressInfo.address;
    const ipv4 = internal_ip_1.default.v4.sync();
    return `${node.processId}/${ipv4}:${node.addressInfo.port}`;
}
function registerNode(presence, node) {
    const nodeAddress = getNodeAddress(node);
    presence.sadd(NODES_SET, nodeAddress);
    presence.publish(DISCOVERY_CHANNEL, `add,${nodeAddress}`);
}
exports.registerNode = registerNode;
function unregisterNode(presence, node) {
    const nodeAddress = getNodeAddress(node);
    presence.srem(NODES_SET, nodeAddress);
    presence.publish(DISCOVERY_CHANNEL, `remove,${nodeAddress}`);
}
exports.unregisterNode = unregisterNode;

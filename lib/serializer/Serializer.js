"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serialize = void 0;
function serialize(serializer) {
    return (constructor) => {
        constructor.prototype._getSerializer = () => new serializer();
    };
}
exports.serialize = serialize;

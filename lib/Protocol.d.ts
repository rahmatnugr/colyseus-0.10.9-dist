/// <reference types="node" />
import { Client } from './index';
import { RoomAvailable } from './Room';
export declare const WS_CLOSE_CONSENTED = 4000;
export declare enum Protocol {
    USER_ID = 1,
    JOIN_REQUEST = 9,
    JOIN_ROOM = 10,
    JOIN_ERROR = 11,
    LEAVE_ROOM = 12,
    ROOM_DATA = 13,
    ROOM_STATE = 14,
    ROOM_STATE_PATCH = 15,
    ROOM_LIST = 20,
    BAD_REQUEST = 50,
    WS_SERVER_DISCONNECT = 4201,
    WS_TOO_MANY_CLIENTS = 4202
}
export declare enum IpcProtocol {
    SUCCESS = 0,
    ERROR = 1,
    TIMEOUT = 2
}
export declare function decode(message: any): any;
export declare const send: {
    1: (client: Client) => void;
    11: (client: Client, message: string) => void;
    9: (client: Client, requestId: number, roomId: string, processId: string) => void;
    10: (client: Client, sessionId: string, serializerId: string, handshake?: number[]) => void;
    14: (client: Client, bytes: number[]) => void;
    15: (client: Client, bytes: number[]) => void;
    13: (client: Client, data: any, encode?: boolean) => void;
    20: (client: Client, requestId: number, rooms: RoomAvailable[]) => void;
};
export declare function utf8Write(buff: Buffer, offset: number, str?: string): void;
export declare function utf8Length(str?: string): number;

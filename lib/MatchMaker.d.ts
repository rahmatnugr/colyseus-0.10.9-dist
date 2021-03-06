import { Client } from './index';
import { RegisteredHandler } from './matchmaker/RegisteredHandler';
import { Room, RoomAvailable, RoomConstructor } from './Room';
import { Presence } from './presence/Presence';
export declare type ClientOptions = any;
export interface RoomWithScore {
    roomId: string;
    score: number;
}
export declare const REMOTE_ROOM_SHORT_TIMEOUT: number;
export declare const REMOTE_ROOM_LARGE_TIMEOUT: number;
declare type RemoteRoomResponse<T = any> = [string?, T?];
export declare class MatchMaker {
    handlers: {
        [id: string]: RegisteredHandler;
    };
    private processId;
    private localRooms;
    private presence;
    private isGracefullyShuttingDown;
    constructor(presence?: Presence, processId?: string);
    connectToRoom(client: Client, roomId: string): Promise<void>;
    /**
     * Create or joins the client into a particular room
     *
     * The client doesn't join instantly because this method is called from the
     * match-making process. The client will request a new WebSocket connection
     * to effectively join into the room created/joined by this method.
     */
    onJoinRoomRequest(client: Client, roomToJoin: string, clientOptions: ClientOptions): Promise<{
        roomId: string;
        processId: string;
    }>;
    remoteRoomCall<R = any>(roomId: string, method: string, args?: any[], rejectionTimeout?: number): Promise<RemoteRoomResponse<R>>;
    registerHandler(name: string, klass: RoomConstructor, options?: any): Promise<RegisteredHandler>;
    hasHandler(name: string): boolean;
    joinById(roomId: string, clientOptions: ClientOptions, rejoinSessionId?: string): Promise<RemoteRoomResponse<string>>;
    getAvailableRoomByScore(roomName: string, clientOptions: ClientOptions): Promise<RoomWithScore[]>;
    create(roomName: string, clientOptions: ClientOptions): Promise<string>;
    getAvailableRooms(roomName: string, roomMethodName?: string): Promise<RoomAvailable[]>;
    getAllRooms(roomName: string, roomMethodName?: string): Promise<RoomAvailable[]>;
    getRoomById(roomId: string): Room<any>;
    gracefullyShutdown(): Promise<any>;
    protected cleanupStaleRooms(roomName: string): Promise<void>;
    protected getRoomsWithScore(roomName: string, clientOptions: ClientOptions): Promise<RoomWithScore[]>;
    protected createRoomReferences(room: Room, init?: boolean): Promise<boolean>;
    protected clearRoomReferences(room: Room): void;
    protected awaitRoomAvailable(roomToJoin: string): Promise<unknown>;
    protected getRoomChannel(roomId: string): string;
    protected getHandlerConcurrencyKey(name: string): string;
    private onClientJoinRoom;
    private onClientLeaveRoom;
    private lockRoom;
    private unlockRoom;
    private disposeRoom;
}
export {};

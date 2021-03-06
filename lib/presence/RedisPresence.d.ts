import redis from 'redis';
import { Presence } from './Presence';
export declare class RedisPresence implements Presence {
    sub: redis.RedisClient;
    pub: redis.RedisClient;
    protected subscribeAsync: any;
    protected unsubscribeAsync: any;
    protected publishAsync: any;
    protected subscriptions: {
        [channel: string]: (...args: any[]) => any;
    };
    protected smembersAsync: any;
    protected hgetAsync: any;
    protected hlenAsync: any;
    protected pubsubAsync: any;
    protected incrAsync: any;
    protected decrAsync: any;
    constructor(opts?: redis.ClientOpts);
    subscribe(topic: string, callback: Function): Promise<this>;
    unsubscribe(topic: string): Promise<this>;
    publish(topic: string, data: any): Promise<void>;
    exists(roomId: string): Promise<boolean>;
    setex(key: string, value: string, seconds: number): Promise<unknown>;
    get(key: string): Promise<unknown>;
    del(roomId: string): Promise<unknown>;
    sadd(key: string, value: any): Promise<unknown>;
    smembers(key: string): Promise<string[]>;
    srem(key: string, value: any): Promise<unknown>;
    scard(key: string): Promise<unknown>;
    hset(roomId: string, key: string, value: string): Promise<unknown>;
    hget(roomId: string, key: string): Promise<any>;
    hdel(roomId: string, key: string): Promise<unknown>;
    hlen(roomId: string): Promise<number>;
    incr(key: string): Promise<number>;
    decr(key: string): Promise<number>;
}

/**
 * Asynchronous Sleeper function
 * @param n Number of milliseconds to sleep
 * @returns Returns a promise of sleep
 */
declare function snoozely(n: number): Promise<any>;
/**
 * Synchronous Sleeper function
 * @param n Number of milliseconds to sleep
 * @returns Returns a promise of sleep
 */
declare function snoozelySync(n: number, callback: any): any;

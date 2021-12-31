/**
 * Asynchronous Sleeper function
 * @param n Number of milliseconds to sleep
 * @returns Returns a promise of sleep
 */
async function snoozely(n: number): Promise<any>{
    let promise = new Promise((resolve, reject)=>{
        setTimeout(resolve, n);
    });
    return promise;
}

/**
 * Synchronous Sleeper function
 * @param n Number of milliseconds to sleep
 * @returns Returns a promise of sleep
 */
function snoozelySync(n: number, callback: any): any{
    return setTimeout(callback, n);
}

module.exports.snoozely = snoozely;
module.exports.snoozelySync = snoozelySync;
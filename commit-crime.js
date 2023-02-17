/** 
 * Starts the player on the given crime.
 * 
 * Requires the Singularity API.
 * 
 * @param {NS} ns 
 */
export async function main(ns) {
    const crime = ns.args[0] || 'Shoplift'
    while (true) {
        if (!ns.isBusy()) {
            ns.singularity.commitCrime(crime)
        }
        /** Updates every 2 seconds (in milliseconds) */
        await ns.sleep(2000)
    }
}

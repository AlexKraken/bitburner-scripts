/** 
 * Starts the player on the given crime.
 * 
 * Requires the Singularity API.
 * 
 * @param {NS} ns 
 */
export async function main(ns) {
    /** If no argument is supplied, set 'Shoplift' as default */
    const crime = ns.args[0] || 'Shoplift'
    ns.singularity.commitCrime(crime)
}

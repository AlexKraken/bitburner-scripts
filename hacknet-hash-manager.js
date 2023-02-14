/** 
 * Manages the hashes generated by the Hacknet Servers
 * 
 * Requires the Hacknet API - only valid for Hacknet Servers,
 * which are the upgraded version of Hacknet Nodes.
 * 
 * @param {NS} ns 
 */
export async function main(ns) {
    const HACKNET = ns.hacknet
    /** The list of upgrades to purchase with hashes */
    const UPGRADES = [
        "Exchange for Bladeburner Rank",
        "Exchange for Bladeburner SP",
    ]

    while (true) {
        for (const upgrade of UPGRADES) {
            if (HACKNET.numHashes() > HACKNET.hashCost(upgrade)) {
                HACKNET.spendHashes(upgrade)
            }
        }
        /** Updates every second (in milliseconds) */
        await ns.sleep(1000)
    }
}
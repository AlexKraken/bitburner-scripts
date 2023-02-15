/** 
 * Set tasks for Sleeves
 *  
 * Requires the Sleeve API
 * 
 * @param {NS} ns 
 */
export async function main(ns) {
    const SLEEVES = ns.sleeve.getNumSleeves()
    const ACTION = ns.args[0]

    for (let i = 0; i < SLEEVES; i++) {
        ns.sleeve.setToBladeburnerAction(i, ACTION)

        /** Waits 0.1 seconds before setting next task (in milliseconds) */
        await ns.sleep(100)
    }
    ns.exit()
}

/** 
 * Set tasks for Sleeves
 *  
 * Requires the Sleeve API
 * 
 * @param {NS} ns 
 */
export async function main(ns) {
    const SLEEVES = ns.sleeve.getNumSleeves()
    const ACTION = "Infiltrate synthoids"

    for (let i = 0; i < SLEEVES; i++) {
        ns.sleeve.setToBladeburnerAction(i, ACTION)

        /** Waits a second before setting next task (in milliseconds) */
        await ns.sleep(1000)
    }
    ns.exit()
}
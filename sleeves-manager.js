/** 
 * Set tasks for Sleeves
 *  
 * Requires the Sleeve API
 * 
 * @param {NS} ns 
 */
export async function main(ns) {
    const sleeves = ns.sleeve.getNumSleeves()
    const action = ns.args[0]

    for (let i = 0; i < sleeves; i++) {
        /** Assign the task to the ith sleeve */
        ns.sleeve.setToBladeburnerAction(i, action)

        /** Waits 0.1 seconds before setting next task (in milliseconds) */
        await ns.sleep(100)
    }
    ns.exit()
}

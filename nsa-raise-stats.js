/** 
 * Raises the player's stats until they reach the minimum requirement
 * for joining the NSA's Bladeburner Division
 * 
 * Requires the Singularity API
 * 
 * @param {NS} ns 
 */
export async function main(ns) {
    /** 
     * The NSA requirement is 100 for each combat stat
     * The most effective Gym is 'Powerhouse Gym' in Sector-12
     */
    const requirement = 100
    const gym = 'Powerhouse Gym'
    let requirementMet = false

    while (!requirementMet) {
        /** Get updated player stats */
        const player = ns.getPlayer()
        const str = player.skills.strength
        const def = player.skills.defense
        const dex = player.skills.dexterity
        const agi = player.skills.agility

        /** Set the stat that will increment until it reaches the requirement */
        if (str < requirement) {
            ns.singularity.gymWorkout(gym, 'strength')
        } else if (def < requirement) {
            ns.singularity.gymWorkout(gym, 'defense')
        } else if (dex < requirement) {
            ns.singularity.gymWorkout(gym, 'dexterity')
        } else if (agi < requirement) {
            ns.singularity.gymWorkout(gym, 'agility')
        } else { requirementMet = true }

        /** Updates every 10 seconds (in milliseconds) */
        await ns.sleep(10000)
    }

    /** Join the Bladeburner Division and start working on a related task */
    ns.bladeburner.joinBladeburnerDivision()
    ns.bladeburner.startAction("General", "Field Analysis")

    ns.exit()
}

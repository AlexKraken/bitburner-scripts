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
    const REQUIREMENT = 100
    const GYM = 'Powerhouse Gym'
    let requirementMet = false

    while (!requirementMet) {
        /** Get updated player stats */
        const PLAYER = ns.getPLAYER()
        const STR = PLAYER.skills.strength
        const DEF = PLAYER.skills.defense
        const DEX = PLAYER.skills.dexterity
        const AGI = PLAYER.skills.agility

        /** Set the stat that will increment until it reaches the requirement */
        if (STR < REQUIREMENT) {
            ns.singularity.gymWorkout(GYM, 'strength')
        } else if (DEF < REQUIREMENT) {
            ns.singularity.gymWorkout(GYM, 'defense')
        } else if (DEX < REQUIREMENT) {
            ns.singularity.gymWorkout(GYM, 'dexterity')
        } else if (AGI < REQUIREMENT) {
            ns.singularity.gymWorkout(GYM, 'agility')
        } else { requirementMet = true }

        /** Updates every 10 seconds (in milliseconds) */
        await ns.sleep(10000)
    }

    /** Join the Bladeburner Division and start working on a related task */
    ns.bladeburner.joinBladeburnerDivision()
    ns.bladeburner.startAction("General", "Field Analysis")

    ns.exit()
}

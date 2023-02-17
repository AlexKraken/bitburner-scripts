/** 
 * Raises the player's stats until they reach the minimum requirement for 
 * joining the NSA's Bladeburner Division. After the player reaches the 
 * requirement and joins Bladeburner, the script starts the player on a
 * Bladeburner task since those tasks do not require 'focus' - allowing the 
 * player to continue interacting with the rest of the game.
 * 
 * Note that while 'working out' this *will* pull 'focus' - on every update it 
 * will revert back to the gym workout screen to remove the penalty for not 
 * focusing on a task.
 * 
 * Requires the Singularity API.
 * 
 * @param {NS} ns 
 */
export async function main(ns) {
    /** The NSA requirement is 100 for each combat stat*/
    const requirement = 100
    /** The most effective Gym is 'Powerhouse Gym' in Sector-12 */
    const gym = 'Powerhouse Gym'
    const singularity = ns.singularity
    let requirementMet = false

    while (!requirementMet) {
        /** Get updated player stats */
        const player = ns.getPlayer()
        const str = player.skills.strength
        const def = player.skills.defense
        const dex = player.skills.dexterity
        const agi = player.skills.agility

        /** Set the stat that will increment until it reaches the requirement. */
        if (str < requirement) {
            singularity.gymWorkout(gym, 'strength')
        } else if (def < requirement) {
            singularity.gymWorkout(gym, 'defense')
        } else if (dex < requirement) {
            singularity.gymWorkout(gym, 'dexterity')
        } else if (agi < requirement) {
            singularity.gymWorkout(gym, 'agility')
        } else {
            requirementMet = true

            /** Stop the action to allow another to begin uninterrupted */
            singularity.stopAction()
        }

        /** Updates every 10 seconds (in milliseconds) */
        await ns.sleep(10000)
    }

    /** Join the Bladeburner Division */
    ns.bladeburner.joinBladeburnerDivision()

    /** Start working on a Bladeburner task */
    ns.bladeburner.startAction("General", "Field Analysis")

    ns.exit()
}

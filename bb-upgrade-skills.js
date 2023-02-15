/** 
 * Upgrades the given Bladeburner Skills
 * 
 * Requires the Bladeburner API
 * 
 * @param {NS} ns 
 */
export async function main(ns) {
    while (true) {
        /** The Bladeburner skills to upgrade */
        const skills = ns.args

        /** Sum up the total cost of skills to be upgraded */
        const total_cost = skills.map(skill =>
            ns.bladeburner.getSkillUpgradeCost(skill)).reduce((accumulator, current) =>
                accumulator + current, 0)

        /** Player's spendable skill points */
        const playerSkillPoints = ns.bladeburner.getSkillPoints()

        if (playerSkillPoints / total_cost >= 1) {
            skills.map(skill => ns.bladeburner.upgradeSkill(skill))
        }

        /** Updates 10 times a second (in milliseconds) */
        await ns.sleep(100)
    }
}

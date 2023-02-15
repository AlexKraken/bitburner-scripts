/** 
 * Upgrades the given Bladeburner Skills
 * 
 * Requires the Bladeburner API
 * 
 * @param {NS} ns 
 */
export async function main(ns) {

    /** The Bladeburner skills to upgrade */
    const skills = ns.args

    while (true) {

        /** Sum up the total cost of skills to be upgraded */
        const totalCost = skills.map(skill =>
            ns.bladeburner.getSkillUpgradeCost(skill)).reduce((total, current) =>
                total + current, 0)

        /** Player's spendable skill points */
        const playerSkillPoints = ns.bladeburner.getSkillPoints()

        if (playerSkillPoints / totalCost >= 1) {
            skills.map(skill => ns.bladeburner.upgradeSkill(skill))
        }

        /** Updates 10 times a second (in milliseconds) */
        await ns.sleep(100)
    }
}

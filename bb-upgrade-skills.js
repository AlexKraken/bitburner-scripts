/** 
 * Upgrades the given Bladeburner Skills
 * 
 * Requires the Bladeburner API
 * 
 * @param {NS} ns 
 */
export async function main(ns) {
    while (true) {
        const skills = ["Hands of Midas", "Reaper", "Evasive System"]

        const total_cost = skills.map(skill =>
            ns.bladeburner.getSkillUpgradeCost(skill)).reduce((accumulator, current) =>
                accumulator + current, 0)

        const count = ns.bladeburner.getSkillPoints() / total_cost

        if (count >= 1) {
            for (let i = 0; i < Math.floor(count); i++) {
                skills.map(skill => ns.bladeburner.upgradeSkill(skill))
            }

        }
        /** Updates every 5 seconds (in milliseconds) */
        await ns.sleep(5000)
    }
}
/** @param {NS} ns */
export async function main(ns) {
    while (true) {

        while (ns.bladeburner.getSkillUpgradeCost("Hands of Midas") < ns.bladeburner.getSkillPoints()) {
            if (2 * (ns.bladeburner.getSkillUpgradeCost("Reaper")) < ns.bladeburner.getSkillPoints()) {
                ns.bladeburner.upgradeSkill("Reaper")
                ns.bladeburner.upgradeSkill("Evasive System")
            }
            ns.bladeburner.upgradeSkill("Hands of Midas")
        }

        await ns.sleep(20000);
    }
}
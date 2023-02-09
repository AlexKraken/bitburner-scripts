/** @param {NS} ns */
export async function main(ns) {
    let nsa_req_met = false;
    let req = 100;

    while (!nsa_req_met) {
        let player = ns.getPlayer();
        let str = player.skills.strength;
        let def = player.skills.defense;
        let dex = player.skills.dexterity;
        let agi = player.skills.agility;

        if (str < req) {
            ns.singularity.gymWorkout('Powerhouse Gym', 'strength');
        } else if (def < req) {
            ns.singularity.gymWorkout('Powerhouse Gym', 'defense');
        } else if (dex < req) {
            ns.singularity.gymWorkout('Powerhouse Gym', 'dexterity');
        } else if (agi < req) {
            ns.singularity.gymWorkout('Powerhouse Gym', 'agility');
        } else { nsa_req_met = true; }
        await ns.sleep(10000);
    }

    ns.bladeburner.joinBladeburnerDivision();
    ns.bladeburner.startAction("General", "Field Analysis");

    ns.exit();
}

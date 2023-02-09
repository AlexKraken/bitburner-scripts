/** @param {NS} ns */
export async function main(ns) {

    const GANG = ns.gang
    const EQUIPMENT = GANG.getEquipmentNames()
    const MEMBERS = GANG.getMemberNames()
    const TASKS = GANG.getTaskNames()
    const ARGS = ns.args.map(arg => arg.toUpperCase())
    const OPTIONS = new Map()
    const VALUES = [
        ["ASCENDALL", "Ascends each eligible gang member"],
        ["BUYALL", "Buys all equipment for each gang member"],
        ["SETALL", "Follow this command with a task to assign to all gang members"]
    ]

    VALUES.forEach((value) => OPTIONS.set(value[0], value[1]))

    if (ARGS.length === 0) {
        for (const [option, purpose] of OPTIONS.entries()) {
            ns.tprint(option + ": " + purpose)
        }
        ns.tprint("Tasks: ", TASKS)
    }

    if (ARGS.includes("BUYALL")) {
        MEMBERS.forEach((member) =>
            EQUIPMENT.forEach((equipment) =>
                GANG.purchaseEquipment(member, equipment)
            ))
    }

    if (ARGS.includes("ASCENDALL")) {
        MEMBERS.forEach((member) => GANG.ascendMember(member))
    }

    if (ARGS.includes("SETALL")) {
        const task = ARGS[ARGS.indexOf("SETALL") + 1]
        const task_formatted = task.split(" ").map(word => word[0] + word.substr(1).toLowerCase()).join(" ")

        MEMBERS.forEach((member) => GANG.setMemberTask(member, task_formatted))
    }
}
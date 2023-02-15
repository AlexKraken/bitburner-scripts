/** 
 * Manages various tasks for the Gang
 * 
 * Requires the Gang API
 * 
 * @param {NS} ns 
 */
export async function main(ns) {
    const gang = ns.gang
    const equipmentList = gang.getEquipmentNames()
    const members = gang.getMemberNames()
    const tasks = gang.getTaskNames()
    const args = ns.args.map(arg => arg.toUpperCase())
    const options = new Map()

    /** Tasks and descriptions */
    const descriptions = [
        ["ASCENDALL", "Ascends each eligible gang member"],
        ["BUYALL", "Buys all equipment for each gang member"],
        ["SETALL", "Follow this command with a task to assign to all gang members"]
    ]
    descriptions.forEach((description) => options.set(description[0], description[1]))

    /** Prints out all availible options if no arguments are passed */
    if (args.length === 0) {
        for (const [option, purpose] of options.entries()) {
            ns.tprint(option + ": " + purpose)
        }
        ns.tprint("Tasks: ", tasks)
    }

    /** Purchases all equipment for each member */
    if (args.includes("BUYALL")) {
        members.forEach((member) =>
            equipmentList.forEach((equipment) =>
                gang.purchaseEquipment(member, equipment)
            ))
    }

    /** Ascends each member */
    if (args.includes("ASCENDALL")) {
        members.forEach((member) => gang.ascendMember(member))
    }

    /** Sets the task for all members */
    if (args.includes("SETALL")) {
        const task = args[args.indexOf("SETALL") + 1]
        const taskFormatted = task.split(" ").map(word => word[0] + word.substr(1).toLowerCase()).join(" ")

        members.forEach((member) => gang.setMemberTask(member, taskFormatted))
    }

    ns.exit()
}

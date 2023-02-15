/** 
 * Runs specified scripts. Used after installing augmentations,
 * game crash, etc. to quickly get up and running.
 * 
 * Requires all APIs of the subsequent scripts
 * 
 * @param {NS} ns 
 */
export async function main(ns) {
    /** The Bladeburner skills to upgrade */
    const bbSkills = ["Hands of Midas", "Reaper", "Evasive System"]
    /** The task to assign to all sleeves */
    const sleeveTask = "Infiltrate synthoids"

    ns.run("bb-upgrade-skills.js", numThreads = 1, ...bbSkills)
    ns.run("sleeve-manager.js", numThreads = 1, sleeveTask)

    if (ns.singularity.purchaseTor()) {
        /** Get a reference to the terminal text field */
        const terminalInput = document.getElementById("terminal-input");

        /** Sets the terminal input to the Tor buy all command */
        terminalInput.value = "buy -a";

        /** Get a reference to the React handler */
        const handler = Object.keys(terminalInput)[1];

        /** Perform an onChange event to set internal values */
        terminalInput[handler].onChange({ target: terminalInput });

        /** Simulate hitting enter key */
        terminalInput[handler].onKeyDown({ key: 'Enter', preventDefault: () => null });
    }
}

/**
 * In this challenge, you must find and attach to each group the group (or groups)
 * with which the current group has the most skills in common. 
 * Attached groups must be sorted by their name (A to Z).
 * You must not change the order of the main list of groups.
 * 
 * @param groups List of groups without closestGroups
 * @returns The same list but with a new closestGroups prop on each
 */

// ↓ uncomment bellow lines and add your response!

/* 
export default function ({ groups }: { groups: GroupWithSills[] }): GroupWithSillsAndClosestGroups[] {
    const groupsWithClosestGroups: GroupWithSillsAndClosestGroups[] = [];
    groups.forEach(group => {
        const closestGroups: GroupWithSills[] = [];
        groups.forEach(otherGroup => {
            if (group.name !== otherGroup.name) {
                const commonSkills = group.skills.filter(skill => otherGroup.skills.includes(skill));
                if (commonSkills.length > 0) {
                    closestGroups.push(otherGroup);
                }
            }
        });
        groupsWithClosestGroups.push({
            ...group,
            closestGroups: closestGroups.sort((a, b) => a.name.localeCompare(b.name))
        });
    });
    return groupsWithClosestGroups;
}
*/


// used interfaces, do not touch
export interface GroupWithSills {
    name: string;
    skills: string[];
}

export interface GroupWithSillsAndClosestGroups extends GroupWithSills {
    closestGroups: GroupWithSills[];
}

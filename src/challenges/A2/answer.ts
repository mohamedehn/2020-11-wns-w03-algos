/**
 * In this challenge, you have to add a list of skills to each group (based on 
 * students skills in the group). Duplicates skills for one group is not permitted. Skills must be
 * sorted alphabatically. Groups order, students order and students skills order must remain
 * untouched.
 * 
 * @param groups List of groups without skills, but with students
 * @returns List of groups with a new prop skills
 */

// ↓ uncomment bellow lines and add your response!

export default function ({ groups }: { groups: Group[] }): GroupWithSkills[] {
    const groupsSkills : GroupWithSkills[] = [];
    groups.forEach(group => {
        const skills : string[] = [];
        group.students.forEach(student => {
            student.skills.forEach(skill => {
                if (!skills.includes(skill)) {
                    skills.push(skill);
                }
            });
        });
        skills.sort();
        groupsSkills.push({...group, skills});
    });
    return groupsSkills;
}


// used interfaces, do not touch
interface Student {
    name: string;
    age: number;
    skills: string[];
}

export interface Group {
    students: Student[];
    name: string;
}

export interface GroupWithSkills extends Group {
    skills: string[];
}
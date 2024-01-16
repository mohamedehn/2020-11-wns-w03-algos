/**
 * In this challenge, you have to regroup submissions by the month they got submitted
 * The result should be an array containing one object for each month. These objects
 * must be sorted chronoligically (oldest first) based on their month property (ISO8601 datetime).
 * Please note that the date of a month will be the first day of this month at midnigth (ISO8601)
 * For instance, the datetime of novembre is: "2020-11-01T00:00:00.000Z"
 * 
 * You have to manipulate dates in vanillaJS. Be carefull to call, if needed, setUTCHours, setUTCMinutes, ... 
 * instead of setHouts, setMinutes, ... to avoid timezone offsets!
 * 
 * Example:
 * Input: [
 *      { name: "Quest NodeJS", submittedAt: "2020-11-17T11:45:01.721Z" }, 
 *      { name: "Quest GraphQL", submittedAt: "2020-03-12T13:45:01.721Z" },
 *      { name: "Quest ReactJS", submittedAt: "2020-03-10T07:45:47.721Z" },
 *      { name: "Quest Angular", submittedAt: "2020-01-21T21:25:47.721Z" },
 *      { name: "Quest MySQL", submittedAt: "2020-06-16T21:25:47.721Z" },
 * ]
 * Output: [
 *      {
 *          month: "2020-01-01T00:00:00.000Z",
 *          submissions: [
 *              { name: "Quest Angular", submittedAt: "2020-01-21T21:25:47.721Z" }
 *          ]
 *      },
 *      {
 *          month: "2020-03-01T00:00:00.000Z",
 *          submissions: [
 *              { name: "Quest GraphQL", submittedAt: "2020-03-12T13:45:01.721Z" },
 *              { name: "Quest ReactJS", submittedAt: "2020-03-10T07:45:47.721Z" },
 *          ]
 *      },
 *      {
 *          month: "2020-06-01T00:00:00.000Z",
 *          submissions: [
 *              { name: "Quest MySQL", submittedAt: "2020-06-16T21:25:47.721Z" },
 *          ]
 *      },
 *      {
 *          month: "2020-11-01T00:00:00.000Z",
 *          submissions: [
 *              { name: "Quest NodeJS", submittedAt: "2020-11-17T11:45:01.721Z" }, 
 *          ]
 *      },
 * ]
 * 
 * @param submissions A list of test submissions with their name and submission datetime
 * @returns A list of objects. Each object must contain a month and its associated submissions. The list must be sorted chronoligically
 */

// ↓ uncomment bellow lines and add your response!

export default function ({ submissions }: {submissions: Submission[] }): MonthSubmission[] {
    const monthSubmissions: MonthSubmission[] = [];
    const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const years = ["2020", "2021"];

    // Initialisation de monthSubmissions
    years.forEach(year => {
        months.forEach(month => {
            monthSubmissions.push({
                month: `${year}-${month}-01T00:00:00.000Z`,
                submissions: []
            });
        });
    });

    // Ajout des soumissions aux mois correspondants
    submissions.forEach(submission => {
        const matchingMonth = monthSubmissions.find(monthSubmission => monthSubmission.month === submission.submittedAt.slice(0, 7) + "-01T00:00:00.000Z");
        if (matchingMonth) {
            matchingMonth.submissions.push(submission);
        }
    });

    // Filtre des mois
    const filteredMonthSubmissions = monthSubmissions.filter(monthSubmission => monthSubmission.submissions.length > 0);

    // Tri des soumissions dans chaque mois
    filteredMonthSubmissions.forEach(monthSubmission => {
        monthSubmission.submissions.sort((a, b) => new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime());
    });

    return filteredMonthSubmissions;
}

// used interfaces, do not touch
export interface Submission {
    name: string;
    submittedAt: string;
}

export interface MonthSubmission {
    month: string;
    submissions: Submission[];
}

/**
 * In this challenge, you must sort events chronologically (oldest to latest) based on 
 * their startDatetime prop. If some events have the same startDatetime, then the shortest must appear
 * first
 * 
 * @param events Unsorted list of events
 * @returns Sorted list of events
 */

// ↓ uncomment bellow lines and add your response!

export default function ({ events }: { events: EventDatetime[] }): EventDatetime[] {
    events.sort((a: EventDatetime, b: EventDatetime) => {
        if (a.startDatetime === b.startDatetime) {
            return a.endDatetime.localeCompare(b.endDatetime);
        }
        return a.startDatetime.localeCompare(b.startDatetime);
    })
    return events;
}


// used interfaces, do not touch
export interface EventDatetime {
    startDatetime: string;
    endDatetime: string;
    event: string;
}
export interface Lesson {
    [key: string]: any
    id: number;
    name: string;
    description: string;
}


export const Lessons: Lesson[] = [
    { id: 1, description: 'Computer engineering lesson', name: 'Computer engineering' },
    { id: 2, description: 'Programming Languages lesson', name: 'Programming Languages' },
    { id: 3, description: 'Learning react full included', name: 'React' }
]

export function GetNewLessonId() {
    let idx = 0;
    Lessons.forEach(item => {
        if (item.id > idx)
            idx = item.id;
    })
    return idx + 1;
}
import { Lesson } from "../../lesson/model/lesson";

export interface Student {
    [key: string]: any
    id: number;
    schoolNumber: string;
    person: Person;
    lessons?: Array<Lesson>;
}



export interface Person {
    nationalId: string;
    name: string;
    surname: string;
}


export const Students: Student[] = [
    { id: 3, schoolNumber: '160910112', person: { nationalId: '11111111111', name: 'Dilara', surname: 'Yoldaş' } },
    {
        id: 1, schoolNumber: '160910111', person: { nationalId: '22222222222', name: 'Ali hadi', surname: 'Öztürk' }, lessons: [
            { id: 1, description: 'Computer engineering lesson', name: 'Computer engineering' },
            { id: 3, description: 'Learning react full included', name: 'React' }
        ]
    },
    { id: 2, schoolNumber: '160910109', person: { nationalId: '33333333333', name: 'Özgür', surname: 'Çınar' } },
]


export function GetNewStudentId() {
    let idx = 0;
    Students.forEach(item => {
        if (item.id > idx)
            idx = item.id;
    })
    return idx + 1;
}
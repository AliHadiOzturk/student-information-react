export interface Student {
    id: number;
    nationalId: string;
    schoolNumber: string;
    person: Person;
}

export interface Person {
    name: string;
    surname: string;
}


export const Students: Student[] = [
    { id: 1, nationalId: '11980059384', schoolNumber: '160910111', person: { name: 'Ali hadi', surname: 'Öztürk' } },
    { id: 2, nationalId: '32474202420', schoolNumber: '160910109', person: { name: 'Özgür', surname: 'Çınar' } },
    { id: 3, nationalId: '16810197878', schoolNumber: '160910112', person: { name: 'Dilara', surname: 'Yoldaş' } }
]
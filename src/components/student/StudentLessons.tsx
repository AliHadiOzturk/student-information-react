import { useState } from 'react';
import { Lesson, Lessons } from "../lesson/model/lesson";
import { Student } from "./model/Student";

interface StudentLessonProps {
    student: Student,
    setStudent(student: Student): any;


}


export const StudentLessons: React.FC<StudentLessonProps> = ({ student, setStudent }) => {


    const [selectedIndexes, setSelectedIndexes] = useState<Array<number>>([]);


    const isLessonSelected = (index: number) => {
        return selectedIndexes.findIndex(item => item === index) !== -1
        // return s;
    }


    const handleDeleteAction = () => {
        let lessons = student.lessons?.filter((item, index) => selectedIndexes.includes(index))

        var st = { ...student };
        st.lessons = lessons;

        setSelectedIndexes([]);
        setStudent(st);
    }


    const lessonRowOnClickHandler = (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>, lesson: Lesson, index: number) => {
        let selected = isLessonSelected(index);

        if (selected)
            setSelectedIndexes([...selectedIndexes.filter(item => item !== index)])
        else {
            let newArray: Array<number> = [...selectedIndexes];
            newArray.push(index);
            setSelectedIndexes([...newArray]);
        }
    }

    const handleLessonSelect = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, key: number) => {
        let lesson = Lessons[Lessons.findIndex(item => item.id === key)]

        setStudent({ ...student, this: student.lessons?.push(lesson) })
    }
    const lessonList = student.lessons?.map((item, index) => {
        return (
            <tr className={isLessonSelected(index) ? 'selectedTableRow' : ''} key={item.id} onClick={e => lessonRowOnClickHandler(e, item, index)} style={{ cursor: 'pointer' }} >
                <td>{item.name}</td>
                <td>{item.description}</td>
            </tr>
        );
    })



    // useEffect(() => {

    // }, [selectedIndexes])


    return (
        <div className="container-sm">
            <div className="text-end">
                <div className="btn-group margin-button">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Add Lesson
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            {Lessons.filter(item => student.lessons?.findIndex(l => l.id === item.id) === -1).map(item => {

                                return (
                                    <div key={item.id} style={{ cursor: 'pointer' }} onClick={(e) => handleLessonSelect(e, item.id)}>
                                        <p className="dropdown-item">{item.name}</p>
                                    </div>
                                )
                            })}
                        </li>
                    </ul>
                </div>
                <button className="btn btn-danger" onClick={handleDeleteAction}>
                    <i className="bi-trash icon"></i>
                    Delete Selected
                </button>
            </div>
            <table className="table table-dark table-striped table-hover" >
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {lessonList}
                </tbody>
            </table>
            <div className="text-end">Student have {student.lessons?.length} lesson</div>
        </div>
    );
}
import { ChangeEvent, useEffect, useState } from "react";
import { RouteProps, useHistory, useParams } from "react-router-dom";
import { GetNewStudentId, Student as StudentModel, Students } from "./model/Student";
import { StudentLessons } from "./StudentLessons";

export const StudentComponent: React.FC<RouteProps> = () => {


    let history = useHistory();

    const [student, setStudent] = useState<StudentModel>(Object.create(null));

    let { id } = useParams<any>();


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;
        let st = { ...student }
        st[name] = value;
        setStudent(st);
    }

    const formSubmitted = (e: React.FormEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (id === '0') {
            setStudent({ ...student, this: student.id = GetNewStudentId() })
            Students.push(student)
        }
        else {
            let idx = Students.findIndex(item => item.id.toString() === id)

            Students[idx] = student;
        }
        history.goBack();
    }

    useEffect(() => {
        if (id !== '0') {
            let st = Students.find(item => item?.id?.toString() === id);
            // console.log(typeof (id))
            setStudent(st as StudentModel);
        } else {
            setStudent({ id: 0, schoolNumber: '', person: { nationalId: '', name: '', surname: '' } })
        }
    }, [id])


    return (
        <div>
            <div className="title">
                {student?.id ? "Edit Student" : "Add Student"}
            </div>

            <div className="container" onSubmit={formSubmitted}>
                <div className="text-end">
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#lessonsModal">
                        <i className="bi bi-file-earmark-ruled icon"></i>Lessons
                    </button>
                </div>
                <form>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-floating mb-3">
                                <input type="text" value={student?.person?.nationalId || ''} className="form-control" onChange={e => { setStudent({ ...student, this: student.person.nationalId = e.target.value }) }} id="natId" name="nationalId" placeholder="National Id" />
                                <label htmlFor="natId">National Id</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" value={student?.schoolNumber || ''} onChange={handleChange} id="schoolNumber" name="schoolNumber" placeholder="School Number" />
                                <label htmlFor="schoolNumber">School Number</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" value={student?.person?.name || ''} onChange={e => { setStudent({ ...student, this: student.person.name = e.target.value }) }} id="name" name="person.name" placeholder="Name" />
                                <label htmlFor="name">Name</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" value={student?.person?.surname || ''} onChange={e => { setStudent({ ...student, this: student.person.surname = e.target.value }) }} id="surname" name="person.surname" placeholder="Surname" />
                                <label htmlFor="surname">Surname</label>
                            </div>
                        </div>
                        <div className="col text-center ">
                            <button type="button" style={{ marginRight: "5px" }} onClick={e => history.goBack()} className="btn btn-danger">Cancel</button>
                            <button type="submit" className="btn btn-success">Save</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="modal fade " id="lessonsModal" tabIndex={-1} aria-labelledby="lessonModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="lessonModalLabel">Lessons for {`${student?.person?.name} ${student?.person?.surname}`}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <StudentLessons student={student} setStudent={(s) => setStudent(s)} />
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
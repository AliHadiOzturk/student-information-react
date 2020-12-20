import React from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { Student, Students } from './model/Student';
import "./Student.css";
export default function StudentList() {

    let history = useHistory();

    let { url } = useRouteMatch();



    function routeToStudentPage(student: Student) {
        history.push(`${url}/${student.id}`)
    }

    const studentList = Students.map((item) => {
        return (
            <tr key={item.id} onClick={() => routeToStudentPage(item)} style={{ cursor: 'pointer' }} >
                <th scope="row">{item.id}</th>
                <th scope="row">{item.nationalId}</th>
                <th scope="row">{item.schoolNumber}</th>
                <th scope="row">{item.person.name}</th>
                <th scope="row">{item.person.surname}</th>
                <th scope="row">
                    <Link to={`${url}/${item.id}`} className="btn btn-primary" > Edit</Link>
                </th>
            </tr>
        )
    })



    return (
        <div className="full-width">
            <table className="table table-dark table-striped table-hover" >
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">National Id</th>
                        <th scope="col">School Number</th>
                        <th scope="col">Name</th>
                        <th scope="col">surname</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {studentList}
                </tbody>
            </table>
        </div>
    )
}
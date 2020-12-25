import React from "react";
import { Link, RouteProps, useHistory, useRouteMatch } from "react-router-dom";
import { Lesson, Lessons } from "./model/lesson";

export const LessonList: React.FC<RouteProps> = () => {
    let history = useHistory();

    let { url } = useRouteMatch();



    function routeToLessonComponent(lesson: Lesson) {
        console.log(`${url}/${lesson.id}`)
        history.push(`${url}/${lesson.id}`)
    }

    const lessonList = Lessons.map((item: Lesson) => {
        return (
            <tr key={item.id} onClick={() => routeToLessonComponent(item)} style={{ cursor: 'pointer' }} >
                <th scope="row">{item?.id}</th>
                <th scope="row">{item?.name}</th>
                <th scope="row">{item?.description}</th>
                {/* <th scope="row">
                    <Link to={`${url}/${item.id}`} className="btn btn-primary" > Edit</Link>
                </th> */}
            </tr>
        )
    })



    return (
        <div className="full-width">
            <div className="text-end">
                <Link to={`${url}/0`} className="btn btn-success">
                    <i className="bi-plus icon"></i>Add New Lesson</Link>
            </div>
            <table className="table table-dark table-striped table-hover" >
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {lessonList}
                </tbody>
            </table>
        </div>
    )
}
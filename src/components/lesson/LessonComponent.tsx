import { ChangeEvent, useEffect, useState } from "react";
import { RouteProps, useHistory, useParams } from "react-router-dom";
import { GetNewLessonId, Lesson, Lessons } from "./model/lesson";

export const LessonComponent: React.FC<RouteProps> = () => {
    let history = useHistory();

    const [lesson, setLesson] = useState<Lesson>(Object.create(null));

    let { id } = useParams<any>();


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;
        let st = { ...lesson }
        st[name] = value;
        setLesson(st);
    }

    const formSubmitted = (e: React.FormEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (id === '0') {
            setLesson({ ...lesson, this: lesson.id = GetNewLessonId() })
            Lessons.push(lesson)
        }
        else {
            let idx = Lessons.findIndex(item => item.id.toString() === id)

            Lessons[idx] = lesson;
        }
        history.goBack();
    }

    useEffect(() => {
        if (id !== '0') {
            let st = Lessons.find(item => item?.id?.toString() === id);
            // console.log(typeof (id))
            setLesson(st as Lesson);
        } else {
            setLesson({ id: 0, name: '', description: '' })
        }
    }, [id])


    return (
        <div>
            <div className="title">
                {lesson?.id ? "Edit Lesson" : "Add Lesson"}
            </div>
            <div className="container" onSubmit={formSubmitted}>
                <form>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" value={lesson?.name || ''} onChange={handleChange} id="name" name="name" placeholder="Name" />
                                <label htmlFor="name">Name</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" value={lesson?.description || ''} onChange={handleChange} id="description" name="description" placeholder="Description" />
                                <label htmlFor="schoolNumber">Description</label>
                            </div>
                        </div>
                        <div className="col text-center ">
                            <button type="button" style={{ marginRight: "5px" }} onClick={e => history.goBack()} className="btn btn-danger">Cancel</button>
                            <button type="submit" className="btn btn-success">Save</button>
                        </div>
                    </div>

                </form>
            </div>
        </div >
    )
}
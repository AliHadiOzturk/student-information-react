import { useEffect } from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import StudentList from "./StudentList";

export default function StudentModule() {

    let { path } = useRouteMatch();
    useEffect(() => {
        console.log(path)
    })
    return (
        <Switch>
            <Route exact path={path} component={StudentList}></Route>
            {/* <Route path={`${path}/:id`} component={StudentComponent}></Route> */}
            <Route exact path="/students/test" >
                Hellooooo
            </Route>

        </Switch>
    )
}
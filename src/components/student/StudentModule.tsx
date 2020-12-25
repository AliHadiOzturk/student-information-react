import { FC } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { StudentComponent } from "./StudentComponent";
import { StudentList } from "./StudentList";


export const StudentModule: FC = () => {



    let { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path} component={StudentList}></Route>
            <Route path={`${path}/:id`} component={StudentComponent}></Route>

        </Switch>
    )
}
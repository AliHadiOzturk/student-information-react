import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { LessonComponent } from './LessonComponent';
import { LessonList } from './LessonList';
export const LessonModule: React.FC = () => {
    let { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${path}`} component={LessonList}></Route>
            <Route path={`${path}/:id`} component={LessonComponent}></Route>
        </Switch>
    );
}
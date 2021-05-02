import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from '../pages/Main'
import SignUp from '../pages/Auth/SignUp'
import SignIn from '../pages/Auth/SignIn'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/signin" exact component={SignIn}/>
            <Route path="/signup" exact component={SignUp}/>
        </Switch>
    </BrowserRouter>
)

export default Routes
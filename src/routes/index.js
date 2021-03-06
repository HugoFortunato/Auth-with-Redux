import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route} from 'react-router-dom'

import history from './history'

import Main from '../pages/Main'
import SignUp from '../pages/Auth/SignUp'
import SignIn from '../pages/Auth/SignIn'

const Routes = () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route path="/signin" exact component={SignIn}/>
            <Route path="/signup" exact component={SignUp}/>
            <Route path="/" exact component={Main}/>
        </Switch>
    </ConnectedRouter>
)

export default Routes
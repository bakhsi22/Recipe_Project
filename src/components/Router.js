import React from 'react' ;
import { BrowserRouter , Switch , Route } from "react-router-dom" ;

import App from  "../App" ;
import Recipe from "./Recipe";
{/* <script src="https://unpkg.com/react-router/umd/react-router.min.js"> */}
// </script>
const Router=() => (
    <BrowserRouter>
       <Switch>
           <Route path="/" component={App} exact/>
           <Route path="/recipe/:id" component={Recipe}/>
       </Switch>
    </BrowserRouter>
);
export default Router;
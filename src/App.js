import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './component/Header/Header';
import { Router, Switch } from 'react-router-dom';

function App() {
  return (
   <>
  <Router>
        <div className="container">
            <Header />
            <Switch>
               {/* <Route path="/" exact component={Product} />
               <Route path="/carts" exact component={Cart} /> */}
            </Switch>
        </div>
     </Router>
   </>
  );
}

export default App;

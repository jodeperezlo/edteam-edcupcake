import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './molecules/Header';
import HomePage from './pages/HomePage';
import CupcakePage from './pages/CupcakePage';
import AboutPage from './pages/AboutPage';

import '../styles/styles.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/cupcakes'>
          <CupcakePage path='cupcakes' title='Página de Cupcakes' />
        </Route>
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/' component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;

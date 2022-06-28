import {BrowserRouter as Router} from 'react-router-dom'
import { Grid, Container } from 'semantic-ui-react';
import Home from './components/Home';

function App() {
  return (
    <Router> 
        <Home />
    </Router>

  );
}

export default App;

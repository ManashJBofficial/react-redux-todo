import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import {Container} from 'react-bootstrap'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Container>
        <Route path='/' component={HomeScreen} />
      </Container>
      <Footer />
    </Router>
  );
}

export default App;

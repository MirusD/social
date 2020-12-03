import {BrowserRouter, Route} from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Navbar/>
        <div className="app-content">
          <Route path="/dialogs" component={Dialogs}/>
          <Route path="/profile" component={Profile}/>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

import {BrowserRouter, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

function App(props) {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Navbar/>
        <div className="app-content">
          <Route path="/dialogs" render={ () => <Dialogs state={props.state.messagesPage} /> }/>
          <Route path="/profile" render={ () => <Profile state={props.state.profilePage} /> }/>
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'

function App() {
  return (
    <div className="app">
      <Header/>
      <Navbar/>
      <div className="app-content">
        {/* <Dialogs/> */}
        <Profile/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;


import Me from './AboutMe';
import './App.css';
import Photo from './Photo';

function App() {
  return (
    <div>
      <div className='container'>
        <h1>Hi! I'm Elena</h1>
      </div>
      <div className='container'>
        <Photo />
      </div>
      <div>
        <Me />
      </div>
    </div>
    
  );
}

export default App;


import './App.css';
import News from './components/news-app/News';
import SearchTodo from './components/to-do-app/SearchTodo';
import Weather from './components/weather-app/Weather';

function App() {
  return (
    <div className="container d-flex flex-wrap justify-content-center App">
      <div className='toDoApp'>
        <SearchTodo />
      </div>
      <div className="weatherApp">
        <Weather />
      </div>
      <div className='newsApp'>
        <News />
      </div>
    </div>
  );
}

export default App;

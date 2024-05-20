import './App.css';
import Header from './Components/Header';
import Calendar from './Components/Calendar';
import { CalendarProvider } from './providers/CalendarProvider';

function App() {
  return (
    <CalendarProvider>
      <Header />
      <Calendar />
    </CalendarProvider>
  );
}

export default App;

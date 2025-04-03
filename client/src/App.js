import './App.css';
import MatchHeader from './components/MatchHeader/MatchHeader';

function App() {
  return (
    <div className="cricket-scorecard">
      <div className="header">
        <MatchHeader teamA="Kenya" teamB="Scotland" />
      </div>
    </div>
  );
}

export default App;

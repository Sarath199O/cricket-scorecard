import './App.css';
import MatchBetween from './components/MatchBetween/MatchBetween';
import Tabs from './components/Tabs/Tabs';

function App() {
  const tabs = [
    {name: 'First Innings', content: 'First Innings Content'},
    {name: 'Second Innings', content: 'Second Innings Content'}
  ];

  return (
    <>
      <div className="header">
        <MatchBetween teamA="Kenya" teamB="Scotland" />
      </div>
  
      <Tabs tabs={tabs} />
    </>
  );
}

export default App;

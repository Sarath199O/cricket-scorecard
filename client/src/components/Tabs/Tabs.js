import './Tabs.css';
import {useState} from 'react';
import Tab from '../Tab/Tab';

export default function Tabs(props) {
  const [menuSelection, setMenuSelection] = useState('First Innings');

  return (
    <>
      <div className='tab-header'>
        {props.tabs.map((tab, index) => {
          return (
            <div key={index} className='menu' onClick={() => setMenuSelection(tab.name)}>
              {tab.name}
            </div>
          )
        })}
      </div>

      <div className='tab-content'>
        {props.tabs.map((tab, index) => {
          return (
            <div key={index} className={`content ${menuSelection === tab.name && 'active'}`}>
              <Tab>
                <h1>Innings Info</h1>
                <h2>Match Summery</h2>
                <h3>{tab.content}</h3>
              </Tab>
            </div>
          )}
        )}
      </div>
    </>
  )
}
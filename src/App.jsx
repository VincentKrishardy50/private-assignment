/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import './App.css';
import {character, stage} from './data/mock.js'
import Stats from './components/stats.jsx';
import Header from './components/header.jsx';
import Characters from './components/characters.jsx';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('bg-white')
  const [selectedCharacter, setSelectedCharacter] = useState([]);
  const [targetParty, setTargetParty] = useState([]);
  const [totalStatsParty, setTotalStats] = useState({
    attack: 0,
    defense: 0,
    agility: 0,
    accuracy: 0,
    utility: 0
  });
  let party = {
    attack: 0,
    defense: 0,
    agility: 0,
    accuracy: 0,
    utility: 0
  }

  const selectChara = (e) => {
    let chara = document.getElementById(e.target.tabIndex);
    let orderData = {"index" : e.target.tabIndex, "character": character[e.target.tabIndex]}
    
    console.log(selectedCharacter.length + 1)
    console.log(chara);
    if(chara.className == 'bg-white'){
      if(selectedCharacter.length >= 4){
        deleteArrData(0);
        addArrData(orderData);
        let unselectChara = document.getElementById(selectedCharacter[0].index);
        unselectChara.className = 'bg-white';
        party = reducePartyPower(party, 0);
      }else{
        addArrData(orderData);
      }
      chara.className = 'bg-blue-900 text-white';
      party = increasePartyPower(party, e.target.tabIndex);
      
    }else{
      chara.className = 'bg-white';
      for(let i = 0; i < selectedCharacter.length; i++){
        if(selectedCharacter[i].index == e.target.tabIndex){
          deleteArrData(i);
        }
      }
      party = reducePartyPower(party, e.target.tabIndex);
    }
    setTotalStats(prevState => ({
      ...prevState,
      attack: party.attack,
      defense: party.defense,
      agility: party.agility,
      accuracy: party.accuracy,
      utility: party.utility
   }));
    getAllEligleStages(party);
  };

  function deleteArrData(_idx){
      setSelectedCharacter(prevSelectedCharacter => {
      const newArr = prevSelectedCharacter.filter((_, index) => index !== _idx);
      return newArr;
    });
  }

  function getAllEligleStages(party){
    let targets = []
    for(let _stage of stage){
      if(_stage.minimum_stats.attack < party.attack && 
        _stage.minimum_stats.defense < party.defense && 
        _stage.minimum_stats.agility < party.agility && 
        _stage.minimum_stats.utility < party.utility && 
        _stage.minimum_stats.accuracy < party.accuracy){
          targets.push(_stage.stage);
        }
    }
    setTargetParty(targets);
  }

  function addArrData(chara){
    setSelectedCharacter(prevSelectedCharacter => [...prevSelectedCharacter, chara]);
  }

  function increasePartyPower(party, index){
    party.attack = totalStatsParty.attack + character[index].attack;
    party.defense = totalStatsParty.defense + character[index].defense;
    party.agility = totalStatsParty.agility + character[index].agility;
    party.utility = totalStatsParty.utility + character[index].utility;
    party.accuracy = totalStatsParty.accuracy + character[index].accuracy;
    return party;
  }

  function reducePartyPower(party, index){
    party.attack = totalStatsParty.attack - character[index].attack;
    party.defense = totalStatsParty.defense - character[index].defense;
    party.agility = totalStatsParty.agility - character[index].agility;
    party.utility = totalStatsParty.utility - character[index].utility;
    party.accuracy = totalStatsParty.accuracy - character[index].accuracy;
    return party;
  }
  
  return (
    <div className='my-14'>
      <Header/>
      <div className='flex flex-wrap gap-6 justify-center'>
          <Characters character={character} selectChara={selectChara} backgroundColor={backgroundColor}/>
      </div>
      <div className="flex justify-center my-8">
          <div className='p-8 bg-white text-2xl text-center w-3/4 rounded-3xl'>
            <Stats charaStat={totalStatsParty} partyTarget={targetParty} character={selectedCharacter}/>
          </div>
      </div>
    </div>
  )
}

export default App;



export default function Stats({charaStat, partyTarget, character}){
    let str = "";
    for(let i = 0; i < partyTarget.length; i++){
        if(i == partyTarget.length-1 || i == 0){
            if(i != 0) str = str + "and " + partyTarget[i];
            else str = str + partyTarget[i];
        }else {
            str = str + partyTarget[i] + ", ";
        }
    }

    return( 
        <>
            {((character.length < 4) ? (<span>
                Your Party Summary will be here! <br/>
                It will show when your party is complete 
            </span>):
            (<span>
                Your have total stats of <br/>
                Atk {charaStat.attack}, Def {charaStat.defense}, Agi {charaStat.agility}, Acu {charaStat.accuracy}, and Uti {charaStat.utility}
                    <p className='mt-6'>Your Party through {str}{

                    }</p>
            </span>))}
        </>       
    );
}
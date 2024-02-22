import Skill from "./skill";

export default function Characters({character, selectChara, backgroundColor}) {
    return(
        <>
        {
            character.map((chara, index) => (
              <div className="flex justify-center" tabIndex={index}>
                <div className="w-full rounded-3xl inline-block overflow-hidden shadow-xl cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300">
                  <div className="relative group w-full overflow-hidden bg-white rounded-t-3xl">
                    <img src={chara.image} tabIndex={index} onClick={selectChara} className="object-cover w-full h-full transform duration-700 backdrop-opacity-100" />
                  </div>
                    <div className={backgroundColor} id={index} tabIndex={index} onClick={selectChara}>
                      <div className="text-center px-3 py-2" tabIndex={index}>
                      <h1 className="font-bold text-2xl mb-2" tabIndex={index}>{chara.class.toUpperCase()}</h1>
                    </div>
                    <div className="flex justify-center pb-3 text-sm" tabIndex={index}>
                        <Skill type={'ATK'} number={chara.attack}/>
                        <Skill type={'DEF'} number={chara.defense}/>
                        <Skill type={'AGI'} number={chara.agility}/>
                        <Skill type={'ACU'} number={chara.accuracy}/>
                        <Skill type={'UTI'} number={chara.utility}/> 
                    </div>
                  </div>
                </div>   
              </div>
              
            ))
          }
        </>
        
    )
    
}
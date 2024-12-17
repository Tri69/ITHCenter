import { useReducer, useState } from 'react';
import '../../assets/Styles/Menu.css';
import LayoutPulsa from './LayoutPulsa';
import LayoutGame from './Game/GamePage';
import LayoutKuota from './Kuota/KuotaPage';

function setPage(state, action){
    switch(action){
        case "PulsaPage" : {
            return state = <LayoutPulsa/>;
        }case "KuotaPage" : {
            return state = <LayoutKuota/>;
        }case "GamePage" : {
            return state = <LayoutGame/>;
        }
    }
}

const Menu = () => {
   const [state, getPage] = useReducer(setPage, <LayoutPulsa/>)
    return (
        <>
            <div>
               <center>
                    <div class="shadow-md shadow-zinc-300 cardlabel">
                        <div>
                            <ul class="flex justify-evenly">
                                <li class="active" onClick={()=> {
                                    getPage("PulsaPage")
                                }}>
                                    <div class="card">
                                        <img src="/pulsa.png" class="image" />
                                        <label>Pulsa</label>
                                    </div>
                                </li>
                                <li onClick={()=> {
                                    getPage("KuotaPage")
                                }}>
                                    <div class="card">
                                        <img src="/quota.png" class="image" />
                                        <label>Kuota</label>
                                    </div>
                                </li>
                                <li onClick={()=> {
                                    getPage("GamePage")
                                }}>
                                    <div class="card">
                                        <img src="/game.png" class="image" />
                                        <label>Games</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </center>
            </div>
            <div>
                {state}
            </div>
        </>
    )
}
export default Menu;
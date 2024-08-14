import style from "./Main.module.scss"
import { Greetings } from "../Greetings/Greetings.jsx"
import {List, Foods} from "../List5fav.jsx"



export const Main = () => {

    const Dishes = ["Deer roast with cranberries and mashed potatoes", "Cold Beetroot Soup", "Pasta with wild cantarella mushrooms, cream and parmigiano", "Mushroom pies", "Cakes"];

    const FavFilms = ["LoTR", "HP", "The Mummy", "National Treasure", ""];

    return (
    <>
    <main className={style.mainStyle}>
        <h1>Greetings new members</h1>

        <h3>
        <Greetings name=" Lucy"/>
        <Greetings name=" Brian"/>
        <Greetings name=" Saoirse"/>
        </h3>

        {/* <List FavList={Dishes} /> */}
        <Foods favourites={Dishes}/>

        <Films favfilms={FavFilms}/>
        
    </main>
    </>
    )
}
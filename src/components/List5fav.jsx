export const List = (props) => {
 
    // const Dishes = ["Deer roast with cranberries and mashed potatoes", "Cold Beetroot Soup", "Pasta with wild cantarella mushrooms, cream and parmigiano", "Mushroom pies", "Slow cooked meat in red wine, spice and vegetables"];

    //"FavList" is a name I give
    return (
        <p>{props.FavList}</p>
    );
};

export const Foods = ({favourites}) => {
    return (
        <>
        <p>Favourite Foods:</p>
        <ul>
            {favourites.map(item => {
                return (
                    <li>{item}</li>
                )
            })}
        </ul>
        </>
    );
};

export const Films = ({favfilms}) => {
    return (
        <>
        <p>Favourite Films:</p>
        <ul>
            {favfilms.map(item => {
                return (
                    <li>{item}</li>
                )
            })}
        </ul>
        </>
    )
}
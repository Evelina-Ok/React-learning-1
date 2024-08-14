export const Header = ({headerText="Head is missing"}) => {
    return (
        <>
        <header>
            <h1>{headerText} Today is going to be a great day!</h1>         
        </header>
        </>
    );
};

//2nd way using '(props)'
export const HeaderProp = (props) => {
    return (
       <h1>{props.headerText ? props.headerText: "Head is missing"}</h1>
    )
}
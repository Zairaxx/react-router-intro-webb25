const Header = (props) => {
    return(
    <header style={{background:"darkred"}}>
        <h1>{props.headingOne}</h1>
        <h2>{props.headingTwo}</h2>
    </header>)
}

export default Header
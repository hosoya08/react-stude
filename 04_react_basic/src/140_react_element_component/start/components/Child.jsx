
const Hello = ({color = "pink", fontSize = 30, fontWeight = "bold"}) => {
    return <h1 style={{color: color, fontSize: fontSize, fontWeight: fontWeight}}>Sey Hello</h1>;
}

export default Hello;

import frieren from "../assets/Frieren.jpeg"
function Carros(){
    let carros = ['volks ', 'gm ', 'audi']
    return(
        <div>
            <img src={frieren} alt="frieren"/>
            <p>{carros}</p>
            <a href="#">Link</a>
        </div>
    )
}

export default Carros
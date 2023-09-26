import "./element.css"
function Element(props){
    return(
        <div className="element">
            <img className="image1" src={props.isrc} alt="" />
            <h3>{props.head}</h3>
            <p>{props.text}</p>
        </div>
    );
}
export default Element
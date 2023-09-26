import Element from "./element";
import elementData from "./elementData";
import "./elementContainer.css"

function ElementContainer() {
    return (
        <>
            <h1 className="h">WHY US?</h1>
            <div className="elementContainer">           
            {elementData.map((val) => {
                return (<Element isrc = {val.isrc} head = {val.head} text = {val.text}/>)
                })} 
            </div>
        </>
    )
}

export default ElementContainer;
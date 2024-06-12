
export default function Car(props){
    function vinde(car1){
alert("Se vinde o masina" + car1);
    }
    return (
    <li>
        {props.index} - I am a 
        <button onClick={()=>vinde(props.brand)}>
            Se vinde o masina {props.brand}
        </button>
       
    </li>
    );
}
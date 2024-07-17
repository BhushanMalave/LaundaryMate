import "./ToggleButton.css";
export const Toggle = ({ enable, setEnable,selAll,disAll }) => {
  const callback = () => {

    setEnable(!enable);
    if(enable){
        selAll.current.style.color= "#808080"
        disAll.current.style.color="black"
    }

    if(!enable){
        selAll.current.style.color= "black"
        disAll.current.style.color="#808080"
    }

    // onclick(!enable)
  };

    return (
        <div style={{borderWidth:1,height:30,position:'relative'}} >
        <label className='empolyee-details-toggle-switch'>
            <input type="checkbox" defaultChecked={enable} onClick={callback} />
            <span />
        </label>
        </div>
    )
}

export const Dropbar = ({dropbarType, dropbarElements, handleChange})=>{
    // dropbarType = '차량',
    // const dropbarElement = [상동, 황금, 용지, 황금&용지, ...]
    // handleChange =
    const dropbarElement = dropbarElements.map((element)=>
        (<option key={element} value={element}>{element}</option>)
    )

    return (
    <select name={`Dropbar${dropbarType}`} size="1" className={`Dropbar ${dropbarType}`} onChange={handleChange}>
        <option value="">{dropbarType}</option>
        {dropbarElement}
    </select>)
}
   

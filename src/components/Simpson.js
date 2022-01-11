import './Simpsons.css'
function Simpson(props){
    let {name, surname, age, info, photo}=props;
    return(
        <div className='Simpson'>
            <h2>{name} {surname} {age}</h2>
            <img src={photo}/>
            <p>{info}</p>
        </div>
    )
}
export default Simpson;
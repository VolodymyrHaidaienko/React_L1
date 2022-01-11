import './SpaceX.css'
export default function SpaceX(props){
    let {flight_number, mission_name, launch_year, mission_patch_small}=props;
    return (
        <div className='SpaceX'>
            <h2>
                {flight_number}. {mission_name}, {launch_year} <img src={mission_patch_small}/>
            </h2>








        </div>
    )
}
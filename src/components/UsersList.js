import './UsersList.css'
function UsersList(props){
    let {id, name, username,
        email, addressstreet, addresssuite, addresscity,
        addresszipcode,geolat, geolng}=props;
    return(
        <div className='Wraper'>
            <div className='Userinfo'>
                <h2>
                    {id} {name} {username}
                </h2>
                <p>
                    {email}
                </p>
            </div>
            <div className='Useraddress'>
                {addressstreet}, {addresssuite}, {addresscity}, {addresszipcode}
            </div>
            <div className='Usergeo'>
                {geolat}, {geolng}
            </div>
        </div>
    )
}
export default UsersList;
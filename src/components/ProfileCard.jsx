import PropTypes from 'prop-types';

function ProfileCard({name ="defaultUser", age=0, isMember=false, hobbies = ["Nothing"], onHobbyClick}){
    return(
      <div className="profile-card">
          <h3>Name: {name}</h3>
          <h3>Age : {age}</h3>
          <h3>Status: {isMember ? "Active Member" : "Guest"}</h3>
          <h3>Hobbies</h3>
          <ul>
              {hobbies.map((hobby, index) => {
                 return <li key={index}
                            onClick={() => onHobbyClick(hobby)}>
                     {hobby}
                 </li>
              })}
          </ul>
      </div>
    );
}

ProfileCard.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isMember: PropTypes.bool,
    hobbies: PropTypes.array,
}

export default ProfileCard;
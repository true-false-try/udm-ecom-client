function ProfileCard(props){
    const {name, age, isMember} = props;
    return(
      <div>
          <h3>Name: {name}</h3>
          <h3>Age : {age}</h3>
          <h3>Status: {isMember ? "Active Member" : "Guest"}</h3>
      </div>
    );
}

export default ProfileCard;
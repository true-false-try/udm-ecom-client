function ProfileCard(props){
    const sum = props.num + 1;
    return(
      <div>
          <h3>Name: {props.name}</h3>
          <h3>Age : {props.age}</h3>
          <h3>Age : {sum}</h3>
      </div>
    );
}

export default ProfileCard;
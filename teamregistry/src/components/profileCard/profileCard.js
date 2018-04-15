import React from 'react';

const ProfileCard = (props) => {
  return (
    <div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt="avatar" src={`https://robohash.org/${props.id}?200x200`} />
      <div>
        <h2>{props.firstName} {props.lastName}</h2>
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <p>Company: {props.company}</p>
      </div>
    </div>
  );
}


export default ProfileCard;

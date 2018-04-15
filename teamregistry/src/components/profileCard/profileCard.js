import React from 'react';

const ProfileCard = ({id, firstName, lastName, email, phone, company}) => {
  return (
    <div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt="avatar" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{firstName} {lastName}</h2>
        <p>{email}</p>
        <p>{phone}</p>
        <p>
          <b>Company:</b>{company}
        </p>
      </div>
    </div>
  );
}


export default ProfileCard;

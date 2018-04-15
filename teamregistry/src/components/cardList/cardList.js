import React from 'react';
import ProfileCard from '../profileCard/profileCard';

const CardList = ({list}) => {
  const cardList = list.map((profile, index) => {
    return <ProfileCard
      key={index}
      id={list[index].id}
      firstName={list[index].name.first}
      lastName={list[index].name.last}
      email={list[index].email}
      phone={list[index].phone}
      company={list[index].company}
    />
  })
  return (
    <div>
      {cardList}
    </div>
  );
}

export default CardList;

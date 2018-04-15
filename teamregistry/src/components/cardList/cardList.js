import React from 'react';
import ProfileCard from '../profileCard/ProfileCard';

const CardList = ({list}) => {
  const cardList = list.map((profile, index) => {
    return (<ProfileCard
      key={index}
      id={list[index].id}
      name={list[index].name}
      email={list[index].email}
      phone={list[index].phone}
      company={list[index].company}
    />);
  })
  return (
    <div>
      {cardList}
    </div>
  );
}

export default CardList;

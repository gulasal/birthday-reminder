import React from 'react';
import {MdDeleteOutline as DeleteIcon} from "react-icons/md"
import styled from 'styled-components';


const List = ({people, handleDeleteIconClick}) => {
  
  return (
    <>
      {people.map((person)=>{
        const{id,name,age,image}=person;
        return <ArticleWrap key={id} className='person'>
        <img src={image} alt={name}/>
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
        <DeleteIcon className='icon' onClick={() => handleDeleteIconClick(id)}/>
        </ArticleWrap>
      })}
    </>
  );
};

const ArticleWrap = styled.article`
  display: flex;
  position: relative;
  cursor: pointer;

  & > .icon {
    position: absolute;
    right: 0;
    font-size: 2rem;
    color: gray;

    &:hover{
      color: red;
    }
  }

`;

export default List;

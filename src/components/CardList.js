import React from 'react';
import Card from './Card'

const CardList = ({ robots, type }) => {
    let key = (type === 'robofriends') ? '' : '&&set=set2';
    return (
        <div>
            {robots.map((user, i) => <Card key={i} id={robots[i]} type={key}/>)}
        </div>
    )
}

export default CardList;
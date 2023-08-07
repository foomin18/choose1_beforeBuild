import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardsArray = robots.map((user, i) => { //繰り返しmap
        return ( //Card component呼び出し
            <Card 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email} 
            />
        );
    })

    return (
        <div>
            {cardsArray} {/*cardComponentを実行 */}
        </div>
    );
}

export default CardList;
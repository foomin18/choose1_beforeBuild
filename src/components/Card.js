import React from 'react';

const Card = ({name, email, id}) => {
    //const { name, email, id} = props; //デストラクタsmartに書けば上の行
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='nahida' src={`https://robohash.org/${id}?200×200`} />  
            {/*JSXでは{}で囲むとその中の文字列はそのままコードとして実行される*/}
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;
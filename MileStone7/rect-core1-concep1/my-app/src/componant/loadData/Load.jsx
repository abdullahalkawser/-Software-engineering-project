// eslint-disable-next-line no-unused-vars
import React, { useState,useEffect } from 'react';
import Bottle from './Bottle';
import { addtools, getStorecard, revovecard } from '../../utilites/localStore';
import AddCard from './AddCard';

const Load = () => {
    const [bottle,setBottle] = useState([])
    const [bottlecard,setBottlecard] = useState([])

    useEffect(()=>{
        fetch('Bottol.json')
        .then(response => response.json())
        .then(data => setBottle(data))

    },[])


    useEffect(()=>{
        // console.log('bottle is called')

        if (bottle.length > 0) {
            const cardt = getStorecard()
            console.log(cardt,bottle)

            const saveCard = []

            for (const id of cardt) {
                const btles = bottle.find(btl=> btl.id === id)
                if (btles) {
                    saveCard.push(btles)
                    
                }
                
            }
            console.log(saveCard)

            setBottlecard(saveCard)
            
        }

    },[bottle])

    const shpinCrad = card=>{

        const newcard = [...bottlecard, card]
        // console.log('card added')
        console.log(newcard)
        setBottlecard(newcard)
        addtools(card.id)
    }
const removecard = id =>{
    // remove ui card
    const  cardsRevmes = bottlecard.filter(btles => btles.id !==id)
    setBottlecard(cardsRevmes)

    // remove local storege
    revovecard(id)
}

    return (
        <div>
            <h1>data load botle {bottle.length}</h1>
            <AddCard removecard={removecard}  bottlecard = {bottlecard}></AddCard>
     

      <div className='constiner'>
      {
                // eslint-disable-next-line react/jsx-key
                bottle.map(botleData => <Bottle
                     botleData={botleData} 
                     shpinCrad={shpinCrad}
                     ></Bottle>)
            }
      </div>
        </div>
    );
};

export default Load;
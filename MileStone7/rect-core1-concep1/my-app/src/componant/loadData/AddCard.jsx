

const AddCard = ({ bottlecard,removecard }) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Add Card {bottlecard.length}</h1>
            <div className='contimg'>

                    {bottlecard.map((desh, index) => (
         
                            <div className="cards"  key={index}>
                                  <p>Bottles:{desh.name}</p>
                                <img src={desh.img} alt={desh.name} />
                              
                                <p>Price :{desh.price}$</p>
                                <button onClick={()=>removecard(desh.id)}>Delet</button>
                            </div>
                      
                    ))}
          
            </div>
        </div>
    );
};

export default AddCard;

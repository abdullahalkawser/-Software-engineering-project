// item khuje ber kortesi 

const getStorecard = ()=>{
    const storecard = localStorage.getItem('card')
    if (storecard) {
        return JSON.parse(storecard)
        
    }
    return []
}
// item store korebe
const saveCrad = cart =>{
    const cardString = JSON.stringify(cart)
    localStorage.setItem('card',cardString)
}
  // save local store 
const addtools = id=>{
    const cart = getStorecard()
    cart.push(id)
    // save local store 
    saveCrad(cart)
}

const revovecard = id=>{
    const carts = getStorecard()
    // re
    const remain = carts.filter(idsx => idsx !== id)
    saveCrad(remain)
}

export{addtools ,getStorecard,revovecard}
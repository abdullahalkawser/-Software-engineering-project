
// const Todu = (props) => {
//     return (
//         <div>
//             <li>{props.data}</li>
//         </div>
//     );
// };


// conditional Rendaring 2

// const Todu = ({data,isDone}) => {
// if (isDone === true) {


//     return  <li> Filished :{data}</li>  
// }
// else{
//     return  <li> Lets work :{data}</li>  


// }
// };

//// conditional Rendaring 3  {isDone ? 'finished' : ' let work on '}= tarnary oparetor

// const Todu = ({data,isDone}) => {

    
    
//         return  <li>  {isDone ? 'finished' : ' let work on '} {data}</li>  
    

//     };

 ////// conditional Rendaring  4 jdi ekta condition sotto hoy thole dekhbe aia
// const Todu = ({data,isDone}) => {

    
    
//     return  <li>  {data} {isDone && ': Done all work'}</li>  


// };

 ////// conditional Rendaring  5  jecondition sotto hobe na  thole dekhbe aia 
//  const Todu = ({data,isDone}) => {

    
    
//     return  <li>  {data} {isDone || ': Do it '}</li>  


// };


const Todu = ({data,isDone}) => {
    let variablesitm;
if (isDone === true) {


    variablesitm =  <li> Filished :{data}</li>  
}
else{
    variablesitm = <li> Lets work :{data}</li>  


}
return variablesitm
};


export default Todu;
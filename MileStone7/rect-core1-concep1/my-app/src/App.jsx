
import './App.css'
import Person from './Person'
import Todu from './Todu'


import Counter from './componant/Hooks/Counter'
import UseEffects from './componant/Hooks/UseEffects'
import RestApi from './componant/RestCountryApi/RestApi'
import EvenHandler from './componant/evenHandler/EvenHandler'
import Load from './componant/loadData/Load'

function App() {
  // const actors = ['abdullah al kawser','Abdur arzzak', 'jasim ','Bapparaz ']

  // const actors = [
  //   {id:1, name: "abdullah al kawser",job : 'software engineer',age: 32},
  //   {id:1, name: "abdullah al kawser",job : 'software engineer',age: 32},
  //   {id:1, name: "abdullah al kawser",job : 'software engineer',age: 32},
  //   {id:1, name: "abdullah al kawser",job : 'software engineer',age: 32},
  //   {id:1, name: "abdullah al kawser",job : 'software engineer',age: 32},
  //   {id:1, name: "abdullah al kawser",job : 'software engineer',age: 32}
  // ]


  return (
    <div>

    {/* <EvenHandler></EvenHandler> */}
    {/* <Counter></Counter> */}
    {/* <UseEffects></UseEffects> */}
    {/* <RestApi></RestApi> */}
    <Load></Load>
  

 









    {/* {
      
      actors.map(actor => <Person names = {actor} ></Person>)
        } */}

    {/* {
      
  actors.map(actor => <Person name = {actor} ></Person>)
    } */}
    {/* <Todu data = 'Learn react js 1 vedios' isDone= {true}></Todu>
    <Todu data = 'Learn react core conseps' isDone= {false}></Todu>
    <Todu data = 'Learn jsx js 1 vedios' isDone= {true}></Todu> */}

    </div>
  )
}

export default App

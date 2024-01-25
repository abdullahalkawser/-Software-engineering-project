import { useState,useEffect } from "react"
import Courses from "./componants/cafe/Courses"
import Addcard from "./componants/cafe/AddCart"


function App() {
  const [course,setCourse]=useState([])
  const [coursecard,setcoursecard]=useState([]);
  const [price, setprice] = useState(0);
  const [reads, setreads] = useState(0);


  // load data api from ui

  useEffect(()=>{
    fetch('course.json')
    .then(response => response.json())
    .then(data => setCourse(data))

},[])


const addcard = (newcrd)=>{
  const newarrycard = [...coursecard,newcrd]
  
  if (newarrycard.length <= 20 ) {
    setcoursecard(newarrycard)
  }
  else{
    alert('Your Course card is not avilavble')

  }
  

}


  const totalprice = prices => {
    setprice(agerPrice => (parseFloat(agerPrice) + parseFloat(prices)).toFixed(2));
  };
  
  
  const totalread = reads => {
    setreads(agerreads => (parseFloat(agerreads) + parseFloat(reads)).toFixed(2));
  };


  return(
    <div>


    <div className="  flex justify-evenly gap-5">
 
    <div className='grid grid-cols-3 gap-5 space-y-3 '>
 
      
     {

      course.map(courseData => <Courses
        totalread={totalread}
         totalprice= {totalprice} 
         addcard = {addcard}
          coursedata={courseData}></Courses>)
     }
      </div>


      <div className=" bg-slate-100   rounded-xl  mt-4 px-10 py-10">
        <div className=" space-y-3">
          <h1 className="text-3xl font-bold">Total Course: {coursecard.length}</h1>
          

          <h1 className="text-3xl font-bold">Course Name</h1>
        </div>

        {
          coursecard.map(course=> <Addcard  coursecard = {course}></Addcard>)
          
        
        }
      <hr className="border-t-2 border-slate-900 my-6" />
          <h2 className="text-xl font-semibold"> Total Price:{price}$ </h2>

<h2 className="text-xl font-semibold"> Total Reading:{reads}h </h2>

      
      </div>
 </div>
  
    </div>
  )
 

}

export default App

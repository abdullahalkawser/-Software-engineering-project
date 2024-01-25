import { useEffect, useState } from "react";
import Newdata from "./Newdata";

const RestApi = () => {
    const [countrys, setCountrys] = useState([])
    const [visitcountry, setvisitcountry] = useState([]);
    const [visitflag, setvisitflag] = useState([]);

    const visitcountryhandle = country =>{
        // console.log('visisted country')
        // console.log(country)

        const newArry = [...visitcountry,country];
        setvisitcountry(newArry)
    }

    const visitcountryflaghandle = flag =>{
        // console.log('visisted country')
        // console.log(country)

        const newArryflag = [...visitflag,flag];
        console.log(newArryflag)
        setvisitflag(newArryflag)

    }
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(json => setCountrys(json))

    },[])
    return (

        <div>
            <div>
                <ul>
                    <h1>Visited Country : {visitcountry.length}</h1>
                    {
                         // eslint-disable-next-line react/jsx-key
                        visitcountry.map (desh => <li>{desh.name.common}</li>)
                    }
                </ul>
            </div>

            <div>
    {
        // eslint-disable-next-line react/jsx-key
        visitflag.map((flag) => <img src={flag.flags.png}></img>
        )
    }
</div>
               <div className="containar">
         
        

         {
             // eslint-disable-next-line react/jsx-key
             countrys.map(country => <Newdata
                 visitcountryhandle= {visitcountryhandle}
                 visitcountryflaghandle= {visitcountryflaghandle}
                  data = {country}
                  ></Newdata>)
         }
     </div>

        </div>
     
    );
};

export default RestApi;
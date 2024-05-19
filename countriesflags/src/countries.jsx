import { useState, useEffect } from "react";

const Tile =({flagUrl,name,altFlag})=>{
    return(
        <div style={{
            display:"inline-flex",
            justifyContent:"center",
            alignItems:"center",
            margin:"10px",
            padding:"10px",
            border:"1px solid black",
            borderRadius:"8px",
            flexDirection:"row",
            width:"100x",
            height:"100px",
            flex: "1 1 0px"


        }}>
            <img src={flagUrl} alt={altFlag} style={{height:"100px",width:"100px"}}/>
            <h2>{name}</h2>
        </div>
    )
}

function Countries() {
    const API_URL= "https://restcountries.com/v3.1/all";
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
        fetch(API_URL).then((response)=>response.json()).then((data)=>setCountries(data));
    },[]);
    console.log({countries})

    return(
        <div 
        style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            height:"100vh",
            flexWrap:"wrap"
        }}
        >
           
            {(countries.map((country)=>(
                <Tile
                flagUrl={country.flags.png}
                name={country.name.common}
                altFlag={country.flags.alt}
                
                />
            )))

            }
        </div>

 );
};
export default Countries;
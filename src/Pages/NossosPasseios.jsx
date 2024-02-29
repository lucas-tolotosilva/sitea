import { useState, useEffect } from "react";
import { ref } from "firebase/storage";
import { storage, db } from "./../Firebase";
import { addDoc, collection, getDocs } from "@firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import logo from './../img/logo.png'

export function NossosPasseios() {
  const [data,setData] = useState([])

  const getData = async () =>{
    const valRef = collection(db,'db')
    const dataDb = await getDocs(valRef)
    console.log(dataDb)
    const allData = dataDb.docs.map(val=>({...val.data(),id:val.id}))
    setData(allData)
    
}

useEffect(()=>{
    getData()
})

  return (
    <div>
      {
        data.map(item=><div>
          <div>{item.nome}</div>
          <div>{item.local}</div>
          <div>{item.instituicao}</div>
          <div><img src={item.imageUrls[0]} /></div>
        </div>)
      }
    </div>
  );
}

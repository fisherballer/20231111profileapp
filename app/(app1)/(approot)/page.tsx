"use client";

import Headbar from "./components/headbar"
import Footbar from './components/footbar';



import Records from './personaldata/data.json'
import Link from "next/link";


interface Persons {
  Name: string,
  Birth: string,
  Email: string,
  Address: string,
  Description: string,
  Website: string
}

export default function App (){
  const persons:Persons = Records
  const {Name, Birth, Email, 
    Address, Description, Website} 
    = persons
  return (
    <>
        
        <div>
              <Headbar />
        </div>      
        <div className="w-1/2 min-w-[300px] justify-between flex mx-auto" >
                <Link className='aboutme' href="/aboutfetching">Fetching</Link>
                <Link className='aboutme' href="/about">About</Link>
        </div>
       {<div className="corepart">
          <div className='
                w-[450px] flex-col 
                text-left  
                divide-dash 
                divide-y-2
                divide-slate'>
            <div><b className=" text-slate-900 px-3">Name  :</b>{Name}</div>
            <div><b className=" text-slate-900 px-3">Birth  :</b>{Birth}</div>
            <div><b className=" text-slate-900 px-3">Email  :</b>{Email}</div>
            <div><b className=" text-slate-900 px-3">Address :</b>{Address}</div>
            <div><b className=" text-slate-900 px-3">Description:</b>{Description}</div>
            <div><b className=" text-slate-900 px-3">Website  :</b>{Website}</div>
          </div>
        </div>
        }
         <Footbar />
    </>
) 
}



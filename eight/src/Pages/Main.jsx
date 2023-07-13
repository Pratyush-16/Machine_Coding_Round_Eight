import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'

function Main() {

    const{data} = useContext(DataContext)
    console.log(data)


  return (
    <div>
        <h1 className="text-2xl text-[red] text-left mt-4">Meetup</h1>
      
        <hr/>

        <div className='header'>
            <h2 className='text-left  text-2xl font-bold '>Meetup Events</h2>

            <select name="Events" >
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                <option value="Both">Both</option>
                
            </select>

        </div>

        <div>
            {data.map((events)=> {
                
            })}
        </div>

        
      
    </div>
  )
}

export default Main

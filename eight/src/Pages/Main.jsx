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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.map((events)=> 
            
            <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <img className="w-full" src={events.eventThumbnail} alt={events.title} />
            <div className="px-6 py-4">

            <p>Date: {events.eventStartTime}</p>
              <h2 className="font-bold text-xl mb-2">{events.title}</h2>
              
              </div>
              
          </div>
            )}
        </div>

        
      
    </div>
  )
}

export default Main

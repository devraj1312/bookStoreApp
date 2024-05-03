import React from 'react'
import Cards from './Cards';
import list from '../../public/list.json'
import {Link} from 'react-router-dom'

function Course() {
  return (<>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='pt-28 item-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>We're delighted to have you{" "}
        <span className='text-pink-500'>Here! :)</span></h1>
        <p className='mt-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe amet voluptate voluptates, atque consequuntur cupiditate totam! Architecto accusantium natus, eius rem quaerat aspernatur quod voluptates.</p>
        <Link to='/'>
        <button href="./Home" className="btn mt-6 px-6 btn-secondary">Back</button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {list.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))}
      </div>
    </div>
  </>)
}

export default Course
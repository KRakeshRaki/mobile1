import React from 'react'
import {Link} from 'react-router-dom';

const Calculator = () => {
  return (
    <div>
         <form className='camhole'>o
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br />
         <h2>Hello! this is calculator </h2>
        
       <br /><br /><br /><br /><br /><br /><br /><br />
        
      <footer><pre ><button className='button0'>  ...  </button>
      <Link to='/home'>
      <button className='button0'> Home </button>
      </Link>
      <Link to='/home'>
      <button className='button0'>   ~   </button>
      </Link>
      </pre></footer>
      </form>
    </div>
  )
}

export default Calculator
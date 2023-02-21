import React from 'react'
import AudiBtn from '../components/Audi/AudiBtn'
import NavigationBar from '../components/layouts/NavigationBar' 


const Audi = () => {
  return (

      <div className='d-flex justify-content-center mt-5'>

        <div className='me-5'>
  <img
            src="./images/poster/ant-man.jpeg"
            alt=""
            style={{ width: "330px",}}
          />
 <p className='text-white mt-2 text-center'>ANT-MAN WASP QUANTUMANIA</p>
        </div>
        <div className='ms-5'>
        <h2 className='text-white'>Book audi</h2>
      <div className='d-flex'>
        <AudiBtn audi="AUDI #1"/>
        <AudiBtn audi="AUDI #2"/>
        <AudiBtn audi="AUDI #3"/> 
    </div>
        <AudiBtn audi="AUDI #4"/>
        <AudiBtn audi="AUDI #5"/>
        <AudiBtn audi="AUDI #6"/>
    </div>
    </div>
  )
}
export default Audi
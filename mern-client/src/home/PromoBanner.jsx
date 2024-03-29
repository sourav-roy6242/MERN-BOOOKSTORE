import React from 'react'
import { Link } from 'react-router-dom'
// import anu from "../assets/banner-books/Anu.png"
import bookpic from "../assets/banner-books/awardbooks.png"
// import ab from "../assets/banner-books/anu2.jpg"
const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
          <div className='md:w-1/2'>
                 <h2 className='text-4xl font-bold mb-6 leading-snug'>
                     2024 National Book Awards for Friction Shortlist
                 </h2>
                  <Link to="/shop" className='mt-8 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Get Promo Code</button></Link>
          </div>
          <div>
                 <img src={bookpic} alt="" className='w-60 z-20'/>          
                {/* <img src={anu} alt="" className='h-40 w-38 z-0 px-10 ' onMouseOver={ab }/> */}
          </div>
        </div>
     </div>
    
  )
}

export default PromoBanner


// import React from 'react';
// import { Link } from 'react-router-dom';
// import Anu from '../assets/banner-books/Annyasha.png';

// const PromoBanner = () => {
//   return (
//     <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
//       <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
//           <div className='md:w-1/2'>
//                  <h2 className='text-4xl font-bold mb-6 leading-snug'>
//                      2024 National Book Awards for Friction Shortlist
//                  </h2>
//                   <Link to="/shop" className='mt-8 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Get Promo Code</button></Link>
//           </div>
//           <div>
//                 <img src={Anu} alt="Promo Banner" className='w-96' onError={(e) => { e.target.onerror = null; e.target.src = '/placeholder-image.jpg' }} />
//           </div>
//         </div>
//      </div>
//   );
// };

// export default PromoBanner;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const PromoBanner = () => {
//   return (
//     <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
//       <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
//           <div className='md:w-1/2'>
//                  <h2 className='text-4xl font-bold mb-6 leading-snug'>
//                      2024 National Book Awards for Fiction Shortlist
//                  </h2>
//                   <Link to="/shop" className='mt-8 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Get Promo Code</button></Link>
//           </div>
//           <div>
//                 <img src={Anu} alt="Annyasha Banner" className='w-96' onError={(e) => { e.target.onerror = null; e.target.src = '/placeholder-image.jpg' }} />
//           </div>
//         </div>
//      </div>
//   );
// };

// export default PromoBanner;



// import { useEffect, useState } from "react"
// export default function Test () {
//     useEffect(() => {
//     const handleScroll = () => {
//       console.log('User has scrolled');
//       // Perform your actions based on scroll
//     };
    
//     window.addEventListener('scroll', handleScroll);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [])
//     return (
//     <></>
//     )
// }

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center gap-x-12">
      <button onClick={() => setCount((count) => count + 1)} className="px-4 py-2 text-white bg-indigo-600 rounded-md">
        Increment
      </button>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count - 1)} className="px-4 py-2 text-white bg-red-600 rounded-md">
        Decrement
      </button>
    </div>
  );
}
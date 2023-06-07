
import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
   useEffect(() => {
    const handleScroll = (e) => {
      console.log(e);
      // Perform your actions based on scroll
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener("wheel", function(event) {
  // Check scroll direction
  if (event.deltaY > 0) {
    // Scrolled down
    console.log("Scrolled down");
    // Perform your actions for scrolling down
  } else {
    // Scrolled up
    console.log("Scrolled up");
    // Perform your actions for scrolling up
  }
  });



    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
 
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
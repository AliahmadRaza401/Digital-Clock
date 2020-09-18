import React, {useState} from 'react';


const Clock = () => {
  
  let newTime = new Date().toLocaleTimeString();
  
  const [cTime, updTime] = useState(newTime);
  
  const Incnum = () => {
    console.log("clicked");
     newTime = new Date().toLocaleTimeString();
     updTime(newTime);
  };
   
  setInterval(Incnum , 1000);
    
  return (
    <div>
      <h1 className="timer"> {cTime} </h1>
    </div>
  );
};

export default Clock;  
import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Loading..');

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
        console.log(progress);
      } else {
        clearInterval(interval);
        setStatus('Complete');
      }
    }, 100);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div style={{
        display:'flex',
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center',
        flexDirection:'column'
    }}
    >
        <div>
            <div>
                <h2>Progress Bar</h2>
            </div>
      
      <div style={{ width: '400px', border: '1px solid #ccc', borderRadius: '4px', marginTop: '20px',textAlign:'center',display:'flex'}}>
        
        <div
          style={{
            width: `${progress}%`,
            height: '20px',
            backgroundColor: '#4caf50',
            borderRadius: '4px',
            transition: 'width 0.5s ease-in-out',
          }}
        />
      </div>
      <div>
      <p style={{
            
            marginTop:'-22px'
            
            
        }}>{progress}%</p>
      </div>
      <h2>{status}</h2></div>
      </div>
      
   
  );
};

export default ProgressBar;

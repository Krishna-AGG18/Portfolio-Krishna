import { useEffect, useState } from 'react';
import './App.css';
import { Home, Onload } from './components/index.js';

function App() {
  const [onLoadAnimation, setOnLoadAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOnLoadAnimation(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup to prevent memory leaks
  }, []); // Empty dependency array to run only once

  return (
    <>
      {onLoadAnimation ? 
        <Onload /> :
        <Home />
      }
    </>
  );
}

export default App;
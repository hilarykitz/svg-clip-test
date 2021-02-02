import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import { container, footer, secretImage, circle } from '../styles/Home.module.css';
import { getRandomInt } from '../utils/getRandomInt';

export default function Home() {
  const [clip, setClip] = useState(0);
  const [clip2, setClip2] = useState(0);
  const [clip3, setClip3] = useState(0);
  const [clip4, setClip4] = useState(0);
  const [polyPonies, setPolyPonies] = useState(0);

  const someBullshit = () => {
    let randomPoints = '';

    for (let i = 0; i < 20; i++) { 
      randomPoints += (getRandomInt(0, 800) + ' ');
    }
    setPolyPonies(randomPoints);

  }
  
  useEffect(() => {
    const doMadness = () => setInterval(() => {      
      setClip(getRandomInt(10, 800));
      setClip2(getRandomInt(10, 800));
      setClip3(getRandomInt(10, 800));
      setClip4(getRandomInt(10, 800));
      someBullshit();
    }, getRandomInt(300, 1000));

    doMadness();

    () => {
      clearInterval(doMadness);
    }
  }, []);

  return (
    <div className={container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={secretImage}>
          <svg width="0" height="0">
            <defs>
              <clipPath id="clip-svg">
                <circle className={circle} cx={clip} cy={clip2} r={0.3 * getRandomInt(0, clip2)} />
                <circle className={circle} cx={clip3} cy={clip4} r={0.2 * getRandomInt(0, clip4)} />
                    
                <polyline className={circle} points={polyPonies || "0 20 50 80"} id="polypoints"></polyline>
              </clipPath>
            </defs>
          </svg>
            
          </div>
      </main>

      <footer className={footer} />
    </div>
  )
}

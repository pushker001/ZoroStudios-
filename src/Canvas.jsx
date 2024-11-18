import React, { useEffect, useRef, useState} from 'react'
import canvasimage from './canvasimage'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Canvas = ({details}) => {
    const canvasRef = useRef(null);
    const [index, setIndex] = useState({value: details.startIndex});


    useGSAP(() => {
        gsap.to(index, {
            value: details.startIndex + details.numImages - 1,
            duration: details.duration,
            repeat: -1,
            ease: 'linear',
            onUpdate: () => {
                setIndex({value: Math.round(index.value)})  
            }
        })


    })

    useEffect(() => {
        const scale = window.devicePixelRatio;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        const img = new Image();
        img.src = canvasimage[index.value];
        
        img.onload = () => {
            canvas.width = canvas.offsetWidth * scale;
            canvas.height = canvas.offsetHeight * scale;
            ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
            
        };
        
    }, [index])
    
  return (
    <canvas ref={canvasRef}
    data-scroll
    data-scroll-speed={
        Math.random().toFixed(1)
    }
    className='absolute'
    style={{width: `${details.size * 1.7}px`, height: `${details.size * 1.7}px`, top: `${details.top}%`, left: `${details.left}%`, zIndex: details.zIndex}}
    >

    </canvas>
  )
}

export default Canvas
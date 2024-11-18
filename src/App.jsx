import React, { useEffect, useRef } from 'react'
import Canvas from './Canvas'
import data from './data'
import LocomotiveScroll from 'locomotive-scroll'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const App = () => {
  const growingSpan = useRef(null)
  const clickref = useRef(null)
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll()
  }, [])

useGSAP(() => {
  clickref.current.addEventListener('click', (e) => {
    gsap.set(growingSpan.current, {
      top: e.clientY,
      left: e.clientX,
    })

    gsap.to(growingSpan.current, {
      scale: 1000,
      duration: 2,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.set(growingSpan.current, {
          scale: 0,
          clearProps: 'all'
        })
      }
      
      
    })
  })

  

})


  return (
    <>
    <span
    ref={growingSpan}
    className='growing block rounded-full fixed left-0 top-0 block w-5 h-5'
    ></span>

    <div className="bg-black">

      
      <div className="w-full min-h-screen text-white font-[Helvetica_Now_Display]">
        {data[0].map((canvasdets, index) => (
          <Canvas details={canvasdets} key={index} />
        ))}

        <div className="w-full h-screen">
          <nav className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-black/50 backdrop-blur-sm">
            <div className="text-2xl font-bold">ZoroStudios</div>
            <ul className="hidden md:flex gap-8">
              <li><a href="#" className="hover:text-gray-300 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Contact</a></li>
            </ul>
          </nav>

          <div className="flex flex-col justify-center h-full px-6 md:px-20">
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl leading-relaxed">
                Crafting digital experiences that push boundaries and inspire innovation.
              </h3>
              <p  className="mt-8 text-lg font-normal leading-relaxed text-gray-300">
                We transform bold ideas into captivating digital experiences. With cutting-edge design and flawless execution, we create solutions that make your brand stand out in the digital landscape.
              </p>
              <p ref={clickref} className="mt-8 text-sm uppercase tracking-widest animate-bounce">Click me</p>
            </div>
            <h1 className="absolute bottom-0 left-0 w-full text-center text-[8rem] md:text-[17rem] font-normal tracking-tight leading-none opacity-50">
              zorostudios
            </h1>
          </div>
        </div>
      </div>

      <div className="relative w-full min-h-screen text-white">
        {data[1].map((canvasdets, index) => (
          <Canvas details={canvasdets} key={index} />
        ))}

        <div className="container mx-auto px-6 py-32">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl tracking-tighter">About the brand</h1>
            <p className="text-xl md:text-2xl leading-relaxed mt-10 font-light max-w-4xl">
              We are a creative studio dedicated to transforming ideas into immersive digital realities. 
              Through cutting-edge technology and innovative design, we create memorable experiences that leave a lasting impact. 
              Our passion lies in pushing the boundaries of what's possible in the digital realm, crafting solutions that not only meet
              but exceed expectations.
            </p>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="group transform hover:scale-105 transition-all duration-700 p-8 rounded-lg bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-purple-500/20 animate-fade-slide-up cursor-pointer active:bg-purple-800/50 hover:bg-purple-700/30">
                <h3 className="text-2xl font-semibold mb-4 animate-fade-in animate-bounce-subtle group-hover:text-purple-300 transition-colors">Our Vision</h3>
                <p className="text-lg leading-relaxed text-gray-300 animate-fade-in-delay group-hover:text-white transition-colors">
                  To revolutionize digital experiences through innovative design and cutting-edge technology, setting new standards in the creative industry.
                </p>
                <div className="w-0 h-1 bg-purple-500 group-hover:w-full transition-all duration-500 mt-4"></div>
              </div>
              
              <div className="group transform hover:scale-105 transition-all duration-700 p-8 rounded-lg bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-blue-500/20 animate-fade-slide-up delay-200 cursor-pointer active:bg-blue-800/50 hover:bg-blue-700/30">
                <h3 className="text-2xl font-semibold mb-4 animate-fade-in animate-bounce-subtle group-hover:text-blue-300 transition-colors">Our Approach</h3>
                <p className="text-lg leading-relaxed text-gray-300 animate-fade-in-delay group-hover:text-white transition-colors">
                  We blend artistry with technology, creating seamless experiences that captivate and inspire. Every project is an opportunity to push boundaries.
                </p>
                <div className="w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500 mt-4"></div>
              </div>
            </div>

            <div className="mt-20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="group w-full md:w-1/3 text-center p-6 transform hover:translate-y-[-10px] transition-all duration-700 bg-gradient-to-t from-indigo-900/20 to-purple-900/20 rounded-xl border border-white/5 shadow-lg hover:shadow-indigo-500/20 animate-fade-slide-up delay-300">
                  <h4 className="text-3xl font-bold mb-2 animate-pulse group-hover:text-indigo-300">100+</h4>
                  <p className="text-gray-400 group-hover:text-white transition-colors">Projects Completed</p>
                  <div className="w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-500 mt-4 mx-auto"></div>
                </div>
                
                <div className="group w-full md:w-1/3 text-center p-6 transform hover:translate-y-[-10px] transition-all duration-700 bg-gradient-to-t from-purple-900/20 to-blue-900/20 rounded-xl border border-white/5 shadow-lg hover:shadow-purple-500/20 animate-fade-slide-up delay-400">
                  <h4 className="text-3xl font-bold mb-2 animate-pulse group-hover:text-purple-300">50+</h4>
                  <p className="text-gray-400 group-hover:text-white transition-colors">Happy Clients</p>
                  <div className="w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-500 mt-4 mx-auto"></div>
                </div>
                
                <div className="group w-full md:w-1/3 text-center p-6 transform hover:translate-y-[-10px] transition-all duration-700 bg-gradient-to-t from-blue-900/20 to-indigo-900/20 rounded-xl border border-white/5 shadow-lg hover:shadow-blue-500/20 animate-fade-slide-up delay-500">
                  <h4 className="text-3xl font-bold mb-2 animate-pulse group-hover:text-blue-300">5+</h4>
                  <p className="text-gray-400 group-hover:text-white transition-colors">Years Experience</p>
                  <div className="w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-500 mt-4 mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-slide-up {
            from { 
              opacity: 0;
              transform: translateY(40px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes bounce-subtle {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }
          .animate-fade-in-delay {
            animation: fade-in 1s ease-out 0.3s forwards;
            opacity: 0;
          }
          .animate-fade-slide-up {
            animation: fade-slide-up 1s ease-out forwards;
            opacity: 0;
          }
          .animate-bounce-subtle {
            animation: bounce-subtle 2s ease-in-out infinite;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }
          .delay-300 {
            animation-delay: 0.3s;
          }
          .delay-400 {
            animation-delay: 0.4s;
          }
          .delay-500 {
            animation-delay: 0.5s;
          }
        `}</style>
      </div>

      <div className="relative w-full min-h-screen text-white ">
        {data[0].map((canvasdets, index) => (
          <Canvas details={canvasdets} key={index} />

        ))}
        
        <div className="w-full py-20 px-4 md:px-8 bg-gradient-to-b from-transparent to-black/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-slide-up">
              Let's Connect
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="animate-fade-slide-up delay-200">
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-white/40 transition-colors"
                    ></textarea>
                  </div>
                  <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>

              <div className="space-y-6">
                <div className="animate-fade-slide-up delay-300">
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <a href="pushkarpandai76@gmail.com" className="text-white/80 hover:text-white transition-colors">
                    contact@example.com
                  </a>
                </div>
                
                <div className="animate-fade-slide-up delay-400">
                  <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white/80 hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="text-white/80 hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="text-white/80 hover:text-white transition-colors">Instagram</a>
                  </div>
                </div>
                
                <div className="animate-fade-slide-up delay-500">
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-white/80">
                    San Francisco, CA<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App
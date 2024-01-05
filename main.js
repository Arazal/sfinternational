// import { gsap } from "gsap";
    
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger);

const btn1 = document.querySelector('.btn-getstarted')

btn1.addEventListener('click', () => {
  // console.log('clicked')
  gsap.to(window, { duration: 4, scrollTo: { y: '.btn-scrollto', offsetY: 150 } });
  // gsap.to('.btn-scrollto', { duration: 2, scrollTo: { y: 400 }, ease: "power2" });
})




ScrollTrigger.create({
  // markers: true,
  start: 'top 6%',
  trigger: '.container',
  toggleClass: {targets: 'nav', className: 'nav-active'},
  // toggleClass: {targets: 'body', className: 'nav-active'}
})


gsap.to('.coverage', {color: '#c8102e',ease: 'Power0.easeInOut', scrollTrigger: {
  trigger: '.coverage',
              start: 'top 80%', // Adjust the starting point as per your requirement
              end: 'top 20%', // Adjust the ending point as per your requirement
              scrub: true, // Enables scrubbing effect
              
              // markers: true,
}})
gsap.to('.box-product', {color: '#2d2926', backgroundColor:'#eca154', ease: 'Power0.easeInOut', scrollTrigger: {
  trigger: '.box-product',
              start: 'top 80%', // Adjust the starting point as per your requirement
              end: 'top 20%', // Adjust the ending point as per your requirement
              scrub: true, // Enables scrubbing effect
              
              // markers: true,
}})

gsap.to('.sfcoverage', {color: 'white', backgroundColor: '#2d2926', opacity:0.8, scrollTrigger: {
  trigger: '.coverage',
              start: 'top 80%', // Adjust the starting point as per your requirement
              end: 'top 20%', // Adjust the ending point as per your requirement
              scrub: true, // Enables scrubbing effect
              
              // markers: true,
}})




gsap.set('#nav-plane', { opacity: 0, x: -400})
gsap.to('#nav-plane', {
  opacity:1,
  scale:1.1,
  x:0,
  duration: 3,
  ease: 'Power0.easeInOut'
})
gsap.set('#nav-plane', { scale: 1})
gsap.to('#logo', {
  rotation:360,
  duration: 3,
  ease: 'Power0.easeInOut'
})

gsap.to('.api', {rotate: 360, scrollTrigger: {
  trigger: '.api',
              start: 'top 80%', // Adjust the starting point as per your requirement
              end: 'top 20%', // Adjust the ending point as per your requirement
              scrub: true, // Enables scrubbing effect
              // markers: true,
}})
gsap.to('.warehouse1', {scale: 1.2, scrollTrigger: {
  trigger: '.warehouse1',
              start: 'top 80%', // Adjust the starting point as per your requirement
              end: 'top 20%', // Adjust the ending point as per your requirement
              scrub: true, // Enables scrubbing effect
}})

gsap.set('.sf-car1', { opacity: 0, x: 400})
gsap.to('.sf-car1', { x: 0, opacity: 1, scrollTrigger: {
  trigger: '.sf-car1',
              start: 'top 80%', // Adjust the starting point as per your requirement
              end: 'top 20%', // Adjust the ending point as per your requirement
              scrub: true, // Enables scrubbing effect
             
}})
gsap.to('.warehouse2', {scale: 1.2, scrollTrigger: {
  trigger: '.warehouse2',
              start: 'top 80%', // Adjust the starting point as per your requirement
              end: 'top 20%', // Adjust the ending point as per your requirement
              scrub: true, // Enables scrubbing effect
}})

gsap.set('.plane1', { opacity: 0, x: -400})
gsap.to('.plane1', { x: 0, opacity: 1, scrollTrigger: {
  trigger: '.plane1',
              start: 'top 80%', // Adjust the starting point as per your requirement
              end: 'top 20%', // Adjust the ending point as per your requirement
              scrub: true, // Enables scrubbing effect
             
}})
gsap.set('.sf-car2', { opacity: 0, x: 400})
gsap.to('.sf-car2', { x: 0, opacity: 1, scrollTrigger: {
  trigger: '.sf-car2',
              start: 'top 80%', // Adjust the starting point as per your requirement
              end: 'top 20%', // Adjust the ending point as per your requirement
              scrub: true, // Enables scrubbing effect
             
}})
gsap.set('.plane2', { opacity: 0, x: -400})
gsap.to('.plane2', { x: 0, opacity: 1, scrollTrigger: {
  trigger: '.plane2',
              start: 'top 80%', // Adjust the starting point as per your requirement
              end: 'top 20%', // Adjust the ending point as per your requirement
              scrub: true, // Enables scrubbing effect
             
}})


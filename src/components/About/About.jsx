import React from 'react'
import AboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <>
    <section>
        <div className='container'>
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                {/* about img */}
                <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                    <img src={AboutImg} alt="" />
                    <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[7%] lg:right-[22%]">
                        <img src= {aboutCardImg} alt="" />
                    </div>
                </div>

                {/* about content */}
                <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2"> 
                <h2 className='heading'>Proud to be one of the nation best</h2>
                <p className='text__para '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quibusdam vitae, perspiciatis hic suscipit vel quis, error laborum numquam aliquid asperiores nam nobis possimus voluptatum nisi impedit, ut voluptatibus facere. Debitis doloribus aliquid ad!</p>
                <p className='text__para'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum praesentium odio voluptatibus, assumenda culpa eligendi atque ut velit at consectetur, temporibus mollitia aperiam ipsam impedit alias commodi! Totam beatae itaque voluptatem unde porro dolorum nihil, temporibus iure dolor obcaecati voluptate?
                </p>
                <Link to='/'><button className="btn">Learn More</button></Link>
                </div>

              
                
            </div>
        </div>
    </section>
    
    </>
  )
}

export default About
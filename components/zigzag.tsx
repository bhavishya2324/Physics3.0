import Image from 'next/image'

import studentsimg from '@/public/images/students1.jpg'
import Sirimg1 from '@/public/images/siring2.jpg'
import Sirimg2 from '@/public/images/sirimg3.jpg'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Telegram</div>
            <h1 className="h2 mb-4">Join Our Telegram Channel</h1>
           
            

            <div data-aos="fade-up" data-aos-delay="600">
                <a className="btn text-white bg-purple-600 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="https://telegram.me/AbhisheksahusirPhysics">Telegram</a>
              </div>

          </div>
          

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={studentsimg} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Learn with Us</div>
                  <h3 className="h3 mb-3">Igniting Curiosity: Your Physics Journey Begins</h3>
                  <p className="text-xl text-gray-400 mb-4">

Dear students, welcome to the fascinating world of physics! This subject is not just about equations; it's a journey into understanding the very fabric of our universe. Each formula you grasp is a key unlocking the door to knowledge and innovation.</p>
                 
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Sirimg1} width={540} height={305} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"> Physics Frontier</div>
                  <h3 className="h3 mb-3">The Physics Frontier: Unleash Your Potential</h3>
                  <p className="text-xl text-gray-400 mb-4">as we embark on our exploration of physics, envision this journey as a thrilling expedition into the unknown. Physics is more than a subject; it's an adventure that unveils the secrets of the universe. </p>
                 
                </div>
              </div>
            </div>

           

          </div>

        </div>
      </div>
    </section>
  )
}

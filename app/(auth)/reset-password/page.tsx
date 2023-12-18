import Image from 'next/image'
import abhishersirimg from '@/public/images/abhisheksir001-20230704-0002.jpg'


export const metadata = {
  title: 'About - Physics',
  description: 'Page description',
}

import Link from 'next/link'

export default function ResetPassword() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h2 mb-4">ABHISHEK SAHU SIR</h1>
            <p className="text text-gray-400">PHYSICS | ENGLISH | MOTIVATION | GUIDANCE </p>
          </div>

        {/* 1st item */}
        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={abhishersirimg} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Loved by 600k+ Students</div>
                  {/* <h3 className="h3 mb-3">With 6+ year experience</h3> */}
                  <p className="text-xl text-gray-200 mb-4">Meet your amazing physics teacher and YouTuber , Abhishek sahu sir! With over 5 lakhs subscribers and counting, our channel has become a go-to resource for students, teachers, and physics enthusiasts around the world.</p>
                 
                </div>
              </div>
            </div>


          {/* Form */}
          {/* <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="you@yourcompany.com" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Reset Password</button>
                </div>
              </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
              <Link href="/signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Cancel</Link>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  )
}

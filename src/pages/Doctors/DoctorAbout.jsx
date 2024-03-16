import React from 'react'
import {formateDate} from '../../utils/formateDate'

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2' >
                About Of
                <span className=' text-irisBlueColor font-bold text-[24px] leading-9'>
                    Vikrant Mainwal
                </span>
            </h3>
            <p className='text__para'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ipsum. Odio veniam illum quaerat, ab eligendi odit voluptatibus quod animi id atque, ipsum omnis numquam blanditiis culpa laboriosam aspernatur suscipit molestias amet voluptate nisi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem perferendis eaque debitis molestias?
            </p>
        </div>
        <div className="mt-12">
            <h3 className=" text-[20px] leading-[30px] text-headingColor font-semibold"
            >
                Education
            </h3>
            <ul className=" pt-4 md:p-5">
                <li className=" flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className=" text-irisBlueColor text-[15px] leading-6 font-semibold">
                            {formateDate('07-04-2010')}</span>
                       <p className=' text-[16px] leading-6 font-medium to-textColor'> PhD in surgeon</p>
                    </div>
                       <p className=' text-[14px] leading-6 font-medium to-textColor'> Hospital</p>  
                </li>
                <li className=" flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className=" text-irisBlueColor text-[15px] leading-6 font-semibold"> {formateDate('07-04-2017')}</span>
                       <p className=' text-[16px] leading-6 font-medium to-textColor'> PhD in surgeon</p>
                    </div>
                       <p className=' text-[14px] leading-6 font-medium to-textColor'> Hospital</p>  
                </li>
            </ul>
        </div>
    </div>
  )
}

export default DoctorAbout
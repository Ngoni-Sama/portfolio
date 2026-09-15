import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import EditableImage from './EditableImage';
import Title from './Title';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <Title title='Contact' sub='Get In Touch' />
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <EditableImage
                  id='contact'
                  src='/assets/contact.jpg'
                  alt='Ngoni Maphosa'
                  className='w-full'
                  imgClassName='rounded-xl w-full h-auto object-cover hover:scale-105 ease-in duration-300'
                />
              </div>
              <div>
                <h2 className=' mt-8 text-slate-700'>Ngoni Maphosa</h2>
                <p className=' text-slate-600'>Full-Stack Engineer</p>
                <p className='py-4 text-slate-600'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
                <div className='text-slate-600'>
                  <p className='py-1'>
                    <span className='font-semibold'>Phone: </span>
                    <a href='tel:+263773716074' className='hover:underline'>0773 716 074</a>
                  </p>
                  <p className='py-1'>
                    <span className='font-semibold'>WhatsApp: </span>
                    <a
                      href='https://wa.me/263773716074'
                      target='_blank'
                      rel='noreferrer'
                      className='text-green-600 hover:underline'
                    >
                      Message me on WhatsApp
                    </a>
                  </p>
                  <p className='py-1'>
                    <span className='font-semibold'>Email: </span>
                    <a href='mailto:ngonidzashemaphosa@outlook.com' className='hover:underline'>
                      ngonidzashemaphosa@outlook.com
                    </a>
                  </p>
                  <p className='py-1'>
                    <a href='mailto:ngara.maphosa@gmail.com' className='hover:underline'>
                      ngara.maphosa@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <p className='uppercase text-slate-600 pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/ngonidzashe-maphosa-737078138/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/Ngoni-Sama'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>

                  <a href='mailto:ngonidzashemaphosa@outlook.com'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <AiOutlineMail />
                    </div>
                  </a>
                  <Link href='/resume'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              {/* TODO: replace this getform.io endpoint with your own — this one belongs to the original template author, so submissions would go to them. */}
              <form
                action='https://getform.io/f/YOUR_FORM_ENDPOINT'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 font-semibold mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp
                className='text-[#5651e5]'
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

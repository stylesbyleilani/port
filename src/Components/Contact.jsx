








import React, { useState } from 'react';
import { LocateFixedIcon, MailIcon, PhoneCallIcon } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const ContactInfo = [
    {
      icon: <PhoneCallIcon />,
      text: '+2347015910621',
      type: 'phone'
    },
    {
      icon: <MailIcon />,
      text: 'mustaphaadeola948@gmail.com',
      type: 'email'
    },
    {
      icon: <LocateFixedIcon />,
      text: 'Lagos, Nigeria',
      type: 'location'
    }
  ];

  return (
    <section 
      id='contact' 
      className='bg-black text-gray-300 py-16 px-4 sm:px-6 md:px-12 lg:px-24'
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Information Section */}
          <div className="space-y-8">
            <div>
              <h1 className='text-3xl md:text-4xl font-bold mb-2'>
                Have an awesome project idea?
              </h1>
              <p className='text-xl text-emerald-500'>Let's Discuss</p>
            </div>

            <div className="space-y-6">
              {ContactInfo.map((contact, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-5 group"
                >
                  <div className="
                    p-4 rounded-full 
                    bg-white text-black 
                    group-hover:bg-black 
                    group-hover:text-white 
                    transition-colors duration-300
                  ">
                    {contact.icon}
                  </div>
                  <a 
                    href={
                      contact.type === 'phone' ? `tel:${contact.text}` : 
                      contact.type === 'email' ? `mailto:${contact.text}` : 
                      '#'
                    } 
                    className="text-lg text-emerald-500 hover:underline"
                  >
                    {contact.text}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-neutral-900 p-6 md:p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
                { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Enter subject' }
              ].map((field) => (
                <div key={field.id} className="flex flex-col">
                  <label 
                    htmlFor={field.id} 
                    className="mb-2 text-gray-200 text-sm"
                  >
                    {field.label}
                  </label>
                  <input 
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.id]}
                    onChange={handleChange}
                    required
                    className="
                      w-full p-3 
                      bg-neutral-800 
                      text-gray-200 
                      rounded-md 
                      focus:ring-2 
                      focus:ring-emerald-500 
                      outline-none 
                      transition-all 
                      duration-300
                    "
                  />
                </div>
              ))}

              <div className="flex flex-col">
                <label 
                  htmlFor="message" 
                  className="mb-2 text-gray-200 text-sm"
                >
                  Message
                </label>
                <textarea 
                  id="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="
                    w-full p-3 
                    bg-neutral-800 
                    text-gray-200 
                    rounded-md 
                    focus:ring-2 
                    focus:ring-emerald-500 
                    outline-none 
                    transition-all 
                    duration-300
                  "
                />
              </div>

              <button 
                type="submit"
                className="
                  w-full md:w-auto 
                  py-3 px-8 
                  bg-emerald-500 
                  text-white 
                  font-semibold 
                  rounded-md 
                  hover:bg-emerald-600 
                  transition-colors 
                  duration-300 
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-emerald-500 
                  focus:ring-opacity-50
                "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
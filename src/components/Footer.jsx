import React from 'react';
import { BsEnvelope, BsPhone, BsFacebook, BsWhatsapp } from 'react-icons/bs';

function FooterCom() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bottom-0 left-0 w-full bg-gray-300 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="md:text-right lg:text-left">
            {/* <h2 className="text-sm font-semibold mb-1">Contact Us</h2> 
             <p className="text-xs text-gray-500 mb-1"><BsEnvelope className="inline-block mr-1" /> support@example.com</p> 
           <p className="text-xs text-gray-500"><BsPhone className="inline-block mr-1" /> +1234567890</p> */}
          </div>

          {/* <h2 className="text-sm font-semibold mb-1">Follow Us</h2> 
            <div className="flex items-center space-x-2"> 
              <a href="#" className="text-xs text-gray-500 hover:text-gray-700" title="Facebook"><BsFacebook /></a>
              <a href="#" className="text-xs text-gray-500 hover:text-gray-700" title="Whatsapp"><BsWhatsapp /></a> 
            </div>*/}

        </div>
        <div className="mt-2 text-center text-xs text-gray-500">
          <h1>
            <a href="/contact" className="text-sm font-semibold mb-1">Contact Us</a>
          </h1>
          <a href="/privacy" className="mb-1">Privacy Policy</a>
          <p>&copy;{currentYear} Careerlets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterCom;

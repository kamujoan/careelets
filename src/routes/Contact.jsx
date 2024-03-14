import React from 'react';
import { db } from '../firebase.config'; // Correct the path as per your project structure

function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    try {
      await db.collection('contact').add({
        name,
        email,
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred while sending your message. Please try again later.');
    }

    // Clear form fields
    e.target.reset();
  };


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Our Information</h2>
          <div className="flex items-center mb-2">
            
          </div>
          <div className="flex items-center mb-2">
            <svg className="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1a9 9 0 0 1 9 9c0 5.488-4.484 9-9 9-4.512 0-9-3.512-9-9a9 9 0 0 1 9-9zm-1 2a7 7 0 0 0-7 7c0 3.866 3.134 7 7 7s7-3.134 7-7a7 7 0 0 0-7-7zM8 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" clipRule="evenodd"></path></svg>
            <span className="text-gray-700">careerlets@yahoo.com</span>
          </div>
          <div className="flex items-center mb-2">
            <svg className="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1a9 9 0 0 1 9 9c0 5.488-4.484 9-9 9-4.512 0-9-3.512-9-9a9 9 0 0 1 9-9zm-1 2a7 7 0 0 0-7 7c0 3.866 3.134 7 7 7s7-3.134 7-7a7 7 0 0 0-7-7zM8 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" clipRule="evenodd"></path></svg>
            <span className="text-gray-700"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

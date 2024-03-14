import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar'; // Import the Navbar component
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from './firebase.config';
import FooterCom from './components/Footer';
import JobListPage from './components/JobCard/JobListPage';
import Details from './routes/Details';
import Privacy from './routes/Privacy';
import Contact from './routes/Contact';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const fetchJobs = async () => {
    const tempJobs = [];
    const jobsRef = collection(db, "jobs");
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);
    
    req.forEach((job) => { 
      tempJobs.push({
        ...job.data(), 
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      });
    });
    setJobs(tempJobs);
    setFilteredJobs(tempJobs); // Set filtered jobs initially to all jobs
  };

  useEffect(() =>{
    fetchJobs();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar jobs={jobs} setFilteredJobs={setFilteredJobs} /> {/* Render the Navbar component with props */}
        <Header />
        
        <Routes>
          <Route path="/" element={<JobListPage jobs={filteredJobs} />} />
          <Route path="/details/:id" element={<Details jobs={jobs} />} /> 
          <Route path='/privacy' element= {<Privacy />} /> 
          <Route path='/contact' element= {<Contact />} />
          
        </Routes>
        <FooterCom />
      </div>
    </BrowserRouter>
  );
}

export default App;

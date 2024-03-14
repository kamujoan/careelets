import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase.config';

function Details() {
    const { id } = useParams(); // Access the id parameter from the URL
    const [job, setJob] = useState(null);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const jobDoc = await getDoc(doc(db, 'jobs', id));
                if (jobDoc.exists()) {
                    setJob({ id: jobDoc.id, ...jobDoc.data() });
                } else {
                    console.log('Job not found');
                }
            } catch (error) {
                console.error('Error fetching job:', error);
            }
        };

        fetchJob();
    }, [id]);

    if (!job) {
        return <div>Loading...</div>;
    }

    return (
        <div className='mx-4 sm:mx-10 mb-4'>
            <div className='px-4 py-3 sm:px-6 sm:py-4 bg-zinc-200 rounded-md shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103'>
                <div className='flex flex-col sm:flex-col items-start gap-3'>
                    <div className='flex flex-col items-start sm:items-center gap-2'>
                        <h1 className='text-lg font-semibold'>{job.title}</h1>
                        <div className="flex flex-col">
                            <p className='text-sm'> About:</p>
                            <p className='text-sm  text-gray-600'> &#x2022; {job.about}</p>
                            <p className='text-sm mt-3 mb-2'> Benefits:</p>
                            <p className='text-sm  text-gray-600'> &#x2022; {job.ben}</p>
                            <p className='text-sm mt-3 mb-2'> Eligibility:</p>
                            <p className='text-sm  text-gray-600'> &#x2022; {job.elig}</p>
                        </div>
                    </div>
                    <div className='flex-grow' />
                    <div className='flex items-center gap-2'>
                        {/* Pass job ID as a parameter in the URL */}
                        <Link to={job.job_link} target="_blank" rel="noopener noreferrer" >
                        <button className='text-white bg-gradient-to-r from-blue-500 to-blue-700 border border-blue-500 hover:from-blue-400 hover:to-blue-600 px-4 py-1 rounded-md'>Apply Now</button>
                        </Link> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;

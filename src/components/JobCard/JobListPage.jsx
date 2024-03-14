// JobListPage.jsx
import React from 'react';
import JobCard from './index'

function JobListPage({ jobs }) {
  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default JobListPage;

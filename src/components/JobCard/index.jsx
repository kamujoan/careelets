import { Link } from 'react-router-dom';
import { BsCashCoin } from "react-icons/bs"
import dayjs from 'dayjs';

function JobCard(props) {
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(dayjs(props.postedOn), 'day');
    return (
        <div className='mx-4 sm:mx-10 mb-4'>
            <div className='flex justify-center'>
                <div className='w-60 sm:w-1/2 px-4 py-3 sm:px-6 sm:py-4 bg-zinc-200 rounded-md shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103'>
                    <div className='flex flex-col sm:flex-col items-start gap-3'>
                        <div className='flex flex-col items-start sm:items-center gap-2'>
                            <Link to={`/details/${props.id}`}> 
                                <h1 className='text-lg font-semibold'>{props.title}</h1>
                            </Link>
                            <p className='text-gray-500 text-sm'>Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`} ago</p>
                            
                            <div className="flex flex-col">
                                <div className='flex items-center text-1xl text-black-600'>
                                <BsCashCoin className='mr-1' /> 
                                    <span>{props.benefit}</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-2 mt-2'>
                            <p>Deadline:</p>
                            {Array.isArray(props.type) && props.type.map((types) => (
                                <p key={types} className='text-xs sm:text-sm text-gray-500 py-1 px-2 rounded-md border border-black'>{types}</p>
                            ))}
                        </div>
                        <div className='flex-grow' />
                        <div className='flex items-center gap-2'>
                           { /*<a href={props.job_link} target="_blank" rel="noopener noreferrer">
                            </a>*/}
                            <Link to={`/details/${props.id}`}> 
                                <button className='text-blue-500 border border-blue-500 px-4 py-1 rounded-md'>View Details</button> 
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>
            <script async="async" data-cfasync="false" src="//pl22785394.profitablegatecpm.com/8fdcf10a65e69850ba81d9c668e89148/invoke.js"></script>
<div id="container-8fdcf10a65e69850ba81d9c668e89148"></div>
        </div>
        
    );
}

export default JobCard;

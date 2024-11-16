import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../ressources/calender.json';
const MaintenanceReminder = ({ reminderDate }) => {
    return (
        <div className="items-center bg-slate-200 rounded-xl shadow-xl  mt-8 h-fit">
            <Lottie 
                options={{
                    loop: false,
                    autoplay: true,
                    animationData: animationData,
                }}
                height={200}
                width={150}
            />
            <h2 className='font-bold text-center text-black'>Maintenance Reminder</h2>
            <p className="text-center text-black pb-4">{reminderDate}</p>
        </div>
    );
};


export default MaintenanceReminder;
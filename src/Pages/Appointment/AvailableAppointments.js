import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointService from './AppointService';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className='my-10'>
      <h4 className='text-xl text-secondary text-center my-12'>
        Available Appointments on {format(date, 'PP')}
      </h4>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {services.map((service) => (
          <AppointService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AppointService>
        ))}
      </div>
      {treatment && <BookingModal
        date={date}
        treatment={treatment}
        setTreatment={setTreatment}
    ></BookingModal>}
    </div>
  );
};

export default AvailableAppointments;
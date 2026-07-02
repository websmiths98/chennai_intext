import React from 'react';
import * as Icons from 'lucide-react';

const BusinessHours = () => {
  const ClockIcon = Icons?.['Clock'] || Icons.HelpCircle;
  const phoneIcon = Icons?.['Phone'] || Icons.HelpCircle;
  const checkCircleIcon = Icons?.['CheckCircle'] || Icons.HelpCircle;

  const businessHours = [
    { day: "Monday", hours: "9:00 AM - 6:00 PM", status: "Open" },
    { day: "Tuesday", hours: "9:00 AM - 6:00 PM", status: "Open" },
    { day: "Wednesday", hours: "9:00 AM - 6:00 PM", status: "Open" },
    { day: "Thursday", hours: "9:00 AM - 6:00 PM", status: "Open" },
    { day: "Friday", hours: "9:00 AM - 6:00 PM", status: "Open" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM", status: "Open" },
    { day: "Sunday", hours: "Closed", status: "Closed" }
  ];

  const getCurrentStatus = () => {
    const now = new Date();
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinute;

    const todayHours = businessHours.find(day => day.day === currentDay);
    if (!todayHours || todayHours.status === "Closed") return { isOpen: false, text: "Closed Today" };

    const [openTime, closeTime] = todayHours.hours.split(' - ');
    const openMinutes = convertToMinutes(openTime);
    const closeMinutes = convertToMinutes(closeTime);

    const isOpen = currentTime >= openMinutes && currentTime < closeMinutes;
    return {
      isOpen,
      text: isOpen ? "We're Open Now" : "Closed Now"
    };
  };

  const convertToMinutes = (timeStr) => {
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    if (modifier === 'PM' && hours !== 12) hours += 12;
    if (modifier === 'AM' && hours === 12) hours = 0;
    return hours * 60 + minutes;
  };

  const currentStatus = getCurrentStatus();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-slate-800 mb-6">Business Hours</h3>

      <div className={`p-4 rounded-lg mb-6 ${currentStatus.isOpen ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
        <div className="flex items-center">
          {checkCircleIcon && (
            <checkCircleIcon
              size={20}
              className={currentStatus.isOpen ? 'text-green-600 mr-3' : 'text-red-600 mr-3'}
            />
          )}
          <div>
            <p className={`font-medium ${currentStatus.isOpen ? 'text-green-800' : 'text-red-800'}`}>
              {currentStatus.text}
            </p>
            <p className={`text-sm ${currentStatus.isOpen ? 'text-green-600' : 'text-red-600'}`}>
              {currentStatus.isOpen
                ? "We're available to take your call and schedule consultations."
                : "Please leave a message or call during business hours."}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {businessHours.map((day, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-b-0">
            <span className={`font-medium ${day.status === 'Closed' ? 'text-slate-500' : 'text-slate-700'}`}>
              {day.day}
            </span>
            <span className={`text-sm ${day.status === 'Closed' ? 'text-slate-500' : 'text-slate-600'}`}>
              {day.hours}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-slate-200">
        <h4 className="font-semibold text-slate-800 mb-3">Emergency Contact</h4>
        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center">
            {phoneIcon && <phoneIcon size={16} className="text-blue-600 mr-2" />}
            <span className="text-blue-800 text-sm font-medium">24/7 Support</span>
          </div>
          <a href="tel:+919876543210" className="text-blue-600 font-semibold text-sm hover:underline">
            +91 98765 43210
          </a>
        </div>
      </div>

      <div className="mt-4 p-3 bg-slate-50 rounded-lg">
        <div className="flex items-center">
          {ClockIcon && <ClockIcon size={16} className="text-slate-500 mr-2" />}
          <span className="text-xs text-slate-600">
            All times are in India Standard Time (IST)
          </span>
        </div>
      </div>
    </div>
  );
};

export default BusinessHours;
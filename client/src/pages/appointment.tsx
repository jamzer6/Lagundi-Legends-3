import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-dropdown-select";
import { Link } from "react-router-dom";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { format } from "date-fns";

const getPatientCountForDate = (date: Date) => {
  const mockData: Record<string, number> = {
    "2025-01-17": 15,
    "2025-01-18": 10,
  };
  const formattedDate = date.toISOString().split("T")[0];
  return mockData[formattedDate] || 0;
};

const Appointment: React.FC = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [selectedService, setSelectedService] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const services = [
    { value: "Braces", label: "Braces" },
    { value: "Dental Fillings", label: "Dental Fillings" },
    { value: "Dentures", label: "Dentures" },
    { value: "Extraction", label: "Extraction" },
    { value: "Oral Prophylaxis", label: "Oral Prophylaxis" },
    { value: "Surgery", label: "Surgery" },
  ];

  const filterPassedTime = (time: Date) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    if (format(currentDate, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')) {
      return currentDate.getHours() < selectedDate.getHours();
    }

    return true;
  };

  const handleProceed = () => {
    if (!date || selectedService.length === 0) {
      setError("Please select both a date and a service.");
      return false;
    }

    const patientCount = getPatientCountForDate(date);
    if (patientCount >= 15) {
      setError("Selected date is fully booked. Please choose another date.");
      return false;
    }

    setError(null);
    return true;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b2013] via-[#29643a] to-[#e6f5db] py-24 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-green-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-green-300/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-green-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Book Your Visit
          </h1>
          <p className="text-green-100 text-lg font-light">
            Schedule your appointment
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl p-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">Select Date & Time</h3>
                <div className="relative group">
                  <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                    showTimeSelect
                    minTime={setHours(setMinutes(new Date(), 0), 10)}
                    maxTime={setHours(setMinutes(new Date(), 0), 17)}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    minDate={new Date()}
                    filterTime={filterPassedTime}
                    placeholderText="Select date and time"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 outline-none hover:border-green-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">Choose Service</h3>
                <Select
                  options={services}
                  onChange={(values) => setSelectedService(values)}
                  values={selectedService}
                  placeholder="Select a service"
                  className="react-dropdown-select"
                  style={{
                    borderRadius: '0.75rem',
                    padding: '0.75rem 1rem',
                    border: '1px solid #e5e7eb',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  }}
                />
              </div>

              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-lg animate-shake">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              <div className="pt-4">
                <Link
                  to="/confirmation"
                  state={{
                    date: date?.toISOString(),
                    service: selectedService[0]?.label,
                  }}
                  onClick={(e) => !handleProceed() && e.preventDefault()}
                  className="block"
                >
                  <button className="group relative w-full overflow-hidden">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-green-400 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div className="relative w-full px-6 py-3 bg-green-900 text-white rounded-xl transition-all duration-300 group-hover:bg-green-800 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 w-3 bg-white transform skew-x-[20deg] group-hover:animate-shine"></div>
                      <span className="relative z-10 text-base font-medium tracking-wide">
                        Continue to Booking
                      </span>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from "react-dropdown-select";
import { Link } from "react-router-dom";

const Appointment: React.FC = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [selectedService, setSelectedService] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const service = [
    { value: "Braces", label: "Braces" },
    { value: "Dental Fillings", label: "Dental Fillings" },
    { value: "Dentures", label: "Dentures" },
    { value: "Extraction", label: "Extraction" },
    { value: "Oral Prophylaxis", label: "Oral Prophylaxis" },
    { value: "Surgery", label: "Surgery" },
  ];

  const handleProceed = () => {
    if (!date || selectedService.length === 0) {
      setError("Please select both a date and a service.");
      return false;
    }
    setError(null);
    return true;
  };

  return (
    <div>
        <div className="min-h-screen bg-gradient-to-br from-[#c8e6c9] via-[#3d8652] to-[#143b23] flex flex-col gap-y-7 justify-center items-center">
            <div className="text-4xl font-bold text-white">
                Book Your Appointment
            </div>
            <div
            className={`bg-white w-[350px] p-7 flex flex-col gap-y-4 justify-center rounded-lg shadow-xl transition-all duration-200 ${
                error ? "h-auto" : "h-[350px]"
            }`}
            >
            <p className="text-lg font-semibold mb-2 text-green-900">Choose Your Date</p>
            <div>
                <DatePicker
                className="w-[295px] border-[1px] border-[#cccccc] rounded-sm p-2 text-sm"
                placeholderText="Select Date"
                selected={date}
                onChange={(date) => setDate(date)}
                dateFormat="MMMM dd, yyyy"
                minDate={new Date()}
                />
            </div>

            <p className="text-lg font-semibold mb-2 text-green-900">Choose Your Service</p>
            <div>
                <Select
                placeholder="Select Service"
                options={service}
                onChange={(values) => setSelectedService(values)}
                />
            </div>

            {error && (
                <p className="text-red-600 text-sm font-medium mt-2">{error}</p>
            )}

            <div className="flex justify-center items-center pt-4">
                <Link to="/confirmation" onClick={(e) => !handleProceed() && e.preventDefault()}>
                    <button className="bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition-all w-[200px] px-2 py-3">
                        Proceed
                    </button>
                </Link>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Appointment;

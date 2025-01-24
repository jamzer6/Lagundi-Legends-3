import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-dropdown-select";
import { Link } from "react-router-dom";

// Mock function to simulate backend patient count (replace with real API later)
const getPatientCountForDate = (date: Date) => {
  const mockData: Record<string, number> = {
    "2025-01-17": 15, // Fully booked
    "2025-01-18": 10, // 5 slots available
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
    <div>
      <div className="min-h-screen bg-gradient-to-br from-[#c8e6c9] via-[#3d8652] to-[#143b23] flex flex-col gap-y-7 justify-center items-center">
        <div className="text-4xl font-bold text-white">Book Your Appointment</div>
        <div
          className={`bg-white w-[350px] p-7 flex flex-col gap-y-4 justify-center rounded-lg shadow-xl transition-all duration-200 ${
            error ? "h-auto" : "h-[400px]"
          }`}
        >
          <p className="text-lg font-semibold mb-2 text-green-900">Choose Your Date</p>
          <div>
            <DatePicker
              className="w-[295px] border-[1px] border-[#cccccc] rounded-sm p-2 text-sm"
              placeholderText="Select Date"
              selected={date}
              onChange={(selectedDate) => setDate(selectedDate)}
              dateFormat="MMMM dd, yyyy"
              minDate={new Date()}
            />
          </div>

          <p className="text-lg font-semibold mb-2 text-green-900">Choose Your Service</p>
          <div>
            <Select
              placeholder="Select Service"
              options={services}
              onChange={(values) => setSelectedService(values)}
              values={[]}
            />
          </div>

          {error && <p className="text-red-600 text-sm font-medium mt-2">{error}</p>}

          <div className="flex justify-center items-center pt-4">
          <Link
  to="/confirmation"
  state={{
    date: date ? date.toDateString() : null, // Format and pass the selected date
    service: selectedService.length ? selectedService[0].label : null, // Pass the selected service
  }}
  onClick={(e) => !handleProceed() && e.preventDefault()}
>
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
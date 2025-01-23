import { useLocation, Link } from "react-router-dom";

const Confirmation: React.FC = () => {
  // Retrieve the passed data from the Appointment page
  const location = useLocation();
  const { date, service } = location.state || {}; // Extract date and service

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-[#c8e6c9] via-[#3d8652] to-[#143b23] flex flex-col gap-y-7 justify-center items-center pt-24">
        <div className="text-5xl font-bold text-white">Booking Confirmation</div>
        <div className="bg-white h-auto w-[350px] p-7 flex flex-col gap-y-5 justify-center rounded-lg shadow-xl">
          <p className="text-xl font-semibold text-green-900">Booking Details</p>

          <div>
            <p className="text-lg font-semibold text-green-900">Date:</p>
            <p className="text-green-700 text-lg">
              {date || "No date selected"}
            </p>
          </div>

          <div>
            <p className="text-lg font-semibold text-green-900">Service:</p>
            <p className="text-green-700 text-lg">
              {service || "No service selected"}
            </p>
          </div>

          {/* Book Appointment Button */}
          <div className="flex justify-center items-center pt-3">
            <Link to="/booked">
              <button className="bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition-all w-[200px] px-2 py-3">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;

import 'react-datepicker/dist/react-datepicker.css';
import { Link } from "react-router-dom";

const Confirmation: React.FC = () => {
  return (
    <div>
        <div className="min-h-screen bg-gradient-to-br from-[#c8e6c9] via-[#3d8652] to-[#143b23] flex flex-col gap-y-7 justify-center items-center">
            <div className="text-4xl font-bold text-white">
                Appointment Details 
            </div>
            <div className="bg-white h-[350px] w-[350px] p-7 flex flex-col gap-y-5 justify-center rounded-lg shadow-xl">
                <p className="text-lg font-semibold mb-2 text-green-900">Name:</p>
                <p className="text-lg font-semibold mb-2 text-green-900">Email:</p>
                <p className="text-lg font-semibold mb-2 text-green-900">Date:</p> 
                <p className="text-lg font-semibold mb-2 text-green-900">Service:</p>  

                <div className="flex justify-center items-center pt-1">
                    <Link to="/booked">
                        <button className="bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition-all w-[200px] px-2 py-3">
                            Book Appointment
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Confirmation
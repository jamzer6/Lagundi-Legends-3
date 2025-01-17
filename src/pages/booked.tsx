import 'react-datepicker/dist/react-datepicker.css';
import { Link } from "react-router-dom";

const Booked: React.FC = () => {
  return (
    <div>
        <div className="min-h-screen bg-gradient-to-br from-[#c8e6c9] via-[#3d8652] to-[#143b23] flex flex-col gap-y-7 justify-center items-center">
            <div className="text-4xl font-bold text-white">
                You're All Set!
            </div>
            <p className="text-lg mb-2 text-white w-[550px] justify-center text-center">
                Thank you for booking your appointment. Please allow 1-2 hours for approval. 
                You will receive an email confirmation once your appointment is finalized. Thank you!
            </p>
            <div className="flex justify-center items-center pt-1">
                <Link to="/">
                    <button className="bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition-all w-[200px] px-2 py-3">
                        Return Home
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Booked
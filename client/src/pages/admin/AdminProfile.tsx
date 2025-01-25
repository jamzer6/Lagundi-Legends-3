import React, { useState } from 'react';

interface AdminProfile {
  name: string;
  email: string;
  role: string;
  phoneNumber: string;
  profileImage: string;
}

const AdminProfile: React.FC = () => {
  const [profile, setProfile] = useState<AdminProfile>({
    name: 'Admin User',
    email: 'admin@silandental.com',
    role: 'Administrator',
    phoneNumber: '+639385951894',
    profileImage: '/assets/images/admin-profile.png'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profile);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(formData);
    setIsEditing(false);
    // Here you would typically make an API call to update the profile
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b2013] via-[#29643a] to-[#e6f5db] py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur opacity-20"></div>
          <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image */}
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-500 shadow-lg">
                <img
                  src={profile.profileImage}
                  alt="Admin Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Profile Information */}
              {isEditing ? (
                <form onSubmit={handleSubmit} className="flex-1 space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData(profile);
                        setIsEditing(false);
                      }}
                      className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex-1">
                  <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{profile.name}</h1>
                    <p className="text-green-600 font-medium">{profile.role}</p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-lg text-gray-800">{profile.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone Number</p>
                      <p className="text-lg text-gray-800">{profile.phoneNumber}</p>
                    </div>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
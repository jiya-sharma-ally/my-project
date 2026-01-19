import Nav from "../components/home/Nav";

const Profile = () => {
  return (
    <>
      <Nav />

      <div className="flex justify-center items-center min-h-screen bg-[#f3e9dc]">

        <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">

          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="user"
              className="w-24 h-24 rounded-full border-4 border-[#633426]"
            />
          </div>

          {/* User Name */}
          <h2 className="mt-4 text-xl font-bold text-[#633426]">
            Jiya Sharma
          </h2>

          {/* Email */}
          <p className="text-gray-500 text-sm">
            jiya@email.com
          </p>

          {/* Divider */}
          <div className="my-4 border-t"></div>

          {/* Profile Details */}
          <div className="text-left text-sm space-y-2">
            <p><span className="font-semibold">Orders:</span> 12</p>
            <p><span className="font-semibold">Wishlist:</span> 8</p>
            <p><span className="font-semibold">Member Since:</span> 2024</p>
          </div>

          {/* Buttons */}
          <div className="mt-5 flex gap-3">
            <button className="flex-1 bg-[#633426] text-white py-2 rounded-lg hover:opacity-90">
              Edit Profile
            </button>

            <button className="flex-1 border border-[#633426] text-[#633426] py-2 rounded-lg hover:bg-[#633426] hover:text-white">
              Logout
            </button>
          </div>

        </div>

      </div>
    </>
  );
};

export default Profile;

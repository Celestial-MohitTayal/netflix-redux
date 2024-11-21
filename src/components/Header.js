import { useDispatch } from "react-redux";
import { removeUser, addUser } from "../redux/userSlice";
import { removeMovies } from "../redux/movieSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = JSON.parse(localStorage.getItem("userDetails")) || null;
  useEffect(() => {
    if (!userDetails) {
      navigate("/");
    } else {
      dispatch(addUser(userDetails));
      navigate("/home");
    }
  }, []);

  return (
    <div className="flex justify-between items-center absolute px-8 py-2 bg-gradient-to-b from-black z-20 w-screen">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
        className="w-48"
      />

      {userDetails && (
        <div className="flex text-white p-2 font-bold space-x-4">
          <img
            src="https://occ-0-1009-1007.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfa2YTbBSdRCw8ROTRS4NTNn0G7BQ46lOw5X-Uwt3janZC8KIbTM91qWqWHqvalzmwR7BPCeoeRM-sfItd7r45AHApdsNEY.png?r=7e8"
            alt="Profile"
            className="w-12 h-12 rounded cursor-pointer hover:scale-105 duration-75"
          />
          <button
            className="text-xl font-serif hover:scale-105 duration-75"
            onClick={() => {
              dispatch(removeUser());
              dispatch(removeMovies());
              localStorage.removeItem("userDetails");
              navigate("/");
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

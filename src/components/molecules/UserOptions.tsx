import { AuthContext, AuthContextType } from "@/contexts/auth-context";
import UserAvatar from "../atoms/UserAvatar";
import { useContext, useState, useRef } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSolidBookContent } from "react-icons/bi";

export default function UserOptions() {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const { removeAuth } = useContext(AuthContext) as AuthContextType;
  const dropdownRef = useRef(null);

  const toggleDropDown = () => {
    setIsDropDownOpen((prevValue) => !prevValue);
  };

  const handleLogout = () => {
    removeAuth();
  };

  const goToPostManager = () => {
    alert("manage post");
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <UserAvatar onClick={toggleDropDown} />
      {isDropDownOpen && (
        <div className="absolute right-0 mt-2 w-max bg-slate-50 rounded-md shadow-lg">
          <button
            className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-200"
            onClick={goToPostManager}
          >
            <span className="mr-2">manage posts</span>
            <BiSolidBookContent />
          </button>
          <button
            className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-200"
            onClick={handleLogout}
          >
            <span className="mr-2">logout</span>
            <AiOutlineLogout />
          </button>
        </div>
      )}
    </div>
  );
}

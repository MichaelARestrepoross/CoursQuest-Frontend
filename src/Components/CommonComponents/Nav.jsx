import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { Library } from "lucide-react";

const Nav = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-sky-300">
        <div className="px-4 py-4 flex flex-row justify-between">
          <Link to={"/"}>
            <div className="font-bold text-2xl text-white inline-block">
              <span className="">C</span>ourse
              <span className="">Q</span>uest
            </div>
          </Link>
          <div className="flex items-center">
            <Link to={"/courses"}>
              <Library
                strokeWidth={3}
                className="text-white w-7 h-7 mr-4 md:mr-12"
              />
            </Link>
            <Link to={"/account"}>
              <User strokeWidth={3} className="text-white w-7 h-7" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

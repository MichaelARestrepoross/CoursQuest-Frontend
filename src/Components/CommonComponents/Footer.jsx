import { Link } from "react-router-dom";
import { Copyright } from "lucide-react";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="bg-slate-500 px-4">
        <div className="text-white py-10 flex justify-center">
          <Link to={"/aboutthedevs"}>
            <div className="hover:text-blue-200">About</div>
          </Link>
          <Link
            to={"https://github.com/MichaelARestrepoross/CoursQuest-Backend"}
            target="_blank"
          >
            <BsGithub className=" w-5 h-5 mt-1 ml-10 lg:ml-48 hover:text-purple-200" />
          </Link>
        </div>
        <div className="flex flex-row justify-between">
          <Link to={"/"}>
            <div className="font-bold text-2xl text-white inline-block pb-8 pr-10">
              CQ
            </div>
          </Link>
          <span className="flex flex-row pt-3 pb-9 text-white text-sm">
            <Copyright className="w-5 h-5 pr-1" />
            2024 CourseQuest Inc.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

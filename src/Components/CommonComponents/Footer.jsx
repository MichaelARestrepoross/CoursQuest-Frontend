import { Link } from "react-router-dom";
import { Copyright } from "lucide-react";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="bg-slate-500 px-4 fixed bottom-0 left-0 right-0">
        <div className="flex flex-row justify-between">
          <Link to={"/"}>
            <div className="lg:pr-16 font-bold text-2xl text-white inline-block pt-3 pr-10">
              CQ
            </div>
          </Link>
          <div className="text-white flex flex-row  pt-5 ">
            <Link to={"/aboutthedevs"}>
              <div className="hover:text-blue-400 lg:mr-10 ">About</div>
            </Link>
            <Link
              to={"https://github.com/MichaelARestrepoross/CoursQuest-Backend"}
              target="_blank"
            >
              <BsGithub className="lg:mr-16 mr-3 w-5 h-5 mt-1 ml-10 lg:ml-48 hover:text-purple-400" />
            </Link>
          </div>
          <span className="flex flex-row pt-6 pb-4 text-white text-sm">
            {/* <Copyright className="w-5 h-5 pr-1 pt-5" /> */}
            &#169;2024 CourseQuest Inc.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

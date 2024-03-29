import { Linkedin } from "lucide-react";
import { FiGithub } from "react-icons/fi";

import { Mail } from "lucide-react";

import { Link } from "react-router-dom";

const AboutTheDevs = () => {
  return (
    <div>
      <div className="bg-white">
        <div>
          <div className="py-12 text-center text-4xl font-bold">
            Meet the Team
          </div>
          <hr className="mx-10 border-2" />
          <div className="grid lg:grid-cols-2 md:gap-2 ml-12 pb-24">
            <div className="bg-gray-100/50 rounded-xl mx-10 my-10 shadow-2xl  backdrop-brightness-150 backdrop-blur-3xl bg-opacity-90 hover:bg-gray-100 w-3/4">
              <div className="grid grid-cols-4 h-full">
                <div className="bg-red-500 rounded-tl-lg rounded-bl-lg text-5xl text-white flex items-center justify-center col-span-1">
                  AG
                </div>
                <div className="pb-10 p-5 col-span-3">
                  <div className="text-2xl ">Alexander Gonzalez</div>
                  <div>Software Engineer</div>
                  <div>
                    <div className="pt-2 flex flex-row">
                      <Link
                        to={
                          "https://www.linkedin.com/in/alexander-gonzalez-can-code/"
                        }
                        target={"_blank"}
                      >
                        <div className="bg-blue-500  rounded p-1 hover:bg-black">
                          <Linkedin
                            strokeWidth={2}
                            className="text-white w-6 h-6"
                          />
                        </div>
                      </Link>
                      <Link
                        to={"https://github.com/Alex-de-code"}
                        target={"_blank"}
                      >
                        <div className="bg-purple-500 rounded p-1 ml-4 hover:bg-black">
                          <FiGithub
                            strokeWidth={2}
                            className="text-white w-6 h-6"
                          />
                        </div>
                      </Link>
                      <Link to="mailto:alexandergonzalez@pursuit.org">
                        <div className="bg-green-500 rounded p-1 ml-4 hover:bg-black">
                          <Mail
                            strokeWidth={2}
                            className="text-white w-6 h-6"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100/50  rounded-xl mx-10 my-10 shadow-2xl  backdrop-brightness-150 backdrop-blur-3xl bg-opacity-90 hover:bg-gray-100 w-3/4 ">
              <div className="grid grid-cols-4 h-full">
                <div className="bg-amber-500 rounded-tl-lg rounded-bl-lg text-5xl text-white flex items-center justify-center col-span-1">
                  JP
                </div>
                <div className="pb-10 p-5 col-span-3">
                  <div className="text-2xl">Jennifer Peterson</div>
                  <div>Software Engineer</div>
                  <div>
                    <div className="pt-2 flex flex-row">
                      <Link
                        to={"https://www.linkedin.com/in/jennifer--peterson/"}
                        target={"_blank"}
                      >
                        <div className="bg-blue-500  rounded p-1 hover:bg-black">
                          <Linkedin
                            strokeWidth={2}
                            className="text-white w-6 h-6"
                          />
                        </div>
                      </Link>
                      <Link
                        to={"https://github.com/JenniferPeterson1203"}
                        target={"_blank"}
                      >
                        <div className="bg-purple-500 rounded p-1 ml-4 hover:bg-black">
                          <FiGithub
                            strokeWidth={2}
                            className="text-white w-6 h-6"
                          />
                        </div>
                      </Link>
                      <Link to="mailto:jenniferpeterson@pursuit.org">
                        <div className="bg-green-500 rounded p-1 ml-4 hover:bg-black">
                          <Mail
                            strokeWidth={2}
                            className="text-white w-6 h-6"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100/50  rounded-xl mx-10 my-10 shadow-2xl  backdrop-brightness-150 backdrop-blur-3xl bg-opacity-90 hover:bg-gray-100 w-3/4 ">
              <div className="grid grid-cols-4 h-full">
                <div className="bg-emerald-500 rounded-tl-lg rounded-bl-lg text-5xl text-white flex items-center justify-center col-span-1">
                  MR
                </div>
                <div className="pb-10 p-5 col-span-3">
                  <div className="text-2xl">Michael Restrepoross</div>
                  <div>Software Engineer</div>
                  <div>
                    <div className="pt-2 flex flex-row">
                      <Link
                        to={"http://www.linkedin.com/in/michael-restrepoross"}
                        target={"_blank"}
                      >
                        <div className="bg-blue-500  rounded p-1 hover:bg-black">
                          <Linkedin
                            strokeWidth={2}
                            className="text-white w-6 h-6"
                          />
                        </div>
                      </Link>
                      <Link
                        to={"https://github.com/MichaelARestrepoross"}
                        target={"_blank"}
                      >
                        <div className="bg-purple-500 rounded p-1 ml-4 hover:bg-black">
                          <FiGithub
                            strokeWidth={2}
                            className="text-white w-6 h-6"
                          />
                        </div>
                      </Link>
                      <Link to="mailto:MichaelRestrepoross@pursuit.org">
                        <div className="bg-green-500 rounded p-1 ml-4 hover:bg-black">
                          <Mail
                            strokeWidth={2}
                            className="text-white w-6 h-6"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100/50  rounded-xl mx-10 my-10 shadow-2xl  backdrop-brightness-150 backdrop-blur-3xl bg-opacity-90 hover:bg-gray-100 w-3/4 ">
              <div className="grid grid-cols-4 h-full">
                <div className="bg-indigo-500 rounded-tl-lg rounded-bl-lg text-5xl text-white flex items-center justify-center col-span-1">
                  JB
                </div>
                <div className="pb-10 p-5 col-span-3">
                  <div className="text-2xl">Jose Barrios</div>
                  <div>Software Engineer</div>
                  <div>
                    <div className="pt-2 flex flex-row">
                      <Link
                        to={"https://www.linkedin.com/in/josebarriosa/"}
                        target={"_blank"}
                      >
                        <div className="bg-blue-500  rounded p-1 hover:bg-black">
                          <Linkedin
                            strokeWidth={2}
                            className="text-white w-6 h-6"
                          />
                        </div>
                      </Link>
                      <Link
                        to={"https://github.com/josebarrios23"}
                        target={"_blank"}
                      >
                        <div className="bg-purple-500 rounded p-1 ml-4 hover:bg-black">
                          <FiGithub
                            strokeWidth={2}
                            className="text-white w-6 h-6"
                          />
                        </div>
                      </Link>
                      <Link to="mailto:JoseBarrios@pursuit.org">
                        <div className="bg-green-500 rounded p-1 ml-4 hover:bg-black">
                          <Mail
                            strokeWidth={2}
                            className="text-white w-6 h-6"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTheDevs;

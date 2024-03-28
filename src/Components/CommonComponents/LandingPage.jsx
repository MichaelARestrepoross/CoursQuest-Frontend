import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div>
        <section className="bg-gray-800 text-white py-20 px-5 md:px-20 h-screen">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-5">
                  Welcome to CourseQuest
                </h1>
                <p className="text-lg md:text-xl mb-8">
                  Empower your learning journey with CourseQuest, where you can
                  access a vast array of courses anytime, anywhere. Whether
                  you're a student seeking academic excellence or an enthusiast
                  exploring new hobbies, CourseQuest has something for everyone.
                </p>
                <button
                  href="#"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded inline-block"
                  onClick={() => navigate("/courses")}
                >
                  Get Started
                </button>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dvmczcg3f/image/upload/v1711480893/CourseQuest%20-%20App/students_learning-jpg_y4hd2r.jpg"
                  alt="Students Learning"
                  className="w-full rounded shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;

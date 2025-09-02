import Image from "next/image";
import PlasmaBackground from "./components/background/PlasmaBackground";
import TextType from "./components/textanime/texttype";
import Plasma from "./components/background/pasma";
import aboutme from "./components/source/aboutme";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full md:w-1/2 gap-5  p-5">
          <div className="flex flex-col md:flex-row gap-5 m-5 justify-center items-center">
            <h1 className="heading-name-left text-5xl text-color-104 font-bold">Madam</h1>
            <Image
              src="https://res.cloudinary.com/dybipmq9j/image/upload/v1756666943/Portfolio_Pic_bfhgtj.jpg"
              alt="profile picture"
              className="rounded-full heading-image"
              width={100} height={100} />
            <h1 className="heading-name-right text-5xl text-color-104 font-bold">Vignesh</h1>
          </div>

          <div className="text-center text-color-purple-heart-500 text-xl heading-description ">
            <TextType
              text={["I am MERN Stack Developer", "Professional C++ and python Developer", "And also a AI/ML Intern"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              textColors={["#ead7fd"]}
            />
          </div>
        </div>
      </div>
      <div className="min-h-min flex flex-col md:flex-row justify-center items-center pt-10 ">
        <div className="md:w-1/2 flex items-center justify-center scrolling-left">
          <h2 className="text-center text-color-101 text-3xl text-center md:text-8xl font-bold">About Me</h2>
        </div>
        <div className="md:w-1/2 md:flex items-center p-10 text-justify scrolling-right">
          <p className="text-lg md:text-xl text-color-104">{aboutme}
          </p>
        </div>
      </div>
    </div>
  );
}

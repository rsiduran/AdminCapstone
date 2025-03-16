import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";

const HeroSection = () => {
  return (
    <div id="HeroSection" className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-green-800">
        WanderPets tool 
        <span className="bg-gradient-to-r from-green-300 to-green-500 text-transparent bg-clip-text">
          {" "}
          for <br /> Reuniting pets
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-700 max-w-4xl">
        Connects communities to report lost pets, manage adoptions, and facilitate donations, fostering responsible pet ownership and reunification.
      </p>
      <div className="flex justify-center my-10">
        <a
          target="_blank"
          href="https://www.mediafire.com/file/cqrvw0omxm46sy0/application-937a77a6-ed76-44f7-8b3a-d17984e1f899.apk/file?fbclid=IwZXh0bgNhZW0CMTAAAR1dE-OKv5SNVTfXKwnIAxw-ZYHNxbRbIquW_-bhwDr9EQ3cbdM1zO9LOEg_aem_d7ZBsQJ99cqX_UbY9xCSaA"
          className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-4 mx-3 rounded-md text-white hover:bg-green-600"
        >
          Start for free
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-green-300 shadow-sm shadow-green-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-green-300 shadow-sm shadow-green-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;

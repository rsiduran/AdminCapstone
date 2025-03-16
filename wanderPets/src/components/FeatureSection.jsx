import { features } from "../constants"; // Assuming your features are defined here

const FeatureSection = () => {
  return (
    <div id="FeatureSection" className="relative mt-20 border-b border-neutral-800 min-h-[800px] bg-green-50">
      <div className="text-center">
        <span className="bg-green-800 text-white rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-green-800">
          Easily build{" "}
          <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
            your pet's future
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex p-6">
              <div className="flex mx-6 h-10 w-10 p-2 bg-green-800 text-white justify-center items-center rounded-full">
                {feature.icon} {/* Assuming this is an icon you pass in */}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl text-green-800">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-700">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;

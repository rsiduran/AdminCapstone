import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/images/pet.png"; // Change this image to something relevant to WanderPets (e.g., pet-related image)
import { checklistItems } from "../constants"; // Ensure your checklistItems are related to the pet adoption or lost pet features

const Workflow = () => {
  return (
    <div id="WorkflowSection" className="mt-20 py-16">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide text-green-800">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
          WanderPets workflow.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center mt-10">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="Coding" className="rounded-lg shadow-md border border-green-300" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12 items-start">
              <div className="text-green-600 mx-6 bg-neutral-800 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl text-green-800">{item.title}</h5>
                <p className="text-md text-neutral-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;

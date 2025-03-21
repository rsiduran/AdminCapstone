import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div id="Testimonials" className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are Saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-green-900 rounded-md p-6 text-md border border-green-700 font-thin">
              <p className="text-white">{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-green-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6 className="text-white">{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-green-400">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

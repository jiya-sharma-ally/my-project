import kiyara from "../assets/images/kiyara.png";
import minimal from "../assets/images/minimal.png";
import quality from "../assets/images/quality.png";
import customer from "../assets/images/customer.png";
const About = () => {
  return (
    <section className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center mt-25">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
          We don’t just sell products,
          <br />
          <span className="text-[#633426]">we curate style.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Born from a love for clean design, comfort, and confidence —
          our brand exists to make everyday fashion feel effortless.
        </p>
      </div>

      {/* Image + Story */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="overflow-hidden rounded-3xl">
           <img src={kiyara} alt="Our story" className="w-150 h-150 object-cover hover:scale-105 transition duration-700" 
  
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            What started as a small idea soon became a vision —
            to create fashion that feels as good as it looks.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Every piece you see here is thoughtfully designed,
            ethically sourced, and tested for real-life comfort.
          </p>
        </div>
      </div>

      {/* Values */}
    <div className="bg-[#f9f9f9] py-24">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-semibold mb-20 text-gray-900">
      What We Believe In
    </h2>

    <div className="grid gap-12 md:grid-cols-3">

          {/* Card 1 */}
      <div className="bg-white border border-gray-200 rounded-3xl p-10 
                      flex flex-col items-center text-center
                      hover:border-[#633426] transition duration-300">
        
        <img src ={quality}
          alt="Quality first"
          className="w-50 h-50 object-contain mb-8 opacity-90"
        />

        <h3 className="text-lg font-semibold mb-3 text-gray-900">
          Quality First
        </h3>
        <p className="text-gray-500 leading-relaxed">
          Premium materials, crafted to last beyond trends.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white border border-gray-200 rounded-3xl p-10 
                      flex flex-col items-center text-center
                      hover:border-[#633426] transition duration-300">
        
        <img
          src={minimal}
          alt="Minimal design"
          className="w-40 h-40 object-contain mb-8 opacity-90"
        />

        <h3 className="text-lg font-semibold mb-3 text-gray-900">
          Minimal Design
        </h3>
        <p className="text-gray-500 leading-relaxed">
          Clean silhouettes. No noise. Just timeless style.
        </p>
      </div>

    

      {/* Card 3 */}
      <div className="bg-white border border-gray-200 rounded-3xl p-10 
                      flex flex-col items-center text-center
                      hover:border-[#633426] transition duration-300">
        
        <img src={customer} alt="Customer focus" className="w-40 h-40 object-contain mb-8 opacity-90" />

        <h3 className="text-lg font-semibold mb-3 text-gray-900">
          You at the Center
        </h3>
        <p className="text-gray-500 leading-relaxed">
          Designed for real people, real days, real confidence.
        </p>
      </div>

    </div>
  </div>
</div>



      {/* Closing */}
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Made for those who move differently.
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Thank you for being part of our journey.
          We’re just getting started.
        </p>
      </div>
    </section>
  );
};

export default About;

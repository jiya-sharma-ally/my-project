const Contact = () => {
  return (
    <section className="w-full bg-[#f9f9f9] text-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-24">

        {/* Title */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-semibold mb-4 text-gray-900 mt-25">
            Contact Us
          </h1>
          <div className="w-16 h-2px bg-[#633426] mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-xl mx-auto">
            Have a question, feedback, or just want to say hello?
            We’d love to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Info */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p className="text-gray-600">
                Email us anytime and we’ll get back to you within 24 hours.
              </p>
              <p className="mt-3 text-[#633426] font-medium">
                supportDriptees@gmail.com
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">
                Available Monday to Friday, 10 AM – 6 PM
              </p>
              <p className="mt-3 text-[#633426] font-medium">
                +91 98765 43210
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-2">Office Address</h3>
              <p className="text-gray-600">
                Jaipur, Rajasthan, India
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#633426]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#633426]"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-[#633426]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#633426] text-white py-3 rounded-xl 
                           hover:opacity-90 transition font-medium cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

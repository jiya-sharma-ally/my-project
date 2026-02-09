const Privacy = () => {
  return (
    <section className="w-full bg-[#f9f9f9] text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-24">

        {/* Title */}
        <div className="mb-16">
          <h1 className="text-4xl font-semibold mb-4 text-gray-900 mt-25">
            Privacy Policy
          </h1>
          <div className="w-16 h-2px bg-[#633426] mb-6"></div>
          <p className="text-gray-500 max-w-xl">
            Your privacy matters to us. This policy explains how we collect,
            use, and protect your information.
          </p>
        </div>

        {/* Card Wrapper */}
        <div className="space-y-10">

          {/* Section */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-xl font-semibold mb-3">
              Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may collect personal details such as your name, email address,
              phone number, shipping address, and payment information when you
              place an order or create an account on our website.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-xl font-semibold mb-3">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your information is used to process orders, improve our services,
              communicate updates, and provide a better shopping experience.
              We do not sell or misuse your personal data.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-xl font-semibold mb-3">
              Data Protection
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement industry-standard security measures to protect your
              data against unauthorized access, alteration, or disclosure.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-xl font-semibold mb-3">
              Cookies
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our website may use cookies to enhance user experience, analyze
              traffic, and personalize content. You can disable cookies in
              your browser settings if you prefer.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-xl font-semibold mb-3">
              Third-Party Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may use trusted third-party services for payments, analytics,
              or delivery. These services only access the data necessary to
              perform their function.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-xl font-semibold mb-3">
              Updates to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes
              will be reflected on this page.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Privacy;

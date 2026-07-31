import { Heart, Shield, Zap, Users, Award, Clock } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Heart className="w-12 h-12 text-red-600" />,
      title: 'Quality Products',
      description: 'Premium medical devices from trusted manufacturers worldwide.',
    },
    {
      icon: <Shield className="w-12 h-12 text-red-600" />,
      title: 'Certified & Safe',
      description: 'All products meet international safety and quality standards.',
    },
    {
      icon: <Zap className="w-12 h-12 text-red-600" />,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery across Qatar.',
    },
    {
      icon: <Users className="w-12 h-12 text-red-600" />,
      title: 'Expert Support',
      description: '24/7 customer support from our medical device specialists.',
    },
    {
      icon: <Award className="w-12 h-12 text-red-600" />,
      title: 'Trusted Brand',
      description: 'Years of experience serving healthcare professionals.',
    },
    {
      icon: <Clock className="w-12 h-12 text-red-600" />,
      title: 'Always Available',
      description: 'Extensive inventory ready for immediate deployment.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white pt-20 pb-32 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-red-50 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium">
                  🩺 Trusted Medical Solutions
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Premium
                <span className="block text-red-600">Medical Devices</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Your trusted partner for quality medical equipment and devices in Doha, Qatar. 
                We deliver excellence in healthcare solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="/contact"
                  className="group bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get in Touch
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="/about"
                  className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-red-600 hover:text-red-600 transition-all flex items-center justify-center gap-2"
                >
                  Learn More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-3xl font-bold text-red-600">500+</p>
                  <p className="text-sm text-gray-600 mt-1">Products</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-600">100+</p>
                  <p className="text-sm text-gray-600 mt-1">Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-600">24/7</p>
                  <p className="text-sm text-gray-600 mt-1">Support</p>
                </div>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                  <div className="space-y-6">
                    {/* Feature items */}
                    <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl">
                      <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Quality Certified</h3>
                        <p className="text-sm text-gray-600">International standards compliance</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Safe & Reliable</h3>
                        <p className="text-sm text-gray-600">Trusted by healthcare professionals</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Fast Delivery</h3>
                        <p className="text-sm text-gray-600">Quick dispatch across Qatar</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-6 -right-6 bg-red-600 text-white px-6 py-3 rounded-full shadow-lg">
                  <p className="text-sm font-semibold">Doha, Qatar 🇶🇦</p>
                </div>

                {/* Floating badge bottom */}
                <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-xl border border-gray-100">
                  <p className="text-xs text-gray-500 mb-1">Trusted by</p>
                  <p className="text-2xl font-bold text-gray-900">Healthcare Providers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600">
              We provide comprehensive medical device solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Contact us today to discuss your medical device needs
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

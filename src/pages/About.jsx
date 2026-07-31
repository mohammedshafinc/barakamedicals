import { Target, Eye, Heart, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Baraka Medicals</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading provider of quality medical devices in Doha, Qatar
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Baraka Medicals was founded with a vision to provide healthcare professionals
                in Qatar with access to the highest quality medical devices and equipment.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Based in Doha, we have built strong relationships with leading manufacturers
                worldwide to ensure our clients receive only the best products that meet
                international standards and certifications.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to excellence, reliability, and customer satisfaction has made
                us a trusted partner for healthcare facilities across Qatar.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-12 text-center">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-5xl font-bold text-red-600 mb-2">500+</p>
                  <p className="text-gray-600">Products</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-red-600 mb-2">100+</p>
                  <p className="text-gray-600">Clients</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-red-600 mb-2">10+</p>
                  <p className="text-gray-600">Years</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-red-600 mb-2">24/7</p>
                  <p className="text-gray-600">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-xl shadow-sm">
              <Target className="w-16 h-16 text-red-600 mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                To provide healthcare professionals with reliable, high-quality medical devices
                that enhance patient care and improve health outcomes across Qatar.
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-sm">
              <Eye className="w-16 h-16 text-red-600 mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                To be the most trusted and preferred partner for medical devices in the region,
                known for our commitment to quality, innovation, and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
                <Heart className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our products and services.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
                <Target className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction and success are at the heart of everything we do.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
                <TrendingUp className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously seek the latest technologies to serve you better.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

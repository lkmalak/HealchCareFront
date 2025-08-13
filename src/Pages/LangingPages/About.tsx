export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">About Us</h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        Welcome to our website! We are passionate about delivering high-quality
        services that meet our clients’ needs. Our team is committed to
        innovation, excellence, and building long-lasting relationships with our
        customers.
      </p>
      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        Since our founding, we have been driven by a single mission: to create
        impactful solutions that make a difference. Whether you are looking for
        professional support, creative designs, or technical expertise, we are
        here to help you achieve your goals.
      </p>
      <div className="bg-gray-100 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Innovation and continuous improvement</li>
          <li>Integrity and transparency in all we do</li>
          <li>Customer satisfaction at the heart of our work</li>
          <li>Collaboration and team spirit</li>
        </ul>
      </div>
    </div>
  );
}

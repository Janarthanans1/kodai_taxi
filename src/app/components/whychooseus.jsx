import { FaCarSide, FaUsers, FaMapMarkedAlt, FaSmile } from "react-icons/fa";

const WhyChooseUs=()=> {
  const stats = [
    { icon: <FaCarSide size={50} className="text-color_3" />, value: "12,500", label: "Rides Completed" },
    { icon: <FaUsers size={50} className="text-color_3" />, value: "7,800", label: "Happy Customers" },
    { icon: <FaMapMarkedAlt size={50} className="text-color_3" />, value: "120", label: "Cities Covered" },
    { icon: <FaSmile size={50} className="text-color_3" />, value: "99%", label: "Customer Satisfaction" },
  ];

  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
        <p className="text-gray-600 mt-2">We ensure safe, reliable, and affordable rides.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="flex justify-center">{stat.icon}</div>
            <h3 className="text-3xl font-bold mt-4">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default WhyChooseUs
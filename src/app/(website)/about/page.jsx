import React from 'react'

const Card = ({ icon, title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
    <i className={`fas fa-${icon} text-3xl text-gray-500 mb-2`}></i>
    <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const page = () => {
  return (
    <section className="bg-gray-100 px-4 py-8 md:p-10 flex flex-col justify-center items-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">Unleash Your Digital Footprint</h2>
    <p className="text-gray-600 text-center md:max-w-2xl">
      Tired of juggling a dozen social media and professional links.  
       We get it. That is why we built LinkFree, your one-stop shop for showcasing your entire digital presence.
      
    </p>  // eslint-disable-line react/no-unescaped-entities
    <div className="mt-8 flex flex-wrap justify-around md:justify-center gap-4">
      <Card
        icon="fa-user"
        title="Centralized Profile"
        description="Streamline all your links into one, easy-to-share profile."
      />
      <Card
        icon="fa-chart-line"
        title="Analytics at a Glance"
        description="Gain valuable insights into how your profiles are performing."
      />
      <Card
        icon="fa-bullhorn"
        title="Boost Your Reach"
        description="Make it easy for people to find and connect with you across platforms."
      />
    </div>
  </section>
  )
}

export default page

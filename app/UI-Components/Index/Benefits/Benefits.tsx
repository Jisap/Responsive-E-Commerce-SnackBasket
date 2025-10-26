import React from 'react'

const benefitsData = [
  {
    icon: 'bi-truck',
    title: 'Free Shipping',
    description: 'Free shipping all over the US',
  },
  {
    icon: 'bi-heart-pulse',
    title: '100% Satisfaction',
    description: 'We guarantee your satisfaction.',
  },
  {
    icon: 'bi-credit-card-front',
    title: 'Secure Payments',
    description: 'Your payments are safe with us.',
  },
  {
    icon: 'bi-chat-square-text',
    title: '24/7 Support',
    description: 'Contact us anytime you need.',
  },
];

const BenefitItem = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className='flex justify-center items-center gap-3 px-3 py-5 rounded-lg bg-prim-light'>
    <i className={`bi ${icon} text-2xl rounded-full bg-prim px-3 py-2 text-white`}></i>
    <div className='flex flex-col'>
      <h2 className='font-semibold Unbounded'>
        {title}
      </h2>
      <p className='text-gray-700'>
        {description}
      </p>
    </div>
  </div>
);

const Benefits = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-5">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          {benefitsData.map((benefit) => (
            <BenefitItem key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Benefits 
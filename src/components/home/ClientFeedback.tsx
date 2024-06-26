import { Carousel } from 'antd';

const testimonials = [
  {
    name: "Alice Johnson",
    position: "Customer Service Manager",
    company: "Bright Star Hotels",
    testimonial: "The Lost and Found system has been a game-changer for our hotel. We've significantly reduced the time it takes to return lost items to our guests. The interface is user-friendly and the support team is always responsive."
  },
  {
    name: "Bob Smith",
    position: "Operations Director",
    company: "City Transport Services",
    testimonial: "Our transit system handles thousands of items daily, and the Lost and Found software has helped streamline the process. We can now track lost items efficiently, and our passengers are happier knowing their belongings are safe.",

  },
  {
    name: "Catherine Lee",
    position: "Campus Security Chief",
    company: "Greenwood University",
    testimonial: "Implementing the Lost and Found software at our university has been a great decision. It's easy to use and has helped us reunite students with their lost items faster than ever before. Highly recommended!",

  },
  {
    name: "Daniel Martinez",
    position: "Store Manager",
    company: "Mega Mall",
    testimonial: "Managing lost items in a large mall was always challenging. With this software, we have a centralized system that makes it easy to log and retrieve lost items. Our customers appreciate the quick service."
  },
  {
    name: "Eva Williams",
    position: "Head of Security",
    company: "Global Airlines",
    testimonial: "As an airline, we deal with numerous lost items daily. This Lost and Found software has drastically improved our process, making it efficient and reliable. The staff training was straightforward, and the system is intuitive."
  }
]


export default function ClientFeedback() {
  return (
    <section className='py-10'>
      <div className='container pb-10'>
        <h3 className='text-center text-3xl font-bold mb-10'>Client Feedback</h3>

        <Carousel autoplay>
          {
            testimonials.map(item => <div key={item.name} className='pt-5 pb-8 bg-slate-200 rounded-lg'>
              <div className='text-center'>
                <h3 className='text-2xl font-bold'>{item.name}</h3>
                <p className='text-lg font-medium'>{item.position}</p>
                <p className='text-base mt-2'>{item.company}</p>
                <p className='mt-8 text-xl font-semibold md:w-3/4 mx-auto'>
                  {item.testimonial}
                </p>
              </div>
            </div>)
          }
        </Carousel>
      </div>
    </section>
  )
}






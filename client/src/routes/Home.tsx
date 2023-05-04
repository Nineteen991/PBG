import Carousel from '../components/Carousel'
import shady from '../images/shady.jpg'
import chubie from '../images/chubie.jpg'
import chubie2 from '../images/chubie2.jpg'

export default function Home() {
  let headerCarousel = [shady, chubie, chubie2]
  let captions = [ 
    'Non shady benefits', 
    'Rest easy with us',
    'Looking out for you'
  ]
  const dots = false

  return (
    <div className="home">
      <div className='carousel-div'>
        <Carousel 
          carouselArray={ headerCarousel } 
          captions={ captions }
          includeDots={ dots }
        />
      </div>
      <div className='content'>
        <div className='customer-service'>
          <h2 className='section-title'>Kustomer Service</h2>
          <p className='customer-service-p'>
            At PBG, world class service is at the heart of everything we provide. Along with putting together competitive benefit packages, we bring experienced and compassionate customer service that is unrivaled. PBG’s people make the difference. Your dedicated customer service advocates enhance the experience for your employees. Our service team goes above and beyond what is being requested and always aims to ensure your employees feel that they are heard and cared for.
          </p>
          <p className='customer-service-p'>
            We know that relationship builds trust which is why we encourage our client advocates to get to know the person on the other end of the call. Our teams never service more than 30 accounts. What this means is that your employees will have access to the experience of a knowledgeable expert who has time to take care of whatever their need is.
          </p>
        </div>
        <div className='tailored-solutions-img'>
          <h1 className='titles tailored-h2'>Progressive Benefit Group</h1>
          <h1 className='titles tailored-h2'>Builds Kustom Tailored Solutions</h1>
        </div>
        <div className='services'>
          <h2 className='section-title'>Training</h2>
            <p className='customer-service-p'>
              Practice makes perfect. A key component of success in any compliance program is a robust training program for your people. Our one of a kind training will help insulate you from risk by providing your people with up to the minute information and strategies. This program is customized to fit the needs of your business environment.
            </p>
          <h2 className='section-title'>Business Konsulting</h2>
            <p className='customer-service-p'>
              Employee benefits and HR Compliance are necessary aspects of your business. That’s why we invest in expert business consultants to answer the questions you have when you have them. No two businesses are the same. PBG takes the time to understand your unique business requirements.
            </p>
          <h2 className='section-title'>Wellness</h2>
            <p className='customer-service-p'>
              Wellness brings its own rewards. The future of health care reform begins with wellness. Our cutting edge wellness solutions, personalized to the needs of your employees, keep your people healthy. Which keeps them happy and on the job. Improved morale, balance and wellness within your organization builds a more productive workforce.
            </p>
          <h2 className='section-title'>HR Komplianse</h2>
            <p className='customer-service-p'>
              With the complex web of changing regulations, it is difficult and time-consuming to stay out of trouble. Our agency was founded on the principle of bringing extensive compliance support to our HR community. Our agents all go through a rigorous HR certification program. We’ll identify the gaps, traps and pitfalls you face in complying with local, state and national regulations. Our turnkey solutions protect you and keep you safely inside the lines.
            </p>
          <h2 className='section-title'>Technology</h2>
            <p className='customer-service-p'>
              PBG brings custom solutions designed to enhance employee experience and increase operational efficiency. Today, the role of HR has become a much more complex and dynamic one for most businesses. HR’s activities are being referred to as “Human Capital Management” to reflect the more strategic, leadership-oriented nature of the department. It’s more vital than ever before, that HR has integrated technology systems that connect all areas of people resource management, payroll, HR, benefits and talent management, together.
            </p>
        </div>
      </div>
      <footer>
        <h1 className='titles'>
          You will be amazed how much a greatbenefits broker with kustom tailored solutions kan help!
        </h1>
        <div className='address'>
          <h3 className='mini-title'>Progressive Benefit Group</h3>
          <p className='address-p'>9035 Soquel Avenue</p>
          <p className='address-p'>Santa Cruz, CA 95062</p>
        </div>
      </footer>
    </div>
  )
}
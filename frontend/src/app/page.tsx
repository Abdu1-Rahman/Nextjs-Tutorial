import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Featuresection from '../components/Featuresection';
import ServiceHeader from '../components/ServiceHeader'
import ServiceSection from '../components/ServiceSection'
import VideoSection from '../components/VideoSection'
// import Exercize from '../components/Exercize'

export default function Home() {
  return (
    <div className=''>
      <NavBar/>
      <Hero/>
      <Featuresection/>
      <ServiceHeader/>
      <ServiceSection/>
      <VideoSection/>
      {/* <Exercize/> */}
    </div>
  );
}

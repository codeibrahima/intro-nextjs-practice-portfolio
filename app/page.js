import {About} from '@/components/about/About';
import {Footer} from '@/components/footer/Footer';
import {Hero} from '@/components/header/Hero';
import {Projects} from '@/components/projets/Projects';
import {Testimonials} from '@/components/testimonials/Testimonials';

export default function Home() {
  return (
    <div className='font-mono'>
      <Hero />
      <Projects />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

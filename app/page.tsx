import Hero from '@/components/Hero';
import SectionTesis from '@/components/SectionTesis';
import SectionCreemos from '@/components/SectionCreemos';
import SectionProductos from '@/components/SectionProductos';
import SectionConstruimos from '@/components/SectionConstruimos';
import SectionEstudio from '@/components/SectionEstudio';
import SectionFAQ from '@/components/SectionFAQ';
import SectionCTA from '@/components/SectionCTA';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <SectionTesis />
        <SectionCreemos />
        <SectionProductos />
        <SectionConstruimos />
        <SectionEstudio />
        <SectionFAQ />
        <SectionCTA />
      </main>
      <Footer />
    </>
  );
}

import Navbar from '@/components/Navbar';
import Graph from '@/components/Graph';
import { Footer, Hero, Principles, RoadmapTeaser, WhatWeDo, WhoWeServe } from '@/components/Sections';
import { WhyKua } from '@/components/SectionsWhy';
import dynamic from 'next/dynamic';

const StickyRibbon = dynamic(() => import('@/components/StickyRibbon'), { ssr: false });
const SWRegister = dynamic(() => import('@/components/SWRegister'), { ssr: false });

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Principles />
      <WhyKua />
      <WhoWeServe />
      <RoadmapTeaser />
      <Footer />
      <StickyRibbon />
      <SWRegister />
    </main>
  );
}



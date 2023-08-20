import Image from 'next/image';
import Hero from "@/components/widgets/Hero";
import CoreTracks from '@/components/widgets/CoreTracks';
import { SpecializedTracks } from '@/components/widgets/SpecializedTracks';
import Outcome from '@/components/widgets/Outcome';

export default function Home() {
  return (
      <div>
      
      {/* Hero Section */}

      <Hero />

      {/* Core Track Section */}
      
      <CoreTracks />

      {/* Specialized Track Section */}

      <SpecializedTracks />
      
      {/* Outcome Section */}
      
      <Outcome />

      </div>

   )
}

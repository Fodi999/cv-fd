"use client";

import SectionWithImage from "@/components/SectionWithImage";
import AboutMeContent from "@/components/content/AboutMeContent";
import WebflowContent from "@/components/content/WebflowContent";
import ContactMeContent from "@/components/content/ContactMeContent";
import AdvancedServicesContent from "@/components/content/AdvancedServicesContent";

export default function Home() {
  return (
    <div className="p-6 transition-colors">
      {/* Сетка секций */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="break-inside-avoid">
          <SectionWithImage
            title="About Me"
            imageUrl="/000027.jpg"
            buttonText="Learn More"
            ContentComponent={AboutMeContent}
          />
        </div>

        <div className="break-inside-avoid">
          <SectionWithImage
            title="Webflow Development"
            imageUrl="/000027.jpg"
            buttonText="Get Started"
            ContentComponent={WebflowContent}
          />
        </div>

        <div className="break-inside-avoid">
          <SectionWithImage
            title="Contact Me"
            imageUrl="/000027.jpg"
            buttonText="Send Message"
            ContentComponent={ContactMeContent}
          />
        </div>

        <div className="break-inside-avoid">
          <SectionWithImage
            title="Advanced Services"
            imageUrl="/000027.jpg"
            buttonText="Explore"
            ContentComponent={AdvancedServicesContent}
          />
        </div>
      </div>
    </div>
  );
}

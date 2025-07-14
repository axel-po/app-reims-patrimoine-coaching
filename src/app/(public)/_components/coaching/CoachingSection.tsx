import React from "react";
import FeatureCard from "./FeatureCard";
import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";
import CallToAction from "./CallToAction";
import BackgroundElements from "./BackgroundElements";
import { features, testimonial } from "./data";

const CoachingSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <BackgroundElements />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              iconSvg={feature.iconSvg}
              index={index + 1}
            />
          ))}
        </div>

        <TestimonialCard
          quote={testimonial.quote}
          author={testimonial.author}
        />

        <CallToAction />
      </div>
    </section>
  );
};

export default CoachingSection;

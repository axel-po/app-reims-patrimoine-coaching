import React from "react";

export type FeatureProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  iconSvg?: string;
};

export type FeatureCardProps = FeatureProps & {
  index: number;
};

export type TestimonialProps = {
  quote: string;
  author: {
    name: string;
    initials: string;
    role: string;
  };
};

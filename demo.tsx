import React from 'react';
import ResponsiveHeroBanner from './components/ui/responsive-hero-banner';

const HeroDemo = () => {
    return (
        <ResponsiveHeroBanner
            badgeLabel="New"
            badgeText="Next-Gen Adaptive Learning Platform 2026"
            title="Journey Beyond Earth"
            titleLine2="Into the Cosmos of Learning"
            description="Experience next-gen education like never before. Advanced study roadmaps, peer-to-peer collaboration, and 3D interactive labs make mastery accessible, immersive, and unforgettable."
            primaryButtonText="Book Your Journey"
            primaryButtonHref="#courses"
            secondaryButtonText="Watch Demo"
            secondaryButtonHref="#roadmap"
            ctaButtonText="Reserve Seat"
            partnersTitle="Partnering with leading educational and research institutes worldwide"
        />
    );
};

export default HeroDemo;

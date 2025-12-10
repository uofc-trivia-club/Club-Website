import MainLayout from '../components/layouts/MainLayout';
import { NextPageWithLayout } from '../types/page';
import React from 'react';

const SponsorshipPage: NextPageWithLayout = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Sponsorship Opportunities</h1>
      <p className="text-lg mb-6">
        Partner with UC Trivia Club to support our competitions and events while gaining visibility within our engaged community.
      </p>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Sponsor Us?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Reach an engaged student audience</li>
          <li>Support educational activities and competitions</li>
          <li>Gain brand visibility at events and on our platforms</li>
          <li>Build community relationships</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>Interested in sponsorship? Reach out to discuss partnership opportunities.</p>
      </section>
    </div>
  );
};

SponsorshipPage.getLayout = (page: React.ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default SponsorshipPage;

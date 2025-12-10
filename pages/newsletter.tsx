import MainLayout from '../components/layouts/MainLayout';
import { NextPageWithLayout } from '../types/page';
import React from 'react';

const NewsletterPage: NextPageWithLayout = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Newsletter</h1>
      <p className="text-lg mb-6">
        Stay updated with our latest trivia insights, club updates, and community content.
      </p>
      {/* Add your newsletter content, signup form, or archive here */}
    </div>
  );
};

NewsletterPage.getLayout = (page: React.ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default NewsletterPage;

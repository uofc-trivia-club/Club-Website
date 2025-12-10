import MainLayout from '../components/layouts/MainLayout';
import { NextPageWithLayout } from '../types/page';
import React from 'react';

const MembersPage: NextPageWithLayout = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Executive Team Members</h1>
      <p className="text-lg mb-12 text-center max-w-3xl mx-auto">
        Meet the dedicated team leading UC Trivia Club and organizing our events and competitions.
      </p>
      
      {/* Add your members grid/list here - copy the member display logic from MembershipSection */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Member cards will go here */}
      </div>
    </div>
  );
};

MembersPage.getLayout = (page: React.ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default MembersPage;

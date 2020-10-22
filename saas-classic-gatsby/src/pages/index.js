import React from 'react';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import UltimateFeatures from 'sections/ultimate-features';
import Features from 'sections/features';
import IntroVideo from 'sections/intro-video';
import UsefulFeatures from 'sections/useful-features';
import Widgets from 'sections/widgets';
import Pricing from 'sections/pricing';
import Faq from 'sections/faq';

export default function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Startup Landing 010"
        description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
      />
      <Banner />
      <UltimateFeatures />
      <Features />
      <IntroVideo />
      <UsefulFeatures />
      <Widgets />
      <Pricing />
      <Faq />
    </Layout>
  );
}

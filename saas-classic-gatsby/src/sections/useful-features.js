/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import UltimateFeature from 'components/cards/ultimate-feature';

import bulb from 'assets/images/icons/bulb-2.png';
import diamond from 'assets/images/icons/diamond.png';
import help from 'assets/images/icons/help.png';
import award from 'assets/images/icons/award.png';

const data = [
  {
    id: 1,
    icon: bulb,
    title: 'Fast Performance',
    description: `Let’s just get this out of the way - there will always be a kit version of Eduflow. Built by educators, we believe in equating education for all. Paid subscriptions allow us to continue helping learners around the world.`,
  },
  {
    id: 2,
    icon: diamond,
    title: 'Pro Subscription',
    description: `We believe it’s important for everyone to have access to software – especially when it comes to digital learning tools. Eduflow is built with WCAG standards in mind and can easily be navigated by keyboard and screen readers.`,
  },
  {
    id: 3,
    icon: help,
    title: 'Partnership deal',
    description: `Let’s just get this out of the way - there will always be a kit version of Eduflow. Built by educators, we believe in equating education for all. Paid subscriptions allow us to continue helping learners around the world.`,
  },
  {
    id: 4,
    icon: award,
    title: 'Customer Support',
    description: `We believe it’s important for everyone to have access to software – especially when it comes to digital learning tools. Eduflow is built with WCAG standards in mind and can easily be navigated by keyboard and screen readers.`,
  },
];

const UsefulFeatures = () => {
  return (
    <Box as="section" id="useful-features" variant="section.usefulFeatures">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Amazing useful features"
          description="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred format."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <UltimateFeature
              key={item.id}
              data={item}
              className="feature-item"
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UsefulFeatures;

const styles = {
  heading: {
    marginBottom: 80,
  },
  features: {
    gap: 60,
    display: ['grid'],
    gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)'],
    '.feature-item': {
      display: ['block', 'block', 'block', 'block', 'flex'],
      px: ['15px', 0],
      maxWidth: ['none'],
      figure: {
        minWidth: '90px',
        m: [
          '0 auto 30px',
          '0 auto 30px',
          '0 auto 30px',
          '0 auto 30px',
          '0 26px 0 0',
        ],
      },
    },
  },
};

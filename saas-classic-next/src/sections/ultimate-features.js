/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import UltimateFeature from 'components/cards/ultimate-feature';

import bulb from 'assets/images/icons/bulb.png';
import dart from 'assets/images/icons/dart.png';
import rocket from 'assets/images/icons/rocket.png';
import trophy from 'assets/images/icons/trophy.png';

const data = [
  {
    id: 1,
    icon: bulb,
    title: 'Fast Performance',
    description: 'See where you’re making and spending money in real.',
  },
  {
    id: 2,
    icon: dart,
    title: 'Best Strategy',
    description: 'Send money with three clicks by wire, check, or ACH.',
  },
  {
    id: 3,
    icon: rocket,
    title: 'Boost Performance',
    description: 'Choose the right tone and fast formality level.',
  },
  {
    id: 4,
    icon: trophy,
    title: 'Award history',
    description: `Keep secure with fluent 2-factor authentication full activity.`,
  },
];

const UltimateFeatures = () => {
  return (
    <Box as="section" id="ultimate-feature" variant="section.ultimateFeature">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Go Beyond unlimited features"
          description="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred format."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <UltimateFeature key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UltimateFeatures;

const styles = {
  heading: {
    marginBottom: [60, 60, 60, 80],
  },
  features: {
    gap: ['35px 60px', 60, 60, 40, 30, 60],
    display: ['grid', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(4, 1fr)',
    ],
  },
};

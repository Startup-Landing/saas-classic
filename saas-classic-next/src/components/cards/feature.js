/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { rgba } from 'polished';

const Feature = ({ feature }) => {
  return (
    <Box sx={styles.featureItem}>
      <Text as="p" sx={styles.value} style={{ color: feature?.color }}>
        {feature.value}
      </Text>
      <Text as="p" sx={styles.title}>
        {feature.title}
      </Text>
    </Box>
  );
};

export default Feature;

const styles = {
  featureItem: {
    backgroundColor: '#fff',
    boxShadow: '0px 25px 100px rgba(69, 88, 157, 0.08)',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // maxWidth: 300,
    flexDirection: 'column',
    padding: [
      '0 5px',
      '0 18px',
      '0 18px',
      '0 12px',
      '0 20px',
      '0 25px',
      '0 59px',
    ],
    textAlign: 'center',
    minHeight: [150, 150, 150, 185, 240, 280, 320],
    width: ['auto', 'auto', 'auto', 177, 225, 258, 300],
  },
  value: {
    fontWeight: 700,
    fontSize: [30, 30, 30, 30, 50, 60, 72],
    lineHeight: [1.83, 0.76],
    letterSpacing: '-1.5px',
  },
  title: {
    fontSize: ['14px', '16px', '16px', '15px', '17px'],
    lineHeight: [1.62, 1.48],
    letterSpacing: '-0.2px',
    color: 'heading',
    mt: ['1px', '20px'],
    color: rgba('#0F2137', 0.7),
  },
};

/** @jsx jsx */
import { jsx, Box, Button, Heading, Text } from 'theme-ui';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { IoIosCloseCircle } from 'react-icons/io';

const PriceTable = ({ price, isMonthly }) => {
  return (
    <Box
      sx={styles.priceTable}
      className={`priceCard ${price.isRecommended ? 'recommended' : ''}`}
    >
      {price?.isRecommended && (
        <Text as="span" sx={styles.recommended}>
          Recommended
        </Text>
      )}
      <Box sx={styles.header}>
        <Box className="priceHeader">
          <Heading as="h3" sx={styles.title}>
            {price.title}
          </Heading>
          <Text as="p" sx={styles.subtitle}>
            {price.subtitle}
          </Text>
        </Box>
        {price?.amount !== 0 && (
          <Box className="priceAmount">
            <Text as="p" sx={styles.priceLabel}>
              Starting from
            </Text>

            <Text as="p" sx={styles.priceAmount}>
              {price?.amount?.toFixed(0)}
              /mo
            </Text>
          </Box>
        )}
      </Box>
      <Box as="ul" sx={styles.list}>
        {price?.features?.map((feat) => (
          <li key={feat.id} className={!feat.isAvailable ? 'unavailable' : ''}>
            {feat.isAvailable ? (
              <IoMdCheckmarkCircle color="#3FDBB1" size="30px" />
            ) : (
              <IoIosCloseCircle color="#CED7E1" size="30px" />
            )}
            <span>{feat.title}</span>
          </li>
        ))}
      </Box>
      <Box sx={{ textAlign: 'center' }} className="priceButton">
        <Button sx={styles.button} variant="primaryMd">
          {price.buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default PriceTable;

const styles = {
  priceTable: {
    border: `1px solid #F3F4F5`,
    borderRadius: 10,
    position: 'relative',
    padding: ['30px 20px', null, null, '55px 20px', null],
    '&.recommended': {
      backgroundColor: '#fff',
      borderColor: 'primary',
      borderWidth: '2.5px',
      color: 'text',
      '@media only screen and (max-width: 767px)': {
        pt: 65,
      },
      footer: {
        backgroundColor: '#F0F0F5',
        borderRadius: '0 0 10px 10px',
        '.price-label': {
          color: 'text',
        },
        '.price-value': {
          color: 'primary',
        },
      },
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 700,
    fontSize: 22,
    lineHeight: 1.31,
    letterSpacing: '-0.55px',
  },
  subtitle: {
    mt: '6px',
  },
  priceLabel: {},
  priceAmount: {
    color: 'primary',
    fontWeight: 'bold',
    fontSize: '26px',
    lineHeight: 1.39,
    textAlign: 'right',
    letterSpacing: 'heading',
  },
  recommended: {
    backgroundColor: 'secondary',
    minHeight: '31px',
    alignItems: 'center',
    display: 'inline-flex',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 700,
    padding: '0 8px',
    letterSpacing: '-0.14px',
    borderRadius: '3px',
    position: 'absolute',
    top: 17,
    left: [20, null, null, null, 40],
  },
  list: {
    listStyle: 'none',
    padding: 0,
    mt: [35, null, null, 50],
    maxWidth: 340,
    li: {
      display: 'flex',
      alignItems: 'flex-start',
      fontSize: 16,
      lineHeight: 1.62,
      '+ li ': {
        mt: 30,
      },
      svg: {
        mr: '13px',
        mt: '5px',
      },
    },
    '.unavailable': {
      opacity: 0.5,
    },
  },
  button: {
    backgroundColor: '#FCF2E8',
    color: 'secondary',
    paddingLeft: 45,
    paddingRight: 45,
    marginTop: [35, null, null, 70],
    ':hover': {
      backgroundColor: 'secondary',
      color: '#fff',
    },
  },
};

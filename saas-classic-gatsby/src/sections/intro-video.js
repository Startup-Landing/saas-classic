/** @jsx jsx */
import { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { jsx, Box, Container, Button, Image as Img } from 'theme-ui';
import { LearnMore } from 'components/link';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
// import videoBanner from 'assets/images/video.png'
import Play from 'assets/images/icons/play.png';
import Modal, { CloseButton } from 'components/modal/modal';
import ResponsiveIframe from 'components/responsive-iframe';

const IntroVideo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      videoBanner: file(relativePath: { eq: "video.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Box as="section" sx={styles.section} variant="section.introVideo">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Leading companies trust us to develop most powerful software with our talent team"
          description="Every email, web page, and social media post makes an impression on your customers. With our software you can be confident it's impression."
        />
        <Box sx={styles.videoWrapper}>
          <Box sx={styles.explore}>
            <LearnMore path="#!" label="Explore More" />
          </Box>
          <Modal isOpen={isOpen}>
            <CloseButton
              onClick={() => setIsOpen(false)}
              size="24px"
              color="#fff"
            />
            <ResponsiveIframe
              src="https://player.vimeo.com/video/394343710?autoplay=1&color=28DDB2&title=0&byline=0&portrait=0"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Intro Video"
            />
          </Modal>

          <Image
            src={data.videoBanner.childImageSharp.fluid}
            className="video-banner"
            alt="video banner"
          />
          <Button
            variant="text"
            sx={styles.playPause}
            onClick={() => setIsOpen(true)}
          >
            <Img src={Play} alt="play" /> Watch Full video
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default IntroVideo;

const styles = {
  heading: {
    maxWidth: '620px',
    mb: [5],
    h2: {
      letterSpacing: 'heading',
    },
  },
  videoWrapper: {
    textAlign: 'center',
    position: 'relative',
    '.video-banner': {
      maxWidth: ['100%', '100%', '100%', '100%', '100%', '80%', '100%'],
      m: '0 auto',
    },
  },
  explore: {
    textAlign: ['center'],
    mb: [6],
  },
  playPause: {
    color: 'white',
    fontWeight: 700,
    position: 'absolute',
    padding: '0px',
    bottom: [40, 40, 40, 70, 100],
    left: '50%',
    transform: 'translateX(-50%)',
    ':focus': {
      outline: 0,
    },
    img: {
      mr: '16px',
    },
  },
};

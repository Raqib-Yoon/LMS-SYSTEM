import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { useRef } from 'react';
import Slider from 'react-slick';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

// components
import Image from './Image';
import { CarouselArrows } from './carousel';
import { MotionViewport, varFade } from './animate';

// ----------------------------------------------------------------------

export default function CustomSlider(props) {
  const { sliderData, settings, title } = props;

  const carouselRef = useRef(null);

  const theme = useTheme();

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <Container component={MotionViewport} sx={{ pb: 10, textAlign: 'center' }}>
      <m.div variants={varFade().inRight}>
        <Typography variant="h5" sx={{ mb: 3, textAlign: 'start' }}>
          {title}
        </Typography>
      </m.div>

      <Box sx={{ position: 'relative' }}>
        <CarouselArrows filled onNext={handleNext} onPrevious={handlePrevious}>
          <Slider ref={carouselRef} {...settings}>
            {sliderData.map((item) => (
              <Box key={item.title + item.subTitle} component={m.div} variants={varFade().in}>
                <MemberCard member={item} />
              </Box>
            ))}
          </Slider>
        </CarouselArrows>
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

MemberCard.propTypes = {
  member: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
  }),
};

function MemberCard({ member }) {
  const { title, image } = member;

  return (
    <Box key={title + image} sx={{ px: 0.5, mx: 0.5 }}>
      <Button component={Link} to={`/searched/products`}>
        <Image alt={title + image} src={image} ratio="1/1" sx={{ borderRadius: 1 }} />
      </Button>
      <Typography variant="subtitle1" sx={{ mt: 2, mb: 0.5, color: 'primary.dark', fontSize: '80%' }}>
        {title}
      </Typography>
    </Box>
  );
}

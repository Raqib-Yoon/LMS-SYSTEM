import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { useRef } from 'react';
import Slider from 'react-slick';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Rating, Container, Typography } from '@mui/material';

// components
import Image from './Image';
import { CarouselArrows } from './carousel';
import { MotionViewport, varFade } from './animate';

import { _carouselsMembers } from '../_mock';

// ----------------------------------------------------------------------

export default function ImageSlider(props) {
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
    <Container component={MotionViewport} sx={{ pb: 10 }}>
      <m.div variants={varFade().inRight}>
        <Typography variant="h6" sx={{ mb: 3, textAlign: 'start' }}>
          {title}
        </Typography>
      </m.div>

      <Box>
        <Slider ref={carouselRef} {...settings}>
          {sliderData.map((item) => (
            <Box key={item.id + item.image} component={m.div} variants={varFade().in}>
              <img
                src={item.image}
                alt={'Course'}
                style={{
                  border: `5px solid ${theme.palette.warning.main}`,
                  width: '95%',
                  height: '200px',
                  display: 'flex',
                  justifyContent: 'center',
                  mt: 3,
                }}
              />
              <Typography
                color={theme.palette.text.primary}
                sx={{ width: '100%', fontWeigt: 'bold', textAlign: 'start' }}
                variant="h6"
              >
                {item.title}
              </Typography>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} size={'small'} />
              <Box display={'flex'} justifyContent={'space-evenly'}>
                <Typography
                  color={theme.palette.text.secondary}
                  sx={{ textAlign: 'start', fontSize: '.7.5rem' }}
                  variant="body2"
                >
                  {item?.instructor}
                </Typography>

                <Typography
                  color={theme.palette.text.secondary}
                  sx={{ textAlign: 'end', fontSize: '.7.5rem' }}
                  variant="body2"
                >
                  {item?.hours}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
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
      <Image alt={title + image} src={image} ratio="1/1" sx={{ borderRadius: 1 }} />
      <Typography variant="subtitle1" sx={{ mt: 2, mb: 0.5, color: 'primary.dark', fontSize: '80%' }}>
        {title}
      </Typography>
    </Box>
  );
}

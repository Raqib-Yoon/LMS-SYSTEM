import React from 'react';
import { Typography, Card, CardContent, CardMedia, Button, Rating, Box, useTheme } from '@mui/material';

//images
import course1 from '../../assets/landing/course2.jpg';
// hooks
import useResponsive from '../../hooks/useResponsive';

const mockSearchResults = [
  {
    title: '100Days of Code:The Complete Python Pro Bootcamp',
    Description: 'You will master the Python programming language by building 100 unique projects over 100 days.',
    instructor: 'John Doe',
    image: course1,
    rating: 4.5,
    students: 1000,
    price: '$19.99',
  },
];

const SearchResultPage = () => {
  const theme = useTheme();
  const isMatchMobile = useResponsive('down', 'md');
  return (
    <Box sx={{ display: 'flex', flex: 1.7, flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Search Results
      </Typography>
      {mockSearchResults.map(({ title, instructor, image, Description }, index) => (
        <Card
          sx={{
            display: 'flex',
            flexDirection: isMatchMobile ? 'column' : 'row',
          }}
          key={index + image}
        >
          <CardMedia
            sx={{
              maxWidth: isMatchMobile ? '100%' : '300px',
              height: isMatchMobile ? '300px' : '100%',
              borderRadius: 'none',
            }}
            component="img"
            alt={title}
            image={image}
            title={title}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography variant="h6" sx={{ color: (theme) => theme.palette.text.primary }}>
                {title}
              </Typography>
              <Typography
                gutterBottom
                sx={{ width: '80%' }}
                variant="subtitle1"
                sx={{ color: (theme) => theme.palette.text.secondary }}
              >
                {Description}
              </Typography>
              <Typography gutterBottom variant="subtitle1" sx={{ color: (theme) => theme.palette.text.primary }}>
                {instructor}
              </Typography>
              <Rating name="Course-star" defaultValue={2.5} precision={0.5} size={'small'} readOnly />
              <Typography variant="subtitle1" sx={{ color: (theme) => theme.palette.text.primary }}>
                3:30h
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem', marginRight: '.5rem' }}>
              <Button sx={{ color: (theme) => theme.palette.text.primary }} variant="contained">
                Add To Cart
              </Button>
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default SearchResultPage;

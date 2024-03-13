import React, { useState } from 'react';
import Page from '../../components/Page';
import {
  Container,
  Typography,
  Rating,
  Paper,
  Button,
  Box,
  Link,
  Divider,
  useTheme,
  AccordionSummary,
  AccordionDetails,
  Accordion,
  // LIST
  List,
  ListItem,
  ListItemIcon,
  // avatar
  Avatar,
  // Card
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@mui/material';
// icons
import { FiClock, FiGlobe, FiYoutube, FiPlay, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { GoDotFill } from 'react-icons/go';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GiAchievement } from 'react-icons/gi';
import { GoMilestone, GoStarFill } from 'react-icons/go';
import useResponsive from '../../hooks/useResponsive';

// show More
import ShowMoreText from 'react-show-more-text';
// style

// Components
import ImageSlider from '../../components/ImageSlider';
import VideoSlider from '../../components/videoSlider';

//animation
import wahab from '../../assets/team/wahab.jpeg';
import Lottie from 'react-lottie';
import animationSetter from '../../animation/animationSetter';
import AvatarAnimation from '../../animation/avatar/avatar.json';

const CourseDetailPage = () => {
  const theme = useTheme();
  const isMatchExactLargeScreen = useResponsive('down', 'lg');
  // show more
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };

  // Review Section Config
  const ReviewSliderConfig = {
    ImageSliderConfig: {
      autoplay: true,
      slidesToShow: 1,
      arrows: false,
      speed: 200,
      centerMode: false,
      rtl: Boolean(theme.direction === 'rtl'),
      responsive: [
        {
          breakpoint: 1279,
          settings: { slidesToShow: 2 },
        },
        {
          breakpoint: 959,
          settings: { slidesToShow: 1 },
        },
        {
          breakpoint: 600,
          settings: { slidesToShow: 1 },
        },
      ],
    },
    ImageSliderData: [
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        flexDirection={'column'}
        sx={{ border: `2px solid ${theme.palette.divider}`, p: 2 }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Box>
            <Avatar sx={{ width: 50, height: 50 }}> W A</Avatar>
          </Box>
          <Box display={'flex'} flexDirection={'column'}>
            <Box display={'flex'} flexDirection={'row'}>
              <Typography fontWeight={'bold'} variant="body2" paragraph>
                Wahab Adil
              </Typography>
            </Box>
            <Box mt={-2}>
              <Rating defaultValue={5} precision={0.5} size={'small'} />
            </Box>
          </Box>

          {/* Description */}
        </Box>
        <Box sx={{ mt: 3 }}>
          <Box sx={{ color: expand ? 'text.primary' : 'text.secondary' }}>
            <ShowMoreText
              lines={3}
              keepNewLines
              more={
                <>
                  <br />
                  <Box display={'flex'} alignItems={'center'}>
                    <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
                      Show more
                    </Typography>
                    <FiChevronDown color={theme.palette.primary.main} />
                  </Box>
                </>
              }
              less={
                <>
                  <br />
                  <Box display={'flex'} alignItems={'baseline'}>
                    <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
                      Show less
                    </Typography>
                    <FiChevronUp color={theme.palette.primary.main} />
                  </Box>
                </>
              }
              onClick={onClick}
              expanded={expand}
            >
              "Welcome to the 100 Days of Code - The Complete Python Pro Bootcamp, the only course you need to learn to
              code with Python. With over 500,000 5 STAR reviews and a 4.8 average, my courses are some of the HIGHEST
              RATED courses in the history of Udemy! 100 days, 1 hour per day, learn to build 1 project per day, this is
              how you master Python. At 60+ hours, this Python course is without a doubt the most comprehensive Python
              course available anywhere online. Even if you have zero programming experience, this course will take you
              from beginner to professional. Here's why: " "Welcome to the 100 Days of Code - The Complete Python Pro
              Bootcamp, the only course you need to learn to code with Python. With over 500,000 5 STAR reviews and a
              4.8 average, my courses are some of the HIGHEST RATED courses in the history of Udemy! 100 days, 1 hour
              per day, learn to build 1 project per day, this is how you master Python. At 60+ hours, this Python course
              is without a doubt the most comprehensive Python course available anywhere online. Even if you have zero
              programming experience, this course will take you from beginner to professional. Here's why: "
            </ShowMoreText>
          </Box>
        </Box>
      </Box>,
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        flexDirection={'column'}
        sx={{ border: `2px solid ${theme.palette.divider}`, p: 2 }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Box>
            <Avatar sx={{ width: 50, height: 50 }}> R Y</Avatar>
          </Box>
          <Box display={'flex'} flexDirection={'column'}>
            <Box display={'flex'} flexDirection={'row'}>
              <Typography fontWeight={'bold'} variant="body2" paragraph>
                Raqib Yoon
              </Typography>
            </Box>
            <Box mt={-2}>
              <Rating defaultValue={5} precision={0.5} size={'small'} />
            </Box>
          </Box>

          {/* Description */}
        </Box>
        <Box sx={{ mt: 3 }}>
          <Box sx={{ color: expand ? 'text.primary' : 'text.secondary' }}>
            <ShowMoreText
              lines={3}
              keepNewLines
              more={
                <>
                  <br />
                  <Box display={'flex'} alignItems={'center'}>
                    <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
                      Show more
                    </Typography>
                    <FiChevronDown color={theme.palette.primary.main} />
                  </Box>
                </>
              }
              less={
                <>
                  <br />
                  <Box display={'flex'} alignItems={'baseline'}>
                    <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
                      Show less
                    </Typography>
                    <FiChevronUp color={theme.palette.primary.main} />
                  </Box>
                </>
              }
              onClick={onClick}
              expanded={expand}
            >
              "Welcome to the 100 Days of Code - The Complete Python Pro Bootcamp, the only course you need to learn to
              code with Python. With over 500,000 5 STAR reviews and a 4.8 average, my courses are some of the HIGHEST
              RATED courses in the history of Udemy! 100 days, 1 hour per day, learn to build 1 project per day, this is
              how you master Python. At 60+ hours, this Python course is without a doubt the most comprehensive Python
              course available anywhere online. Even if you have zero programming experience, this course will take you
              from beginner to professional. Here's why: " "Welcome to the 100 Days of Code - The Complete Python Pro
              Bootcamp, the only course you need to learn to code with Python. With over 500,000 5 STAR reviews and a
              4.8 average, my courses are some of the HIGHEST RATED courses in the history of Udemy! 100 days, 1 hour
              per day, learn to build 1 project per day, this is how you master Python. At 60+ hours, this Python course
              is without a doubt the most comprehensive Python course available anywhere online. Even if you have zero
              programming experience, this course will take you from beginner to professional. Here's why: "
            </ShowMoreText>
          </Box>
        </Box>
      </Box>,
    ],
  };

  // Video Slider Section Config
  const VideoSliderConfig = {
    ImageSliderConfig: {
      autoplay: true,
      slidesToShow: 1,
      arrows: false,
      speed: 200,
      centerMode: false,
      rtl: Boolean(theme.direction === 'rtl'),
      responsive: [
        {
          breakpoint: 1279,
          settings: { slidesToShow: 2 },
        },
        {
          breakpoint: 959,
          settings: { slidesToShow: 1 },
        },
        {
          breakpoint: 600,
          settings: { slidesToShow: 1 },
        },
      ],
    },
    ImageSliderData: [
      {
        image: 'https://m.media-amazon.com/images/G/31/img22/Beauty/aman/SSD/Bodywash-Fest_1400x800._SX900_QL85_.jpg',
        title: '100 Days Of Coding 1',
        instructor: 'Wahab-Adil',
        hours: '4hours',
      },
      {
        image:
          'https://m.media-amazon.com/images/G/31/img22/Beauty/aman/april/265-23_MON_Ecom_banner_-_33_off_1400_X_800_1._SX900_QL85_.jpg',
        title: '100 Days Of Coding 2',
        instructor: 'Wahab-Adil',
        hours: '5hours',
      },
    ],
  };
  return (
    <Page title="Course Details">
      <Box display={'flex'} flexDirection={isMatchExactLargeScreen ? 'column-reverse' : 'row'} gap={1}>
        <Container sx={{ width: isMatchExactLargeScreen ? '100%' : '70vw', mt: '2rem' }}>
          <Paper style={{ padding: '20px', marginTop: '20px' }}>
            {/* Course Title, Description, and Objectives */}
            <Typography variant="h4" gutterBottom>
              100 Days of Code: The Complete Python Pro Bootcamp
            </Typography>
            <Typography sx={{ width: '80%' }} variant="body1" paragraph>
              Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games
              and apps!
            </Typography>
            <Box display={'flex'} flexDirection={'row'} gap={2.5}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              <Typography component={Link} variant="body2" gutterBottom>
                (20345&nbsp;rating)&nbsp;
              </Typography>
              <Typography variant="body2" gutterBottom>
                20345&nbsp;viewd
              </Typography>
            </Box>
            <Box display={'flex'} flexDirection={'row'} mt={3}>
              <Typography variant="body2" gutterBottom>
                Created
              </Typography>
              <Typography component={Link} variant="body2" gutterBottom>
                &nbsp; Wahab-Adil
              </Typography>
            </Box>
            <Box display={'flex'} flexDirection={'row'} gap={3.4} sx={{ mt: 3 }}>
              <Box display={'flex'} flexDirection={'row'}>
                <Typography variant="body2" gutterBottom>
                  <FiClock />
                  &nbsp; Last Update
                </Typography>
                <Typography component={Link} variant="body2" gutterBottom>
                  &nbsp; 2024-4
                </Typography>
              </Box>
              <Box display={'flex'} flexDirection={'row'}>
                <Typography variant="body1" gutterBottom>
                  <FiGlobe />
                  &nbsp; English
                </Typography>
              </Box>
              <Box display={'flex'} flexDirection={'row'}>
                <Typography variant="body1" gutterBottom>
                  <FiYoutube />
                  &nbsp; 2:35H
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Paper style={{ padding: '20px', marginTop: '20px' }}>
            <Divider />
            <Box style={{ border: `1px solid ${theme.palette.divider}`, padding: '1em' }}>
              <Typography variant="h4" gutterBottom>
                What you'll learn
              </Typography>
              <Typography variant="body1" paragraph>
                React-Quill Editer
              </Typography>
            </Box>
            <Box style={{ border: `1px solid ${theme.palette.divider}`, padding: '1em' }}>
              <Typography variant="h4" gutterBottom>
                Course content
              </Typography>
              <Accordion sx={{ backgroundColor: theme.palette.background.default }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                  Day 1 Goals: what we will make by the end of the days
                </AccordionSummary>
                <AccordionDetails>
                  <Box
                    sx={{
                      '&:hover': {
                        cursor: 'pointer',
                        textDecoration: 'underline',
                      },
                    }}
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                  >
                    <Box>
                      <Typography
                        sx={{
                          '&:hover': {
                            color: 'text.primary',
                          },
                        }}
                        color="text.secondary"
                        variant="body2"
                        gutterBottom
                      >
                        <FiPlay /> &nbsp; Number Manipulation and F Strings in Python
                      </Typography>{' '}
                    </Box>
                    <Box>
                      <Typography color="text.secondary" variant="body2" gutterBottom>
                        4:38
                      </Typography>{' '}
                    </Box>
                  </Box>
                </AccordionDetails>
                <AccordionDetails>
                  <Box
                    sx={{
                      '&:hover': {
                        cursor: 'pointer',
                        textDecoration: 'underline',
                      },
                    }}
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                  >
                    <Box>
                      <Typography
                        sx={{
                          '&:hover': {
                            color: 'text.primary',
                          },
                        }}
                        color="text.secondary"
                        variant="body2"
                        gutterBottom
                      >
                        <FiPlay /> &nbsp; Python Primitive Data Types
                      </Typography>{' '}
                    </Box>
                    <Box>
                      <Typography color="text.secondary" variant="body2" gutterBottom>
                        49:00
                      </Typography>{' '}
                    </Box>
                  </Box>
                </AccordionDetails>{' '}
                <AccordionDetails>
                  <Box
                    sx={{
                      '&:hover': {
                        cursor: 'pointer',
                        textDecoration: 'underline',
                      },
                    }}
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                  >
                    <Box>
                      <Typography
                        sx={{
                          '&:hover': {
                            color: 'text.primary',
                          },
                        }}
                        color="text.secondary"
                        variant="body2"
                        gutterBottom
                      >
                        <FiPlay /> &nbsp; Data Types Quiz
                      </Typography>{' '}
                    </Box>
                    <Box>
                      <Typography color="text.secondary" variant="body2" gutterBottom>
                        35:38
                      </Typography>{' '}
                    </Box>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ backgroundColor: theme.palette.background.default }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                  Day 2 Goals: Implementing Css In HTML
                </AccordionSummary>
                <AccordionDetails>
                  <Box
                    sx={{
                      '&:hover': {
                        cursor: 'pointer',
                        textDecoration: 'underline',
                      },
                    }}
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                  >
                    <Box>
                      <Typography
                        sx={{
                          '&:hover': {
                            color: 'text.primary',
                          },
                        }}
                        color="text.secondary"
                        variant="body2"
                        gutterBottom
                      >
                        <FiPlay /> &nbsp; Number Manipulation and F Strings in Python
                      </Typography>{' '}
                    </Box>
                    <Box>
                      <Typography color="text.secondary" variant="body2" gutterBottom>
                        4:38
                      </Typography>{' '}
                    </Box>
                  </Box>
                </AccordionDetails>
                <AccordionDetails>
                  <Box
                    sx={{
                      '&:hover': {
                        cursor: 'pointer',
                        textDecoration: 'underline',
                      },
                    }}
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                  >
                    <Box>
                      <Typography
                        sx={{
                          '&:hover': {
                            color: 'text.primary',
                          },
                        }}
                        color="text.secondary"
                        variant="body2"
                        gutterBottom
                      >
                        <FiPlay /> &nbsp; Python Primitive Data Types
                      </Typography>{' '}
                    </Box>
                    <Box>
                      <Typography color="text.secondary" variant="body2" gutterBottom>
                        49:00
                      </Typography>{' '}
                    </Box>
                  </Box>
                </AccordionDetails>{' '}
                <AccordionDetails>
                  <Box
                    sx={{
                      '&:hover': {
                        cursor: 'pointer',
                        textDecoration: 'underline',
                      },
                    }}
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                  >
                    <Box>
                      <Typography
                        sx={{
                          '&:hover': {
                            color: 'text.primary',
                          },
                        }}
                        color="text.secondary"
                        variant="body2"
                        gutterBottom
                      >
                        <FiPlay /> &nbsp; Data Types Quiz
                      </Typography>{' '}
                    </Box>
                    <Box>
                      <Typography color="text.secondary" variant="body2" gutterBottom>
                        35:38
                      </Typography>{' '}
                    </Box>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>

            {/* List */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="h5" gutterBottom>
                Requirements
              </Typography>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} aria-label="contacts">
                <ListItem disablePadding>
                  <Typography variant="body2" paragraph>
                    <ListItemIcon>
                      <GoDotFill />
                    </ListItemIcon>
                    HTML
                  </Typography>
                </ListItem>
                <ListItem disablePadding>
                  <Typography variant="body2" paragraph>
                    <ListItemIcon>
                      <GoDotFill />
                    </ListItemIcon>
                    CSS
                  </Typography>
                </ListItem>
              </List>
            </Box>

            {/* Description */}
            <Box sx={{ mt: 3, width: '50%' }}>
              <Typography variant="h5" gutterBottom>
                Description
              </Typography>
              <Box sx={{ color: expand ? 'text.primary' : 'text.secondary' }}>
                <ShowMoreText
                  lines={3}
                  keepNewLines
                  more={
                    <>
                      <br />
                      <Box display={'flex'} alignItems={'center'}>
                        <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
                          Show more
                        </Typography>
                        <FiChevronDown color={theme.palette.primary.main} />
                      </Box>
                    </>
                  }
                  less={
                    <>
                      <br />
                      <Box display={'flex'} alignItems={'baseline'}>
                        <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
                          Show less
                        </Typography>
                        <FiChevronUp color={theme.palette.primary.main} />
                      </Box>
                    </>
                  }
                  onClick={onClick}
                  expanded={expand}
                >
                  "Welcome to the 100 Days of Code - The Complete Python Pro Bootcamp, the only course you need to learn
                  to code with Python. With over 500,000 5 STAR reviews and a 4.8 average, my courses are some of the
                  HIGHEST RATED courses in the history of Udemy! 100 days, 1 hour per day, learn to build 1 project per
                  day, this is how you master Python. At 60+ hours, this Python course is without a doubt the most
                  comprehensive Python course available anywhere online. Even if you have zero programming experience,
                  this course will take you from beginner to professional. Here's why: "
                </ShowMoreText>
              </Box>
            </Box>
            <Box style={{ border: `1px solid ${theme.palette.divider}`, padding: '1em', mt: 3 }}>
              <Typography variant="h4" gutterBottom>
                Instructor
              </Typography>
              <Typography variant="body1" component={Link}>
                Dr. Angela Yu
              </Typography>
              <Typography variant="body2" paragraph>
                Developer and Lead Instructor
              </Typography>
              <Box display="flex" alignItems="center">
                <Box>
                  <div style={{ position: 'relative', top: 0, left: 0 }}>
                    <Avatar
                      sx={{
                        width: '200px',
                        height: '200px',
                        background: 'none',
                        border: (theme) => `solid 2px ${theme.palette.background.default}`,
                      }}
                    >
                      <Lottie options={animationSetter(AvatarAnimation)} />
                      <Avatar
                        sx={{
                          position: 'absolute',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '133px',
                          height: '133px',
                        }}
                        src={wahab}
                      />
                    </Avatar>
                  </div>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={1}>
                  <Box display={'flex'} flexDirection={'row'}>
                    <Typography variant="body2" gutterBottom paragraph>
                      <FiPlay />
                      &nbsp; 7courses
                    </Typography>
                  </Box>
                  <Box display={'flex'} flexDirection={'row'} paragraph>
                    <Typography variant="body1" gutterBottom>
                      <GiAchievement />
                      &nbsp; 2,3M Reviews
                    </Typography>
                  </Box>
                  <Box display={'flex'} flexDirection={'row'} paragraph>
                    <Typography variant="body1" gutterBottom>
                      <GoMilestone />
                      &nbsp; 2900 &nbsp;Lecture
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ mt: 3, width: '80%' }}>
                <Typography variant="h5" gutterBottom>
                  Description
                </Typography>
                <Box sx={{ color: expand ? 'text.primary' : 'text.secondary' }}>
                  <ShowMoreText
                    lines={3}
                    keepNewLines
                    more={
                      <>
                        <br />
                        <Box display={'flex'} alignItems={'center'}>
                          <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
                            Show more
                          </Typography>
                          <FiChevronDown color={theme.palette.primary.main} />
                        </Box>
                      </>
                    }
                    less={
                      <>
                        <br />
                        <Box display={'flex'} alignItems={'baseline'}>
                          <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
                            Show less
                          </Typography>
                          <FiChevronUp color={theme.palette.primary.main} />
                        </Box>
                      </>
                    }
                    onClick={onClick}
                    expanded={expand}
                  >
                    "Welcome to the 100 Days of Code - The Complete Python Pro Bootcamp, the only course you need to
                    learn to code with Python. With over 500,000 5 STAR reviews and a 4.8 average, my courses are some
                    of the HIGHEST RATED courses in the history of Udemy! 100 days, 1 hour per day, learn to build 1
                    project per day, this is how you master Python. At 60+ hours, this Python course is without a doubt
                    the most comprehensive Python course available anywhere online. Even if you have zero programming
                    experience, this course will take you from beginner to professional. Here's why: "
                  </ShowMoreText>
                </Box>
              </Box>
              <Box mt={4} mb={-4} display={'flex'} flexDirection={'row'} paragraph>
                <Typography variant="h5">
                  <GoStarFill />
                  4.7 course rating 362K ratings
                </Typography>
              </Box>

              <Box>
                <ImageSlider
                  sliderData={ReviewSliderConfig.ImageSliderData}
                  settings={ReviewSliderConfig.ImageSliderConfig}
                />
              </Box>

              {/* video Slider */}
              <Box mt={4} mb={-4} display={'flex'} flexDirection={'row'} paragraph>
                <Typography variant="h6">
                  More Courses by
                  <Typography variant="body1" component={Link}>
                    &nbsp;&nbsp;Dr. Angela Yu
                  </Typography>
                </Typography>
              </Box>

              <Box>
                <VideoSlider
                  sliderData={VideoSliderConfig.ImageSliderData}
                  settings={VideoSliderConfig.ImageSliderConfig}
                />
              </Box>
            </Box>
          </Paper>
        </Container>
        <Container>
          <Card
            sx={
              !isMatchExactLargeScreen
                ? {
                    minWidth: 385,
                    position: isMatchExactLargeScreen ? 'block' : 'fixed',
                    top: 90,
                    right: 1,
                    zIndex: 1200,
                    border: `2px solid ${theme.palette.divider}`,
                    boxShadow: theme.shadows[20],
                    pb: '2rem',
                  }
                : {
                  border: `2px solid ${theme.palette.divider}`,
                  boxShadow: theme.shadows[20],
                  pb: '2rem',
                    mt: '5rem',
                  }
            }
          >
            <CardMedia sx={{ height: 350 }} image={wahab} title="Video" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Wahab Adil
              </Typography>
              <Typography variant="body2" color="text.secondary">
                100Day of Python Progamming
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small"> Let's Learn</Button>
            </CardActions>
          </Card>
        </Container>
      </Box>
    </Page>
  );
};

export default CourseDetailPage;

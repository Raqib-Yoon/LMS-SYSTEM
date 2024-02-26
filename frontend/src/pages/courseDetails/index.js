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
} from '@mui/material';
// icons
import { FiClock, FiGlobe, FiYoutube, FiPlay, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { GoDotFill } from 'react-icons/go';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// show More
import ShowMoreText from 'react-show-more-text';
// style

const CourseDetailPage = () => {
  const theme = useTheme();
  // show more
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };
  return (
    <Page title="Course Details">
      <Container>
        <Paper style={{ padding: '20px', marginTop: '20px' }}>
          {/* Course Title, Description, and Objectives */}
          <Typography variant="h4" gutterBottom>
            100 Days of Code: The Complete Python Pro Bootcamp
          </Typography>
          <Typography variant="body1" paragraph>
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
          <Box display={'flex'} flexDirection={'row'}>
            <Typography variant="body2" gutterBottom>
              Created
            </Typography>
            <Typography component={Link} variant="body2" gutterBottom>
              &nbsp; Wahab-Adil
            </Typography>
          </Box>
          <Box display={'flex'} flexDirection={'row'} gap={2.4}>
            <Box display={'flex'} flexDirection={'row'}>
              <Typography variant="body2" gutterBottom>
                <FiClock />
                &nbsp; Last Update
              </Typography>
              <Typography component={Link} variant="body2" gutterBottom>
                &nbsp; 2024-4-14
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

          {/* Instructor Information */}
          <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
            Instructor Information
          </Typography>
          <Typography variant="body1">
            Instructor Name
            <br />
            Qualifications: Instructor Qualifications
            <br />
            Expertise: Instructor Expertise
          </Typography>

          {/* Curriculum Outline */}
          <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
            Curriculum Outline
          </Typography>
          {/* Include a grid or list to display the curriculum details */}

          {/* Preview or Sample Lessons */}
          <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
            Preview or Sample Lessons
          </Typography>
          {/* Include video or interactive content for sample lessons */}

          {/* Reviews and Ratings */}
          <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
            Reviews and Ratings
          </Typography>
          {/* Include a component to display reviews and ratings */}

          {/* Enroll Button */}
          <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
            Enroll Now
          </Button>
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
        </Paper>
      </Container>
    </Page>
  );
};

export default CourseDetailPage;

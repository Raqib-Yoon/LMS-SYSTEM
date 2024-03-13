import React from 'react';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea } from '@mui/material';
import { Container } from '@mui/material';
import useResponsive from '../hooks/useResponsive';

// components
import Page from '../components/Page';
import AdvertismentSlider from '../components/AdvertismentSlider';
import VideoTabSlider from '../components/VideoTabSlider';

// assets
import Instructor from '../assets/more/instructer.jpg';
import computer from '../assets/more/computer.jpg';
import camera from '../assets/more/camera.jpg';
// course Images
import course1 from '../assets/landing/course1.jpg';
import course2 from '../assets/landing/course2.jpg';
import course3 from '../assets/landing/course3.jpeg';
import course4 from '../assets/landing/course4.jpeg';
import course5 from '../assets/landing/course5.jpg';
import course6 from '../assets/landing/course6.jpg';
import course7 from '../assets/landing/course7.jpg';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  paddingRight: '2rem',
  paddingLeft: '2rem',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function HomePage() {
  const isMatchSm = useResponsive('down', 'sm');
  const theme = useTheme();
  // Advertisment Slider Section Config
  const AdsSliderConfig = {
    ImageSliderConfig: {
      autoplay: true,
      slidesToShow: 1,
      arrows: false,
      speed: 1200,
      centerMode: false,
      rtl: Boolean(theme.direction === 'rtl'),
      responsive: [
        {
          breakpoint: 1279,
          settings: { slidesToShow: 1 },
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
        image: computer,
        title: '100 Days Of Coding 1',
        instructor: 'Wahab-Adil',
        hours: '4hours',
      },
      {
        image: camera,
        title: '100 Days Of Coding 2',
        instructor: 'Wahab-Adil',
        hours: '5hours',
      },
    ],
  };

  // Courses Tabs Slider Section Config
  const CourseTabSliderConfig = {
    ImageSliderConfig: {
      autoplay: true,
      slidesToShow: 5,
      arrows: true,
      speed: 400,
      centerMode: true,
      rtl: Boolean(theme.direction === 'rtl'),
      responsive: [
        {
          breakpoint: 1279,
          settings: { slidesToShow: 5 },
        },
        {
          breakpoint: 959,
          settings: { slidesToShow: 3 },
        },
        {
          breakpoint: 600,
          settings: { slidesToShow: 1 },
        },
      ],
    },
    ImageSliderData: [
      {
        image: course1,
        title: '100 Days Of Coding 1',
        instructor: 'Wahab-Adil',
        hours: '4hours',
      },
      {
        image: course2,
        title: '100 Days Of Coding 2',
        instructor: 'Wahab-Adil',
        hours: '5hours',
      },
      {
        image: course3,
        title: '100 Days Of Coding 1',
        instructor: 'Wahab-Adil',
        hours: '4hours',
      },
      {
        image: course4,
        title: '100 Days Of Coding 2',
        instructor: 'Wahab-Adil',
        hours: '5hours',
      },
      {
        image: course5,
        title: '100 Days Of Coding 1',
        instructor: 'Wahab-Adil',
        hours: '4hours',
      },
      {
        image: course6,
        title: '100 Days Of Coding 2',
        instructor: 'Wahab-Adil',
        hours: '5hours',
      },
      {
        image: course7,
        title: '100 Days Of Coding 1',
        instructor: 'Wahab-Adil',
        hours: '4hours',
      },
      {
        image: course3,
        title: '100 Days Of Coding 2',
        instructor: 'Wahab-Adil',
        hours: '5hours',
      },
      {
        image: course4,
        title: '100 Days Of Coding 1',
        instructor: 'Wahab-Adil',
        hours: '4hours',
      },
      {
        image: course1,
        title: '100 Days Of Coding 2',
        instructor: 'Wahab-Adil',
        hours: '5hours',
      },
    ],
  };

  // tabs
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Page title="Online Courses">
      <ContentStyle>
        {/* ImageSlider */}
        <AdvertismentSlider
          sliderData={AdsSliderConfig?.ImageSliderData}
          settings={AdsSliderConfig?.ImageSliderConfig}
        />
        {/* tabs */}
        <Box sx={{ width: '100%' }}>
          <Typography variant="h3">A broad selection of courses</Typography>
          <Typography variant="body1" color={'text.secondary'}>
            Choosing From 2,0000 Courses
          </Typography>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="Courses Tab">
              <Tab label="  Python" {...a11yProps(0)} />
              <Tab label="Excel" {...a11yProps(1)} />
              <Tab label="Web Development" {...a11yProps(2)} />
              <Tab label="Javascript" {...a11yProps(3)} />
              <Tab label="Data science" {...a11yProps(4)} />
              <Tab label="Amazon AWS" {...a11yProps(5)} />
              <Tab label="Drawing" {...a11yProps(6)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Typography variant="h3">Expand your career opportunities with Python</Typography>
            <Typography variant="subtitle1" color={'text.secondary'} sx={{ width: '70%' }}>
              Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language.
              Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine
              learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses
              that will appeal to
            </Typography>
            <VideoTabSlider
              sliderData={CourseTabSliderConfig?.ImageSliderData}
              settings={CourseTabSliderConfig?.ImageSliderConfig}
            />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Excel
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Web Development
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            Javascript
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            Data science
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}>
            Amazon AWS
          </CustomTabPanel>
          <CustomTabPanel value={value} index={6}>
            Drawing
          </CustomTabPanel>
        </Box>
        {/* Courses Slider Section */}
        <Box>
          <Typography variant="h3">Most Viewed Courses</Typography>
        </Box>
        <VideoTabSlider
          sliderData={CourseTabSliderConfig?.ImageSliderData}
          settings={CourseTabSliderConfig?.ImageSliderConfig}
        />
        <Box>
          <Typography variant="h3">Top Categories</Typography>
        </Box>
        <Container sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
          <Card sx={{ minWidth: 300 }}>
            <Box>
              <CardActionArea>
                <CardMedia component="img" height="250px" image={course6} alt="Desinging" />
                <CardContent>
                  <Typography variant="h6" color={'text.secondary'}>
                    Excel
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Box>
          </Card>{' '}
          <Card sx={{ minWidth: 300 }}>
            <Box>
              <CardActionArea>
                <CardMedia component="img" height="250px" image={course4} alt="Writing" />
                <CardContent>
                  <Typography variant="h6" color={'text.secondary'}>
                    Writing
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Box>
          </Card>{' '}
          <Card sx={{ minWidth: 300 }}>
            <Box>
              <CardActionArea>
                <CardMedia component="img" height="250px" image={course1} alt="Reading" />
                <CardContent>
                  <Typography variant="h6" color={'text.secondary'}>
                    Reading
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Box>
          </Card>{' '}
          <Card sx={{ minWidth: 300 }}>
            <Box>
              <CardActionArea>
                <CardMedia component="img" height="250px" image={course2} alt="pointing" />
                <CardContent>
                  <Typography variant="h6" color={'text.secondary'}>
                    Pointing
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Box>
          </Card>{' '}
          <Card sx={{ minWidth: 300 }}>
            <Box>
              <CardActionArea>
                <CardMedia component="img" height="250px" image={course3} alt="Development" />
                <CardContent>
                  <Typography variant="h6" color={'text.secondary'}>
                    Development
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Box>
          </Card>
        </Container>
        <Container
          sx={{ display: 'flex', flexDirection: isMatchSm ? 'column' : 'row', justifyContent: 'center', mt: 4, gap: 4 }}
        >
          <Card sx={{ flex: 1, borderRadius: 0 }}>
            <Box>
              <CardMedia component="img" height="400px" image={Instructor} alt="Development" />
            </Box>
          </Card>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
            <Typography variant="h3">Muslim Afghan Academy</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Instructors from around the world teach millions of learners on Muslim Academy. We provide the tools and
              skills to teach what you love.
            </Typography>
            <Button variant="contained">Start Learning Today</Button>
          </Box>
        </Container>
      </ContentStyle>
    </Page>
  );
}

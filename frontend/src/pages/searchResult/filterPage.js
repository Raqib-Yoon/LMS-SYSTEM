import React, { useState } from 'react';
import {
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  Button,
  Box,
} from '@mui/material';

const categories = ['Development', 'Design', 'Business', 'IT & Software', 'Personal Development'];
const sortLanguages = ['Pashto', 'Dari', 'English'];
const sortConentType = ['Article', 'Video', 'Audio'];
const applyFilters = (selectedCategories, selectedSortOption) => {
  // Implement your filter logic here
  console.log('Selected Categories:', selectedCategories);
  console.log('Selected Sort Option:', selectedSortOption);
};

const FilterPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState('');

  console.log('selectedCategories', selectedCategories);

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(value)) {
        return prevSelectedCategories.filter((category) => category !== value);
      } else {
        return [...prevSelectedCategories, value];
      }
    });
  };

  const handleSortOptionChange = (event) => {
    setSelectedSortOption(event.target.value);
  };

  const handleApplyFilters = () => {
    applyFilters(selectedCategories, selectedSortOption);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flex: 0.3,
        flexDirection: 'column',
        padding: (theme) => theme.spacing(2),
        gap: 2,
        borderRight: (theme) => `1px solid ${theme.palette.text.primary}`,
      }}
    >
      <Box sx={{ marginBottom: (theme) => theme.spacing(2) }}>
        <Typography variant="h5">Categories</Typography>
        <FormGroup>
          {categories.map((category) => (
            <FormControlLabel
              key={category}
              control={
                <Checkbox
                  sx={{ fontWeight: '2rem' }}
                  checked={selectedCategories.includes(category)}
                  onChange={handleCategoryChange}
                  value={category}
                />
              }
              label={
                <Typography sx={{ color: (theme) => theme.palette.text.secondary }} variant="subtitle2">
                  {category}
                </Typography>
              }
            />
          ))}
        </FormGroup>
      </Box>
      <Box>
        <Typography sx={{ color: (theme) => theme.palette.text.priamry }} variant="h6">
          languages
        </Typography>
        <FormControl component="fieldset" sx={{ textAlign: 'center' }}>
          <RadioGroup value={selectedSortOption} onChange={handleSortOptionChange}>
            {sortLanguages.map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={
                  <Typography sx={{ color: (theme) => theme.palette.text.secondary }} variant="subtitle2">
                    {option}
                  </Typography>
                }
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
      <Box>
        <Typography sx={{ color: (theme) => theme.palette.text.priamry }} variant="h6">
          Types
        </Typography>
        <FormControl component="fieldset" sx={{ textAlign: 'center' }}>
          <RadioGroup value={selectedSortOption} onChange={handleSortOptionChange}>
            {sortConentType.map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Checkbox />}
                label={
                  <Typography sx={{ color: (theme) => theme.palette.text.secondary }} variant="subtitle2">
                    {option}
                  </Typography>
                }
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>
      <Button
        sx={{ marginTop: (theme) => theme.spacing(2) }}
        variant="contained"
        color="primary"
        onClick={handleApplyFilters}
      >
        Apply Filters
      </Button>
    </Box>
  );
};

export default FilterPage;

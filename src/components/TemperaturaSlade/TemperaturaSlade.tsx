import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

type Props = {

  initialValue?: number;
  onChange?: (value: number) => void;
}

const StyleSlider = {
  color: '#EF2A39',
  padding: ' .3rem',
  backgroundColor: 'unset',
}

const TemperaturaSlade: React.FC<Props> = ({ initialValue = 60, onChange }) => {

  const [val, setVal] = React.useState<number>(initialValue);

  const MAX = 100;
  const MIN = 0;
  const marks = [
    {
      value: MIN,
      label: '',
    },
    {
      value: MAX,
      label: '',
    },
  ];

  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
    if (onChange) {
      onChange(newValue as number);
    }
  }

  return (
    <Box sx={{ width: 140 }}>
      <Slider
        style={StyleSlider}
        marks={marks}
        step={10}
        value={val}
        valueLabelDisplay="auto"
        size="small"
        aria-label="Temperatura do lanche"
        min={MIN}
        max={MAX}
        onChange={handleChange}

      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="caption"
          onClick={() => setVal(MIN)}
          sx={{ cursor: 'pointer', color: '#1CC019' }}
        >
          Morno
        </Typography>
        <Typography
          variant="caption"
          onClick={() => setVal(MAX)}
          sx={{ cursor: 'pointer', color: '#EF2A39' }}
        >
          Quente
        </Typography>
      </Box>
    </Box>
  );
}

export default TemperaturaSlade;
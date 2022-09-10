//import ChangeModeCSS from './ChangeMode.module.css';
import { Button } from '@material-ui/core';
import { useTheme } from '@mui/material/styles';
import { FC } from 'react';

interface ChangeModeProps {
  mode: boolean;
  modeSetter: () => void;
}

export const ChangeMode: FC<ChangeModeProps> = ({ mode, modeSetter }) => {
  const theme = useTheme();
  console.log(theme);

  return (
    <Button
      size="small"
      variant="contained"
      color="default"
      data-testid="btn"
      onClick={modeSetter}
    >
      {mode ? 'Light Mode' : 'Dark Mode'}
    </Button>
  );
};

import { Button } from '@material-ui/core';
import { FC } from 'react';

interface ChangeModeProps {
  mode: string;
  modeSetter?: () => void;
}

export const ChangeMode: FC<ChangeModeProps> = ({ mode, modeSetter }) => {
  return (
    <Button
      size="small"
      variant="contained"
      color="default"
      data-testid="btn"
      onClick={modeSetter}
    >
      {mode + ' mode'}
    </Button>
  );
};

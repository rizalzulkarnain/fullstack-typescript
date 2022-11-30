import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Switch,
  Button,
  FormControlLabel,
} from '@mui/material';

import { ITaskFooter } from './interfaces/ItaskFooter';

const TaskFooter: FC<ITaskFooter> = (
  props,
): ReactElement => {
  const {
    onClick = (e) => console.log(e),
    onStatusChange = (e) => console.log(e),
  } = props;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        onChange={(e) => onStatusChange(e)}
        control={<Switch color="warning" />}
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#fffff' }}
        onClick={(e) => onClick(e)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default TaskFooter;

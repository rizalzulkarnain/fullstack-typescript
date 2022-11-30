import React, { FC, ReactElement } from 'react';

import PropTypes from 'prop-types';
import { Typography, Box } from '@mui/material';

import { ITaskDescription } from './interfaces/ITaskDescription';

const TaskDescription: FC<ITaskDescription> = (
  props,
): ReactElement => {
  const { description = 'This is Description.' } = props;

  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

TaskDescription.propTypes = {
  description: PropTypes.string,
};

export default TaskDescription;

import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from '@mui/material';
import { IDateField } from './interfaces/IDateField';

const TaskDateField: FC<IDateField> = (
  props,
): ReactElement => {
  const {
    disabled = false,
    value = new Date(),
    onChange = (date) => console.log(date),
  } = props;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Task Date"
          inputFormat="dd/MM/yyyy"
          value={value}
          onChange={onChange}
          renderInput={(params) => (
            <TextField {...params} />
          )}
          disabled={disabled}
        />
      </LocalizationProvider>
    </>
  );
};

TaskDateField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  value: PropTypes.instanceOf(Date),
};

export default TaskDateField;

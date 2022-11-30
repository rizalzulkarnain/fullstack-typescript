import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';

import { Avatar, Box, Typography } from '@mui/material';

interface IProfile {
  name?: string;
}

const Profile: FC<IProfile> = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          width: '96px',
          height: '96px',
          backgroundColor: 'primary.main',
          marginBottom: '16px',
        }}
      >
        <Typography variant="h4" color="text.primary">
          N
        </Typography>
      </Avatar>

      <Typography variant="h6" color="text.primary">
        {`Welcome, Naenroo`}
      </Typography>

      <Typography variant="body1" color="text.primary">
        This is your Personal Task Manager
      </Typography>
    </Box>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
};

export default Profile;

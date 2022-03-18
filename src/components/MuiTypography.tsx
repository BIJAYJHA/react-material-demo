import React from 'react';
import { Typography } from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant ="h1"> H1 heading</Typography>
        <Typography variant ="h2"> H2 heading</Typography>
        <Typography variant ="h3"> H3 heading</Typography>
        <Typography variant ="h4" component='h1' gutterBottom> H4 heading</Typography>
        <Typography variant ="h5"> H5 heading</Typography>
        <Typography variant ="h6"> H6 heading</Typography>

        <Typography variant ="subtitle1"> subtitle 1</Typography>
        <Typography variant ="subtitle2">subtitle 2</Typography>

        <Typography variant ="body1">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>
        <Typography variant ="body2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>


    </div>
  )
}


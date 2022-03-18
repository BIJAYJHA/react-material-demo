import React from 'react'
import {Box,Card,CardContent,Typography,CardActions,Button,CardMedia} from '@mui/material'

export const MuiCard = () => {
  return (
    <Box width='300px'>
        <Card>
            <CardMedia
                component ='img'
                height='140'
                image='https://source.unsplash.com/random'
                alt='unsplash image'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    React
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    React is a javascript library fior building user interfaces. React 
                    can be used a s  a base in the development of single-page or mobile
                    applications.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn more</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

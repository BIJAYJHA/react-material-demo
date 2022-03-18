import { useState } from 'react';
import { Stack, TextField, InputAdornment } from "@mui/material"

export const MuiTextField = () => {
    const [value, setValue] = useState('');
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' variant='outlined' />
                <TextField label='Name' variant='filled' />
                <TextField label='Name' variant='standard' />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='size secondary' size='small' color='secondary' />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Form Input' size='small' color='secondary' value={value} onChange={e => setValue(e.target.value)} required error={!value} helperText={!value ? 'Required' : 'Do not share your password with anyone'} />
                <TextField label='Password' type='password' helperText='Do no share the password with anyone' required />
                <TextField label='Read only' size='small' color='secondary' InputProps={{ readOnly: true }} />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Amount' InputProps={{
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }} />
                <TextField label='Weight' InputProps={{
                    endAdornment: <InputAdornment position='end'>kg</InputAdornment>
                }} />
            </Stack>
        </Stack>
    )
}

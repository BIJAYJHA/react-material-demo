import React, { useState } from 'react'
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup,FormHelperText } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export const MuiCheckBox = () => {
    const [acceptTnC, setacceptTnC] = useState(false);
    const [skills, setSkills] = useState<string[]>([]);
    console.log({ skills });
    const handleChange = (_event: React.ChangeEvent<HTMLInputElement>) => {
        setacceptTnC(_event.target.checked);
    }
    const handleSkillChange=(_event: React.ChangeEvent<HTMLInputElement>)=>{
        const index = skills.indexOf(_event.target.value);
        if(index === -1){
            setSkills([...skills, _event.target.value]);
        }else{
            setSkills(skills.filter((skill)=>skill !== _event.target.value))
        }
    }
    return (
        <Box>
            <Box>
                <FormControlLabel label='I accept terms and conditions' control={<Checkbox size='small' color='secondary' checked={acceptTnC} onChange={handleChange} />} />
            </Box>
            <Box>
                <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} checked={acceptTnC} onChange={handleChange} />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel label='HTML' control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleSkillChange} />} />
                        <FormControlLabel label='CSS' control={<Checkbox value ='css' checked={skills.includes('css')} onChange={handleSkillChange} />} />
                        <FormControlLabel label='Javacsript' control={<Checkbox value='javascript' checked={skills.includes('javascript')} onChange={handleSkillChange} />} />
                    </FormGroup>
                    <FormHelperText>Invalid selection</FormHelperText>
                </FormControl>
            </Box>
        </Box>
    )
}

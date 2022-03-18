import { useState } from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const MuiAccordion = () => {
    const [expanded, setExpanded] = useState<string | false >(false);
    const handleChange=(isExpanded:boolean, panel:string)=>{
        setExpanded(isExpanded ? panel : false);
    }
    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={(_event,isExpanded)=>{handleChange(isExpanded, 'panel1')}}>
                <AccordionSummary id='panel1-haeder' aria-controls='panel1-content' expandIcon={<ExpandMoreIcon />}>
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion  expanded={expanded === 'panel12'} onChange={(_event,isExpanded)=>{handleChange(isExpanded, 'panel12')}}>
                <AccordionSummary id='panel12-haeder' aria-controls='panel12-content' expandIcon={<ExpandMoreIcon />}>
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion  expanded={expanded === 'panel13'} onChange={(_event,isExpanded)=>{handleChange(isExpanded, 'panel13')}}>
                <AccordionSummary id='panel13-haeder' aria-controls='panel3-content' expandIcon={<ExpandMoreIcon />}>
                    <Typography>Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Typography>
                </AccordionDetails>
            </Accordion>


        </div>
    )
}

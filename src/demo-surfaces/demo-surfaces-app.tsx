import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function DemoSurfacesApp() {
  return (
    <>
      <h1>Demo Surfaces App</h1>
      <DemoSurfacesAccordion />
    </>
  );
}

const DemoSurfacesAccordion = () => {
  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The pain itself is love,
            the main storage system. sign up from the comments of the lakes,
            it is the love of the lion and the carousing of the lion.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The pain itself is love,
            the main storage system. sign up from the comments of the lakes,
            it is the love of the lion and the carousing of the lion.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </>
  );
};

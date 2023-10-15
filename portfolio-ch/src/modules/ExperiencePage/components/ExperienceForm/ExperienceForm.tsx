import { Grid, TextField } from "@mui/material";
import DateInput from "../../../../components/DateInput";
import TextAreaInput from "../../../../components/TextAreaInput";
import { JobItem } from "../../interfaces";

interface IExperienceFormProps {
  inputs: JobItem;
  readOnly?: boolean;
  onChange: (name: string, value: string) => void;
}

function ExperienceForm({ readOnly, inputs, onChange }: IExperienceFormProps) {
  const handleChange = (name: string, value: string) => {
    onChange(name, value);
  };

  return (
    <Grid container spacing={2} mt={2} mb={2}>
      <Grid item={true} xs={12}>
        <TextField
          disabled={readOnly}
          fullWidth
          name="name"
          label="Company Name"
          onChange={(e) => handleChange(e?.target?.name, e?.target?.value)}
          value={inputs.name}
        />
      </Grid>
      <Grid item={true} xs={6}>
        <DateInput
          disabled={readOnly}
          name="startDate"
          label="Start Date"
          onChange={handleChange}
          value={new Date(inputs.startDate) || null}
        />
      </Grid>
      <Grid item={true} xs={6}>
        <DateInput
          disabled={readOnly}
          name="endDate"
          label="End Date"
          onChange={handleChange}
          value={new Date(inputs.endDate) || null}
        />
      </Grid>
      <Grid item={true} xs={12}>
        <TextAreaInput
          disabled={readOnly}
          value={inputs.info}
          onChange={handleChange}
          rows={3}
          name="info"
          label="Responsibilities for the job can be listed here"
        />
      </Grid>
    </Grid>
  );
}

export default ExperienceForm;

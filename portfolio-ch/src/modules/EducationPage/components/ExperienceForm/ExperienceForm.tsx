import { useState } from "react";
import { Grid, TextField } from "@mui/material";
import DateInput from "../../../../components/DateInput";

interface JobItem {
  id: string;
  companyName: string;
  info: string;
  startDate: Date;
  endDate: Date;
}

interface IExperienceFormProps {
  inputs?: JobItem;
  onChange: (item: JobItem) => void; // remove this once gql is added
}

const initialValues = {
  id: "",
  companyName: "",
  startDate: new Date(),
  endDate: new Date(),
  info: "",
};

function ExperienceForm({ inputs, onChange }: IExperienceFormProps) {
  const [values, setValues] = useState<JobItem>(inputs || initialValues);

  const handleChange = (name: string, value: string | Date) => {
    if (name) {
      setValues({ ...values, [name]: value });
      onChange(values ? { ...values, [name]: value } : initialValues);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item={true} xs={12}>
        <TextField
          fullWidth
          name="companyName"
          label="Company Name"
          onChange={(e) => handleChange(e?.target?.name, e?.target?.value)}
          value={values.companyName}
        />
      </Grid>
      <Grid item={true} xs={6}>
        <DateInput
          name="startDate"
          label="Start Date"
          onChange={handleChange}
          value={values.startDate}
        />
      </Grid>
      <Grid item={true} xs={6}>
        <DateInput
          name="endDate"
          label="End Date"
          onChange={handleChange}
          value={values.endDate}
        />
      </Grid>
    </Grid>
  );
}

export default ExperienceForm;

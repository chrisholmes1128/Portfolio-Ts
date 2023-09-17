import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

interface IDateInputProps {
  name: string;
  value: Date | null;
  label?: string;
  onChange: (name: string, value: Date) => void;
}

function DateInput({ name, value, label = "Date", onChange }: IDateInputProps) {
  const handleChange = (newValue: Date | null) => {
    if (newValue) {
      onChange(name, newValue);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        sx={{ width: "100%" }}
        label={label}
        value={value}
        onChange={handleChange}
      />
    </LocalizationProvider>
  );
}

export default DateInput;

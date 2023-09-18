import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { isValid } from "date-fns";

interface IDateInputProps {
  name: string;
  value: Date | null;
  label?: string;
  disabled?: boolean;
  onChange: (name: string, value: string) => void;
}

function DateInput({
  name,
  value,
  label = "Date",
  disabled = false,
  onChange,
}: IDateInputProps) {
  const handleChange = (newValue: Date | null) => {
    if (newValue) {
      onChange(name, newValue.toISOString());
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        disabled={disabled}
        sx={{ width: "100%" }}
        label={label}
        value={isValid(value) ? value : new Date()}
        onChange={handleChange}
      />
    </LocalizationProvider>
  );
}

export default DateInput;

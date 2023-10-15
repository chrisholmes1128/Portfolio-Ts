import { TextField } from "@mui/material";

interface ITextAreaInputProps {
  name: string;
  value: string;
  label?: string;
  disabled?: boolean;
  rows?: number;
  onChange: (name: string, value: string) => void;
}

function TextAreaInput({
  name,
  value,
  label = "Insert additional text here",
  disabled = false,
  rows = 3,
  onChange,
}: ITextAreaInputProps) {
  const handleChange = (e: any) => {
    const { value } = e?.target;
    onChange(name, value);
  };

  return (
    <TextField
      fullWidth
      name={name}
      disabled={disabled}
      placeholder={label}
      multiline
      rows={rows}
      value={value}
      maxRows={12}
      onChange={handleChange}
    />
  );
}

export default TextAreaInput;

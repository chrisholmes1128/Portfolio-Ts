import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Link,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import emailValid from "../../utils/emailValid";

function ForgotPasswordPage() {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (inputs.email && emailValid(inputs.email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs.email]);

  const handleChange = (name: string, value: string) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsEmailSent(true);
    try {
      setLoading(true);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (isEmailSent) {
    return (
      <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="5%"
    >
        <Stack
          alignItems="center"
          border={`1px solid ${theme.palette.primary.main}`}
          borderRadius={2}
          direction="row"
        >
          <Box
            alignItems="center"
            display="flex"
            height="35vh"
            justifyContent="center"
            textAlign="center"
            width="30vw"
          >
            <Stack direction="column" maxWidth="500px" spacing={4} width="100%">
              <Typography variant="h4">
                An email has been sent! Follow the instructions inside the email
                to reset your password.
              </Typography>

              <Typography variant="h5">
                Didn&apos;t recieve an email? Click the button below to resend.
              </Typography>
              <Button color="primary" variant="contained">
                Resend
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="5%"
    >
      <Stack
        alignItems="center"
        border={`1px solid ${theme.palette.primary.main}`}
        borderRadius={2}
        direction="row"
      >
        <Box
          alignItems="center"
          display="flex"
          height="35vh"
          justifyContent="center"
          textAlign="center"
          width="30vw"
        >
          <Stack direction="column" maxWidth="400px" spacing={4} width="100%">
            <Stack>
              <Typography variant="h3">Forgot Password</Typography>
            </Stack>
            <Stack spacing={2} width="400px">
              <TextField
                disabled={loading}
                label="Email"
                name="email"
                type="email"
                value={inputs.email}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
              <Button
                color="primary"
                disabled={loading || !isEmailValid}
           
                size="large"
                variant="contained"
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <Link href="/login" underline="none">
                Back to Login
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}

export default ForgotPasswordPage;

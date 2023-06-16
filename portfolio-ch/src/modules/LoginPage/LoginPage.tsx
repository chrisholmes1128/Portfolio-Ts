import { Dispatch, SetStateAction, useState, useEffect } from "react"; //

import "./LoginPage.scss";
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

// import LOGO_PATH from "../../assets/logos/";

// import type { IAuthState } from "../../context/AuthContext";

// type TLoginFormProps = {
//   setAuthState: Dispatch<SetStateAction<IAuthState>>;
// };

const MAX_HEIGHT = "70vh";
const MAX_WIDTH = "80vw";

function LoginForm() {
  // { setAuthState }: TLoginFormProps
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
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
    try {
      setLoading(true);
      // await Auth.signIn(inputs.email, inputs.password);
      // setAuthState({ allow: true });
      // navigate("/"); // remove once auth state is setup
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

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
        // height={MAX_HEIGHT}
        width={MAX_WIDTH}
      >
        <Box display="flex" justifyContent="center" width="50vw">
          <Stack direction="column" maxWidth="400px" spacing={4} width="100%">
            {/* <Stack>
              <img alt="logo" className="logo" src={LOGO_PATH} />
            </Stack> */}
            <Stack spacing={2} textAlign="center">
              <TextField
                disabled={loading}
                label="Email"
                name="email"
                type="email"
                value={inputs.email}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
              <TextField
                disabled={loading}
                label="Password"
                name="password"
                type="password"
                value={inputs.password}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
              <Button
                color="primary"
                disabled={
                  loading || !inputs.email || !inputs.password || !isEmailValid
                }
                size="large"
                variant="contained"
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <Link href="/forgot" underline="none">
                <Typography variant="h5">Forgot Password?</Typography>
              </Link>
            </Stack>
          </Stack>
        </Box>
        <Stack
          alignItems="center"
          className="background"
          display="flex"
          height={MAX_HEIGHT}
          justifyContent="center"
          maxWidth="500px"
          padding={2}
          spacing={3}
          textAlign="center"
          width="100%"
        >
          <Typography color="common.white" fontSize={24} fontWeight={800}>
            New Here?
          </Typography>
          <Typography color="common.white" fontSize={16}>
            Click the button below!
          </Typography>
          <Button style={{ backgroundColor: theme.palette.common.white }}>
            Register
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default LoginForm;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  TextField,
} from "@mui/material";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { login } from "../../../Services/auth.service";

function Login() {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setContraseña(e.target.value);
  }

  const logIn = async () => {
    const data = await login(email, contraseña);
    console.log(data);
    const id = localStorage.getItem("id");
    if (!localStorage.getItem("token"))
      alert("Error: Usuario o contraseña invalidos");
    else {
      navigate(`usuario/${id}/misproyectos`);
    }
  };

  function handleClick() {
    setIsPassVisible(!isPassVisible);
  }

  /* 
  function checkEmail(email) {
    console.log(email);
    if (email === "nuha@mail") {
      alert("Todo OK");
    } else {
      alert("Email incorect");
    }
  }
 */
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "75vh",
        }}
      >
        <Card
          className="login"
          sx={{ maxWidth: "900px" }}
          raised={true}
          style={{ background: "##ff5232 " }}
        >
          <CardHeader title="Acceso Usuarios">Acceso Usuarios</CardHeader>
          <CardContent>
            <TextField
              onChange={handleEmail}
              fullWidth
              margin="dense"
              label="Email"
              type="email"
              variant="standard"
              InputProps={{
                endAdornment: <Email />,
              }}
            ></TextField>
            <TextField
              type={isPassVisible ? "text" : "password"}
              onChange={handlePassword}
              fullWidth
              margin="dense"
              label="Contraseña"
              variant="standard"
              InputProps={{
                startAdornment: <Lock />,
                endAdornment: (
                  <IconButton onClick={handleClick}>
                    {isPassVisible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
            ></TextField>
          </CardContent>
          <Divider></Divider>
          <CardActions>
            <Button
              onClick={logIn}
              size="small"
              color="secondary"
              variant="contained"
            >
              Acceder
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}

export default Login;

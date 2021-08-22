import React from "react";
import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import emailjs from "emailjs-com";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    height: "70px",
    width: "70px",
    backgroundColor: "#010606",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#01bf71",
  },
}));

export default function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleName = (event) => {
    setUserName(event.target.value);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_880h7h5",
        "template_5t0w9we",
        e.target,
        "user_3861G43DwBMvVhoZdn8Wi"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your Message Was Sent. We will reach out to you soon.");
          setEmail("");
          setPhone("");
          setUserName("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <ContactMailIcon style={{ height: "40px", width: "40px" }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Contact Us
          </Typography>
          <form className={classes.form} onSubmit={sendEmail}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={userName}
              onChange={handleName}
              name="name"
              label="Name"
              type="name"
              id="name"
              autoComplete="name"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={email}
              onChange={handleEmail}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={phone}
              onChange={handlePhone}
              name="phone"
              label="Phone Number"
              type="phone"
              id="phone"
              autoComplete="phone"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              rows={4}
              value={message}
              onChange={handleMessage}
              name="message"
              label="Message"
              type="message"
              id="message"
              autoComplete="message"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Submit
            </Button>

            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

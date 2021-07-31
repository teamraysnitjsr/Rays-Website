import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  CardActions,
  CardActionArea,
  CardHeader,
  CardMedia,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ESVC_19 from '../../assets/images/ESVC_19.jpg';
//import ESVC_2018 from '../../assets/images/ESVC_2018(F).jpeg'
import IASC2K17 from '../../assets/images/IASC2K17.jpg'
import ESVC_2018 from '../../assets/images/ESVC_2018(F).jpeg'
import IASC_2016 from "../../assets/images/IASC_2016.jpg";


const useStyles = makeStyles((theme) => ({
  root: {
    
    
    // backgroundColor: theme.palette.grey[200],
    paddinngTop: theme.spacing(10),
    marginTop: theme.spacing(5),
   
    //paddingLeft: theme.spacing(40),
  },
}));

const Achievements = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container spacing={6} style={{}}>
        <Grid item lg={3} md={6} xs={12}>
          <Card
            style={{
              borderRadius: "22px",
              padding: "4%",
              minHeight: "95vh",
              backgroundColor: "moccasin",
            }}
          >
            <CardHeader
              titleTypographyProps={{ variant: "h4" }}
              title=" ESVC 2019 🏆"
              subheader="MARCH 2019"
            />
            <CardActionArea>
              <CardMedia style={{}}>
                <img src={ESVC_19} alt="" width="100%" />
              </CardMedia>
              <CardContent>
                <Typography variant="h5">
                  <b>
                    <i>ESVC 2019</i>
                  </b>
                </Typography>
                <Typography variant="subtitle1">
                  Electric Solar Vehicle Championship
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <p
                style={{
                  color: "black",
                
                }}
              >
                <b>
                  ➤ Ranked 8th among all the 47 Teams.
                  <br />
                  <br />➤ Secured 5th position in "Weight" catergory.
                  <br />
                  <br />➤ Bagged 4th position in "Endurance" category.
                  <br />
                  <br /> ➤ Achieved 9th position in "Design" as well as
                  "Pre-Virtuals".
                </b>
              </p>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Card
            style={{
              borderRadius: "22px",
              minHeight: "95vh",
              backgroundColor: "lemonchiffon",
              padding: "4%",
            }}
          >
            <CardHeader
              titleTypographyProps={{ variant: "h4" }}
              title=" ESVC 2018 🏆"
              subheader="APRIL 2018"
            />
            <CardActionArea>
              <CardMedia>
                <img src={ESVC_2018} alt="" width="100%" />
              </CardMedia>
              <CardContent>
                <Typography variant="h5">
                  <b>
                    <i>ESVC 2018</i>
                  </b>
                </Typography>
                <Typography variant="subtitle1">
                  Electric Solar Vehicle Championship
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <p
                style={{
                  color: "black",
                }}
              >
                <b>
                  ➤ Participated in ESVC for the first time.
                  <br />
                  <br />
                  ➤Bagged the 7th position among all 104 teams.
                  <br />
                  <br />➤ Won the Lightest Vehicle Award.
                  <br />
                  <br />
                  ➤Rewarded the "FUTURE AWARD".
                </b>
              </p>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Card
            style={{
              borderRadius: "22px",
              padding: "4%",
              minHeight: "95vh",
              backgroundColor: "moccasin",
            }}
          >
            <CardHeader
              titleTypographyProps={{ variant: "h4" }}
              title="IASC 2017 🏆"
              subheader="MARCH 2017"
            />
            <CardActionArea>
              <CardMedia>
                <img src={IASC2K17} alt="IASC 2017" width="100%" />
              </CardMedia>
              <CardContent>
                <Typography variant="h5">
                  <b>
                    <i>IASC 2017</i>
                  </b>
                </Typography>
                <Typography variant="subtitle1">
                  Indo Asian Solar Challenge
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <p
                style={{
                  color: "black",
                }}
              >
                <b>
                  ➤ Defended our tite and were crowned as the overall champions.
                  <br />
                  <br />
                  ➤ Declared the best in Acceleration and Braking Test.
                  <br />
                  <br />➤ Emerged as winners in "Weight" category (Lightest
                  Weighing Vehicle).
                </b>
              </p>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={6} xs={12}>
          <Card
            style={{
              borderRadius: "22px",
              padding: "4%",
              minHeight: "95vh",
              backgroundColor: "lemonchiffon",
            }}
          >
            <CardHeader
              titleTypographyProps={{ variant: "h4" }}
              title="IASC 2016 🏆"
              subheader="MARCH 2016"
            />
            <CardActionArea>
              <CardMedia>
                <img src={IASC_2016} alt="" width="100%" />
              </CardMedia>
              <CardContent>
                <Typography variant="h5">
                  <i>
                    <b>IASC 2016</b>
                  </i>
                </Typography>
                <Typography variant="subtitle1">
                  Indo Asian Solar Challenge
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <p
                style={{
                  color: "black",
                }}
              >
                <b>
                  ➤Conquererd the title of "Overall Champion" of IASC 2016.
                  <br />
                  <br />
                  ➤Bagged the 1st rank in Endurance category.
                  <br />
                  <br />
                  ➤Declared the best in "Acceleration and Brake Test".
                  <br />
                  <br />
                  ➤Secured the 2nd position in the "Light Vehicle" category.
                  <br />
                  <br />
                  ➤Secured the 2nd position in "Autocross" category.
                </b>
              </p>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Achievements;

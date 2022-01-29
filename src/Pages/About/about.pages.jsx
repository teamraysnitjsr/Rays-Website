import React from "react";
import "./about.pages.css";
import { Container, Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/";
import {
  faMugHot,
  faBullhorn,
  faImage,
  faHeart,
  faShoppingCart,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddinngTop: theme.spacing(10),
    marginTop: theme.spacing(5),

    //paddingLeft: theme.spacing(40),
  },
}));
const About = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <div>
        <div className="heading">
          <h1>ABOUT US</h1>
        </div>
        <p className="info">
          The constant depletion of non-renewable energy resources is one of the
          major threat these days and this threat compelled the students of 2K12
          batch of N.I.T Jamshedpur to look over some alternative energy
          resources and with this idea TEAM RAYS came into existence. It is the
          first ever initiative by the students of N.I.T Jamshedpur to develop a
          solar electric vehicle. The team aims at developing a highly efficient
          solar electric vehicle to provide a breakthrough in the application of
          solar technology to the transportation sectors which is compatible for
          Indian roads as well. The outlook of our team is to develop an
          eco-friendly, economic and efficient solar car that could meet the
          current energy demands. The team came into existence in the year 2014
          with its dedicated founder Amber Katyayan and co-founder Sanket Raj
          and is currently under the guidance of third year students .
        </p>
        <div className="works">
          <h1>OUR WORKS</h1>
          <p>
            The team aims at developing a highly efficient solar electric
            vehicle to provide a breakthrough in the application of solar
            technology to the transportation sector.We aim to develop easily
            available & low cost technology, gain practical experience in design
            and fabrication and develop technical skills in students as well as
            management and leadership quality. Our main motto is to develop an
            eco-friendly, economic and efficient solar car. We are trying to
            develop an innovative solar car which is able to run as good as
            petrol or diesel engine cars.
          </p>

          <p>filter pending</p>
        </div>
        <div className="process">
          <h1>OUR PROCESS</h1>
          <p>
            Our prime goal is the development of an energy efficient passenger
            SEV suitable for Indian roads.Fuelled by its member's passion for
            environment friendly and sustainable technologies, the team has to
            go through many stages of work and it takes about an year to build a
            car.....
          </p>
        </div>
        <Grid container spacing={2}>
          <Grid item lg={2} md={4} xs={6}>
            <div className=" icons i1 fas ">
              <FontAwesomeIcon icon={faMugHot}></FontAwesomeIcon>
            </div>
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <div className=" icons i1 fas">
              <FontAwesomeIcon icon={faBullhorn}></FontAwesomeIcon>
            </div>
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <div className=" icons i1 fas fa-mug-hot">
              <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
            </div>
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <div className=" icons i1 fas fa-mug-hot">
              <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
            </div>
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <div className="icons i1 fas fa-mug-hot">
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </div>
          </Grid>
          <Grid item lg={2} md={4} xs={6}>
            <div className=" icons i1 fas fa-mug-hot">
              <FontAwesomeIcon icon={faRocket}></FontAwesomeIcon>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
export default About;

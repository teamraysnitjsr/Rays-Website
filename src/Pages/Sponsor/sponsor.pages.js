import React from "react";
import "./Sponsor.css";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  CardActionArea,
  CardHeader,
} from "@material-ui/core";
import { Divider } from "@mui/material";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";

function Sponsor() {
  return (
    <Container>
      <div className="sponsor-body">
        <div className="sponsor-title">
          <Typography variant="h1" style={{ fontWeight: "bold" }}>
            BE OUR PARTNER
          </Typography>

          <hr
            style={{
              color: "#fff",
              backgroundColor: "red",
              height: "1vh",
              borderRadius: "7px 7px 7px 7px",
              width: "10%",
            }}
          />
          <Typography variant="p" align="left" style={{ color: "grey" }}>
            We design, build and race the best solar vehicles with the help of
            sponsors who are a critical part of our team's legacy. Learn about
            the people who help make our designs a reality.The companies,
            individuals, and institutions on this page provide support that
            allows the team RAYS to build, year after year, solar-electric
            vehicles that push the boundaries of what is possible in the fields
            of transportation and alternative energy. <br />
            <br />
          </Typography>
        </div>

        <Divider />
        <Grid container spacing={6} style={{ marginTop: "8vh" }}>
          <Grid item lg={3} md={6} xs={12}>
            <Card
              style={{
                borderRadius: "22px",
                padding: "4%",
                justify: "center",
                backgroundColor: "#FF3CAC",
                background:
                  "linear-gradient(225deg, #FF3CAC 0%, #784BA0 33%, #2B86C5 66%)",
                color: "white",
              }}
            >
              <CardActionArea>
                <CardHeader
                  titleTypographyProps={{ variant: "h3" }}
                  title=" Platinum Sponsers"
                  style={{ textAlign: "center" }}
                />

                <CardContent>
                  <hr
                    style={{
                      color: "#fff",
                      backgroundColor: "#fff",
                      height: "1vh",
                      borderRadius: "7px 7px 7px 7px",
                      width: "40%",
                    }}
                  />{" "}
                  <br />
                  <h3 className="sponsor-h3">
                    <span className="uppercase">₹1,25,000/- AND ABOVE</span>
                  </h3>
                  <br />
                  <ul
                    className=" perks sponsor-li"
                    style={{ lineHeight: "1.6" }}
                  >
                    <b>
                      <li style={{ marginBottom: "10px" }}>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          color="#00FA9A"
                          style={{ marginRight: "10px" }}
                        />
                        Name of the title sponsors "company name-car name"
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          color="#00FA9A"
                          style={{ marginRight: "10px" }}
                        />
                        *Name and Logo on: -{">"}all merchandise and identity
                        cards worn by team -{">"}12"X12" logo on the car
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          color="#00FA9A"
                          style={{ marginRight: "10px" }}
                        />
                        *Banners,Flags,Hoardings will be displayed at the event
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          color="#00FA9A"
                          style={{ marginRight: "10px" }}
                        />
                        *Sponsors can Organise an exhibition of the car with the
                        team
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          color="#00FA9A"
                          style={{ marginRight: "10px" }}
                        />
                        *Special Mention of the sponsors will be made during all
                        important exchange talks at various events
                      </li>
                    </b>
                  </ul>
                  <br /> <br /> <br />
                  <a
                    href="/"
                    className="sponsor-button"
                    style={{ textAlign: "center" }}
                  >
                    SIGN UP
                  </a>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Card
              style={{
                borderRadius: "22px",
                padding: "4%",
                backgroundColor: "#FFE53B",
                background: "linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)",
                color: "white",
              }}
            >
              <CardActionArea>
                <CardHeader
                  titleTypographyProps={{ variant: "h3" }}
                  title="Gold Sponsers"
                  style={{ textAlign: "center" }}
                />

                <CardContent>
                  <hr
                    style={{
                      color: "#fff",
                      backgroundColor: "#fff",
                      height: "1vh",
                      borderRadius: "7px 7px 7px 7px",
                      width: "40%",
                    }}
                  />{" "}
                  <br />
                  <h3 className="sponsor-h3">
                    ₹75,000/- AND ABOVE<span className="small"></span>
                  </h3>
                  <br />
                  <b>
                    <ul className=" perks" style={{ lineHeight: "1.6" }}>
                      <li style={{ marginBottom: "10px" }}>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          color="#00FA9A"
                          style={{ marginRight: "10px" }}
                        />
                        Name of the title sponsors "company name-car name"
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          color="#00FA9A"
                          style={{ marginRight: "10px" }}
                        />
                        *Name and Logo on: -{">"}all merchandise and identity
                        cards worn by team -{">"}10"X10" logo on the car
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          color="#00FA9A"
                          style={{ marginRight: "10px" }}
                        />
                        *Banners,Flags,Hoardings will be displayed at the event
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          color="#00FA9A"
                          style={{ marginRight: "10px" }}
                        />
                        *Sponsors can Organise an exhibition of the car with the
                        team
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          color="#00FA9A"
                          style={{ marginRight: "10px" }}
                        />
                        *Special Mention of the sponsors will be made during all
                        important exchange talks at various events
                      </li>
                    </ul>
                  </b>
                  <br /> <br /> <br />
                  <a
                    href="/"
                    className="sponsor-button"
                    style={{ textAlign: "center" }}
                  >
                    Sign Up
                  </a>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Card
              style={{
                borderRadius: "22px",
                padding: "4%",
                backgroundColor: "#08AEEA",
                background: "linear-gradient(45deg, #08AEEA 0%, #2AF598 100%)",
                color: "white",
              }}
            >
              <CardActionArea>
                <CardHeader
                  titleTypographyProps={{ variant: "h3" }}
                  title="Associate Sponsers"
                  style={{ textAlign: "center" }}
                />

                <CardContent>
                  <hr
                    style={{
                      color: "#fff",
                      backgroundColor: "#fff",
                      height: "1vh",
                      borderRadius: "7px 7px 7px 7px",
                      width: "40%",
                    }}
                  />{" "}
                  <br />
                  <h3 className="sponsor-h3">
                    ₹35,000 - ₹75,000/-<span className="small"></span>
                  </h3>
                  <br />
                  <b>
                    <ul className=" perks" style={{ lineHeight: "1.6" }}>
                      <li style={{ marginBottom: "10px" }}>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          color="#00FA9A"
                          style={{ marginRight: "10px" }}
                        />
                        Name of the title sponsors "company name-car name"
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          color="#00FA9A"
                          style={{ marginRight: "10px" }}
                        />
                        *Name and Logo on: -{">"}all merchandise and identity
                        cards worn by team -{">"}7"X7" logo on the car
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          color="#00FA9A"
                          style={{ marginRight: "10px" }}
                        />
                        *Banners will be displayed at the event
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          color="#00FA9A"
                          style={{ marginRight: "10px" }}
                        />
                        *Sponsors can Organise an exhibition of the car with the
                        team
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          color="#00FA9A"
                          style={{ marginRight: "10px" }}
                        />
                        *Special Mention of the sponsors will be made during all
                        important exchange talks at various events
                      </li>
                    </ul>
                  </b>
                  <br /> <br /> <br /> <br /> <br />
                  <a
                    href="/"
                    className="sponsor-button"
                    style={{ textAlign: "center" }}
                  >
                    Sign Up
                  </a>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item lg={3} md={6} xs={12}>
            <Card
              style={{
                borderRadius: "22px",
                padding: "4%",
                backgroundColor: "#FF9A8B",
                background:
                  "linear-gradient(225deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)",
                color: "white",
              }}
            >
              <CardActionArea>
                <CardHeader
                  titleTypographyProps={{ variant: "h3" }}
                  title="Class Sponsers"
                  style={{ textAlign: "center" }}
                />

                <CardContent>
                  <hr
                    style={{
                      color: "#fff",
                      backgroundColor: "#fff",
                      height: "1vh",
                      borderRadius: "7px 7px 7px 7px",
                      width: "40%",
                    }}
                  />{" "}
                  <br />
                  <h3 className="sponsor-h3">
                    <span className="uppercase">BELOW ₹35,000/-</span>
                  </h3>
                  <br />
                  <b>
                    <ul className=" perks" style={{ lineHeight: "1.6" }}>
                      <li style={{ marginBottom: "10px" }}>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          color="#00FA9A"
                          style={{ marginRight: "10px" }}
                        />
                        Name of the title sponsors "company name-car name"
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          color="#00FA9A"
                          style={{ marginRight: "10px" }}
                        />
                        *Name and Logo on: -{">"}all merchandise and identity
                        cards worn by team -{">"}5"X5" logo on the car
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          color="#00FA9A"
                          style={{ marginRight: "10px" }}
                        />
                        *Banners,Flags,Hoardings will be displayed at the event
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          color="#00FA9A"
                          style={{ marginRight: "10px" }}
                        />
                        *Sponsors can Organise an exhibition of the car with the
                        team
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          color="#00FA9A"
                          style={{ marginRight: "10px" }}
                        />
                        *Special Mention of the sponsors will be made during all
                        important exchange talks at various events
                      </li>
                    </ul>
                  </b>
                  <br />
                  <br /> <br />
                  <br /> <br />
                  <a
                    href="/"
                    className="sponsor-button"
                    style={{ textAlign: "center" }}
                  >
                    Sign Up
                  </a>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        <div>
          <ImageSlider slides={SliderData} />
        </div>
        <br />
      </div>
    </Container>
  );
}

export default Sponsor;

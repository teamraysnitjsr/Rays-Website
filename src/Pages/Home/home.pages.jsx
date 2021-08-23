import React, { Component } from "react";
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import {
  Button,
  Container,
  Grid,
  Header,
  Image,
  Segment,
  Label,
} from "semantic-ui-react";
import { SiProcesswire } from "react-icons/si";
import { FcIdea } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcPieChart } from "react-icons/fc";
import "./home.syles.css";
import car1 from "../../assets/images/car1.png";
import car3 from "../../assets/images/car3.jpg";
import car4 from "../../assets/images/car4.png";
import news1 from "../../assets/images/news/news1.jpg";
import news2 from "../../assets/images/news/news2.jpg";
import news3 from "../../assets/images/news/news3.jpg";
class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <Segment inverted vertical textAlign="center">
          <Container
            className="content"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link to="/about">
              <Header
                inverted
                as="h1"
                style={{
                  marginTop: "3%",
                }}
              >
                A Step Towards Future
              </Header>
              <FcAbout
                size="60px"
                style={{
                  width: "100%",
                }}
              ></FcAbout>
            </Link>
          </Container>
        </Segment>

        <div className="spacer layer1"></div>

        <div style={{}}>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <FcPieChart
              size="60px"
              style={{
                marginBottom: "20px",
              }}
            ></FcPieChart>
            <div
              style={{
                fontSize: "45px",
                fontWeight: "800",
              }}
            >
              Our Features
            </div>
          </div>
          <Segment vertical>
            <Grid container stackable textAlign="center" columns={3}>
              <Grid.Column style={{}}>
                <i
                  class="massive circular edit icon"
                  style={{
                    color: "#0b46a3",
                  }}
                ></i>
                <Header style={{}}>Design</Header>

                <Button color="green">View details &raquo;</Button>
              </Grid.Column>

              <Grid.Column>
                <i
                  class="massive circular  chart area icon"
                  style={{
                    color: "#0b46a3",
                  }}
                ></i>
                <Header style={{}}>Business</Header>

                <Button color="green">View details &raquo;</Button>
              </Grid.Column>
              <Grid.Column>
                <i
                  class="massive circular  car icon"
                  style={{
                    color: "#0b46a3",
                  }}
                ></i>
                <Header style={{}}>Race</Header>

                <Button color="green">View details &raquo;</Button>
              </Grid.Column>
            </Grid>
          </Segment>
          <div className="spacer2 layer2">
            <div
              style={{
                color: "#fff",
                textAlign: "center",
                padding: "5%",
              }}
            >
              <SiProcesswire
                size="50px"
                color="#fff"
                style={{
                  color: "#fff",
                  margin: "20px",
                }}
              ></SiProcesswire>
              <div
                style={{
                  fontSize: "45px",
                  fontWeight: "800",
                }}
              >
                Our Process
              </div>
            </div>
            <Grid className="test-div">
              <Grid.Row textAlign="center">
                <Grid.Column
                  mobile={16}
                  tablet={16}
                  computer={5}
                  className="tiles"
                >
                  <Label
                    basic
                    size="large"
                    style={{
                      marginBottom: "25px",
                    }}
                  >
                    MEET
                  </Label>
                  <Image centered circular size="large" src={car1} />
                </Grid.Column>
                <Grid.Column
                  mobile={16}
                  tablet={16}
                  computer={5}
                  className="tiles"
                >
                  <Label
                    basic
                    size="large"
                    style={{
                      marginBottom: "25px",
                    }}
                  >
                    PLAN
                  </Label>
                  <Image centered circular size="large" src={car3} />
                </Grid.Column>
                <Grid.Column
                  mobile={16}
                  tablet={16}
                  computer={5}
                  className="tiles"
                >
                  <Label
                    basic
                    size="large"
                    style={{
                      marginBottom: "25px",
                    }}
                  >
                    DESIGN
                  </Label>
                  <Image centered circular size="large" src={car4} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
          <div
            style={{
              textAlign: "center",
              justifyContent: "space-between",
              margin: "3%",

              padding: "4%",
            }}
          >
            <FcIdea size="50px" style={{}}></FcIdea>
            <div
              style={{
                marginTop: "2%",
                fontSize: "45px",
                fontWeight: "800",
              }}
            >
              In The News
            </div>
          </div>
          <Segment
            vertical
            info
            style={{
              padding: "3%",
            }}
          >
            <Grid
              stackable
              style={{
                marginBottom: "5%",
              }}
            >
              <Grid.Column width={8}>
                <Header
                  style={{
                    fontSize: "40px",
                  }}
                >
                  Race to IASC pays off for NIT Jamshedpur solar car team
                </Header>
                <p>
                  The NIT JAMSHEDPUR Solar Car Team has been fighting to be
                  recognized as the top solar car team in India, an accolade it
                  has yet to earn over its 5-year history of racing.While the
                  team has established a strong lineage of engineers, business
                  leaders, managers, and creatives over the years, it continues
                  to go through an ebb and flow of success and failure in its
                  path to perfection.
                </p>
              </Grid.Column>
              <Grid.Column width={8}>
                <Image src={news1} />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment
            vertical
            info
            style={{
              padding: "3%",
            }}
          >
            <Grid
              stackable
              style={{
                marginBottom: "5%",
              }}
            >
              <Grid.Column width={4}>
                <Image src={news2} />
              </Grid.Column>
              <Grid.Column width={12}>
                <Header
                  style={{
                    fontSize: "40px",
                  }}
                >
                  Taking Off the Pounds to Chase a Sun-Powered Victory
                </Header>
                <p>
                  The failures play just as significant a role in the future
                  victories of the team as it continues to learn how to be
                  perfect in order to win the INDO ASIAN Solar Challenge.
                </p>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment
            vertical
            info
            style={{
              padding: "3%",
            }}
          >
            <Grid stackable>
              <Grid.Column width={12}>
                <Header
                  as="h1"
                  style={{
                    fontSize: "40px",
                  }}
                >
                  Meet the College Kids Who Set Out to Build the 'Ultimate
                  Electric Vehicle'
                </Header>
                <p>
                  This constant change in the tide in the past has elevated the
                  legacies of the team's successful racers to those of giants
                  whose stories help inspire the current team members to push
                  the bounds of what seems possible in shaping their car and
                  their team.
                </p>
              </Grid.Column>
              <Grid.Column width={4}>
                <Image src={news3} />
              </Grid.Column>
            </Grid>
          </Segment>
        </div>
      </div>
    );
  }
}

export default Home;

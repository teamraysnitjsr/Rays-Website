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
import "./home.syles.css";
import car1 from "../../assets/images/car1.png";
import car2 from "../../assets/images/car2.png";
import car4 from "../../assets/images/car4.png";
class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <Segment
          inverted
          vertical
          textAlign="center"
          style={{
            position: "relative",
          }}
        >
          <Container className="content">
            <Header inverted as="h1">
              A Step Towards Future
            </Header>
            <Link to="/about">
              <Button
                size="huge"
                style={{
                  background: "#3679E3",
                }}
                to="/about"
              >
                Learn more
              </Button>
            </Link>
          </Container>
          <div class="custom-shape-divider-bottom-1629657631">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </Segment>

        <Container
          style={{
            
          }}
        >
          <div className="featureHeader">Our Features</div>
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
          <Segment vertical>
            <Grid stackable>
              <Grid.Column width={8}>
                <Header
                  style={{
                    fontSize: "40px",
                  }}
                >
                  First featurette heading.{" "}
                </Header>
                <p>
                  Many factors go into the construction of a solar car spanning
                  from the car's structure, how each car component comes
                  together, the make of its electrical systems and how each
                  system ties together.
                </p>
              </Grid.Column>
              <Grid.Column width={8}>
                <Image src={car1} />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment vertical>
            <Grid stackable>
              <Grid.Column width={8}>
                <Image src={car2} />
              </Grid.Column>
              <Grid.Column width={8}>
                <Header
                  style={{
                    fontSize: "40px",
                  }}
                >
                  Oh yeah, it's that good.
                </Header>
                <p>
                  The business team strives to engage with industries to form
                  mutually beneficial partnerships, provide our audiences a
                  platform to follow team's progress on its vehicles and to
                  deliver team's vision of creating a sustainably aware
                  community through education.
                </p>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment vertical>
            <Grid stackable>
              <Grid.Column width={8}>
                <Header
                  as="h1"
                  style={{
                    fontSize: "40px",
                  }}
                >
                  And lastly, this one.
                </Header>
                <p>
                  The race team looks at every aspect the race, developing the
                  best strategies for success. From determining the next move
                  during unforeseen race circumstances to working with our
                  engineers to develop the most competitive car, they are the
                  minds that ensure we are in the most optimal position we can
                  be to win.
                </p>
              </Grid.Column>
              <Grid.Column width={8}>
                <Image src={car4} />
              </Grid.Column>
            </Grid>
          </Segment>
          <Grid.Column
            mobile={16}
            tablet={13}
            computer={13}
            floated="right"
            id="content"
          >
            <Grid padded>
              <Grid.Row textAlign="center">
                <Grid.Column mobile={12} tablet={6} computer={5}>
                  <Image centered circular size="small" src={car1} />
                  <Label basic size="large">
                    MEET
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column mobile={12} tablet={6} computer={5}>
                  <Image centered circular size="small" src={car1} />
                  <Label basic size="large">
                    PLAN
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column mobile={12} tablet={6} computer={5}>
                  <Image centered circular size="small" src={car1} />
                  <Label basic size="large">
                    DESIGN
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column mobile={12} tablet={6} computer={5}>
                  <Image centered circular size="small" src={car1} />
                  <Label basic size="large">
                    DEVELOP
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column mobile={12} tablet={6} computer={5}>
                  <Image centered circular size="small" src={car1} />
                  <Label basic size="large">
                    DEVELOP
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column mobile={12} tablet={6} computer={5}>
                  <Image centered circular size="small" src={car1} />
                  <Label basic size="large">
                    DEVELOP
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Container>
      </div>
    );
  }
}

export default Home;

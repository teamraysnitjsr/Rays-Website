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
import car1 from '../../assets/images/car1.png';
import car2 from '../../assets/images/car2.png';
import car4 from '../../assets/images/car4.png';
class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <Segment inverted vertical textAlign="center">
          <Container className="content">
            <Header inverted as="h1">
              A Step Towards Future
            </Header>
            <Link to="/about">
              <Button
                size="huge"
                style={{
                  background: "#66fcf1",
                }}
                to="/about"
              >
                Learn more
              </Button>
            </Link>
          </Container>
        </Segment>

        <Container>
          <div
            className="featureHeader"
            style={{
              color: "#fff",
            }}
          >
            Our Features
          </div>
          <Segment vertical>
            <Grid container stackable textAlign="center" columns={3}>
              <Grid.Column style={{}}>
                <i
                  class="massive circular edit icon"
                  style={{
                    color: "#66fcf1",
                  }}
                ></i>
                <Header
                  as="h1"
                  style={{
                    color: "#fff",
                  }}
                >
                  Engineering Design
                </Header>
                <p>
                  Many factors go into the construction of a solar car spanning
                  from the car's structure, how each car component comes
                  together, the make of its electrical systems and how each
                  system ties together.
                </p>
                <Button color="blue">View details &raquo;</Button>
              </Grid.Column>

              <Grid.Column>
                <i
                  class="massive circular  chart area icon"
                  style={{
                    color: "#66fcf1",
                  }}
                ></i>
                <Header
                  as="h1"
                  style={{
                    color: "#fff",
                  }}
                >
                  Business
                </Header>
                <p>
                  The business team strives to engage with industries to form
                  mutually beneficial partnerships, provide our audiences a
                  platform to follow team's progress on its vehicles and to
                  deliver team's vision of creating a sustainably aware
                  community through education.
                </p>
                <Button color="blue">View details &raquo;</Button>
              </Grid.Column>
              <Grid.Column>
                <i
                  class="massive circular  car icon"
                  style={{
                    color: "#66fcf1",
                  }}
                ></i>
                <Header
                  as="h1"
                  style={{
                    color: "#fff",
                  }}
                >
                  Race
                </Header>
                <p>
                  The race team looks at every aspect the race, developing the
                  best strategies for success. From determining the next move
                  during unforeseen race circumstances to working with our
                  engineers to develop the most competitive car, they are the
                  minds that ensure we are in the most optimal position we can
                  be to win.
                </p>
                <Button color="blue">View details &raquo;</Button>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment vertical>
            <Grid stackable>
              <Grid.Column width={10}>
                <Header
                  as="h1"
                  style={{
                    color: "#c0c0c0",
                  }}
                >
                  First featurette heading.{" "}
                </Header>
                <p>
                  Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                  id ligula porta felis euismod semper. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                  ac cursus commodo.
                </p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Image src={car1} />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment vertical>
            <Grid stackable>
              <Grid.Column width={6}>
                <Image src={car2} />
              </Grid.Column>
              <Grid.Column width={10}>
                <Header
                  as="h1"
                  style={{
                    color: "#c0c0c0",
                  }}
                >
                  Oh yeah, it's that good.
                </Header>
                <p>
                  Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                  id ligula porta felis euismod semper. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                  ac cursus commodo.
                </p>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment vertical>
            <Grid stackable>
              <Grid.Column width={10}>
                <Header
                  as="h1"
                  style={{
                    color: "#c0c0c0",
                  }}
                >
                  And lastly, this one.
                </Header>
                <p>
                  Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                  id ligula porta felis euismod semper. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                  ac cursus commodo.
                </p>
              </Grid.Column>
              <Grid.Column width={6}>
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
                  <Image
                    centered
                    circular
                    size="small"
                    src={car1}
                  />
                  <Label basic size="large">
                    MEET
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column mobile={12} tablet={6} computer={5}>
                  <Image
                    centered
                    circular
                    size="small"
                    src={car1}
                  />
                  <Label basic size="large">
                    PLAN
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column mobile={12} tablet={6} computer={5}>
                  <Image
                    centered
                    circular
                    size="small"
                    src={car1}
                  />
                  <Label basic size="large">
                    DESIGN
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column mobile={12} tablet={6} computer={5}>
                  <Image
                    centered
                    circular
                    size="small"
                    src={car1}
                  />
                  <Label basic size="large">
                    DEVELOP
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column mobile={12} tablet={6} computer={5}>
                  <Image
                    centered
                    circular
                    size="small"
                    src={car1}
                  />
                  <Label basic size="large">
                    DEVELOP
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column mobile={12} tablet={6} computer={5}>
                  <Image
                    centered
                    circular
                    size="small"
                    src={car1}
                  />
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

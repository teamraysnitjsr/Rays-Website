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
              <Button size="huge" color="green" to="/about">
                Learn more
              </Button>
            </Link>
          </Container>
        </Segment>

        <Container>
          <div className="featureHeader">Our Features</div>
          <Segment vertical>
            <Grid container stackable textAlign="center" columns={3}>
              <Grid.Column style={{}}>
                <i class="massive circular inverted edit icon"></i>
                <Header as="h1">Engineering Design</Header>
                <p>
                  Many factors go into the construction of a solar car spanning
                  from the car's structure, how each car component comes
                  together, the make of its electrical systems and how each
                  system ties together.
                </p>
                <Button color="blue">View details &raquo;</Button>
              </Grid.Column>

              <Grid.Column>
                <i class="massive circular inverted chart area icon"></i>
                <Header as="h1">Business</Header>
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
                <i class="massive circular inverted car icon"></i>
                <Header as="h1">Race</Header>
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
                <Header as="h1">
                  First featurette heading.{" "}
                  <span className="sub">It'll blow your mind.</span>
                </Header>
                <p>
                  Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                  id ligula porta felis euismod semper. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                  ac cursus commodo.
                </p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Image src="https://images.unsplash.com/photo-1500087326943-dcabb70c026f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment vertical>
            <Grid stackable>
              <Grid.Column width={6}>
                <Image src="https://images.unsplash.com/photo-1500087326943-dcabb70c026f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
              </Grid.Column>
              <Grid.Column width={10}>
                <Header as="h1">
                  Oh yeah, <span className="sub">it's that good.</span>
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
                <Header as="h1">
                  And lastly, <span className="sub">this one.</span>
                </Header>
                <p>
                  Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                  id ligula porta felis euismod semper. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                  ac cursus commodo.
                </p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Image src="https://images.unsplash.com/photo-1500087326943-dcabb70c026f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
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
                <Grid.Column mobile={8} tablet={4} computer={4}>
                  <Image
                    centered
                    circular
                    size="small"
                    src="https://images.unsplash.com/photo-1530692228265-084b21566b12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=626&q=80"
                  />
                  <Label basic size="large">
                    Label
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column mobile={8} tablet={4} computer={4}>
                  <Image
                    centered
                    circular
                    size="small"
                    src="https://images.unsplash.com/photo-1530692228265-084b21566b12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=626&q=80"
                  />
                  <Label basic size="large">
                    Label
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column mobile={8} tablet={4} computer={4}>
                  <Image
                    centered
                    circular
                    size="small"
                    src="https://images.unsplash.com/photo-1530692228265-084b21566b12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=626&q=80"
                  />
                  <Label basic size="large">
                    Label
                  </Label>
                  <p>Something else</p>
                </Grid.Column>
                <Grid.Column mobile={8} tablet={4} computer={4}>
                  <Image
                    centered
                    circular
                    size="small"
                    src="https://images.unsplash.com/photo-1530692228265-084b21566b12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=626&q=80"
                  />
                  <Label basic size="large">
                    Label
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

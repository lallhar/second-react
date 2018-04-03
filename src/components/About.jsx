import React, { Component } from 'react'
import { Grid, Col, Image,  Row, Button } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>

      <Grid>
  <Row className="show-grid">
        <Col xs={6} md={6}>
        <Image src="assets/carson-background-750w.jpg" className="about-profile-pic"/>
        <Image src="assets/west-foreground-750w.jpg" className="firstimg"/>
        </Col>
    <Col xs={6} md={4} className="move">
    <h5 className="sub-title">
        AWARD-WINNING DESIGN
    </h5>
    <h2 className="title">
        LOOK LIKE AN EXPERT RIGHT FROM THE START.
     </h2>
     <p>Our award-winning templates are the most beautiful way to present your ideas online. Stand out with a professional website, portfolio, or online store.</p>
       <Button bsStyle="primary" bsSize="large" className="button">GET STARTED</Button>
       <Button bsStyle="link" className="link">LEARN MORE</Button>
    </Col>
  </Row>
  </Grid>

  <Grid className="vid">
<Row className="show-grid2">
<Col xs={6} md={4} className="movetwo">
<h5 className="sub-title">
    ONLINE STORES
</h5>
<h2 className="title">
  ALL YOU NEED TO POWER YOUR ONLINE STORE.
 </h2>
 <p>Our all-in-one platform gives you everything you need to run your business. Whether you’re just getting started or are an established brand, our powerful platform helps your business grow.</p>
 <Button bsStyle="primary" bsSize="large" className="button">GET STARTED</Button>
 <Button bsStyle="link" className="link">LEARN MORE</Button>
</Col>
<Col xs={6} md={6}>
<Image src="assets/background-500w.jpg" className="dairyshort" />
  <Image src="assets/foreground-500w.jpg" className="dairyone" />
</Col>
</Row>
</Grid>

<Grid className="threecol">
<Row className="show-grid3">
<Col xs={6} md={6}>
<Image src="assets/background-image-750w.jpg" className="three" />
<Image src="assets/foreground.jpg" className="threeone" />
</Col>
<Col xs={6} md={4} className="movethree">
<h5 className="sub-title">
  MARKETING TOOLS
</h5>
<h2 className="title">
REACH AND GROW YOUR AUDIENCE.
</h2>
<p>Squarespace provides you with a comprehensive set of marketing tools to engage with your audience, get found across search and social, and grow your following.</p>
<Button bsStyle="primary" bsSize="large" className="button">GET STARTED</Button>
<Button bsStyle="link" className="link">LEARN MORE</Button>
</Col>
</Row>
</Grid>

<Grid className="four">
<Row className="show-grid4">
<Col xs={6} md={4} className="movefour">
<h5 className="sub-title">
  ALL-IN-ONE PLATFORM
</h5>
<h2 className="title">
WE’VE GOT YOU COVERED.
</h2>
<p>Think of Squarespace as your very own IT department, with free, unlimited hosting, top-of-the-line security, an enterprise-grade infrastructure, and around-the-clock support. Get personalized support from our Customer Care Team via email or live chat, or join a live webinar. Reach out any time — we’re here 24/7.</p>
<Button bsStyle="primary" bsSize="large" className="button">VISIT HELP CENTER</Button>
<Button bsStyle="link" className="link">LEARN MORE</Button>
</Col>
<Col xs={6} md={6}>
<Image src="assets/primary-3.jpg" className="fourimg" />
</Col>
</Row>
</Grid>

      </div>
    )
  }
}

import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './index.css';

class Welcome extends Component {
  constructor(){
    super();
    this.state = {
      changeGradient: 'radial-gradient(circle, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.17), rgba(0, 0, 0, 0.2))',
      bgSize: '150%'
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    let proportion = (window.scrollY/window.innerHeight);
    let gradientOffset = 0.2, bgSizeXoffset=1.5;
    let gradientPropo = proportion+gradientOffset;
    if(proportion<=1){
      this.setState({
        changeGradient: `radial-gradient(circle, rgba(0, 0, 0, ${gradientPropo}), rgba(0, 0, 0, ${gradientPropo*1.2}), rgba(0, 0, 0, ${gradientPropo*1.4}))`
      })
    }
    if(proportion<=0.8){
      this.setState({
        bgSize: `${(bgSizeXoffset-(proportion*0.2))*100}%`
      })
    }
  }

  render(){
    let {
      changeGradient,
      bgSize
    } = this.state;
    return(
      <section className='welcome' style={{backgroundSize: bgSize}}>
        <div className="gradient" style={{background: changeGradient}}>
        <Grid>
          <Row>
            <Col md={12}>
              <ParallaxProvider>
                <Parallax
                  className="custom-class"
                  offsetYMax={800}
                  offsetYMin={-800}
                  slowerScrollRate={true}
                >
                  <p className="title">Hi, I'm Eric, a Full-Stack Web Developer.</p>
                </Parallax>
              </ParallaxProvider>
            </Col>
          </Row>
        </Grid>
        </div>
      </section>
    );
  }
}

export default Welcome;

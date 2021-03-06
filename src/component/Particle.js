import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';

const Particle = () => {
  let numberValue = 0;
  if (matchMedia('(max-width: 720px)').matches) {
    numberValue = 150;
  }else {
    numberValue = 200;
  }
  return(
    <React.Fragment>
      <StyleParticles
      params={{
        "particles": {
            "number": {
                "value": numberValue,
                "density": {
                    "enable": false
                }
            },
            "color": {
              "value": "#0ebeff"
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "speed": 4,
                    "size_min": 1
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "random": true,
                "speed": 1,
                "direction": "top",
                "out_mode": "out"
            }
        },
        
        "interactivity": {
            "events": {
                /*"onhover": {
                    "enable": true,
                    "mode": "bubble"
                },*/
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                }
            },
            "modes": {
                "bubble": {
                    "distance": 250,
                    "duration": 2,
                    "size": 0,
                    "opacity": 0
                },
                "repulse": {
                    "distance": 400,
                    "duration": 4
                }
            }
        }
    }} />
    </React.Fragment>
  )
}

const StyleParticles = styled(Particles)`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

export default Particle;
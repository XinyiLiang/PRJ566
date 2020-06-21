import React from 'react';
import { Container, Row,Col} from 'react-bootstrap';

export const About = () =>(
   <div className="HomeMain">
    <Container >
        <Row>
            <Col md={{ span: 6, offset: 3 }}>
            <h2> Game Detective</h2>
                <h3> What is a detective game?</h3>
               
                <p>                
                    The detective game is an immersion in the atmospheric history of the film noir, a challenge to ingenuity and attentiveness and an unforgettable team adventure.
                    The stakes are high: for a limited time, your team must find answers in a complicated case, otherwise the offender will escape justice. Get access to all case materials, police reports and reports, fresh newspaper issues, interview witnesses, and gather evidence.
                    Dark jazz, rainy streets of the USA of the 50s, gloomy riddles - a detective game is saturated with a spirit that will make you forget about the surrounding reality and feel like a real detective!
                </p>
            </Col>
        </Row>

        <Row>
            <Col md={{ span: 6, offset: 3 }}>
                <h3> How does this happen?</h3>
               
                <p>                
                The team (detective agency) receives a briefing in which their client addresses them, the latest press, the address book of the American city and a list of questions that must be answered for a successful solution to the case.
                The team selects where it wants to "go" for evidence, evidence or other information, finds the desired address and receives new information, if any. After two hours, the team will build its version, and then find out what really happened.
                </p>
            </Col>
        </Row>
        <Row>
            <Col md={{ span: 6, offset: 3 }}>
                <h3> Why is a detective game unforgettable?</h3>
               
                <p>
                It:
                    <ul>
                       <li>interactive intellectual entertainment of a new generation with roots in the traditional genre of detective story;</li> 
                       <li> action story in black and white film noir;</li>
                        <li> a cohesive team experience for friends, colleagues or family;</li>  
                       <li> taste of victory by the power of one’s own intellect and ingenuity.</li>
                    </ul>                
           
                </p>
            </Col>
        </Row>
    </Container>     
    </div>


    )

export default About;

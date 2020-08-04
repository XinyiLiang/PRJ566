import React from 'react';
import { Container, Row,Col} from 'react-bootstrap';
import {NavBar} from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

export const HowToPlay = () =>(
   <div className="HomeMain">
      < NavBar/>
    <Container >
        <Row>
            <Col md={{ span: 8, offset: 3 }}>
            <h2 className="HowToPlayTitle"> How To Play <span className="HowToPlayTitleGname">Detective</span></h2>
               
                <h3> Register & Log In</h3>
               
                <p>                
                    Register an account and log in to be able to join the game.
                </p>
            </Col>
        </Row>

        <Row>
            <Col md={{ span: 8, offset: 3 }}>
                <h3> Join a Game</h3>
               
                <p>                
                After registeration, go to the Event page to check out when the game event will start.
                click the event that you like to join the event.
                </p>
            </Col>
        </Row>
        <Row>
            <Col md={{ span: 8, offset: 3 }}>
                <h3> Play the Game</h3>
                
                <p>
                click Play button to play the game. The game will be limited in 2 hours.<br />
                Inside the Play page, you will see the crime case description. <br />
                Read the case and then make phone call through PhoneBook Button to collect clues to answer the final question list. <br />
                In the end, you will need to answer the question list of the case to solve the case. <br />
                The correct answer will earn points. The more points you earn, the more socres you will have.
                </p>
            </Col>
        </Row>

        <Row>
            <Col md={{ span: 8, offset: 3 }}>
                <h3> Score method</h3>
                
                <ul>
                <li>Total Moves: Each move you made will be count.</li>
                <li>Total Points: The correct answers from the final question list help players earn points.</li>
                <li>[Total Score] =  [Total Points] -[Total Moves]</li>
                </ul>
            </Col>
        </Row>

    </Container>     
    </div>


    )

export default HowToPlay;

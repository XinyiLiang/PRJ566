import React from 'react';
import { Container, Row,Col} from 'react-bootstrap';
import FinalScoreBoard from '../components/FinalScoreBoard';
import {NavBar} from   '../components/NavBar';

export const ScoreBoard = () =>(

        <div className="HomeMain">
                <NavBar/>
            <Container >
                  <Row>
                       <Col md={{ span: 6, offset: 3 }}>
                             <h2> ScoreBoard</h2>
                             <FinalScoreBoard/>

                        </Col>
                    </Row>
             </Container>
            
         </div>
    )
export default ScoreBoard;

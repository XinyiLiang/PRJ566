import React from 'react';
import styled from 'styled-components';


const Styles = styled.div`
  
.PageNotFound{
    max-height: 100%;
    max-width:100%;
    margin: auto;
    text-align: center;
    display: block;
    background-color:  #c4b5a9;;
}
  
`;
export const NoMatch = () =>(
    <Styles>
        <div class="PageNotFound ">
            
            <img src={require('../Images/PageNotFound.png')}  alt="PageNotFound" />
        </div>
    </Styles>
    )

import React from 'react';
import { 
    StyledTop,
    StyledHeader, 
    StyledIcon, 
    StyledParagraph, 
    StyledLove, 
    StyledGridCol, 
    StyledMiddle, 
    StyledH3, 
    StyledBottom,
    StyledDivider,
    StyledButton,
    That,
    VidWrap,
    StyledImage,
    HeaderOverlay,
    HeaderStuff
} from "../utils/styles";
import { Grid, Container, Header, Button } from 'semantic-ui-react';
import Navigation from './Navbar/navigation'; 
import floor from '../assets/firstFloor.jpg'

function Home() {
    return(
        <>
        <Navigation />

        <That>
            <VidWrap>
            <StyledImage>
                <img src={floor} alt="flooring"/> 
            </StyledImage>
            </VidWrap>
            <HeaderOverlay></HeaderOverlay>
            <HeaderStuff>
            {/* <Logo src={logo} alt="logo"/> */}
                    <Header style={{color:"White"}} as="h1" content="California Flooring"/>
            
                <Container textAlign="center">
                
                        <StyledButton
                            
                            animated="fade"
                            size="huge"
                            // href="https://chrome.google.com/webstore/detail/job-saver/hklmnkhdlflnbnadkalnobiollacjcaa"
                        >
                        <Button.Content visible>Get Started</Button.Content>
                        <Button.Content hidden>Install Extension</Button.Content>
                        
                    </StyledButton>
               
            </Container>
        </HeaderStuff>
    </That>

        <StyledTop vertical>
            <Grid container stackable verticalAlign="middle">
                <Grid.Row>
                    <Grid.Column width={8}>
                        <StyledHeader as='h3'>
                            <strong>California Flooring</strong>
                        </StyledHeader>
                        <StyledParagraph>
                            <strong>California Flooring</strong> is the premier place to get your home flooring.
                        </StyledParagraph>
                    </Grid.Column>
                </Grid.Row>
            </Grid> 
        </StyledTop>

        <StyledBottom vertical>
                    <Container text>
                        <StyledH3 as="h3">
                            California Flooring
                        </StyledH3>
                        <StyledParagraph>
                            Get your floorings from here!
                        </StyledParagraph>

                        <StyledDivider horizontal>
                            <StyledIcon />
                        </StyledDivider>

                        <StyledH3 as ="h3">
                            <StyledIcon />
                            Want a quote?
                        </StyledH3>
                        <StyledParagraph>
                            Jimmy will fix it for you, at no cost!
                        </StyledParagraph>
                    </Container>
                </StyledBottom>
        </>
    )
}

export default Home;
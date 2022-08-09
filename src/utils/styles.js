import Styled from "styled-components";
import { Button } from "semantic-ui-react";

export const VideoDiv = Styled.div`
height:100vh;
display:flex;
justify-content:center;
align-content:center;
align-items:center;
color:#fff;
`;

export const VidWrap = Styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100vh;
overflow:hidden;
@media (min-width:376px){
    object-fit:cover;
}
@media (max-width:375px){
    object-fit:cover;
    width:100%;
}
`;

export const HeaderStuff = Styled.div`
z-index:2;
font-size:1.5rem;
display:block;
padding-bottom:2rem;
`;

export const StyledVideo = Styled.video`
width:90%;
height:95%;
margin-top:10rem;
`;

export const StyledServiceButton = Styled(Button)({
  color: "black !important",
  padding: "1em 5em 1em 5em",
  marginRight: "3rem",
  borderRadius: "5px",
  backgroundImage: "linear-gradient(90deg, #1a2a6c 0%, #b21f1f 50%, #fdbb2d 100%)",
});

export const StyledQuoteButton = Styled(Button)({
    color: "black !important",
    padding: "1em 5em 1em 5em",
    marginLeft: "3rem",
    borderRadius: "5px",
    backgroundImage: "linear-gradient(90deg, #1a2a6c 0%, #b21f1f 50%, #fdbb2d 100%)",
});
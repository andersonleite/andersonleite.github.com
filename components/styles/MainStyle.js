import styled from "styled-components";
import theme from "../colors"

const MainStyle = styled.div`

  section{
    position: relative;
    z-index: 1000;
    width: 75%;
    max-width: 1200px;
    margin-top: 5%;
    margin-right: auto;
    margin-left: auto;
  }
  
    @media (max-width: 991px) {
    section{
        //margin-top: 25%;
    } 
  }
  
  .me{
    padding-left: 10px;
  }
  .parent {
    display: grid;
    margin-top: 100px;
    margin-bottom: 140px;
    grid-auto-columns: 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 16px;
    -ms-grid-columns: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
    
  } 
  
   @media (max-width: 479px){
    .parent {
        margin-top: 60px;
        margin-bottom: 60px;
        grid-column-gap: 30px;
        grid-template-areas: ". . . ." ". . . .";
        -ms-grid-rows: auto auto;
        grid-template-rows: auto auto;
    }
  }

    .spacer._70 {
      height: 70px;
  }
  @media (max-width: 479px){
.spacer._70 {
    display: none;
    height: 70px;
}
}
  .circle01 {
    position: static;
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-top: 0px;
    margin-right: 10px;
    border-radius: 10px;
    background-color: rgb(65, 180, 103);
  }
  
  .c2 {
    background: ${theme.white};
  }
  .c3 {
    background: #737373;
  }
  
  h1 {
    position: static;
    margin-top: 0px;
    margin-bottom: 10px;
    -webkit-align-self: start;
    -ms-flex-item-align: start;
    -ms-grid-row-align: start;
    align-self: start;
    color: ${theme.white};
    font-size: 18px;
    line-height: 30px;
    font-weight: 400;
  }
  
@media (max-width: 991px) {
h1 {
    font-size: 16px;
    line-height: 26px;
}  
  }
  .description {
    color: rgb(115, 115, 115);
    font-size: 17px;
    line-height: 30px;
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
    
    a{
      transition: all 200ms ease;
      &:hover{
        color: ${theme.green};
        opacity: 0.5;
        text-decoration: underline;
      }
    }
 }

  @media screen and (max-width: 479px){
    .me {
      grid-column-end: 5;
      grid-column-start: 1;
      grid-row-start: 1;
      grid-row-end: 2;
      padding-left: 0px;
    }
  }
@media screen and (max-width: 479px){
.description {
    grid-row-start: 2;
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-end: 3;
    justify-self: stretch;
}
}
  
  @media (max-width: 991px) {
    .description{
        font-size: 14px;
        line-height: 24px;
    } 
  }
  
 h2 {
  margin-top: auto;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  margin-bottom: 10px;
  color: #efefef;
 }
 
 
 
 .area {
  position: relative;
  float: left;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px; 
  
  display: flex;
  height: auto;
  margin-top: auto;
  flex-direction: column;
  width: 25%;  
 }

  @media screen and (max-width: 767px){
    .area {
        width: 100%;
        left: auto;
        right: auto;
    } 
  }
  
@media (max-width: 767px) {
.area{
    margin-bottom: 60px;
    margin-left: -10px;
}   
}
 .summary {
  margin-top: 4px;
  color: rgb(115, 115, 115);
  margin-bottom: 10px;
  font-size: 12px;
  line-height: 20px;
 }
 
 .area-link {
    position: relative;
    overflow: visible;
    height: 20px;
    margin-right: auto;
    font-style: normal;
    
    transition: all 200ms ease;
    text-decoration: none;    
    
    font-size: 12px;
    opacity: 0.5;    
    
    transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
 }
 
 .social-links{
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 10000;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  margin-top: auto;
  margin-right: 20px;
  margin-left: auto;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
  -webkit-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
  font-size: 12px; 
  a{
    position: relative;
    height: 20px;
    margin-right: 15px;
    -webkit-transform-origin: 0% 0%;
    -ms-transform-origin: 0% 0%;
    transform-origin: 0% 0%;
    color: rgb(239, 239, 239);
    
    &:hover{
      color: ${theme.green};
      opacity: 0.5;
      font-style: normal;
      text-decoration: none;    
    }
    
  }
  
  .social-link-name{
    transform: translate3d(0px, 5px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  }
  
  .social-link:hover .social-link-name{
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
  }
 }
 
   .area-link-underline,
  .social-link-underline{  
    position: absolute;
    left: 0px;
    top: auto;
    bottom: 0px;
    width: 0%;
    height: 1px;
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgb(197, 224, 232)), to(rgb(197, 224, 232)));
    background-image: linear-gradient(180deg, rgb(197, 224, 232), rgb(197, 224, 232));
  }
  .area-link:hover .area-link-underline,
  .social-link:hover .social-link-underline{
    width: 100%;
    background: ${theme.green};
    
  }
  
  .area-link-underline,
  .social-link-underline,
  .social-link-name {
    transition: all 200ms ease;
  }
`

export default MainStyle

import styled from "styled-components";
import theme from "../colors"

const MainStyle = styled.div`

  section{
    position: relative;
    z-index: 1000;
    width: 75%;
    max-width: 1200px;
    margin-top: 10%;
    margin-right: auto;
    margin-left: auto;
  }
  
  .me{
    padding-left: 10px;
  }
  .parent {
  
    // grid
    display: grid;
    margin-top: 20%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 150px;
    .description { grid-area: 1 / 2 / 2 / 5; }
    
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
  
  .description {
    color: rgb(115, 115, 115);
    font-size: 17px;
    line-height: 30px;
    a{
      transition: all 200ms ease;
      &:hover{
        color: ${theme.green};
        opacity: 0.5;
        text-decoration: underline;
      }
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
  width: 100%;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px; 
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
    
    position: absolute;
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
  .social-link-underline,
  .social-link-name {
    transition: all 200ms ease;
  }
  
  .social-link:hover .social-link-underline{
    width: 100%;
    color: ${theme.green};
    opacity: 0.5;

  }
  .social-link:hover .social-link-name{
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
  }

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
 }

`

export default MainStyle

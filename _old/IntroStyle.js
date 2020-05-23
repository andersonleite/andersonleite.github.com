// import styled from "styled-components";
// import theme from "../colors";
//
// const IntroStyle = styled.div`
//
//
//   h1 {
//     font-weight: bold;
//     font-size: 24px;
//     color: ${theme.white};
//     line-height: 0px;
//     font-family: 'circular_std';
//   }
//   span {
//     color: ${theme.green};
//     padding-left: 1px;
//     padding-right: 1px;
//   }
//
//   p {
//     margin-top: 10px;
//     margin-top: 30px;
//     line-height: 20px;
//   }
//
//   body {
//     background: #d6eaf2;
//     color: #333;
//     font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
//     font-weight: 300;
//     margin: 0;
//     text-align: center;
//   }
//
//   /* Button styles */
//   .show-card {
//     animation: fade-in 0.4s 1s forwards ease-out;
//     background: #fff;
//     border-radius: 4em;
//     border: 0.25em solid ${theme.green};
//     color: ${theme.green};
//     cursor: pointer;
//     font-size: 18px;
//     left: 2em;
//     bottom: 2em;
//     position: absolute;
//     line-height: 1.5;
//     opacity: 0;
//     padding: 1em 1em 1em 4em;
//     // transform: translate(-50%, -50%);
//     outline: none;
//   }
//
//   .show-card.hide {
//     animation: fade-out 0.4s forwards ease-out;
//   }
//   /* Image on the button */
//   .show-card img {
//     border-radius: 50%;
//     left: 0.3em;
//     position: absolute;
//     top: 0.3em;
//     width: 3em;
//   }
//
//   .card {
//     display: none;
//     height: 16em;
//     left: calc(50% - 10em);
//     bottom: calc(20% - 10em);
//     position: absolute;
//     transition: all 0.4s 0.4s cubic-bezier(.5,.2,.43,1.33);
//     width: 20em;
//   }
//
//   .close {
//     color: #aaa;
//     cursor: pointer;
//     height: 1em;
//     opacity: 0;
//     position: absolute;
//     right: 0.5em;
//     top: 0.5em;
//     width: 1em;
//     z-index: 10;
//   }
//
//   .details {
//     position: absolute;
//     bottom: 2.5em;
//     background: #fff;
//     border-radius: 0.25em;
//     height: 0;
//     overflow: hidden;
//     text-align: center;
//     width: 20em;
//   }
//
//   .name {
//     color: #333;
//     font-weight: bold;
//     opacity: 0;
//     margin: 3em 0 0;
//   }
//
//   .description {
//     color: #666;
//     font-size: 1em;
//     font-weight: 200;
//     line-height: 1.5;
//     opacity: 0;
//     margin: 0.75em 2em 2em;
//   }
//
//   .headshot img {
//     border-radius: 50%;
//     border: 0.5em solid #fff;
//     display: block;
//     height: 6em;
//     margin: -3em auto 0.5em;
//     width: 6em;
//     opacity: 0;
//     transform: translateZ(0);
//   }
//
//   .icon-bar {
//     background: ${theme.green};
//     border-radius: 0.25em;
//     height: 4em;
//     left: -1em;
//     position: absolute;
//     right: -1em;
//     top: 13em;
//   }
//
//   .icon-bar ul {
//     display: flex;
//     flex-display: column;
//     flex-wrap: nowrap;
//     padding: 0;
//   }
//
//   .icon-bar li {
//     display: inline-block;
//     font-size: 2em;
//     padding: 0 1em;
//     opacity: 0;
//     width: 33%;
//   }
//
//   .icon-bar a {
//     color: #fff;
//     text-decoration: none;
//   }
//
//   /* ANIMATIONS */
//
//   /* Show state */
//
//   .card.show .details {
//     animation: show-detail-container 0.7s 0.55s forwards cubic-bezier(.54,-0.38,.34,1.42);
//   }
//   .card.show .name {
//     animation: fade-in 0.3s 1.3s forwards, pop-in 0.3s 1.3s forwards cubic-bezier(.64,1.87,.64,.64);
//   }
//   .card.show  .description {
//     animation: fade-in 0.3s 1.4s forwards, pop-in 0.3s 1.4s forwards cubic-bezier(.64,1.87,.64,.64);
//   }
//   .card.show .headshot img {
//     animation: fade-in 0.4s 1.2s forwards, pop-in 0.6s 1.2s forwards cubic-bezier(.64,1.87,.64,.64);
//   }
//   .card.show .icon-bar {
//     animation: show-icon-bar .5s forwards cubic-bezier(.64,1.87,.64,.64);
//   }
//
//   .card.show .icon-bar li {
//     animation: show-icon 0.5s forwards cubic-bezier(.64,1.87,.64,.64);
//   }
//
//   .card.show .icon-bar li:nth-child(1) {
//     animation-delay: 1.8s;
//   }
//   .card.show .icon-bar li:nth-child(2) {
//     animation-delay: 1.9s;
//   }
//   .card.show .icon-bar li:nth-child(3) {
//     animation-delay: 2s;
//   }
//
//   .card.show .icon-bar li:nth-child(4) {
//     animation-delay: 2.1s;
//   }
//
//   .card.show .close {
//     animation: fade-in 0.3s 1.3s forwards;
//   }
//
//   /* Hide state */
//
//   .card.hide {
//     animation: drop-card 1s forwards cubic-bezier(.54,-0.38,.34,1.42);
//   }
//
//   /* Animations */
//
//   @keyframes fade-in {
//     0% {
//       opacity: 0;
//     }
//     100% {
//       opacity: 1;
//     }
//   }
//
//   @keyframes fade-out {
//     0% {
//       opacity: 1;
//     }
//     100% {
//       opacity: 0;
//     }
//   }
//
//   @keyframes show-icon-bar {
//     0% {
//       height: 0;
//     }
//     100% {
//       height: 4em;
//     }
//   }
//
//   @keyframes show-icon {
//     0% {
//       opacity: 0;
//       transform: rotateZ(-40deg);
//     }
//     100% {
//       opacity: 1;
//       transform: rotateZ(0);
//     }
//   }
//
//   @keyframes show-detail-container {
//     0% {
//       height: 0;
//     }
//     100% {
//       height: 13.5em;
//     }
//   }
//
//   @keyframes pop-in {
//     0% {
//       transform: scale(0.7);
//     }
//     100% {
//       transform: scale(1)
//     }
//   }
//
//   @keyframes drop-card {
//     100% {
//       bottom: -100%;
//       transform: rotateZ(20deg);
//       opacity: 0;
//     }
//   }
//
// `
//
// export default IntroStyle

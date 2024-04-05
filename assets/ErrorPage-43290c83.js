import{u as t,j as e,J as n}from"./index-8b9fe61d.js";const b=t.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-family: 'Varela Round', Sans-serif;
  text-shadow: 0 30px 10px rgba(0, 0, 0, 0.15);

  .main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    font-size: 18px;
    margin-top: 0;
    color: #407bff;
  }

  h1 {
    font-size: 95px;
    margin: 0;
    color: #407bff;
  }
  .buttons {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
  button {
    background: linear-gradient(#9ebbff, #407bff);
    padding: 12px;
    border: none;
    border-radius: 20px;
    box-shadow: 0 30px 15px rgba(0, 0, 0, 0.15);
    outline: none;
    color: #fff;
    margin-bottom: 12px;
    text-transform: uppercase;

    cursor: pointer;
  }

  .bubble {
    background: linear-gradient(#ecf2ff, #9ebbff);
    border-radius: 50%;
    box-shadow: 0 30px 15px rgba(0, 0, 0, 0.15);
    position: absolute;
  }
  .bubble:before,
  .bubble:after {
    content: '';
    background: linear-gradient(#ecf2ff, #9ebbff);
    border-radius: 50%;
    box-shadow: 0 30px 15px rgba(0, 0, 0, 0.15);
    position: absolute;
  }
  .bubble:nth-child(1) {
    top: 15vh;
    left: 15vw;
    height: 22vmin;
    width: 22vmin;
  }
  .bubble:nth-child(1):before {
    width: 13vmin;
    height: 13vmin;
    bottom: -25vh;
    right: -10vmin;
  }
  .bubble:nth-child(2) {
    top: 20vh;
    left: 38vw;
    height: 10vmin;
    width: 10vmin;
  }
  .bubble:nth-child(2):before {
    width: 5vmin;
    height: 5vmin;
    bottom: -10vh;
    left: -8vmin;
  }
  .bubble:nth-child(3) {
    top: 12vh;
    right: 30vw;
    height: 13vmin;
    width: 13vmin;
  }
  .bubble:nth-child(3):before {
    width: 3vmin;
    height: 3vmin;
    bottom: -15vh;
    left: -18vmin;
    z-index: 6;
  }
  .bubble:nth-child(4) {
    top: 25vh;
    right: 18vw;
    height: 18vmin;
    width: 18vmin;
  }
  .bubble:nth-child(4):before {
    width: 7vmin;
    height: 7vmin;
    bottom: -10vmin;
    left: -15vmin;
  }
  .bubble:nth-child(5) {
    top: 60vh;
    right: 18vw;
    height: 28vmin;
    width: 28vmin;
  }
  .bubble:nth-child(5):before {
    width: 10vmin;
    height: 10vmin;
    bottom: 5vmin;
    left: -25vmin;
  }
`,l=()=>{const i=()=>{window.history.back()};return e.jsxs(b,{children:[e.jsx("div",{className:"bubble"}),e.jsx("div",{className:"bubble"}),e.jsx("div",{className:"bubble"}),e.jsx("div",{className:"bubble"}),e.jsx("div",{className:"bubble"}),e.jsxs("div",{className:"main",children:[e.jsx("h1",{children:"404"}),e.jsxs("p",{children:["It looks like you're lost...",e.jsx("br",{}),"That's a trouble?"]}),e.jsxs("div",{className:"buttons",children:[e.jsx(n,{to:"/home",children:e.jsx("button",{children:"Go to Home"})}),e.jsx("button",{onClick:i,children:"Go back"})]})]})]})};export{l as default};

import React from 'react';
import style from "./index.less";

var musiclist = [
"http://audio.xmcdn.com/group23/M04/E9/40/wKgJL1hbha6jxYuZABerDmhYo2A222.m4a",
"http://audio.xmcdn.com/group23/M04/E9/40/wKgJL1hbha6C5sWHABQm5d14soQ382.m4a",
"http://audio.xmcdn.com/group23/M04/E9/1C/wKgJNFhbha_QW8WxABRIrhG890g762.m4a",
"http://audio.xmcdn.com/group23/M04/E9/1C/wKgJNFhbhazArbATAAeeX5LgwXA489.m4a",
"http://audio.xmcdn.com/group23/M04/E9/40/wKgJL1hbha7h_558AA5euRgcn08743.m4a",
"http://audio.xmcdn.com/group23/M04/E9/41/wKgJL1hbhbHz4F3rABUjejgz_cQ468.m4a",
"http://audio.xmcdn.com/group23/M04/E9/41/wKgJL1hbhbCD_ew9AA_0AZDxq28033.m4a",
"http://audio.xmcdn.com/group24/M07/E8/EB/wKgJMFhbhcGy0xNIABf44Z9UpL0713.m4a",
"http://audio.xmcdn.com/group23/M04/E9/41/wKgJL1hbhbPA0RBhABDsK3M-nGE453.m4a",
"http://audio.xmcdn.com/group23/M04/E9/1D/wKgJNFhbhbay7GZ0ABWwcE_veeg598.m4a",
"http://audio.xmcdn.com/group23/M04/E9/41/wKgJL1hbhbTxy6fYABLK444cjHI909.m4a",
"http://audio.xmcdn.com/group23/M04/E9/41/wKgJL1hbhbXi9ejyABLlUrjOFwI892.m4a",
"http://audio.xmcdn.com/group24/M07/E8/EA/wKgJMFhbhbnwUofeABK02lu_Rqg549.m4a",
"http://audio.xmcdn.com/group24/M07/E9/00/wKgJNVhbhbvhpbfmABMo3HtIm18865.m4a",
"http://audio.xmcdn.com/group24/M07/E8/EA/wKgJMFhbhbrQEAY2ABhA1Tuicl0983.m4a",
"http://audio.xmcdn.com/group24/M07/E8/EA/wKgJMFhbhb6RzSxlABZGNzjklfY572.m4a",
"http://audio.xmcdn.com/group24/M07/E9/00/wKgJNVhbhbnCN_yhAA8QZ1F6UYA206.m4a",
"http://audio.xmcdn.com/group24/M07/E8/EB/wKgJMFhbhcWyFMupABQbKWW9BqU752.m4a",
"http://audio.xmcdn.com/group22/M04/E9/97/wKgJLlhbhduiIJJAABB1OqlDHgg407.m4a",
"http://audio.xmcdn.com/group22/M04/E9/3A/wKgJM1hbhd2wrLtzABZ2r8KM47Y344.m4a",
"http://audio.xmcdn.com/group23/M08/E9/43/wKgJL1hbhfPx2EXeABGyakbrVv8028.m4a",
"http://audio.xmcdn.com/group23/M08/E9/43/wKgJL1hbhfLC3HCQAB5s4NLiTeI478.m4a",
"http://audio.xmcdn.com/group25/M03/E8/BC/wKgJMVhbhgDg5t90ABb5YKfQczM029.m4a",
"http://audio.xmcdn.com/group23/M08/E9/1E/wKgJNFhbhe_ge5FaAA76XiQaAz0233.m4a",
"http://audio.xmcdn.com/group23/M03/E9/2F/wKgJNFhbiabxbWlGABD_QVn2nK4024.m4a",
"http://audio.xmcdn.com/group23/M06/E9/54/wKgJL1hbiaiSbcVoABZU5klJNNw037.m4a",
"http://audio.xmcdn.com/group23/M03/E9/30/wKgJNFhbiaqTu6vgABnjVPAJvZ4278.m4a",
"http://audio.xmcdn.com/group23/M03/E9/30/wKgJNFhbiamhr3FUABO7tDPs0zQ917.m4a",
"http://audio.xmcdn.com/group23/M06/E9/54/wKgJL1hbiaqyswPqABZwzXZge2o115.m4a"
];
class BackgroundMusic extends React.Component {
  constructor(props) {
    super(props);
    var url = musiclist[Math.round(Math.random()*(musiclist.length-1))];
    this.state = {
      isSpin:false,
      url,
    }
  }
  componentDidMount() {
    var audio = document.getElementById('audio');
    // document.addEventListener('DOMContentLoaded', function () {
       (function audioAutoPlay() {
          audio.play();
          document.addEventListener("WeixinJSBridgeReady", function () {
              audio.play();
          }, false);
       })();
    // });
    //
    // if(!audio.paused){
      this.setState({isSpin:true})
    // }
  }
  handleClick = (e)=>{
    var bitch = e.target;
    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function() {
      bitch.classList.remove('animate');
    }, 700);

    var audio = document.getElementById('audio');
    if(audio.paused)                     {
      audio.play();
      this.setState({isSpin:true})
    }else{
      audio.pause();
      this.setState({isSpin:false})
    }
  }
  render() {
    const {isSpin} = this.state;
    return(
      <>
        <div className="music_button_box">
          <button className="bubbly-button" onClick={this.handleClick}>
            <img src={require("../../source/music.png")} className={`music_button ${isSpin?'xuanzhuan':''}` } />
          </button>
        </div>
        <audio  loop="loop" autoPlay id="audio">
          <source src={this.state.url} />
        </audio>
        <style>{`
          .xuanzhuan{
            -webkit-animation: spin 6s linear infinite;
            animation: spin 6s linear infinite;
          }
          .music_button_box{
            width: 1rem;
            margin: .5rem;
            position: absolute;
            top: 0;
            left: 0;
            z-index:999;
          }
          .music_button{
            width: 1rem;
            // margin: .5rem;
            position: absolute;
            top: 0;
            left: 0;
            z-index:-1;
          }
          .bubbly-button{
            background:transparent;
            border:none;
            outline:0;
            width: 1rem;
            height:1rem;
            position:relative;
          }


          .bubbly-button:focus {
            outline: 0;
          }

          .bubbly-button:before,
          .bubbly-button:after {
            position: absolute;
            content: '';
            display: block;
            width: 200%;
            height: 100%;
            left: -20%;
            z-index: -1000;
            transition: all ease-in-out 0.5s;
            background-repeat: no-repeat;
          }

          .bubbly-button:before {
            display: none;
            top: -75%;
            background-image: radial-gradient(circle, #fff 20%, transparent 20%), radial-gradient(circle, transparent 20%, #fff 20%, transparent 30%), radial-gradient(circle, #fff 20%, transparent 20%), radial-gradient(circle, #fff 20%, transparent 20%), radial-gradient(circle, transparent 10%, #fff 15%, transparent 20%), radial-gradient(circle, #fff 20%, transparent 20%), radial-gradient(circle, #fff 20%, transparent 20%), radial-gradient(circle, #fff 20%, transparent 20%), radial-gradient(circle, #fff 20%, transparent 20%);
            background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
          }

          .bubbly-button:after {
            display: none;
            bottom: -75%;
            background-image: radial-gradient(circle, #fff 20%, transparent 20%), radial-gradient(circle, #fff 20%, transparent 20%), radial-gradient(circle, transparent 10%, #fff 15%, transparent 20%), radial-gradient(circle, #fff 20%, transparent 20%), radial-gradient(circle, #fff 20%, transparent 20%), radial-gradient(circle, #fff 20%, transparent 20%), radial-gradient(circle, #fff 20%, transparent 20%);
            background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
          }

          // .bubbly-button:active {
          //   transform: scale(0.9);
          //   background-color: #e60074;
          //   box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);
          // }

          .bubbly-button.animate:before {
            display: block;
            animation: topBubbles ease-in-out 0.75s forwards;
          }

          .bubbly-button.animate:after {
            display: block;
            animation: bottomBubbles ease-in-out 0.75s forwards;
          }

          @keyframes topBubbles {
            0% {
              background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
            }

            50% {
              background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
            }

            100% {
              background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
              background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
            }
          }

          @keyframes bottomBubbles {
            0% {
              background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
            }

            50% {
              background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
            }

            100% {
              background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
              background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
            }
          }
          `}</style>
      </>
    );
  }
}
export default BackgroundMusic;

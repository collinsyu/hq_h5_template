import React from 'react';
import style from "./index.less";

class TopIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class0:"animated bounceInDown",
      class1:"animated bounceInDown",
      class2:"animated bounceInDown",
      class3:"animated bounceInDown",
    }

  }

  componentDidMount() {
    var _self = this;
    setTimeout(function(){
      _self.setState({
        class0:"flag_0",
        class1:"flag_1",
        class2:"flag_2",
        class3:"flag_3",
      })
    }, 500);

  }
  renderTest = ()=>{
    const duration = 2;
    const rzRandomNegative = -4;
    const rzRandomNegativeBase = -5;
    const rxRandomNegative = -20;
    const rxRandomNegativeBase = -30;
    const rxRandomPositive = 30;
    const rxRandomPositiveBase = 30;
    const _map = [0,1,2,3];


    // 然后生成dom文件
    return (
      <>
      {_map.map(function(key){
        let easing1 = `cubic-bezier(${Math.random() * .1 + .3},0,${Math.random() * .1 + .3},${Math.random() * .15 + .95})`;
        let easing2 = `cubic-bezier(${Math.random() * .1 + .3},0,${Math.random() * .1 + .3},${Math.random() * .15 + .95})`;
        var bitch = ` rotateZ(${Math.random() * rzRandomNegative + rzRandomNegativeBase}deg)`
        return (
          <style key={key}>
          {`
            @-webkit-keyframes fuckshitbitch_${key} {
              0% {
                  transform: rotateX(0deg) ${bitch};
                  filter: grayscale(5%);
                }
              25%  {
                  transform: rotateX(${Math.random() * rxRandomNegative + rxRandomNegativeBase}deg) ${bitch};
                  filter: grayscale(25%);
                  easing: ${easing1};
                }
              50%  {
                  transform: rotateX(${Math.random() * rxRandomPositive + rxRandomPositiveBase}deg) ${bitch};
                  filter: grayscale(0%);
                  easing: ${easing1};
                }
              75%  {
                  transform: rotateX(${Math.random() * rxRandomNegative + rxRandomNegativeBase}deg) ${bitch};
                  filter: grayscale(25%);
                  easing: ${easing2};
                }
              100%  {
                  transform: rotateX(${Math.random() * rxRandomPositive + rxRandomPositiveBase}deg) ${bitch};
                  filter: grayscale(0%);
                  easing: ${easing2};
                }
            }
            .flag_${key}{
              -webkit-animation: fuckshitbitch_${key} 5s ease-in-out infinite alternate;
              animation: fuckshitbitch_${key} 5s ease-in-out infinite alternate;
              animation-delay:${1000 * Math.random() - 1000}s;
              -webkit-animation-delay:${1000 * Math.random() - 1000}s;
              z-index:-1;
            }
          `}
          </style>
        )
      })}

      </>
    )
  }


  render() {
    const {class0,class1,class2,class3} = this.state;
    return(
      <div className="banner">
        {this.renderTest()}
        <img src={require("../../source/top_1.png")} className={`${style.top_image_1} ${class0}`}/>
        <img src={require("../../source/top_1.png")} className={`${style.top_image_12} ${class1}`}/>
        <img src={require("../../source/top_1.png")} className={`${style.top_image_13} ${class2}`}/>
        <img src={require("../../source/top_12.png")} className={`${style.top_image_121} ${class3}`}/>

      </div>
    );
  }
}
export default TopIcon;

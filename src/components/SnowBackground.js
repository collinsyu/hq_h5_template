import React from 'react';

class SnowBackground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.rate = 60;
    this.arc = 150;
    this.size = 2;
    this.speed = 5;
  }
  ppp = () =>{
    var _self = this;
    var w = window.innerWidth,
      h = window.innerHeight,
      canvas = document.getElementById('snow'),
      ctx = canvas.getContext('2d'),
      // rate = 60,
      // arc = 150,
      time,
      count,
      // size = 2,
      // speed = 5,
      lights = new Array(),
      colors = ['#eee'];

    canvas.setAttribute('width', w);
    canvas.setAttribute('height', h);

    function init() {
      time = 0;
      count = 0;

      for (var i = 0; i < _self.arc; i++) {
        lights[i] = {
          x: Math.ceil(Math.random() * w),
          y: Math.ceil(Math.random() * h),
          toX: Math.random() * 5 + 1,
          toY: Math.random() * 5 + 1,
          c: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * _self.size
        };

      }
    }

    function bubble() {
      ctx.clearRect(0, 0, w, h);

      for (var i = 0; i < _self.arc; i++) {
        var li = lights[i];

        ctx.beginPath();
        ctx.arc(li.x, li.y, li.size, 0, Math.PI * 2, false);
        ctx.fillStyle = li.c;
        ctx.fill();

        li.x = li.x + li.toX * (time * 0.05);
        li.y = li.y + li.toY * (time * 0.05);

        if (li.x > w) {
          li.x = 0;
        }
        if (li.y > h) {
          li.y = 0;
        }
        if (li.x < 0) {
          li.x = w;
        }
        if (li.y < 0) {
          li.y = h;
        }
      }
      if (time < _self.speed) {
        time++;
      }
      var timerID = setTimeout(bubble, 1000 / _self.rate);
    }
    init();
    bubble();
  }
  componentDidMount() {
    this.ppp()
  }

  render() {

    return(
      <>
      <canvas id='snow'></canvas>
      </>
    );
  }
}
export default SnowBackground;

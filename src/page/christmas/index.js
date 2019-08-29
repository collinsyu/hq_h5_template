import React from 'react';
import SnowBackground from "../../components/SnowBackground";
import BackgroundMusic from "../../components/BackgroundMusic";
import ModalXmas from "../../components/ModalXmas";
import TopIcon from "../../components/TopIcon";
import style from "./index.less";
const copy = require('clipboard-copy')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible:false,
    }
  }
  componentDidMount() {

    // document.addEventListener("touchmove",function(e){
    //   e.preventDefault();
    //   e.stopPropagation();
    // },false);
    document.body.addEventListener('touchmove', function (e) {
      e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
    }, {passive: false}); //passive 参数不能省略，用来兼容ios和android


    document.title = "扫码送狗粮-伯派宠物"
  }
  // copy = ()=>{
  //
  // }
  handleClick = ()=>{
    var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
    if (ua.match(/MicroMessenger/i) == "micromessenger"||ua.match(/QQ/i) == "qq") {
      var codetoa = "【伯派宠物】，復·制这段描述￥psVFbL7Vato￥后咑閞👉手机淘宝👈或者用浏览器咑閞https://m.tb.cn/h.3qMcqoL?sm=b9ac32查看";
      copy(codetoa);
      this.setState({visible:true})
    }else{
      window.location.href = "https://t.asczwa.com/taobao?backurl=https://m.tb.cn/h.3qTvA2R?sm=51f846";
    }
  }
  handleclose = ()=>{
    this.setState({visible:false});
  }
  render() {
    return(
      <>
        <SnowBackground/>
        <div>
          <BackgroundMusic />
          <TopIcon/>
          <div style={{display:"flex",justifyContent:"center",position:"relative",width:"100%",paddingTop:"4rem"}} className="animated jackInTheBox">
            <div style={{position:"relative"}}>
              <img src={require("@/source/head.png")} style={{width:"4rem",height:"4rem",zIndex:-1}}/>
              <img src={require("@/source/hat.png")} style={{height:"2rem",zIndex:-1,position:"absolute",zIndex:1,transform:"rotateZ(-30deg)",left:"-.5rem",top:"-.2rem"}}/>
            </div>
          </div>
          <div style={{color:"#fff",textAlign:"center"}} className="animated fadeIn">
            <h1>伯派宠物圣诞节优惠</h1>
            <h1 style={{fontFamily:"Mountains of Christmas"}}>Merry Christmas!</h1>
          </div>
          <div className={style.couponbox}>
            <a href="javascript:;" onClick={this.handleClick} style={{width:"50%",margin: ".5rem"}}><img className={`${style.coupon} animated rubberBand`} src={require("@/source/coupon5.jpg")}/></a>
            <a href="javascript:;" onClick={this.handleClick} style={{width:"50%",margin: ".5rem"}}><img className={`${style.coupon} animated rubberBand`} src={require("@/source/coupon15.jpg")}/></a>
          </div>
          <div style={{color:"#fff",textAlign:"center"} } className="animated fadeIn">
            <h2><a style={{color:"#fff",textDecoration:"none"}} href="javascript:;" onClick={this.handleClick}>&gt;旗舰店传送门&lt;</a></h2>
          </div>

          {this.state.visible?<ModalXmas onClose={this.handleclose}/>:null}
          {/*

          */}
        </div>
      </>
    );
  }
}
export default App;

import React from 'react';
import style from "./index.less";
import Footer from "@/components/footer"
import { WingBlank,WhiteSpace,Flex } from 'antd-mobile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {

    // document.addEventListener("touchmove",function(e){
    //   e.preventDefault();
    //   e.stopPropagation();
    // },false);
    // document.body.addEventListener('touchmove', function (e) {
    //   e.preventDefault();  //阻止默认的处理方式(阻止下拉滑动的效果)
    // }, {passive: false}); //passive 参数不能省略，用来兼容ios和android


    document.title = "伯派宠物·助力iTA"
  }

  render() {
    return(
      <>
        <main className={style.main} >
        <Flex justify="center">
          <h1>文案</h1>
        </Flex>
        <WhiteSpace/>
        <Flex justify="center">
          <h1>文案</h1>
        </Flex>
        <WhiteSpace/>
        <Flex justify="center">
          <h1>。</h1>
        </Flex>
        <WhiteSpace/>
        <Flex justify="center">
          <h1>。</h1>
        </Flex>
        <WhiteSpace/>
        <Flex justify="center">
          <h1>。</h1>
        </Flex>
        <WhiteSpace/>


        <Flex justify="center">
          <p>关注公众号，助力iTA</p>
        </Flex>
        <Flex justify="center">

          <p>每一次助力，都会为iTA带来更多捐赠</p>

        </Flex>
        <WhiteSpace/>

        <Flex justify="center">
          <p>1. 关注伯派官方订阅号</p>
        </Flex>
        <Flex justify="center">
          <img src={require("@/source/qrcode.jpg")} style={{width:"50%"}}/>
        </Flex>

        <Flex justify="center">
          <p>2. 点击“助力iTA公益组织”按钮</p>
        </Flex>

        <Flex justify="center">
          <img src={require("@/source/help1.jpeg")} style={{width:"50%"}}/>
        </Flex>

        <Flex justify="center">
          <p>3. 点击“我要助力”</p>
        </Flex>
        </main>
        <Footer/>
      </>
    );
  }
}
export default App;

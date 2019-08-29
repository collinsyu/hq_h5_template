import React from 'react';
import style from "./index.less";
import { Modal } from 'antd-mobile';

class ModalXmas extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {
    const {onClose} = this.props;
    return(
      <Modal
        visible={true}
        transparent
        maskClosable={false}
        onClose={()=>{
          onClose()
        }}
        // title="Title"
        className={style.modalbox}
        footer={[]}
        wrapProps={{ onTouchStart: this.onWrapTouchStart }}
      >
        <div >
          <img src={require("../../source/modalbg.png")} style={{width:"100%"}}/>
          <span onClick={()=>{onClose()}} style={{color:"#fff"}}>关闭</span>
        </div>
      </Modal>
    );
  }
}
export default ModalXmas;

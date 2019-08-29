import React from 'react';
import style from "./index.less";

// class _BasicLayout extends React.Component {
//   componentDidMount(){
//   }
//   render() {
//     console.log(style);
//     return (
//       <div className={style.layout}>
//         {this.props.children}
//       </div>
//     );
//   }
// }
class _BasicLayout extends React.Component {
  render() {
    return (
      <div className={style.layout}>
        {this.props.children}
      </div>
    );
  }
}

export default _BasicLayout;

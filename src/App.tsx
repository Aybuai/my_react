import React from "react";
import logo from "./assets/images/logo.svg";
// import robots from "./mockData/robots.json";
import Robots from "./components/Robots";
import styles from "./App.module.css";
import ShoppingCart from "./components/ShoppingCart";

interface Props {}

interface State {
  robotGallery: any[];
  count: number;
}
class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      robotGallery: [],
      count: 0,
    };
  }

  componentDidMount(): void {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robotGallery: data }));
  }

  // setState 是同步还是异步？
  // setState => 异步更新，同步执行
  // 接收两个参数，第一个参数类型： Object | Function   第二个参数： Function
  // 第一个参数当为Function时，接收两个参数，分别是上一个的state和props
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1>罗伯特机器人吊炸天平台</h1>
        </div>
        <button
          onClick={() => {
            this.setState(
              (preState, preProps) => {
                return { count: preState.count + 1 };
              },
              () => {
                console.log(this.state.count, '1');
              }
            );
            this.setState(
              (preState, preProps) => {
                return { count: preState.count + 1 };
              },
              () => {
                console.log(this.state.count, '2');
              }
            );
          }}
        >
          click
        </button>
        <span>{this.state.count}</span>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map((r) => (
            <Robots id={r.id} name={r.name} email={r.email} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

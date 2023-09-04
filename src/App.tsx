import React, { useState, useEffect } from "react";
import logo from "./assets/images/logo.svg";
import Robots from "./components/Robots";
import styles from "./App.module.css";
import ShoppingCart from "./components/ShoppingCart";

// class 组件声明周期
// 生命周期第一阶段：在组件创建好dom元素以后，挂载进页面的时候调用，执行一次 componentDidMount

// 生命周期第二阶段：更新
// shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
// 可以去判断属性是否发生变化，然后去更新属性
// }
// componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
// }

// 声明周期第三阶段：销毁
// componentWillUnmount(): void {
// }

// setState 是同步还是异步？
// setState => 异步更新，同步执行
// 接收两个参数，第一个参数类型： Object | Function   第二个参数： Function
// 第一个参数当为Function时，接收两个参数，分别是上一个的state和props
const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]);
  // loading
  const [loading, setLoading] = useState<boolean>(false);
  // 处理接口异常信息
  const [error, setError] = useState<string>("");

  useEffect(() => {
    document.title = `点击${count}次`;
  }, [count]);

  // 第二个参数如果不写相当于类组件的 componentDidUpdate 生命周期函数；第二个参数为空数组的话则相当于 componentDidMount 生命周期函数
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responses = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await responses.json();
        setRobotGallery(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>罗伯特机器人吊炸天平台</h1>
      </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <span>{count}</span>
      <ShoppingCart />
      {!error || (error !== "" && <div>报错：{error}</div>)}
      {!loading ? (
        <div className={styles.robotList}>
          {robotGallery.map((r) => (
            <Robots id={r.id} name={r.name} email={r.email} />
          ))}
        </div>
      ) : (
        <h2>loading 加载中</h2>
      )}
    </div>
  );
};

export default App;

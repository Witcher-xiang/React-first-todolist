import React from 'react';

// 上个版本 使用的是class App extends React.Component
// 只要是在这个return{}中 <>标签都是jsx的语法。想要让他运行就得引入react进行编译识别
function App() {
  return (
    <div className="App">
      Hello World
      <h1>朱存彬-赵靖洋-李夏曦</h1>
    </div>
  );
}

export default App;

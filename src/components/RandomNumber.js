import React from 'react';
import ReactDOM from 'react-dom';

class RandomNumber extends React.Component{

  updateNumber(){
    let value = Math.round(Math.random()*100);
    this.props.onUpdate(value);
    // console.log(this.props);
    // 부모에서 전달 받은 number와 onUpdate 메소드 활용
    // onUpdate메소드는 부모의 updateValue 메소드
  }
  constructor(props){
    super(props);
    // 부모에서 넘겨받은, 넘겨받을 변수 받음
    this.updateNumber = this.updateNumber.bind(this);
    // 랜더링 시 변수를 사용할 곳에 바인드 하지 않을경우 현재 컴포턴트에서 상속값과 this를 못 찾음
  }
  render(){
    return (
      <div>
        <h1>RANDOM NUMBER : {this.props.number}</h1>
        <button onClick={this.updateNumber}>Randomize</button>
        {/*
          constructor에서 설정한 props로 받은 updateNumber 메소드 실행
          함수 값은 ()로 표현하면 랜더링 될 때마다 실행되서 없애야함
           */}
      </div>
    );
  }
}

export default RandomNumber;

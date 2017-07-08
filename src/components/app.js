import React from 'react';
import ReactDOM from 'react-dom'
import Header from './Header';
import Content from './Content';
import RandomNumber from './RandomNumber';

class App extends React.Component {

  constructor(props){
        super(props);
        //변수 상속
        this.state = {
            value: Math.round(Math.random()*100)
        };
        //state 설정. constructor안에서는 state = sds21#SD#$!;
        this.updateValue = this.updateValue.bind(this);
        // this를 잡아줌
    }
    updateValue(randomValue){
          this.setState({
              value: randomValue
          });
          //onUpdate 이벤트 발생시 해당 값을 반영
      }


    render(){

        return (
          <div>
            <Header title={ this.props.headerTitle} />
            <Content title = { this.props.contentTitle}
                     body = { this.props.contentBody}/>
                     <RandomNumber number={this.state.value}
                                   onUpdate={this.updateValue} />
           {/*
             onUpdate 이벤트 부여/발생시 updateValue이벤트 실행
              */}
          </div>
        );
    }
}

// defaultProps는 props가 따로 선언 되어 있지 않을 경우 기본값으로 선언 한 값이 출력
App.defaultProps = {
  headerTitle : 'Default header',
  contentTitle : 'Default content title',
  contentBody : 'Default content body',
}

export default App;

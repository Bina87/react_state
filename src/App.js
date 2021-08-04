import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  state = {
    person: {
      fullName: 'sana',
      bio: 'dfjkjfkj jfdkfdkn',
      pro: 'web dev',
      img: 'https://media.istockphoto.com/photos/smiling-confident-businesswoman-posing-with-arms-folded-picture-id1163294201?k=6&m=1163294201&s=612x612&w=0&h=mc8xTq-FAqDi1Ot3Ob6xpZ6wkm1EgCvK63huXtWCIzc=',
    },
    show: true,
    count: 0,
  };
  handleShow = () => this.setState({show: !this.state.show});

  handleCount = () => this.setState({count: this.state.count + 1});

  componentDidMount() {
    console.log('start counting');
    setInterval(() => {
      this.handleCount();
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.handleShow}>
          {this.state.show ? 'hide' : 'show'}{' '}
        </button>
        {this.state.show ? (
          <div>
            <h1> Counter : {this.state.count} </h1>
            <h1> {this.state.person.fullName} </h1>
            <h1> {this.state.person.bio} </h1>
            <h1> {this.state.person.pro} </h1>
            <img src={this.state.person.img} alt="" />
          </div>
        ) : null}
      </div>
    );
  }
}
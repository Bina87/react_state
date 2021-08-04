import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  state = {
    person: {
      fullName: 'Sana Haj Sassi',
      bio: 'There are few major things that you should never forget in the web developer bio. Paying attention to such things can help you in writing the best application and brightening up chances of getting desired job. Make sure that you discuss the gained skills in detail.',
      profession: 'Web Developer',
      img: 'https://media.istockphoto.com/photos/smiling-confident-businesswoman-posing-with-arms-folded-picture-id1163294201?k=6&m=1163294201&s=612x612&w=0&h=mc8xTq-FAqDi1Ot3Ob6xpZ6wkm1EgCvK63huXtWCIzc=',
    },
    show: true,
    count:0
    
  };
  personshow = () => this.setState({show: !this.state.show});
  funct_count=()=>this.setState({count: this.state.count+1});

  componentDidMount() {
    console.log('start counting');
    setInterval(() => {
      this.funct_count();
    }, 1000);
  }

  
  render() {
    return (
      <div className="App">
        <div className="cadre">

        <button onClick={this.personshow} className="button">
          {this.state.show ? 'hide' : 'show'}
        </button>
        {this.state.show ? (
          <div>
            <h5> Time : {this.state.count} </h5>
            <h1> {this.state.person.fullName} </h1>
            <h3> {this.state.person.bio} </h3>
            <h4 className="title"> {this.state.person.profession} </h4>
            <img src={this.state.person.img} alt="web developer" width="350px" height="350px"/>
          </div>
        ) : null}
        </div>

      </div>
    );
  }
}

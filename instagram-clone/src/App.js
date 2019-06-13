import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount(){
    this.setState({
      data: dummyData
    })
  }
  

  render() {
  return (
    <div className="App">
      
      <SearchBar />

      {this.state.data.map(post => (
        <PostContainer
        key={post.id}
        data={post}
        />
        ))}
      </div>
      );
    }
  }
export default App

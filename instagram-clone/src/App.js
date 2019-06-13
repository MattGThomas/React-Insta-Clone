import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    // this.setState({
    //   data: [dummyData]
    // })
    console.log(dummyData)
    console.log(this.state.data)
  }

  // {dummyData.map(post => {
  //   <PostContainer
  //   key={post.id}
  //   data={post}
  //   />
  // })}

  // componentDidMount(){
  //   this.setState({
  //     data: dummyData
  //     // newData: Array.from(dummyData)
  //  })
  //  console.log(this.state.data)
  // }
  
  

  render() {
  return (
    <div className="App">
      
      <SearchBar />
      <PostContainer />
      {dummyData.map(post => (
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

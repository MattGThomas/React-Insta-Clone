import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyData
    };
    console.log(dummyData)
    console.log(this.state.data)
  }

  // addComment = event => {
  //   event.preventDefault();
  //   const newComment = {
  //     username: this.state.user,
  //     text: text
  //   }
  // }

  render() {
  return (
    <div className="App">
      
      <SearchBar />
      {/* <PostContainer /> */}
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

import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import * as ActionsTypes from './store/actions';

import './App.css';

import EditPostForm from './component/EditPost/EditPost';
import Model from './component/Model/Model';

import PostList from './component/Post/PostList';
import Search from './component/Search/Search';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            isModelOpen: false,
            selectedPostIndex: null
        };
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            this.props.setAllPostData(response.data);
        });
    }

    editAction= (postId) => { 
        if (postId) {
            let selectedPostIndex = this.props.postList.findIndex(post => post.id === postId);
            if (selectedPostIndex !== -1) {
                this.setState({selectedPostIndex, isModelOpen: true});
            }
        }
    }

    closeModel= () => {
        this.setState({isModelOpen: false});
    }

    updatePostData= ({title, body})  => {
        this.props.editPostByIndexId({selectedIndex: this.state.selectedPostIndex, title, body});
        this.setState({isModelOpen: false});
    };

    searchPostData= (event) => {
        this.setState({searchText: event.target.value});
    }

    render() {
        let collectionDataItems = [];

        if (this.state.searchText) {

            let searchResult = this.props.postList.filter(post =>
                post.title.toLowerCase().includes(this.state.searchText.toLowerCase())
            );

            if (searchResult) {
                collectionDataItems = searchResult;
            }

        } else {
            collectionDataItems = this.props.postList;
        }

        const modelElement = () => (
            <Model isShow={this.state.isModelOpen} closeMode={this.closeModel} title="Edit Post">
                <EditPostForm 
                    formData={this.props.postList[this.state.selectedPostIndex]}
                    btnSubmit={this.updatePostData}/>
            </Model>
        )

        return (

          <div className="App">
              <Search searchText={this.state.searchText} searchData={this.searchPostData} />

              <PostList postResult={collectionDataItems} clickToEdit={this.editAction} />

              {this.state.isModelOpen ? modelElement() : null} 
              
          </div>

        );
    }
}



const mapSateToProps= state => {
    return {
        postList: state.posts
    }
}

const ActionDispatches= dispatch => {
    return {
        setAllPostData: (postsList) => dispatch({type: ActionsTypes.STORE_ALL_POST, postsList: postsList}),
        editPostByIndexId: (postInfoToUpdate) => dispatch({type: ActionsTypes.EDIT_POST, payload: postInfoToUpdate})
    }
}

export default connect(mapSateToProps, ActionDispatches)(App);
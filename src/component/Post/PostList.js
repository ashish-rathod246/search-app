
import React from 'react';
import Post from './Post';
import './PostList.css';

const PostList = (props) => {
    const { postResult, clickToEdit } =  props;
    
    let  ItemsList = "";
    if (postResult && postResult.length) {
        ItemsList = postResult.map( (postInfo, index)  => {
            return <Post key={index} postData={postInfo} clickToEdit={()=> clickToEdit(postInfo.id)}/>;
        });

    } else {
        ItemsList = <tr><td colSpan="4">Post Not Found</td></tr>;
    }

    return (
        <section className="post-List">
            <table>
                <tbody>
                <tr><th>Id</th><th>Title</th><th>Body</th><th>Action</th></tr>
                    {ItemsList}
                </tbody>
            </table>
        </section>
    );
}
export default PostList;
import React from 'react';

const Post = (props) => {
    const {id,title, body } =  props.postData;
    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{body}</td>
            <td>
                <button title="Edit" onClick={props.clickToEdit}>Edit</button>
            </td>
        </tr>
    );
}
export default Post;
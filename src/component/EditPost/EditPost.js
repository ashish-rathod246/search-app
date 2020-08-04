import React, { Component } from 'react';
import './EditPost.css';

class EditPost extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
        }
    }

    componentDidMount() {
        const {title, body } = this.props.formData;
        this.setState({title, body});
    }

    componentWillUnmount() {
        this.setState({title: "", body: ""});
    }

    render() {
        const {title, body } = this.state;
        return (
            <div className="post-form">
                <div className="formField">
                    <label>Title:</label>
                    <input type="text" id="fTitle" placeholder="Title" value={title} onChange={(event) => this.setState({title: event.target.value})} />
                </div>
                <div className="formField">
                    <label>Body:</label>
                    <textarea rows="5" id="fContent" value={body} placeholder="Body" onChange={(event) => this.setState({body: event.target.value})} />
                </div>
                <div className="formField">
                    <button type="button" title="Save" onClick={() => this.props.btnSubmit({...this.state})}>Save</button>
                </div>
            </div>
        );
    }
}

export default EditPost;
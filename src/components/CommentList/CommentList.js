import React from 'react';
import './CommentList.css';
import  { Comment } from '../';


const CommentList = ({ comments }) => {

    //map data to components
    const commentsList = comments.map(
        (comment, index) => (
            <Comment 
                // name={comment.name}
                name={comment.email.split('@')[0]}
                body={comment.body}
                key={index}
            />
        )
    );

    return (

        <ul className="CommentList">
            {commentsList}
        </ul>
    );
};

export default CommentList;
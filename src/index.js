import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = function() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          timeAgo="Today at 4:45PM" 
          text="Nice Blog!" 
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Alex" 
          timeAgo="Today at 2:00PM" 
          text="Nice Job!" 
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Jane" 
          timeAgo="Today at 6:00PM" 
          text="Handy job!" 
          avatar={faker.image.avatar()} 
        />
      </ApprovalCard>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
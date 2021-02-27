import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
        
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    content="Nice blog post!" 
                    avatar={faker.image.image()} 
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 8:00PM" 
                    content="What a time to be alive." 
                    avatar={faker.image.image()} 
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Today at 10:30PM" 
                    content="I love your content!" 
                    avatar={faker.image.image()} 
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
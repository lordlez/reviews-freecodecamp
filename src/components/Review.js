import React from 'react';
import '../stylesheets/Review.css';

function Review(props){
    return (
        <div className='container-review'>
            <img className='image-review' src={require(`../images/review-${props.image}.png`)} alt='Emma' />
            <div className='container-text-review'>
                <p className='name-review'><strong>{props.name}</strong> in {props.country}</p>
                <p className='position-review'>{props.position} at <strong>{props.company}</strong></p>
                <p className='text-review'>"{props.review}"</p>
            </div>
        </div>
    );
}

export default Review;
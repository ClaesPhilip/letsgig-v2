import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index, picture, title} = property;
    
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture}  />
            <div className="details">
                <p className="location">
                    {title}
                </p>
                <ul className="features">

                    {/* Here you can add small features about the gigg, like small icons with some text if you want. */}

                </ul>
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;
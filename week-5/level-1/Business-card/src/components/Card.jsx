
import PropTypes from 'prop-types';

const Card = ({ name, description, linkedin, twitter, otherSocialMedia, interests }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="social-media">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
        {otherSocialMedia && <a href={otherSocialMedia} target="_blank" rel="noopener noreferrer">Other</a>}
      </div>
      <h3>Interests</h3>
      <ul>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </div>
  );
}
Card.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    otherSocialMedia: PropTypes.string,
    interests: PropTypes.arrayOf(PropTypes.string).isRequired
  };
  
export default Card;

import PropTypes from 'prop-types';

function App({
  name,
  description,
  linkedin,
  twitter,
  otherSocialMedia,
  interests,
}) {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="h-1/2 w-1/3 bg-white">
        <div className=" bg-gray-100 border rounded-lg p-5 m-5 h-3/4  shadow-md">
          <h1>{name}</h1>
          <p>{description}</p>

          <h3 className="mt-9">Interests</h3>
          <ul>
            {Array.isArray(interests) &&
              interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
          </ul>
          <div className="mt-6 flex gap-4">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-blue-100 rounded-lg px-4 py-2"
            >
              LinkedIn
            </a>
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer "
              className="bg-blue-500 text-blue-100 rounded-lg px-4 py-2"
            >
              Twitter
            </a>
            {otherSocialMedia && (
              <a
                href={otherSocialMedia}
                target="_blank"
                rel="noopener noreferrer"
              >
                Other
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
App.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  otherSocialMedia: PropTypes.string,
  interests: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;

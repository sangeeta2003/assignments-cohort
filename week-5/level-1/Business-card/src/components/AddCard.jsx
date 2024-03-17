import  { useState } from 'react';
import Card from './Card';

const AddCardPage = () => {
  const [cards, setCards] = useState([]);
  const [formData, setformData] = useState({
    name: '',
    description: '',
    linkedin: '',
    twitter: '',
    otherSicialMedia: '',
    interests: [],
  });

  const handleChane = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleAccount = () => {
    setCards([...cards, formData]);
    setformData({
      name: '',
      description: '',
      linkedin: '',
      twitter: '',
      otherSicialMedia: '',
      interests: [],
    });
  };

  return (
    <div>
      <h1>Add Card</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChane}
      ></input>
      <input
        type="text"
        name="description"
        placeholder="description"
        value={formData.description}
        onChange={handleChane}
      ></input>
      <input
        type="text"
        name="linkedin"
        placeholder="LinkedIn"
        value={formData.linkedin}
        onChange={handleChane}
      />
      <input
        type="text"
        name="twitter"
        placeholder="Twitter"
        value={formData.twitter}
        onChange={handleChane}
      />
      <input
        type="text"
        name="otherSocialMedia"
        placeholder="Other Social Media"
        value={formData.otherSocialMedia}
        onChange={handleChane}
      />
      <input
        type="text"
        name="interest"
        placeholder="Interest"
        value={formData.interest}
        onChange={(e) =>
          setformData({
            ...formData,
            interests: [...formData.interests, e.target.value],
          })
        }
      />
      <button onClick={handleAccount}>Add Card</button>

<h1>Added Cards</h1>
{cards.map((card,index)=>(
    <Card key={index} {...card}/>
))}
    </div>
  );
};

export default AddCardPage;

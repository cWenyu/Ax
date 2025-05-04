import React from 'react';
import Head from 'next/head';
import './photographer-gallery.css';

const baseImageURL =
  'https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg';

const dummyNames = [
  'Tim	Vance',
  'Amanda	Bower',
  'Jack	Wilson',
  'Dylan	May',
  'Neil	Anderson',
  'Maria	Ince',
  'Irene	Hardacre',
  'Diana	Carr',
  'Tracey	Hughes',
  'Piers	Greene',
  'Nathan	Duncan',
  'Virginia	Sanderson',
  'Robert	Rutherford',
  'Wanda	Skinner',
  'Cameron	James',
];

const dummyImages = [];

for (let i = 0; i < 15; i++) {
  dummyImages[i] = baseImageURL;
}

const PhotographerGallery = () => {
  return (
    <div>
      <Head>
        <title>Media Chat App</title>
      </Head>
      <h1 className="">📷 Photographer profile</h1>
      <div className="filer"></div>

      <div className="image-gallery">
        {dummyImages.map((src, index) => (
          <div key={index} className="image-container">
            <img src={src} alt={`Image ${index + 1}`} className="image" />
            <div className="image-caption">Photographer {index + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotographerGallery;

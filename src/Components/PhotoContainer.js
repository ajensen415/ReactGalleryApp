// import React from 'react';
// import { withRouter } from 'react-router-dom';

// import NotFound from './NotFound';
// import Photo from './Photo';

// //function to iterate through the returned images & provide them with a unique key(24 images)
// const PhotoContainer = (props) => {

//     let images = props.data.map ( photo =>
//         <Photo 
//             url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
//             key={photo.id}
//         />
//     );

//     //return images into container, adding to ul
//     return (
//         <div className="photo-contasiner">
//             <h2>Results: {props.title}</h2>
//                 <ul>
//                     {photos}
//                 </ul>
//         </div>
//     );
// }

// export default PhotoContainer;

import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';

const Photo = props => { 
  
  const results = props.data;
  let images = results.map(image =>
    <Photo 
        url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        key={photo.id} 
    />
  );
  
  return (
            <div className="photo-contasiner">
                <h2>Results: {props.title}</h2>
                    <ul>
                        {photos}
                    </ul>
            </div>
        );
    }

export default PhotoContainer;
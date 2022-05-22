import React from 'react';
import '../styles/DogItem.scss';

const dogAPI = "https://api.thedogapi.com/v1/images/search";

const DogItem = () => {

fetch(dogAPI)
.then(res => res.json())
.then(data => {
    const img = document.getElementById("dog-picture");
    img.src = data[0].url;
});

    return(
        <body>
            <div className='item-container'>
                <div className='dog-item'>
                    <figure>
                        <img id='dog-picture' className='dog-picture' />
                        <img src='https://i.imgur.com/zosgbfy.png' className='favorite-dog' />
                    </figure>
                </div>
            </div>
        </body>
    );
}

export default DogItem;
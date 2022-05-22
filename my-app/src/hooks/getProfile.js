import React from 'react';

const API_URL_RANDOM = 'https://api.thedogapi.com/v1/images/search?limit=4&api_key=fa66feb0-7011-4b52-a322-f4ad5982aa80';
const API_URL_FAVOTITES = 'https://api.thedogapi.com/v1/favourites?api_key=fa66feb0-7011-4b52-a322-f4ad5982aa80';
const API_URL_DELETE = (id) => `https://api.thedogapi.com/v1/favourites/${id}?api_key=fa66feb0-7011-4b52-a322-f4ad5982aa80`;
const API_URL_UPLOAD = 'https://api.thedogapi.com/v1/images/upload';


async function loadRandomDogs() {
  const res = await fetch(API_URL_RANDOM);
  const data = await res.json();
  console.log('Random')
  console.log(data)

  if (res.status !== 200) {
    console.log("Hubo un error: " + res.status); 
  } else {
    console.log("todo salio bien");
  }
}

async function loadFavoriteDog() {
  const res = await fetch(API_URL_FAVOTITES);
  const data = await res.json();
  console.log('Favoritos')
  console.log(data)

  if (res.status !== 200) {
    console.log("Hubo un error: " + res.status + data.message); 
  } else {
      const section = document.getElementById('favorite-cats');

      section.innerHTML = "";
      const h2 = document.createElement('h2');
      section.appendChild(h2);
    data.forEach(michi => {
      
      const article = document.createElement('article');
      article.classList.add("article-favs");
      const img = document.createElement('img');
      const btn = document.createElement('button');
      const btnText = document.createTextNode('X');

      img.src = michi.image.url;
      img.classList.add("dog-image");
      btn.classList.add("delete-btn");
      btn.appendChild(btnText);
      btn.onclick = () => deleteFavouriteMichi(michi.id);
      article.appendChild(img);
      article.appendChild(btn);
      section.appendChild(article);
    });
  }
}

async function saveFavouriteDog(id) {
  const res = await fetch(API_URL_FAVOTITES, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image_id: id
    }),
  });
  const data = await res.json();

  console.log('Save')
  console.log(res)

  if (res.status !== 200) {
    console.log("Hubo un error: " + res.status + data.message); 
  } else {
      console.log("michi guardado");
      loadFavoriteDog();
  }
}

async function deleteFavouriteMichi(id) {
    const res = await fetch(API_URL_DELETE(id), {
        method: 'DELETE',
    });
    const data = await res.json();

    if (res.status !== 200) {
        console.log("Hubo un error: " + res.status + data.message);
      } else {
         console.log("eliminado el michi");
         loadFavoriteDog();
      }
}


async function uploadMichiPhoto() {
  const form = document.getElementById("uploadingForm");
  const formData = new FormData (form);

  console.log(formData.get("file"));

  const res = await fetch(API_URL_UPLOAD, {
    method: 'POST',
    headers: {
      'X-API-KEY': 'fa66feb0-7011-4b52-a322-f4ad5982aa80',
    },
    body: formData,
  })
  const data = await res.json();

  if (res.status !== 201) {
    console.log(`Hubo un error al subir michi: ${res.status} ${data.message}`)
}
else {
    console.log("Foto de michi cargada :)");
    console.log({ data });
    console.log(data.url);
    saveFavouriteDog(data.id)
}
}



loadRandomDogs();
loadFavoriteDog();

export default uploadMichiPhoto;
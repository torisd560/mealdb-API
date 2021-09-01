const loadPhotos=()=>{
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(res =>res.json())
    .then(data => displayPhotos(data))
}
loadPhotos()
const displayPhotos=photos=>{
    photos.forEach(photo => {
    const photoContainer = document.getElementById('photo-container')
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
    <div class="card" onclick = "loadDetail(${photo.albumId})">
            <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${photo.title.slice(0,10)}</h5>
            </div>
    </div>
    `;
    photoContainer.appendChild(div)
    });
}
const loadDetail=albumId=>{
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
    .then(res =>res.json())
    .then(data => displayDetail(data[0]))
}
const displayDetail = photo=>{
    const displayDetail = document.getElementById('display-detail')
    displayDetail.textContent =''
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML=`
    <div class="card d-inline">
            <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${photo.title}</h5>
            </div>
            <img src="${photo.url}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${photo.title}</h5>
            </div>
    `;
    displayDetail.appendChild(div)

}


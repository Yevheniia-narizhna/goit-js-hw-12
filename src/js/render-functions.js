export function createMarkUp(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
  <a class="gallery-li"
    href="${largeImageURL}"
    ><img
      src="${webformatURL}"
      alt="${tags}"
  />
  <ul class="img-discr">
    <li>
      <p><b>Likes</b> ${likes}</p>
    </li>
    <li>
      <p><b>Views</b> ${views}</p>
    </li>
    <li>
      <p><b>Comments</b> ${comments}</p>
    </li>
    <li>
      <p><b>Downloads</b> ${downloads}</p>
    </li>
  </ul>
  </a>
</li>`
    )
    .join('');
}

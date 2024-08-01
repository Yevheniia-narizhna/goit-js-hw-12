import{a as f,i as c,S as p}from"./assets/vendor-b0d10f48.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();async function d(s,o){const e="45112034-271f1d190327e1d75e8ffdf0b";try{return s.includes(" ")&&s.replace(/\s+/g,"+"),await f.get("https://pixabay.com/api/",{params:{key:e,q:s,image_type:"photo",orientation:"horizontal",page:o,per_page:perPage,safesearch:!0}})}catch{c.error({title:"Error",message:"Sorry! Please try later!"}),console.error(error.message)}}const u=document.querySelector(".gallery");function y(s){const o=s.map(e=>`<li class="gallery-item">
  <a class="gallery-li"
    href="${e.largeImageURL}"
    ><img
      src="${e.webformatURL}"
      alt="${e.tags}"
  />
  <ul class="img-discr">
    <li>
      <p><b>Likes</b> ${e.likes}</p>
    </li>
    <li>
      <p><b>Views</b> ${e.views}</p>
    </li>
    <li>
      <p><b>Comments</b> ${e.comments}</p>
    </li>
    <li>
      <p><b>Downloads</b> ${e.downloads}</p>
    </li>
  </ul>
  </a>
</li>`).join("");u.insertAdjacentHTML("beforeend",o),new p(".gallery-li",{captionsData:"alt",captionDelay:250})}const m=document.querySelector(".form"),i=document.querySelector(".loader"),a=document.querySelector("input");i.style.display="none";m.addEventListener("submit",s=>{s.preventDefault(),u.innerHTML="",i.style.display="block";const o=a.value.trim();if(o===""){i.classList.remove("is-open");return}d(o).then(e=>{if(i.style.display="none",e.hits.length===0)return c.info({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});y(e.hits)}).catch(e=>{console.error("Error fetching images:",e)}).finally(()=>i.style.display="none"),a.value=""});new p(".gallery-li",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map

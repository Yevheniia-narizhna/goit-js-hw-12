import{a as u,i as f,S}from"./assets/vendor-b0d10f48.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const q=15;u.defaults.baseURL="https://pixabay.com/api/";async function g(s,e){const r="45112034-271f1d190327e1d75e8ffdf0b";return await u.get("axios.defaults.baseURL",{params:{key:r,q:s,image_type:"photo",orientation:"horizontal",page:e,per_page:q,safesearch:!0}})}function m(s){return s.map(({webformatURL:e,largeImageURL:r,tags:i,likes:t,views:o,comments:a,downloads:P})=>`<li class="gallery-item">
  <a class="gallery-li"
    href="${r}"
    ><img
      src="${e}"
      alt="${i}"
  />
  <ul class="img-discr">
    <li>
      <p><b>Likes</b> ${t}</p>
    </li>
    <li>
      <p><b>Views</b> ${o}</p>
    </li>
    <li>
      <p><b>Comments</b> ${a}</p>
    </li>
    <li>
      <p><b>Downloads</b> ${P}</p>
    </li>
  </ul>
  </a>
</li>`).join("")}const p=document.querySelector(".gallery"),h=document.querySelector(".form"),c=document.querySelector(".loader"),l=document.querySelector("btn-load"),d=document.querySelector("loader-more"),n=1,b=15;let L,y="";c.style.display="none";l.style.display="none";d.style.display="none";h.addEventListener("submit",E);l.addEventListener("click",M);function E(s){if(s.preventDefault(),n=1,p.innerHTML="",c.style.display="block",l.style.display="none",y=s.target.elements.search.value.trim(),y===""){c.style.display="none";return}g(y,n).then(({data:e})=>{c.style.display="none";const r=Math.ceil(e.totalHits/b);if(n===r?l.style.display="none":l.style.display="block",response.hits.length===0){f.info({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p.insertAdjacentHTML("beforeend",m(e.hits)),L=new S(".gallery-li",{captionsData:"alt",captionDelay:250}).refresh(),h.reset()}).catch(e=>{c.style.display="none",console.log(e)})}function M(){n+=1,d.style.display="block",l.style.display="none";const s=()=>document.querySelector(".gallery-item").getBoundingClientRect();g(y,n).then(({data:e})=>{p.insertAdjacentHTML("beforeend",m(e.hits)),window.scrollBy({top:s().height*2,left:0,behavior:"smooth"}),L.refresh();const r=Math.ceil(e.totalHits/b);if(n===r){f.info({title:"Caution",message:"We're sorry, but you've reached the end of search results."}),l.style.display="none",d.style.display="none";return}d.style.display="none",l.style.display="block"}).catch(e=>console.log(e))}
//# sourceMappingURL=commonHelpers.js.map

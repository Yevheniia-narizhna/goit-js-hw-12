import{a as y,i as p,S as P}from"./assets/vendor-YacmkDGs.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const S=15;y.defaults.baseURL="https://pixabay.com/api/";async function f(n,r){return await y.get("",{params:{key:"45112034-271f1d190327e1d75e8ffdf0b",q:n,image_type:"photo",orientation:"horizontal",page:r,per_page:S,safesearch:!0}})}function m(n){return n.map(({webformatURL:r,largeImageURL:t,tags:s,likes:e,views:o,comments:a,downloads:L})=>`<li class="gallery-item">
  <a class="gallery-li"
    href="${t}"
    ><img
      src="${r}"
      alt="${s}"
  />
  <ul class="img-discr">
    <li>
      <p><b>Likes</b> ${e}</p>
    </li>
    <li>
      <p><b>Views</b> ${o}</p>
    </li>
    <li>
      <p><b>Comments</b> ${a}</p>
    </li>
    <li>
      <p><b>Downloads</b> ${L}</p>
    </li>
  </ul>
  </a>
</li>`).join("")}const u=document.querySelector(".gallery"),q=document.querySelector(".form"),c=document.querySelector(".loader"),l=document.querySelector(".btn-load"),d=document.querySelector(".loader-more"),g=document.querySelector("input");let i=1;const h=15;let b;c.style.display="none";l.style.display="none";d.style.display="none";q.addEventListener("submit",E);l.addEventListener("click",v);async function E(n){n.preventDefault(),i=1,u.innerHTML="",c.style.display="block",l.style.display="none";const r=g.value.trim();if(r===""){c.style.display="none";return}try{const{data:t}=await f(r,i);c.style.display="none";const s=Math.ceil(t.totalHits/h);if(i===s?l.style.display="none":l.style.display="block",t.hits.length===0){p.info({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}u.insertAdjacentHTML("beforeend",m(t.hits)),b=new P(".gallery-li",{captionsData:"alt",captionDelay:250}).refresh()}catch(t){c.style.display="none",console.log(t)}}async function v(){i+=1,d.style.display="block",l.style.display="none";const n=g.value.trim(),r=()=>document.querySelector(".gallery-item").getBoundingClientRect();try{const{data:t}=await f(n,i);u.insertAdjacentHTML("beforeend",m(t.hits)),window.scrollBy({top:r().height*2,left:0,behavior:"smooth"}),b.refresh();const s=Math.ceil(t.totalHits/h);if(i===s){p.info({title:"Caution",message:"We're sorry, but you've reached the end of search results."}),l.style.display="none",d.style.display="none";return}d.style.display="none",l.style.display="block"}catch(t){console.log(t)}}
//# sourceMappingURL=commonHelpers.js.map

import{a as h,S as v,i as l}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function L(s){return h.get("https://pixabay.com/api/",{params:{key:"51732314-3454f0789e14ece522df46b66",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const n=document.querySelector(".gallery"),p=document.querySelector(".loader");let x=new v(".gallery a",{captionDelay:250,overlayOpacity:.95});function S(s){function r({webformatURL:e,largeImageURL:t,tags:i,likes:m,views:y,comments:g,downloads:f}){return`
        <a class="gallery-card" href="${t}"
          ><div class="gallery-link">
            <img src="${e}" alt="${i}" class="gallery-image" />
          </div>
          <div class="gallery-text">
            <div class="likes">
              <p class="gallery-text-item">Likes</p>
              <p class="gallery-text-count">${m}</p>
            </div>

            <div class="likes">
              <p class="gallery-text-item">Views</p>
              <p class="gallery-text-count">${y}</p>
            </div>
            <div class="likes">
              <p class="gallery-text-item">Comments</p>
              <p class="gallery-text-count">${g}</p>
            </div>
            <div class="likes">
              <p class="gallery-text-item">Downloads</p>
              <p class="gallery-text-count">${f}</p>
            </div>
          </div>
        </a>`}function o(e){return e.map(r).join("")}const a=o(s);n.innerHTML=a,x.refresh(),d()}function b(){p.classList.add("isActive")}function d(){p.classList.remove("isActive")}function c(){n&&(n.innerHTML="")}const q=document.querySelector(".form"),u=document.querySelector(".input_text");q.addEventListener("submit",s=>{if(s.preventDefault(),!u.value){l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),c();return}c(),b(),L(u.value.trim()).then(r=>{r.hits.length?S(r.hits):l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(r=>l.error({position:"topRight",message:r})).finally(()=>d()),s.target.reset()});
//# sourceMappingURL=index.js.map

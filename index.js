import{a as g,S as h,i as n}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function v(s){return g.get("https://pixabay.com/api/",{params:{key:"51732314-3454f0789e14ece522df46b66",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const o=document.querySelector(".gallery"),u=document.querySelector(".loader");let L=new h(".gallery a",{captionDelay:250,overlayOpacity:.95});function x(s){function r({webformatURL:e,largeImageURL:t,tags:i,likes:d,views:m,comments:f,downloads:y}){return`
        <a class="gallery-card" href="${t}"
          ><div class="gallery-link">
            <img src="${e}" alt="${i}" class="gallery-image" />
          </div>
          <div class="gallery-text">
            <div class="likes">
              <p class="gallery-text-item">Likes</p>
              <p class="gallery-text-count">${d}</p>
            </div>

            <div class="likes">
              <p class="gallery-text-item">Views</p>
              <p class="gallery-text-count">${m}</p>
            </div>
            <div class="likes">
              <p class="gallery-text-item">Comments</p>
              <p class="gallery-text-count">${f}</p>
            </div>
            <div class="likes">
              <p class="gallery-text-item">Downloads</p>
              <p class="gallery-text-count">${y}</p>
            </div>
          </div>
        </a>`}function l(e){return e.map(r).join("")}const a=l(s);o.innerHTML=a,L.refresh(),p()}function b(){u.classList.add("isActive")}function p(){u.classList.remove("isActive")}function S(){o&&(o.innerHTML="")}const q=document.querySelector(".form"),c=document.querySelector(".input_text");q.addEventListener("submit",s=>{c.value&&(S(),s.preventDefault(),b(),v(c.value.trim()).then(r=>{r.hits.length?x(r.hits):n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(r=>n.error({position:"topRight",message:r})).finally(()=>p()),s.target.reset())});
//# sourceMappingURL=index.js.map

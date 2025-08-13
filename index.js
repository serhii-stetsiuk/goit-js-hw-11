import{a as g,S as y,i as n}from"./assets/vendor-BK_rxH-O.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function h(i){return g.get("https://pixabay.com/api/",{params:{key:"51732314-3454f0789e14ece522df46b66",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");function v(i){function r({webformatURL:e,largeImageURL:t,tags:s,likes:p,views:d,comments:m,downloads:f}){return`
        <a class="gallery-card" href="${t}"
          ><div class="gallery-link">
            <img src="${e}" alt="${s}" class="gallery-image" />
          </div>
          <div class="gallery-text">
            <div class="likes">
              <p class="gallery-text-item">Likes</p>
              <p class="gallery-text-count">${p}</p>
            </div>

            <div class="likes">
              <p class="gallery-text-item">Views</p>
              <p class="gallery-text-count">${d}</p>
            </div>
            <div class="likes">
              <p class="gallery-text-item">Comments</p>
              <p class="gallery-text-count">${m}</p>
            </div>
            <div class="likes">
              <p class="gallery-text-item">Downloads</p>
              <p class="gallery-text-count">${f}</p>
            </div>
          </div>
        </a>`}function o(e){return e.map(r).join("")}const a=o(i);l.innerHTML=a,L.refresh(),u()}let L=new y(".gallery a",{captionDelay:250,overlayOpacity:.95});l.addEventListener("click",i=>{i.preventDefault(),i.target.noteName});function x(){c.classList.add("isActive")}function u(){c.classList.remove("isActive")}function b(){l&&(l.innerHTML="")}const S=document.querySelector(".form"),q=document.querySelector(".input_text");S.addEventListener("submit",i=>{b(),i.preventDefault(),x(),h(q.value.trim()).then(r=>{r.hits.length?v(r.hits):(n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),u())}).catch(r=>n.error({position:"topRight",message:r})),i.target.reset()});
//# sourceMappingURL=index.js.map

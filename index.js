import{a as d,S as m}from"./assets/vendor-C4JTgFYI.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function f(r){return d.get("https://pixabay.com/api/",{params:{key:"51732314-3454f0789e14ece522df46b66",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(l=>l.data)}const o=document.querySelector(".gallery");async function y(r){function l({webformatURL:e,largeImageURL:t,tags:s,likes:n,views:c,comments:u,downloads:p}){return`
        <a class="gallery-card" href="${t}"
          ><div class="gallery-link">
            <img src="${e}" alt="${s}" class="gallery-image" />
          </div>
          <div class="gallery-text">
            <div class="likes">
              <p class="gallery-text-item">Likes</p>
              <p class="gallery-text-count">${n}</p>
            </div>

            <div class="likes">
              <p class="gallery-text-item">Views</p>
              <p class="gallery-text-count">${c}</p>
            </div>
            <div class="likes">
              <p class="gallery-text-item">Comments</p>
              <p class="gallery-text-count">${u}</p>
            </div>
            <div class="likes">
              <p class="gallery-text-item">Downloads</p>
              <p class="gallery-text-count">${p}</p>
            </div>
          </div>
        </a>`}function i(e){return e.map(l).join("")}const a=i(r);o.innerHTML=a,g.refresh()}let g=new m(".gallery a",{captionDelay:250,overlayOpacity:.95});o.addEventListener("click",r=>{r.preventDefault(),r.target.noteName});const v=document.querySelector(".form"),h=document.querySelector(".input_text");document.querySelector(".loader");v.addEventListener("submit",r=>{r.preventDefault(),f(h.value.trim()).then(l=>y(l.hits)),r.target.reset()});
//# sourceMappingURL=index.js.map

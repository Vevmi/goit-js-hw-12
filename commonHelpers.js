import{a as S,S as x,i as c}from"./assets/vendor-da186403.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function d(s,t){const a="https://pixabay.com/api/",o={key:"11070675-9db3ad99120a3eae94c3d42ec",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};return S.get(a,{params:o})}function w({downloads:s,views:t,likes:a,comments:o,largeImageURL:e}){return`            <li class="card-item">
        <a href="${e}"><img class="card-img" src="${e}" alt="" title="" /></a>
        <div>
          <span class="description">
            <p class="card-title">
              Downloads: <span class="card-text">${s}</span>
            </p>
            <p class="card-title">
              Likes: <span class="card-text">${a}</span>
            </p>
            <p class="card-title">
              Views: <span class="card-text">${t}</span>
            </p>
            <p class="card-title">
              Comments: <span class="card-text">${o}</span>
            </p></span
          >
        </div>
      </li>`}function f(s){return s.map(w).join(" ")}const h=new x(".gallery a",{}),u=document.querySelector(".gallery"),g=document.querySelector(".loader"),p=document.querySelector(".load-more-btn");let n,i,y;const E=15,m=document.querySelector(".search-form");m.addEventListener("submit",async s=>{if(s.preventDefault(),n=1,i=m.elements.searchQuery.value,!i){c.error({message:"Feild should not be empty!"});return}L();try{const{data:t}=await d(i,n),a=f(t.hits);if(u.innerHTML=a,h.refresh(),t.hits.length==0){c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}y=Math.ceil(t.totalHits/E)}catch{c.error({message:"Enter something"})}b(),v()});p.addEventListener("click",async s=>{d(i,n),n+=1,L();try{const{data:t}=await d(i,n),a=f(t.hits);u.insertAdjacentHTML("beforeend",a),h.refresh()}catch{console.log("Try later")}b(),v(),O()});function L(){g.classList.remove("is-hidden")}function b(){g.classList.add("is-hidden")}function q(){p.classList.remove("is-hidden")}function B(){p.classList.add("is-hidden")}function v(){n>=y?(B(),c.info({message:"We're sorry, but you've reached the end of search results."})):q()}function O(){const s=u.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:s*3})}
//# sourceMappingURL=commonHelpers.js.map

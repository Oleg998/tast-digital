import"./assets/form-973504c6.js";document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".menu-area"),t=document.getElementById("menu-curtain"),n=document.body,o=document.getElementById("menu-container"),l=document.getElementById("menu-content-overlay"),r=document.getElementById("menu-rounder");e.addEventListener("click",()=>{t.classList.add("menu-curtain--opened","menu-curtain--animate"),o.style.display="block",n.classList.add("menu--no-scroll"),l.classList.toggle("active"),document.querySelectorAll(".menu-item").forEach(c=>{c.removeEventListener("click",m),c.removeEventListener("click",f),c.addEventListener("click",()=>{m(c),f(c)})}),r&&r.classList.add("menu-rounder--opened-all")});const i=()=>{l.classList.remove("active"),t.classList.remove("menu-curtain--opened","menu-curtain--animate"),n.classList.remove("menu--no-scroll"),o.style.display="none",r&&r.classList.remove("menu-rounder--opened-all"),b()};document.addEventListener("click",c=>{!o.contains(c.target)&&!e.contains(c.target)&&i()}),document.querySelectorAll("a").forEach(c=>{c.addEventListener("click",i)});const y=document.querySelectorAll(".menu-item-arrow"),E=document.querySelectorAll(".menu-btn-back__icon"),d=()=>{s=(s+1)%4,a(),u()},v=()=>{s=(s-1+4)%4,a(),u()};y.forEach(c=>{c.removeEventListener("click",d),c.addEventListener("click",d)}),E.forEach(c=>{c.removeEventListener("click",v),c.addEventListener("click",v)})});let s=0;const a=()=>{const e=document.querySelector(".menu-rounder"),t=[0,-272,-544];e&&(e.style.transform=`translateX(${t[s]}px)`)},u=()=>{const t=document.getElementById("menu-cascade").querySelector("ul.menu-root.menu-level.menu-level-0");t&&(s===0?t.classList.add("first-layer"):t.classList.remove("first-layer"))},g=()=>{s=(s+1)%4,a(),u()},k=()=>{s=(s-1+4)%4,a(),u()},m=e=>{if(e.classList.contains("is-father")){document.querySelectorAll(".menu-root").forEach(n=>{n.classList.add("menu-level--opened")});const t=e.querySelector(".menu-level");if(t){t.classList.add("menu-level--opened");const n=e.parentNode;n.nodeName==="UL"&&n.classList.remove("first-layer")}}},b=()=>{document.querySelectorAll(".menu-root").forEach(e=>{e.classList.remove("menu-level--opened")}),document.querySelectorAll(".menu-level").forEach(e=>{e.classList.remove("menu-level--opened")})},f=e=>{const t=e.classList;if(t.contains("menu-btn-back")){const n=e.querySelector(".menu-btn-back__label"),o=e.parentElement.querySelector(".regua-navegacao-menu-item");n&&o&&console.log(`back | ${o.textContent} > ${n.textContent}`)}else if(t.contains("is-father"))console.log(`navegacao | ${L(e)}`);else{const n=e.querySelector(".menu-item-title").textContent,o=L(e.parentElement.parentElement);console.log(`links clicaveis | ${o?`${o} > ${n}`:n}`)}},L=e=>{const t=[];let n=e;for(;n&&n.id!=="menu-cascade";){const o=n.querySelector(".menu-item-title");if(o&&t.push(o.textContent),n.classList.contains("is-father")){const l=n.querySelector(".menu-btn-back__label");l&&t.push(l.textContent)}n=n.parentNode}return t.reverse().join(" > ")};document.addEventListener("click",e=>{const t=e.target.closest(".is-father");t&&(g(),m(t))});document.addEventListener("click",e=>{e.target.closest(".menu-btn-back__icon")&&k()});
//# sourceMappingURL=commonHelpers.js.map

var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var o=t[e];delete t[e];var n={id:e,exports:{}};return r[e]=n,o.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){t[e]=r},e.parcelRequired7c6=o);var n=o("krGWQ");const a=(e,r)=>{try{const t=JSON.stringify(r);localStorage.setItem(e,t)}catch(e){console.error("Set state error: ",e.message)}},s=e=>{try{const r=localStorage.getItem(e);return null===r?void 0:JSON.parse(r)}catch(e){console.error("Get state error: ",e.message)}},l=e=>{try{localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}},c={};!function(){const e=s("form-data-value");e&&Object.entries(e).forEach((([e,r])=>{n.refs.form.elements[e].value=r}))}(),n.refs.form.addEventListener("input",(function(e){c[e.target.name]=e.target.value,a("form-data-value",c)})),n.refs.form.addEventListener("submit",(function(e){e.currentTarget.reset(),l("form-data-value")}));
//# sourceMappingURL=index.92ea5a25.js.map

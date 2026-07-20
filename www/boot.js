(function(){
  "use strict";
  const byId=id=>document.getElementById(id);

  function revealPlayScreen(source="boot-failsafe"){
    if(typeof window.__velvetShowPlayScreen==="function"){
      window.__velvetShowPlayScreen(source);
      return;
    }
    const loading=byId("loadingScreen");
    const start=byId("startScreen");
    if(loading){
      loading.classList.add("hidden");
      loading.style.pointerEvents="none";
      setTimeout(()=>{loading.style.display="none";},420);
    }
    if(start){
      start.classList.remove("hidden");
      start.removeAttribute("style");
      start.setAttribute("aria-hidden","false");
    }
    document.documentElement.dataset.playScreenReady="true";
    document.documentElement.dataset.loadingExit=source;
  }

  window.__velvetForceReveal=revealPlayScreen;

  document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(()=>{
      const loading=byId("loadingScreen");
      if(loading&&getComputedStyle(loading).pointerEvents!=="none"&&getComputedStyle(loading).visibility!=="hidden"){
        revealPlayScreen("boot-timeout");
      }
    },8500);
  },{once:true});
})();

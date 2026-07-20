/* Velvet Roulette — Web Edition. Removes native-only features: diamond purchases, rewarded ads, Google sign-in. Guest play with full roulette, daily rewards, levels and diamond→gold exchange remains. */
(function(){
  'use strict';
  window.VELVET_WEB_EDITION=true;
  var HIDE_IDS=['gemPlus','boardBuyDiamonds','restorePurchasesBtn','settingsRestoreBtn','settingsGoogleBtn','profileConnectBtn','googleSignInBtn','rewardedAdSection','dailyRewardedAdSection','adOfferModal'];
  function apply(){
    HIDE_IDS.forEach(function(id){var el=document.getElementById(id);if(el){el.hidden=true;el.style.display='none';}});
    /* Diamond Shop section (real-money packs) is removed on web. */
    document.querySelectorAll('.store-section').forEach(function(section){
      if(section.querySelector('.diamond-packages'))section.style.display='none';
    });
    /* Login gate: guest only on the web. */
    var intro=document.querySelector('.pro-login .login-intro');
    if(intro)intro.textContent='Play instantly with a private guest profile stored in this browser.';
    /* Ad-offer modal can never open. */
    var adModal=document.getElementById('adOfferModal');
    if(adModal){adModal.classList.remove('show');adModal.setAttribute('aria-hidden','true');}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply);else apply();
  /* Re-apply after the app finishes wiring UI, in case any handler re-shows a hidden element. */
  setTimeout(apply,1500);setTimeout(apply,4000);
})();

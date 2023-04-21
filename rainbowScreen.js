(document.querySelectorAll("style[cssfor='rainbowScreen']").length===0)?document.querySelector('head').innerHTML+=`
<style cssfor="rainbowScreen">
.rainbow {
  background: rgb(255,0,0);
  background: -moz-linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,255,0,1) 17%, rgba(50,205,50,1) 33%, rgba(0,255,255,1) 50%, rgba(0,0,255,1) 66%, rgba(255,0,255,1) 83%, rgba(255,0,0,1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,255,0,1) 17%, rgba(50,205,50,1) 33%, rgba(0,255,255,1) 50%, rgba(0,0,255,1) 66%, rgba(255,0,255,1) 83%, rgba(255,0,0,1) 100%);
  background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,255,0,1) 17%, rgba(50,205,50,1) 33%, rgba(0,255,255,1) 50%, rgba(0,0,255,1) 66%, rgba(255,0,255,1) 83%, rgba(255,0,0,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff0000",endColorstr="#ff0000",GradientType=1);
}
</style>`;

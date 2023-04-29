for (let i = 0; i < document.querySelectorAll('.fc').length; i++) {
  const element = document.querySelectorAll('.fc')[i];
  element.outerHTML="<div style='display: flex;justify-content: center;'>"+element.outerHTML+"</div>";
}

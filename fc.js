for (let i = 0; i < document.querySelectorAll('.fc').length; i++) {
  const element = document.querySelectorAll('.fc-container')[i];
  element.outerHTML="<div style='display: flex;justify-content: center;flex-wrap: wrap;flex-direction: row;align-items: center;'>"+element.outerHTML+"</div>";
}

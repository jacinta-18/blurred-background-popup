const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const popupContainerEl = document.querySelector(".popup-container");
const closeIconEL = document.querySelector(".close-icon");


btnEl.addEventListener("click", ()=>{
    containerEl.classList.add("active");
    popupContainerEl.classList.remove("active");
});


closeIconEL.addEventListener("click", ()=>{
    containerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
});
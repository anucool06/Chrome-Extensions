if(document.querySelector(".pop")) {
    const lightButton = document.querySelector(".lt");
    const darkButton = document.querySelector(".dr");
    let buttonOn = false;

    lightButton.addEventListener("click", lightfun); 
    function lightfun() {
        chrome.tabs.executeScript({
            file : "lightmode.js"
        })
    }

    darkButton.addEventListener("click", darkfun);
    function darkfun() {
        chrome.tabs.executeScript({
            file : "darkmode.js"
        })
    }    
}
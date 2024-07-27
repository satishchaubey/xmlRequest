const starRating = document.querySelectorAll('.fa-star-o');
const Value = document.querySelector(".value_ofrating");
const btn=document.querySelector("button")

let currentTotalRating = -1;

starRating.forEach((rating, index) => {
    rating.dataset.rating = index + 1;
    // rating.addEventListener("mouseover", onMouseOverFunction)
    rating.addEventListener("click", handleClickRating);
    // rating.addEventListener("mouseoverleave",handleLeave)
})
btn.addEventListener("click",resetRating)

// function onMouseOverFunction(value) {
//     // Value.textContent=value.target.dataset.rating
//     const currentStar = value.target.dataset.rating;
//     if (!currentStar) return;
//     else handleStarUpdateRating(currentStar)
// }

function handleStarUpdateRating(currentStar) {
    for (let i = 0; i < 5; i++) {
        if (i < currentStar) {
            starRating[i].classList.replace("fa-star-o", "fa-star");
        } else {
            starRating[i].classList.replace("fa-star", "fa-star-o");
        }
    }
}

function handleClickRating(value) {
    const currentStar = value.target.dataset.rating;
    currentTotalRating = currentStar;
    handleStarUpdateRating(currentTotalRating)
    Value.textContent =currentTotalRating
}

function resetRating(value){
    const resetStar = 0
    handleStarUpdateRating(resetStar)
    Value.textContent = resetStar
}


// function handleLeave(){
//     handleStarUpdateRating(currentTotalRating)
// }
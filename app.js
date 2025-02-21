// const names = ["Ed", "John", "Maria", "Eliza", "Burrito", "Harry", "Potter" ];


// for(name of names) {
//     console.log(name);
//     if(name === "Maria") {
//         console.log("Maria is in my list");
//         break;
//     }
// } 

// let loading = 0;

// while(loading < 100){
//     console.log(`Website is still loading`);

//     loading++;
// }

const userList = document.querySelector(".name-list li");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");


addListBtn.addEventListener("click", function() {
    const newLi = document.createElement("LI");
    const liContent = document.createTextNode(listInput.value);
    newLi.appendChild(liContent);
    userList.appendChild(newLi);
});

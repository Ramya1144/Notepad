// document.addEventListener("DOMContentLoaded", function () {
// let TitleNote =document.getElementById("titlenote");
// let Addbutton =document.getElementById("Addbutton");
// let noteContent =document.getElementById("note-content2");
// let outputbox =document.getElementById("ChildBox");

// function handleDelete(e) {
//     if (e.target && e.target.nodeName === "BUTTON") {
//       outputbox.removeChild(e.target.parentElement);
//     }
//   }

//   outputbox.addEventListener("click", handleDelete);

// Addbutton.addEventListener("click",function (e) {
//     e.preventDefault();
//     if (TitleNote.value.trim() === "") {
//         alert("Please enter title");
//       } 
//     else if(noteContent.value.trim() === "") {
//         alert("Please enter note content");
//       }
//    else{
//    let box = document.createElement("div");
//    let headding = document.createElement("h2");
//    let content = document.createElement("p");
//    let deleteBtn = document.createElement("button");

//     headding.innerHTML = TitleNote.value;
//     content.innerHTML = noteContent.value;
//     deleteBtn.innerHTML = "Delete";

//     box.classList.add("child1");
//     headding.classList.add("hedding1");
//     content.classList.add("noteinfo1");
//     deleteBtn.classList.add("btn1");

//     box.appendChild(deleteBtn);
//     box.appendChild(headding);
//     box.appendChild(content);
//     outputbox.appendChild(box);

//     headding.innerHTML = "";
//     content.innerHTML = "";

// }

// });
// });

document.addEventListener("DOMContentLoaded", function () {
    let TitleNote = document.getElementById("titlenote");
    let Addbutton = document.getElementById("Addbutton");
    let noteContent = document.getElementById("note-content2");
    let outputbox = document.getElementById("ChildBox");
  
    function handleDelete(e) {
      if (e.target && e.target.nodeName === "BUTTON") {
        outputbox.removeChild(e.target.parentElement);
      }
    }
  
    outputbox.addEventListener("click", handleDelete);
  
    Addbutton.addEventListener("click", function (e) {
      e.preventDefault();
      if (TitleNote.value.trim() === "") {
        alert("Please enter title");
      } else if (noteContent.value.trim() === "") {
        alert("Please enter note content");
      } else {
        let box = document.createElement("div");
        let headding = document.createElement("h2");
        let content = document.createElement("p");
        let deleteBtn = document.createElement("button");
  
        headding.innerHTML = TitleNote.value;
        content.innerHTML = noteContent.value;
        deleteBtn.innerHTML = "Delete";
  
        box.classList.add("child1");
        headding.classList.add("hedding1");
        content.classList.add("noteinfo1");
        deleteBtn.classList.add("btn1");
  
        box.appendChild(headding);
        box.appendChild(content);
        box.appendChild(deleteBtn);
        outputbox.appendChild(box);
  
        TitleNote.value = "";
        noteContent.value = "";
      }
    });
  });
  
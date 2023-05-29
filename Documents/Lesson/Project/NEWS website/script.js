let btn1 = document.querySelectorAll(".btns");

for (let i = 0; i < btn1.length; i++) {  
btn1[i].addEventListener('click', function() {  
    btn1[i].classList.toggle("red");  
});
}
 

let read1 = document.querySelectorAll(".readBtn");

for (let  x = 0; x < read1.length; x++) {
    read1[x].addEventListener('click', function () {
        read1[x].classList.toggle("green");
    });
}

var deleteButton = document.getElementsByClassName('delete');

for(var i = 0; i < deleteButton.length; i++) {
    var button = deleteButton[i];

    button.addEventListener('click', function() {
        var card = this.parentNode.parentNode.parentNode;

        card.parentNode.removeChild(card);
    })
}

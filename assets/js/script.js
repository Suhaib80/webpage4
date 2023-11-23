var formButton = document.querySelectorAll('button.formlink');
// console.log(formButton);

for(var i=0;i<formButton.length; i++){
    formButton[i].addEventListener('click',function(){
        let formButton2 = document.querySelectorAll('.formlink');
        let formContent = document.querySelectorAll('.searchForm');

        formContent.classList.add('active');
        formButton2.classList.add('active');
    })
}
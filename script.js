
let query = document.querySelector('.main-searchbox');
let searchBtn = document.querySelectorAll('.searchBtn');

for (let i = 0; i < searchBtn.length; i++){
    searchBtn[i].addEventListener('click', function(){
    let url = 'https://www.google.com/search?q='+query.value;
    window.open(url, '_self')
  });
}
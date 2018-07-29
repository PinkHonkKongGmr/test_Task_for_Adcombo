var like=document.getElementById('like');
var share = document.getElementById('share');

var zero1=0;
var zero2=0;

like.innerText=zero1;
share.innerText=zero2;

like.addEventListener('click',function () {

  zero1++;
  like.innerText=zero1;
});

share.addEventListener('click',function () {

  zero2++;
  share.innerText=zero2;
});

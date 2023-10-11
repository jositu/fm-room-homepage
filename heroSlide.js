var currIndex = 0;
showSlide(currIndex);

function changeIndex(n) {
  showSlide(currIndex += n);
}

function showSlide(n) {
  var i;
  var contentList = document.getElementsByClassName('hero__content');
  var imageList = document.getElementsByClassName('hero__image');

  if (n == contentList.length) {
    currIndex = 0;
  }

  if (n < 0) {
    currIndex = contentList.length - 1;
  }

  for (i = 0; i < contentList.length; i++) {
    contentList[i].style.display = 'none';
    imageList[i].style.display = 'none';
  }

  contentList[currIndex].style.display = 'block';
  imageList[currIndex].style.display = 'block';
}
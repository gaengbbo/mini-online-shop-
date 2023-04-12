const $ul = document.querySelector('.items')
const $nav = document.querySelector('.nav')
const data = [];

//JSON 파일에서 items를 fetch해와서 리스트로 표시해주기 
function loadData () {
  return fetch('./data/data.json')
  .then((res) => res.json())
  .then((data) => {
    data = data.items;
    data.forEach((item) => {
      const $img = document.createElement('img');
      $img.setAttribute("src", item.image);
      $img.classList.add('item_thumbnail');
      const $span = document.createElement('span');
      $span.innerText = `${item.gender}, ${item.size}`;
      $span.classList.add('item_description');
      const $li = document.createElement('li');
      $li.classList.add('item');
      $li.appendChild($img)
      $li.appendChild($span)
      $ul.appendChild($li)
    })
  });
}



function clickCategory (event) {
  const selecShirt = document.querySelector('.shirt');
  console.log('클릭', event.target);
  console.log(event.target.className)
  if ( event.target.className === 'shirt') {
    console.log('셔츠');
  }
}

$nav.addEventListener("click", clickCategory);



loadData();
//JSON 파일에서 items를 fetch해와서 리스트로 표시해주기 
function loadData () {
  return fetch('./data/data.json')
  .then((res) => res.json())
  .then((json) => json.items);
}

function displayItems(items) {
  const container = document.querySelector('.items');
  console.log(items);
  container.innerHTML = items.map((item) => createHTML(item)).join('');
}

function createHTML(item) {
  return `
    <li class="item">
      <img src="${item.image}" alt="${item.type}" class="item_thumbnail">
      <span class="item_description">${item.gender}, ${item.size}</span>
    </li>`;
}


function onButtonClick (event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;
  console.log(dataset);
  if (key == null || value == null) {
    return;
  }

  displayItems(items.filter((item) => item[key] === value));

}


  
function setEventListeners(items) {
  const $logo = document.querySelector('.logo');
  const $nav = document.querySelector('.nav');
  $logo.addEventListener('click', () => {displayItems(items)});
  $nav.addEventListener('click', (event) => onButtonClick(event, items));
}

loadData()
 .then(items => {
  displayItems(items);
  setEventListeners(items);
 })
 .catch(console.log);


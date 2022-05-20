document.querySelector('main#main').remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'is the champion';
newHeader.className = 'victory';
document.querySelector('body').append(newHeader);


// dom2.js

// element(tag) vs node


document.addEventListener('DOMContentLoaded', function(){
  let container = document.querySelector('#container');
  console.dir(container.children);


  document.querySelector('button').addEventListener('click', function(){
    // container.children[0].innerHTML = 'hi';

    // let detailEx = document.querySelectorAll('#container>div')[2].innerHTML;
    container.children[3].style.display = 'block';
    // document.querySelector('#detail>ul').innerHTML += '<li>가공법 : 워시드</li>';

    let item = document.createElement('li');
    let txt = document.createTextNode('가공법 : 워시드');
    
    let appendTxt = item.appendChild(txt);
    
    // console.log(item);
    // console.log(txt);
    // console.log(appendTxt);

    document.querySelector('#detail>ul').appendChild(item);

  





  })

})
// dom.js
// document object model ~

// let myPicture = {name:"해와 달", width: 200, hegiht: 300} => property(속성)
// <img src = "small.jpg"> src => attribute(속성)




// DOM 요소의 선택




document.addEventListener('DOMContentLoaded', attrChangeFunc);


function attrChangeFunc(e) {
  console.log(e);

  // 대상 선택
  document.querySelectorAll('div#small-pic>img').forEach(function (item){
    console.log(item);
    // img 이벤트 등록
    item.addEventListener('mouseover', function(e){
      console.log(e.target.src); 
      document.querySelector('#prod-pic>img').src = e.target.src;
    })
  });


  let eventBtn = document.querySelector('div#desc>ul>button');
  let alertTitle = document.querySelector('#desc>ul>li:nth-of-type(1)>span').innerText;
  let price_1 = document.querySelector('#desc>ul>li:nth-of-type(2)>input').value;
  let price_2 = document.querySelector('#desc>ul>li:nth-of-type(3)>input').value;

  document.querySelectorAll('#desc>ul>li')[0].firstElementChild.innerText;
  document.querySelectorAll('#desc>ul>li')[1].lastElementChild.value;
  document.querySelectorAll('#desc>ul>li')[2].children[1].value;




  eventBtn.onclick = function (){
    alert(`${alertTitle}(결제금액은 : ${parseInt(price_1) >= 50000 ? parseInt(price_1) : parseInt(price_1) + parseInt(price_2)} 원입니다.)`);
  }

  console.log(alertTitle);
}















function domChangeFunc() {


  // let heading = document.querySelector('#heading');
  // let cup = document.querySelector('#cup');
  // heading.onclick() = () => heading.innerText = "추천 오늘의 커피~!";
  // cup.onclick() = () => cup.src = "images/coffe-bule.jpg";
  heading.onclick = function (){
    heading.innerText = "추천 오늘의 커피~!";
    document.getElementById('cup').src = "images/coffee-blue.jpg";
  }



  let detail = document.querySelector('#detail>ul');
  detail.innerHTML = "<li>사과</li><li>바나나</li>";
  console.log();
  // console.log(detail.innerHTML);
  // console.log(detail.textContent);


}


function domFunc(){

  // dom.js
  // document object model ~

  document.addEventListener('DOMContentLoaded', function(){
    let targetItem = document.getElementById('container');
    targetItem = document.querySelector('#container');
    targetItem = document.getElementsByClassName('small');
    for (let i = 0; i < targetItem.length; i++){
     console.log(targetItem[i].src);
    }
    targetItem = document.querySelectorAll('.small'); // NodeList ([배열])
    targetItem.forEach(function(item) {
      item.style.borderColor = 'red';
      item.style.borderWidth = '3px';
      item.style.borderStyle = 'solid';
    });

    targetItem = document.getElementsByTagName('img'); // HTMLCollection([배열])
    targetItem = document.querySelectorAll('img'); // NodeList ([배열])
  
    console.log(targetItem);

  })

}

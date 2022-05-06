// 220503

// 1~100까지 5의 배수를 출력하세요
for(let i = 1; i < 21; i++){
  console.log(i*5)
  }


// 각 과목별 성적을 출력하세요
let subject = {
  국어: 94,
  수학: 78,
  영어: 86,
  과학: 92,
  사회: 85
}
for (let score in subject){
  console.log(score, subject[score]);
}


// 날짜를 입력하면 "오늘은 몇월 몇일 입니다"를 출력하는 함수만들기
function today(month, day) {
  console.log("오늘은 "+month+"월 "+day+"일입니다!")
}
today(05,06);


// 삼각형의 작은 변의 길이가 3,4 일 때 가장 큰 변의 길이를 출력하는 함수만들기
// math.sqrt : 제곱근 함수

function pythagoras(a,b){
  return Math.sqrt((a*a)+(b*b));
}
console.log(pythagoras(3,4));

//  220506

// for ... of 문
for(const item of [1, 2, 3]){
  // item 변수에 순차적으로 1, 2, 3 할당
  console.log(item);
  // 1 2 3
};


// forEach문
const arr = [0,1,2,3,4,5]
arr.forEach(function(element){
  console.log(element);
});
// 0 1 2 3 4 5
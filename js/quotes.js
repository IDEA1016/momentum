const quotes = [
{
 quote: "이상은 평화롭고 역사는 폭력적이야.",
 author: "Don Collier, Fury",
},
{
 quote: "어딜 가든 집 같은 곳은 없어.",
 author: "The Wizard of Oz",
},
{
 quote: "우린 실패해야 해, 여기서 실패해야지만 거기서 실패하지 않아.",
 author: "닐 암스트롱, 퍼스트 맨",
},
{
 quote: "단지 두려움 떄문에 좋아하는 일을 포기하지 마.",
 author: "Sing",
},
{
 quote: "사람과 사람의 관계가 시작되는 건 서로 다름을 인정하는 것부터이다.",
 author: "완벽한 타인",
},
{
 quote: "쓴맛을 못 느껴봤으면, 달콤한 것도 달콤한 게 아냐. ",
 author: "The Blind Side",
},
{
 quote: "잊히지 않을 것 같은 무더운 여름 뒤엔 가을도 온다 분명히.",
 author: "500 Days of Summer",
},
{
 quote: "삶의 종착역은 다 같아, 어떤 길로 가는지가 다를 뿐이지, 넌 네 길로 가는 거야.",
 author: "벤자민 버튼의 시간은 거꾸로 간다",
},
{
 quote: "이제 눈을 뜨렴, 자 이제 좋은 세상이야.",
 author: "The Blind Side",
},
{
 quote: "죽음이 슬픈 이유는 그 사람 기억 안에 살던 나도 함께 죽기 때문이지.",
 author: "Elle",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
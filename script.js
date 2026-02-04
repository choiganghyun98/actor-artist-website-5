const data=[
  {id:"photo1",src:"images/photo1.jpg",title:"Unfurnished Memory",meta:"2024 · mixed media",desc:"표면의 흔적을 기록하듯, 지워진 시간 위에 다시 레이어를 올린 작업."},
  {id:"photo2",src:"images/photo2.jpg",title:"Silent Object",meta:"2023 · object & paper",desc:"사물은 감정의 증거가 될 수 있는가. 형태는 남고 서사는 사라진다."},
  {id:"photo3",src:"images/photo3.jpg",title:"Grey Room Study",meta:"2025 · installation draft",desc:"공간을 하나의 인물처럼 다루는 연습. 시선이 머무는 자리에 구조가 생긴다."},
  {id:"photo4",src:"images/photo4.jpg",title:"Surface as Scene",meta:"2024 · acrylic & texture",desc:"무대가 아닌 표면 위에서, 사건처럼 번지는 빛과 먼지."},
  {id:"photo5",src:"images/photo5.jpg",title:"Archive of Soft Noise",meta:"2022 · printed matter",desc:"들리지 않는 소리의 질감. 손끝에서만 남는 기록."},
  {id:"photo6",src:"images/photo6.jpg",title:"Unfinished Light",meta:"2025 · object composition",desc:"무엇이 완성이고 무엇이 준비인지 모호한 상태를 유지한다."},
  {id:"photo7",src:"images/photo7.jpg",title:"Between Frames",meta:"2023 · paper sculpture",desc:"프레임 사이의 공백을 조형으로 치환한 실험."},
  {id:"photo8",src:"images/photo8.jpg",title:"Weight of Air",meta:"2024 · installation still",desc:"공기에도 무게가 있다면, 그건 움직임의 잔상일 것이다."},
  {id:"photo9",src:"images/photo9.jpg",title:"Private Geometry",meta:"2022 · mixed media",desc:"개인적인 규칙으로 만든 기하. 보이지 않지만 질서를 만든다."},
  {id:"photo10",src:"images/photo10.jpg",title:"A Scene Without Actors",meta:"2025 · space study",desc:"배우가 없는 장면. 그러나 장면은 이미 감정을 가진다."},

  {id:"photo11",src:"images/photo11.jpg",title:"Notes for a Quiet Stage",meta:"2024 · mixed media",desc:"사건이 지나간 자리의 공기만 남겨두는 연습.\n보이지 않는 움직임을 표면에 기록한다."},
  {id:"photo12",src:"images/photo12.jpg",title:"Blue Object Study",meta:"2023 · object & paper",desc:"빛을 머금은 사물은 장면이 된다.\n가장 단순한 형태가 가장 오래 남는다."},
  {id:"photo13",src:"images/photo13.jpg",title:"Soft Construction",meta:"2025 · installation draft",desc:"딱딱한 구조를 부드럽게 접어내는 방법.\n긴장과 여백이 동시에 존재하는 상태."},
  {id:"photo14",src:"images/photo14.jpg",title:"Afterimage Archive",meta:"2022 · printed matter",desc:"눈을 감아도 남는 잔상들을 모아두었다.\n기억은 언제나 인쇄물처럼 눌려 남는다."},
  {id:"photo15",src:"images/photo15.jpg",title:"Room Tone",meta:"2024 · texture study",desc:"공간이 가진 고유한 소리(룸톤)를 색으로 번역.\n말보다 먼저 도착하는 분위기."},
  {id:"photo16",src:"images/photo16.jpg",title:"Gesture Without Body",meta:"2025 · object composition",desc:"몸이 없는데도 제스처가 느껴지는 순간.\n사물은 배우처럼 표정을 가진다."},
  {id:"photo17",src:"images/photo17.jpg",title:"Edge of Light",meta:"2023 · acrylic & texture",desc:"빛의 가장자리에서 생기는 미세한 결을 확대한다.\n조용하지만 날카로운 장면."},
  {id:"photo18",src:"images/photo18.jpg",title:"Private Set Design",meta:"2022 · space study",desc:"나만을 위한 작은 세트.\n찍히지 않은 영화의 배경처럼 남겨진 공간."},
  {id:"photo19",src:"images/photo19.jpg",title:"Collected Silence",meta:"2024 · mixed media",desc:"말을 아낀 시간들의 축적.\n표면 위에 남은 침묵의 밀도."},
  {id:"photo20",src:"images/photo20.jpg",title:"Still Scene, Moving Heart",meta:"2025 · installation still",desc:"정지된 장면 속에서도 감정은 움직인다.\n최소한의 형태로 최대한의 기분을 남긴다."}
];

const video=document.getElementById("video1");
const header=document.getElementById("header");
const main=document.getElementById("main");
const masonry=document.getElementById("masonry");

const overlay=document.getElementById("overlay");
const closeBtn=document.getElementById("closeBtn");
const overlayImg=document.getElementById("overlayImg");
const overlayTitle=document.getElementById("overlayTitle");
const overlayMeta=document.getElementById("overlayMeta");
const overlayDesc=document.getElementById("overlayDesc");

let isMain=false;

/* ✅ 모바일용 영상 교체 (현재 index.html 구조는 source 2개라서 이 방식이 맞음) */
function setMobileVideo(){
  if(!video) return;
  const isMobile = window.matchMedia("(max-width:520px)").matches;
  if(!isMobile) return;
  if(video.getAttribute("data-mobile-set")==="1") return;

  const sources = video.querySelectorAll("source");
  if(!sources || sources.length===0) return;

  sources.forEach(s=>{
    const type=(s.getAttribute("type")||"").toLowerCase();
    if(type.includes("mp4")) s.setAttribute("src","images/video1-mobile.mp4");
    if(type.includes("webm")) s.setAttribute("src","images/video1-mobile.webm");
  });

  video.setAttribute("data-mobile-set","1");
  video.load();
}

/* ✅ iOS Safari columns(masonry) 첫 카드 실종/깜빡임 fix */
function fixMasonryIOS(){
  if(!masonry) return;

  masonry.style.webkitTransform="translateZ(0)";
  masonry.style.transform="translateZ(0)";
  masonry.style.webkitBackfaceVisibility="hidden";
  masonry.style.backfaceVisibility="hidden";
  masonry.offsetHeight;

  const firstCard=masonry.querySelector(".card");
  if(firstCard){
    firstCard.style.webkitTransform="translateZ(0)";
    firstCard.style.transform="translateZ(0)";
    firstCard.style.webkitBackfaceVisibility="hidden";
    firstCard.style.backfaceVisibility="hidden";
    firstCard.offsetHeight;
  }

  requestAnimationFrame(()=>{
    masonry.style.webkitTransform="";
    masonry.style.transform="";
    if(firstCard){
      firstCard.style.webkitTransform="";
      firstCard.style.transform="";
    }
  });
}

function showMain(){
  if(isMain) return;
  isMain=true;
  header.classList.remove("is-hidden");
  main.classList.remove("is-hidden");

  // ✅ 메인이 나타나는 순간 iOS bug가 터지기 쉬움 -> 강제 reflow
  setTimeout(fixMasonryIOS, 80);
  setTimeout(fixMasonryIOS, 260);
  setTimeout(fixMasonryIOS, 900);
}

function buildMasonry(){
  masonry.innerHTML=data.map((d,i)=>`
    <article class="card" data-i="${i}">
      <div class="thumb"><img loading="lazy" src="${d.src}" alt="${d.title}"></div>
    </article>
  `).join("");

  masonry.querySelectorAll(".card").forEach(card=>{
    const i=+card.dataset.i;

    // 큐레이션된 비대칭(조형적으로)
    if(i===0||i===10) card.classList.add("is-hero");        // photo1, photo11
    if(i===2||i===7||i===14) card.classList.add("is-tall"); // photo3,8,15
    if(i===4||i===12||i===18) card.classList.add("is-wide");// photo5,13,19
    if(i===6||i===16) card.classList.add("is-square");      // photo7,17

    card.addEventListener("click",()=>openDetail(i));
  });

  // masonry 구성 직후에도 한번
  setTimeout(fixMasonryIOS, 60);
}

function openDetail(i){
  const d=data[i];
  document.body.classList.add("is-focus");

  masonry.querySelectorAll(".card").forEach(c=>c.classList.remove("is-active"));
  const active=masonry.querySelector(`.card[data-i="${i}"]`);
  if(active) active.classList.add("is-active");

  overlayImg.src=d.src;
  overlayTitle.textContent=d.title||"";
  overlayMeta.textContent=d.meta||"";
  overlayDesc.textContent=d.desc||"";

  overlay.classList.remove("is-hidden");
  overlay.setAttribute("aria-hidden","false");
}

function closeDetail(){
  document.body.classList.remove("is-focus");
  masonry.querySelectorAll(".card").forEach(c=>c.classList.remove("is-active"));
  overlay.classList.add("is-hidden");
  overlay.setAttribute("aria-hidden","true");
  overlayImg.src="";
}

overlay.addEventListener("click",(e)=>{if(e.target===overlay) closeDetail();});
closeBtn.addEventListener("click",closeDetail);
window.addEventListener("keydown",(e)=>{if(e.key==="Escape") closeDetail();});

function onIntroEnd(){
  showMain();
  try{video.pause();}catch(e){}
  document.removeEventListener("click",skipIntro,true);
  document.removeEventListener("touchstart",skipIntro,true);
}

function skipIntro(e){
  if(isMain) return;
  onIntroEnd();
}

async function boot(){
  buildMasonry();

  // ✅ 모바일 비디오 교체
  setMobileVideo();

  try{await video.play();}catch(e){}
  video.addEventListener("ended",onIntroEnd,{once:true});
  video.addEventListener("timeupdate",()=>{
    if(video.duration && video.currentTime>=video.duration-0.06) onIntroEnd();
  });

  // 인트로 스킵
  document.addEventListener("click",skipIntro,true);
  document.addEventListener("touchstart",skipIntro,true);
}
boot();

window.addEventListener("load",()=>{
  setTimeout(fixMasonryIOS,50);
  setTimeout(fixMasonryIOS,250);
  setTimeout(fixMasonryIOS,900);
});

window.addEventListener("resize",()=>{
  setMobileVideo();
  setTimeout(fixMasonryIOS,120);
});

window.addEventListener("orientationchange",()=>{
  setMobileVideo();
  setTimeout(fixMasonryIOS,200);
});

document.querySelectorAll('[data-car]').forEach(function(c){
  var t=c.querySelector('.track'),dots=c.querySelectorAll('.dots span'),n=dots.length;
  function idx(){return Math.round(t.scrollLeft/t.clientWidth)}
  function go(i){i=(i+n)%n;t.scrollTo({left:i*t.clientWidth,behavior:'smooth'})}
  c.querySelector('.prev').addEventListener('click',function(){go(idx()-1)});
  c.querySelector('.next').addEventListener('click',function(){go(idx()+1)});
  t.addEventListener('scroll',function(){var i=idx();dots.forEach(function(d,j){d.classList.toggle('on',j===i)})},{passive:true});
});
(function(){
  var KEY=document.body.dataset.packKey||'pack:'+location.pathname,saved={};
  try{saved=JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){}
  function save(){try{localStorage.setItem(KEY,JSON.stringify(saved))}catch(e){}}
  var boxes=document.querySelectorAll('.box.chk');
  function count(b){b.querySelector('h3 .cnt').textContent=b.querySelectorAll('li[aria-checked="true"]').length+' / '+b.querySelectorAll('li').length}
  boxes.forEach(function(b){
    var c=document.createElement('span');c.className='cnt';b.querySelector('h3').appendChild(c);
    b.querySelectorAll('li').forEach(function(li){
      var id=li.textContent.trim();
      li.setAttribute('role','checkbox');li.tabIndex=0;li.setAttribute('aria-checked',saved[id]?'true':'false');
      function tog(){var v=li.getAttribute('aria-checked')!=='true';li.setAttribute('aria-checked',v);if(v)saved[id]=1;else delete saved[id];save();count(b)}
      li.addEventListener('click',tog);
      li.addEventListener('keydown',function(e){if(e.key===' '||e.key==='Enter'){e.preventDefault();tog()}});
    });
    count(b);
  });
  var reset=document.getElementById('packReset');
  if(reset)reset.addEventListener('click',function(){
    saved={};save();document.querySelectorAll('.box.chk li').forEach(function(li){li.setAttribute('aria-checked','false')});boxes.forEach(count);
  });
})();
(function(){
  var links=[].slice.call(document.querySelectorAll('nav.days a')),nav=document.querySelector('nav.days'),last=null;
  var secs=links.map(function(a){return document.getElementById(a.getAttribute('href').slice(1))});
  function upd(){
    var y=window.scrollY+90,cur=-1;
    secs.forEach(function(s,i){if(s&&s.offsetTop<=y)cur=i});
    if(cur===last)return;last=cur;
    links.forEach(function(a,i){a.classList.toggle('on',i===cur)});
    if(cur>=0){var a=links[cur];nav.scrollTo({left:a.offsetLeft-nav.clientWidth/2+a.offsetWidth/2})}
  }
  window.addEventListener('scroll',upd,{passive:true});upd();
})();

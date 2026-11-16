// Hip-Hop 训练营 — 数据 + 打卡（全部存在本机 localStorage，不上传）
const MOVES = [
  {id:'bounce', name:'Bounce 律动', en:'Bounce / Groove', cat:'groove', catLabel:'律动', level:'★ 入门', video:'videos/bounce.mp4',
   desc:'所有 Hip-Hop 的地基。膝盖一屈一伸，胸口跟着上下弹，身体先找到拍子。',
   points:['膝盖微屈，重心在脚掌，不要锁死膝盖','胸口下沉时呼气，弹起时吸气，跟着鼓点走','肩膀放松，不要耸肩；手臂自然摆'],
   steps:['双脚与肩同宽，膝盖微屈','数 1、2、3、4，每拍膝盖屈一下、胸口沉一下','先慢速 8 拍，再跟正常速度，连续做 1 分钟不停'],
   mistake:'只动膝盖、胸口不动，看起来像在蹲起。胸口一定要跟着沉。',
   drill:'Bounce 连续 2 分钟 × 3 组，组间休息 30 秒。'},
  {id:'two-step', name:'Two-Step 两步', en:'Two-Step', cat:'groove', catLabel:'律动', level:'★ 入门', video:'videos/two-step.mp4',
   desc:'最常用的走位律动，左右换重心，跳舞时 80% 的时间都在用它过渡。',
   points:['重心左右换，不要两只脚同时用力','换重心时膝盖跟着屈，身体保持 Bounce','脚步小一点、稳一点，越稳越好看'],
   steps:['左脚向左一步，重心移到左脚','右脚跟上，重心移回中间，再向右一步','左右交替，配上 Bounce，8 拍为一组'],
   mistake:'步子迈太大、重心晃。先小步练稳，再放大。',
   drill:'左右 Two-Step 各 8 拍，连续 3 分钟。'},
  {id:'top-rock', name:'Top Rock', en:'Top Rock', cat:'foot', catLabel:'脚下', level:'★★ 进阶', video:'videos/top-rock.mp4',
   desc:'Breaking 的站立起手式，脚下交叉、前后，边走边跳，Battle 开场必用。',
   points:['脚步交叉时重心要稳，别摔','手臂跟着脚步摆，上下半身要合拍','先慢，再快；快了乱就退回慢速'],
   steps:['右脚向前一步，左脚交叉到右脚后','右脚退回，左脚向前，交替进行','加入手臂摆动，4 拍一个循环'],
   mistake:'只顾脚忘了手，或者手脚各跳各的。先手脚分开练，再合。',
   drill:'慢速 Top Rock 1 分钟 × 4 组。'},
  {id:'body-roll', name:'Body Roll 身体波浪', en:'Body Roll', cat:'body', catLabel:'身体控制', level:'★★ 进阶', video:'videos/body-roll.mp4',
   desc:'胸 → 腹 → 髋依次推出去的波浪，练身体的分离控制，跳起来很顺滑。',
   points:['一次只动一个部位：胸推出去，腹再推，髋最后','腰不要塌，核心收紧','从慢速开始，波浪要连贯不断'],
   steps:['胸口向前推，保持 1 拍','腹部向前推，胸口收回','髋向前推，腹部收回，形成一波'],
   mistake:'胸腹髋一起动，变成前后晃。分开练：只练胸 10 次，再加腹。',
   drill:'Body Roll 慢速 10 次 × 3 组。'},
  {id:'arm-wave', name:'Arm Wave 手臂波浪', en:'Arm Wave', cat:'arm', catLabel:'手臂', level:'★★ 进阶', video:'videos/arm-wave.mp4',
   desc:'波浪从一只手传到另一只手，Popping 里最经典的视觉动作。',
   points:['波浪是“传”过去的，不是两只手一起抬','手腕、肘、肩依次动，顺序不能乱','另一只手等波浪到了再动'],
   steps:['左手抬起，手腕先弯','波浪传到手肘，再到肩膀、胸口','传到右肩、右肘、右手腕，右手抬起'],
   mistake:'两只手同时动，波浪就断了。盯着镜子，只练左臂到胸口这一段。',
   drill:'左→右 Wave 10 次，右→左 10 次，× 3 组。'},
  {id:'chest-pop', name:'Chest Pop 胸震', en:'Chest Pop / Hit', cat:'body', catLabel:'身体控制', level:'★★★ 进阶', video:'videos/chest-pop.mp4',
   desc:'胸口突然向前一震，卡在鼓点上，Popping 的 Hit 感就来自这里。',
   points:['震是“弹”出去再收回，不是顶住不动','发力在胸口，不是脖子前伸','卡在重拍上：听到“咚”就震一下'],
   steps:['站直，肩膀放松，核心收紧','胸口快速向前弹出，马上收回','跟着音乐，每 2 拍震一次，再试每 1 拍'],
   mistake:'用脖子往前顶，或者全身一起抖。先靠墙练：背贴墙，只动胸。',
   drill:'每 2 拍一震，连续 1 分钟 × 3 组。'},
];

const WEEKS = [
 {n:1, title:'第 1 周 · 找到律动', focus:'Bounce + Two-Step',
  days:[
   {d:'周一', title:'律动基础', dur:30, moves:['bounce','two-step'], desc:'热身 5 分钟 → Bounce 10 分钟 → Two-Step 10 分钟 → 跟音乐自由律动 5 分钟。', steps:['看 Bounce 视频 2 遍，跟练 10 分钟','看 Two-Step 视频 2 遍，跟练 10 分钟','放一首 90 BPM 的歌，只用这两个动作跳 5 分钟']},
   {d:'周二', title:'律动 + 换重心', dur:35, moves:['bounce','two-step'], desc:'把昨天的两个动作连起来，左右移动，练稳。', steps:['热身 + Bounce 复习 5 分钟','Two-Step 左右移动练习 15 分钟','Bounce + Two-Step 交替 10 分钟']},
   {d:'周三', title:'休息 · 拉伸', dur:15, rest:true, moves:[], desc:'只拉伸，不练新动作。髋、腿、肩各拉 20 秒，听歌找拍子。', steps:['全身拉伸 10 分钟','听 2 首 Hip-Hop，数拍子、点头打拍']},
   {d:'周四', title:'身体控制入门', dur:35, moves:['body-roll','chest-pop'], desc:'第一次练身体分离，先慢，胸腹分开动。', steps:['看 Body Roll 视频，跟练 15 分钟','看 Chest Pop 视频，靠墙练 10 分钟','两个动作各做 5 分钟，慢速']},
   {d:'周五', title:'手臂波浪', dur:35, moves:['arm-wave','bounce'], desc:'Wave + Bounce 结合，上半身动起来。', steps:['Arm Wave 分段练 15 分钟','Bounce 保持住，再加 Wave 10 分钟','跟音乐完整做 5 分钟']},
   {d:'周六', title:'本周组合', dur:40, moves:['bounce','two-step','body-roll'], desc:'把本周 3 个动作串成 8 拍 × 4 的小组合。', steps:['每个动作复习 5 分钟','串组合：Bounce 4 拍 → Two-Step 4 拍 → Body Roll 4 拍','完整跳 5 遍，录下来自己看一遍']},
   {d:'周日', title:'休息 · 复盘', dur:10, rest:true, moves:[], desc:'休息一天。看看周六录的视频，记下 1 个最想改的点。', steps:['看一遍自己的练习视频','写下 1 个下周要改的点','拉伸 10 分钟']},
  ]},
 {n:2, title:'第 2 周 · 身体控制', focus:'Body Roll + Chest Pop',
  days:[
   {d:'周一', title:'Body Roll 进阶', dur:35, moves:['body-roll','bounce'], desc:'波浪加快、加大幅度，配上 Bounce。', steps:['Body Roll 慢速复习 5 分钟','加速练习 15 分钟','Bounce + Body Roll 结合 10 分钟']},
   {d:'周二', title:'Chest Pop 卡点', dur:35, moves:['chest-pop','two-step'], desc:'胸震卡在重拍上，练 Hit 的感觉。', steps:['靠墙 Chest Pop 10 分钟','跟音乐每 2 拍一震 10 分钟','Two-Step 走位 + 胸震 10 分钟']},
   {d:'周三', title:'休息 · 拉伸', dur:15, rest:true, moves:[], desc:'拉伸 + 听歌数拍。', steps:['全身拉伸 10 分钟','听歌，听到重拍点头']},
   {d:'周四', title:'Wave + Roll 串联', dur:35, moves:['arm-wave','body-roll'], desc:'手臂波浪接身体波浪，整条波浪线。', steps:['Arm Wave 复习 10 分钟','Body Roll 复习 10 分钟','Wave → Roll 连起来 10 分钟']},
   {d:'周五', title:'身体控制综合', dur:35, moves:['body-roll','chest-pop','arm-wave'], desc:'三个身体动作轮换，练切换。', steps:['每个动作 5 分钟轮换','两两组合各练 5 分钟','跟音乐自由组合 5 分钟']},
   {d:'周六', title:'本周组合', dur:40, moves:['body-roll','chest-pop','two-step'], desc:'8 拍 × 4 组合，加入胸震卡点。', steps:['组合排练 20 分钟','完整跳 5 遍','录视频，挑 1 个细节改']},
   {d:'周日', title:'休息 · 复盘', dur:10, rest:true, moves:[], desc:'休息，复盘。', steps:['看视频，记 1 个改进点','拉伸 10 分钟']},
  ]},
 {n:3, title:'第 3 周 · 脚下功夫', focus:'Top Rock + Two-Step',
  days:[
   {d:'周一', title:'Top Rock 入门', dur:35, moves:['top-rock','bounce'], desc:'第一次练 Top Rock，慢速，手脚合拍。', steps:['看 Top Rock 视频 2 遍','慢速分步练 15 分钟','加 Bounce 练 10 分钟']},
   {d:'周二', title:'Top Rock 加速', dur:35, moves:['top-rock','two-step'], desc:'提速，脚步和 Two-Step 切换。', steps:['Top Rock 慢→快 15 分钟','Top Rock + Two-Step 切换 10 分钟','跟音乐 5 分钟']},
   {d:'周三', title:'休息 · 拉伸', dur:15, rest:true, moves:[], desc:'拉伸，重点拉小腿和髋。', steps:['拉伸 10 分钟','原地 Top Rock 慢速 5 分钟（不累版）']},
   {d:'周四', title:'脚下 + 胸震', dur:35, moves:['top-rock','chest-pop'], desc:'脚下不停，胸口卡点。', steps:['Top Rock 复习 10 分钟','加 Chest Pop 卡点 15 分钟','跟音乐 5 分钟']},
   {d:'周五', title:'脚下 + 波浪', dur:35, moves:['top-rock','arm-wave','body-roll'], desc:'上下半身同时动，最难的一天，慢一点没关系。', steps:['Top Rock + Arm Wave 15 分钟','Top Rock + Body Roll 10 分钟','完整跟音乐 5 分钟']},
   {d:'周六', title:'本周组合', dur:40, moves:['top-rock','two-step','chest-pop'], desc:'开场 Top Rock 8 拍，接 Two-Step + 胸震。', steps:['组合排练 20 分钟','完整跳 5 遍','录视频复盘']},
   {d:'周日', title:'休息 · 复盘', dur:10, rest:true, moves:[], desc:'休息，复盘。', steps:['看视频，记 1 个改进点','拉伸 10 分钟']},
  ]},
 {n:4, title:'第 4 周 · 串成一支舞', focus:'6 个动作全串联',
  days:[
   {d:'周一', title:'全动作复习', dur:35, moves:['bounce','two-step','top-rock','body-roll','arm-wave','chest-pop'], desc:'6 个动作每个 5 分钟，找回手感。', steps:['每个动作复习 5 分钟','挑最弱的 1 个加练 5 分钟']},
   {d:'周二', title:'排组合 · 上半段', dur:40, moves:['top-rock','two-step','chest-pop'], desc:'排 32 拍组合的前 16 拍。', steps:['前 16 拍排练 20 分钟','跟音乐跳 5 遍']},
   {d:'周三', title:'休息 · 拉伸', dur:15, rest:true, moves:[], desc:'拉伸，保存体力。', steps:['全身拉伸 10 分钟','听组合用的音乐，脑子里过一遍动作']},
   {d:'周四', title:'排组合 · 下半段', dur:40, moves:['body-roll','arm-wave','bounce'], desc:'排后 16 拍，Wave + Roll 收尾。', steps:['后 16 拍排练 20 分钟','前后连起来跳 5 遍']},
   {d:'周五', title:'完整彩排', dur:40, moves:['bounce','two-step','top-rock','body-roll','arm-wave','chest-pop'], desc:'32 拍完整组合，从头到尾。', steps:['完整跳 5 遍','录视频，挑 2 个细节改','再跳 3 遍']},
   {d:'周六', title:'成果展示', dur:40, moves:['bounce','two-step','top-rock','body-roll','arm-wave','chest-pop'], desc:'完整跳一遍，录下来。这就是 4 周的成果。', steps:['热身 5 分钟','完整跳 3 遍，录最好的一遍','打卡，写下 4 周感受']},
   {d:'周日', title:'休息 · 下一步', dur:10, rest:true, moves:[], desc:'休息一天。下一步可以：换一首歌排新组合，或把每个动作再练深一轮。', steps:['看成果视频','决定下个 4 周的目标','拉伸 10 分钟']},
  ]},
];

const KEY='hiphop_checkins_v1';
const getData=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){return{}}};
const saveData=d=>localStorage.setItem(KEY,JSON.stringify(d));
const fmt=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const moveById=id=>MOVES.find(m=>m.id===id);
let currentWeek=1, calCursor=new Date(), moveFilter='all';

function streakInfo(){
  const data=getData(); let s=0; const t=new Date();
  if(!data[fmt(t)]) t.setDate(t.getDate()-1);
  while(data[fmt(t)]){s++; t.setDate(t.getDate()-1);}
  let best=0, cur=0; const dates=Object.keys(data).sort();
  let prev=null;
  dates.forEach(ds=>{const d=new Date(ds+'T12:00:00'); if(prev && (d-prev)/86400000===1){cur++}else{cur=1} best=Math.max(best,cur); prev=d;});
  return {streak:s, best, total:dates.length, totalMin:dates.reduce((a,k)=>a+(data[k]||30),0)};
}
function renderToday(){
  const now=new Date(); const jsDay=now.getDay(); // 0 Sun
  const idx=jsDay===0?6:jsDay-1;
  const week=WEEKS[currentWeek-1]; const day=week.days[idx];
  document.getElementById('todayDate').textContent=now.getFullYear()+'年'+(now.getMonth()+1)+'月'+now.getDate()+'日 · '+day.d+' · '+week.title;
  document.getElementById('todayTitle').textContent=day.title;
  document.getElementById('todayDuration').textContent=day.dur+' 分钟';
  document.getElementById('todayDesc').textContent=day.desc;
  document.getElementById('todayMoves').innerHTML=day.moves.map(id=>{const m=moveById(id); return '<span class="chip" onclick="openMove(\''+id+'\')">🎬 '+m.name+'</span>'}).join(' ')||'<span class="muted">今天休息，好好拉伸。</span>';
  document.getElementById('todaySteps').innerHTML=day.steps.map(s=>'<li>'+s+'</li>').join('');
  const data=getData(); const done=!!data[fmt(now)];
  const btn=document.getElementById('checkinBtn');
  btn.textContent=done?'✓ 今天已打卡':'✓ 今日打卡 · 完成训练';
  btn.classList.toggle('done',done);
  document.getElementById('checkinState').textContent=done?'已打卡 '+day.dur+' 分钟，继续保持！':'还没打卡，练完点一下，连续天数 +1';
  const info=streakInfo();
  document.getElementById('streakNum').textContent=info.streak;
  // week progress
  const monday=new Date(now); monday.setDate(now.getDate()-idx);
  document.getElementById('weekProgress').innerHTML=week.days.map((d,i)=>{const dt=new Date(monday); dt.setDate(monday.getDate()+i); const dd=!!data[fmt(dt)]; return '<div class="wp-day '+(dd?'done':'')+' '+(i===idx?'today':'')+'"><b>'+d.d+'</b>'+(dd?'✅':'·')+'<br>'+d.dur+'′</div>'}).join('');
  document.getElementById('offlineState').textContent=navigator.onLine?'● 在线 · 视频已可缓存离线':'● 离线中 · 已缓存的内容照常可用';
}
function renderPlan(){
  document.getElementById('weekSwitch').innerHTML=WEEKS.map(w=>'<button class="'+(w.n===currentWeek?'active':'')+'" onclick="setWeek('+w.n+')">'+w.title+'</button>').join('');
  const w=WEEKS[currentWeek-1];
  document.getElementById('planList').innerHTML=w.days.map(d=>'<div class="card day '+(d.rest?'rest':'')+'"><h4>'+d.d+' · '+d.title+' <span class="pill" style="float:right">'+d.dur+' 分钟</span></h4><p>'+d.desc+'</p>'+(d.moves.length?'<div class="moves">'+d.moves.map(id=>'<span class="chip" onclick="openMove(\''+id+'\')">🎬 '+moveById(id).name+'</span>').join('')+'</div>':'')+'<ol class="steps">'+d.steps.map(s=>'<li>'+s+'</li>').join('')+'</ol></div>').join('');
}
function renderMoves(){
  const list=MOVES.filter(m=>moveFilter==='all'||m.cat===moveFilter);
  document.getElementById('moveList').innerHTML=list.map(m=>'<article class="move" onclick="openMove(\''+m.id+'\')"><video src="'+m.video+'" preload="metadata" muted playsinline></video><div class="move-body"><h4>'+m.name+' <span>'+m.en+'</span></h4><p>'+m.desc+'</p><div class="tags"><span class="tag y">'+m.catLabel+'</span><span class="tag">'+m.level+'</span><span class="tag">▶ 点开看视频+要点</span></div></div></article>').join('');
}
function openMove(id){
  const m=moveById(id); if(!m) return;
  document.getElementById('sheetContent').innerHTML=
   '<video src="'+m.video+'" controls autoplay loop playsinline preload="auto"></video>'+
   '<h2 style="margin-top:12px">'+m.name+' <span style="color:var(--muted);font-size:14px">'+m.en+' · '+m.level+'</span></h2>'+
   '<p class="muted">'+m.desc+'</p>'+
   '<h3>要点</h3><ul class="clean">'+m.points.map(p=>'<li>'+p+'</li>').join('')+'</ul>'+
   '<h3>分步跟练</h3><ol class="steps">'+m.steps.map(s=>'<li>'+s+'</li>').join('')+'</ol>'+
   '<div class="card tip"><strong>常犯错误</strong><p>'+m.mistake+'</p><strong>今日练习量</strong><p>'+m.drill+'</p></div>';
  document.getElementById('sheet').hidden=false;
}
function closeSheet(){document.getElementById('sheet').hidden=true; const v=document.querySelector('#sheetContent video'); if(v) v.pause();}
function renderCal(){
  const y=calCursor.getFullYear(), mo=calCursor.getMonth();
  document.getElementById('calTitle').textContent=y+'年'+(mo+1)+'月';
  const data=getData();
  const first=new Date(y,mo,1); let startIdx=(first.getDay()+6)%7;
  const days=new Date(y,mo+1,0).getDate(); const prevDays=new Date(y,mo,0).getDate();
  let html='';
  for(let i=0;i<startIdx;i++){html+='<button class="other" disabled>'+(prevDays-startIdx+1+i)+'</button>'}
  const today=new Date();
  for(let d=1;d<=days;d++){const dt=new Date(y,mo,d); const k=fmt(dt); const isT=fmt(today)===k;
    html+='<button class="'+(data[k]?'done':'')+' '+(isT?'today':'')+'" onclick="toggleDay(\''+k+'\')">'+d+'</button>'}
  document.getElementById('calendar').innerHTML=html;
  const info=streakInfo();
  document.getElementById('totalDays').textContent=info.total;
  document.getElementById('totalMin').textContent=info.totalMin;
  document.getElementById('streak2').textContent=info.best;
  //本周
  const now=new Date(); const idx=now.getDay()===0?6:now.getDay()-1; const mon=new Date(now); mon.setDate(now.getDate()-idx);
  document.getElementById('checkinWeek').innerHTML=WEEKS[currentWeek-1].days.map((d,i)=>{const dt=new Date(mon); dt.setDate(mon.getDate()+i); return '<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--line)"><span>'+d.d+' · '+d.title+'</span><span>'+(data[fmt(dt)]?'✅ 已打卡':'—')+'</span></div>'}).join('');
}
function toggleDay(k){const d=getData(); if(d[k]) delete d[k]; else d[k]=30; saveData(d); renderAll();}
function setWeek(n){currentWeek=n; renderToday(); renderPlan();}
function renderAll(){renderToday(); renderPlan(); renderMoves(); renderCal();}

// tabs
document.querySelectorAll('.bottom-nav button').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.bottom-nav button').forEach(x=>x.classList.remove('active')); b.classList.add('active');
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('tab-'+b.dataset.tab).classList.add('active');
  window.scrollTo({top:0});
}));
document.querySelectorAll('#moveFilter button').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('#moveFilter button').forEach(x=>x.classList.remove('active')); b.classList.add('active'); moveFilter=b.dataset.f; renderMoves();
}));
document.getElementById('checkinBtn').addEventListener('click',()=>{
  const now=new Date(); const data=getData(); const k=fmt(now);
  if(data[k]){delete data[k];} else {const idx=now.getDay()===0?6:now.getDay()-1; data[k]=WEEKS[currentWeek-1].days[idx].dur||30;}
  saveData(data); renderAll();
});
document.getElementById('prevMonth').addEventListener('click',()=>{calCursor.setMonth(calCursor.getMonth()-1); renderCal();});
document.getElementById('nextMonth').addEventListener('click',()=>{calCursor.setMonth(calCursor.getMonth()+1); renderCal();});
document.getElementById('resetBtn').addEventListener('click',()=>{if(confirm('确定清空全部打卡记录吗？')){localStorage.removeItem(KEY); renderAll();}});
document.getElementById('sheetClose').addEventListener('click',closeSheet);
document.getElementById('sheetBg').addEventListener('click',closeSheet);
window.addEventListener('online',renderToday); window.addEventListener('offline',renderToday);
window.openMove=openMove; window.setWeek=setWeek; window.toggleDay=toggleDay;
renderAll();

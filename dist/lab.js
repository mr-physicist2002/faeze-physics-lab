import {STATIONS,ACT_COUNT,LEGENDS} from './stations.js';
import {LabState} from './lab-state.js';
import {drawLab} from './lab-renderer.js';
import {clamp} from './physics.js';
const $=id=>document.getElementById(id);
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
export function initLab({show,onEnding}){
 let state=null,si=0,ai=0,w=800,h=460,dragging=false,calm=false,uiClock=0,lastCompleted=false,completed=new Set();
 const canvas=$('lab-canvas'),ctx=canvas.getContext('2d'),sliders=new Map();
 try{const saved=JSON.parse(localStorage.getItem('faeze-lab-v3')||'[]');if(Array.isArray(saved))completed=new Set(saved.filter(id=>STATIONS.some(s=>s.acts.some(a=>a.id===id))));}catch{}
 const persist=()=>{try{localStorage.setItem('faeze-lab-v3',JSON.stringify([...completed]));}catch{}};
 const countStation=i=>STATIONS[i].acts.filter(a=>completed.has(a.id)).length;
 function refreshProgress(){
  $('lab-progress').textContent=`${completed.size} / ${ACT_COUNT}`;$('atlas-progress').textContent=`${completed.size} of ${ACT_COUNT} experiments discovered`;
  document.querySelectorAll('[data-station]').forEach(b=>{const i=Number(b.dataset.station);b.classList.toggle('room-done',countStation(i)===STATIONS[i].acts.length);b.setAttribute('aria-label',`${STATIONS[i].name}, ${countStation(i)} of ${STATIONS[i].acts.length} discovered`);});
 }
 function atlas(){
  $('room-grid').replaceChildren();STATIONS.forEach((room,i)=>{
   const b=document.createElement('button');b.className='room-card';b.dataset.station=i;b.innerHTML=`<canvas aria-hidden="true" width="420" height="250"></canvas><div class="room-copy"><small>0${i+1}</small><h3>${room.name}</h3><p>${room.acts.length} experiments <span>↗</span></p></div>`;b.onclick=()=>open(i);$('room-grid').append(b);
   const preview=new LabState(i,0);drawLab(b.querySelector('canvas').getContext('2d'),420,250,preview,{calm:true,thumb:true});
  });refreshProgress();
 }
 function navigation(){
  $('room-nav').replaceChildren();STATIONS.forEach((room,i)=>{const b=document.createElement('button');b.className='room-nav-item';b.dataset.station=i;b.textContent=`${i+1}. ${room.name}`;b.onclick=()=>open(i);$('room-nav').append(b);});
 }
 function resize(){if(!state)return;const r=canvas.getBoundingClientRect();if(!r.width||!r.height)return;w=r.width;h=r.height;const d=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(w*d);canvas.height=Math.round(h*d);ctx.setTransform(d,0,0,d,0,0);drawLab(ctx,w,h,state,{calm});}
 function setState(roomIndex,actIndex,demo=false){
  si=roomIndex;ai=actIndex;state=new LabState(si,ai,{demo});lastCompleted=false;const room=STATIONS[si],act=state.act;
  window.scrollTo({top:0,behavior:'instant'});document.documentElement.style.setProperty('--room-color',room.color);
  $('lab-room-number').textContent=`ROOM ${si+1} OF 7`;$('lab-room-title').textContent=room.name;$('experiment-name').textContent=act.short;$('experiment-hint').textContent=act.hint;
  $('experiment-formula').innerHTML=act.formula;$('experiment-secondary').innerHTML=act.secondary;
  $('symbol-legend').innerHTML=(LEGENDS[act.id]||[]).map(([symbol,label])=>`<span><b>${escape(symbol)}</b><small>${label}</small></span>`).join('');
  $('model-note').textContent=act.model;$('experiment-action').textContent=act.action;$('lab-speed').textContent='1×';
  $('next-experiment').textContent=ai<room.acts.length-1?'Next experiment →':si<6?'Next room →':'A little more wonder ♡';
  $('experiment-tabs').replaceChildren();room.acts.forEach((a,j)=>{const b=document.createElement('button');b.className='experiment-tab';b.classList.toggle('active',j===ai);b.textContent=a.short;b.setAttribute('aria-pressed',String(j===ai));b.onclick=()=>setState(si,j);$('experiment-tabs').append(b);});
  $('lab-controls').replaceChildren();sliders.clear();act.controls.forEach(cfg=>{
   const wrapper=document.createElement('label');wrapper.className=`parameter ${cfg.color}`;wrapper.innerHTML=`<div class="parameter-heading"><span><b>${escape(cfg.symbol)}</b> ${escape(cfg.label)}</span><output>${cfg.value}</output></div><input type="range" id="param-${cfg.key}" min="${cfg.min}" max="${cfg.max}" step="${cfg.step}" value="${cfg.value}" aria-label="${escape(cfg.label)}"><div class="parameter-scale"><span>${cfg.min}</span><small>${escape(cfg.unit)}</small><span>${cfg.max}</span></div>`;
   const input=wrapper.querySelector('input');input.oninput=()=>{state.set(cfg.key,input.value);updateUI();};sliders.set(cfg.key,{input,output:wrapper.querySelector('output')});$('lab-controls').append(wrapper);
  });
  $('live-readouts').innerHTML=state.metrics().map(([symbol,,unit],i)=>`<div class="live-reading"><small>${escape(symbol)}</small><strong id="metric-${i}"></strong><span>${escape(unit)}</span></div>`).join('');
  document.querySelectorAll('#room-nav [data-station]').forEach(b=>{b.classList.toggle('active',Number(b.dataset.station)===si);b.setAttribute('aria-pressed',String(Number(b.dataset.station)===si));});
  updateUI();resize();
 }
 function open(roomIndex,actIndex=0){show('lab');setState(roomIndex,actIndex);}
 function updateUI(){if(!state)return;
  $('demo-label').textContent=state.demo?'Preview':'Explore';$('take-control').classList.toggle('hidden',!state.demo);
  $('lab-toggle').textContent=state.playing?'Pause':'Play';$('lab-toggle').setAttribute('aria-label',state.playing?'Pause experiment':'Play experiment');
  for(const [key,item]of sliders){const cfg=state.act.controls.find(c=>c.key===key);item.input.value=String(state.values[key]);item.output.textContent=Number(state.values[key]).toFixed(cfg.step<.1?2:cfg.step<1?1:0);}
  if(state.act.id==='circuit')$('experiment-formula').innerHTML=state.flags.closed?state.act.formula:'<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mi>I</mi><mo>=</mo><mn>0</mn><mtext>&nbsp; (open)</mtext></math>';
  if(state.act.id==='slit')$('experiment-formula').innerHTML=state.flags.detector?'<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>P(y)</mi><mo>∝</mo><msup><mrow><mo>|</mo><msub><mi>ψ</mi><mn>1</mn></msub><mo>|</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>|</mo><msub><mi>ψ</mi><mn>2</mn></msub><mo>|</mo></mrow><mn>2</mn></msup></mrow></math>':state.act.formula;
  state.metrics().forEach(([,value],i)=>{const out=$(`metric-${i}`);if(out)out.textContent=typeof value==='number'?(Number.isInteger(value)?String(value):Math.abs(value)>=100?value.toFixed(0):(Math.abs(value)<.005?0:value).toFixed(2)):value;});
  $('discovery-checks').innerHTML=state.act.tasks.map((task,i)=>`<span class="discovery ${state.earned[i]?'earned':''}"><b>${state.earned[i]?'✓':'○'}</b>${escape(task.label)}</span>`).join('');
  $('experiment-action').classList.toggle('active',!!state.flags[state.act.actionFlag]);
  if(state.act.id==='entropy')$('experiment-action').textContent=state.flags.opened?'Reset preparation':'Remove partition';
  if(state.act.id==='circuit')$('experiment-action').textContent=state.flags.closed?'Open switch':'Close switch';
  if(state.act.id==='slit')$('experiment-action').textContent=state.flags.detector?'Turn detector off':'Turn detector on';
  if(state.complete&&!lastCompleted){completed.add(state.act.id);persist();refreshProgress();lastCompleted=true;}
 }
 $('lab-atlas').onclick=()=>{atlas();show('atlas');};$('atlas-enter').onclick=()=>open(0);
 $('experiment-action').onclick=()=>{state.actOn();updateUI();};$('take-control').onclick=()=>{state.stopDemo();updateUI();};
 $('lab-demo').onclick=()=>setState(si,ai,true);$('lab-reset').onclick=()=>setState(si,ai);
 $('lab-toggle').onclick=()=>{state.playing=!state.playing;updateUI();};
 $('lab-speed').onclick=()=>{state.speed=state.speed===1?.5:state.speed===.5?2:1;$('lab-speed').textContent=`${state.speed}×`;};
 $('next-experiment').onclick=()=>{if(ai<STATIONS[si].acts.length-1)setState(si,ai+1);else if(si<6)open(si+1);else onEnding(completed.size);};
 function at(e){const r=canvas.getBoundingClientRect();return{x:clamp((e.clientX-r.left)/r.width,0,1),y:clamp((e.clientY-r.top)/r.height,0,1)};}
 function interact(e){if(!state)return;const {x,y}=at(e);let key,value;switch(state.act.id){
  case'pendulum':state.stopDemo();state.interacted=true;state.theta=clamp((x-.38)*3,-.85,.85);state.omega=0;break;
  case'action':key='bend';value=(1.3-(y-.15)/.44*1.6)-.5;break;
  case'induction':key='magnet';value=(x-.5)/.15;state.flags.sweeping=false;break;
  case'gas':key='volume';value=(x-.13)/.72*1.5;break;
  case'questions':key='question';value=Math.min(2,Math.floor(x*3));break;
 }if(key)state.set(key,value);updateUI();}
 canvas.addEventListener('pointerdown',e=>{dragging=true;canvas.setPointerCapture(e.pointerId);interact(e);});canvas.addEventListener('pointermove',e=>{if(dragging)interact(e);});
 for(const event of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(event,()=>dragging=false);
 window.addEventListener('resize',resize);new ResizeObserver(resize).observe($('scene-shell'));document.addEventListener('visibilitychange',()=>dragging=false);
 navigation();atlas();return {open,atlas,resize,get state(){return state;},completed,update(dt,reduced=false){if(!state)return;calm=reduced;let left=Math.min(dt,.25);while(left>0){const slice=Math.min(.02,left);state.update(slice);left-=slice;}uiClock+=dt;if(uiClock>=.08){updateUI();uiClock=0;}drawLab(ctx,w,h,state,{calm});}};
}

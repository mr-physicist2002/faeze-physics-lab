import {STATIONS} from './stations.js';
import * as P from './physics.js';
export class LabState {
 constructor(stationIndex=0,actIndex=0,{random=Math.random,demo=false}={}){
  this.stationIndex=stationIndex;this.actIndex=actIndex;this.station=STATIONS[stationIndex];this.act=this.station.acts[actIndex];this.random=random;
  this.values=Object.fromEntries(this.act.controls.map(c=>[c.key,c.value]));this.flags={};this.earned=this.act.tasks.map(()=>false);this.visited=new Set([0]);
  this.time=0;this.demo=demo;this.demoTime=0;this.interacted=false;this.playing=true;this.speed=1;this.theta=.55;this.omega=0;
  this.particles=Array.from({length:100},()=>({x:this.act.id==='entropy'?random()*.5:random(),y:random(),vx:P.gaussian(random)*.12,vy:P.gaussian(random)*.12,vz:P.gaussian(random)*.12}));
  this.galaxyStars=Array.from({length:100},()=>({r:.12+random()*2.88,angle:random()*Math.PI*2,reference:0}));for(const s of this.galaxyStars)s.reference=s.angle;
  this.dots=[];this.emitClock=0;this.emission=0;this.transmitted=0;this.reflected=0;this.magnetPosition=this.values.magnet??0;this.magnetVelocity=0;this.emf=0;this.clockNear=0;this.mixedTime=0;this.cycle=0;this.flash=0;
 }
 get complete(){return this.earned.every(Boolean);}
 stopDemo(){this.demo=false;}
 resetCounts(){this.dots=[];this.emission=0;this.emitClock=0;this.transmitted=0;this.reflected=0;}
 set(key,value,{user=true}={}){
  const cfg=this.act.controls.find(c=>c.key===key);if(!cfg||!Number.isFinite(Number(value)))return;
  const next=Number(P.clamp(cfg.min+Math.round((Number(value)-cfg.min)/cfg.step)*cfg.step,cfg.min,cfg.max).toFixed(8));
  const old=this.values[key];this.values[key]=next;
  if(user){this.stopDemo();this.interacted=true;if(key==='bend'&&Math.abs(next)<.035)this.flags.stationary=true;if(key==='question'){this.visited.add(next);this.flags.questions=this.visited.size===3;}}
  if(next!==old){if(['wavelength','separation','energy','barrierWidth'].includes(key))this.resetCounts();if(key==='lambda'){this.time=0;this.playing=true;}if(key==='turns')this.emf=0;}
  if(user)this.checkTasks();
 }
 actOn(){
  this.stopDemo();this.interacted=true;
  switch(this.act.id){
   case'pendulum':this.theta=.55;this.omega=0;break;
   case'action':this.values.bend=0;this.flags.stationary=true;break;
   case'field':this.values.charge=-this.values.charge;break;
   case'induction':this.flags.sweeping=true;this.cycle=0;break;
   case'circuit':this.flags.closed=!this.flags.closed;break;
   case'entropy':if(this.flags.opened){this.flags.opened=false;this.mixedTime=0;for(const p of this.particles)p.x=this.random()*.5;}else this.flags.opened=true;break;
   case'slit':this.flags.detector=!this.flags.detector;this.resetCounts();break;
   case'well':this.values.n=1;break;
   case'galaxy':this.flags.compared=!this.flags.compared;break;
   case'scales':this.flags.overlay=!this.flags.overlay;break;
   default:this.time=0;this.clockNear=0;this.resetCounts();this.playing=true;
  }
  if(this.act.actionFlag&&!['closed','opened','detector','compared','overlay'].includes(this.act.actionFlag))this.flags[this.act.actionFlag]=true;
  this.flash=1;this.checkTasks();
 }
 checkTasks(){if(this.demo||!this.interacted)return;this.act.tasks.forEach((rule,i)=>{if(P.taskReached(rule,this.values,this.flags))this.earned[i]=true;});}
 update(dt){
  dt=P.clamp(dt,0,.1);this.flash=Math.max(0,this.flash-dt);if(!this.playing)return;dt*=this.speed;if(!dt)return;this.time+=dt;
  const v=this.values,id=this.act.id;
  if(this.demo){
   this.demoTime+=dt;const t=this.demoTime,c=this.act.controls[0];if(c)this.set(c.key,c.min+(c.max-c.min)*(.5-.45*Math.cos(t*.8)),{user:false});
   if(id==='circuit')this.flags.closed=t>2;if(id==='entropy')this.flags.opened=t>2;
   if(id==='slit'&&this.flags.detector!==(t>4)){this.flags.detector=t>4;this.resetCounts();}
   if(id==='scales')this.flags.overlay=t>3;
   if(this.demoTime>=7){Object.assign(this,new LabState(this.stationIndex,this.actIndex,{random:this.random,demo:false}));return;}
  }
  if(id==='pendulum')for(let left=dt;left>0;left-=.002)P.pendulumStep(this,Math.min(left,.002),v.length,v.gravity);
  if(id==='induction'){
   if(this.flags.sweeping){this.cycle+=dt;v.magnet=1.4*Math.sin(this.cycle*1.5);if(this.cycle>5)this.flags.sweeping=false;}
   const old=this.magnetPosition;let next=v.magnet+(old-v.magnet)*Math.exp(-dt*12);if(Math.abs(next-v.magnet)<1e-5)next=v.magnet;
   this.magnetPosition=next;this.magnetVelocity=(next-old)/dt;this.emf=-v.turns*(P.magneticFlux(next)-P.magneticFlux(old))/dt;
   if(next===old){this.magnetVelocity=0;this.emf=0;}
  }
  if(id==='gas'||id==='entropy'){
   const right=id==='entropy'&&!this.flags.opened?.5:1;
   // Volume controls the drawn cell width linearly; velocities below are its normalized 2D projection.
   const thermal=id==='gas'?Math.sqrt(v.temperature/300):1;
   const xScale=id==='gas'?1/v.volume:1;
   for(const p of this.particles){p.x+=p.vx*dt*thermal*xScale;p.y+=p.vy*dt*thermal;
    if(p.x<0||p.x>right){p.x=p.x<0?-p.x:2*right-p.x;p.x=P.clamp(p.x,0,right);p.vx=p.x===0?Math.abs(p.vx):p.x===right?-Math.abs(p.vx):-p.vx;}
    if(p.y<0||p.y>1){p.y=p.y<0?-p.y:2-p.y;p.y=P.clamp(p.y,0,1);p.vy=-p.vy;}}
   if(id==='entropy'&&this.flags.opened){this.mixedTime+=dt;if(this.mixedTime>4&&this.particles.slice(0,v.particles).filter(p=>p.x>.5).length>v.particles*.25)this.flags.mixed=true;}
  }
  if(id==='slit'){
   this.emitClock+=dt*36;while(this.emitClock>=1){this.emitClock--;let y=0;for(let i=0;i<1000;i++){y=(this.random()-.5)*2;if(this.random()<P.slitIntensity(y,v.wavelength,v.separation,!!this.flags.detector))break;}
    this.dots.push({x:this.random(),y});this.emission++;if(this.dots.length>600)this.dots.shift();}
   if(this.emission>45&&!this.flags.detector)this.flags.dots=true;if(this.flags.detector&&this.emission>45)this.flags.observed=true;
  }
  if(id==='tunnel'){this.emitClock+=dt*15;while(this.emitClock>=1){this.emitClock--;this.random()<P.transmission(v.energy,2,v.barrierWidth)?this.transmitted++:this.reflected++;}}
  if(id==='clocks')this.clockNear+=dt*P.schwarzschildRate(v.radius);
  if(id==='galaxy')for(const star of this.galaxyStars){star.angle+=dt*.35*P.circularSpeed(star.r,v.halo)/star.r;star.reference+=dt*.35*P.circularSpeed(star.r,0)/star.r;}
  if(id==='expansion'&&this.time>=14){this.time=14;this.playing=false;}
  this.checkTasks();
 }
 metrics(){const v=this.values,id=this.act.id,t=this.time;switch(id){
  case'pendulum':{const e=P.pendulumEnergy(this.theta,this.omega,v.mass,v.length,v.gravity);return [['K',e.T,'J'],['U',e.V,'J'],['K + U',e.T+e.V,'J'],['T₀',P.pendulumPeriod(v.length,v.gravity),'s, small-angle']];}
  case'action':return [['S',P.freeAction(v.bend),'scaled units'],['dS/da',Math.PI*Math.PI*v.bend/2,'scaled units']];
  case'hamilton':{const o=P.oscillator(t,v.mass,v.stiffness,v.amplitude);return [['q',o.q,'m'],['p',o.p,'kg m/s'],['H',o.H,'J']];}
  case'field':{const e=P.electricField(.5,.25,[{x:.27,y:.5,q:1},{x:v.position,y:.5,q:v.charge}]);return [['q₁',1,'relative'],['q₂',v.charge,'relative'],['|E(P)|',Math.hypot(e.x,e.y),'relative']];}
  case'induction':return [['Φ',P.magneticFlux(this.magnetPosition),'relative'],['dx/dt',this.magnetVelocity,'relative'],['emf',this.emf,'relative']];
  case'circuit':{const I=this.flags.closed?P.current(v.voltage,v.resistance):0;return [['I',I*1000,'mA'],['P',I*v.voltage,'W']];}
  case'gas':return [['P',P.idealPressure(v.temperature,v.volume)/1000,'kPa'],['v rms',P.rmsSpeed(v.temperature),'m/s'],['N',1,'× 10²³ molecules']];
  case'entropy':return [['Vf/Vi',this.flags.opened?2:1,''],['ΔSeq/NkB',this.flags.opened?Math.log(2):0,'equilibrium change'],['Right side',this.particles.slice(0,v.particles).filter(p=>p.x>.5).length,'of '+v.particles+' markers']];
  case'engine':return [['η',100*P.carnotEfficiency(v.hot,v.cold),'%'],['W/nR',(v.hot-v.cold)*Math.log(1.8),'K']];
  case'slit':return [['Detections',this.emission,''],['Coherence',this.flags.detector?0:1,'']];
  case'well':return [['n',v.n,''],['E/E*',P.wellEnergy(v.n,v.width),''],['τ',t*.2,'phase time, slowed 5×']];
  case'tunnel':return [['T',100*P.transmission(v.energy,2,v.barrierWidth),'%'],['Transmitted',this.transmitted,'counts'],['Reflected',this.reflected,'counts']];
  case'curvature':return [['rs',v.mass*.12,'relative length'],['α',P.lightDeflection(v.mass*.12,v.impact)*180/Math.PI,'degrees']];
  case'clocks':return [['dτ/dt',P.schwarzschildRate(v.radius),''],['τ',this.clockNear,'s'],['t∞',this.time,'s']];
  case'galaxy':return [['v(r=3)',P.circularSpeed(3,v.halo),'relative'],['Halo strength',v.halo,'']];
  case'expansion':return [['a',P.scaleFactor(t/5,v.lambda),''],['ä(now)',P.acceleration(1,v.lambda),'H₀²'],['H₀ Δt',t/5,'']];
  case'scales':return [['Length',`1e${v.scale}`,'m'],['Planck length','1.62 × 10⁻³⁵','m']];
  case'questions':return [['Question',Math.round(v.question)+1,'of 3']];default:return[];}}
}

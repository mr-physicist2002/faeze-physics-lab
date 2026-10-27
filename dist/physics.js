// Small explicit models for the lab. SI units unless a function documents normalized units.
export const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
export const pendulumPeriod=(length,g)=>2*Math.PI*Math.sqrt(length/g); // small-angle limit
export function pendulumEnergy(theta,omega,m,length,g){return {T:.5*m*length*length*omega*omega,V:m*g*length*(1-Math.cos(theta))};}
export function pendulumStep(s,dt,length,g){const a=-g/length*Math.sin(s.theta);s.omega+=a*dt;s.theta+=s.omega*dt;}
// Fixed endpoints q(0)=0, q(1)=1; q(t)=t+a sin(pi t), free unit-mass particle.
export const freeAction=a=>.5+Math.PI*Math.PI*a*a/4;
export const oscillator=(t,m,k,A)=>({q:A*Math.cos(Math.sqrt(k/m)*t),p:-A*Math.sqrt(m*k)*Math.sin(Math.sqrt(k/m)*t),H:.5*k*A*A});
export function electricField(x,y,charges){let ex=0,ey=0;for(const c of charges){const dx=x-c.x,dy=y-c.y,r2=dx*dx+dy*dy+.0008;ex+=c.q*dx/Math.pow(r2,1.5);ey+=c.q*dy/Math.pow(r2,1.5);}return{x:ex,y:ey};}
// Magnet/coil demonstration: normalized dipole flux, dimensionless geometry.
export const magneticFlux=x=>1/Math.pow(1+4*x*x,1.5);
export const inducedEMF=(x,velocity,N)=>12*N*x*velocity/Math.pow(1+4*x*x,2.5);
export const current=(voltage,resistance)=>voltage/resistance;
export const idealPressure=(T,volume,N=1e23)=>N*1.380649e-23*T/volume;
export const rmsSpeed=(T,mass=4.65e-26)=>Math.sqrt(3*1.380649e-23*T/mass);
export const mixingEntropy=(N,V2,V1)=>N*1.380649e-23*Math.log(V2/V1);
export const carnotEfficiency=(hot,cold)=>1-cold/hot;
// Pure two-path interference under a Gaussian aperture envelope (normalized screen coordinate).
export function slitIntensity(y,wavelength,separation,whichPath=false){const envelope=Math.exp(-y*y/0.5);return envelope*(whichPath?1:.5*(1+Math.cos(2*Math.PI*pathDifference(y,separation)/wavelength)));}
export const wellEnergy=(n,width)=>n*n/(width*width); // units pi² hbar²/(2m), x in normalized length
export const wellPsi=(x,n,width)=>x<0||x>width?0:Math.sqrt(2/width)*Math.sin(n*Math.PI*x/width);
// Rectangular barrier with E < V, hbar²/(2m)=1. Exact stationary transmission.
export function transmission(E,V,width){if(E<=0)return 0;if(E>=V)return E===V?1/(1+V*width*width/4):1/(1+V*V*Math.sin(Math.sqrt(E-V)*width)**2/(4*E*(E-V)));return 1/(1+V*V*Math.sinh(Math.sqrt(V-E)*width)**2/(4*E*(V-E)));}
export const schwarzschildRate=(r,rs=1)=>Math.sqrt(Math.max(0,1-rs/r));
export const lightDeflection=(rs,impact)=>2*rs/impact; // weak-field, radians. impact >> rs
export const circularSpeed=(r,halo)=>Math.sqrt(r*r/Math.pow(r*r+.18,1.5)+halo*r*r/(r*r+.12)); // toy visible core + extended halo
// Flat matter + cosmological-constant model, present H0=1. a=1 is the present epoch.
export const hubble=(a,omegaLambda)=>Math.sqrt((1-omegaLambda)/a**3+omegaLambda);
export const acceleration=(a,omegaLambda)=>-.5*(1-omegaLambda)/a**2+omegaLambda*a;
export const scaleFactor=(t,omegaLambda)=>omegaLambda<1e-8?Math.pow(1+1.5*t,2/3):Math.pow(Math.sinh(Math.asinh(Math.sqrt(omegaLambda/(1-omegaLambda)))+1.5*Math.sqrt(omegaLambda)*t)/Math.sqrt(omegaLambda/(1-omegaLambda)),2/3);
export const planckLength=1.616255e-35;
export function taskReached(rule,values,flags){if(rule.flag)return !!flags[rule.flag];const value=values[rule.key];return rule.min!==undefined?value>=rule.min:value<=rule.max;}

// Geometry and dynamics used by the diagrams, kept in model coordinates.
export function pendulumVelocity(theta,omega,length){return {x:length*omega*Math.cos(theta),y:length*omega*Math.sin(theta)};}
export function gaussian(random=Math.random){const u=Math.max(1e-12,random()),v=random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);}
export function maxwellSpeedDensity(speed,T,mass=4.65e-26){const a=mass/(2*1.380649e-23*T);return 4/Math.sqrt(Math.PI)*a**1.5*speed**2*Math.exp(-a*speed**2);}
// Equal-amplitude paths, Gaussian screen envelope, and actual path-length difference; D=4.
export function pathDifference(y,d,D=4){return Math.hypot(D,y-d/2)-Math.hypot(D,y+d/2);}
export function wellWave(x,n,L,tau){const amplitude=wellPsi(x,n,L),phase=wellEnergy(n,L)*tau;return {re:amplitude*Math.cos(phase),im:-amplitude*Math.sin(phase),density:amplitude*amplitude};}
const cmul=(a,b)=>({re:a.re*b.re-a.im*b.im,im:a.re*b.im+a.im*b.re});
const cexp=a=>({re:Math.cos(a),im:Math.sin(a)});
// Exact stationary wave for E < V, in units hbar=1, 2m=1. Unit incident amplitude.
export function barrierWave(x,E,V,a,time=0){
 const k=Math.sqrt(E),kap=Math.sqrt(V-E),sh=Math.sinh(kap*a),ch=Math.cosh(kap*a),di=(kap*kap-k*k)/(2*k*kap)*sh,den=ch*ch+di*di;
 const C={re:ch/den,im:-di/den};
 const at0=cmul(C,{re:ch,im:-k/kap*sh}),r={re:at0.re-1,im:at0.im};
 let psi;if(x<0){const incoming=cexp(k*x),ref=cmul(r,cexp(-k*x));psi={re:incoming.re+ref.re,im:incoming.im+ref.im};}
 else if(x>a)psi=cmul(C,cexp(k*(x-a)));
 else psi=cmul(C,{re:Math.cosh(kap*(x-a)),im:k/kap*Math.sinh(kap*(x-a))});
 const rotated=cmul(psi,cexp(-E*time));return {...rotated,density:psi.re**2+psi.im**2,R:r.re**2+r.im**2,T:C.re**2+C.im**2};
}
// First-order GR light path: incoming horizontal ray at y=b; asymptotic bend = 2 rs / b.
export const weakFieldRay=(x,rs,b)=>b-rs/b*(x+Math.hypot(x,b));
export const weakFieldSlope=(x,rs,b)=>-rs/b*(1+x/Math.hypot(x,b));
export function pendulumForces(theta,omega,m,length,g){const tension=m*(length*omega*omega+g*Math.cos(theta));return {weight:{x:0,y:-m*g},tension:{x:-tension*Math.sin(theta),y:tension*Math.cos(theta)}};}
export function wavefrontPositions(time,wavelength,min,max){const phase=(time*.5)%wavelength,positions=[];for(let n=Math.ceil((min-phase)/wavelength);phase+n*wavelength<=max;n++)positions.push(phase+n*wavelength);return positions;}

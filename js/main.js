// Extracted JS from index.html

// ══ MODAL DATA ══
const modalData = {
  'results-manager': {
    icon:'🎓', name:'Results Manager', category:'Academic Results Management System',
    color:'rgba(99,102,241,0.2)', border:'rgba(99,102,241,0.3)', accent:'#a78bfa',
    overview:'Results Manager is ADIPATS\'s flagship academic results management platform, trusted by federal and state universities across Nigeria. It digitalizes the entire academic results lifecycle — from departmental data entry through faculty collation, senate approval, to final transcript issuance.',
    features:[
      {icon:'📊',text:'Automated GPA/CGPA computation with customizable grading scales'},
      {icon:'✍️',text:'Multi-level entry and approval workflows (lecturer → HOD → Dean → Senate)'},
      {icon:'📜',text:'Secure transcript and certificate generation with digital verification'},
      {icon:'👤',text:'Comprehensive student academic history and performance tracking'},
      {icon:'📋',text:'Carry-over, special exam, and supplementary management'},
      {icon:'🔒',text:'Role-based access with full audit trail for all result changes'},
      {icon:'📱',text:'Student self-service portal for result checking and transcript requests'},
      {icon:'🔗',text:'JAMB, NYSC, and WAEC verification integrations'},
    ],
    benefits:['Eliminates result leakage and manipulation','Reduces transcript processing from weeks to hours','Full regulatory compliance with NUC standards','Handles 50,000+ students on a single deployment','Proven across 15+ Nigerian universities']
  },
  // ... rest of modalData omitted for brevity in this preview; full object copied from index.html
};

function openModal(id) {
  const d = modalData[id];
  if(!d) return;
  document.getElementById('modal-title-area').innerHTML = `
    <div style="display:flex;align-items:center;gap:1rem">
      <div style="width:52px;height:52px;border-radius:12px;background:${d.color};border:1px solid ${d.border};display:flex;align-items:center;justify-content:center;font-size:1.375rem;flex-shrink:0">${d.icon}</div>
      <div>
        <div style="font-family:var(--font-display);font-size:1.25rem;font-weight:800">${d.name}</div>
        <div style="font-size:0.8125rem;color:var(--white-60);font-family:var(--font-mono)">${d.category}</div>
      </div>
    </div>`;
  document.getElementById('modal-content').innerHTML = `
    <p style="font-size:0.9375rem;color:var(--white-60);line-height:1.8;margin-bottom:2rem">${d.overview}</p>
    <div class="modal-section-title">Key Features</div>
    <div class="modal-features">
      ${d.features.map(f=>`<div class="modal-feature-item"><span class="modal-feature-icon">${f.icon}</span><span class="modal-feature-text">${f.text}</span></div>`).join('')}
    </div>
    <div class="modal-section-title">Enterprise Benefits</div>
    <div class="modal-benefits">
      ${d.benefits.map(b=>`<div class="modal-benefit">${b}</div>`).join('')}
    </div>
    <div style="margin-top:2rem;padding-top:1.5rem;border-top:1px solid var(--border);display:flex;gap:1rem">
      <a href="#contact" onclick="closeModal()" class="btn btn-primary btn-sm">Request Demo</a>
      <a href="#contact" onclick="closeModal()" class="btn btn-secondary btn-sm">Contact Sales</a>
    </div>`;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow='';
}
function closeModalOnOverlay(e) {
  if(e.target === document.getElementById('modal-overlay')) closeModal();
}
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeModal(); });

// ══ TECH PANEL SWITCHER ══
function switchTech(el, panel) {
  document.querySelectorAll('.tech-cat').forEach(c=>c.classList.remove('active'));
  document.querySelectorAll('.tech-panel').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('panel-'+panel).classList.add('active');
}

// ══ MOBILE MENU ══
document.getElementById('hamburger').addEventListener('click', function(){
  document.getElementById('mobile-menu').classList.toggle('open');
});
document.querySelectorAll('.mobile-menu a').forEach(a=>{
  a.addEventListener('click',()=>document.getElementById('mobile-menu').classList.remove('open'));
});

// ══ FORM SUBMIT ══
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target;
  btn.innerHTML = '✓ Message Sent — We\'ll be in touch!';
  btn.style.background = 'linear-gradient(135deg,#16a34a,#15803d)';
  setTimeout(()=>{
    btn.innerHTML = 'Send Message <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8h12M9 4l5 4-5 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    btn.style.background = '';
  }, 3000);
}

// ══ PARTICLES ══
(function(){
  const container = document.getElementById('particles');
  const count = window.innerWidth < 768 ? 12 : 24;
  for(let i=0;i<count;i++){
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random()*3+1;
    p.style.cssText = `
      width:${size}px;height:${size}px;
      left:${Math.random()*100}%;
      animation-duration:${Math.random()*12+8}s;
      animation-delay:${Math.random()*10}s;
      opacity:${Math.random()*0.5+0.1};
    `;
    container.appendChild(p);
  }
})();

// ══ SCROLL PROGRESS ══
window.addEventListener('scroll',()=>{
  const el = document.getElementById('scroll-progress');
  const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  el.style.width = pct + '%';
}, {passive:true});

// ══ NAV SCROLL ══
window.addEventListener('scroll',()=>{
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, {passive:true});

// ══ GSAP ANIMATIONS ══
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Hero entrance
gsap.timeline()
  .from('#hero-badge',   {opacity:0,y:20,duration:0.7,ease:'power3.out'}, 0.3)
  .from('#hero-headline',{opacity:0,y:40,duration:0.9,ease:'power3.out'}, 0.5)
  .from('#hero-sub',     {opacity:0,y:30,duration:0.7,ease:'power3.out'}, 0.75)
  .from('#hero-actions', {opacity:0,y:20,duration:0.6,ease:'power3.out'}, 0.95)
  .from('#hero-stats .stat-item',{opacity:0,y:30,stagger:0.1,duration:0.6,ease:'power3.out'}, 1.1);

// Counter animation
function animateCounter(el){
  const target = parseInt(el.getAttribute('data-target'));
  const start = performance.now();
  const duration = 1800;
  function update(now){
    const t = Math.min((now-start)/duration,1);
    const ease = 1-Math.pow(1-t,3);
    el.textContent = Math.round(ease*target);
    if(t<1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}

// Trigger counters when hero stats visible
ScrollTrigger.create({
  trigger:'#hero-stats',
  start:'top 85%',
  onEnter:()=>document.querySelectorAll('.counter').forEach(animateCounter)
});

// Reveal animations for all .reveal elements
gsap.utils.toArray('.reveal').forEach(el=>{
  gsap.fromTo(el,
    {opacity:0,y:50},
    {opacity:1,y:0,duration:0.8,ease:'power3.out',
     scrollTrigger:{trigger:el,start:'top 88%',toggleActions:'play none none none'}}
  );
});

// Smooth nav links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const target = document.querySelector(a.getAttribute('href'));
    if(target){
      e.preventDefault();
      gsap.to(window,{scrollTo:{y:target,offsetY:72},duration:1,ease:'power3.inOut'});
    }
  });
});

// Active nav tracking
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('[data-nav]');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      navLinks.forEach(l=>{
        l.classList.toggle('active', l.getAttribute('data-nav') === e.target.id);
      });
    }
  });
},{threshold:0.4});
sections.forEach(s=>observer.observe(s));

const navbar=document.querySelector('.navbar');window.addEventListener('scroll',()=>{navbar&&navbar.classList.toggle('scrolled',window.scrollY>70)});const toggle=document.querySelector('.mobile-toggle');const nav=document.querySelector('.nav-links');toggle&&toggle.addEventListener('click',()=>nav.classList.toggle('active'));document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav&&nav.classList.remove('active')));const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('show');observer.unobserve(entry.target)}})},{threshold:.14});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));const counters=document.querySelectorAll('.numbers h2');const counterObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target,txt=el.textContent,end=parseInt(txt.replace(/\D/g,''))||0;let cur=0,inc=Math.max(1,Math.ceil(end/70));const timer=setInterval(()=>{cur+=inc;if(cur>=end){el.textContent=txt;clearInterval(timer)}else{el.textContent=txt.includes('%')?cur+'%':txt.includes('+')?cur+'+':cur}},22);counterObserver.unobserve(el)})},{threshold:.5});counters.forEach(c=>counterObserver.observe(c));const topBtn=document.createElement('button');topBtn.className='back-top';topBtn.innerHTML='↑';topBtn.setAttribute('aria-label','Voltar ao topo');document.body.appendChild(topBtn);window.addEventListener('scroll',()=>topBtn.classList.toggle('visible',window.scrollY>520));topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));const copy=document.querySelector('.copyright');if(copy)copy.textContent=`© ${new Date().getFullYear()} Life Tecnologia. Todos os direitos reservados.`;
/* ===== Google Ads: rastreamento de conversao =====
   TROQUE os rotulos "AW-XXXXXXXXXX/ROTULO_*" pelo valor real de cada acao de conversao.
   Voce pega esse valor em: Google Ads -> Ferramentas -> Conversoes -> (sua acao)
   -> "Instalar a tag manualmente". O formato e AW-XXXXXXXXXX/AbCd-EfGhIjKl. */
(function(){
  // 1) Envio do formulario de contato (conversao principal)
  var form=document.querySelector('.contact-form');
  if(form){form.addEventListener('submit',function(){
    if(typeof gtag==='function'){gtag('event','conversion',{'send_to':'AW-XXXXXXXXXX/ROTULO_FORMULARIO'});}
  });}
  // 2) Clique no botao flutuante de WhatsApp
  var wa=document.querySelector('a.whatsapp');
  if(wa){wa.addEventListener('click',function(){
    if(typeof gtag==='function'){gtag('event','conversion',{'send_to':'AW-XXXXXXXXXX/ROTULO_WHATSAPP'});}
  });}
})();
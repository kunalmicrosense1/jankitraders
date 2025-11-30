
// Lightweight enhancements
(function(){
  // Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el){e.preventDefault(); el.scrollIntoView({behavior:'smooth'});}    
    });
  });
  // Demo form handler
  const form = document.querySelector('form');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      console.log('Inquiry:', data);
      alert('Thanks! We will contact you shortly.');
    });
  }
})();

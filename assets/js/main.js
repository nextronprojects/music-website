
// Modern main.js - animation init and enquiry handling
function submitEnquiry(){
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const result = document.getElementById('enqResult');
  if(!name && !email){
    result.innerHTML = '<span class="text-warning">Please provide your name or email.</span>';
    return;
  }
  result.innerHTML = '<span class="text-success">Thanks, ' + (name || 'there') + '! Your enquiry has been received (demo).</span>';
  // small confetti effect (simple)
  explodeConfetti();
  setTimeout(()=> result.innerHTML = '', 7000);
}

function explodeConfetti(){
  for(let i=0;i<12;i++){
    const el = document.createElement('div');
    el.style.position='fixed';
    el.style.left=(50+ (Math.random()*60-30))+'%';
    el.style.top=(30+Math.random()*20)+'%';
    el.style.width='8px'; el.style.height='8px'; el.style.borderRadius='50%';
    el.style.background = ['#7b6cff','#ff6b6b','#ffd166'][Math.floor(Math.random()*3)];
    el.style.opacity=0.9;
    el.style.transform='translateY(0)';
    el.style.zIndex=9999;
    document.body.appendChild(el);
    setTimeout(()=> el.style.transform='translateY(300px)'; el.style.opacity=0, 20);
    setTimeout(()=> el.remove(), 1200);
  }
}

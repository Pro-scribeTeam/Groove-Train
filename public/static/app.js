// ═══════════════════════════════════════════════════════
// GROOVE TRAIN TIME - Main JavaScript
// ═══════════════════════════════════════════════════════

// Page Navigation
function boardTrain() {
  var audio = document.getElementById('boardAudio');
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(function(e){ console.warn('Audio play failed:', e); });
  }
  showPage('train');
}

function showPage(page) {
  ['page-home','page-train','page-coloring','page-coloring-train'].forEach(function(id){
    var el = document.getElementById(id);
    if(el) el.style.display = 'none';
  });
  var target = document.getElementById('page-' + page);
  if(target) target.style.display = 'block';
  window.scrollTo(0,0);
  if(page === 'coloring' && typeof initColoring === 'function') initColoring();
  if(page === 'coloring-train' && typeof initColoringTrain === 'function') initColoringTrain();
}

function goBack() { 
  showPage('home'); 
}

// Coloring Game Initialization
function initColoring(){
  var svg=document.getElementById('cgsvg');
  if(!svg||svg.dataset.inited) return;
  svg.dataset.inited='1';
  var color='#87CEEB',tool='paint';
  var lbl=document.getElementById('cglbl');

  // Color palette click handlers
  document.querySelectorAll('#cgPal .cgs').forEach(function(s){
    s.addEventListener('click',function(){
      document.querySelectorAll('#cgPal .cgs').forEach(function(x){x.classList.remove('on');});
      s.classList.add('on');color=s.dataset.c;tool='paint';
      document.getElementById('cgPaint').classList.add('on');
      document.getElementById('cgErase').classList.remove('on');
    });
  });
  
  // Tool selection handlers
  document.getElementById('cgPaint').addEventListener('click',function(){
    tool='paint';this.classList.add('on');
    document.getElementById('cgErase').classList.remove('on');
  });
  document.getElementById('cgErase').addEventListener('click',function(){
    tool='erase';this.classList.add('on');
    document.getElementById('cgPaint').classList.remove('on');
  });
  
  // SVG region click handlers
  document.querySelectorAll('#cgsvg .r').forEach(function(r){
    r.addEventListener('click',function(e){
      e.stopPropagation();
      if(tool==='erase'){r.style.fillOpacity='0';r.classList.remove('on');}
      else{r.setAttribute('fill',color);r.style.fillOpacity='0.55';r.classList.add('on');}
    });
    r.addEventListener('mouseenter',function(){if(r.dataset.label){lbl.textContent=r.dataset.label;lbl.style.display='block';}});
    r.addEventListener('mousemove',function(e){lbl.style.left=(e.clientX+14)+'px';lbl.style.top=(e.clientY-28)+'px';});
    r.addEventListener('mouseleave',function(){lbl.style.display='none';});
  });
  
  // Clear all button
  document.getElementById('cgClear').addEventListener('click',function(){
    document.querySelectorAll('#cgsvg .r').forEach(function(r){r.style.fillOpacity='0';r.classList.remove('on');});
  });
  
  // Save artwork button
  document.getElementById('cgSave').addEventListener('click',function(){
    var d=new XMLSerializer().serializeToString(document.getElementById('cgsvg'));
    var b=new Blob([d],{type:'image/svg+xml'});
    var u=URL.createObjectURL(b);var a=document.createElement('a');
    a.href=u;a.download='my-rainbow-art.svg';a.click();URL.revokeObjectURL(u);
  });
  
  // Back button
  document.getElementById('cgBack').addEventListener('click',function(){
    if(typeof showPage==='function') showPage('train'); else history.back();
  });
}

// Train Boy Coloring Game Initialization
function initColoringTrain(){
  var svg=document.getElementById('cgsvg2');
  if(!svg||svg.dataset.inited) return;
  svg.dataset.inited='1';
  var color='#D2691E',tool='paint';
  var lbl=document.getElementById('cglbl2');

  // Color palette click handlers
  document.querySelectorAll('#cgPal2 .cgs').forEach(function(s){
    s.addEventListener('click',function(){
      document.querySelectorAll('#cgPal2 .cgs').forEach(function(x){x.classList.remove('on');});
      s.classList.add('on');color=s.dataset.c;tool='paint';
      document.getElementById('cgPaint2').classList.add('on');
      document.getElementById('cgErase2').classList.remove('on');
    });
  });
  
  // Tool selection handlers
  document.getElementById('cgPaint2').addEventListener('click',function(){
    tool='paint';this.classList.add('on');
    document.getElementById('cgErase2').classList.remove('on');
  });
  document.getElementById('cgErase2').addEventListener('click',function(){
    tool='erase';this.classList.add('on');
    document.getElementById('cgPaint2').classList.remove('on');
  });
  
  // SVG region click handlers
  document.querySelectorAll('#cgsvg2 .r').forEach(function(r){
    r.addEventListener('click',function(e){
      e.stopPropagation();
      if(tool==='erase'){r.style.fillOpacity='0';r.classList.remove('on');}
      else{r.setAttribute('fill',color);r.style.fillOpacity='0.55';r.classList.add('on');}
    });
    r.addEventListener('mouseenter',function(){if(r.dataset.label){lbl.textContent=r.dataset.label;lbl.style.display='block';}});
    r.addEventListener('mousemove',function(e){lbl.style.left=(e.clientX+14)+'px';lbl.style.top=(e.clientY-28)+'px';});
    r.addEventListener('mouseleave',function(){lbl.style.display='none';});
  });
  
  // Clear all button
  document.getElementById('cgClear2').addEventListener('click',function(){
    document.querySelectorAll('#cgsvg2 .r').forEach(function(r){r.style.fillOpacity='0';r.classList.remove('on');});
  });
  
  // Save artwork button
  document.getElementById('cgSave2').addEventListener('click',function(){
    var d=new XMLSerializer().serializeToString(document.getElementById('cgsvg2'));
    var b=new Blob([d],{type:'image/svg+xml'});
    var u=URL.createObjectURL(b);var a=document.createElement('a');
    a.href=u;a.download='my-train-boy-art.svg';a.click();URL.revokeObjectURL(u);
  });
  
  // Back button
  document.getElementById('cgBack2').addEventListener('click',function(){
    if(typeof showPage==='function') showPage('train'); else history.back();
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    console.log('🚂 Groove Train Time loaded!');
  });
} else {
  console.log('🚂 Groove Train Time loaded!');
}

import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Serve static files from public directory
app.use('/static/*', serveStatic({ root: './public' }))

// Main page route
app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Groove Train Time – Stay on the Right Track</title>
<link href="https://fonts.googleapis.com/css2?family=Boogaloo&family=Nunito:wght@400;700;900&family=Orbitron:wght@700;900&display=swap" rel="stylesheet">
<link href="/static/styles.css" rel="stylesheet">
</head>
<body>

<div id="page-home">

<!-- Floating music notes -->
<div class="note note-yellow" style="left:5%;animation-duration:9s;animation-delay:0s;">🎵</div>
<div class="note note-white"  style="left:18%;animation-duration:13s;animation-delay:2s;">🎶</div>
<div class="note note-dark"   style="left:30%;animation-duration:11s;animation-delay:5s;">🎵</div>
<div class="note note-yellow" style="left:45%;animation-duration:10s;animation-delay:1s;">🎶</div>
<div class="note note-white"  style="left:58%;animation-duration:14s;animation-delay:3s;">🎵</div>
<div class="note note-dark"   style="left:70%;animation-duration:8s;animation-delay:7s;">🎶</div>
<div class="note note-yellow" style="left:82%;animation-duration:12s;animation-delay:4s;">🎵</div>
<div class="note note-white"  style="left:93%;animation-duration:10s;animation-delay:6s;">🎶</div>

<!-- NAV -->
<nav>
  <img src="/static/logo.svg" alt="Groove Train" style="height:48px;">
  <ul class="nav-links">
    <li><a href="#">Songs</a></li>
    <li><a href="#">Games</a></li>
    <li><a href="#">Videos</a></li>
    <li><a href="#">For Parents</a></li>
  </ul>
</nav>

<!-- HERO -->
<section class="hero">
  <img class="hero-logo" src="/static/hero-logo-real.png" alt="Groove Train Time">
  <p class="hero-tagline">🚂 Music + Learning = All Aboard! 🎵</p>
  <button onclick="boardTrain()" class="hero-cta">Board the Train</button>
</section>

<div class="track-divider"></div>

<!-- FEATURES -->
<section id="explore" style="padding-top:80px;">
  <h2 class="section-title">What's on the <span>Track?</span></h2>
  <div class="cards">
    <div class="card">
      <span class="card-icon">🎸</span>
      <h3>Groovy Songs</h3>
      <p>Bop along to catchy tunes that make learning reading, math & science totally rad!</p>
    </div>
    <div class="card">
      <span class="card-icon" style="animation-delay:.4s">🎨</span>
      <h3>Coloring Game</h3>
      <p>Pick colors &amp; paint the Rainbow Painter — your masterpiece awaits!</p>
      <button onclick="showPage('coloring')" style="margin-top:12px;padding:10px 24px;background:transparent;border:2px solid var(--neon-yellow);color:var(--neon-yellow);font-family:'Orbitron',sans-serif;font-size:0.72rem;letter-spacing:2px;text-transform:uppercase;clip-path:polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%);">▶ Rainbow Painter</button>
      <button onclick="showPage('coloring-train')" style="margin-top:8px;padding:10px 24px;background:transparent;border:2px solid var(--neon-pink);color:var(--neon-pink);font-family:'Orbitron',sans-serif;font-size:0.72rem;letter-spacing:2px;text-transform:uppercase;clip-path:polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%);">▶ Train Boy</button>
    </div>
    <div class="card" style="grid-column:span 1;">
      <span class="card-icon" style="animation-delay:.8s">🔢</span>
      <h3>Math Quest</h3>
      <p>Solve addition, subtraction &amp; multiplication puzzles across 5 musical levels — earn stars!</p>
      <button onclick="showPage('math-quest')" style="margin-top:12px;padding:10px 24px;background:transparent;border:2px solid #00c8ff;color:#00c8ff;font-family:'Orbitron',sans-serif;font-size:0.72rem;letter-spacing:2px;text-transform:uppercase;clip-path:polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%);">▶ Play Math Quest</button>
    </div>
    <div class="card">
      <span class="card-icon" style="animation-delay:.8s">📺</span>
      <h3>Music Videos</h3>
      <p>Sing-along videos with dazzling animations that you can watch again and again.</p>
    </div>
    <div class="card">
      <span class="card-icon" style="animation-delay:1.2s">⭐</span>
      <h3>Earn Stars</h3>
      <p>Complete songs & games to collect stars and customize your very own train!</p>
    </div>
  </div>
</section>

<div class="track-divider"></div>

<!-- MUSIC PLAYER -->
<div class="player-section">
  <div class="player-inner">
    <h2 class="section-title" style="text-align:center;">Now <span>Playing</span></h2>
    <div class="player-box">
      <div class="now-playing">▶ Now Playing</div>
      <div class="track-name">🚂 All Aboard the Alphabet Express!</div>
      <div class="waveform">
        <div class="bar"></div><div class="bar"></div><div class="bar"></div>
        <div class="bar"></div><div class="bar"></div><div class="bar"></div>
        <div class="bar"></div><div class="bar"></div><div class="bar"></div>
        <div class="bar"></div><div class="bar"></div><div class="bar"></div>
      </div>
      <div class="player-controls">
        <button class="ctrl-btn">⏮</button>
        <button class="ctrl-btn play">▶</button>
        <button class="ctrl-btn">⏭</button>
      </div>
    </div>
  </div>
</div>

<!-- FOOTER -->
<footer>
  <p>© 2026 <span>Groove Train Time</span> · Stay on the Right Track · Made with 🎵 for Kids Everywhere</p>
</footer>

<!-- Audio -->
<audio id="boardAudio" preload="auto" src="/static/board-audio.mp3"></audio>

</div><!-- end page-home -->

<div id="page-train" style="display:none; background:#ffffff; min-height:100vh;">

<!-- Floating notes -->
<div class="note note-yellow" style="left:5%;animation-duration:9s;animation-delay:0s;">🎵</div>
<div class="note note-blue"   style="left:20%;animation-duration:13s;animation-delay:2s;">🎶</div>
<div class="note note-pink"   style="left:40%;animation-duration:11s;animation-delay:4s;">🎵</div>
<div class="note note-yellow" style="left:65%;animation-duration:10s;animation-delay:1s;">🎶</div>
<div class="note note-blue"   style="left:85%;animation-duration:14s;animation-delay:6s;">🎵</div>

<!-- NAV -->
<nav>
  <button class="back-btn" onclick="goBack()">← Back</button>
  <ul class="nav-links">
    <li><a href="#">Songs</a></li>
    <li><a href="#">Games</a></li>
    <li><a href="#">Videos</a></li>
    <li><a href="#">For Parents</a></li>
  </ul>
</nav>

<!-- HERO IMAGE -->
<div class="hero-banner">
  <img src="/static/train-banner-real.png" alt="Groove Train">
</div>

<div class="track-divider"></div>

<!-- WELCOME -->
<div class="welcome-strip">
  <h1>Welcome to <span>Groove Train!</span> 🚂</h1>
  <p>Pick a song, hop on the track, and let's groove!</p>
</div>

<div class="track-divider"></div>

<!-- SONGS -->
<section class="content-section">
  <h2 class="section-title">🎵 Choose Your <span>Groove</span></h2>
  <div class="cards-grid">
    <div class="song-card">
      <span class="icon">🔤</span>
      <h3>Alphabet Express</h3>
      <p>Ride the rails through every letter of the alphabet with a super catchy beat!</p>
      <button class="play-btn">▶ Play Now</button>
    </div>
    <div class="song-card">
      <span class="icon">🔢</span>
      <h3>Numbers on the Track</h3>
      <p>Count from 1 to 20 and beyond while the train chugs along to the rhythm!</p>
      <button class="play-btn">▶ Play Now</button>
    </div>
    <div class="song-card">
      <span class="icon">🌈</span>
      <h3>Color Conductor</h3>
      <p>Learn every color of the rainbow as the Groove Train lights up the station!</p>
      <button class="play-btn">▶ Play Now</button>
    </div>
    <div class="song-card">
      <span class="icon">⭐</span>
      <h3>Shape Shifter Shuffle</h3>
      <p>Circles, squares, triangles and more — dance along with every shape in the groove!</p>
      <button class="play-btn">▶ Play Now</button>
    </div>
  </div>
</section>

<div class="track-divider"></div>

<footer>
  <p>© 2026 <span>Groove Train Time</span> · Stay on the Right Track · Made with 🎵 for Kids Everywhere</p>
</footer>

</div>

<div id="page-coloring" style="display:none;">

<div id="cglbl"></div>
<div class="cgn">
  <button class="cgb" id="cgBack">← Back</button>
  <span class="cgt">🎨 Coloring Station</span>
  <span style="width:76px"></span>
</div>
<div class="cgw">
  <div class="cgp" id="cgPal">
    <div class="cgpl">Colors</div>
    <div class="cgs on" style="background:#87CEEB" data-c="#87CEEB"></div>
    <div class="cgs" style="background:#3A1060" data-c="#3A1060"></div>
    <div class="cgs" style="background:#F0D0E8" data-c="#F0D0E8"></div>
    <div class="cgs" style="background:#fff;border:2px solid #555" data-c="#FFFFFF"></div>
    <div class="cghr"></div>
    <div class="cgs" style="background:#FF2020" data-c="#FF2020"></div>
    <div class="cgs" style="background:#FF8800" data-c="#FF8800"></div>
    <div class="cgs" style="background:#FFE600" data-c="#FFE600"></div>
    <div class="cgs" style="background:#00CC00" data-c="#00CC00"></div>
    <div class="cgs" style="background:#0077FF" data-c="#0077FF"></div>
    <div class="cgs" style="background:#7700CC" data-c="#7700CC"></div>
    <div class="cghr"></div>
    <div class="cgs" style="background:#3CB371" data-c="#3CB371"></div>
    <div class="cgs" style="background:#1A5C1A" data-c="#1A5C1A"></div>
    <div class="cgs" style="background:#FF69B4" data-c="#FF69B4"></div>
    <div class="cgs" style="background:#CC2222" data-c="#CC2222"></div>
    <div class="cgs" style="background:#DDA0DD" data-c="#DDA0DD"></div>
    <div class="cghr"></div>
    <div class="cgs" style="background:#8B4513" data-c="#8B4513"></div>
    <div class="cgs" style="background:#2A0A00" data-c="#2A0A00"></div>
    <div class="cgs" style="background:#6B9FBE" data-c="#6B9FBE"></div>
    <div class="cgs" style="background:#1A40CC" data-c="#1A40CC"></div>
    <div class="cgs" style="background:#222" data-c="#222222"></div>
    <div class="cgs" style="background:#C0C0C0" data-c="#C0C0C0"></div>
    <div class="cghr"></div>
    <div class="cgtl on" id="cgPaint">🖌️</div>
    <div class="cgtl" id="cgErase">⬜</div>
  </div>

  <div class="cgm">
    <h2>🌈 Rainbow Painter</h2>
    <p>Hover to see each section · Click to fill with color!</p>

    <svg id="cgsvg" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <image href="/static/coloring-rainbow-painter-bw.jpg" width="1024" height="1024"/>
      
      <!-- Sky Background -->
      <rect class="r" id="r-sky" data-label="Sky Background" fill="#87CEEB" x="0" y="0" width="1024" height="700" fill-opacity="0"/>
      
      <!-- Rainbow Bands (6 separate) -->
      <path class="r" id="r-rb-red" data-label="Rainbow – Red Band" fill="#FF2020" fill-opacity="0" d="M160,0 Q340,125 420,150 Q500,175 560,190 Q620,205 680,212 L680,250 Q620,243 560,228 Q500,213 420,188 Q340,163 160,38 Z"/>
      <path class="r" id="r-rb-orange" data-label="Rainbow – Orange Band" fill="#FF8800" fill-opacity="0" d="M210,0 Q370,120 450,145 Q530,170 590,185 Q650,200 705,207 L705,245 Q650,238 590,223 Q530,208 450,183 Q370,158 210,33 Z"/>
      <path class="r" id="r-rb-yellow" data-label="Rainbow – Yellow Band" fill="#FFE600" fill-opacity="0" d="M255,0 Q395,115 475,140 Q555,165 615,180 Q675,195 730,202 L730,240 Q675,233 615,218 Q555,203 475,178 Q395,153 255,28 Z"/>
      <path class="r" id="r-rb-green" data-label="Rainbow – Green Band" fill="#00CC00" fill-opacity="0" d="M295,0 Q415,110 495,135 Q575,160 635,175 Q695,190 750,197 L750,235 Q695,228 635,213 Q575,198 495,173 Q415,148 295,23 Z"/>
      <path class="r" id="r-rb-blue" data-label="Rainbow – Blue Band" fill="#0077FF" fill-opacity="0" d="M330,0 Q435,105 515,130 Q595,155 655,170 Q715,185 770,192 L770,230 Q715,223 655,208 Q595,193 515,168 Q435,143 330,18 Z"/>
      <path class="r" id="r-rb-violet" data-label="Rainbow – Violet Band" fill="#7700CC" fill-opacity="0" d="M360,0 Q455,100 535,125 Q615,150 675,165 Q735,180 790,187 L790,225 Q735,218 675,203 Q615,188 535,163 Q455,138 360,13 Z"/>
      
      <!-- Clouds -->
      <g class="r" id="r-cloud-l" data-label="Left Cloud">
        <ellipse fill="#FFFFFF" fill-opacity="0" cx="120" cy="200" rx="95" ry="85"/>
        <ellipse fill="#FFFFFF" fill-opacity="0" cx="200" cy="180" rx="80" ry="70"/>
        <ellipse fill="#FFFFFF" fill-opacity="0" cx="160" cy="250" rx="90" ry="75"/>
      </g>
      <g class="r" id="r-cloud-r" data-label="Right Cloud">
        <ellipse fill="#FFFFFF" fill-opacity="0" cx="880" cy="180" rx="85" ry="75"/>
        <ellipse fill="#FFFFFF" fill-opacity="0" cx="930" cy="200" rx="75" ry="80"/>
        <ellipse fill="#FFFFFF" fill-opacity="0" cx="900" cy="265" rx="80" ry="70"/>
      </g>
      
      <!-- Grass -->
      <path class="r" id="r-grass" data-label="Grass" fill="#3CB371" fill-opacity="0" d="M0,640 Q256,610 512,620 Q768,610 1024,640 L1024,1024 L0,1024 Z"/>
      
      <!-- Left Plants -->
      <path class="r" id="r-plant-l" data-label="Left Plants" fill="#1A5C1A" fill-opacity="0" d="M0,430 Q50,400 95,420 Q140,440 180,470 Q200,520 190,600 Q170,680 120,750 Q70,780 20,800 Q5,760 0,700 Z"/>
      <ellipse class="r" id="r-plant-l2" data-label="Left Plants (lower)" fill="#1A5C1A" fill-opacity="0" cx="95" cy="820" rx="100" ry="60"/>
      
      <!-- Right Plants -->
      <path class="r" id="r-plant-r" data-label="Right Plants" fill="#1A5C1A" fill-opacity="0" d="M770,410 Q820,390 890,400 Q950,420 1000,460 Q1024,500 1024,580 L1024,850 Q970,830 900,810 Q830,790 800,720 Q780,640 770,560 Z"/>
      <ellipse class="r" id="r-plant-r2" data-label="Right Plants (lower)" fill="#1A5C1A" fill-opacity="0" cx="910" cy="860" rx="90" ry="55"/>
      
      <!-- Red Berries (left side) -->
      <circle class="r" id="r-berry1" data-label="Red Berry" fill="#CC2222" fill-opacity="0" cx="18" cy="470" r="14"/>
      <circle class="r" id="r-berry2" data-label="Red Berry" fill="#CC2222" fill-opacity="0" cx="50" cy="450" r="13"/>
      <circle class="r" id="r-berry3" data-label="Red Berry" fill="#CC2222" fill-opacity="0" cx="75" cy="465" r="12"/>
      <circle class="r" id="r-berry4" data-label="Red Berry" fill="#CC2222" fill-opacity="0" cx="100" cy="480" r="14"/>
      <circle class="r" id="r-berry5" data-label="Red Berry" fill="#CC2222" fill-opacity="0" cx="125" cy="475" r="12"/>
      <circle class="r" id="r-berry6" data-label="Red Berry" fill="#CC2222" fill-opacity="0" cx="145" cy="490" r="13"/>
      
      <!-- Grass Flowers (4 white/yellow) -->
      <circle class="r" id="r-fl1" data-label="Grass Flower" fill="#FFFFFF" fill-opacity="0" cx="123" cy="913" r="13"/>
      <circle class="r" id="r-fl2" data-label="Grass Flower" fill="#FFFFFF" fill-opacity="0" cx="262" cy="877" r="12"/>
      <circle class="r" id="r-fl3" data-label="Grass Flower" fill="#FFE600" fill-opacity="0" cx="533" cy="908" r="13"/>
      <circle class="r" id="r-fl4" data-label="Grass Flower" fill="#FFFFFF" fill-opacity="0" cx="772" cy="892" r="12"/>
      
      <!-- Purple Flowers (right side) -->
      <circle class="r" id="r-fl5" data-label="Purple Flower" fill="#DDA0DD" fill-opacity="0" cx="850" cy="570" r="22"/>
      <circle class="r" id="r-fl6" data-label="Purple Flower" fill="#DDA0DD" fill-opacity="0" cx="920" cy="620" r="26"/>
      <circle class="r" id="r-fl7" data-label="Purple Flower" fill="#DDA0DD" fill-opacity="0" cx="880" cy="680" r="20"/>
      <circle class="r" id="r-fl8" data-label="Purple Flower" fill="#DDA0DD" fill-opacity="0" cx="940" cy="720" r="18"/>
      
      <!-- Paint Bucket -->
      <rect class="r" id="r-bucket" data-label="Paint Bucket" fill="#C0C0C0" fill-opacity="0" x="760" y="690" width="120" height="180" rx="12"/>
      <path class="r" id="r-bucket-handle" data-label="Paint Bucket Handle" fill="#999999" fill-opacity="0" d="M780,690 Q820,660 860,690 L860,705 Q820,680 780,705 Z"/>
      
      <!-- Girl: Legs -->
      <ellipse class="r" id="r-leg-l" data-label="Left Leg" fill="#8B4513" fill-opacity="0" cx="495" cy="850" rx="20" ry="65"/>
      <ellipse class="r" id="r-leg-r" data-label="Right Leg" fill="#8B4513" fill-opacity="0" cx="540" cy="850" rx="20" ry="65"/>
      
      <!-- Girl: Dress -->
      <path class="r" id="r-dress" data-label="Dress" fill="#FF69B4" fill-opacity="0" d="M455,560 Q450,640 445,720 Q460,770 490,785 Q520,790 545,785 Q575,770 580,720 Q575,640 570,560 Z"/>
      <rect class="r" id="r-strap-l" data-label="Left Dress Strap" fill="#FF69B4" fill-opacity="0" x="465" y="520" width="15" height="45" rx="7"/>
      <rect class="r" id="r-strap-r" data-label="Right Dress Strap" fill="#FF69B4" fill-opacity="0" x="545" y="520" width="15" height="45" rx="7"/>
      
      <!-- Girl: Arms & Hands -->
      <path class="r" id="r-arm-l" data-label="Left Arm" fill="#8B4513" fill-opacity="0" d="M460,545 Q420,520 380,485 Q365,470 360,450 Q355,440 358,430 Q395,465 440,510 Z"/>
      <ellipse class="r" id="r-hand-l" data-label="Left Hand" fill="#8B4513" fill-opacity="0" cx="355" cy="425" rx="18" ry="22"/>
      
      <path class="r" id="r-arm-r" data-label="Right Arm" fill="#8B4513" fill-opacity="0" d="M565,550 Q595,570 630,600 Q645,615 650,635 Q655,645 650,655 Q615,625 575,585 Z"/>
      <ellipse class="r" id="r-hand-r" data-label="Right Hand" fill="#8B4513" fill-opacity="0" cx="655" cy="660" rx="18" ry="24"/>
      
      <!-- Girl: Neck -->
      <rect class="r" id="r-neck" data-label="Neck" fill="#8B4513" fill-opacity="0" x="490" y="470" width="45" height="55" rx="20"/>
      
      <!-- Girl: Face -->
      <ellipse class="r" id="r-face" data-label="Face" fill="#8B4513" fill-opacity="0" cx="510" cy="445" rx="115" ry="110"/>
      
      <!-- Girl: Ears -->
      <ellipse class="r" id="r-ear-l" data-label="Left Ear" fill="#8B4513" fill-opacity="0" cx="405" cy="420" rx="18" ry="23"/>
      <ellipse class="r" id="r-ear-r" data-label="Right Ear" fill="#8B4513" fill-opacity="0" cx="608" cy="418" rx="19" ry="24"/>
      
      <!-- Girl: Eyes -->
      <ellipse class="r" id="r-eye-l-white" data-label="Left Eye White" fill="#FFFFFF" fill-opacity="0" cx="467" cy="401" rx="28" ry="26"/>
      <circle class="r" id="r-pupil-l" data-label="Left Pupil" fill="#111111" fill-opacity="0" cx="467" cy="401" r="12"/>
      
      <ellipse class="r" id="r-eye-r-white" data-label="Right Eye White" fill="#FFFFFF" fill-opacity="0" cx="554" cy="399" rx="29" ry="27"/>
      <circle class="r" id="r-pupil-r" data-label="Right Pupil" fill="#111111" fill-opacity="0" cx="554" cy="399" r="12"/>
      
      <!-- Girl: Cheeks -->
      <ellipse class="r" id="r-cheek-l" data-label="Left Cheek" fill="#FF9999" fill-opacity="0" cx="430" cy="465" rx="20" ry="15"/>
      <ellipse class="r" id="r-cheek-r" data-label="Right Cheek" fill="#FF9999" fill-opacity="0" cx="590" cy="463" rx="20" ry="15"/>
      
      <!-- Girl: Hair (afro puffs) -->
      <ellipse class="r" id="r-hair-main" data-label="Hair (Main)" fill="#2A0A00" fill-opacity="0" cx="510" cy="310" rx="135" ry="95"/>
      <ellipse class="r" id="r-hair-l" data-label="Hair (Left Puff)" fill="#2A0A00" fill-opacity="0" cx="420" cy="350" rx="50" ry="60"/>
      <ellipse class="r" id="r-hair-r" data-label="Hair (Right Puff)" fill="#2A0A00" fill-opacity="0" cx="600" cy="345" rx="50" ry="55"/>
      <ellipse class="r" id="r-hair-top" data-label="Hair (Top)" fill="#2A0A00" fill-opacity="0" cx="510" cy="250" rx="85" ry="50"/>
      
      <!-- Girl: Hair Bow -->
      <ellipse class="r" id="r-bow" data-label="Hair Bow" fill="#1A40CC" fill-opacity="0" cx="595" cy="295" rx="42" ry="35"/>
      
      <!-- Paintbrush -->
      <path class="r" id="r-brush-handle" data-label="Paintbrush Handle" fill="#8B4513" fill-opacity="0" d="M350,420 Q355,410 365,415 L450,555 Q445,565 435,560 Z"/>
      <rect class="r" id="r-brush-ferrule" data-label="Brush Ferrule (Metal)" fill="#C0C0C0" fill-opacity="0" x="365" y="395" width="20" height="30" rx="3"/>
      <path class="r" id="r-brush-tip" data-label="Brush Tip" fill="#FF6B6B" fill-opacity="0" d="M360,365 Q370,350 380,355 Q385,370 380,385 Q375,395 370,390 Q365,380 360,375 Z"/>
      
      <!-- Magic Sparkle -->
      <circle class="r" id="r-sparkle" data-label="Magic Sparkle ✨" fill="#FFE600" fill-opacity="0" cx="358" cy="358" r="20"/>
      <path class="r" id="r-sparkle-rays" data-label="Sparkle Rays" fill="#FFE600" fill-opacity="0" d="M358,338 L358,378 M338,358 L378,358 M345,345 L371,371 M371,345 L345,371"/>
    </svg>

    <p class="cghi">💡 Hover = yellow glow · Click to fill!</p>
    <div class="cgact">
      <button class="cgab" id="cgClear">🗑 Clear All</button>
      <button class="cgab b2" id="cgSave">💾 Save Art</button>
    </div>
  </div>
</div>

</div>

<div id="page-coloring-train" style="display:none;">

<div id="cglbl2"></div>
<div class="cgn">
  <button class="cgb" id="cgBack2">← Back</button>
  <span class="cgt">🚂 Train Boy Coloring</span>
  <span style="width:76px"></span>
</div>
<div class="cgw">
  <div class="cgp" id="cgPal2">
    <div class="cgpl">Colors</div>
    <div class="cgs on" style="background:#D2691E" data-c="#D2691E"></div>
    <div class="cgs" style="background:#8B4513" data-c="#8B4513"></div>
    <div class="cgs" style="background:#FFD700" data-c="#FFD700"></div>
    <div class="cgs" style="background:#FFA500" data-c="#FFA500"></div>
    <div class="cghr"></div>
    <div class="cgs" style="background:#000000" data-c="#000000"></div>
    <div class="cgs" style="background:#FFFFFF;border:2px solid #555" data-c="#FFFFFF"></div>
    <div class="cgs" style="background:#FF1493" data-c="#FF1493"></div>
    <div class="cgs" style="background:#2F4F4F" data-c="#2F4F4F"></div>
    <div class="cgs" style="background:#1E90FF" data-c="#1E90FF"></div>
    <div class="cgs" style="background:#00CED1" data-c="#00CED1"></div>
    <div class="cghr"></div>
    <div class="cgs" style="background:#FF6B6B" data-c="#FF6B6B"></div>
    <div class="cgs" style="background:#FFB6C1" data-c="#FFB6C1"></div>
    <div class="cgs" style="background:#98D8C8" data-c="#98D8C8"></div>
    <div class="cgs" style="background:#FF69B4" data-c="#FF69B4"></div>
    <div class="cgs" style="background:#FFE4B5" data-c="#FFE4B5"></div>
    <div class="cghr"></div>
    <div class="cgs" style="background:#4169E1" data-c="#4169E1"></div>
    <div class="cgs" style="background:#32CD32" data-c="#32CD32"></div>
    <div class="cgs" style="background:#FF4500" data-c="#FF4500"></div>
    <div class="cgs" style="background:#9370DB" data-c="#9370DB"></div>
    <div class="cgs" style="background:#FFD700" data-c="#FFD700"></div>
    <div class="cgs" style="background:#C0C0C0" data-c="#C0C0C0"></div>
    <div class="cghr"></div>
    <div class="cgtl on" id="cgPaint2">🖌️</div>
    <div class="cgtl" id="cgErase2">⬜</div>
  </div>

  <div class="cgm">
    <h2>🚂 Train Boy</h2>
    <p>Hover to see each section · Click to fill with color!</p>

    <svg id="cgsvg2" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <image href="/static/groove-train-boy-color.jpg" width="1024" height="1024"/>
      
      <!-- Main Character - Hair -->
      <path class="r" id="tb-hair" data-label="Hair" fill="#2A0A00" fill-opacity="0" 
        d="M370,56 Q420,50 460,55 Q500,60 540,70 Q580,85 610,110 Q635,140 650,180 
           Q660,220 658,260 Q655,300 645,330 Q620,340 590,345 Q560,348 530,348 
           Q500,348 470,345 Q440,342 410,335 Q380,325 360,310 Q345,290 355,260 
           Q360,220 365,180 Q368,140 370,100 Z"/>
      
      <!-- Face -->
      <ellipse class="r" id="tb-face" data-label="Face" fill="#D2691E" fill-opacity="0" 
        cx="504" cy="288" rx="129" ry="133"/>
      
      <!-- Left Ear -->
      <ellipse class="r" id="tb-ear-l" data-label="Left Ear" fill="#D2691E" fill-opacity="0" 
        cx="376" cy="265" rx="17" ry="39"/>
      
      <!-- Right Ear -->
      <ellipse class="r" id="tb-ear-r" data-label="Right Ear" fill="#D2691E" fill-opacity="0" 
        cx="635" cy="265" rx="17" ry="39"/>
      
      <!-- Left Eyebrow -->
      <path class="r" id="tb-eyebrow-l" data-label="Left Eyebrow" fill="#000000" fill-opacity="0" 
        d="M412,191 Q430,185 450,191 Q460,195 465,205 Q455,210 445,209 Q425,207 412,201 Z"/>
      
      <!-- Right Eyebrow -->
      <path class="r" id="tb-eyebrow-r" data-label="Right Eyebrow" fill="#000000" fill-opacity="0" 
        d="M527,191 Q545,185 565,191 Q575,195 580,205 Q570,210 560,209 Q540,207 527,201 Z"/>
      
      <!-- Left Eye White -->
      <ellipse class="r" id="tb-eye-l-white" data-label="Left Eye White" fill="#FFFFFF" fill-opacity="0" 
        cx="445" cy="279" rx="43" ry="48"/>
      
      <!-- Left Eye Pupil -->
      <circle class="r" id="tb-pupil-l" data-label="Left Pupil" fill="#000000" fill-opacity="0" 
        cx="445" cy="279" r="22"/>
      
      <!-- Right Eye White -->
      <ellipse class="r" id="tb-eye-r-white" data-label="Right Eye White" fill="#FFFFFF" fill-opacity="0" 
        cx="563" cy="279" rx="43" ry="48"/>
      
      <!-- Right Eye Pupil -->
      <circle class="r" id="tb-pupil-r" data-label="Right Pupil" fill="#000000" fill-opacity="0" 
        cx="563" cy="279" r="22"/>
      
      <!-- Nose -->
      <ellipse class="r" id="tb-nose" data-label="Nose" fill="#B8621B" fill-opacity="0" 
        cx="505" cy="328" rx="18" ry="26"/>
      
      <!-- Mouth/Smile -->
      <path class="r" id="tb-mouth" data-label="Smile" fill="#8B4513" fill-opacity="0" 
        d="M463,346 Q475,365 490,373 Q505,378 520,373 Q535,365 547,346 
           Q540,360 525,370 Q510,377 495,377 Q480,377 470,370 Q460,360 463,346 Z"/>
      
      <!-- Neck -->
      <rect class="r" id="tb-neck" data-label="Neck" fill="#D2691E" fill-opacity="0" 
        x="474" y="396" width="60" height="69" rx="25"/>
      
      <!-- Shirt (under jacket) -->
      <rect class="r" id="tb-shirt" data-label="Shirt" fill="#000000" fill-opacity="0" 
        x="455" y="439" width="90" height="346" rx="10"/>
      
      <!-- Jacket Body -->
      <path class="r" id="tb-jacket" data-label="Golden Jacket" fill="#FFD700" fill-opacity="0" 
        d="M362,411 Q380,405 410,410 Q450,415 490,420 Q530,420 570,415 Q610,410 642,411 
           Q655,415 662,430 Q665,450 665,480 Q665,530 660,580 Q655,620 648,652 
           Q620,655 580,655 Q540,655 500,655 Q460,655 420,655 Q380,655 352,652 
           Q345,620 340,580 Q335,530 335,480 Q335,450 338,430 Q345,415 362,411 Z"/>
      
      <!-- Left Sleeve -->
      <path class="r" id="tb-sleeve-l" data-label="Left Sleeve" fill="#FFD700" fill-opacity="0" 
        d="M234,432 Q260,425 295,430 Q330,440 360,455 Q380,475 395,505 
           Q405,540 410,580 Q415,620 420,655 Q410,668 395,674 
           Q365,665 335,645 Q305,620 280,585 Q255,545 240,500 Q230,465 234,432 Z"/>
      
      <!-- Right Sleeve -->
      <path class="r" id="tb-sleeve-r" data-label="Right Sleeve" fill="#FFD700" fill-opacity="0" 
        d="M790,432 Q764,425 729,430 Q694,440 664,455 Q644,475 629,505 
           Q619,540 614,580 Q609,620 604,655 Q614,668 629,674 
           Q659,665 689,645 Q719,620 744,585 Q769,545 784,500 Q794,465 790,432 Z"/>
      
      <!-- Left Arm/Hand -->
      <path class="r" id="tb-arm-l" data-label="Left Arm" fill="#D2691E" fill-opacity="0" 
        d="M231,454 Q245,465 260,485 Q280,510 300,540 Q320,570 340,600 
           Q355,625 370,645 Q380,658 390,668 Q375,670 360,665 
           Q330,650 305,625 Q275,590 250,545 Q230,500 231,454 Z"/>
      
      <ellipse class="r" id="tb-hand-l" data-label="Left Hand" fill="#D2691E" fill-opacity="0" 
        cx="324" cy="598" rx="45" ry="38"/>
      
      <!-- Right Arm/Hand -->
      <path class="r" id="tb-arm-r" data-label="Right Arm" fill="#D2691E" fill-opacity="0" 
        d="M783,454 Q769,465 754,485 Q734,510 714,540 Q694,570 674,600 
           Q659,625 644,645 Q634,658 624,668 Q639,670 654,665 
           Q684,650 709,625 Q739,590 764,545 Q784,500 783,454 Z"/>
      
      <ellipse class="r" id="tb-hand-r" data-label="Right Hand" fill="#D2691E" fill-opacity="0" 
        cx="686" cy="598" rx="47" ry="39"/>
      
      <!-- Pants -->
      <path class="r" id="tb-pants" data-label="Pants" fill="#2F4F4F" fill-opacity="0" 
        d="M422,640 Q425,680 428,730 Q430,780 432,830 Q433,880 434,930 
           Q434,955 434,980 L434,1023 
           L474,1023 L474,980 Q474,955 473,930 Q472,880 470,830 Q468,780 466,730 Q464,680 462,640 Z
           M506,640 Q509,680 512,730 Q514,780 516,830 Q517,880 518,930 
           Q518,955 518,980 L518,1023 
           L558,1023 L558,980 Q558,955 557,930 Q556,880 554,830 Q552,780 550,730 Q548,680 546,640 Z"/>
      
      <!-- Left Shoe -->
      <path class="r" id="tb-shoe-l" data-label="Left Shoe" fill="#000000" fill-opacity="0" 
        d="M409,887 Q420,880 440,885 Q460,890 475,900 Q485,915 490,935 
           Q492,960 490,985 Q488,1005 485,1020 L485,1024 
           L415,1024 L415,1020 Q413,1005 411,985 Q409,960 410,935 Q411,915 415,900 Z"/>
      
      <!-- Right Shoe -->
      <path class="r" id="tb-shoe-r" data-label="Right Shoe" fill="#000000" fill-opacity="0" 
        d="M526,889 Q537,882 557,887 Q577,892 592,902 Q602,917 607,937 
           Q609,962 607,987 Q605,1007 602,1022 L602,1024 
           L532,1024 L532,1022 Q530,1007 528,987 Q526,962 527,937 Q528,917 532,902 Z"/>
      
      <!-- Train Floor -->
      <path class="r" id="tb-floor" data-label="Train Floor" fill="#1E90FF" fill-opacity="0" 
        d="M0,546 Q150,520 323,540 Q400,545 512,548 Q624,545 701,540 Q874,520 1024,546 
           L1024,1024 L0,1024 Z"/>
      
      <!-- Left Seats -->
      <path class="r" id="tb-seat-l" data-label="Left Seats" fill="#4169E1" fill-opacity="0" 
        d="M0,572 Q100,568 200,580 Q280,590 360,610 Q400,625 442,650 
           L442,1024 L0,1024 Z"/>
      
      <!-- Right Seats -->
      <path class="r" id="tb-seat-r" data-label="Right Seats" fill="#4169E1" fill-opacity="0" 
        d="M1024,572 Q924,568 824,580 Q744,590 664,610 Q624,625 582,650 
           L582,1024 L1024,1024 Z"/>
      
      <!-- Left Window -->
      <rect class="r" id="tb-window-l" data-label="Left Window" fill="#00CED1" fill-opacity="0" 
        x="0" y="341" width="248" height="496" rx="15"/>
      
      <!-- Right Window -->
      <rect class="r" id="tb-window-r" data-label="Right Window" fill="#00CED1" fill-opacity="0" 
        x="784" y="341" width="240" height="496" rx="15"/>
      
      <!-- Ceiling/Roof -->
      <rect class="r" id="tb-ceiling" data-label="Train Ceiling" fill="#1E90FF" fill-opacity="0" 
        x="0" y="0" width="1024" height="370" rx="0"/>
      
      <!-- Left Ceiling Light -->
      <rect class="r" id="tb-light-l" data-label="Ceiling Light" fill="#FFFFCC" fill-opacity="0" 
        x="256" y="0" width="114" height="173" rx="20"/>
      
      <!-- Center-Left Light -->
      <rect class="r" id="tb-light-cl" data-label="Ceiling Light" fill="#FFFFCC" fill-opacity="0" 
        x="387" y="0" width="79" height="196" rx="15"/>
      
      <!-- Center-Right Light -->
      <rect class="r" id="tb-light-cr" data-label="Ceiling Light" fill="#FFFFCC" fill-opacity="0" 
        x="540" y="0" width="76" height="197" rx="15"/>
      
      <!-- Right Ceiling Light -->
      <rect class="r" id="tb-light-r" data-label="Ceiling Light" fill="#FFFFCC" fill-opacity="0" 
        x="790" y="0" width="113" height="176" rx="20"/>
    </svg>

    <p class="cghi">💡 Hover = yellow glow · Click to fill!</p>
    <div class="cgact">
      <button class="cgab" id="cgClear2">🗑 Clear All</button>
      <button class="cgab b2" id="cgSave2">💾 Save Art</button>
    </div>
  </div>
</div>

</div>

<!-- ═══ MATH QUEST PAGE ═══ -->
<div id="page-math-quest" style="display:none; min-height:100vh; background:#0a1628;">
  <div id="mq-nav" style="position:fixed;top:0;left:0;width:100%;z-index:999;background:rgba(0,0,0,0.5);padding:10px 16px;display:flex;align-items:center;backdrop-filter:blur(8px);border-bottom:1px solid rgba(255,215,0,0.15);">
    <button class="back-btn" onclick="showPage('train')" style="font-family:'Orbitron',sans-serif;font-size:0.75rem;">← Back</button>
    <span style="margin-left:16px;color:#FFD700;font-family:'Orbitron',sans-serif;font-size:0.8rem;letter-spacing:2px;">🎵 MATH QUEST</span>
  </div>
  <div style="padding-top:48px;">
    <iframe id="math-quest-frame"
      src="/static/math-quest.html"
      style="width:100%;height:calc(100vh - 48px);border:none;display:block;"
      title="Math Quest Game"
      allow="autoplay"
    ></iframe>
  </div>
</div>

<script src="/static/app.js"></script>
</body>
</html>`)
})

export default app

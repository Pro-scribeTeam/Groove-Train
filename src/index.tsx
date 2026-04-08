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
      <button onclick="showPage('coloring')" style="margin-top:12px;padding:10px 24px;background:transparent;border:2px solid var(--neon-yellow);color:var(--neon-yellow);font-family:'Orbitron',sans-serif;font-size:0.72rem;letter-spacing:2px;text-transform:uppercase;clip-path:polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%);">▶ Play Now</button>
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

    <svg id="cgsvg" viewBox="0 0 1792 1024" xmlns="http://www.w3.org/2000/svg">
      <image href="/static/coloring-bw.jpg" width="1792" height="1024"/>
      
      <rect class="r" id="r-sky" data-label="Sky" fill="#87CEEB" x="0" y="0" width="1792" height="1024"/>
      
      <path class="r" id="r-rb-red" data-label="Rainbow – Red" fill="#FF2020" d="M0,701.8 A1684,1684 0 0 1 1792,898.2 L1792,991.7 A1612,1612 0 0 0 0,782.4Z"/>
      <path class="r" id="r-rb-orange" data-label="Rainbow – Orange" fill="#FF8800" d="M0,782.4 A1612,1612 0 0 1 1792,991.7 L741.0,0 A1545,1545 0 0 0 0,858.3Z"/>
      <path class="r" id="r-rb-yellow" data-label="Rainbow – Yellow" fill="#FFE600" d="M0,858.3 A1545,1545 0 0 1 741.0,0 L741.0,0 A1478,1478 0 0 0 0,935.2Z"/>
      <path class="r" id="r-rb-green" data-label="Rainbow – Green" fill="#00CC00" d="M0,935.2 A1478,1478 0 0 1 741.0,0 L741.0,0 A1409,1409 0 0 0 0,1015.6Z"/>
      <path class="r" id="r-rb-blue" data-label="Rainbow – Blue" fill="#0077FF" d="M0,1015.6 A1409,1409 0 0 1 741.0,0 L741.0,0 A1340,1340 0 0 0 741.0,0Z"/>
      <path class="r" id="r-rb-violet" data-label="Rainbow – Violet" fill="#7700CC" d="M741.0,0 A1340,1340 0 0 1 741.0,0 L741.0,0 A1272,1272 0 0 0 741.0,0Z"/>
      
      <ellipse class="r" id="r-cloud-l" data-label="Left Cloud" fill="#FFFFFF" cx="280" cy="490" rx="260" ry="175"/>
      <ellipse class="r" id="r-cloud-r" data-label="Right Cloud" fill="#FFFFFF" cx="1490" cy="390" rx="260" ry="220"/>
      
      <path class="r" id="r-plant-l" data-label="Left Plants" fill="#1A5C1A" d="M0,420 Q100,380 230,420 Q330,450 360,530 Q280,660 150,700 Q50,720 0,680Z"/>
      <ellipse class="r" id="r-plant-l2" data-label="Left Plants" fill="#1A5C1A" cx="150" cy="810" rx="200" ry="120"/>
      
      <path class="r" id="r-plant-r" data-label="Right Plants" fill="#1A5C1A" d="M1450,400 Q1580,350 1720,380 Q1792,400 1792,450 L1792,850 Q1680,820 1560,790 Q1450,760 1430,660 Q1410,560 1450,480Z"/>
      <ellipse class="r" id="r-plant-r2" data-label="Right Plants" fill="#1A5C1A" cx="1620" cy="830" rx="180" ry="120"/>
      
      <path class="r" id="r-grass" data-label="Grass" fill="#3CB371" d="M0,860 Q450,810 896,820 Q1350,810 1792,860 L1792,1024 L0,1024Z"/>
      
      <circle class="r" id="r-berry1" data-label="Red Berries" fill="#CC2222" cx="115" cy="530" r="28"/>
      <circle class="r" id="r-berry2" data-label="Red Berries" fill="#CC2222" cx="160" cy="490" r="22"/>
      <circle class="r" id="r-berry3" data-label="Red Berries" fill="#CC2222" cx="200" cy="510" r="24"/>
      
      <circle class="r" id="r-fl1" data-label="White Flower" fill="#FFFFFF" cx="400" cy="862" r="22"/>
      <circle class="r" id="r-fl2" data-label="White Flower" fill="#FFFFFF" cx="560" cy="875" r="18"/>
      <circle class="r" id="r-fl3" data-label="Yellow Flower" fill="#FFE600" cx="688" cy="868" r="18"/>
      <circle class="r" id="r-fl4" data-label="White Flower" fill="#FFFFFF" cx="1115" cy="872" r="18"/>
      <circle class="r" id="r-fl5" data-label="Purple Flower" fill="#DDA0DD" cx="1560" cy="644" r="30"/>
      <circle class="r" id="r-fl6" data-label="Purple Flower" fill="#DDA0DD" cx="1626" cy="612" r="24"/>
      <circle class="r" id="r-fl7" data-label="White Flower" fill="#FFFFFF" cx="1528" cy="706" r="22"/>
      
      <rect class="r" id="r-bucket" data-label="Paint Bucket" fill="#C0C0C0" x="1500" y="790" width="140" height="130" rx="14"/>
      
      <ellipse class="r" id="r-leg-l" data-label="Legs" fill="#8B4513" cx="855" cy="950" rx="28" ry="52"/>
      <ellipse class="r" id="r-leg-r" data-label="Legs" fill="#8B4513" cx="910" cy="950" rx="28" ry="52"/>
      
      <path class="r" id="r-dress" data-label="Dress" fill="#6B9FBE" d="M835,660 Q818,760 808,880 Q850,900 890,898 Q932,898 958,878 Q945,760 928,660Z"/>
      <rect class="r" id="r-strap" data-label="Dress Straps" fill="#6B9FBE" x="843" y="600" width="24" height="62" rx="10"/>
      <rect class="r" id="r-strap2" data-label="Dress Straps" fill="#6B9FBE" x="906" y="600" width="24" height="62" rx="10"/>
      
      <path class="r" id="r-arm-r" data-label="Right Arm" fill="#8B4513" d="M955,670 Q990,700 1010,760 Q998,778 988,774 Q970,718 940,682Z"/>
      <ellipse class="r" id="r-hand-r" data-label="Right Hand" fill="#8B4513" cx="1005" cy="774" rx="22" ry="28"/>
      
      <path class="r" id="r-arm-l" data-label="Left Arm" fill="#8B4513" d="M838,650 Q780,608 735,554 Q724,534 732,518 Q786,568 844,622Z"/>
      <ellipse class="r" id="r-hand-l" data-label="Left Hand" fill="#8B4513" cx="728" cy="516" rx="24" ry="32"/>
      
      <rect class="r" id="r-neck" data-label="Neck" fill="#8B4513" x="862" y="588" width="40" height="58" rx="14"/>
      
      <ellipse class="r" id="r-ear-l" data-label="Left Ear" fill="#8B4513" cx="808" cy="530" rx="22" ry="28"/>
      <ellipse class="r" id="r-ear-r" data-label="Right Ear" fill="#8B4513" cx="992" cy="522" rx="22" ry="28"/>
      
      <ellipse class="r" id="r-face" data-label="Face" fill="#8B4513" cx="898" cy="490" rx="94" ry="115"/>
      
      <ellipse class="r" id="r-cheek-l" data-label="Left Cheek" fill="#FF9999" cx="828" cy="554" rx="28" ry="17"/>
      <ellipse class="r" id="r-cheek-r" data-label="Right Cheek" fill="#FF9999" cx="968" cy="548" rx="28" ry="17"/>
      
      <ellipse class="r" id="r-hair1" data-label="Hair" fill="#2A0A00" cx="884" cy="330" rx="130" ry="100"/>
      <ellipse class="r" id="r-hair2" data-label="Hair" fill="#2A0A00" cx="804" cy="380" rx="62" ry="72"/>
      <ellipse class="r" id="r-hair3" data-label="Hair" fill="#2A0A00" cx="980" cy="366" rx="62" ry="66"/>
      <ellipse class="r" id="r-hair4" data-label="Hair" fill="#2A0A00" cx="884" cy="268" rx="100" ry="62"/>
      
      <ellipse class="r" id="r-bow" data-label="Hair Bow" fill="#1A40CC" cx="1012" cy="310" rx="40" ry="25"/>
      
      <ellipse class="r" id="r-eye-l" data-label="Left Eye" fill="#222222" cx="856" cy="496" rx="32" ry="38"/>
      <ellipse class="r" id="r-eyew-l" data-label="Eye White" fill="#FFFFFF" cx="854" cy="494" rx="22" ry="28"/>
      <circle  class="r" id="r-pupil-l" data-label="Left Pupil" fill="#111111" cx="856" cy="498" r="13"/>
      
      <ellipse class="r" id="r-eye-r" data-label="Right Eye" fill="#222222" cx="938" cy="490" rx="32" ry="38"/>
      <ellipse class="r" id="r-eyew-r" data-label="Eye White" fill="#FFFFFF" cx="936" cy="488" rx="22" ry="28"/>
      <circle  class="r" id="r-pupil-r" data-label="Right Pupil" fill="#111111" cx="938" cy="492" r="13"/>
      
      <path class="r" id="r-brush" data-label="Paintbrush Handle" fill="#8B6914" d="M722,512 Q729,498 746,505 L848,658 Q840,670 826,664Z"/>
      <path class="r" id="r-brush-tip" data-label="Brush Tip" fill="#CC8844" d="M690,432 Q714,402 744,412 Q736,456 706,466Z"/>
      <circle class="r" id="r-sparkle" data-label="Magic Sparkle" fill="#FFE600" cx="700" cy="432" r="38"/>
    </svg>

    <p class="cghi">💡 Hover = yellow glow · Click to fill!</p>
    <div class="cgact">
      <button class="cgab" id="cgClear">🗑 Clear All</button>
      <button class="cgab b2" id="cgSave">💾 Save Art</button>
    </div>
  </div>
</div>

</div>

<script src="/static/app.js"></script>
</body>
</html>`)
})

export default app

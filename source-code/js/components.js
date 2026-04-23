document.getElementById("navbar").innerHTML = `

<header class="navbar">

<div class="nav-left">
<a href="index.html" class="site-title">AI in CS Education Today</a>
</div>

<div class="nav-middle">
<div class="nav-image">

</div>
</div>

<button class="hamburger" aria-label="Toggle menu">
<span></span>
<span></span>
<span></span>
</button>

<div class="nav-right">
<a href="index.html">Home</a>
<a href="c4_avi_article_page.html">AI in AVIs</a>
<a href="c5_ai_integrity_page.html">AI Integrity in Education</a>
<a href="c6_ai_ethics_page.html">AI Ethics</a>
<a href="ai_critical_thinking_page.html">AI & Critical Thinking</a>
<a href="takeAction.html">Taking Action</a>
<a href="aboutUs.html">About Us</a>
</div>

</header>

`;

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

if (hamburger && navbar) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('menu-open');
  });
}


document.getElementById("footer").innerHTML = `

<footer class="footer">

<p>AI in CS Education Today | CSCI-163</p>

</footer>

`;
// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if(target) target.scrollIntoView({ behavior: "smooth" });
    });
});

// CIRCULAR SKILL PROGRESS
document.querySelectorAll('.circle').forEach(circle => {
    const percent = circle.getAttribute('data-percent');
    const progress = circle.querySelector('.progress');
    if(!progress) return;

    const radius = progress.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    progress.style.strokeDasharray = circumference;
    progress.style.strokeDashoffset = circumference;

    setTimeout(() => progress.style.strokeDashoffset = offset, 500);
});

// EXPERIENCE/Education Tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.getAttribute('data-tab')).classList.add('active');
    });
});

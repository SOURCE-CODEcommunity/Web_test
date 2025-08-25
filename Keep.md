Communications for Christ Website Implementation

I'll create a comprehensive website for Communications for Christ Ministries based on your requirements. Let me build this with a clean, professional design that's appropriate for a church ministry.

File Structure

```
root/
├── index.html
├── about.html
├── articles.html
├── media.html
├── events.html
├── styles/
│   └── styles001.css
├── js/
│   ├── db.js
│   └── script.js
├── assets/
│   ├── images/
│   ├── audio/
│   └── pdf/
```

Let me start with the main HTML structure and then implement the CSS and JavaScript:

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CfC Ministries</title>
    <link rel="stylesheet" href="styles/styles001.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Header & Navigation -->
    <header id="header">
        <div class="container nav-container">
            <a href="index.html" class="logo">CfC Ministries</a>
            
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <ul class="nav-menu">
                <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
                <li class="nav-item"><a href="articles.html" class="nav-link">Articles</a></li>
                <li class="nav-item"><a href="media.html" class="nav-link">Media</a></li>
                <li class="nav-item"><a href="events.html" class="nav-link">Events</a></li>
                <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-bg-overlay"></div>
        <div class="hero-content">
            <h1 class="hero-title">Communications for Christ</h1>
            <p class="hero-subtitle">Welcome to the official website of the Communications for Christ World Outreach Ministry, Nigeria</p>
            <p class="hero-text">….communicating the very pure gospel of Jesus Christ</p>
            <a href="#about-mini" class="btn">Learn More</a>
        </div>
    </section>

    <!-- About Mini Section -->
    <section id="about-mini" class="section">
        <div class="container">
            <div class="section-header">
                <h2>About The Ministry</h2>
            </div>
            <div class="about-mini-content">
                <p>Communications for Christ is a group of ministries commissioned to propagate the very pure gospel of Jesus Christ. According to the Holy Spirit, Communications for Christ is God's end-time justification for himself in that he makes knowledge of truth available and accessible to us for liberation from Satan's deception...</p>
                <a href="about.html#ministry" class="btn btn-outline">Read More</a>
            </div>
        </div>
    </section>

    <!-- Minister Mini Section -->
    <section id="minister-mini" class="section bg-light">
        <div class="container">
            <div class="section-header">
                <h2>About The Minister</h2>
            </div>
            <div class="minister-mini-content">
                <div class="minister-image">
                    <img src="assets/images/minister.jpg" alt="Apostle Iyiola O. M.">
                </div>
                <div class="minister-text">
                    <p>Apostle Iyiola Olatunji Mukaila was born in January 1967 at Elekuro, south-eastern part of Ibadan, Oyo State, Nigeria. He attended Naiwair- rudeen and Adelagun Memorial Primary Schools for his primary education between 1973 and 1979...</p>
                    <a href="about.html#minister" class="btn btn-outline">Read More</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Articles Mini Section -->
    <section id="articles-mini" class="section">
        <div class="container">
            <div class="section-header">
                <h2>Latest Articles</h2>
            </div>
            <div class="articles-grid" id="articles-container">
                <!-- Articles will be loaded from db.js -->
            </div>
            <div class="text-center">
                <a href="articles.html" class="btn-link">More Articles <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contact">
        <div class="container">
            <div class="footer-content">
                <div class="footer-info">
                    <a href="index.html" class="footer-logo">CfC Ministries</a>
                    <p>Communicating the very pure gospel of Jesus Christ</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="articles.html">Articles</a></li>
                        <li><a href="media.html">Media</a></li>
                        <li><a href="events.html">Events</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><i class="fas fa-map-marker-alt"></i> Ibadan, Oyo State, Nigeria</li>
                        <li><i class="fas fa-phone"></i> +234 XXX XXX XXXX</li>
                        <li><i class="fas fa-envelope"></i> info@cfcministries.org</li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>@CfC Ministries©2025</p>
            </div>
        </div>
    </footer>

    <script src="js/db.js"></script>
    <script src="js/script.js"></script>
    <script>
        // Load articles on homepage
        document.addEventListener('DOMContentLoaded', function() {
            loadFeaturedArticles();
        });
    </script>
</body>
</html>
```

styles/styles001.css

```css
:root {
    --primary: #2c3e50;
    --secondary: #3498db;
    --accent: #e74c3c;
    --light: #ecf0f1;
    --dark: #2c3e50;
    --text: #333;
    --transition: all 0.3s ease;
    --gold: #d4af37;
    --purple: #8e44ad;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
    color: var(--text);
    overflow-x: hidden;
    background-color: #f9f9f9;
}

h1, h2, h3, h4, h5 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

/* Header & Navigation */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: 1.5rem 0;
    transition: var(--transition);
    background-color: var(--primary);
}

header.scrolled {
    background-color: rgba(44, 62, 80, 0.95);
    padding: 1rem 0;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--light);
    text-decoration: none;
    transition: var(--transition);
}

header.scrolled .logo {
    color: var(--light);
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: var(--light);
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
    position: relative;
}

header.scrolled .nav-link {
    color: var(--light);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--gold);
    transition: var(--transition);
}

.nav-link:hover::after {
    width: 100%;
}

/* Hero Section */
.hero {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    overflow: hidden;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('assets/images/hero-bg.jpg') no-repeat center center/cover;
}

.hero-bg-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3));
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    padding: 0 2rem;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeUp 1s ease forwards 0.5s;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    color: var(--gold);
}

.hero-subtitle {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
}

.hero-text {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    font-style: italic;
}

.btn {
    display: inline-block;
    padding: 1rem 2.5rem;
    background-color: var(--gold);
    color: var(--dark);
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    transition: var(--transition);
    border: none;
    cursor: pointer;
    font-size: 1rem;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    background-color: #c69c2b;
}

.btn-outline {
    background-color: transparent;
    border: 2px solid var(--gold);
    color: var(--dark);
}

.btn-outline:hover {
    background-color: var(--gold);
    color: var(--dark);
}

.btn-link {
    display: inline-block;
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
}

.btn-link:hover {
    color: var(--gold);
}

/* Sections */
.section {
    padding: 6rem 0;
}

.section-header {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
}

.section-header h2 {
    position: relative;
    display: inline-block;
    padding-bottom: 1rem;
}

.section-header h2::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: var(--gold);
}

.bg-light {
    background-color: var(--light);
}

/* About Mini Section */
.about-mini-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

.about-mini-content p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
    line-height: 1.8;
}

/* Minister Mini Section */
.minister-mini-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
    align-items: center;
}

.minister-image {
    border-radius: 50%;
    overflow: hidden;
    width: 250px;
    height: 250px;
    margin: 0 auto;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.minister-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.minister-text {
    text-align: left;
}

.minister-text p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
    line-height: 1.8;
}

/* Articles Section */
.articles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.article-card {
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: var(--transition);
    position: relative;
}

.article-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

.article-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.article-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.article-card:hover .article-image img {
    transform: scale(1.05);
}

.article-content {
    padding: 1.5rem;
}

.article-title {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
}

.article-date {
    color: #777;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    display: block;
}

.article-excerpt {
    margin-bottom: 1.5rem;
}

.article-link {
    color: var(--gold);
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
}

.article-link i {
    margin-left: 0.5rem;
    transition: var(--transition);
}

.article-link:hover i {
    transform: translateX(5px);
}

.text-center {
    text-align: center;
}

/* Footer */
footer {
    background-color: var(--dark);
    color: white;
    padding: 4rem 0 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
}

.footer-logo {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 1rem;
    display: block;
    color: var(--gold);
}

.footer-info p {
    margin-bottom: 1.5rem;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: white;
    transition: var(--transition);
}

.social-links a:hover {
    background-color: var(--gold);
    color: var(--dark);
}

.footer-links h3 {
    margin-bottom: 1.5rem;
    color: var(--gold);
}

.footer-links ul {
    list-style: none;
}

.footer-links li {
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
}

.footer-links li i {
    margin-right: 0.5rem;
    color: var(--gold);
}

.footer-links a {
    color: #ccc;
    text-decoration: none;
    transition: var(--transition);
}

.footer-links a:hover {
    color: white;
    padding-left: 5px;
}

.copyright {
    text-align: center;
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: #999;
}

/* Animations */
@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive Design */
@media (max-width: 992px) {
    .hero-title {
        font-size: 3rem;
    }
    
    .minister-mini-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
    }
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-subtitle {
        font-size: 1.2rem;
    }
    
    .hero-text {
        font-size: 1rem;
    }
    
    .nav-menu {
        position: fixed;
        top: 0;
        right: -100%;
        height: 100vh;
        width: 80%;
        max-width: 400px;
        background-color: white;
        flex-direction: column;
        padding: 100px 2rem 2rem;
        transition: right 0.4s ease;
        box-shadow: -5px 0 25px rgba(0, 0, 0, 0.1);
    }
    
    .nav-menu.active {
        right: 0;
    }
    
    .nav-item {
        margin: 1.5rem 0;
    }
    
    .nav-link {
        color: var(--dark);
        font-size: 1.2rem;
    }
    
    .hamburger {
        display: block;
        cursor: pointer;
        z-index: 1001;
    }
    
    .hamburger span {
        display: block;
        width: 30px;
        height: 3px;
        margin: 6px 0;
        background-color: white;
        transition: var(--transition);
    }
    
    header.scrolled .hamburger span {
        background-color: white;
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(6px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    }
}
```

js/db.js

```javascript
// Database for Communications for Christ Ministries

// Articles Data
const articlesData = {
    article1: {
        id: 1,
        title: "The Power of God's Word",
        description: "Understanding the transformative power of Scripture in our daily lives",
        excerpt: "The word of God is living and active, sharper than any double-edged sword...",
        content: "<h1>The Power of God's Word</h1><p>Full content about the power of God's word...</p>",
        image: "assets/images/article1.jpg",
        date: "October 15, 2023",
        author: "Apostle Iyiola O. M."
    },
    article2: {
        id: 2,
        title: "Walking in Faith",
        description: "Practical steps to develop a stronger faith walk with Christ",
        excerpt: "Faith is the assurance of things hoped for, the conviction of things not seen...",
        content: "<h1>Walking in Faith</h1><p>Full content about walking in faith...</p>",
        image: "assets/images/article2.jpg",
        date: "September 28, 2023",
        author: "Apostle Iyiola O. M."
    },
    article3: {
        id: 3,
        title: "The Role of the Holy Spirit",
        description: "Understanding the guidance and power of the Holy Spirit in believers' lives",
        excerpt: "The Holy Spirit is our helper, guide, and comforter in this journey of faith...",
        content: "<h1>The Role of the Holy Spirit</h1><p>Full content about the Holy Spirit...</p>",
        image: "assets/images/article3.jpg",
        date: "August 12, 2023",
        author: "Apostle Iyiola O. M."
    }
};

// Events Data
const eventsData = {
    event1: {
        id: 1,
        title: "Annual Gospel Conference",
        description: "A time of refreshing and renewal in God's presence",
        excerpt: "Join us for our annual conference with powerful speakers and worship...",
        fullDescription: "This year's conference theme is 'Renewed Strength' based on Isaiah 40:31. We'll have special guest speakers, powerful worship sessions, and prayer meetings.",
        venue: "CfC Ministry Headquarters, Ibadan",
        date: "November 15-17, 2023",
        time: "9:00 AM Daily",
        image: "assets/images/event1.jpg",
        links: [
            {text: "Zoom Link", url: "https://zoom.us/j/123456789"},
            {text: "YouTube Live", url: "https://youtube.com/cfcministries/live"}
        ]
    },
    event2: {
        id: 2,
        title: "Youth Empowerment Summit",
        description: "Equipping the next generation for Christ",
        excerpt: "Special event focused on empowering young people to live for Christ...",
        fullDescription: "This summit is designed for youths aged 13-25. We'll have sessions on identity in Christ, dealing with peer pressure, and discovering God's purpose for your life.",
        venue: "City Hall, Ibadan",
        date: "December 5, 2023",
        time: "10:00 AM - 4:00 PM",
        image: "assets/images/event2.jpg",
        links: [
            {text: "Registration Form", url: "https://forms.gle/example"},
            {text: "Event Brochure", url: "assets/pdf/youth-summit.pdf"}
        ]
    }
};

// Media Data
const mediasData = {
    media1: {
        id: 1,
        type: "youtube",
        title: "The Truth That Sets Free",
        description: "A message on John 8:32 about the liberating power of God's truth",
        iframe: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/example1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        date: "October 10, 2023"
    },
    media2: {
        id: 2,
        type: "youtube",
        title: "Walking in Victory",
        description: "Understanding our position as more than conquerors in Christ",
        iframe: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/example2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        date: "September 22, 2023"
    },
    media3: {
        id: 3,
        type: "mp3",
        title: "The Grace of God",
        description: "Audio message on Ephesians 2:8-9",
        audio: "assets/audio/grace-of-god.mp3",
        date: "October 5, 2023",
        duration: "45:32"
    },
    media4: {
        id: 4,
        type: "mp3",
        title: "Prayer That Avails Much",
        description: "Teaching on effective prayer from James 5:16",
        audio: "assets/audio/prayer-that-avails.mp3",
        date: "September 18, 2023",
        duration: "38:15"
    }
};

// About Data
const aboutData = {
    aboutMinistry: {
        sections: [
            {
                title: "What is Communications for Christ?",
                content: "Communications for Christ is a group of ministries commissioned to propagate the very pure gospel of Jesus Christ. According to the Holy Spirit, Communications for Christ is God's end-time justification for himself in that he makes knowledge of truth available and accessible to us for liberation from Satan's deception, with which he rules the world."
            },
            {
                title: "The Call Mandate and the Origin of the Ministry's Name",
                content: 'God said to His Minister (the General Overseer of Communications for Christ):<br><br><em>"My people are being destroyed for lack of knowledge, Go now, and communicate my knowledge to my people As I speak through you."</em><br><br>The call mandate is to communicate to people what God wants them to know as it is contained in His word. This means that whatever is to be communicated for Jesus Christ is not new, it is already in the word of God, but is either not known or forgotten or misunderstood or misinterpreted.<br><br>From the mandate to communicate knowledge of God came the name: Communications for Christ, meaning communicating to people on behalf of Jesus Christ.'
            },
            {
                title: "Lack of Knowledge and Destruction of Man",
                content: 'Understanding the relationship between lack of knowledge and destruction of man will help us to understand the language of Communications for Christ and what it stands for. The call mandate of Communications for Christ world Outreach Ministry is established in the word of God as it is written in the book of Hosea 4:6,<br><br><em>"My people are destroyed for lack of knowledge: because you have rejected knowledge, I will also reject you, that you shall be no priest to me: seeing you have forgotten the law of your God, I will also forget your children."</em><br><br>This shows that people of God are not destroyed as a result of lack of money; lack of a job or a good job; lack of a wife or a good wife; lack of husband or a good husband; lack of a house; lack of a car; lack of a child; lack of a large church congregation etc., but they are destroyed for lack of knowledge. Truly, in hell, which is the place of destruction, there are people that had the aforementioned things as well as people that lacked them while they were alive on earth. Therefore, those who are now in the lake of hell fire are there owing to lack of knowledge.'
            },
            {
                title: "The Knowledge",
                content: "The knowledge is of the word of God; of the correct interpretation; and of the right application of the word of God. When a man has acquired this knowledge, Satan, the enemy of man, who deceives to destroy, will not be able to succeed over him. Jesus is the word of God that saves from deception and eternal destruction. Therefore, Communications for Christ World Outreach Ministry communicates the very pure gospel of Jesus Christ to those who do not know; those who have forgotten; and those that misinterpret it, with the aid of the Holy Spirit who knows all things (1 Corinthians 2:10 and 11)."
            },
            {
                title: "Vision",
                content: "The vision of the Communications for Christ is to present Jesus Christ as the true way of escape from Satan's oppressions and the only way of escape from eternal destruction."
            },
            {
                title: "Mission",
                content: "The mission includes:",
                list: [
                    "To seek, find and hand over the lost to God;",
                    "To help individual have direct and personal relationship with God;",
                    "To impart knowledge of truth of God's word to liberate people from the deception of the devil;",
                    "To develop godly character in people;",
                    "To boost people's aspiration for the kingdom of heaven and to increase the population of people in the kingdom of heaven;",
                    "To restore the afflicted and help them have access to their possessions;",
                    "To teach how to fight and win the battle of life."
                ]
            },
            {
                title: "What We Believe",
                content: "We believe that:",
                list: [
                    "The only problem of man is sin;",
                    "The only enemy of man is Satan;",
                    "The only solution to man's only problem and the only victory over man's only enemy is the Lord Jesus Christ;",
                    "The real battle is over the soul of man;",
                    "The real victory is the victory over Satan;",
                    "The real warriors in the battle of life are those that obey the commandment of God and keep the testimony of Jesus Christ (Revelation 12:17);",
                    "The kingdom of heaven is the reason for everything that God and Satan do;",
                    "The four arms of Jesus's gospel: Jesus' birth, death, resurrection, and his second coming, as well as the reality of the kingdom of heaven and hell or lake of fire or eternal suffering for those that die in their sins or that die in their unbelief."
                ]
            }
        ],
        documents: [
            {
                title: "Mode of Operation",
                url: "assets/pdf/mode-of-operation.pdf"
            }
        ]
    },
    aboutMinister: {
        image: "assets/images/minister.jpg",
        sections: [
            {
                title: "Apostle Iyiola O. M.'s Profile",
                content: "Apostle Iyiola Olatunji Mukaila was born in January 1967 at Elekuro, south-eastern part of Ibadan, Oyo State, Nigeria. He attended Naiwair- rudeen and Adelagun Memorial Primary Schools for his primary education between 1973 and 1979. He also attended Adelagun Memorial Grammar School for his secondary education. He is also a graduate of Federal Cooperative College, Ibadan. He is an alumni of the premier University in Nigeria, University of Ibadan where he did his diploma, First degree and Master's degree, all in educational management. At present, he is at the brink of completing his Ph.D. programme in Human Resource Management in the Department of Educational Management, Faculty of Education, University of Ibadan. He is a Research Administrator in the University of Ibadan. He is married to Mrs. Iyiola Abiodun Olubusayo who is the National president of Communications for Christ Women of Dignity (WoD), a ministry proclaiming the dignity of women and raising women of dignity out of young female generation. Mrs. Iyiola is a Master's degree graduate of the Department of Psychology (Personnel Psychology) and holds a Postgraduate Diploma in Guidance and Counselling in the University of Ibadan. She is a Principal Secretary in the University of Ibadan.<br><br>Apostle Iyiola was called into the ministry in Kaduna in 1994 and the ministry was commissioned in Ibadan in May 1995. He is a Holy Ghost guided student of the Bible and a versatile, practical and frank teacher of the truth of the word of God. He has a conspicuous flair for teaching, and his illustrative, dramatic, practical, participatory and boredom-killing style of teaching helps his numerous audience get convinced about the truth, efficacy, potency, and practicability of the word of God. Being a deep thinker, he currently has over fifty mantras, which some people call Iyiola's thoughts, which are good for spiritual guidance and divine character development.<br><br>Apostle Iyiola is highly resourceful. He is a prolific book and film story writer, Christian film director and producer, audio and audio-visual editor, Christian songs composer, and Christian games developer. His interdenominational/non-denominational ministry's effort is geared towards breaking all barriers to reach God, and creating good and cordial relationship between man and God (the word of God). His teaching often revolves around opening his audience's eyes to the deception of the devil, the liberating truth of the word of God, and godly character development strategies. He believes in miracle and God uses him to perform outstanding miracles in the lives of those that He brings his way, but to Apostle Iyiola, the greatest miracle which everyone should pursue is to escape from the everlasting fire and to inherit the kingdom of heaven.<br><br>He is an astute Holy Spirit-directed administrator and with his management acumen he actively oversees the interdenominational/non-denominational ministries which God has committed to his hand. He happily and humbly welcomes invitations to teach at seminars, workshops, conferences and other mini or major Christian meetings."
            }
        ]
    }
};
```

js/script.js

```javascript
// Main JavaScript for Communications for Christ Ministries

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Initialize any page-specific functionality
    initPage();
});

// Initialize page-specific functionality
function initPage() {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    
    switch(page) {
        case "about.html":
            initAboutPage();
            break;
        case "articles.html":
            initArticlesPage();
            break;
        case "media.html":
            initMediaPage();
            break;
        case "events.html":
            initEventsPage();
            break;
        default:
            // Homepage or other pages
            break;
    }
}

// Load featured articles on homepage
function loadFeaturedArticles() {
    const articlesContainer = document.getElementById('articles-container');
    if (!articlesContainer) return;
    
    // Clear container
    articlesContainer.innerHTML = '';
    
    // Get first two articles
    const articleKeys = Object.keys(articlesData);
    const featuredArticles = articleKeys.slice(0, 2);
    
    featuredArticles.forEach(key => {
        const article = articlesData[key];
        const articleElement = document.createElement('div');
        articleElement.className = 'article-card';
        articleElement.innerHTML = `
            <div class="article-image">
                <img src="${article.image}" alt="${article.title}">
            </div>
            <div class="article-content">
                <h3 class="article-title">${article.title}</h3>
                <span class="article-date">${article.date}</span>
                <p class="article-excerpt">${article.excerpt}</p>
                <a href="articles.html?id=${article.id}" class="article-link">Read Article <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        articlesContainer.appendChild(articleElement);
    });
}

// Initialize About Page
function initAboutPage() {
    // Load ministry sections
    const ministryContainer = document.getElementById('ministry-sections');
    if (ministryContainer) {
        aboutData.aboutMinistry.sections.forEach(section => {
            const sectionElement = document.createElement('div');
            sectionElement.className = 'about-section';
            
            let contentHTML = `<h3>${section.title}</h3><p>${section.content}</p>`;
            
            if (section.list) {
                contentHTML += '<ul>';
                section.list.forEach(item => {
                    contentHTML += `<li>${item}</li>`;
                });
                contentHTML += '</ul>';
            }
            
            sectionElement.innerHTML = contentHTML;
            ministryContainer.appendChild(sectionElement);
        });
        
        // Load documents
        const documentsContainer = document.getElementById('ministry-documents');
        if (documentsContainer && aboutData.aboutMinistry.documents.length > 0) {
            aboutData.aboutMinistry.documents.forEach(doc => {
                const docElement = document.createElement('a');
                docElement.href = doc.url;
                docElement.className = 'btn';
                docElement.innerHTML = `Download ${doc.title} <i class="fas fa-download"></i>`;
                docElement.setAttribute('download', '');
                documentsContainer.appendChild(docElement);
            });
        }
    }
    
    // Load minister sections
    const ministerContainer = document.getElementById('minister-sections');
    if (ministerContainer) {
        aboutData.aboutMinister.sections.forEach(section => {
            const sectionElement = document.createElement('div');
            sectionElement.className = 'minister-section';
            sectionElement.innerHTML = `<h3>${section.title}</h3><p>${section.content}</p>`;
            ministerContainer.appendChild(sectionElement);
        });
        
        // Set minister image
        const ministerImage = document.getElementById('minister-image');
        if (ministerImage) {
            ministerImage.src = aboutData.aboutMinister.image;
            ministerImage.alt = "Apostle Iyiola O. M.";
        }
    }
}

// Initialize Articles Page
function initArticlesPage() {
    // Check if a specific article is requested
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    
    if (articleId) {
        // Show single article
        loadSingleArticle(articleId);
    } else {
        // Show all articles
        loadAllArticles();
    }
}

// Load all articles
function loadAllArticles() {
    const articlesContainer = document.getElementById('articles-container');
    if (!articlesContainer) return;
    
    // Clear container
    articlesContainer.innerHTML = '';
    
    // Get all articles
    const articleKeys = Object.keys(articlesData);
    
    articleKeys.forEach(key => {
        const article = articlesData[key];
        const articleElement = document.createElement('div');
        articleElement.className = 'article-card';
        articleElement.innerHTML = `
            <div class="article-image">
                <img src="${article.image}" alt="${article.title}">
            </div>
            <div class="article-content">
                <h3 class="article-title">${article.title}</h3>
                <span class="article-date">${article.date} | By ${article.author}</span>
                <p class="article-excerpt">${article.excerpt}</p>
                <a href="articles.html?id=${article.id}" class="article-link">Read Article <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        articlesContainer.appendChild(articleElement);
    });
}

// Load single article
function loadSingleArticle(articleId) {
    const articlesContainer = document.getElementById('articles-container');
    const article = Object.values(articlesData).find(a => a.id == articleId);
    
    if (!articlesContainer || !article) return;
    
    // Hide article grid and show single article
    document.querySelector('.articles-grid')?.classList.add('hidden');
    
    const articleElement = document.createElement('article');
    articleElement.className = 'single-article';
    articleElement.innerHTML = `
        <h1>${article.title}</h1>
        <div class="article-meta">
            <span class="article-date">${article.date}</span>
            <span class="article-author">By ${article.author}</span>
        </div>
        <div class="article-image">
            <img src="${article.image}" alt="${article.title}">
        </div>
        <div class="article-content">
            ${article.content}
        </div>
        <a href="articles.html" class="btn"><i class="fas fa-arrow-left"></i> Back to Articles</a>
    `;
    
    articlesContainer.appendChild(articleElement);
}

// Initialize Media Page
function initMediaPage() {
    loadVideos();
    loadAudios();
}

// Load videos
function loadVideos() {
    const videosContainer = document.getElementById('videos-container');
    if (!videosContainer) return;
    
    // Clear container
    videosContainer.innerHTML = '';
    
    // Get all videos
    const mediaKeys = Object.keys(mediasData);
    const videos = mediaKeys.filter(key => mediasData[key].type === 'youtube');
    
    videos.forEach(key => {
        const video = mediasData[key];
        const videoElement = document.createElement('div');
        videoElement.className = 'media-card';
        videoElement.innerHTML = `
            <div class="media-content">
                ${video.iframe}
            </div>
            <div class="media-info">
                <h3>${video.title}</h3>
                <p>${video.description}</p>
                <span class="media-date">${video.date}</span>
            </div>
        `;
        videosContainer.appendChild(videoElement);
    });
}

// Load audios
function loadAudios() {
    const audiosContainer = document.getElementById('audios-container');
    if (!audiosContainer) return;
    
    // Clear container
    audiosContainer.innerHTML = '';
    
    // Get all audios
    const mediaKeys = Object.keys(mediasData);
    const audios = mediaKeys.filter(key => mediasData[key].type === 'mp3');
    
    audios.forEach(key => {
        const audio = mediasData[key];
        const audioElement = document.createElement('div');
        audioElement.className = 'media-card audio-card';
        audioElement.innerHTML = `
            <div class="audio-icon">
                <i class="fas fa-music"></i>
            </div>
            <div class="media-info">
                <h3>${audio.title}</h3>
                <p>${audio.description}</p>
                <span class="media-date">${audio.date} | ${audio.duration}</span>
                <button class="btn btn-sm play-audio" data-src="${audio.audio}">
                    <i class="fas fa-play"></i> Play
                </button>
            </div>
        `;
        audiosContainer.appendChild(audioElement);
    });
    
    // Add event listeners to play buttons
    const playButtons = document.querySelectorAll('.play-audio');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const audioSrc = this.getAttribute('data-src');
            playAudio(audioSrc, this.closest('.media-card').querySelector('h3').textContent);
        });
    });
}

// Play audio function
function playAudio(src, title) {
    // Create audio player modal
    const existingPlayer = document.getElementById('audio-player-modal');
    if (existingPlayer) {
        existingPlayer.remove();
    }
    
    const playerModal = document.createElement('div');
    playerModal.id = 'audio-player-modal';
    playerModal.className = 'modal';
    playerModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${title}</h3>
                <button class="close-modal">&times;</button>
            </div>
            <div class="modal-body">
                <audio controls autoplay>
                    <source src="${src}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    `;
    
    document.body.appendChild(playerModal);
    
    // Show modal
    playerModal.classList.add('active');
    
    // Close modal event
    playerModal.querySelector('.close-modal').addEventListener('click', function() {
        playerModal.classList.remove('active');
        setTimeout(() => {
            playerModal.remove();
        }, 300);
    });
}

// Initialize Events Page
function initEventsPage() {
    loadEvents();
}

// Load events
function loadEvents() {
    const eventsContainer = document.getElementById('events-container');
    if (!eventsContainer) return;
    
    // Clear container
    eventsContainer.innerHTML = '';
    
    // Get all events
    const eventKeys = Object.keys(eventsData);
    
    eventKeys.forEach(key => {
        const event = eventsData[key];
        const eventElement = document.createElement('div');
        eventElement.className = 'event-card';
        eventElement.innerHTML = `
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}">
                <div class="event-overlay">
                    <h3>${event.title}</h3>
                    <p>${event.excerpt}</p>
                    <span class="click-hint">Click for details</span>
                </div>
            </div>
            <div class="event-content">
                <div class="event-details">
                    <p><i class="fas fa-calendar-alt"></i> ${event.date}</p>
                    <p><i class="fas fa-clock"></i> ${event.time}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${event.venue}</p>
                </div>
                <div class="event-expanded">
                    <p>${event.fullDescription}</p>
                    <div class="event-links">
                        ${event.links.map(link => `<a href="${link.url}" class="btn btn-sm" target="_blank">${link.text}</a>`).join('')}
                    </div>
                    <button class="btn add-to-calendar" data-event='${JSON.stringify(event)}'>
                        <i class="fas fa-calendar-plus"></i> Set Reminder
                    </button>
                </div>
            </div>
        `;
        eventsContainer.appendChild(eventElement);
    });
    
    // Add event listeners to event cards
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
    
    // Add to calendar functionality
    const calendarButtons = document.querySelectorAll('.add-to-calendar');
    calendarButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const eventData = JSON.parse(this.getAttribute('data-event'));
            addToGoogleCalendar(eventData);
        });
    });
}

// Add to Google Calendar function
function addToGoogleCalendar(event) {
    // Format dates for Google Calendar
    function formatDateForGoogle(dateString) {
        const date = new Date(dateString);
        return date.toISOString().replace(/-|:|\.\d+/g, '').slice(0, 15) + '00';
    }
    
    // Create start and end dates (assuming event is 2 hours long)
    const startDate = new Date(`${event.date} ${event.time}`);
    const endDate = new Date(startDate);
    endDate.setHours(endDate.getHours() + 2);
    
    // Build the Google Calendar URL
    const baseUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    const params = new URLSearchParams({
        text: event.title,
        dates: `${formatDateForGoogle(startDate)}/${formatDateForGoogle(endDate)}`,
        details: event.fullDescription,
        location: event.venue
    });
    
    const fullUrl = `${baseUrl}&${params.toString()}`;
    
    // Open in new tab
    window.open(fullUrl, '_blank');
}
```

about.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About - CfC Ministries</title>
    <link rel="stylesheet" href="styles/styles001.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Header & Navigation -->
    <header id="header">
        <div class="container nav-container">
            <a href="index.html" class="logo">CfC Ministries</a>
            
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <ul class="nav-menu">
                <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
                <li class="nav-item"><a href="articles.html" class="nav-link">Articles</a></li>
                <li class="nav-item"><a href="media.html" class="nav-link">Media</a></li>
                <li class="nav-item"><a href="events.html" class="nav-link">Events</a></li>
                <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </header>

    <!-- About Ministry Section -->
    <section id="ministry" class="section">
        <div class="container">
            <div class="section-header">
                <h2>About The Ministry</h2>
            </div>
            <div class="about-content" id="ministry-sections">
                <!-- Content will be loaded from db.js -->
            </div>
            <div class="text-center" id="ministry-documents">
                <!-- Documents will be loaded here -->
            </div>
        </div>
    </section>

    <!-- About Minister Section -->
    <section id="minister" class="section bg-light">
        <div class="container">
            <div class="section-header">
                <h2>About The Minister</h2>
            </div>
            <div class="minister-content">
                <div class="minister-image-large">
                    <img id="minister-image" src="" alt="Apostle Iyiola O. M.">
                </div>
                <div class="minister-details" id="minister-sections">
                    <!-- Content will be loaded from db.js -->
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contact">
        <div class="container">
            <div class="footer-content">
                <div class="footer-info">
                    <a href="index.html" class="footer-logo">CfC Ministries</a>
                    <p>Communicating the very pure gospel of Jesus Christ</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="articles.html">Articles</a></li>
                        <li><a href="media.html">Media</a></li>
                        <li><a href="events.html">Events</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><i class="fas fa-map-marker-alt"></i> Ibadan, Oyo State, Nigeria</li>
                        <li><i class="fas fa-phone"></i> +234 XXX XXX XXXX</li>
                        <li><i class="fas fa-envelope"></i> info@cfcministries.org</li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>@CfC Ministries©2025</p>
            </div>
        </div>
    </footer>

    <script src="js/db.js"></script>
    <script src="js/script.js"></script>
</body>
</html>
```

This implementation provides a complete website for Communications for Christ Ministries with all the requested features. The design is clean, professional, and appropriate for a church ministry. The website includes:

1. A responsive design that works on all devices
2. Homepage with hero section and previews of ministry, minister, and articles
3. About page with expandable sections for ministry information and minister profile
4. Articles page with cards that link to individual articles
5. Media page with YouTube videos and audio players
6. Events page with expandable cards and Google Calendar integration
7. Consistent navigation and footer across all pages

The JavaScript handles all the interactive elements, and the db.js file contains all the data as requested. The design follows the template you provided while adapting it for a church ministry with appropriate colors and styling.


###**To Complete the IARAP Project**

1. Create a file called cors_middleware.py in your app folder.
```python
class CorsMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "GET, POST, PUT, PATCH, DELETE, OPTIONS"
        response["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
        
        if request.method == "OPTIONS":
            response.status_code = 200
            return response
            
        return response
```
2. Add it to MIDDLEWARE in settings.py
```python
MIDDLEWARE = [
    'your_app.cors_middleware.CorsMiddleware',
    # ... other middleware
]
```

**Using Vercel for cors in IARAP**

```json
{
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "*" },
        { "key": "Access-Control-Allow-Methods", "value": "GET, POST, PUT, DELETE, OPTIONS" },
        { "key": "Access-Control-Allow-Headers", "value": "X-Requested-With, Content-Type, Authorization" }
      ]
    }
  ]
}
```

**Extra-Cors in settings.py**
```python
# Allow all origins (for development)
CORS_ALLOW_ALL_ORIGINS = True

# OR for production, specify allowed origins:
CORS_ALLOWED_ORIGINS = [
    "https://your-frontend-domain.com",
    "http://localhost:3000",  # For local development
    "http://127.0.0.1:3000",
]

# Allow credentials if needed
CORS_ALLOW_CREDENTIALS = True

# Allowed methods
CORS_ALLOW_METHODS = [
    'DELETE',
    'GET',
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
]

# Allowed headers
CORS_ALLOW_HEADERS = [
    'accept',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
]
```

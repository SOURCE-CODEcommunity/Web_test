## Read More Functionality in Under 200 Words

The Read More functionality uses CSS for the visual effect and JavaScript for the toggle interaction.

HTML: Create a container with text and a button:

```html
<div class="text-container">
  <p class="text-content">Your long text here...</p>
  <button class="read-more-btn">Read More</button>
</div>
```

CSS: Limit text to few lines initially:

```css
.text-content {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Show only 3 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.text-content.expanded {
  -webkit-line-clamp: unset; /* Show all text when expanded */
}
```

JavaScript: Toggle the expanded class on click:

```javascript
const button = document.querySelector('.read-more-btn');
const text = document.querySelector('.text-content');

button.addEventListener('click', () => {
  text.classList.toggle('expanded');
  button.textContent = text.classList.contains('expanded') 
    ? 'Read Less' : 'Read More';
});
```

This creates a smooth, accessible read more/less toggle without needing complex libraries. The CSS line-clamp property handles the text truncation, while JavaScript toggles the expanded state and button text.


### **CfC YouTube channel**


https://www.youtube.com/@CommforChristTV

**Iframes**


My Year of Transformation  
```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/IZ4fkffEBYM?si=nfrH6_qwfzRfQXMs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```

 Mantra 1  
```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/Lbnl_wVI7uE?si=gGd8ZqQni15UIYi7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```
description: It is important to have an idea of what the kingdom of heaven is all about, otherwise, you will easily fall prey to misleaders.  If that choir mistress had known the kingdom of heaven, she would not have accepted to fornicate with her pastor.  Having an idea of what it is required to make heaven will definitely help you to know the type of church to attend, the type of friends to make, the type of pastor you will follow, and more importantly, the importance of learning, knowing and doing the will of God (Matthew 7:20-22; 1 John 2:17). 

 mantra 2  
```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/hDzsNCDTGVI?si=oT3wMZi_muLD6nBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```
 description: Any situation in which you find yourself, just have faith in god that all is well.  

mantra 3  
```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/QTJ37j-HIPM?si=EgknZi4PFgnKYU-n" tiitle="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```
description: God does not say you should not become what you say you want to become, But do you consider asking yourself these three (3) questions  

mantra 4  
```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/00PwqaB7a58?si=9h-0zER33zgXl8QZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```
 description: What do you need to do in order to move forward?




### I'll provide you with a complete Vercel configuration for your Django project. Based on your existing vercel.json, here's a full configuration setup:

Complete vercel.json

```json
{
  "version": 2,
  "builds": [
    {
      "src": "iarap/wsgi.py",
      "use": "@vercel/python"
    },
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "staticfiles"
      }
    }
  ],
  "routes": [
    {
      "src": "/static/(.*)",
      "dest": "/static/$1"
    },
    {
      "src": "/media/(.*)",
      "dest": "/media/$1"
    },
    {
      "src": "/(.*)",
      "dest": "iarap/wsgi.py",
      "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD"],
      "headers": {
        "Access-Control-Allow-Origin": ["*"],
        "Access-Control-Allow-Methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        "Access-Control-Allow-Headers": ["Content-Type", "Authorization", "X-CSRFToken"],
        "Access-Control-Allow-Credentials": "true"
      }
    }
  ],
  "env": {
    "PYTHON_VERSION": "3.11",
    "DJANGO_SETTINGS_MODULE": "iarap.settings",
    "PYTHONPATH": "/var/task"
  },
  "functions": {
    "iarap/wsgi.py": {
      "maxDuration": 30,
      "memory": 1024
    }
  },
  "build": {
    "env": {
      "NODE_ENV": "production",
      "PYTHON_VERSION": "3.11"
    }
  }
}
```

Required Files

1. api/vercel.py (Serverless Function Handler)

```python
from iarap.wsgi import application

def handler(request, response):
    return application(request, response)
```

2. requirements.txt

Make sure you have all your dependencies listed:

```
Django>=4.0,<5.0
psycopg2-binary
whitenoise
gunicorn
python-decouple
```

3. build.sh (Build Script)

```bash
#!/bin/bash

# Install Python dependencies
pip install -r requirements.txt

# Collect static files
python manage.py collectstatic --noinput

# Run migrations (if database is configured)
# python manage.py migrate --noinput
```

4. Django Settings Configuration

Update your settings.py:

```python
import os
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Security settings for production
DEBUG = os.environ.get('DEBUG', 'False') == 'True'
SECRET_KEY = os.environ.get('SECRET_KEY', 'your-secret-key-here')

ALLOWED_HOSTS = [
    '.vercel.app',
    '.now.sh',
    'localhost',
    '127.0.0.1'
]

# Database (if using PostgreSQL on Vercel)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ.get('POSTGRES_DATABASE'),
        'USER': os.environ.get('POSTGRES_USER'),
        'PASSWORD': os.environ.get('POSTGRES_PASSWORD'),
        'HOST': os.environ.get('POSTGRES_HOST'),
        'PORT': os.environ.get('POSTGRES_PORT', '5432'),
    }
}

# Static files configuration
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]

# Media files
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# Whitenoise for static files
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    # ... other middleware
]

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# CORS settings
CORS_ALLOW_ALL_ORIGINS = True
CORS_ALLOW_CREDENTIALS = True
CORS_ALLOW_HEADERS = [
    'content-type',
    'authorization',
    'x-csrftoken',
]
```

5. .vercelignore

```
*.pyc
__pycache__/
.env
.env.local
.env.production
node_modules/
*.sqlite3
media/
.DS_Store
*.log
```

6. Environment Variables

Set these in your Vercel dashboard:

```
DEBUG=False
SECRET_KEY=your-random-secret-key
DJANGO_SETTINGS_MODULE=iarap.settings
PYTHON_VERSION=3.11
```

Deployment Steps

1. Install Vercel CLI: npm i -g vercel
2. Login: vercel login
3. Deploy: vercel --prod
4. Set environment variables in Vercel dashboard

Additional Recommendations

1. Database: Use Vercel Postgres or an external database service
2. Storage: Use AWS S3 or similar for media files
3. Caching: Consider adding Redis for caching
4. CDN: Enable Vercel's CDN for static assets

This configuration provides a complete setup for deploying your Django application on Vercel with proper static file handling, CORS support, and production-ready settings.


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

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Access-Control-Allow-Credentials", "value": "true" },
        { "key": "Access-Control-Allow-Origin", "value": "*" },
        { "key": "Access-Control-Allow-Methods", "value": "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
        { "key": "Access-Control-Allow-Headers", "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" }
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


Communications for Christ Website Implementation

I'll create a comprehensive website for Communications for Christ Ministries with all the requested features. Let's start with the main HTML structure and then build the supporting files.

File Structure

```
cfc-ministries/
├── index.html
├── about.html
├── articles.html
├── media.html
├── events.html
├── styles.css
├── script.js
├── db.js
└── assets/
    ├── images/
    ├── audio/
    └── documents/
```

1. index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CfC Ministries</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header & Navigation -->
    <header id="header">
        <div class="container nav-container">
            <a href="index.html" class="logo">CfC Ministries</a>
            <nav>
                <ul class="nav-menu">
                    <li><a href="index.html" class="active">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="articles.html">Articles</a></li>
                    <li><a href="media.html">Media</a></li>
                    <li><a href="events.html">Events</a></li>
                    <li><a href="#contact" class="nav-btn">Contact</a></li>
                </ul>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>Welcome to the official website of the Communications for Christ World Outreach Ministry, Nigeria</h1>
            <p>…communicating the very pure gospel of Jesus Christ</p>
            <div class="hero-btns">
                <a href="about.html" class="btn btn-primary">Learn More</a>
                <a href="#contact" class="btn btn-secondary">Contact Us</a>
            </div>
        </div>
    </section>

    <!-- About The Ministry Section -->
    <section class="section" id="about-ministry-preview">
        <div class="container">
            <h2 class="section-title">About The Ministry</h2>
            <div class="preview-content">
                <p>Communications for Christ is a group of ministries commissioned to propagate the very pure gospel of Jesus Christ. According to the Holy Spirit, Communications for Christ is God's end-time justification for himself in that he makes knowledge of truth available and accessible to us for liberation from Satan's deception...</p>
                <a href="about.html#about-ministry" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    </section>

    <!-- About The Minister Section -->
    <section class="section bg-light" id="about-minister-preview">
        <div class="container">
            <h2 class="section-title">About The Minister</h2>
            <div class="preview-content">
                <div class="minister-preview">
                    <div class="minister-image">
                        <img src="assets/images/minister.jpg" alt="Apostle Iyiola O. M.">
                    </div>
                    <div class="minister-text">
                        <p>Apostle Iyiola Olatunji Mukaila was born in January 1967 at Elekuro, south-eastern part of Ibadan, Oyo State, Nigeria. He attended Naiwair- rudeen and Adelagun Memorial Primary Schools for his primary education between 1973 and 1979...</p>
                        <a href="about.html#about-minister" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Articles Section -->
    <section class="section" id="articles-preview">
        <div class="container">
            <h2 class="section-title">Articles</h2>
            <div class="articles-grid" id="articles-container">
                <!-- Articles will be loaded from db.js -->
            </div>
            <div class="text-center">
                <a href="articles.html" class="read-more">More Articles <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contact">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Contact Us</h3>
                    <p><i class="fas fa-map-marker-alt"></i> Ibadan, Oyo State, Nigeria</p>
                    <p><i class="fas fa-phone"></i> +234 XXX XXX XXXX</p>
                    <p><i class="fas fa-envelope"></i> info@cfcministries.org</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="articles.html">Articles</a></li>
                        <li><a href="media.html">Media</a></li>
                        <li><a href="events.html">Events</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Follow Us</h3>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>@CfC Ministries©2025</p>
            </div>
        </div>
    </footer>

    <script src="db.js"></script>
    <script src="script.js"></script>
    <script>
        // Load articles on homepage
        document.addEventListener('DOMContentLoaded', function() {
            loadArticlesPreview();
        });
    </script>
</body>
</html>
```

2. styles.css

```css
:root {
    --primary: #2c3e50;
    --secondary: #3498db;
    --accent: #e74c3c;
    --light: #ecf0f1;
    --dark: #2c3e50;
    --text: #333;
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans', sans-serif;
    color: var(--text);
    line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-bottom: 1rem;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

/* Header Styles */
#header {
    background-color: var(--primary);
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 1.8rem;
    color: white;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-menu li {
    margin-left: 1.5rem;
}

.nav-menu a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
}

.nav-menu a:hover, .nav-menu a.active {
    color: var(--secondary);
}

.nav-btn {
    background-color: var(--secondary);
    padding: 0.5rem 1rem;
    border-radius: 4px;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 3px 0;
    transition: var(--transition);
}

/* Hero Section */
.hero {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('assets/images/hero-bg.jpg') center/cover no-repeat;
    color: white;
    text-align: center;
    padding: 150px 0 100px;
    margin-top: 70px;
}

.hero h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

.hero-btns {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.btn {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
}

.btn-primary {
    background-color: var(--secondary);
    color: white;
}

.btn-primary:hover {
    background-color: #2980b9;
}

.btn-secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;
}

.btn-secondary:hover {
    background-color: white;
    color: var(--primary);
}

/* Section Styles */
.section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--secondary);
}

.bg-light {
    background-color: var(--light);
}

.preview-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.read-more {
    display: inline-block;
    margin-top: 1.5rem;
    color: var(--secondary);
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
}

.read-more:hover {
    color: var(--accent);
    transform: translateX(5px);
}

/* Minister Preview */
.minister-preview {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.minister-image {
    flex: 0 0 200px;
}

.minister-image img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
}

.minister-text {
    flex: 1;
    text-align: left;
}

/* Articles Grid */
.articles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.article-card {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
    cursor: pointer;
}

.article-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.article-image {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.article-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.article-card:hover .article-image img {
    transform: scale(1.05);
}

.article-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    color: white;
    padding: 1rem;
}

.article-title {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.article-date {
    font-size: 0.9rem;
    opacity: 0.8;
}

.article-content {
    padding: 1.5rem;
}

.text-center {
    text-align: center;
}

/* Footer */
footer {
    background-color: var(--dark);
    color: white;
    padding: 60px 0 20px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section h3 {
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 10px;
}

.footer-section h3::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: var(--secondary);
}

.footer-section p {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
}

.footer-section i {
    margin-right: 10px;
    color: var(--secondary);
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.8rem;
}

.footer-section ul li a {
    color: white;
    text-decoration: none;
    transition: var(--transition);
}

.footer-section ul li a:hover {
    color: var(--secondary);
    padding-left: 5px;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: white;
    text-decoration: none;
    transition: var(--transition);
}

.social-links a:hover {
    background-color: var(--secondary);
    transform: translateY(-3px);
}

.footer-bottom {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* About Page Styles */
.about-section {
    margin-bottom: 3rem;
}

.about-content {
    max-width: 900px;
    margin: 0 auto;
}

.subtopic {
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 1rem;
}

.subtopic-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 1rem 0;
}

.subtopic-title {
    font-size: 1.3rem;
    margin: 0;
}

.subtopic-icon {
    transition: var(--transition);
}

.subtopic.active .subtopic-icon {
    transform: rotate(180deg);
}

.subtopic-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.subtopic.active .subtopic-content {
    max-height: 1000px;
}

.download-btn {
    display: inline-block;
    margin-top: 2rem;
    background-color: var(--secondary);
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;
    transition: var(--transition);
}

.download-btn:hover {
    background-color: #2980b9;
}

/* Media Page Styles */
.media-section {
    margin-bottom: 3rem;
}

.media-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
}

.video-card, .audio-card {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.video-content, .audio-content {
    padding: 1.5rem;
}

.audio-player {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    background: #f5f5f5;
    padding: 0.5rem;
    border-radius: 4px;
}

.audio-controls {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.play-btn {
    background: var(--secondary);
    color: white;
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: var(--transition);
}

.play-btn:hover {
    background: #2980b9;
}

.progress-bar {
    flex: 1;
    height: 4px;
    background: #ddd;
    border-radius: 2px;
    position: relative;
    overflow: hidden;
    margin: 0 0.5rem;
}

.progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: var(--secondary);
    width: 0%;
    transition: width 0.1s linear;
}

.time {
    font-size: 0.8rem;
    color: #777;
}

/* Audio Dialog */
.audio-dialog {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 2000;
    justify-content: center;
    align-items: center;
}

.audio-dialog.active {
    display: flex;
}

.dialog-content {
    background: white;
    border-radius: 8px;
    padding: 2rem;
    width: 90%;
    max-width: 500px;
    position: relative;
}

.close-dialog {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #777;
}

.dialog-audio-player {
    margin-top: 1.5rem;
}

/* Events Page Styles */
.events-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
}

.event-card {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
    cursor: pointer;
}

.event-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.event-image {
    height: 200px;
    overflow: hidden;
}

.event-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.event-card:hover .event-image img {
    transform: scale(1.05);
}

.event-content {
    padding: 1.5rem;
    position: relative;
}

.event-date {
    color: var(--secondary);
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.event-venue {
    color: #777;
    margin-bottom: 1rem;
    font-size: 0.9rem;
}

.event-more {
    color: #aaa;
    font-size: 0.8rem;
    margin-top: 1rem;
    text-align: center;
}

.event-details {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.event-card.active .event-details {
    max-height: 1000px;
    margin-top: 1.5rem;
}

.event-links {
    margin-top: 1rem;
}

.event-links a {
    display: inline-block;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    background: var(--light);
    color: var(--dark);
    padding: 0.5rem 1rem;
    border-radius: 4px;
    text-decoration: none;
    font-size: 0.9rem;
    transition: var(--transition);
}

.event-links a:hover {
    background: var(--secondary);
    color: white;
}

.reminder-btn {
    display: inline-block;
    margin-top: 1rem;
    background: var(--accent);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    text-decoration: none;
    font-size: 0.9rem;
    transition: var(--transition);
}

.reminder-btn:hover {
    background: #c0392b;
}

/* Articles Page Styles */
.article-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 2000;
    overflow-y: auto;
    padding: 2rem 0;
}

.article-modal.active {
    display: block;
}

.modal-content {
    background: white;
    border-radius: 8px;
    padding: 2rem;
    width: 90%;
    max-width: 800px;
    margin: 2rem auto;
    position: relative;
}

.close-modal {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #777;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }
    
    .nav-menu {
        position: fixed;
        top: 70px;
        left: -100%;
        background: var(--primary);
        width: 100%;
        height: calc(100vh - 70px);
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: var(--transition);
    }
    
    .nav-menu.active {
        left: 0;
    }
    
    .nav-menu li {
        margin: 1.5rem 0;
    }
    
    .hero h1 {
        font-size: 2rem;
    }
    
    .hero-btns {
        flex-direction: column;
        align-items: center;
    }
    
    .minister-preview {
        flex-direction: column;
        text-align: center;
    }
    
    .minister-text {
        text-align: center;
    }
    
    .footer-content {
        grid-template-columns: 1fr;
    }
}
```

3. db.js

```javascript
// Database for Communications for Christ Ministries

// Articles Data
const articlesData = {
    article1: {
        id: 1,
        title: "The Power of God's Word",
        description: "Understanding how the Word of God transforms lives and brings liberation from deception",
        article: `<h2>The Power of God's Word</h2>
        <p>In the beginning was the Word, and the Word was with God, and the Word was God. This profound statement from John 1:1 establishes the foundational importance of God's Word in our lives. The Word is not merely text on a page; it is living, active, and powerful (Hebrews 4:12).</p>
        <p>At Communications for Christ, we believe that the knowledge of God's Word is the key to liberation from Satan's deception. When Jesus was tempted in the wilderness, He consistently responded with "It is written," demonstrating the power of Scripture to overcome the enemy's schemes.</p>
        <p>Many Christians today are defeated not because they lack faith, but because they lack knowledge. Hosea 4:6 declares, "My people are destroyed for lack of knowledge." This knowledge is not academic or intellectual knowledge but the revealed truth of God's Word applied to our daily lives.</p>
        <h3>How God's Word Transforms</h3>
        <p>God's Word has the power to:</p>
        <ul>
            <li>Bring salvation (Romans 1:16)</li>
            <li>Sanctify and cleanse us (Ephesians 5:26)</li>
            <li>Guide our steps (Psalm 119:105)</li>
            <li>Renew our minds (Romans 12:2)</li>
            <li>Equip us for every good work (2 Timothy 3:16-17)</li>
        </ul>
        <p>As we communicate the pure gospel of Jesus Christ, we are committed to helping believers understand, interpret, and apply God's Word correctly. This is the mission that drives Communications for Christ Ministries.</p>`,
        image: "assets/images/article1.jpg",
        date: "June 15, 2023"
    },
    article2: {
        id: 2,
        title: "Breaking Free from Deception",
        description: "Recognizing and overcoming the deceptive strategies of the enemy in our lives",
        article: `<h2>Breaking Free from Deception</h2>
        <p>Deception is one of Satan's primary weapons against believers. Jesus called him "the father of lies" (John 8:44), and his tactics haven't changed since the Garden of Eden. He still asks, "Did God really say?" causing us to doubt God's Word and His goodness.</p>
        <p>At Communications for Christ, we are committed to exposing Satan's deceptions and helping believers walk in the light of God's truth. This article explores common areas where believers often fall prey to deception and how to break free through the power of God's Word.</p>
        <h3>Common Areas of Deception</h3>
        <p>Many Christians are deceived in these key areas:</p>
        <ul>
            <li><strong>Identity:</strong> Not understanding who they are in Christ</li>
            <li><strong>Purpose:</strong> Not knowing God's plan for their lives</li>
            <li><strong>Forgiveness:</strong> Either not receiving God's forgiveness or not extending it to others</li>
            <li><strong>Eternity:</strong> Not living with an eternal perspective</li>
        </ul>
        <h3>The Path to Freedom</h3>
        <p>Freedom from deception comes through:</p>
        <ol>
            <li>Regular study of God's Word</li>
            <li>Prayer and dependence on the Holy Spirit</li>
            <li>Fellowship with other believers</li>
            <li>Obedience to what God reveals</li>
        </ol>
        <p>As we align our lives with God's truth, we experience the liberation that Jesus promised: "Then you will know the truth, and the truth will set you free" (John 8:32).</p>`,
        image: "assets/images/article2.jpg",
        date: "July 3, 2023"
    },
    article3: {
        id: 3,
        title: "Developing Godly Character",
        description: "Practical steps to cultivate Christlike character in everyday life",
        article: `<h2>Developing Godly Character</h2>
        <p>Character is who we are when no one is watching. It's the inward qualities that determine our outward actions. As believers, we are called to develop Christlike character that reflects our heavenly Father.</p>
        <p>At Communications for Christ, we emphasize character development as essential to the Christian life. It's not enough to know God's Word; we must allow it to transform our character to be more like Jesus.</p>
        <h3>The Fruit of the Spirit</h3>
        <p>Galatians 5:22-23 outlines the character qualities that the Holy Spirit produces in our lives: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control. These aren't qualities we can manufacture through self-effort; they are the natural result of the Spirit's work in us.</p>
        <h3>Practical Steps for Character Development</h3>
        <p>How do we cooperate with the Holy Spirit in developing godly character?</p>
        <ol>
            <li><strong>Self-examination:</strong> Regularly ask God to reveal areas that need transformation (Psalm 139:23-24)</li>
            <li><strong>Accountability:</strong> Develop relationships with other believers who can speak truth into your life</li>
            <li><strong>Practice:</strong> Intentionally exercise Christlike character in difficult situations</li>
            <li><strong>Prayer:</strong> Depend on the Holy Spirit for strength beyond your own</li>
        </ol>
        <p>Character development is a lifelong process, but with the Holy Spirit's help, we can progressively become more like Jesus each day.</p>`,
        image: "assets/images/article3.jpg",
        date: "August 12, 2023"
    }
};

// Events Data
const eventsData = {
    event1: {
        id: 1,
        title: "Annual Gospel Conference",
        description: "A time of refreshing and revelation in God's Word",
        venue: "CfC Ministry Headquarters, Ibadan",
        dateTime: "October 15-17, 2023 | 9:00 AM Daily",
        image: "assets/images/event1.jpg",
        links: [
            "https://zoom.us/j/123456789",
            "https://youtube.com/cfcministries/live"
        ],
        details: `<p>Join us for our Annual Gospel Conference with the theme "Liberated to Liberate." This three-day event will feature powerful teachings, worship sessions, and prayer meetings.</p>
        <p><strong>Speakers:</strong> Apostle Iyiola O. M. and other anointed ministers of God</p>
        <p><strong>Topics include:</strong></p>
        <ul>
            <li>Understanding Satan's deceptive strategies</li>
            <li>The liberating power of God's truth</li>
            <li>Developing Christlike character</li>
            <li>Fulfilling your God-given purpose</li>
        </ul>
        <p>Registration is free but required. Lunch will be provided for all attendees.</p>`
    },
    event2: {
        id: 2,
        title: "Youth Empowerment Summit",
        description: "Equipping the next generation for kingdom impact",
        venue: "CfC Youth Center, Ibadan",
        dateTime: "November 5, 2023 | 10:00 AM - 4:00 PM",
        image: "assets/images/event2.jpg",
        links: [
            "https://zoom.us/j/987654321"
        ],
        details: `<p>This one-day summit is designed specifically for young people ages 16-30. We'll address relevant issues facing Christian youth today and provide biblical solutions.</p>
        <p><strong>Session topics include:</strong></p>
        <ul>
            <li>Navigating relationships God's way</li>
            <li>Discovering your purpose early in life</li>
            <li>Maintaining purity in a polluted world</li>
            <li>Excelling academically and professionally as a Christian</li>
        </ul>
        <p>There will be breakout sessions, Q&A panels, and networking opportunities. Don't miss this transformative event!</p>`
    },
    event3: {
        id: 3,
        title: "Prayer and Fasting Retreat",
        description: "Seeking God's face for personal and national transformation",
        venue: "CfC Prayer Camp, Oyo State",
        dateTime: "December 1-3, 2023 | All Day",
        image: "assets/images/event3.jpg",
        links: [],
        details: `<p>Join us for three days of intensive prayer and fasting as we seek God's face for personal breakthroughs and national transformation.</p>
        <p>This retreat will be held at our serene prayer camp outside the city, providing the perfect atmosphere for undisturbed communion with God.</p>
        <p><strong>Schedule:</strong></p>
        <ul>
            <li>6:00 AM - Morning Devotion</li>
            <li>9:00 AM - Prayer Session 1</li>
            <li>12:00 PM - Word Session</li>
            <li>3:00 PM - Prayer Session 2</li>
            <li>6:00 PM - Evening Devotion</li>
        </ul>
        <p>Accommodation is available for those who wish to stay on-site. Please indicate your need for accommodation when registering.</p>`
    }
};

// Media Data
const mediasData = {
    media1: {
        id: 1,
        type: "youtube",
        title: "The Liberating Power of Truth",
        description: "A message on how God's truth sets us free from Satan's deception",
        iframe: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    media2: {
        id: 2,
        type: "youtube",
        title: "Understanding Spiritual Warfare",
        description: "Biblical principles for fighting and winning life's battles",
        iframe: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    media3: {
        id: 3,
        type: "mp3",
        title: "The Knowledge That Saves",
        description: "Audio message on Hosea 4:6 and the knowledge that prevents destruction",
        audio: "assets/audio/knowledge-that-saves.mp3",
        duration: "45:32"
    },
    media4: {
        id: 4,
        type: "mp3",
        title: "Developing Intimacy with God",
        description: "How to cultivate a personal relationship with God through prayer and His Word",
        audio: "assets/audio/intimacy-with-god.mp3",
        duration: "38:17"
    }
};

// About Data
const aboutData = {
    aboutMinistry: {
        subtopics: [
            {
                title: "What is Communications for Christ?",
                content: `<p>Communications for Christ is a group of ministries commissioned to propagate the very pure gospel of Jesus Christ. According to the Holy Spirit, Communications for Christ is God's end-time justification for himself in that he makes knowledge of truth available and accessible to us for liberation from Satan's deception, with which he rules the world.</p>`
            },
            {
                title: "The Call Mandate and the Origin of the Ministry's Name",
                content: `<p>God said to His Minister (the General Overseer of Communications for Christ):</p>
                <p>The call mandate is to communicate to people what God wants them to know as it is contained in His word. This means that whatever is to be communicated for Jesus Christ is not new, it is already in the word of God, but is either not known or forgotten or misunderstood or misinterpreted.</p>
                <p>From the mandate to communicate knowledge of God came the name: Communications for Christ, meaning communicating to people on behalf of Jesus Christ.</p>`
            },
            {
                title: "Lack of Knowledge and Destruction of Man",
                content: `<p>Understanding the relationship between lack of knowledge and destruction of man will help us to understand the language of Communications for Christ and what it stands for. The call mandate of Communications for Christ world Outreach Ministry is established in the word of God as it is written in the book of Hosea 4:6,</p>
                <blockquote>"My people are destroyed for lack of knowledge: because you have rejected knowledge, I will also reject you, that you shall be no priest to me: seeing you have forgotten the law of your God, I will also forget your children."</blockquote>
                <p>This shows that people of God are not destroyed as a result of lack of money; lack of a job or a good job; lack of a wife or a good wife; lack of husband or a good husband; lack of a house; lack of a car; lack of a child; lack of a large church congregation etc., but they are destroyed for lack of knowledge. Truly, in hell, which is the place of destruction, there are people that had the aforementioned things as well as people that lacked them while they were alive on earth. Therefore, those who are now in the lake of hell fire are there owing to lack of knowledge.</p>`
            },
            {
                title: "The Knowledge",
                content: `<p>The knowledge is of the word of God; of the correct interpretation; and of the right application of the word of God. When a man has acquired this knowledge, Satan, the enemy of man, who deceives to destroy, will not be able to succeed over him. Jesus is the word of God that saves from deception and eternal destruction. Therefore, Communications for Christ World Outreach Ministry communicates the very pure gospel of Jesus Christ to those who do not know; those who have forgotten; and those that misinterpret it, with the aid of the Holy Spirit who knows all things (1 Corinthians 2:10 and 11).</p>`
            },
            {
                title: "Vision",
                content: `<p>The vision of the Communications for Christ is to present Jesus Christ as the true way of escape from Satan's oppressions and the only way of escape from eternal destruction.</p>`
            },
            {
                title: "Mission",
                content: `<p>The mission includes:</p>
                <ul>
                    <li>To seek, find and hand over the lost to God</li>
                    <li>To help individual have direct and personal relationship with God</li>
                    <li>To impart knowledge of truth of God's word to liberate people from the deception of the devil</li>
                    <li>To develop godly character in people</li>
                    <li>To boost people's aspiration for the kingdom of heaven and to increase the population of people in the kingdom of heaven</li>
                    <li>To restore the afflicted and help them have access to their possessions</li>
                    <li>To teach how to fight and win the battle of life</li>
                </ul>`
            },
            {
                title: "What We Believe",
                content: `<p>We believe that:</p>
                <ul>
                    <li>The only problem of man is sin</li>
                    <li>The only enemy of man is Satan</li>
                    <li>The only solution to man's only problem and the only victory over man's only enemy is the Lord Jesus Christ</li>
                    <li>The real battle is over the soul of man</li>
                    <li>The real victory is the victory over Satan</li>
                    <li>The real warriors in the battle of life are those that obey the commandment of God and keep the testimony of Jesus Christ (Revelation 12:17)</li>
                    <li>The kingdom of heaven is the reason for everything that God and Satan do</li>
                    <li>The four arms of Jesus's gospel: Jesus' birth, death, resurrection, and his second coming, as well as the reality of the kingdom of heaven and hell or lake of fire or eternal suffering for those that die in their sins or that die in their unbelief</li>
                </ul>`
            }
        ]
    },
    aboutMinister: {
        image: "assets/images/minister.jpg",
        content: `<p>Apostle Iyiola Olatunji Mukaila was born in January 1967 at Elekuro, south-eastern part of Ibadan, Oyo State, Nigeria. He attended Naiwair- rudeen and Adelagun Memorial Primary Schools for his primary education between 1973 and 1979. He also attended Adelagun Memorial Grammar School for his secondary education. He is also a graduate of Federal Cooperative College, Ibadan. He is an alumni of the premier University in Nigeria, University of Ibadan where he did his diploma, First degree and Master's degree, all in educational management. At present, he is at the brink of completing his Ph.D. programme in Human Resource Management in the Department of Educational Management, Faculty of Education, University of Ibadan. He is a Research Administrator in the University of Ibadan.</p>
        <p>He is married to Mrs. Iyiola Abiodun Olubusayo who is the National president of Communications for Christ Women of Dignity (WoD), a ministry proclaiming the dignity of women and raising women of dignity out of young female generation. Mrs. Iyiola is a Master's degree graduate of the Department of Psychology (Personnel Psychology) and holds a Postgraduate Diploma in Guidance and Counselling in the University of Ibadan. She is a Principal Secretary in the University of Ibadan.</p>
        <p>Apostle Iyiola was called into the ministry in Kaduna in 1994 and the ministry was commissioned in Ibadan in May 1995. He is a Holy Ghost guided student of the Bible and a versatile, practical and frank teacher of the truth of the word of God. He has a conspicuous flair for teaching, and his illustrative, dramatic, practical, participatory and boredom-killing style of teaching helps his numerous audience get convinced about the truth, efficacy, potency, and practicability of the word of God. Being a deep thinker, he currently has over fifty mantras, which some people call Iyiola's thoughts, which are good for spiritual guidance and divine character development.</p>
        <p>Apostle Iyiola is highly resourceful. He is a prolific book and film story writer, Christian film director and producer, audio and audio-visual editor, Christian songs composer, and Christian games developer. His interdenominational/non-denominational ministry's effort is geared towards breaking all barriers to reach God, and creating good and cordial relationship between man and God (the word of God). His teaching often revolves around opening his audience's eyes to the deception of the devil, the liberating truth of the word of God, and godly character development strategies. He believes in miracle and God uses him to perform outstanding miracles in the lives of those that He brings his way, but to Apostle Iyiola, the greatest miracle which everyone should pursue is to escape from the everlasting fire and to inherit the kingdom of heaven.</p>
        <p>He is an astute Holy Spirit-directed administrator and with his management acumen he actively oversees the interdenominational/non-denominational ministries which God has committed to his hand. He happily and humbly welcomes invitations to teach at seminars, workshops, conferences and other mini or major Christian meetings.</p>`
    },
    documentsLink: [
        {
            title: "Mode of Operation",
            url: "assets/documents/mode-of-operation.pdf"
        }
    ]
};
```

4. script.js

```javascript
// Main JavaScript for CfC Ministries Website

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize subtopic toggles on about page
    if (document.querySelector('.subtopic')) {
        initSubtopicToggles();
    }
    
    // Initialize audio players on media page
    if (document.querySelector('.audio-player')) {
        initAudioPlayers();
    }
    
    // Initialize event toggles on events page
    if (document.querySelector('.event-card')) {
        initEventToggles();
    }
    
    // Initialize article modals on articles page
    if (document.querySelector('.article-modal')) {
        initArticleModals();
    }
});

// Mobile Menu Toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Load Articles Preview on Homepage
function loadArticlesPreview() {
    const articlesContainer = document.getElementById('articles-container');
    
    if (!articlesContainer) return;
    
    // Get the latest article
    const articleKeys = Object.keys(articlesData);
    const latestArticleKey = articleKeys[articleKeys.length - 1];
    const article = articlesData[latestArticleKey];
    
    // Create article card
    const articleCard = document.createElement('div');
    articleCard.className = 'article-card';
    articleCard.innerHTML = `
        <div class="article-image">
            <img src="${article.image}" alt="${article.title}">
            <div class="article-overlay">
                <h3 class="article-title">${article.title}</h3>
                <p class="article-date">${article.date}</p>
            </div>
        </div>
        <div class="article-content">
            <p>${article.description}</p>
            <a href="articles.html?id=${article.id}" class="read-more">Read Article</a>
        </div>
    `;
    
    articlesContainer.appendChild(articleCard);
}

// Initialize Subtopic Toggles on About Page
function initSubtopicToggles() {
    const subtopicHeaders = document.querySelectorAll('.subtopic-header');
    
    subtopicHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const subtopic = this.parentElement;
            subtopic.classList.toggle('active');
        });
    });
}

// Initialize Audio Players on Media Page
function initAudioPlayers() {
    const audioPlayers = document.querySelectorAll('.audio-player');
    const audioDialog = document.querySelector('.audio-dialog');
    const closeDialog = document.querySelector('.close-dialog');
    const dialogAudio = document.querySelector('#dialog-audio');
    const dialogTitle = document.querySelector('.dialog-title');
    const dialogDescription = document.querySelector('.dialog-description');
    
    // Close dialog
    if (closeDialog) {
        closeDialog.addEventListener('click', function() {
            audioDialog.classList.remove('active');
            dialogAudio.pause();
        });
    }
    
    // Initialize each audio player
    audioPlayers.forEach(player => {
        const playBtn = player.querySelector('.play-btn');
        const progressBar = player.querySelector('.progress');
        const currentTime = player.querySelector('.current-time');
        const duration = player.querySelector('.duration');
        const audio = new Audio(player.dataset.audio);
        
        // Set audio duration
        audio.addEventListener('loadedmetadata', function() {
            const mins = Math.floor(audio.duration / 60);
            const secs = Math.floor(audio.duration % 60);
            duration.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        });
        
        // Play/pause button
        playBtn.addEventListener('click', function() {
            if (audio.paused) {
                audio.play();
                playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                audio.pause();
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
            }
        });
        
        // Update progress bar
        audio.addEventListener('timeupdate', function() {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = `${progress}%`;
            
            const mins = Math.floor(audio.currentTime / 60);
            const secs = Math.floor(audio.currentTime % 60);
            currentTime.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        });
        
        // Open dialog when title is clicked
        const titleElement = player.closest('.audio-card').querySelector('.audio-title');
        titleElement.addEventListener('click', function() {
            const title = this.textContent;
            const description = this.closest('.audio-card').querySelector('.audio-description').textContent;
            
            dialogTitle.textContent = title;
            dialogDescription.textContent = description;
            dialogAudio.src = audio.src;
            
            audioDialog.classList.add('active');
            
            // Play audio when dialog opens
            dialogAudio.play();
            const dialogPlayBtn = document.querySelector('.dialog-play-btn');
            dialogPlayBtn.innerHTML = '<i class="fas fa-pause"></i>';
        });
    });
    
    // Dialog audio controls
    const dialogPlayBtn = document.querySelector('.dialog-play-btn');
    const dialogProgressBar = document.querySelector('.dialog-progress');
    const dialogCurrentTime = document.querySelector('.dialog-current-time');
    const dialogDuration = document.querySelector('.dialog-duration');
    
    if (dialogPlayBtn) {
        dialogPlayBtn.addEventListener('click', function() {
            if (dialogAudio.paused) {
                dialogAudio.play();
                this.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                dialogAudio.pause();
                this.innerHTML = '<i class="fas fa-play"></i>';
            }
        });
    }
    
    // Update dialog progress bar
    if (dialogAudio) {
        dialogAudio.addEventListener('timeupdate', function() {
            const progress = (dialogAudio.currentTime / dialogAudio.duration) * 100;
            dialogProgressBar.style.width = `${progress}%`;
            
            const mins = Math.floor(dialogAudio.currentTime / 60);
            const secs = Math.floor(dialogAudio.currentTime % 60);
            dialogCurrentTime.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        });
        
        // Set dialog audio duration
        dialogAudio.addEventListener('loadedmetadata', function() {
            const mins = Math.floor(dialogAudio.duration / 60);
            const secs = Math.floor(dialogAudio.duration % 60);
            dialogDuration.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        });
    }
}

// Initialize Event Toggles on Events Page
function initEventToggles() {
    const eventCards = document.querySelectorAll('.event-card');
    
    eventCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
}

// Initialize Article Modals on Articles Page
function initArticleModals() {
    const articleLinks = document.querySelectorAll('.article-link');
    const articleModal = document.querySelector('.article-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalContent = document.querySelector('.modal-content');
    
    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            articleModal.classList.remove('active');
        });
    }
    
    // Close modal when clicking outside content
    articleModal.addEventListener('click', function(e) {
        if (e.target === articleModal) {
            articleModal.classList.remove('active');
        }
    });
    
    // Open modal when article is clicked
    articleLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const articleId = this.dataset.id;
            const article = articlesData[`article${articleId}`];
            
            if (article) {
                modalContent.innerHTML = `
                    <button class="close-modal"><i class="fas fa-times"></i></button>
                    <h2>${article.title}</h2>
                    <p class="article-meta">${article.date}</p>
                    <div class="article-body">${article.article}</div>
                `;
                
                // Re-add close event to the new close button
                const newCloseModal = modalContent.querySelector('.close-modal');
                newCloseModal.addEventListener('click', function() {
                    articleModal.classList.remove('active');
                });
                
                articleModal.classList.add('active');
            }
        });
    });
    
    // Check if URL has article ID parameter
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    
    if (articleId) {
        const article = articlesData[`article${articleId}`];
        
        if (article) {
            modalContent.innerHTML = `
                <button class="close-modal"><i class="fas fa-times"></i></button>
                <h2>${article.title}</h2>
                <p class="article-meta">${article.date}</p>
                <div class="article-body">${article.article}</div>
            `;
            
            // Re-add close event to the new close button
            const newCloseModal = modalContent.querySelector('.close-modal');
            newCloseModal.addEventListener('click', function() {
                articleModal.classList.remove('active');
                // Remove the ID from URL without reloading
                window.history.replaceState({}, document.title, window.location.pathname);
            });
            
            articleModal.classList.add('active');
        }
    }
}

// Load Events on Events Page
function loadEvents() {
    const eventsContainer = document.getElementById('events-container');
    
    if (!eventsContainer) return;
    
    for (const key in eventsData) {
        if (eventsData.hasOwnProperty(key)) {
            const event = eventsData[key];
            
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card';
            eventCard.innerHTML = `
                <div class="event-image">
                    <img src="${event.image}" alt="${event.title}">
                </div>
                <div class="event-content">
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-description">${event.description}</p>
                    <p class="event-date">${event.dateTime}</p>
                    <p class="event-venue">${event.venue}</p>
                    <div class="event-details">
                        ${event.details}
                        ${event.links.length > 0 ? `
                        <div class="event-links">
                            <strong>Join via:</strong>
                            ${event.links.map(link => `<a href="${link}" target="_blank">${link.includes('zoom') ? 'Zoom' : 'YouTube'}</a>`).join('')}
                        </div>
                        ` : ''}
                        <a href="#" class="reminder-btn">Set Reminder</a>
                    </div>
                    <p class="event-more">Click to see more details</p>
                </div>
            `;
            
            eventsContainer.appendChild(eventCard);
        }
    }
    
    // Re-initialize event toggles after loading
    initEventToggles();
}

// Load Media on Media Page
function loadMedia() {
    const videosContainer = document.getElementById('videos-container');
    const audiosContainer = document.getElementById('audios-container');
    
    if (videosContainer) {
        for (const key in mediasData) {
            if (mediasData.hasOwnProperty(key) && mediasData[key].type === 'youtube') {
                const media = mediasData[key];
                
                const videoCard = document.createElement('div');
                videoCard.className = 'video-card';
                videoCard.innerHTML = `
                    <div class="video-content">
                        <h3 class="video-title">${media.title}</h3>
                        <p class="video-description">${media.description}</p>
                        <div class="video-embed">
                            ${media.iframe}
                        </div>
                    </div>
                `;
                
                videosContainer.appendChild(videoCard);
            }
        }
    }
    
    if (audiosContainer) {
        for (const key in mediasData) {
            if (mediasData.hasOwnProperty(key) && mediasData[key].type === 'mp3') {
                const media = mediasData[key];
                
                const audioCard = document.createElement('div');
                audioCard.className = 'audio-card';
                audioCard.innerHTML = `
                    <div class="audio-content">
                        <h3 class="audio-title">${media.title}</h3>
                        <p class="audio-description">${media.description}</p>
                        <div class="audio-player" data-audio="${media.audio}">
                            <div class="audio-controls">
                                <button class="play-btn"><i class="fas fa-play"></i></button>
                                <div class="progress-bar">
                                    <div class="progress"></div>
                                </div>
                                <span class="time current-time">0:00</span>
                                <span class="time duration">${media.duration}</span>
                            </div>
                        </div>
                    </div>
                `;
                
                audiosContainer.appendChild(audioCard);
            }
        }
        
        // Re-initialize audio players after loading
        initAudioPlayers();
    }
}

// Load Articles on Articles Page
function loadArticles() {
    const articlesContainer = document.getElementById('articles-container');
    
    if (!articlesContainer) return;
    
    for (const key in articlesData) {
        if (articlesData.hasOwnProperty(key)) {
            const article = articlesData[key];
            
            const articleCard = document.createElement('div');
            articleCard.className = 'article-card';
            articleCard.innerHTML = `
                <div class="article-image">
                    <img src="${article.image}" alt="${article.title}">
                    <div class="article-overlay">
                        <h3 class="article-title">${article.title}</h3>
                        <p class="article-date">${article.date}</p>
                    </div>
                </div>
                <div class="article-content">
                    <p>${article.description}</p>
                    <a href="#" class="read-more article-link" data-id="${article.id}">Read Article</a>
                </div>
            `;
            
            articlesContainer.appendChild(articleCard);
        }
    }
    
    // Re-initialize article modals after loading
    initArticleModals();
}
```

5. about.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About - CfC Ministries</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header & Navigation -->
    <header id="header">
        <div class="container nav-container">
            <a href="index.html" class="logo">CfC Ministries</a>
            <nav>
                <ul class="nav-menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html" class="active">About</a></li>
                    <li><a href="articles.html">Articles</a></li>
                    <li><a href="media.html">Media</a></li>
                    <li><a href="events.html">Events</a></li>
                    <li><a href="#contact" class="nav-btn">Contact</a></li>
                </ul>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </div>
    </header>

    <!-- About The Ministry Section -->
    <section class="section" id="about-ministry">
        <div class="container">
            <h2 class="section-title">About The Ministry</h2>
            <div class="about-content">
                <div id="ministry-subtopics">
                    <!-- Ministry subtopics will be loaded from db.js -->
                </div>
                <a href="assets/documents/mode-of-operation.pdf" class="download-btn" download>
                    <i class="fas fa-download"></i> Download Mode of Operation
                </a>
            </div>
        </div>
    </section>

    <!-- About The Minister Section -->
    <section class="section bg-light" id="about-minister">
        <div class="container">
            <h2 class="section-title">About The Minister</h2>
            <div class="about-content">
                <div class="minister-profile">
                    <div class="minister-image">
                        <img src="assets/images/minister.jpg" alt="Apostle Iyiola O. M.">
                    </div>
                    <div class="minister-bio">
                        <h3>Apostle Iyiola O. M.'s Profile</h3>
                        <div id="minister-content">
                            <!-- Minister content will be loaded from db.js -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contact">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Contact Us</h3>
                    <p><i class="fas fa-map-marker-alt"></i> Ibadan, Oyo State, Nigeria</p>
                    <p><i class="fas fa-phone"></i> +234 XXX XXX XXXX</p>
                    <p><i class="fas fa-envelope"></i> info@cfcministries.org</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="articles.html">Articles</a></li>
                        <li><a href="media.html">Media</a></li>
                        <li><a href="events.html">Events</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Follow Us</h3>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>@CfC Ministries©2025</p>
            </div>
        </div>
    </footer>

    <script src="db.js"></script>
    <script src="script.js"></script>
    <script>
        // Load about content
        document.addEventListener('DOMContentLoaded', function() {
            loadMinistryContent();
            loadMinisterContent();
        });

        function loadMinistryContent() {
            const ministryContainer = document.getElementById('ministry-subtopics');
            
            if (!ministryContainer) return;
            
            aboutData.aboutMinistry.subtopics.forEach(subtopic => {
                const subtopicElement = document.createElement('div');
                subtopicElement.className = 'subtopic';
                subtopicElement.innerHTML = `
                    <div class="subtopic-header">
                        <h3 class="subtopic-title">${subtopic.title}</h3>
                        <span class="subtopic-icon"><i class="fas fa-chevron-down"></i></span>
                    </div>
                    <div class="subtopic-content">
                        ${subtopic.content}
                    </div>
                `;
                
                ministryContainer.appendChild(subtopicElement);
            });
            
            // Re-initialize subtopic toggles
            initSubtopicToggles();
        }

        function loadMinisterContent() {
            const ministerContainer = document.getElementById('minister-content');
            
            if (!ministerContainer) return;
            
            ministerContainer.innerHTML = aboutData.aboutMinister.content;
        }
    </script>
</body>
</html>
```

6. articles.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Articles - CfC Ministries</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header & Navigation -->
    <header id="header">
        <div class="container nav-container">
            <a href="index.html" class="logo">CfC Ministries</a>
            <nav>
                <ul class="nav-menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="articles.html" class="active">Articles</a></li>
                    <li><a href="media.html">Media</a></li>
                    <li><a href="events.html">Events</a></li>
                    <li><a href="#contact" class="nav-btn">Contact</a></li>
                </ul>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </div>
    </header>

    <!-- Articles Section -->
    <section class="section">
        <div class="container">
            <h2 class="section-title">Articles</h2>
            <div class="articles-grid" id="articles-container">
                <!-- Articles will be loaded from db.js -->
            </div>
        </div>
    </section>

    <!-- Article Modal -->
    <div class="article-modal">
        <div class="modal-content">
            <!-- Article content will be loaded here -->
        </div>
    </div>

    <!-- Footer -->
    <footer id="contact">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Contact Us</h3>
                    <p><i class="fas fa-map-marker-alt"></i> Ibadan, Oyo State, Nigeria</p>
                    <p><i class="fas fa-phone"></i> +234 XXX XXX XXXX</p>
                    <p><i class="fas fa-envelope"></i> info@cfcministries.org</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="articles.html">Articles</a></li>
                        <li><a href="media.html">Media</a></li>
                        <li><a href="events.html">Events</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Follow Us</h3>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>@CfC Ministries©2025</p>
            </div>
        </div>
    </footer>

    <script src="db.js"></script>
    <script src="script.js"></script>
    <script>
        // Load articles
        document.addEventListener('DOMContentLoaded', function() {
            loadArticles();
        });
    </script>
</body>
</html>
```

7. media.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media - CfC Ministries</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header & Navigation -->
    <header id="header">
        <div class="container nav-container">
            <a href="index.html" class="logo">CfC Ministries</a>
            <nav>
                <ul class="nav-menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="articles.html">Articles</a></li>
                    <li><a href="media.html" class="active">Media</a></li>
                    <li><a href="events.html">Events</a></li>
                    <li><a href="#contact" class="nav-btn">Contact</a></li>
                </ul>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </div>
    </header>

    <!-- Videos Section -->
    <section class="section media-section">
        <div class="container">
            <h2 class="section-title">Videos</h2>
            <div class="media-grid" id="videos-container">
                <!-- Videos will be loaded from db.js -->
            </div>
        </div>
    </section>

    <!-- Audios Section -->
    <section class="section media-section bg-light">
        <div class="container">
            <h2 class="section-title">Audios</h2>
            <div class="media-grid" id="audios-container">
                <!-- Audios will be loaded from db.js -->
            </div>
        </div>
    </section>

    <!-- Audio Dialog -->
    <div class="audio-dialog">
        <div class="dialog-content">
            <button class="close-dialog"><i class="fas fa-times"></i></button>
            <h3 class="dialog-title"></h3>
            <p class="dialog-description"></p>
            <div class="dialog-audio-player">
                <div class="audio-controls">
                    <button class="play-btn dialog-play-btn"><i class="fas fa-play"></i></button>
                    <div class="progress-bar">
                        <div class="progress dialog-progress"></div>
                    </div>
                    <span class="time dialog-current-time">0:00</span>
                    <span class="time dialog-duration">0:00</span>
                </div>
            </div>
            <audio id="dialog-audio"></audio>
        </div>
    </div>

    <!-- Footer -->
    <footer id="contact">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Contact Us</h3>
                    <p><i class="fas fa-map-marker-alt"></i> Ibadan, Oyo State, Nigeria</p>
                    <p><i class="fas fa-phone"></i> +234 XXX XXX XXXX</p>
                    <p><i class="fas fa-envelope"></i> info@cfcministries.org</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="articles.html">Articles</a></li>
                        <li><a href="media.html">Media</a></li>
                        <li><a href="events.html">Events</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Follow Us</h3>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>@CfC Ministries©2025</p>
            </div>
        </div>
    </footer>

    <script src="db.js"></script>
    <script src="script.js"></script>
    <script>
        // Load media
        document.addEventListener('DOMContentLoaded', function() {
            loadMedia();
        });
    </script>
</body>
</html>
```

8. events.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Events - CfC Ministries</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header & Navigation -->
    <header id="header">
        <div class="container nav-container">
            <a href="index.html" class="logo">CfC Ministries</a>
            <nav>
                <ul class="nav-menu">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="articles.html">Articles</a></li>
                    <li><a href="media.html">Media</a></li>
                    <li><a href="events.html" class="active">Events</a></li>
                    <li><a href="#contact" class="nav-btn">Contact</a></li>
                </ul>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </div>
    </header>

    <!-- Events Section -->
    <section class="section">
        <div class="container">
            <h2 class="section-title">Events</h2>
            <div class="events-grid" id="events-container">
                <!-- Events will be loaded from db.js -->
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contact">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Contact Us</h3>
                    <p><i class="fas fa-map-marker-alt"></i> Ibadan, Oyo State, Nigeria</p>
                    <p><i class="fas fa-phone"></i> +234 XXX XXX XXXX</p>
                    <p><i class="fas fa-envelope"></i> info@cfcministries.org</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="articles.html">Articles</a></li>
                        <li><a href="media.html">Media</a></li>
                        <li><a href="events.html">Events</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Follow Us</h3>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>@CfC Ministries©2025</p>
            </div>
        </div>
    </footer>

    <script src="db.js"></script>
    <script src="script.js"></script>
    <script>
        // Load events
        document.addEventListener('DOMContentLoaded', function() {
            loadEvents();
        });
    </script>
</body>
</html>
```

Implementation Notes

1. File Structure: I've created all the necessary HTML files (index.html, about.html, articles.html, media.html, events.html) along with the CSS and JavaScript files.
2. Design: The website follows the modern, sleek design template you requested with a clean color scheme and responsive layout.
3. Functionality:
   · The homepage features the hero section and previews of About the Ministry, About the Minister, and the latest article
   · The About page includes expandable sections for ministry information and the minister's profile
   · The Articles page displays article cards that open in a modal when clicked
   · The Media page includes both YouTube videos and audio players with custom controls
   · The Events page shows event cards that expand to reveal more details when clicked
4. Database: All content is stored in db.js as requested, making it easy to update the website content.
5. Responsive Design: The website is fully responsive and will work well on mobile, tablet, and desktop devices.

To complete the website, you'll need to:

1. Add actual images to the assets/images folder
2. Add actual audio files to the assets/audio folder
3. Add the actual mode of operation PDF to the assets/documents folder
4. Update the contact information with actual details
5. Replace the YouTube embed codes with actual ministry videos

The website is now ready to be deployed!

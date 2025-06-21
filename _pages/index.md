---
layout: default
permalink: /
title: Home
nav-order: 1
---

<div class="container-fluid">
    <div class="row full-page d-flex justify-content-center">
        <div class="col-md-6 col-lg-4 d-flex flex-column justify-content-center align-items-center p-3 p-sm-5 p-lg-3">
            <img class="img-fluid rounded-circle m-5 m-md-0" src="assets/img/profile_picture.jpg">
        </div>
        <div class="col-md-6 col-lg-5 d-flex flex-column justify-content-center p-2">
            <div>
                <h1 class="display-5 display-lg-4 text-center text-md-start">M. Umar Shahbaz</h1>
                <p>I'm a student from Pakistan with experience in C++, Python, JavaScript, and Ruby. I enjoy the
                    precision of C++—and, somehow, I've also grown fond of JavaScript's beautiful chaos.</p>
            </div>
        </div>
    </div>
</div>
<div class="container-fluid full-page d-flex flex-column pb-5" style="background-color: var(--bs-gray-800)">
    <h1 class="display-3 text-center text-white p-5">Check out my Hackatime!!</h1>
    <div class="row justify-content-center flex-fill">
        <div class="col-md-8 col-lg-6 align-self-center">
            <p class="text-center fs-3 text-white"><span id="duration"></span></p>
            <img src="https://github-readme-stats.hackclub.dev/api/wakatime?username=6834&api_domain=hackatime.hackclub.com&theme=default&custom_title=Hackatime+Stats&layout=compact&cache_seconds=0&langs_count=8"
                class="image-fluid w-100 h-auto">
        </div>
    </div>
</div>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        function show_duration() {
            const Started_at = new Date('2025-06-17T12:36:34+05:00').getTime()
            const duration = Date.now() - Started_at;
            const seconds = Math.floor((duration / 1000) % 60);
            const minutes = Math.floor((duration / (1000 * 60)) % 60);
            const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
            const days = Math.floor(duration / (1000 * 60 * 60 * 24));
            const pad = (num) => String(num).padStart(2, '0');

            document.getElementById('duration').innerText = `${days} days, ${pad(hours)} hrs, ${pad(minutes)} mins and ${pad(seconds)} secs`;
        }
        show_duration()
        setInterval(show_duration, 500);
    });
</script>
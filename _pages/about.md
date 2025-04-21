---
permalink: /about/
layout: default
title: About
nav-order: 2
---

<br class="spacer">

{% include figure.liquid path="/assets/img/Home/profile_picture.jpg" loading="eager" class="circle img-center-h" width="300px" zoomable=true %}

<h1 class="heading center-text uppercase">M. Umar Shahbaz</h1>

I’m your friendly neighborhood programmer! My origin story is one of passion and hard work.

Way back in 2018, I was annoyed by my siblings always poking into my room without permission. Security alarms were too expensive for 11-year-old me, so I decided to make one.

So came forth the Arduino—the small piece of hardware that started the journey into **Robotics**, **Web Development**, **Application Development**, **Electrical Engineering**, and even **Digital Electronics**.

I’m halfway to becoming a **Jack-of-all-Trades**—or at least the guy sticking his leg into everything!

My strengths lie in my skills of deduction, adaptation, and creative problem-solving. I have what it takes to learn new aspects, such as new programming languages and frameworks, in the most efficient way possible.

Needless to say, I'm not a fast learner. I'm a faster learner.

<br class="spacer">

<h1 class="heading uppercase">Education</h1>
<div class="card-container">
    {% for school in site.data.schools %}
        {%  capture body %}
            <p style="font-size: small;">{{ school.location }}<br>{{ school.enrollment_year }} - {{ school.graduation_year }}</p>
            <h3>{{ school.degree }}</h3>
            <h4>{{ school.field_of_study }}</h4>
        {% endcapture %}
        {%  include card.liquid img=school.img title=school.name body=body link=school.link %}
    {% endfor %}
</div>

<br class="spacer">

<h1 class="heading right-text uppercase">Affiliations</h1>
<div class="card-container">
    {% for affiliate in site.data.affiliations %}
        {%  capture body %}
            <p style="font-size: small;">{{ affiliate.description }}</p>
        {% endcapture %}
        {%  include card.liquid img=affiliate.img title=affiliate.name body=body link=affiliate.link %}
    {% endfor %}
</div>

<br class="spacer">

<h1 class="heading uppercase">Programming Languages</h1>
<div class="center-element row p-margins icons">
    {% for icon in site.data.tech.languages %}
        {% include figure.liquid path=icon.path width="100px" class="no-shadow " %}
    {% endfor %}
</div>

<br class="spacer">

<h1 class="heading uppercase right-text">Tools</h1>
<div class="center-element row p-margins icons">
    {% for icon in site.data.tech.tools %}
        {% include figure.liquid path=icon.path width="100px" class="no-shadow " %}
    {% endfor %}
</div>

<br class="spacer">
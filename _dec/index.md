---
layout: default
title: Digital Electronics Course
videos:
  - Title: DEC Topics 1-2
    URL: https://drive.google.com/file/d/1rHr8WEtmloX6zLiBU0e-hZAtivfleRSr/view?usp=sharing
  - Title: DEC Topics 3-5
    URL: https://drive.google.com/file/d/1StqYq9DSKqjA1GmGPkiqxucM1ZBWknlc/view?usp=sharing
  - Title: DEC Topic 6
    URL: https://drive.google.com/file/d/13l8gVlXioTMpc-m4Xc29ZTiz-uToAY6F/view?usp=sharing
  - Title: DEC Topic 7
    URL: https://drive.google.com/file/d/1OYXQWPgDnWqQgmxoheZWnWGMdtOXj2Hz/view?usp=sharing
---
<style>
  .video-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .video-item {
    width: 200px;
    text-align: center;
  }

  .video-item img {
    width: 100%;
    border-radius: 8px;
    transition: transform 0.3s;
  }

  .video-item img:hover {
    transform: scale(1.05);
  }
</style>

<h1>Lectures</h1>
<div class="card-container">
  {% for video in page.videos %}
    <div class="card dec-lecture">
      <a href="{{ video.URL }}">
          <!-- Replace with a thumbnail generator or a default image -->
          <!--<img src="/path/to/default-thumbnail.jpg" alt="{{ file.name }} Thumbnail">-->
        <h3>{{ video.Title }}</h3>
      </a>
    </div>
  {% endfor %}
</div>

<h1>Notes</h1>
<h2>Available from August 2025 onwards</h2>
{% assign sorted_notes = site.dec | sort: "importance" | where_exp: "note", "note.title != 'Digital Electronics Course'" %}
<div class="card-container">
{% for note in sorted_notes %}
  <div class="card dec-note">
        <a href="{{ note.Link }}">
          <h3>{{ note.title }}</h3>
        </a>
      </div>
{% endfor %}
</div>
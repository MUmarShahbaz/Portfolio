---
permalink: /projects/Chess-Tools
layout: project
dynamic_assets:
  files:
   - project.css

title: Chess Tools
image: /assets/img/Projects/CT/CT.png
description: A few tools for Chess.com users. Automatic Review Scheduler and Profile Analyzer.

icons:
  - Python
  - JSON
  - HTML5
repositories:
  - name: Chess-ReviewerBots
  - name: Chess-Analyzer
  - name: Chess-Move-Counter
best: 2
---

<br class="big-spacer">

<h1 class="heading">Chess ReviewerBots</h1>
An automatic scheduler that runs every 24 hours and reviews your latest N games, where N is the number of bots you have defined.

## Features

- **Complete Security**:  
  All sensitive information is stored in Repository Secrets, hence they can never be accessed by others.
- **Scalability**:  
  The project is basically limitless allowing you to configure as many bots as you can without restriction.  
  Though it would be best to stick below 20.
- **Automatic**:  
  After the initial setup is complete, you will never need to take another look again

**Check out the GitHub repo for more info**

<br class="big-spacer">

<h1 class="heading">Chess Analyzer</h1>
Uses chess.com's API to access game info for every single game ever played by a user and calculate the average accuracy, as well as plot a distribution graph.

## Features

- **URLs**  
  Generates URLs for all reviewed games and groups them into 5% class widths
- **Average Accuracy**  
  Calculates Mean, Median and Mode of accuracies. Also displays the total count of games used for the analysis
- **Graph**  
  Plots a graph of the distribution of accuracies
- **Auto-URL-Opener**  
  An additional feature which opens every single game URL generated one class at a time

## Example Output
{% include figure.liquid path="/assets/img/Projects/CT/Distribution.png" max-width="1000px" class="rounded-corners" alt="Distribution Graph" %}

**Check out the GitHub repo for more info**

<br class="big-spacer">

<h1 class="heading">Chess Move Counter</h1>
Used to count every single type of move you have ever made throughout your game history.

## Features

- **Easy Setup**  
  You can easily install dependencies by running the installer script, necessary files are generated during runtime.
- **URLs**  
  Generates URLs for all reviewed games
- **N**  
  Generates a report for your latest N games, using -1 will generate report for all games
- **JSON**  
  Outputs a JSON file containing the move counts
- **RESULTS**  
  Generates an HTML file displaying the counts and opens it automatically when the program ends
- **BRILLIANT**  
  Generates an HTML file storing links to every brilliant move found

## Example Output
{% include figure.liquid path="/assets/img/Projects/CT/Moves.png" max-width="400px" class="rounded-corners" alt="Distribution Graph" %}

**Check out the GitHub repo for more info**
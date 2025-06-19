---
permalink: /projects/jekyll_dynamic_assets
layout: project
dynamic_assets:
  files:
   - project.css
   - code-highlight.css

title: Jekyll Dynamic Assets
image: /assets/img/Projects/JDA/JDA.png
description: Use simple variables to define your master files, presets and manual insertion. Select your assets dynamically via page front matter and config.yml

icons:
  - Ruby
repositories:
  - name: jekyll_dynamic_assets
best: 1
---
<img src="https://img.shields.io/gem/dt/jekyll_dynamic_assets?style=for-the-badge&logo=ruby&label=DOWNLOADS&labelColor=red&color=white" style="width: 80%; max-width: 300px; height: auto;" class="rounded-corners center-self">

---

<a href="https://rubygems.org/gems/jekyll_dynamic_assets" class="button">View Gem on rubygems.org</a>
<br>
<a href="https://github.com/users/MUmarShahbaz/packages/rubygems/package/jekyll_dynamic_assets" class="button">View Gem on github.com</a>

---

Jekyll_Dynamic_Assets is a powerful Jekyll plugin for dynamic, flexible, and DRY asset management. It lets you define, group, and inject CSS, JS, and other head assets using presets, per-page config, and custom formatting.

## Features
- Define global (master) assets and per-page assets
- Use asset presets for reusable asset groups
- Pre-defined and overrideable formats and sources for common assets
- Auto, Select, and Inline formats and sources
- Liquid tag `{% raw %}{% assets %}{% endraw %}` for easy asset injection in templates and includes
- Error reporting for missing presets and formats
- Absolute/relative URL support
- Supports all head assets: CSS, JS, module JS, fonts, icons, JSON, etc.

## Installation

Add this to your Jekyll site's `Gemfile`:

```ruby
source 'https://rubygems.org'

gem "jekyll"

group :jekyll_plugins do
  gem "jekyll_dynamic_assets"
  # other gems
end
```

Then add the following to your Jekyll site's `config.yml`:

```yaml
plugins:
  - jekyll_dynamic_assets
```

Finally, in your terminal run:

```powershell
bundle install
```

## Usage

### 1. Configure your assets in `config.yml`

```yaml
assets:
  master:
    - main.css
    - main.js

  source:
    base: /assets
    github: https://github.com/assets/
    css: /css
    js: /js
  absolute: true # Use absolute URLs (uses `url` and `baseurl` from config)

  presets:
    blog: [blog.css, blog.js]
    project: [project.css, project.js, code-highlight.css, slideshow.js, myApp.js]

  formats:
    js:  <script defer src='%s'></script>
    xyz: <custom> %s </custom>
    screen-css: <link rel="stylesheet" href="%s" media="screen">
```

If all your assets are in the same folder, you can simply do:

```yaml
assets:
  source: /asset_folder
```

**Path rules:** Always use a leading slash, never a trailing slash.

### 2. Per-page or per-collection configuration

In your page or post front matter:

```yaml
assets:
  files:  # See Asset Definition Syntax below
    - manual.css
    - onscreen.css::screen-css
    - no_script.css:::<noscript><link rel="stylesheet" href="%s"></noscript>
    - github<<master.css
    - /css/new<<<new-main.css
  presets:
    - blog
    - project
```

### 3. Inject assets in your templates

Use the Liquid tag where you want the assets to appear (typically in your `<head>`):

```liquid
<head>
  <!-- other tags like meta etc. -->
  {% raw %}{% assets %}{% endraw %}
</head>
```

This will output the appropriate HTML tags for all configured assets. The tag should generally be used inside your `<head>` tag but can be used anywhere else.

---

### Asset Definition Syntax

You can use the following syntax anywhere (config or front matter):

```
Source<<Asset::Format
```

- `<<` uses `Source` as a variable from config; `<<<` uses `Source` as a literal.
- `::` uses `Format` as a variable from config; `:::` uses `Format` as a literal.
- If either is not defined, source/format is taken from config using the file extension.
- If the source is not external, it will be determined using `base + Source`.

**NOTE:**
- If JDA can't find a source, it will use the `base` without sub-directories.
- If JDA can't find the format, it will raise an error. A format is required for each asset.

---

## Contributing

Bug reports and pull requests are welcome on GitHub at [MUmarShahbaz/jekyll_dynamic_assets](https://github.com/MUmarShahbaz/jekyll_dynamic_assets). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/MUmarShahbaz/jekyll_dynamic_assets/blob/main/CODE_OF_CONDUCT.md).

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the JekyllDynamicAssets project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/MUmarShahbaz/jekyll_dynamic_assets/blob/main/CODE_OF_CONDUCT.md).

<br class="big-spacer">
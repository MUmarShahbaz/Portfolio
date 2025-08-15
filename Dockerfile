FROM ruby:3.3.5-bullseye

RUN apt-get update && apt-get install -y \
    curl \
    libjpeg-dev \
    webp \
    libpng-dev \
    libavif-dev \
    libheif-dev \
    libopenjpip7 \
    imagemagick \
    libvips-tools \
    build-essential \
 && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
 && apt-get install -y nodejs \
 && rm -rf /var/lib/apt/lists/*

RUN gem install bundler jekyll

WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./
RUN bundle install
RUN npm install -g purgecss

COPY . .

CMD ["sh", "-c", "JEKYLL_ENV=production bundle exec jekyll build"]
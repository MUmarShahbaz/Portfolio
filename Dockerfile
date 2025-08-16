FROM ghcr.io/mumarshahbaz/mus_jekyll:1.0.0

WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

CMD ["sh", "-c", "JEKYLL_ENV=production bundle exec jekyll build"]
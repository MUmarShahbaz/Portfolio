FROM mumarshahbaz/jekyll:1.0.0

WORKDIR /usr/src/app
ENV JEKYLL_ENV=production

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

CMD ["sh", "-c", "bundle exec jekyll build"]
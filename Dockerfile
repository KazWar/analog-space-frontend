FROM nginx:1.18 as ui_builder

# Set a few vars to help later on
ENV WORKDIR=/ui-build

# Update packages and install needed dependacies to build the UI
RUN apt-get update

# Install curl - Why is it no in there already
RUN apt-get install -o DPkg::Options::="--force-confold" -y curl

# Install Node JS and NPM
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get install -y nodejs yarn

# Set workdir and copy the project
WORKDIR $WORKDIR
COPY . .

## Install yarn dep and build the project
RUN yarn install && \
    yarn global add @quasar/cli  && \
    quasar build

# Run stage
FROM nginx:1.18

# Set a few vars to help later on
ENV BUILDDIR=/ui-build/dist/spa

# Copy the static files from the build stage to here
COPY --from=ui_builder $BUILDDIR /gemini_ui

# Remove nginx config file
RUN rm -v /etc/nginx/nginx.conf

# Get the new config file
ADD nginx.conf /etc/nginx/

# Stop the deamon
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

CMD service nginx start

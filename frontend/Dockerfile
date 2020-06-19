FROM node:12.17.0-alpine
WORKDIR /app

# Copy across client package.json
COPY ./package.json /package.json
# Copy the yarn lock file if using yarn
COPY ./yarn.lock /yarn.lock
# Install client dependancies
RUN yarn install

# Copy client files
COPY public public
COPY src src

CMD yarn start
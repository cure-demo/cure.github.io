### STAGE 1: Build ###

# We label our stage as ‘builder’
FROM node:10-alpine as builder

LABEL Maintainer="husainm@trinesis.com"

COPY package.json package-lock.json ./

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build

RUN npm ci && mkdir /home/ng-app && mv ./node_modules ./ng-app

RUN npm link @angular/cli

WORKDIR /home/ng-app

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder

RUN npm install --save-dev @angular-devkit/build-angular

RUN npm run ng build --prod

### STAGE 2: Setup ###

FROM nginx:1.14.1-alpine

## Copy our default nginx config
COPY ./nginx-app.conf /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /home/ng-app/dist /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]
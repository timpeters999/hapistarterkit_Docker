FROM ubuntu:14.04

# install some stuff
RUN sudo apt-get update && sudo apt-get install -y nodejs npm nodejs-legacy git git-core wget rpm curl

ADD package.json package.json
RUN sudo npm install --production

RUN sudo npm cache clean -f
RUN sudo npm install -g n
RUN sudo n stable

RUN sudo mkdir -p /opt/app

# From here we load our application's code in, therefore the previous docker
# "layer" thats been cached will be used if possible
WORKDIR /opt/app
ADD . /opt/app

EXPOSE 1200
CMD ["node", "app.js"]
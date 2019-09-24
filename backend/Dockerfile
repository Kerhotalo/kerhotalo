FROM node:11
MAINTAINER Kerhotalo

COPY package.json /src/package.json
RUN cd /src && npm install --loglevel error
RUN apt-get update

COPY . /src
WORKDIR /src

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.5.0/wait /wait
RUN chmod +x /wait
EXPOSE 4000
CMD /wait && npm run start
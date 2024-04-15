FROM node:lts-bookworm

ENV DEBIAN_FRONTEND noninteractive

RUN apt update && apt install -y bash nano

WORKDIR /app

USER node

EXPOSE 5173

CMD npm run dev

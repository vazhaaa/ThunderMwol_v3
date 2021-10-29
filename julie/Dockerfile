FROM fusuf/whatsasena:latest

RUN git clone https://github.com/nishal2445666677/ThunderMwol_v3 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/nishal2445666677/media

CMD ["node", "bot.js"]

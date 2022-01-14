FROM node:16-alpine
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NO_UPDATE_NOTIFIER=true

COPY next.config.js ./
COPY public ./public
COPY .next ./.next
COPY node_modules ./node_modules
COPY package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]

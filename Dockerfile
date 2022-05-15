FROM node:16-alpine
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NO_UPDATE_NOTIFIER=true

COPY next.config.js ./
COPY public ./public
COPY .next ./.next
COPY node_modules ./node_modules
COPY package.json package.json

COPY entrypoint.sh .
COPY .env .

# Execute script
RUN apk add --no-cache --upgrade bash
RUN ["chmod", "+x", "./entrypoint.sh"]
ENTRYPOINT ["./entrypoint.sh"]

EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]

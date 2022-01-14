FROM node:16-alpine
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NO_UPDATE_NOTIFIER=true

COPY .next/standalone ./
COPY .next/static ./

EXPOSE 3000
CMD ["node", "server.js"]

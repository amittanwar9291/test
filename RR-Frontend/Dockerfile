FROM nginx:1.17.1-alpine

COPY  ./dist/RadioReport-FrontEnd /usr/share/nginx/rr/dist
COPY ./docker-config/nginx/rr.conf /etc/nginx/conf.d/default.conf

CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/rr/dist/assets/env.template.js > /usr/share/nginx/rr/dist/assets/env.js && exec nginx -g 'daemon off;'"]

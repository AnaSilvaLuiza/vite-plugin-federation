FROM nginx:1.27.0-alpine

RUN mkdir /www
WORKDIR /www

COPY dist/apps/platform-services /www/platform-services
COPY dist/storybook /www/platform-services/storybook
COPY server/nginx.conf /etc/nginx/templates/default.conf.template
EXPOSE 80

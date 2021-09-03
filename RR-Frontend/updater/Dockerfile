FROM httpd:2.4

COPY ./electron/release/latest.yml /usr/local/apache2/htdocs/
COPY ./electron/release/RadioReport* /usr/local/apache2/htdocs/
RUN rm /usr/local/apache2/htdocs/index.html


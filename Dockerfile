FROM nginx
WORKDIR /build
COPY ./code/dist /build
RUN mkdir /app
COPY --from=0 /build/dist /app
COPY --from=0 /build/nginx.conf /etc/nginx/nginx.conf
COPY --from=0 /build/ssl /etc/nginx/ssl
EXPOSE 80

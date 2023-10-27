FROM nginx:latest
COPY ./widget /usr/share/nginx/html/widget
COPY ./nginx.conf /etc/nginx/nginx.conf

# 暴露容器的 80 端口
EXPOSE 80

# 启动 Nginx 服务器
ENTRYPOINT ["nginx", "-g", "daemon off;"]

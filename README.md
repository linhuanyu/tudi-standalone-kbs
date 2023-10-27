# 启动步奏 #

* Step 1: 安装 docker-compose
* Step 2: widget/widget/widget.js 中的 7 行，将 http://34.80.37.72 改成目前 Server 的 url
* Step 3: 下指令 sudo docker-compose up -d --build
* Step 4: 使用指令 curl http://localhost/cnmodule/kbs/initialService?key=[开通key] 开通系统，指令回传 token，对接的系统所有 request 的 header Authentication 用这个 token 

# 注意事项 #

* MySQL 可用 mysql -h 127.0.0.1 -u root -ptudi5432 tudi_cn_module 连接
* API 网址 http://{Server URL}/cnmodule/
* widget 网址 http://{Server URL}/widget/widget.js
* 刚启动 Java Spring Boot 程式不会马上跑成功，要等 MySQL Ready 才会跑起来，要等一下

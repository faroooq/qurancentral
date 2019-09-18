MDB personal access token:
==========================
KFyXNKEyvMYxGCiqvzwX

FEED Token:
jJAU2CQesPEV8eGuAgMg

To access instance:
ssh -i "frq-ec2-instance-key.pem" ec2-user@ec2-18-224-88-1.us-east-2.compute.amazonaws.com

Domain IP: 18.224.88.1
Domain Name: ec2-18-224-88-1.us-east-2.compute.amazonaws.com

AWS SSH : ec2-user/f@rooq6011

MYSQL/phpmyadmin DB: root/f@rooq6011

wordpress: farooq/f@rooq6011

MAC SSH connect from terminal:
cd Desktop/projects/qarabic/aws_key/
sudo ssh -i "frq-ec2-instance-key.pem" ec2-user@ec2-18-224-88-1.us-east-2.compute.amazonaws.com
pwd: system password

Restart Apache:
sudo service httpd restart

Restart mysql:
sudo service mysqld restart

Permissions:
sudo find /var/www/html/qa/ -type f -exec chmod 777 {} \;

INDEX PAGES TO GOOGLE SITEMAP:
https://search.google.com/search-console/sitemaps?resource_id=http%3A%2F%2Fqarabic.farooq.in%2F&hl=en


AWS dist deployment path:
========================
/home/ec2-user/express/qarabic

ISSUES AND FIXES:
===================
Issue: Cannot read property 'properties' of undefined
npm install webpack-cli@latest -D

Some important links:
========================
Install LAMP Stack:
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/install-LAMP.html

https://malcoded.com/posts/server-rendering-pitfalls
https://semaphoreci.com/community/tutorials/setting-up-angular-2-with-webpack
https://stackoverflow.com/questions/7881469/change-key-pair-for-ec2-instance

Install NODE, GIT, Pm2:
https://medium.com/@nishankjaintdk/setting-up-a-node-js-app-on-a-linux-ami-on-an-aws-ec2-instance-with-nginx-59cbc1bcc68c

Remove NODE from ec2:
---------------------
sudo rm -rf /usr/local/bin/npm /usr/local/share/man/man1/node* /usr/local/lib/dtrace/node.d ~/.npm ~/.node-gyp /opt/local/bin/node opt/local/include/node /opt/local/lib/node_modules


PROD Build command:
====================
npm run build:ssr && npm run serve:ssr
#ng build --base-href=/qarabic/ --configuration=production
#ng build --configuration=production

Install Node:
------------
nvm install node --reinstall-packages-from=node

Run qarabic application:
========================
pm2 start /var/www/html/qarabic/server.js
pm2 stop /var/www/html/qarabic/server.js

Restart Nginx reverse proxy for angular port 8081:
=================================================
Nginx Configuration location: /etc/nginx/nginx.conf
Note: right now Nginx server is using the port 80
sudo service nginx stop
sudo service nginx start
sudo service nginx restart

Apache httpd.conf file location:
================================
/etc/httpd/conf/httpd.conf

Reverse Proxy apache:
====================
https://stackoverflow.com/questions/8541182/apache-redirect-to-another-port
# centos 默认安装了yum

#安装 wget
yum install wget

yum install which

#安装apt-get
#curl https://raw.githubusercontent.com/dvershinin/apt-get-centos/master/apt-get.sh -o /usr/local/bin/apt-get

#安装vim
#yum -y install vim-enhanced

#安装nodejs
yum -y install nodejs
node /var/mydata/index.js

#安装阿里云
wget -O- https://raw.githubusercontent.com/aliyun-node/tnvm/master/install.sh | bash
source ~/.bashrc
tnvm install alinode-v3.11.4
tnvm use alinode-v3.11.4
npm install @alicloud/agenthub -g
which node
which agenthub

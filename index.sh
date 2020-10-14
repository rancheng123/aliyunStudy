# -t    占用一个虚拟终端
# -i    可交互式


docker run \
-v ~/test:/var/mydata \
-w /var/mydata/ \
-a stdin -a stdout \
-it \
centos \
/bin/bash
#sh ./download.sh



#node /var/mydata/index.js

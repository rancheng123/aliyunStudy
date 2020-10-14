/*
Node.js 性能平台( Node.js Performance Platform )

    地址： https://www.aliyun.com/product/nodejs?spm=5176.12825654.h2v3icoap.424.e9392c4aqizXmO
    价格： 免费

    作用：
        性能监控

                系统层面
                    针对服务器（物理机、虚拟机、Docker 等）级别，提供如下监控指标：

                        1.内存使用
                        2.CPU 使用率
                        3.系统负载
                        4.系统 QPS
                        5.硬性性能指标
                        6.磁盘使用率
                        7.GC 统计
                        ……
                进程层面
                    针对每个 Node.js 进程，提供如下监控指标：
                        堆内（total 和 used）和堆外内存统计
                        堆内各个内存空间占用内存统计
                        垃圾回收（GC）占整个进程运行时间比例
                        QPS
                        按 1s、15s、30s、60s 的 CPU 统计
                        libuv 句柄，定时器统计
                        ……


        安全提醒
            npm 模块安全漏洞提醒

        故障排查
            热点函数分析，通过线上 CPU Profiling 分析定位到热点函数
            内存泄露分析，通过线上堆快照分析定位到内存泄露可疑点
            GC 过程追踪
            堆时间线
            …..
        性能优化


        线上问题（提供完善的工具链和服务,协助发现和定位线上问题）


            提供的精确到虚拟机级别的深度监控，能够如实的反应应用运行状态，
            通过配置报警规则，用户可以在发现系统出现故障（内存泄露或者 CPU 热点等）趋势时，通过诊断接口迅速定位故障点。



    使用：
        1.准备阿里云账号

            个人账号
            成成成佳佳佳
            Csjyff159307

        2. 创建应用
            前往 https://node.console.aliyun.com/?spm=a2c4g.11186623.2.14.7d964633qL2Jsi 创建应用

            已创建的应用：
                App Name：demo
                App ID：86462
                App Secret：60ccc69d948c2c9d2100d5564cc57aec5e38c774

        3. 接入 Node.js 性能平台


*/

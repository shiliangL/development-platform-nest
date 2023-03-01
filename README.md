### 知识准备

HTTP: 了解基本的 Get、Post 请求
Node：基本明白接口请求，知道服务与接口关系即可
Typescript：基本懂语法，能大致知道装饰器和 interface
了解基本的 REST API

### 基本了解

NestJS 也主张的是 MVC 的格式。

- module 的作用是在程序运行时给模块处理依赖。好处是所有模块的依赖都可以在 module 中清晰明了的知道引用还是被引用;
- controller 的作用是处理请求，所有的请求会先到 controller，再经 controller 调用其他模块业务逻辑
- service 处理业务逻辑的地方，所有的业务逻辑都会在这里处理。它可经过 module 引用其他模块的service，也可经过 module 暴露出去。


### 自动生成

nest g module question --no-spec
nest g service question --no-spec
nest g controller question --no-spec

要创建新资源
nest g resource [名称] --no-spec

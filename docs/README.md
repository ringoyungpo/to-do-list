# To Do List - 基于 Spring Cloud 的实现!

## OKR

### 目标

基于 springcloud(eureka,config,hystrix,zuul,feign,oauthor2,zipkin) +mybatis 组件实现一个 To Do List

### 关键成果

-   实现基本的功能
-   引入 Eureka 服务管理
-   引入 Zuul 实现负载均衡
-   引入 oauthor2 实现用户登录
-   引入 feign 实现注释远程调用
-   引入 zipkin 实现分布式追踪
-   引入 hystrix 实现服务熔断
-   引入 config 实现配置中心
-   引入 mybatis 实现 ORM

## UML

### 用例图

@startuml
left to right direction
skinparam packageStyle rectangle

:用户:

rectangle 代办事项 {
用户 -- (新增一个代办事项)
用户 -- (删除一个代办事项)
用户 -- (修改一个代办事项)
用户 -- (查看所有代办事项)
}

rectangle 授权系统 {
用户 -- (登录)
}

rectangle 用户系统 {
用户 -- (注册)
(获取用户信息)
}

(查看所有代办事项) .> (获取用户信息): 包括
(登录) .> (获取用户信息): 包括

@enduml

### 类图

@startuml

class User {
-id
-username
-realName
-dateOfBirth
-password
}

class Todo {
-id
-title
-completed
}

Todo "0..*" --* "1" User

@enduml

### 部署图

@startuml
left to right direction

cloud client
cloud gatewayZuul
cloud serviceRegistryEureka
cloud loadBalancer
cloud authService
cloud configService

node dataService {
  cloud toDoService
  cloud userService
}

client -0)- gatewayZuul
serviceRegistryEureka -0)- gatewayZuul
loadBalancer -(0- gatewayZuul
authService .(0. gatewayZuul
toDoService -(0)- userService
toDoService -(0- loadBalancer
userService -(0- loadBalancer
configService -0)- dataService

@enduml
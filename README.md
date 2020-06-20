# DenoRentApp
This sample application covers basic use of Deno in real life applications.

Use cases covered-

- Dependency Injection
- Object oriented programming
- REST API, Controllers
- MongoDB Connection

```
Mongo queries-
> use rentapp
switched to db rentapp
> db.createCollection('tenant')
{ "ok" : 1 }
> db.tenant.insert({name:'Shantanu',rent:10000})
WriteResult({ "nInserted" : 1 })
```

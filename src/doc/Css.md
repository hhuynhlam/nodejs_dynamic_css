# Summary
User CRUD API

## Base URL
```
/api/user
```

## Resource Representation
```
{
  data: [{
    id: <string>
    type: 'users'
    attributes: {
      firstName: <string>(required)
      lastName: <string>(required)
      email: <string>(required)
      password: <string>(required)
    }
  }]
}

```
## Get List of Users
```
GET /
```

## Get Specific User
```
GET /:id
```

## Update a User
```
PUT /:id
```

## Delete a User
```
DELETE /

{
  id: <string>(required)
}
```

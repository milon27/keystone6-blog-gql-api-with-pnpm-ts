# keystone6 blog GraphQL API with pnpm ts

- Models
    - user
    - blog

## Run project in production and developement
```bash
bash run.sh
```

### write some example query for frontend

- get all post

```
query blog{
  blogs{
    id
    title
    slug
    categories{
      id
      title
    }
    author{
      id
      name
    }
    body{
      document
    }
  }
}
```

- get all users

```
query users{
  users{
    id
    name
    email
    isAdmin
  }
}
```

- get all post for a single category / a author
```
query blogFilter{
  blogs(
  where:{
    categories:{
      every:{
        id:{
          equals:"cl8plbzi20000j70w1eu4pfb1"
        }
      }
    }
  }
  ){
    id
    title
    slug
    categories{
      id
      title
    }
    author{
      id
      name
    }
  }
}

```
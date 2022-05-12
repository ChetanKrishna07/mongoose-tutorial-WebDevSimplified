# Mangoose Tutorial (Web Dev Simplified)

### Basic Set Up

npm init -y
npm install mongoose
npm i --save-dev nodemon

### mongoose Schema

stucture of a collection

```
new mongoose.Schema({
    fieldName: fieldType,
    .
    .
    .
    fieldName: {
        subFieldName: subFieldType
        .
        .
        .
    },
    fieldName: otherSchema
})
```

### mongoose model

Creates actual collection

```
mongoose.model('ModelName', schemaName)
```

### adding a new documents

```
const document1 = new ModelName({
    field1: value,
    field2: value
})
document1.save() // save returns a promise

const document1 = ModelName.create({
    field1: value,
    field2: value
}) // create() returns a promise
```

### Schema Validation

```
new mongoose.Schema({
    fieldName : {
        type: Type,
        min: minValue,
        max: maxValue,
        minLenght: minLength,
        .
        .
        .
        validate: {
            validator : (value) => {
                // validation process
            },
            message: messageWhenError
        }
    }
})
```

### Finding Documents

```
const document = await modelName.findOne({
        field:value,
        field:value,
        .
        .
        .
        .
    })
// Returns 1st matched user

const documents = await modelName.findMany({
        field:value,
        field:value,
        .
        .
        .
        .
    })
// Returns array of all users

```

### Deleting Documents

```
await modelName.deleteOne({
        field:value,
        field:value,
        .
        .
        .
        .
    })
// Deletes 1st matched user

await modelName.deleteMany({
        field:value,
        field:value,
        .
        .
        .
        .
    })
// Returns all users with match

```

### Updating Documents

```
const document = await modelName.FindByID(_id)
documnet.field = newValue
await document.save()

```

- Can even use modelName.update()
- But that skips validation
- As validation happends only when we save a document
- So, getting the document, modifying it and saving it ensures validation even during update

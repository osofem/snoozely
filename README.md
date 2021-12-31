## Snoozly

A `sleep` function for nodejs!

### Usage

For asynchronous function

```javascript
console.log("Dozing off, Zzzzz");
await require("snoozely").snoozely(10000); //sleep for 10sec
console.log("Awake now!");
```

For synchronous function

```javascript
console.log("Dozing off, Zzzzz");
//sleep for 10sec
require("snoozely").snoozelySync(10000, ()=>{
    console.log("Awake now!");
});
```
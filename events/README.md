# Events

## What is event?

- Welcome/Farewell
- LOCUS

_Certain Time_
_Certain Condition_

## What are events in React JS?

Kei kura garyo react bhitra ani tyo kura chai herirako xa vane teslai event vanxa

Saabai Event le function linxa

function (event) {

}

- _On Click_ (onClick)
- _On Change_ (onChange)
- _On Submit_ (onSubmit)
- _On Mouse Hover_ (onMouseHover)
- _On Key Press_ (onKeyPress)

## How to submit form?

### Promise (Maa kasam)

JS le Kasam khayo kei kei data aauxa

#### Async await

```
    async function a() {
        await new Promise();
    }
```

````
/**
         * Kta le kt lai propose garirako xa
         *
         * Kta le propose garxa
         *
         * Kt le sochxa
         *
         * 1) Yes (resolve)
         * 2) No (reject)
         */
        console.log("Kta le propose garyo");
        try {
          await new Promise(function (resolve, reject) {
            console.log("KT le sochirako xa");
            setTimeout(() => {
              console.log("KT le response diyo");
              reject();
            }, 1000);
          });
          console.log("Happy");
        } catch {
          console.log("Sad");
        }
        ```

## Dinosaur game

# Conditional Rendering
````

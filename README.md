# Repro Click Outside

Click outside not working when the components are used inside a custom element (Web Components).

```
bun i
bun dev
```

The dialog is imported into the code in 2 ways,

- Within a custom element (click outside not working)
- As a component (working fine)

When loaded as a custom element, there's a warning in the console,

```
[@zag-js/dismissable] node is `null` or `undefined`
```

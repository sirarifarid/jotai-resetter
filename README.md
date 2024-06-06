## Jotai Resetter

This package will make it easy for you to reset jotai to it's default values.

#### Initialize

First import the `<ResetProvider/>` from `jotai-resetter`, and replace `<Provider/>` from `jotai` with `<ResetProvider/>`

```javascript
// Replace
import { Provider } from "jotai";

<Provider>{/* App */}</Provider>;

// With
import { ResetProvider } from "jotai-resetter";

<ResetProvider>{/* App */}</ResetProvider>;
```

#### How to reset

To reset use the `useResetJotai` hooks it will return the reset function

```javascript
const reset = useResetJotai();

// use reset function to reset jotai
reset();
```

That's it now your jotai atoms will be in default state

### Fade

```jsx noeditor
const FadeExample = require("./Fade.examples.tsx").FadeExample;
<FadeExample />;
```

```js static
import * as React from "react";
import Button from "../button/Button";
import Fade from "./fade";
```

```html
     <Button tag="button" color="primary" onClick={this.toggle}>
          Toggle Fade
        </Button>
        <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
          This content will fade in and out as the button is pressed
        </Fade>
```

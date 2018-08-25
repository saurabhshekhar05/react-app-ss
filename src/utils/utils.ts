export function mapToCssModules(
  className: string = "",
  cssModule: any
): string {
  if (!cssModule) {
    return className;
  }
  return className
    .split(" ")
    .map(c => cssModule[c] || c)
    .join(" ");
}

export function omit(obj: any, omitKeys: any[]): object {
  const result: any = {};
  Object.keys(obj).forEach(key => {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}

export function pick(obj: any, keys: any): object {
  const pickKeys = Array.isArray(keys) ? keys : [keys];
  let length = pickKeys.length;
  let key;
  const result: any = {};

  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }
  return result;
}

export const keyCodes = {
  esc: 27,
  space: 32,
  tab: 9,
  up: 38,
  down: 40
};

let warned = {} as any;

export function warnOnce(message: string) {
  if (!warned[message]) {
    /* istanbul ignore else */
    if (typeof console !== "undefined") {
      console.error(message); // eslint-disable-line no-console
    }
    warned[message] = true;
  }
}

export function deprecated(propType: any, explanation: string): Function {
  return function validate(
    props: any,
    propName: any,
    componentName: any,
    ...rest: any[]
  ) {
    if (props[propName] !== null && typeof props[propName] !== "undefined") {
      warnOnce(
        `"${propName}" property of "${componentName}" has been deprecated.\n${explanation}`
      );
    }

    return propType(props, propName, componentName, ...rest);
  };
}

export const TransitionTimeouts = {
  Fade: 150, // $transition-fade
  Collapse: 350, // $transition-collapse
  Modal: 300, // $modal-transition
  Carousel: 600 // $carousel-transition
};

export const TransitionPropTypeKeys = [
  "in",
  "mountOnEnter",
  "unmountOnExit",
  "appear",
  "enter",
  "exit",
  "timeout",
  "onEnter",
  "onEntering",
  "onEntered",
  "onExit",
  "onExiting",
  "onExited"
];

export const TransitionStatuses = {
  ENTERING: "entering",
  ENTERED: "entered",
  EXITING: "exiting",
  EXITED: "exited"
};

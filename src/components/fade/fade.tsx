import * as React from "react";
import Transition, {
  ENTERED,
  ENTERING
} from "react-transition-group/Transition";

import {
  mapToCssModules,
  pick,
  omit,
  TransitionPropTypeKeys,
  TransitionTimeouts
} from "../../utils/utils";

import { IFadePropsNew } from "./Fade.props";

export interface IFadeState {
  fadeIn: boolean;
}

export default class Fade extends React.Component<IFadePropsNew, IFadeState> {
  props: IFadePropsNew;

  public static defaultProps: Partial<IFadePropsNew> = {
    Transition: Transition.prototype.props,
    tag: "div",
    baseClass: "fade",
    baseClassActive: "show",
    timeout: TransitionTimeouts.Fade,
    appear: true,
    enter: true,
    exit: true,
    in: true,
    mountOnEnter: false,
    unmountOnExit: false
  };

  constructor(props: IFadePropsNew) {
    super(props);
    this.props = props;
  }

  public render() {
    let {
      tag: Tag,
      baseClass,
      baseClassActive,
      className,
      cssModule,
      children,
      innerRef,
      timeout,
      Transition,
      ...otherProps
    } = this.props;

    const transitionProps = pick(this.props, TransitionPropTypeKeys);
    const childProps = omit(this.props, TransitionPropTypeKeys);

    console.log("otherProps  ", otherProps);

    console.log("Props  ", this.props);

    console.log("transitionProps ", transitionProps);

    console.log("childProps ", childProps);

    return (
      <Transition {...transitionProps}>
        {(status: any) => {
          console.log("status", status);
          const isActive = status === "entered";

          return (
            <Tag {...childProps} ref={innerRef}>
              {children}
            </Tag>
          );
        }}
      </Transition>
    );
  }
}

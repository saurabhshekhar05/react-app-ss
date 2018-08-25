import Transition, {
  TransitionChildren
} from "react-transition-group/Transition";
/**
 * Fade properties.
 */

export interface IFadePropsNew extends IFadeDefaultProps {
  Transition?: any;

  /**
   * Show the component; triggers the fade in or fade out animation
   */
  in?: boolean;

  /**
   * Wait until the first "enter" transition to mount the component (add it to the DOM)
   */
  mountOnEnter?: boolean;

  /**
   * Unmount the component (remove it from the DOM) when it is faded out
   */
  unmountOnExit?: boolean;

  /**
   * Run the fade in animation when the component mounts, if it is initially
   * shown
   */
  appear?: boolean;

  /**
   * Duration of the fade animation in milliseconds, to ensure that finishing
   * callbacks are fired even if the original browser transition end events are
   * canceled
   */
  timeout?: number;

  /**
   * Callback fired before the component fades in
   */
  //onEnter?: Function;

  /**
   * Callback fired after the component starts to fade in
   */
  // onEntering?: Function;

  /**
   * Callback fired after the has component faded in
   */
  // onEntered?: Function;

  /**
   * Callback fired before the component fades out
   */
  // onExit?: Function;

  /**
   * Callback fired after the component starts to fade out
   */
  //onExiting?: Function;

  /**
   * Callback fired after the component has faded out
   */
  //onExited?: Function;
  enter?: boolean;
  exit?: boolean;
  children?: any;

  /** tag Property to set if you want the HTML tag to be something else */
  tag?: any;

  /** baseClass Property to set any CSS baseClass on the Fade */
  baseClass?: string;

  /** baseClassActive Property to set any CSS baseClassActive on the Fade */
  baseClassActive?: string;

  /** className Property to set any CSS classnames on the Fade */
  className?: string;

  /** cssModule Property to set any CSS classModule on the Fade */
  cssModule?: object;

  /** innerRef Ant inner refs for Fade */
  innerRef?: any;
}

export interface IFadeProps extends IFadeDefaultProps {
  //Transition?: any;

  /** childeren for React element */
  children?: any;

  /** tag Property to set if you want the HTML tag to be something else */
  tag?: any;

  /** baseClass Property to set any CSS baseClass on the Fade */
  baseClass?: string;

  /** baseClassActive Property to set any CSS baseClassActive on the Fade */
  baseClassActive?: string;

  /** className Property to set any CSS classnames on the Fade */
  className?: string;

  /** cssModule Property to set any CSS classModule on the Fade */
  cssModule?: object;

  /** innerRef Ant inner refs for Fade */
  innerRef?: any;

  timeout?: number;

  appear?: boolean;

  enter?: boolean;

  exit?: boolean;

  in?: boolean;
  //timeout: TransitionTimeouts.Fade;
}

export interface IFadeDefaultProps {}

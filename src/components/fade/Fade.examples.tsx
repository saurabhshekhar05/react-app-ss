import * as React from "react";
import Fade, { IFadeState } from "./fade";

import { IFadePropsNew } from "./Fade.props";

export class FadeExample extends React.Component<IFadePropsNew, IFadeState> {
  props: IFadePropsNew;
  state: IFadeState;

  constructor(props: IFadePropsNew) {
    super(props);
    this.props = props;
    this.state = {
      fadeIn: true
    };
    this.state = { fadeIn: true };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ fadeIn: !this.state.fadeIn });
  }

  public render() {
    return (
      <div>
        <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
          This content will fade in and out as the button is pressed
        </Fade>
      </div>
    );
  }
}

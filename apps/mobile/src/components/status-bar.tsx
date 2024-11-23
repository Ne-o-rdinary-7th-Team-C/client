import { StatusBar } from "expo-status-bar";
import { Observable } from "@xionwcfm/utils";
import { useEffect, useState } from "react";

type StatusBarStyle = "auto" | "inverted" | "light" | "dark";

type StatusBarAnimation = "none" | "fade" | "slide";

type StatusBarProps = {
  style?: StatusBarStyle;
  animated?: boolean;
  hidden?: boolean;
  hideTransitionAnimation?: StatusBarAnimation;
  networkActivityIndicatorVisible?: boolean;
  backgroundColor?: string;
  translucent?: boolean;
};

class StatusBarObservable extends Observable<StatusBarProps> {
  state: StatusBarProps;
  constructor(initialState: StatusBarProps) {
    super();
    this.state = initialState;
  }
}

const defaultState: StatusBarProps = { backgroundColor: "#fdfdfd" };

const statusBarObservable = new StatusBarObservable(defaultState);

export const InternalStatusBar = () => {
  const [state, setState] = useState(() => statusBarObservable.state);
  useEffect(() => {
    const handler = (props: StatusBarProps) => {
      return setState((prev) => ({ ...prev, ...props }));
    };
    statusBarObservable.subscribe(handler);
    return () => statusBarObservable.unsubscribe(handler);
  }, []);

  return <StatusBar {...state} />;
};

export const notifyStatusBar = async (state: StatusBarProps) => {
  statusBarObservable.notify(state);
};

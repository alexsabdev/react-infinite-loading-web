import * as React from 'react';

const DISTANCE = 20;

const spinner = <div>Loading...</div>;

enum STATUSES {
  READY,
  LOADING,
  DONE,
};

enum EVENTS {
  SCROLL = 'scroll',
}

type Load = (props: StatusManager) => void;

type Props = {
  load: Load;
  spinner?: JSX.Element,
  useWindow?: boolean;
  distance?: number;
}

type State = {
  status: STATUSES,
}

export type StatusManager = {
  loaded: () => void;
  done: () => void;
}

type Node = HTMLDivElement | null;

type Parent = (globalThis.Node & ParentNode) | (Window & typeof globalThis) | null;

export default class InfiniteLoading extends React.Component<Props, State> {
  private node: Node;

  private parent: Parent;

  private load: Load;

  private spinner: JSX.Element;

  private useWindow: boolean;

  private distance: number;

  constructor(props: Props) {
    super(props);
    this.node = null;
    this.parent = null;
    this.load = this.props.load;
    this.spinner = this.props.spinner || spinner;
    this.distance = this.props.distance || DISTANCE;
    this.useWindow = this.props.useWindow || false;
    this.state = {
      status: STATUSES.READY,
    };
    this.attemptLoad = this.attemptLoad.bind(this);
  }

  componentDidMount() {
    this.parent = this.getParent();
    this.addEvents();
    this.attemptLoad();
  }

  componentWillUnmount() {
    this.removeEvents();
  }

  private getParent(): Parent {
    let parent: Parent = this.node ? this.node.parentNode : null;
    if (this.useWindow) parent = window;
    return parent;
  }

  private getDistance(): number {
    if (!this.node || !this.parent) return Infinity;
    const nodeTop: number = this.node.getBoundingClientRect().top;
    const parentBottom: number = this.parent === window
      ? this.parent.innerHeight
      : (this.parent as any).getBoundingClientRect().bottom; // TODO
    return nodeTop - parentBottom;
  }

  private setStatus(status: STATUSES) {
    this.setState({ status });
  }

  private attemptLoad() {
    if (this.state.status !== STATUSES.READY) return;
    if (this.getDistance() > this.distance) return;
    this.setStatus(STATUSES.LOADING);
    this.load(this.statusManager);
  }

  private addEvents() {
    if (!this.parent) return;
    this.parent.addEventListener(EVENTS.SCROLL, this.attemptLoad);
  }

  private removeEvents() {
    if (!this.parent) return;
    this.parent.removeEventListener(EVENTS.SCROLL, this.attemptLoad);
  }

  private statusManager: StatusManager = {
    loaded: () => this.setStatus(STATUSES.READY),
    done: () => {
      this.setStatus(STATUSES.DONE);
      this.removeEvents();
    },
  }

  render() {
    return (
      <div ref={(node: Node) => { this.node = node; }}>
        {this.state.status === STATUSES.LOADING && this.spinner}
      </div>
    );
  }
}

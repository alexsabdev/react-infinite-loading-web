import * as React from 'react';
declare enum STATUSES {
    READY = 0,
    LOADING = 1,
    DONE = 2
}
declare type Props = {
    load: (props: StatusManager) => void;
    useWindow: boolean;
    distance?: number;
};
declare type State = {
    status: STATUSES;
};
declare type StatusManager = {
    loaded: () => void;
    done: () => void;
};
export default class InfiniteLoading extends React.Component<Props, State> {
    private node;
    private parent;
    private distance;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private getParent;
    private getDistance;
    private setStatus;
    private attemptLoad;
    private addEvents;
    private removeEvents;
    private statusManager;
    render(): JSX.Element;
}
export {};

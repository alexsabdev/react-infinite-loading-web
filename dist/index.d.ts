import * as React from 'react';
declare enum STATUSES {
    READY = 0,
    LOADING = 1,
    DONE = 2
}
declare type Load = (props: StatusManager) => void;
declare type Props = {
    load: Load;
    spinner?: JSX.Element;
    useWindow?: boolean;
    distance?: number;
};
declare type State = {
    status: STATUSES;
};
export declare type StatusManager = {
    loaded: () => void;
    done: () => void;
};
export default class InfiniteLoading extends React.Component<Props, State> {
    private node;
    private parent;
    private load;
    private spinner;
    private useWindow;
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

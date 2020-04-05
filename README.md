# react-infinite-loading-web
A light-weight infinite loading component for React-powered websites

## Installation

```
npm install react-infinite-loading-web
```

## Basic Usage

Typically, you have a list of some items (say, product cards) inside of some scrollable wrapper component (say, a fixed-height div with `overflow-y: auto` style):

```
...

<SomeWrapper>
  {someItems.map((item) => <SomeItem item />)}
</SomeWrapper>
...
```

You want to dinamically load more items once a user reaches the end of the items list. For that, just import the component and place it right below the list:

```
...
import InfiniteLoading from 'react-infinite-loading-web';
...

<SomeWrapper>
  {someItems.map((item) => <SomeItem item />)}
  <InfiniteLoading load={loadHandler}/>
</SomeWrapper>
...
```

where `loadHandler` is your function called when you reach the end of the wrapper. This function should change the state of the component by calling the `loaded` method once the loading if finished, or the `done` method once the loading isn't needed anymore:

```
const loadHandler = (state) => {
  const items = ... // get new items
  ... // add the new items to the items list

  if (items.length) {
    state.loaded(); // change state to `loaded`
    return;
  }

  state.done(); // stop the loading
}
```

That's it! Enjoy!

## Optional Usage

### Use a custom spinner

Optionally, you can provide your own spinner:

```
...
import InfiniteLoading from 'react-infinite-loading-web';
...

<SomeWrapper>
  {someItems.map((item) => <SomeItem item />)}
  <InfiniteLoading
    load={loadHandler}
    spinner={<div className="some-spinner" />}
  />
</SomeWrapper>
...
```

### Use `window` as a wrapper

Optionally, you can use `window` as a wrapper:

```
...
import InfiniteLoading from 'react-infinite-loading-web';
...

<SomeWrapper>
  {someItems.map((item) => <SomeItem item />)}
  <InfiniteLoading
    load={loadHandler}
    useWindow
  />
</SomeWrapper>
...
```

### Increase the load distance

Optionally, you can force the component to attempt to load sooner by increasing the minimum distance between the component and the bottom of the wrapper (default is `20 px`):

```
...
import InfiniteLoading from 'react-infinite-loading-web';
...

<SomeWrapper>
  {someItems.map((item) => <SomeItem item />)}
  <InfiniteLoading
    load={loadHandler}
    distance={100}
  />
</SomeWrapper>
...
```

## License

[MIT](https://opensource.org/licenses/MIT)

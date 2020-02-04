import styled from 'styled-components';
import React, { useRef, useCallback, useReducer } from 'react';

const COLLAPSED = 'collapsed';
const COLLAPSING = 'collapsing';
const EXPANDING = 'expanding';
const EXPANDED = 'expanded';
const defaultCollapseHeight = '0px';

const Wrapper = styled.div`
  transition: height 280ms cubic-bezier(0.4, 0, 0.2, 1);
`;

function nextFrame(callback) {
  requestAnimationFrame(() => {
    requestAnimationFrame(callback);
  });
}

function CollapseBody({
  children,
  style,
  isOpen,
  collapseHeight = defaultCollapseHeight,
  noAnim,
  ...rest
}) {
  const getCollapsedVisibility = () =>
    collapseHeight === '0px' ? 'hidden' : '';

  // eslint-disable-next-line no-unused-vars
  const [__, forceUpdate] = useReducer(_ => _ + 1, 0);

  const elementRef = useRef();

  const state = useRef({
    collapse: isOpen ? EXPANDED : COLLAPSED,
    style: {
      height: isOpen ? '' : collapseHeight,
      visibility: isOpen ? '' : getCollapsedVisibility(),
    },
  }).current;

  const getElementHeight = () => {
    return `${elementRef.current.scrollHeight}px`;
  };

  const setCollapsed = () => {
    if (!elementRef.current) return;

    state.collapse = COLLAPSED;

    state.style = {
      height: collapseHeight,
      visibility: getCollapsedVisibility(),
    };
    forceUpdate();
  };

  const setCollapsing = () => {
    if (!elementRef.current) return;

    if (noAnim) {
      return setCollapsed();
    }

    state.collapse = COLLAPSING;

    state.style = {
      height: getElementHeight(),
      visibility: '',
    };
    forceUpdate();

    nextFrame(() => {
      if (!elementRef.current) return;
      if (state.collapse !== COLLAPSING) return;
      state.style = {
        height: collapseHeight,
        visibility: '',
      };
      forceUpdate();
    });
  };

  const setExpanded = () => {
    if (!elementRef.current) return;

    state.collapse = EXPANDED;

    state.style = {
      height: '',
      visibility: '',
    };
    forceUpdate();
  };

  const setExpanding = () => {
    if (!elementRef.current) return;

    if (noAnim) {
      return setExpanded();
    }

    state.collapse = EXPANDING;

    nextFrame(() => {
      if (!elementRef.current) return;
      if (state.collapse !== EXPANDING) return;
      state.style = {
        height: getElementHeight(),
        visibility: '',
      };
      forceUpdate();
    });
  };

  function onTransitionEnd({ target, propertyName }) {
    if (target === elementRef.current && propertyName === 'height') {
      const styleHeight = target.style.height;

      switch (state.collapse) {
        case EXPANDING:
          if (!(styleHeight === '' || styleHeight === collapseHeight))
            setExpanded();
          break;
        case COLLAPSING:
          if (!(styleHeight === '' || styleHeight !== collapseHeight))
            setCollapsed();
          break;
        default:
          break;
      }
    }
  }

  const didOpen = state.collapse === EXPANDED || state.collapse === EXPANDING;

  if (!didOpen && isOpen) setExpanding();

  if (didOpen && !isOpen) setCollapsing();

  const computedStyle = {
    overflow: 'hidden',
    ...style,
    ...state.style,
  };

  const callbackRef = useCallback(
    node => {
      if (node) {
        elementRef.current = node;
      }
    },
    ['div']
  );

  return (
    <Wrapper
      ref={callbackRef}
      style={computedStyle}
      onTransitionEnd={onTransitionEnd}
      {...rest}
    >
      {children}
    </Wrapper>
  );
}

export default CollapseBody;

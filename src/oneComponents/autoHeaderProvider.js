export default function AutoHeaderProvider(_ref) {
  var depth = _ref.depth,
    children = _ref.children;

  if (depth) {
    return React.createElement(
      AutoHeaderContext.Provider,
      {
        value: {
          depth: depth,
        },
      },
      children
    );
  } else {
    return React.createElement(AutoHeaderContext.Consumer, null, function(
      _ref2
    ) {
      var outerDepth = _ref2.depth;
      return React.createElement(
        AutoHeaderContext.Provider,
        {
          value: {
            depth: getNextDepth(outerDepth),
          },
        },
        children
      );
    });
  }
}

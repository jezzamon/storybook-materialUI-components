import initStoryshots from '@storybook/addon-storyshots';
initStoryshots();
describe('groupByDay', () => {
  it('should aggregate events by day', () => {
    const events = [
      { createdAt: '2019-01-05T12:56:31.039Z', label: 'foo1' },
      { createdAt: '2019-01-05T09:12:43.456Z', label: 'foo2' },
      { createdAt: '2019-01-04T12:34:56.789Z', label: 'foo3' },
    ];
    expect(events).toEqual([
      { createdAt: '2019-01-05T12:56:31.039Z', label: 'foo1' },
      { createdAt: '2019-01-05T09:12:43.456Z', label: 'foo2' },
      { createdAt: '2019-01-04T12:34:56.789Z', label: 'foo3' },
    ]);
  });
});

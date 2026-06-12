export default {
  name: 'marketData',
  title: 'Market Data Feed',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title Label',
      type: 'string',
      initialValue: 'Global Metal Prices Cache',
      readOnly: true,
    },
    {
      name: 'lastUpdated',
      title: 'Last Sync Timestamp',
      type: 'datetime',
    },
    {
      name: 'prices',
      title: 'Metal Prices List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'symbol', title: 'Asset Symbol', type: 'string'},
            {name: 'price', title: 'Formatted Price (USD)', type: 'string'},
            {name: 'change', title: '24h Change Percentage', type: 'string'},
          ],
        },
      ],
    },
  ],
}

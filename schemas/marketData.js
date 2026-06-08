export default {
  name: 'marketData',
  title: 'Global Market Data Cache',
  type: 'document',
  fields: [
    {
      name: 'lastUpdated',
      title: 'Last Sync Timestamp',
      type: 'datetime',
    },
    {
      name: 'rates',
      title: 'Metal Rates (USD per Ounce)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'symbol', type: 'string', title: 'Metal Symbol (e.g., XAU)'},
            {name: 'name', type: 'string', title: 'Display Name (e.g., Gold)'},
            {name: 'price', type: 'string', title: 'Current Spot Price'},
            {name: 'change', type: 'string', title: 'Daily Percent Change'},
          ],
        },
      ],
    },
  ],
}

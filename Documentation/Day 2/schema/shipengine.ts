// export default {
//     name: 'shipEngine',
//     title: 'ShipEngine Integration',
//     type: 'document',
//     fields: [
//       {
//         name: 'order',
//         title: 'Order',
//         type: 'reference',
//         to: [{ type: 'order' }],
//         validation: (Rule) => Rule.required(),
//       },
//       {
//         name: 'shipmentId',
//         title: 'Shipment ID',
//         type: 'string',
//         description: 'Unique ID for the shipment generated by ShipEngine.',
//         validation: (Rule) => Rule.required(),
//       },
//       {
//         name: 'trackingNumber',
//         title: 'Tracking Number',
//         type: 'string',
//         description: 'Tracking number for the shipment.',
//         validation: (Rule) => Rule.required(),
//       },
//       {
//         name: 'carrier',
//         title: 'Carrier',
//         type: 'string',
//         description: 'Shipping carrier used (e.g., FedEx, UPS, USPS).',
//         validation: (Rule) => Rule.required(),
//       },
//       {
//         name: 'status',
//         title: 'Shipment Status',
//         type: 'string',
//         options: {
//           list: [
//             { title: 'Label Created', value: 'labelCreated' },
//             { title: 'In Transit', value: 'inTransit' },
//             { title: 'Delivered', value: 'delivered' },
//             { title: 'Exception', value: 'exception' },
//           ],
//         },
//         validation: (Rule) => Rule.required(),
//       },
//       {
//         name: 'rate',
//         title: 'Shipping Rate',
//         type: 'number',
//         description: 'Cost of shipping for the order.',
//         validation: (Rule) =>
//           Rule.min(0).error('Shipping rate must be a positive value.'),
//       },
//       {
//         name: 'estimatedDeliveryDate',
//         title: 'Estimated Delivery Date',
//         type: 'datetime',
//         description: 'Estimated delivery date provided by the carrier.',
//         options: {
//           dateFormat: 'YYYY-MM-DD',
//           timeFormat: 'HH:mm',
//           calendarTodayLabel: 'Today',
//         },
//       },
//       {
//         name: 'labelUrl',
//         title: 'Label URL',
//         type: 'url',
//         description: 'URL to download the shipping label.',
//         validation: (Rule) => Rule.uri(),
//       },
//       {
//         name: 'lastUpdated',
//         title: 'Last Updated At',
//         type: 'datetime',
//         description: 'The last time the shipment data was updated.',
//         initialValue: () => new Date().toISOString(),
//       },
//     ],
//   };
  
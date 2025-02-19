# Marketplace Technical Foundation
## SHOP.CO Shipping Control

This schema defines the structure for the ShipEngine integration document in our system.

| Field                  | Type         | Description                                                                  |
|------------------------|--------------|------------------------------------------------------------------------------|
| `order`                | Reference    | A reference to the `order` document.                                         |
| `shipmentId`           | String       | Unique ID for the shipment generated by ShipEngine.                          |
| `trackingNumber`       | String       | Tracking number for the shipment.                                            |
| `carrier`              | String       | Shipping carrier used (e.g., FedEx, UPS, USPS).                              |
| `status`               | String       | The shipment status. Options: `labelCreated`, `inTransit`, `delivered`, `exception`. |
| `rate`                 | Number       | The shipping cost for the order. Must be a positive value.                   |
| `estimatedDeliveryDate`| DateTime     | The estimated delivery date provided by the carrier.                         |
| `labelUrl`             | URL          | The URL to download the shipping label.                                      |
| `lastUpdated`          | DateTime     | The last time the shipment data was updated.                                 |

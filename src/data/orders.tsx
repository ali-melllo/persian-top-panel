
interface Order {
  order_id: string;
  customer_name: string;
  customer_phone: string;
  customer_email: string;
  surface:string;
  zipCode:string;
  request_date: string;
  product: string;
  quantity: number;
  estimated_price: number;
  progress: number;
  status: "initial-contact" | "information-sent" | "personal-meeting" | "purchase-offer" ;
  actions?: React.ReactNode | null;
}
export const orders: Order[] = [
  {
    order_id: "ORD12345",
    customer_name: "Greenfield Constructions",
    customer_phone: "+1 555-1234",
    customer_email: "contact@greenfield.com",
    surface: "500 sqm",
    zipCode: "10001",
    request_date: "2024-03-05T00:00:00.000Z",
    product: "Cement (50kg bags)",
    quantity: 200,
    estimated_price: 15000,
    progress: 70,
    status: "personal-meeting", // ✅ Updated
    actions: null,
  },
  {
    order_id: "ORD12346",
    customer_name: "Metro Build Co.",
    customer_phone: "+1 555-5678",
    customer_email: "sales@metrobuild.com",
    surface: "750 sqm",
    zipCode: "10002",
    request_date: "2024-02-28T00:00:00.000Z",
    product: "Steel Beams",
    quantity: 50,
    estimated_price: 35000,
    progress: 30,
    status: "initial-contact", // ✅ Updated
    actions: null,
  },
  {
    order_id: "ORD12347",
    customer_name: "Skyline Developers",
    customer_phone: "+1 555-8765",
    customer_email: "info@skyline.com",
    surface: "600 sqm",
    zipCode: "10003",
    request_date: "2024-02-15T00:00:00.000Z",
    product: "Bricks (1000 pcs)",
    quantity: 1000,
    estimated_price: 5000,
    progress: 100,
    status: "purchase-offer", // ✅ Updated
    actions: null,
  },
  {
    order_id: "ORD12348",
    customer_name: "Urban Construct",
    customer_phone: "+1 555-2345",
    customer_email: "support@urbanconstruct.com",
    surface: "450 sqm",
    zipCode: "10004",
    request_date: "2024-03-10T00:00:00.000Z",
    product: "Concrete Mix",
    quantity: 500,
    estimated_price: 25000,
    progress: 0,
    status: "information-sent", // ✅ Updated
    actions: null,
  },
  {
    order_id: "ORD12349",
    customer_name: "Elite Builders",
    customer_phone: "+1 555-6789",
    customer_email: "contact@elitebuilders.com",
    surface: "900 sqm",
    zipCode: "10005",
    request_date: "2024-03-15T00:00:00.000Z",
    product: "Glass Panels",
    quantity: 30,
    estimated_price: 45000,
    progress: 20,
    status: "personal-meeting", // ✅ Updated
    actions: null,
  },
  {
    order_id: "ORD12350",
    customer_name: "Modern Homes Ltd.",
    customer_phone: "+1 555-3456",
    customer_email: "info@modernhomes.com",
    surface: "700 sqm",
    zipCode: "10006",
    request_date: "2024-03-20T00:00:00.000Z",
    product: "Wooden Planks",
    quantity: 200,
    estimated_price: 12000,
    progress: 40,
    status: "information-sent", // ✅ Updated
    actions: null,
  },
  {
    order_id: "ORD12351",
    customer_name: "Sky Towers",
    customer_phone: "+1 555-7890",
    customer_email: "sales@skytowers.com",
    surface: "800 sqm",
    zipCode: "10007",
    request_date: "2024-03-25T00:00:00.000Z",
    product: "Aluminum Frames",
    quantity: 80,
    estimated_price: 28000,
    progress: 20,
    status: "initial-contact", // ✅ Updated
    actions: null,
  },
  {
    order_id: "ORD12352",
    customer_name: "Future Builders",
    customer_phone: "+1 555-4321",
    customer_email: "contact@futurebuilders.com",
    surface: "650 sqm",
    zipCode: "10008",
    request_date: "2024-02-29T00:00:00.000Z",
    product: "Ceramic Tiles",
    quantity: 500,
    estimated_price: 22000,
    progress: 60,
    status: "purchase-offer", // ✅ Updated
    actions: null,
  },
];

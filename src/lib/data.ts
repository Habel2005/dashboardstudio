export const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4500 },
  { month: "May", revenue: 6000 },
  { month: "Jun", revenue: 5500 },
  { month: "Jul", revenue: 7000 },
  { month: "Aug", revenue: 6500 },
  { month: "Sep", revenue: 7500 },
  { month: "Oct", revenue: 8000 },
  { month: "Nov", revenue: 9000 },
  { month: "Dec", revenue: 10000 },
];

export const recentSales = [
  { id: "1", name: "Olivia Martin", email: "olivia.martin@email.com", amount: 1999.00, avatar: "https://picsum.photos/seed/1/40/40", imageHint: "woman portrait" },
  { id: "2", name: "Jackson Lee", email: "jackson.lee@email.com", amount: 39.00, avatar: "https://picsum.photos/seed/2/40/40", imageHint: "man portrait" },
  { id: "3", name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: 299.00, avatar: "https://picsum.photos/seed/3/40/40", imageHint: "person smiling" },
  { id: "4", name: "William Kim", email: "will@email.com", amount: 99.00, avatar: "https://picsum.photos/seed/4/40/40", imageHint: "business woman" },
  { id: "5", name: "Sofia Davis", email: "sofia.davis@email.com", amount: 39.00, avatar: "https://picsum.photos/seed/5/40/40", imageHint: "man beard" },
];

export const appointments = [
    { id: "1", time: "10:00 AM", title: "Meeting with John D.", description: "Discuss project milestones." },
    { id: "2", time: "1:00 PM", title: "Lunch with Sarah L.", description: "Client lunch." },
    { id: "3", time: "3:30 PM", title: "Team Sync", description: "Weekly team sync-up." },
]

export const customers = [
    {
      id: "CUST-001",
      name: "Liam Johnson",
      email: "liam@example.com",
      company: "Innovate Inc.",
      ltv: "3150.75",
      status: "Active",
      interaction_history: "Positive feedback on last project. Mentioned interest in new services.",
      engagement_score: 85,
    },
    {
      id: "CUST-002",
      name: "Olivia Smith",
      email: "olivia@example.com",
      company: "Solutions Co.",
      ltv: "1230.50",
      status: "Active",
      interaction_history: "Recent support ticket resolved successfully. Expressed satisfaction.",
      engagement_score: 72,
    },
    {
      id: "CUST-003",
      name: "Noah Williams",
      email: "noah@example.com",
      company: "Synergy Corp.",
      ltv: "5400.00",
      status: "Lead",
      interaction_history: "Expressed strong interest during the demo. High budget.",
      engagement_score: 95,
    },
    {
      id: "CUST-004",
      name: "Emma Brown",
      email: "emma@example.com",
      company: "Apex Enterprises",
      ltv: "450.00",
      status: "Churned",
      interaction_history: "Complaint about pricing. Did not renew contract.",
      engagement_score: 23,
    },
    {
      id: "CUST-005",
      name: "James Jones",
      email: "james@example.com",
      company: "Quantum Dynamics",
      ltv: "2100.25",
      status: "Active",
      interaction_history: "Regular user, low interaction with support. Seems content.",
      engagement_score: 68,
    },
];

export type Customer = (typeof customers)[0];


export const invoices = [
    {
        invoiceNumber: "INV-001",
        customer: "Liam Johnson",
        date: "2024-05-01",
        dueDate: "2024-06-01",
        amount: "150.00",
        status: "Paid",
    },
    {
        invoiceNumber: "INV-002",
        customer: "Noah Williams",
        date: "2024-05-15",
        dueDate: "2024-06-15",
        amount: "350.50",
        status: "Sent",
    },
    {
        invoiceNumber: "INV-003",
        customer: "Olivia Smith",
        date: "2024-05-23",
        dueDate: "2024-06-23",
        amount: "450.00",
        status: "Sent",
    },
    {
        invoiceNumber: "INV-004",
        customer: "James Jones",
        date: "2024-04-10",
        dueDate: "2024-05-10",
        amount: "200.00",
        status: "Overdue",
    },
    {
        invoiceNumber: "INV-005",
        customer: "Liam Johnson",
        date: "2024-05-30",
        dueDate: "2024-06-30",
        amount: "275.00",
        status: "Draft",
    },
]
export type Invoice = (typeof invoices)[0];

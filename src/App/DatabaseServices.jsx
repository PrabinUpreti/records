export const Customers = [
  {
    userId: 1,
    name: "Pratima Kumari Upreti",
    address: "Nepal",
    date: "2077-09-20",
    phone: 9845315787037,
    description: "Hin rate 5 a 8 2020",
    transactionId: 1
  },
  {
    userId: 2,
    name: "Prabin Raj Upreti",
    address: "Hetapal",
    date: "2077-09-20",
    phone: 984531235037,
    description: "He h0",
    transactionId: 2

  },
  {
    userId: 3,
    name: "Radhika Upreti",
    address: "Hetauda-8, Nepal",
    date: "2077-09-20",
    phone: 9845315037,
    description: "He has taken 3 lakh money in rate 5 at jestha 8 2020",
    transactionId: 3

  },
];
export const CustomersTransaction = [
  {
    transactionId: 1,
    transactionHistory: [
      {
        decription: "I took money",
        status: "dr",
        date: "2077-09-20",
        amount: 2,
      },
      {
        decription: "I LOVE yOU",
        status: "cr",
        date: "2077-09-20",
        amount: 2,
      },
    ],
  },
  {
    transactionId: 2,

    transactionHistory: [
      {
        decription: "I took money",
        status: "dr",
        date: "2077-09-20",
        amount: 100,
      },
      {
        decription: "I took money",
        status: "cr",
        date: "2077-09-20",
        amount: 200,
      },

      {
        decription: "I took money",
        status: "dr",
        date: "2077-09-20",
        amount: 2000,
      },
    ],
  },
  {
    transactionId: 3,
    transactionHistory: [
      {
        decription: "I took money",
        status: "dr",
        date: "2077-09-20",
        amount: 1000,
      },
      {
        decription: "I took money",
        status: "dr",
        date: "2077-09-20",
        amount: 500,
      },
    ],
  },
];

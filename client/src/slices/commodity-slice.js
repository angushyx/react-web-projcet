import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  commodity: [
    {
      id: "a1",
      name: "hotpot",
      amount: 1,
      price: 149,
      Category: "CHINESE",
      Description: "THIS IS GREAT",
      image:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "a2",
      name: " Salad",
      amount: 1,
      price: 99.9,
      Category: "US FOOD",
      Description: "THIS IS GREAT",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      id: "a3",
      name: "pasta",
      amount: 1,
      price: 199,
      Category: "Italia",
      Description: "THIS IS GREAT",
      image:
        "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    },
    {
      id: "a4",
      name: "Beef Salad",
      amount: 1,
      price: 129,
      Category: "MEAT",
      Description: "this is good",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: "a5",
      name: "tomato salad",
      amount: 1,
      price: 89,
      Category: "CHINESE",
      Description: "THIS IS GREAT",
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
    },
    {
      id: "a6",
      name: " Salad",
      amount: 1,
      price: 99.9,
      Category: "US FOOD",
      Description: "THIS IS GREAT",
      image:
        "https://images.unsplash.com/photo-1529042410759-befb1204b468?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686",
    },
    {
      id: "a7",
      name: "pasta",
      amount: 1,
      price: 199,
      Category: "Italia",
      Description: "THIS IS GREAT",
      image:
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
    },
    {
      id: "a8",
      name: "Beef Salad",
      amount: 1,
      price: 129,
      Category: "MEAT",
      Description: "this is good",
      image:
        "https://images.unsplash.com/photo-1565299507177-b0ac66763828?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722",
    },
    {
      id: "a9",
      name: "pasta",
      amount: 1,
      price: 199,
      Category: "Italia",
      Description: "THIS IS GREAT",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153",
    },
    {
      id: "a10",
      name: "Beef Salad",
      amount: 1,
      price: 129,
      Category: "MEAT",
      Description: "this is good",
      image:
        "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
    },
    {
      id: "a11",
      name: "pasta",
      amount: 1,
      price: 199,
      Category: "Italia",
      Description: "THIS IS GREAT",
      image:
        "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627",
    },
    {
      id: "a12",
      name: "Beef Salad",
      amount: 1,
      price: 129,
      Category: "MEAT",
      Description: "this is good",
      image:
        "https://images.unsplash.com/photo-1559054663-e8d23213f55c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
    },
  ],
};

export const commoditySlice = createSlice({
  name: "commodityList",
  initialState,
});

export default commoditySlice.reducer;

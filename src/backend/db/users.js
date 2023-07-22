import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Isha",
    lastName: "Patel",
    email: "isha@gmail.com",
    password: "ishapatel",
    userAddresses: [
      {
        id: uuid(),
        firstName: "Isha",
        lastName: "Patel",
        addressLine1: "A8 Golden Arcade",
        addressLine2: "Suite 10",
        city: "Mumbai",
        state: "Maharashtra",
        zipCode: "400001",
        country: "India",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    firstName: "Admin",
    lastName: "",
    email: "admin@gmail.com",
    password: "admin",
    userAddresses: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];

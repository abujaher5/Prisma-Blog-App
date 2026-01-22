import { prisma } from "../lib/prisma";
import { UserRole } from "../middlewares/auth";

// const seedAdmin = async () => {
//   try {
//     const adminData = {
//       name: "Admin sir",
//       email: "admin@gmail.com",
//       role: UserRole.ADMIN,
//       password: "admin1234",
//     };
//     // check user exist on db or not
//     const existingUser = await prisma.user.findUnique({
//       where: {
//         email: adminData.email,
//       },
//     });
//     console.log("exist", existingUser);

//     if (existingUser) {
//       throw new Error("User already exists!!");
//     }

//     const signUpAdmin = await fetch(
//       "http://localhost:5000/api/auth/sign-up/email",
//       {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify(adminData),
//       },
//     );

//     console.log("signUpAdmin", signUpAdmin);
//   } catch (error) {
//     console.log(error);
//   }
// };

async function seedAdmin() {
  try {
    const adminData = {
      name: "Admin1 sir",
      email: "admin1@gmail.com",
      role: UserRole.ADMIN,
      password: "admin1234",
    };
    // check user exist on db or not
    const existingUser = await prisma.user.findUnique({
      where: {
        email: adminData.email,
      },
    });

    if (existingUser) {
      throw new Error("User already exists!!");
    }

    const signUpAdmin = await fetch(
      "http://localhost:5000/api/auth/sign-up/email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: "http://localhost:5000",
        },
        body: JSON.stringify(adminData),
      },
    );

    if (signUpAdmin.ok) {
      console.log("*** Admin created successfully. ***");
      await prisma.user.update({
        where: {
          email: adminData.email,
        },
        data: {
          emailVerified: true,
        },
      });

      console.log("*** Email Verified***");
    }

    console.log(" Success");
  } catch (error) {
    console.log(error);
  }
}

seedAdmin();

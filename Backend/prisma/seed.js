import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.flight.createMany({
    data: [
      { airline: "Indigo", source: "Delhi", destination: "Jaipur", date: new Date("2023-04-15"), price: "₹1,614" },
      { airline: "AirAsia", source: "Delhi", destination: "Jaipur", date: new Date("2023-04-15"), price: "₹1,869" },
      { airline: "Vistara", source: "Delhi", destination: "Jaipur", date: new Date("2023-04-15"), price: "₹2,133" },
    ],
  });
}

main()
  .then(() => console.log("Seeding done!"))
  .catch((error) => console.error(error))
  .finally(() => prisma.$disconnect());

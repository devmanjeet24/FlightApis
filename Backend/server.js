import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes.js";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
})


app.use("/api", router)

// app.get("/flights", async (req, res) => {
//     console.log("Query Params:", req.query);

    
//   const { source, destination, date } = req.query;
//   if (!source || !destination || !date) {
//     return res.status(400).json({ error: "Missing query parameters" });
//   }

//   try {
//     const flights = await prisma.flight.findMany({
//       where: { source, destination, date: new Date(date) },
//       select: { airline: true, price: true },
//     });

//     if (flights.length === 0) {
//       return res.status(404).json({ message: "No flights found" });
//     }

//     const flightPrices = flights.reduce((acc, flight) => {
//       acc[flight.airline] = flight.price;
//       return acc;
//     }, {});

//     res.json(flightPrices);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });


// app.post("/flights", async (req, res) => {
//     try {
//       const { source, destination, date, airline, price } = req.body;
  
//       if (!source || !destination || !date || !airline || !price) {
//         return res.status(400).json({ error: "Missing required fields" });
//       }
  
//       const newFlight = await prisma.flight.create({
//         data: { source, destination, date: new Date(date), airline, price },
//       });
  
//       res.json(newFlight);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   });
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

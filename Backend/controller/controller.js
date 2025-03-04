import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getflight = async (req, res) => {
    console.log("Query Params:", req.query);

    
  const { source, destination, date } = req.query;
  if (!source || !destination || !date) {
    return res.status(400).json({ error: "Missing query parameters" });
  }

  try {
    const flights = await prisma.flight.findMany({
      where: { source, destination, date: new Date(date) },
      select: { airline: true, price: true },
    });

    console.log(new Date(date))

    if (flights.length === 0) {
      return res.status(404).json({ message: "No flights found" });
    }

    const flightPrices = flights.reduce((acc, flight) => {
      acc[flight.airline] = flight.price;
      return acc;
    }, {});

    res.json(flightPrices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}



const createflight = async (req, res) => {
    try {
      const { source, destination, date, airline, price } = req.body;
  
      if (!source || !destination || !date || !airline || !price) {
        return res.status(400).json({ error: "Missing required fields" });
      }
  
      const newFlight = await prisma.flight.create({
        data: { source, destination, date: new Date(date), airline, price },
      });
  
      res.json(newFlight);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }


export {
    getflight,
    createflight
};
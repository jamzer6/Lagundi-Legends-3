import express from "express";
import bodyParser from "body-parser";
import { db } from "./firebase";
import appointmentsRoute from "./routes/appointments"; // Import the appointments route

const app = express();

// Middleware
app.use(express.json());  // This is all you need to parse JSON bodies
app.use(bodyParser.json());  // You can remove this line since express.json() does the same

// Use the appointments route for POST and other appointments-related actions
app.use("/appointments", appointmentsRoute);

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Silan Dental Clinic API!");
});

// Get all appointments (this is fine to keep)
app.get("/appointments", async (req, res) => {
  const snapshot = await db.collection("appointments").get();
  const appointments = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.json(appointments);
});

// Approve/deny an appointment (also fine to keep)
app.post("/appointments/:id", async (req, res) => {
  const { status } = req.body;
  await db.collection("appointments").doc(req.params.id).update({ status });
  res.json({ message: `Appointment ${status}` });
});

// Start the server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

import { Router } from "express";
import { db } from "../firebase"; // Adjust path based on where firebase is initialized
import { Request, Response } from "express";

const router = Router();

// Create an appointment
router.post("/", async (req: Request, res: Response) => {
  const { patientId, patientName, date, service } = req.body;

  if (!patientId || !patientName || !date || !service) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const appointmentRef = db.collection("appointments").doc();
    await appointmentRef.set({
      id: appointmentRef.id,
      patientId,
      patientName,
      date,
      service,
      status: "pending",
      createdAt: new Date().toISOString(),
    });

    return res.status(201).json({ message: "Appointment created successfully." });
  } catch (error) {
    console.error("Error creating appointment:", error);
    return res.status(500).json({ message: "Failed to create appointment." });
  }
});

export default router;

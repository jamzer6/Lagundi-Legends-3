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

// Check for new appointments
router.get("/new", async (req, res) => {
  try {
    const snapshot = await db.collection("appointments")
      .where("status", "==", "pending")
      .get();
    
    res.json({ count: snapshot.size });
  } catch (error) {
    res.status(500).json({ message: "Error checking new appointments" });
  }
});

// Update appointment status
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    await db.collection("appointments").doc(id).update({ status });
    res.json({ message: "Appointment updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating appointment" });
  }
});

// Delete appointment
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection("appointments").doc(id).delete();
    res.json({ message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting appointment" });
  }
});

export default router;

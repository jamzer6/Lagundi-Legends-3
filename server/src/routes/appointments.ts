import { Router, Request, Response } from "express";
import { Appointment } from "../types/appointment";
import { db } from "../firebase";

const router = Router();

// Get all appointments
router.get("/", async (req: Request, res: Response) => {
  try {
    const appointmentsSnapshot = await db.collection("appointments").get();
    const appointments = appointmentsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch appointments" });
  }
});

// Add new appointment
router.post("/", async (req: Request, res: Response) => {
  try {
    const appointment: Appointment = req.body;
    const docRef = await db.collection("appointments").add({
      ...appointment,
      createdAt: new Date().toISOString(),
    });
    res.status(201).json({ id: docRef.id, ...appointment });
  } catch (error) {
    res.status(500).json({ error: "Failed to create appointment" });
  }
});

// Update appointment
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    await db.collection("appointments").doc(id).update(updates);
    res.json({ message: "Appointment updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update appointment" });
  }
});

// Delete appointment
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.collection("appointments").doc(id).delete();
    res.json({ message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete appointment" });
  }
});

export default router;
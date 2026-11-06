import express from "express";
import studentRoutes from "./routers/student.routes";

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/students", studentRoutes);

// Home route
app.get("/", (req, res) => {
    res.send("Student Management API is running");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
//connection mongoDb
import express from "express";
import cors from "cors";
import dbConnect from "./dbConnect/connect.js";


dbConnect();

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/companies", companiesRoutes);
app.use("/api/images", imageRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/", miscRoutes);
app.use("/api/types", typeRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

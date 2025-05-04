import PDFDocument from "pdfkit";

import axios from "axios";
import { PriceType } from "../../../generated/prisma";
import { IOrder } from "../types";

/**
 * Generates a PDF invoice for an order.
 * @param {IOrder} order - The order object to generate the invoice for.
 * @returns {Promise<Buffer>} - The generated PDF as a Buffer.
 */
export const generateOrderInvoicePDF = async (
  order: Partial<IOrder>
): Promise<Buffer> => {
  return new Promise<Buffer>(async (resolve, reject) => {
    try {
      if (!order || !order.totalAmount)
        return Promise.reject(new Error("Order price is required"));
      const logoUrl =
        "https://res.cloudinary.com/dbgrq28js/image/upload/v1736763971/logoipsum-282_ilqjfb_paw4if.png";
      // Download the logo image as a buffer
      const response = await axios.get(logoUrl, {
        responseType: "arraybuffer",
      });
      const logoBuffer = Buffer.from(response.data);

      const doc = new PDFDocument({ margin: 50 });
      const buffers: Buffer[] = [];
      //@ts-ignore
      doc.on("data", (chunk) => buffers.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(buffers)));
      doc.on("error", (err: Error) => reject(err));

      // Header with graphical design and logo
      const logoWidth = 70; // Set the desired width for the logo
      const logoX = (doc.page.width - logoWidth) / 2; // Center the logo
      doc.image(logoBuffer, logoX, doc.y, { width: logoWidth });
      doc.moveDown(6); // Move down after the logo

      doc
        .fontSize(20)
        .font("Helvetica-Bold")
        .fillColor("#000000")
        .text("Movie Star", { align: "center" });
      doc
        .fontSize(10)
        .text("Level-4, 34, Awal Centre, Banani, Dhaka", { align: "center" });
      doc
        .fontSize(10)
        .text("Email: support@moviestar.com", { align: "center" });
      doc.fontSize(10).text("Phone: + 06 223 456 678", { align: "center" });
      doc.moveDown(0.5);
      doc
        .fontSize(15)
        .font("Helvetica-Bold")
        .fillColor("#003366")
        .text("Invoice", { align: "center" });
      doc.lineWidth(1).moveTo(50, doc.y).lineTo(550, doc.y).stroke(); // Horizontal line under header
      doc.moveDown(0.5);

      // Invoice Details
      doc.fontSize(11).fillColor("#000000").text(`Invoice ID: ${order.id}`);
      doc.text(`Order Date: ${(order.createdAt as Date).toLocaleDateString()}`);
      doc.moveDown(0.5);
      doc.text(`Customer Name: ${order.customerName}`);
      doc.moveDown(1);

      // Payment Details with graphical design
      doc
        .fontSize(11)
        .font("Helvetica-Bold")
        .fillColor("#003366")
        .text("Payment Details:", { underline: true });
      doc.text(`Payment Status: ${order.paymentStatus}`);
      doc.text(`Payment Method: ${order.paymentMethod}`);
      doc.moveDown(1);

      // Order Product Details (Movie star)
      doc
        .fontSize(11)
        .font("Helvetica-Bold")
        .fillColor("#003366")
        .text("Movie Star:", { underline: true });
      doc.moveDown(1);

      // Movie title and star type (purchase or star)
      doc
        .fontSize(11)
        .fillColor("#000000")
        .text(`Movie Title: ${order.productName}`);
      doc.text(
        `Purchase Type: ${
          order.purchaseType === PriceType.rent ? "Rental" : "Purchase"
        }`
      );
      doc.moveDown(1);

      // Pricing
      doc
        .fontSize(11)
        .font("Helvetica-Bold")
        .fillColor("#003366")
        .text("Pricing Breakdown:", { underline: true });
      doc.moveDown(1);

      // Table for pricing details
      const pricingTableTop = doc.y;
      const tableHeight = 20;

      // Table Headers for Pricing (Bold and Colored)
      doc
        .fontSize(11)
        .font("Helvetica-Bold")
        .fillColor("#003366")
        .text("Description", 50, pricingTableTop);
      doc.text("Amount", 400, pricingTableTop);
      doc
        .lineWidth(0.5)
        .moveTo(50, pricingTableTop + tableHeight)
        .lineTo(550, pricingTableTop + tableHeight)
        .stroke(); // Pricing header line
      let pricingY = pricingTableTop + tableHeight + 5;

      // Pricing Breakdown (Normal text, not bold)
      doc
        .fontSize(11)
        .fillColor("#000000")
        .text("Sub Total", 50, pricingY, { width: 200 });
      doc.text(`${order.totalAmount.toFixed(2)} /-`, 400, pricingY, {
        width: 90,
        align: "right",
      });
      pricingY += tableHeight;

      // Add other pricing details here if necessary (e.g., taxes, shipping charges, etc.)
      doc
        .fontSize(11)
        .fillColor("#000000")
        .text("Discount", 50, pricingY, { width: 200 });
      doc.text(`-${(order.discount || 0).toFixed(2)} /-`, 400, pricingY, {
        width: 90,
        align: "right",
      });
      pricingY += tableHeight;

      doc
        .fontSize(11)
        .fillColor("#000000")
        .text("Total", 50, pricingY, { width: 200 });
      doc
        .fontSize(11)
        .font("Helvetica-Bold")
        .fillColor("#003366")
        .text(`${order.totalAmount.toFixed(2)} /-`, 400, pricingY, {
          width: 90,
          align: "right",
        });
      pricingY += tableHeight;

      // Final Pricing Table Border
      doc.lineWidth(0.5).moveTo(50, pricingY).lineTo(550, pricingY).stroke();

      doc.moveDown(2);
      doc.fontSize(9).text("Thank you for choosing Movie Star!");
      doc
        .fontSize(9)
        .fillColor("#003366")
        .text("- MovieStar", { align: "center" });

      // Finalize the document
      doc.end();
    } catch (err) {
      reject(err);
    }
  });
};

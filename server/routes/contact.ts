import { RequestHandler } from "express";
import { ContactRequest, ContactResponse } from "@shared/api";

export const handleContact: RequestHandler = (req, res) => {
  const { name, email, subject, message } = req.body as Partial<ContactRequest>;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    const response: ContactResponse = {
      success: false,
      message: "Name, email, and message are required.",
    };
    return res.status(400).json(response);
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    const response: ContactResponse = {
      success: false,
      message: "Please provide a valid email address.",
    };
    return res.status(400).json(response);
  }

  console.log("New contact form submission:", {
    name,
    email,
    subject,
    message,
  });

  const response: ContactResponse = {
    success: true,
    message: "Thanks for reaching out! We'll get back to you soon.",
  };
  res.json(response);
};

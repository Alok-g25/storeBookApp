import Contact from "../model/contact.model.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "alok6392190896@gmail.com",
    pass: "niespndnhioxswis",
  },
});

export async function createContact(req, res) {
  try {
    let data = new Contact(req.body);
    let mailOptions = {
      from: "alok6392190896@gmail.com",
      to: req.body.email,
      subject: "Confirmation : bookStore",
      text: `
                      Hello ${req.body.name}
                      Your Query Received!!!
                      Our Team Will Contact You Soon!!!
                      Team bookStore
                  `,
    };
    transporter.sendMail(mailOptions, (error) => {
      //     console.log(error)
    });

    mailOptions = {
      from: "alok6392190896@gmail.com",
      to: "alok6392190896@gmail.com",
      subject: "Query Received : bookStore",
      html: `
                      <h3>One Query Received</h3>
                      <p>Followings are the Details</p>
                      <table border="2px" cellpadding="10px">
                          <tbody>
                              <tr>
                                  <th>Name</th>
                                  <td>${req.body.name}</td>
                              </tr>
                              <tr>
                                  <th>Email</th>
                                  <td>${req.body.email}</td>
                              </tr>
                              <tr>
                                  <th>Phone</th>
                                  <td>${req.body.phone}</td>
                              </tr>
                              <tr>
                                  <th>Message</th>
                                  <td>${req.body.message}</td>
                              </tr>
                          </tbody>
                      </table>
                  `,
    };
    transporter.sendMail(mailOptions, (error) => {
      //     console.log(error)
    });
    await data.save();
    res.status(201).json({ message: "data created successfully", data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
}

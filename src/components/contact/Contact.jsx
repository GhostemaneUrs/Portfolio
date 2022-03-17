import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import styles from "./styles.module.scss";
import emailjs from "@emailjs/browser";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";

const Contact = () => {
  const initialStateForm = {
    name: "",
    email: "",
    message: "",
  };
  const form = useRef();
  const [contact, setForm] = useState(initialStateForm);
  const handleChange = (e) => {
    setForm({ ...contact, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_i53pqcc",
        "template_j1pn347",
        form.current,
        "fuGMQcQORX8x7PRT5"
      )
      .then(
        (result) => {
          Swal.fire({
            timer: 2000,
            icon: "success",
            showConfirmButton: false,
            title:
              "Your request has been sent, I will contact you as soon as possible",
          });
          setForm(initialStateForm);
        },
        (error) => {
          Swal.fire({
            icon: "error",
            timer: 1500,
            title: "Oops...",
            text: "Something went wrong!",
            showConfirmButton: false,
          });
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className={styles.container_contact}>
        <div className={styles.contact_options}>
          <div className={styles.option}>
            <MdOutlineEmail className={styles.icon} />
            <h4>Email</h4>
            <h5>JaramilloG1999@outlook.com</h5>
            <a href="mailto:JaramilloG1999@outlook.com" target="_blank">
              Send a message
            </a>
          </div>

          <div className={styles.option}>
            <RiMessengerLine className={styles.icon} />
            <h4>Messenger</h4>
            <h5>Felipe</h5>
            <a href="https://m.me/andresI1975I" target="_blank">
              Send a message
            </a>
          </div>

          <div className={styles.option}>
            <BsWhatsapp className={styles.icon} />
            <h4>WhatsApp</h4>
            <h5>+57 3043512931</h5>
            <a href="https://wa.me/573043512931" target="_blank">
              Send a message
            </a>
          </div>
        </div>
        <form ref={form} onSubmit={handleSubmit}>
          <input
            required
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            placeholder="Your Full Name"
          />
          <input
            required
            type="email"
            name="email"
            value={contact.email}
            placeholder="Your Email"
            onChange={handleChange}
          />
          <textarea
            required
            rows="10"
            name="message"
            value={contact.message}
            onChange={handleChange}
            placeholder="Your Message"
          />
          <button className={`${styles.button} ${styles.button_primary}`}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import emailjs from "@emailjs/browser";
import { useRef, useState, type FormEvent } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [status, setStatus] = useState<"sending" | "sent" | "error" | null>(null);

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_r30wdqf",
        "template_49s5kmp",
        formRef.current,
        "user_nOYVsuehfChhCO58SJ0gB",
      );
      setStatus("sent");
    } catch (error) {
      console.error("EmailJS could not send the contact message.", error);
      setStatus("error");
    } finally {
      setDialogOpen(true);
    }
  };

  return (
    <>
      <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
        <div className="contact-form-inner">
          <h2>LET&apos;S TALK!</h2>
          <p>
            I will get back to you within one to two days through email. Also
            please don&apos;t forget to check your spam account just in case!
          </p>
          <label>
            <span>Name</span>
            <input name="from_name" autoComplete="name" required />
          </label>
          <label>
            <span>E-mail</span>
            <input name="from_email" type="email" autoComplete="email" required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows={2} required />
          </label>
          <Button type="submit" disabled={status === "sending"} className="send-button">
            {status === "sending" ? "SENDING..." : "SEND REQUEST"}
          </Button>
        </div>
      </form>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogTitle>
            {status === "sent" ? "Message sent" : "Message could not be sent"}
          </DialogTitle>
          <p>
            {status === "sent"
              ? "Thank you for reaching out. I will get back to you soon."
              : "Please try again later or contact me directly by email."}
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}

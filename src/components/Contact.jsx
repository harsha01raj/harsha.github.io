import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_41tel11",
        "template_6jg9hm9",
        form.current,
        "WGoyQ7ebMzBkJfGAM"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div id="contact" className="contact">
        <h1>Contact us</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label id="label1">Name </label>
          <input type="text" name="to_name" className="input" />
          <br />
          <label id="label2">Email </label>
          <input type="email" name="from_name" className="input" />
          <br />
          <label id="label3">Message </label>
          <textarea name="message" className="input" />
          <br />
          <input type="submit" value="Send" id="button1" />
        </form>

        <div className="icondiv">
          <a
            id="anchor"
            target="_blank"
            rel="noreference"
            href="https://www.linkedin.com/in/harsh-raj-49286427a/"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6_hHassNKu6VuARMFw2AL233-1blo5EAulWftov9nx3iw5NLAkMQ0s6fC4U5Ehhv3Bk&usqp=CAU"
              alt=""
            />
          </a>

          <a
            id="anchor"
            target="_blank"
            rel="noreference"
            href="https://github.com/harsha01raj/"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV0Gcec2Q-pDXvOc62gDjtv1EX11HoQ00tRQ&usqp=CAUg"
              alt=""
            />
          </a>

          <a
            id="anchor"
            target="_blank"
            rel="noreference"
            href="https://www.instagram.com/hr_gaming_clash/?fbclid=IwAR0900yq9LWCwjJXCgalu0MmsH1TGDxkr251c_DUobPheTNj17PIMyz8tBc"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2qfmmuzizi7QZ7wI0BmA6Od1WJ41TmJnE_RvNTH4wj11lFcvqiSzH-01kw46gYemkyA&usqp=CAU"
              alt=""
            />
          </a>

          <a
            id="anchor"
            target="_blank"
            rel="noreference"
            href="https://www.facebook.com/yom.yaduvanshi/"
          >
            <img
              src="https://i.pinimg.com/564x/ca/3b/f0/ca3bf05cfab74677e5b73b130bd30991.jpg"
              alt=""
            />
          </a>
        </div>
      </div>
    </>
  );
};
export default Contact;

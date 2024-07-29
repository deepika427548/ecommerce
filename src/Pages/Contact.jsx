// import React, { useEffect, useState } from "react";
// import "./Contact.css";
// import { Container, Button } from "react-bootstrap";

// const Contact = () => {
//   const [contactForm, setContactForm] = useState({});
//   const [errors, setErrors] = useState({});
//   const validateForm = () => {
//     let valid = true;

//     const newErrors = {
//       name: "",
//       email: "",
//       phone: "",
//       message: "",
//     };

//     if (!contactForm.fullName.trim()) {
//       newErrors.fullName = "Fullname required";
//     }

//     setErrors(newErrors);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//     }
//   };

//   // useEffect(() => {
//   //   // console.log("contactform data", contactForm);
//   // }, [contactForm]);

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setContactForm({ ...contactForm, [name]: value });
//   };

//   return (
//     <Container>
//       <h1>Contact Form</h1>
//       <div>
//         <form action="" className="contact_form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="fullName"
//             onChange={handleOnChange}
//             placeholder="Enter your name"
//           />
//           <span>{errors?.fullName}</span>
//           <input
//             type="text"
//             name="email"
//             onChange={handleOnChange}
//             placeholder="Enter your email id"
//           />
//           <input
//             type="text"
//             name="phone"
//             onChange={handleOnChange}
//             placeholder="Enter your contact number"
//           />
//           <textarea
//             name="message"
//             onChange={handleOnChange}
//             id=""
//             cols="30"
//             rows="10"
//             placeholder="Enter your message"
//           ></textarea>
//           <Button type="submit">submit</Button>
//         </form>
//       </div>
//     </Container>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import "./Contact.css";
import { Container, Button } from "react-bootstrap";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!contactForm.fullName || !contactForm.fullName.trim()) {
      newErrors.fullName = "Fullname required";
      valid = false;
    }

    if (!contactForm.email || !contactForm.email.trim()) {
      newErrors.email = "Email required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
      newErrors.email = "Email address is invalid";
      valid = false;
    }

    if (!contactForm.phone || !contactForm.phone.trim()) {
      newErrors.phone = "Phone number required";
      valid = false;
    } else if (!/^\d{10}$/.test(contactForm.phone)) {
      newErrors.phone = "Phone number is invalid";
      valid = false;
    }

    if (!contactForm.message || !contactForm.message.trim()) {
      newErrors.message = "Message required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("submitted successfully");
      console.log(contactForm); // Proceed with form submission
    } else {
      console.log("Validation failed");
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  return (
    <Container>
      <h1>Contact Form</h1>
      <div>
        <form className="contact_form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            onChange={handleOnChange}
            value={contactForm.fullName}
            placeholder="Enter your name"
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
          <input
            type="text"
            name="email"
            onChange={handleOnChange}
            value={contactForm.email}
            placeholder="Enter your email id"
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <input
            type="text"
            name="phone"
            onChange={handleOnChange}
            value={contactForm.phone}
            placeholder="Enter your contact number"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
          <textarea
            name="message"
            onChange={handleOnChange}
            value={contactForm.message}
            cols="30"
            rows="10"
            placeholder="Enter your message"
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </Container>
  );
};

export default Contact;

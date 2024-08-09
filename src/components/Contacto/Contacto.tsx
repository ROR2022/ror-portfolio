"use client";
import React, { useState } from "react";
//import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const Contacto = () => {
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  // Función para manejar el envío del formulario
  const handleSubmit = (e: any) => {
    e.preventDefault();
    //console.log(email, comments);
    // Construcción del mensaje de WhatsApp
    const whatsappMessage = `Email: ${email}%0AComentarios:%0A${encodeURIComponent(
      comments
    )}`;

    // Número de WhatsApp en formato internacional
    const phoneNumber = "527777937484";

    // Construcción del enlace de WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Redirección a WhatsApp
    window.open(whatsappURL, "_blank");
    setEmail("");
    setComments("");
  };

  const handleChanges = (e: any) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else {
      setComments(value);
    }
  };

  return (
    <form
      style={{ width: "80vw" }}
      className="ms-auto me-auto my-5"
      onSubmit={handleSubmit}
    >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-3xl text-center font-semibold leading-7 text-white">
            Contact Me !!
          </h2>
          {/* <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p> */}

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-white"
              >
                Email
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChanges}
                    placeholder="email"
                    autoComplete="email"
                    className="block flex-1 border-0 bg-white py-1.5 pl-1 text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full mt-5">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-white"
            >
              Comments
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                onChange={handleChanges}
                value={comments}
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Write a few comments.
            </p>
          </div>
        </div>
        <div className="BUTTONS  flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900 hidden"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={email === "" || comments === ""}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default Contacto;

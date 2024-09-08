import React from "react";

function ContactForm() {
  const accessKey = import.meta.env.VITE_FORM_ACCESS_KEY;
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-md">
        <p className="mb-8 lg:mb-16 text-center dark:text-text-colour text-black-text sm:text-xl">
        If you want to know more about me or my work, or if you would just
        like to say hello, send me a message. I'd love to hear from you.
        </p>
        <form onSubmit={onSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium dark:text-text-colour text-black-text "
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-header-gray text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium dark:text-text-colour text-black-text "
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block p-3 w-full text-sm text-header-gray bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium dark:text-text-colour text-black-text "
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-header-gray bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-text-colour dark:text-black-text  rounded-lg dark:bg-text-colour bg-background"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;

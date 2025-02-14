// components/Form.js
"use client";

import { useState, useEffect } from "react";

export default function Form({ onSuccess }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    avatarUrl: "",
  });

  const [errors, setErrors] = useState({});

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("ticketFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Save data to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem("ticketFormData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Basic validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }

    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Avatar URL validation (must start with http or https)
    if (!formData.avatarUrl.trim()) {
      newErrors.avatarUrl = "Avatar URL is required.";
    } else if (
      !formData.avatarUrl.startsWith("http://") &&
      !formData.avatarUrl.startsWith("https://")
    ) {
      newErrors.avatarUrl = "Avatar URL must start with http:// or https://";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // No errors, pass data back
      onSuccess(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-[#132937] p-6 rounded mt-8">
      <h2 className="text-xl font-bold mb-4 text-teal-400">Generate Your Ticket</h2>

      {/* Full Name */}
      <div className="mb-4">
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-200 mb-1"
        >
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          className={`w-full p-2 rounded focus:outline-none
            ${
              errors.fullName
                ? "border border-red-500"
                : "border border-gray-600 bg-[#0D212F]"
            }`}
          aria-invalid={errors.fullName ? "true" : "false"}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
        />
        {errors.fullName && (
          <p id="fullName-error" className="text-red-500 text-sm mt-1">
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-200 mb-1"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-2 rounded focus:outline-none
            ${
              errors.email
                ? "border border-red-500"
                : "border border-gray-600 bg-[#0D212F]"
            }`}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-sm mt-1">
            {errors.email}
          </p>
        )}
      </div>

      {/* Avatar URL */}
      <div className="mb-4">
        <label
          htmlFor="avatarUrl"
          className="block text-sm font-medium text-gray-200 mb-1"
        >
          Avatar URL (Cloudinary or any image link)
        </label>
        <input
          id="avatarUrl"
          name="avatarUrl"
          type="text"
          value={formData.avatarUrl}
          onChange={handleChange}
          className={`w-full p-2 rounded focus:outline-none
            ${
              errors.avatarUrl
                ? "border border-red-500"
                : "border border-gray-600 bg-[#0D212F]"
            }`}
          aria-invalid={errors.avatarUrl ? "true" : "false"}
          aria-describedby={errors.avatarUrl ? "avatarUrl-error" : undefined}
        />
        {errors.avatarUrl && (
          <p id="avatarUrl-error" className="text-red-500 text-sm mt-1">
            {errors.avatarUrl}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-4 w-full bg-teal-400 text-black font-semibold py-2 rounded
                   hover:bg-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
      >
        Submit
      </button>
    </form>
  );
}

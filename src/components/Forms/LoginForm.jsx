import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
export default function LoginForm({
  setShowModal,
  auth,
  setAuth,
  refreshGalleryTrigger,
}) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username === "admin" && formData.password === "admin") {
      setIsLoggedIn(true);
      localStorage.setItem("login", true);
    } else {
      alert("Invalid username or password");
    }
  };
  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem("login")) || false;
    setAuth(storedAuth);
    setIsLoggedIn(storedAuth);
  }, [isLoggedIn]);
  const handleFileChange = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const imageFiles = files.filter((file) => file.type.startsWith("image/"));
      if (imageFiles.length !== files.length) {
        alert("Only image files are allowed!");
      }
      setSelectedFiles(imageFiles);
    }
  };
  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      alert("Please select images to upload.");
      return;
    }
    const formData = new FormData();
    selectedFiles.forEach((file) => formData.append("images", file));
    try {
      const response = await fetch(
        "https://cms-crvm.onrender.com/aws/uploadImage",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        alert("Images uploaded successfully!");
        setSelectedFiles([]);
        const cache = await caches.open("image-cache-v2");
        await cache.delete("https://cms-crvm.onrender.com/aws/getImages");
        localStorage.removeItem("cacheTime");
        refreshGalleryTrigger(Date.now());
      } else {
        const errorData = await response.json();
        alert(`Upload failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error uploading images:", error);
      refreshGalleryTrigger(Date.now());
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-xs backdrop-brightness-50 z-50 px-4 md:px-0">
      <div className="bg-white p-6 rounded-lg shadow-md shadow-gray-400 w-full md:w-auto max-h-[80vh] overflow-y-auto relative">
        <button
          className="absolute top-3 right-3 text-white hover:text-gray-300"
          onClick={() => setShowModal(false)}
        >
          ✖
        </button>
        {!isLoggedIn && !auth ? (
          <>
            <h2 className="text-2xl font-bold text-center text-black">Login</h2>
            <form className="mt-6" onSubmit={handleSubmit}>
              {}
              <div className="mb-4">
                <label className="block text-black font-medium">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 bg-transparent border border-white/30 rounded-lg text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your username"
                  required
                />
              </div>
              {}
              <div className="mb-4 relative">
                <label className="block text-black font-medium">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-1 bg-transparent border border-white/30 rounded-lg text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                  placeholder="Enter your password"
                  required
                />
                {}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 text-black-300 hover:text-black"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={20} />
                  ) : (
                    <AiOutlineEye size={20} />
                  )}
                </button>
              </div>
              <button
                type="submit"
                className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Login
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl  font-bold text-center text-black">
              Upload Files
            </h2>
            <div className="mt-6 border-1 border-black-300 rounded-lg p-2">
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="block w-full text-black"
              />
            </div>
            {selectedFiles.length > 0 && (
              <p className="mt-2 text-sm text-black">
                {selectedFiles.length} file(s) selected
              </p>
            )}
            <button
              onClick={handleUpload}
              className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Upload
            </button>
          </>
        )}
      </div>
    </div>
  );
}

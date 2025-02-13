import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaUpload } from "react-icons/fa";

export default function LoginForm({ setShowModal, auth, setAuth, refreshGalleryTrigger }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uploadType, setUploadType] = useState("image");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [youtubeId, setYoutubeId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem("login")) || false;
    setAuth(storedAuth);
    setIsLoggedIn(storedAuth);
  }, [isLoggedIn]);

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
    if (uploadType === "image" && selectedFiles.length === 0) {
      alert("Please select images to upload.");
      return;
    }
    if (uploadType === "video" && !youtubeId) {
      alert("Please enter a YouTube video ID.");
      return;
    }

    setLoading(true);

    if (uploadType === "image") {
      const formData = new FormData();
      selectedFiles.forEach((file) => formData.append("images", file));
      try {
        const response = await fetch("https://cms-crvm.onrender.com/aws/uploadImage", {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          alert("Images uploaded successfully!");
          setSelectedFiles([]);
          const cache = await caches.open("image-cache-v2");
          await cache.delete("https://cms-crvm.onrender.com/aws/getImagesS3");
          localStorage.removeItem("cacheTime");
          refreshGalleryTrigger(Date.now());
        } else {
          const errorData = await response.json();
          alert(`Upload failed: ${errorData.message}`);
        }
      } catch (error) {
        console.error("Error uploading images:", error);
      }
    } else {
      try {
        const response = await fetch("https://cms-crvm.onrender.com/cms/uploadCMS", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ youtubeId: youtubeId, name: "google" }),
        });
        if (response.ok) {
          alert("Video uploaded successfully!");
          setYoutubeId("");
        } else {
          const errorData = await response.json();
          alert(`Upload failed: ${errorData.message}`);
        }
      } catch (error) {
        console.error("Error uploading video:", error);
      }
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs bg-black/10  shadow-md z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <button className="absolute top-4 right-4 !text-white hover:cursor-pointer" onClick={() => setShowModal(false)}>
          ✖
        </button>
        {!isLoggedIn && !auth ? (
          <>
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Login</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-medium">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="relative">
                <label className="block text-gray-700 font-medium">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your password"
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-9 text-gray-600">
                  {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </button>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                Login
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-center text-gray-800">Upload Files</h2>
            <div className="mt-4">
              <label className="block text-gray-700 font-medium">Select Upload Type</label>
              <select className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" value={uploadType} onChange={(e) => setUploadType(e.target.value)}>
                <option value="image">Image</option>
                <option value="video">Video</option>
              </select>
            </div>
            {uploadType === "image" ? (

              <div className="mt-4 relative">
                <label className="block text-gray-700 font-medium">Upload Image</label>
                <div className="relative w-full">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    id="fileInput"
                  />
                  <label
                    htmlFor="fileInput"
                    className="flex items-center justify-between w-full px-4 py-2 border border-gray-300 rounded-md cursor-pointer bg-white text-gray-700 hover:bg-gray-100 transition"
                  >
                    {selectedFiles.length > 0 ? (
                      <span>{selectedFiles.length} file(s) selected</span>
                    ) : (
                      <span>Choose File</span>
                    )}
                    📁
                  </label>
                </div>
              </div>

            ) : (
              <div className="mt-4">
                <input type="text" placeholder="Enter YouTube Video ID" value={youtubeId} onChange={(e) => setYoutubeId(e.target.value)} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              </div>
            )}
            <button
              onClick={handleUpload}
              className="w-full flex items-center justify-center gap-2 mt-4 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Uploading..." : <><FaUpload /> Upload</>}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

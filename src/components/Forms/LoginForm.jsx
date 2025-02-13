import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

export default function LoginForm({ setShowModal, auth, setAuth, refreshGalleryTrigger }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uploadType, setUploadType] = useState("image");
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [youtubeId, setYoutubeId] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModalState] = useState(false);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const storedAuth = JSON.parse(localStorage.getItem("login")) || false;
    setAuth(storedAuth);
    setIsLoggedIn(storedAuth);
  }, [isLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.username === "admin" && formData.password === "admin") {
      setIsLoggedIn(true);
      localStorage.setItem("login", true);
    } else {
      alert("Invalid username or password");
    }
  };

  // const fetchData = async () => {
  //   try {
  //     const imagesResponse = await fetch("https://cms-crvm.onrender.com/aws/getImages");
  //     const videosResponse = await fetch("https://cms-crvm.onrender.com/cms/getCMS");
  //     const imagesData = await imagesResponse.json();
  //     const videosData = await videosResponse.json();
  //     setImages(imagesData.images || []);
  //     setVideos(videosData || []);
  //     setShowModalState(true);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const handleUpload = async () => {
    setLoading(true);
    try {
      let response;
      if (uploadType === "image") {
        const formData = new FormData();
        selectedFiles.forEach((file) => formData.append("images", file));
        response = await fetch("https://cms-crvm.onrender.com/aws/uploadImage", {
          method: "POST",
          body: formData,
        });
      } else {
        response = await fetch("https://cms-crvm.onrender.com/cms/uploadCMS", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ youtubeId, name: "Uploaded Video" }),
        });
      }
      if (response.ok) {
        setSuccessMessage("Upload successful!");
        fetchData();
      } else {
        alert("Upload failed!");
      }
    } catch (error) {
      console.error("Error uploading:", error);
    }
    setLoading(false);
  };

  const handleDelete = async(id, type) => {
    setLoading(true);
    try {
      let response;
      if (type === "video") {
        response = await fetch("https://cms-crvm.onrender.com/aws/deleteYoutube", {
          method: "POST",
         
          body: JSON.stringify({ youtubeIds: [id] }),
        });
      } else {
        response = await fetch("https://cms-crvm.onrender.com/aws/deleteImage", {
          method: "DELETE",
          body: JSON.stringify({ imageUrl: id }),
        });
      }
      if (response.ok) {
        fetchData();
      } else {
        alert("Delete failed!");
      }
    } catch (error) {
      console.error("Error deleting:", error);
    }
    setLoading(false);
  };

  return (
    <>

      <div className="fixed inset-0 flex items-center justify-center bg-black/5 bg-opacity-10 backdrop-blur-sm z-50 px-4 md:px-0">
        <div className="bg-white p-6 rounded-lg shadow-md shadow-gray-400 w-full md:w-auto lg:min-w-sm max-h-[80vh] overflow-y-auto relative">
          <button className="absolute top-3 right-3 text-black hover:text-gray-300" onClick={() => setShowModal(false)}>✖</button>
          {!isLoggedIn ? (
            <form className="mt-6" onSubmit={handleLogin}>
              <h2 className="text-2xl font-bold text-center text-black">Login</h2>
              <div className="mb-4">
                <label className="block font-medium">Username</label>
                <input type="text" name="username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} className="w-full p-2 border rounded" required />
              </div>
              <div className="mb-4 relative">
                <label className="block font-medium">Password</label>
                <input type={showPassword ? "text" : "password"} name="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="w-full p-2 border rounded pr-10" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-9">
                  {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </button>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">Login</button>
            </form>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-center">Upload Files</h2>
              <div className="mt-4">
                <select value={uploadType} onChange={(e) => setUploadType(e.target.value)} className="w-full p-2 border rounded">
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                </select>
              </div>
              <button onClick={handleUpload} className="w-full bg-blue-600 text-white py-2 rounded-lg mt-2">Upload</button>
              <button onClick={fetchData} className="w-full bg-green-600 text-white py-2 rounded-lg mt-2">View All</button>
            </>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/10 bg-opacity-0 backdrop-blur-none z-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 max-h-[80vh] overflow-y-auto relative">
            <button className="absolute top-3 right-3 text-black hover:text-gray-500" onClick={() => setShowModalState(false)}>✖</button>
            <h2 className="text-xl font-bold text-center mb-4">Uploaded Files</h2>
            <table className="w-full border">
              <thead>
                <tr>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">YouTube ID / Image</th>
                  <th className="border p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {videos.map((video) => (
                  <tr key={video._id}>
                    <td className="border p-2">{video.name}</td>
                    <td className="border p-2">{video.youtubeId}</td>
                    <td className="border p-2 text-center">
                      <button onClick={() => handleDelete(video.youtubeId, "video")} className="text-red-600 hover:text-red-800"><FaTrashAlt /></button>
                    </td>
                  </tr>
                ))}
                {images.map((image, index) => (
                  <tr key={index}>
                    <td className="border p-2">Image {index + 1}</td>
                    <td className="border p-2"><img src={image} alt="Uploaded" className="h-12 w-auto" /></td>
                    <td className="border p-2 text-center">
                      <button onClick={() => handleDelete(image, "image")} className="text-red-600 hover:text-red-800"><FaTrashAlt /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </>
  );
}

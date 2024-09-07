import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useHackathonContext } from "../context/HackathonContext";
import { useParams } from "react-router-dom";

const CreateAndUpdateHackathon = () => {
 const { id } = useParams();

 const [formValues, setFormValues] = useState({
  title: "",
  startDate: "",
  endDate: "",
  description: "",
  imageUrl: "",
  level: "easy",
 });

 const [loading, setLoading] = useState(false);
 const [error, setError] = useState("");
 const navigate = useNavigate();

 const handleImageUpload = async (e) => {
  const file = e.target.files[0];
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "kw1fbv31");
  formData.append("cloud_name", "dgewyv0pn");

  try {
   const res = await fetch(
    "https://api.cloudinary.com/v1_1/dgewyv0pn/image/upload",
    {
     method: "POST",
     body: formData,
    }
   );

   if (!res.ok) {
    throw new Error("Image upload failed");
   }

   const data = await res.json();
   setFormValues((prevValues) => ({
    ...prevValues,
    imageUrl: data.secure_url,
   }));
  } catch (err) {
   console.error("Image upload failed:", err);
   setError("Image upload failed. Please try again.");
  }
 };

 const { createHackathon, hackathons, updateHackathon } = useHackathonContext();

 useEffect(() => {
  if (hackathons && hackathons.length > 0) {
   const data = hackathons.find((item) => item.id === parseInt(id, 10));
   if (data) {
    setFormValues({
     title: data.title || "",
     startDate: data.startDate || "",
     endDate: data.endDate || "",
     description: data.description || "",
     imageUrl: data.imageUrl || "",
     level: data.level || "easy",
    });
   }
  }
 }, [hackathons, id]);

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  const challengeData = {
   ...formValues,
  };

  try {
   if (id) {
    updateHackathon(parseInt(id, 10), {
     id: parseInt(id, 10),
     ...challengeData,
    });
   } else {
    createHackathon({ ...challengeData, id: Date.now() });
   }
   setTimeout(() => {
    navigate("/");
   }, 1000);
   setFormValues({
    title: "",
    startDate: "",
    endDate: "",
    description: "",
    imageUrl: "",
    level: "easy",
   });
  } catch (err) {
   console.error("Form submission failed:", err);
   setError("Form submission failed. Please try again.");
  } finally {
   setLoading(false);
  }
 };

 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormValues((prevValues) => ({
   ...prevValues,
   [name]: value,
  }));
 };

 return (
  <div>
   <Header />
   <div className="bg-[#F8F9FD] py-10 px-10 md:px-20">
    <p className="text-2xl font-bold">Challenge Details</p>
   </div>
   <div className="px-10 md:px-20 py-8">
    <form onSubmit={handleSubmit} className="space-y-8 p-6">
     {/* Challenge Name */}
     <div className="space-y-4">
      <label htmlFor="challengeName" className="block text-md">
       Challenge Name
      </label>
      <input
       type="text"
       id="challengeName"
       name="title"
       value={formValues.title}
       onChange={handleInputChange}
       required
       className="border border-gray-300 p-2 rounded-md w-full sm:w-[70%] md:w-[40%]"
      />
     </div>

     {/* Start Date */}
     <div className="space-y-4">
      <label htmlFor="startDate" className="block text-md">
       Start Date & Time
      </label>
      <input
       type="datetime-local"
       id="startDate"
       name="startDate"
       value={formValues.startDate}
       onChange={handleInputChange}
       required
       className="border border-gray-300 p-2 rounded-md w-full sm:w-[70%] md:w-[40%]"
      />
     </div>

     {/* End Date */}
     <div className="space-y-4">
      <label htmlFor="endDate" className="block text-md">
       End Date & Time
      </label>
      <input
       type="datetime-local"
       id="endDate"
       name="endDate"
       value={formValues.endDate}
       onChange={handleInputChange}
       required
       className="border border-gray-300 p-2 rounded-md w-full sm:w-[70%] md:w-[40%]"
      />
     </div>

     {/* Description */}
     <div className="space-y-4">
      <label htmlFor="description" className="block text-md">
       Description
      </label>
      <textarea
       id="description"
       name="description"
       value={formValues.description}
       onChange={handleInputChange}
       required
       className="border border-gray-300 p-2 rounded-md w-full sm:w-[70%] h-[35vh]"
      />
     </div>

     {/* Image Upload */}
     <div className="space-y-4">
      <label htmlFor="image" className="block text-md">
       Image Upload
      </label>
      {formValues?.imageUrl && (
       <img
        src={formValues?.imageUrl}
        alt="challenge"
        className="w-[100px] h-[100px]"
       />
      )}
      <input
       type="file"
       id="image"
       onChange={handleImageUpload}
       accept="image/*"
       className="border border-gray-300 p-2 rounded-md w-[25%]"
      />
     </div>

     {/* Level Type */}
     <div className="space-y-4">
      <label htmlFor="level" className="block text-md">
       Level
      </label>
      <select
       id="level"
       name="level"
       value={formValues.level}
       onChange={handleInputChange}
       className="border border-gray-300 p-2 rounded-md w-[25%]">
       <option value="easy">Easy</option>
       <option value="medium">Medium</option>
       <option value="hard">Hard</option>
      </select>
     </div>

     {error && <p className="text-red-500">{error}</p>}

     <div className="mt-12">
      <button
       type="submit"
       className="bg-[#44924C] text-white px-4 py-2 rounded-md"
       disabled={loading}>
       {loading ? "Submitting..." : "Create Challenge"}
      </button>
     </div>
    </form>
   </div>
  </div>
 );
};

export default CreateAndUpdateHackathon;

import { useState, useRef } from "react";
import { FaStar, FaRegStar, FaCamera, FaTimes } from "react-icons/fa";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [files, setFiles] = useState([]);

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    const previews = selectedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setFiles((prev) => [...prev, ...previews]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!rating || !review || !title || !name) {
      alert("Please fill all required fields");
      return;
    }

    console.log({
      rating,
      review,
      title,
      name,
      uploadedFiles: files.map((f) => f.file),
    });

    alert("Review submitted successfully!");

    setRating(0);
    setReview("");
    setTitle("");
    setName("");
    setFiles([]);
  };

  return (
    <section className="w-full min-h-screen bg-white py-14">
      <div className="max-w-4xl mx-auto px-6">

        {/* PRODUCT INFO */}
        <div className="flex gap-4 mb-8">
          <img
            src="https://via.placeholder.com/80"
            alt="product"
            className="w-20 h-20 object-cover rounded"
          />
          <div>
            <h2 className="text-lg font-semibold">How was the item?</h2>
            <p className="text-sm text-gray-500">
              Nifty Women's Denim Stretchable High Waist Baggy Jeans
            </p>
          </div>
        </div>

        {/* STAR RATING */}
        <div className="mb-6">
          <div className="flex gap-1 text-2xl text-yellow-500">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className="cursor-pointer"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
              >
                {star <= (hover || rating) ? <FaStar /> : <FaRegStar />}
              </span>
            ))}
          </div>
        </div>

        {/* REVIEW */}
        <div className="mb-6">
          <label className="block font-medium mb-2">Write a review</label>
          <textarea
            placeholder="What should other customers know?"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full border rounded-md px-4 py-3 min-h-[120px]"
          />
        </div>

        {/* UPLOAD */}
        <div className="mb-6">
          <label className="block font-medium mb-2">
            Share a photo or video
          </label>

          <div
            onClick={() => fileInputRef.current.click()}
            className="border-2 border-dashed rounded-md p-6 text-center cursor-pointer hover:border-black transition"
          >
            <FaCamera className="mx-auto text-2xl mb-2 text-gray-500" />
            <p className="text-sm text-gray-500">
              Click to upload photos or videos
            </p>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*,video/*"
            onChange={handleFileChange}
            className="hidden"
          />

          {/* PREVIEW */}
          {files.length > 0 && (
            <div className="flex gap-3 mt-4 flex-wrap">
              {files.map((item, index) => (
                <div key={index} className="relative w-24 h-24">
                  <img
                    src={item.preview}
                    alt="preview"
                    className="w-full h-full object-cover rounded"
                  />
                  <button
                    onClick={() => removeFile(index)}
                    className="absolute -top-2 -right-2 bg-black text-white rounded-full p-1 text-xs"
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* TITLE */}
        <div className="mb-6">
          <label className="block font-medium mb-2">
            Title your review *
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-md px-4 py-2"
          />
        </div>

        {/* NAME */}
        <div className="mb-10">
          <label className="block font-medium mb-2">
            What's your public name? *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-md px-4 py-2"
          />
        </div>

        {/* SUBMIT */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-yellow-400 hover:bg-yellow-500 px-8 py-3 rounded-full font-semibold"
          >
            Submit
          </button>
        </div>

      </div>
    </section>
  );
};

export default Rating;

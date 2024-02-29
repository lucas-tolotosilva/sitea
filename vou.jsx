import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./../Firebase";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [imageUploads, setImageUploads] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const uploadFiles = () => {
    imageUploads.forEach((imageUpload) => {
      const imageRef = ref(storage, `images/${imageUpload.name + uuidv4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const newImageUploads = [];
    for (let i = 0; i < files.length; i++) {
      newImageUploads.push(files[i]);
    }
    setImageUploads(newImageUploads);
  };

  return (
    <div className="App">
      <input
        type="file"
        multiple
        onChange={handleFileChange}
      />
      <button onClick={uploadFiles}>Upload Images</button>
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt={`Uploaded Image ${index}`} />
      ))}
    </div>
  );
}

export default App;

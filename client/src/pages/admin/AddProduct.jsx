import React, { useState } from "react";
import axios from "axios";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; //import firebase storage
import { storage } from "../../firebase-config"; //import firebase config
export default function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [disponibilte, setProductDisponibilite] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [category, setProductCategory] = useState("");
  /**/
  const [progress, setProgress] = useState(0); //product image image upload progress
  const [error, setError] = useState(null); //nft image upload error

  const handleAddProduct = async (url, location) => {
    const product = {
      productName,
      productPrice,
      productImage: url,
      productDescription,
      category,
      disponibilte,
      imageLocation: location,
    };
    console.log("before download" + product);
    axios
      .post("http://localhost:5000/products", product)
      .then((res) => {
        console.log(res.data);
        setProductName("");
        setProductPrice("");
        setProductImage("");
        setProductDisponibilite("");
        setProductDescription("");
        setProductCategory("");
        alert(res.data.message);
      })
      .catch((error) => console.error(error));
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setProductImage(file);
  };

  const handleUpload = async () => {
    const metadata = { contentType: productImage.type }; //file metadata
    const fileLocation = `products/${category}/` + productImage.name;
    const storageRef = ref(storage, fileLocation); //storage ref
    const uploadTask = uploadBytesResumable(storageRef, productImage, metadata); //upload task
    uploadTask.on(
      "state_changed", //upload task on state changed
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        setError(error.code);
      },
      async () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          handleAddProduct(url, fileLocation);
        });
      }
    );
  };
  return (
    <div>
      AddProduct
      <div className="addProductSection">
        <form>
          <input
            type={"text"}
            className="form-control"
            placeholder="productName"
            onChange={(e) => setProductName(e.target.value)}
            required={true}
            value={productName}
          />

          <input
            className="form-control"
            type={"number"}
            required={true}
            placeholder="productPrice"
            onChange={(e) => setProductPrice(e.target.value)}
            value={productPrice}
          />
          <input
            className="form-control"
            type={"file"}
            placeholder="productImage"
            onChange={handleImageChange}
          />
          {error && <p>{error}</p>}
          {progress > 0 && (
            <p>
              <progress value={progress} min="0" max="100" />
              {progress}%
            </p>
          )}

          <textarea
            type={"text"}
            className="form-control"
            placeholder="productDescription"
            onChange={(e) => {
              setProductDescription(e.target.value);
            }}
            value={productDescription}
          />
          <select
            className="form-select"
            name="productDisponibilite"
            id="productDisponibilite"
            onChange={(e) => setProductDisponibilite(e.target.value)}
          >
            <option value="">Select Disponibilité</option>
            <option value="true">Disponible</option>
            <option value="false">Non disponible</option>
          </select>
          <select
            className="form-select"
            name="productCategory"
            id="productCategory"
            onChange={(e) => setProductCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="pc-portable">pc-portable</option>
            <option value="smartphone">smartphone</option>
          </select>
          <button type="button" onClick={handleUpload} className="form-control">
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";

export default function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(
    "https://zaarastore.tn/wp-content/uploads/2023/03/1-1.jpg"
  );
  const [disponibilte, setProductDisponibilite] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [category, setProductCategory] = useState("");

  const handleAddProduct = async () => {
    if (productName === "") {
      alert("Please enter product name");
      return;
    }
    if (productPrice === "") {
      alert("Please enter product price");
      return;
    }
    if (productImage === "") {
      alert("Please enter product image");
      return;
    }
    if (disponibilte === "") {
      alert("Please enter product disponibilite");
      return;
    }
    if (category === "") {
      alert("Please enter product category");
      return;
    }
    if (productDescription === "") {
      productDescription = "No description";
    }
    console.log(
      productName +
        " " +
        productPrice +
        " " +
        productImage +
        " " +
        disponibilte +
        " " +
        category +
        " " +
        productDescription
    );
    if (
      productName &&
      productDescription &&
      category &&
      disponibilte &&
      productImage &&
      productPrice
    ) {
      const product = {
        productName,
        productPrice,
        productDescription,
        productImage,
        disponibilte,
        category,
      };
      console.log(product);
      axios
        .post("http://localhost:5000/products", product)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
        })
        .catch((error) => console.error(error));
    }

    // Add your code here to save the product to a database or API
  };

  return (
    <div>
      AddProduct
      <div className="addProductSection">
        <form>
          <input
            type={"text"}
            placeholder="productName"
            onChange={(e) => setProductName(e.target.value)}
            required={true}
          />
          <input
            type={"number"}
            placeholder="productPrice"
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <input
            type={"file"}
            placeholder="productImage"
            onChange={(e) => setProductImage(e.target.value)}
          />
          <textarea
            type={"text"}
            placeholder="productDescription"
            onChange={(e) => {
              setProductDescription(e.target.value);
            }}
          />
          <select
            name="productDisponibilite"
            id="productDisponibilite"
            onChange={(e) => setProductDisponibilite(e.target.value)}
          >
            <option value="">Select Disponibilité</option>
            <option value="true">Disponible</option>
            <option value="false">Non disponible</option>
          </select>
          <select
            name="productCategory"
            id="productCategory"
            onChange={(e) => setProductCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="pc-portable">pc-portable</option>
            <option value="smartphone">smartphone</option>
          </select>
          <button type="button" onClick={handleAddProduct}>
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
}

import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

function SingleProductPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
       iPhone
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Title</label>
          <input type="text" name="Title" placeholder="John Doe" />
          <label>Price</label>
          <input type="number" name="price" placeholder="$999" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder='456' />
          <label>Color</label>
          <input type="text" name="color" placeholder="green" />
          <label>Size</label>
          <input type="text" name="size" />
          <label>Category</label>
          <select name="category" id="category">
            <option value="kitchen">kitchen</option>
            <option value="phone">phone</option>
          </select>
          <label>Description</label>
          <textarea type="text" name="description" rows={10} placeholder="decription" />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}

export default SingleProductPage;

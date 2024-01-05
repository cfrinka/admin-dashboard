import Link from 'next/link'
import Image from 'next/image'
import Search from '@/app/ui/dashboard/search/search'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import styles from '@/app/ui/dashboard/products/products.module.css'

function ProductsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product" />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  height={40}
                  width={40}
                  alt=""
                  className={styles.productImage}
                />
                iPhone
              </div>
            </td>
            <td>This is a description</td>
            <td>$999</td>
            <td>13.02.2023</td>
            <td>72</td>
            <td>
              <div className={styles.buttonsContainer}>
              <Link href='/dashboard/products/test'>
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <Link href='/'>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default ProductsPage
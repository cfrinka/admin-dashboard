import { addUser } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUsers/addUsers.module.css";

function AddUsersPage() {
  return (
    <div className={styles.container}>
      <form className={styles.form} action={addUser}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input type="password" placeholder="password" name="password" required />
        <input type="phone" placeholder="phone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>Is Admin?</option>
          <option value={true}>YES</option>
          <option value={false}>NO</option>
        </select>
        <select name="Is Active" id="Is Active">
          <option value={true}>Is Active?</option>
          <option value={true}>YES</option>
          <option value={false}>NO</option>
        </select>
        <textarea
          name="Address"
          id="Address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddUsersPage;

import "../css/register.css";

function App() {
  return (
    <form name="my" action="login.html" onsubmit="return final12()">
      <center>
        <table className="register">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>

          <tr>
            <td>
              <label for="name">
                <b>Company Name</b>
              </label>
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter Company name"
                name="uname"
                required
                onkeyup="val8()"
              />
            </td>
            <td>
              <p id="g"></p>
            </td>
          </tr>

          <tr>
            <td>
              <label for="email">
                <b>Email</b>
              </label>
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                required
                onkeyup="valemail()"
              />
            </td>
            <td>
              <p id="k"></p>
            </td>
          </tr>

          <tr>
            <td>
              <label for="psw">
                <b>Password</b>
              </label>
            </td>
            <td>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
                onkeyup="val()"
              />
            </td>
            <td>
              <p id="myloc"></p>
            </td>
          </tr>

          <tr>
            <td>
              <label for="psw-repeat">
                <b>Repeat Password</b>
              </label>
            </td>
            <td>
              <input
                type="password"
                placeholder="Repeat Password"
                name="pswrepeat"
                required
                onkeyup="validpass()"
              />
            </td>
            <td>
              <p id="rp"></p>
            </td>
          </tr>

          <tr>
            <td>
              <b>Gender</b>
            </td>
            <td>
              <input type="radio" name="gender" value="male" />
              <span>Male</span>
              <input type="radio" name="gender" value="female" checked />
              <span>Female</span>
              <input type="radio" name="gender" value="other" />
              <span>Others</span>
            </td>
          </tr>
          <p>Type of management needed</p>
          <tr>
            <td>
              <b>Inventory Management</b>
            </td>
            <td>
              <input type="radio" name="inventory" value="Yes" />
              <span>Yes</span>
              <input type="radio" name="inventory" value="No" />
              <span>No</span>
            </td>
          </tr>
          <tr>
            <td>
              <b>Payroll Management</b>
            </td>
            <td>
              <input type="radio" name="payroll" value="Yes" />
              <span>Yes</span>
              <input type="radio" name="payroll" value="No" />
              <span>No</span>
            </td>
          </tr>
          <tr>
            <td>
              <b>Tax Preparation</b>
            </td>
            <td>
              <input type="radio" name="tax" value="Yes" />
              <span>Yes</span>
              <input type="radio" name="tax" value="No" />
              <span>No</span>
            </td>
          </tr>

          <button type="submit">Register</button>
          <button type="reset">Reset</button>
        </table>
      </center>
    </form>
  );
}

export default App;

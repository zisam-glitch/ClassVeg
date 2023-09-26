import { Fragment } from "react";
import { sidebarToggle } from "../utils";
const SideBar = () => {
  return (
    <Fragment>
      <div className="form-back-drop" onClick={() => sidebarToggle()} />
      {/* Hidden Sidebar */}
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon" onClick={() => sidebarToggle()}>
            <span className="fa fa-times" />
          </div>
          <div className="white">
            <h4>Classveg Policies</h4>
            <ul>
              <li>
                <a href="/combined-policy">Combined Policy</a>
              </li>
              <li>
                <a href="/company-policy">Company Policy</a>
              </li>
              <li>
                <a href="social-value-policy">Social Value Policy</a>
              </li>
              <li>
                <a href="plastic-protection-and-preservation-policy">
                  Plastic Protection and Preservation Policy
                </a>
              </li>
            </ul>
          </div>

          {/*Social Icons*/}
          <div className="social-style-one">
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-pinterest-p" />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default SideBar;

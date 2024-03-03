export default function GreenBar() {
  return (
    // <header>
    //   <div className="navbar navbar-expand-md navbar-dark green-div">
    //     <div className="container-fluid">
    //       <div className="collapse navbar-collapse" id="navbarCollapse">
    //         <ul
    //           className="navbar-nav mb-2 mb-md-0 ms-auto"
    //           style={{ marginRight: "2%" }}
    //         >
    //           <li className="nav-item">
    //             <a className="nav-link active" aria-current="page" href="#">
    //               News
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link active" aria-current="page" href="#">
    //               Intranet
    //             </a>
    //           </li>
    //         </ul>
    //         <div className="btn-group lang-btn">
    //           <button type="button" className="btn bg-white">
    //             In English
    //           </button>
    //           <button
    //             type="button"
    //             className="btn bg-white dropdown-toggle dropdown-toggle-split"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //             data-bs-reference="parent"
    //           >
    //             <span className="visually-hidden">In English</span>
    //           </button>
    //           <ul className="dropdown-menu">
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Action
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Another action
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Something else here
    //               </a>
    //             </li>
    //             <li>
    //               <hr className="dropdown-divider" />
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Separated link
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
    <header>
      <div className="green-div p-2">
        <div className="container-fluid">
          <div className="row text-white justify-content-end">
            <div className="d-flex justify-content-end">
              <div className="p-2 mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                  News
                </a>
              </div>
              <div className="p-2 mx-2">
                <a className="nav-link active" aria-current="page" href="#">
                  Intranet
                </a>
              </div>
              <div className="mx-2">
                <div className="btn-group">
                  <button type="button" className="btn bg-white">
                    In English
                  </button>
                  <button
                    type="button"
                    className="btn bg-white dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-reference="parent"
                    style={{ minWidth: "90px" }}
                  >
                    <span className="visually-hidden">In English</span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

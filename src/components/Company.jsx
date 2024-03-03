import AnimatedNumbers from "react-animated-numbers";

export default function Company() {
  return (
    <section>
      <div className="p-5 align-items-center">
        <div className="row company-section">
          <div className="col-md-4 d-flex justify-content-center mb-2">
            <div
              className="card text-center company-img"
              style={{
                backgroundImage: `url(/images/rectangle_3_10.png)`,
              }}
            >
              <div className="card-body">
                <p className="tx-lg-img">Company</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center mb-2">
            <div
              className="card text-center company-img"
              style={{
                backgroundImage: `url(/images/rectangle_3_9.png)`,
              }}
            >
              <div className="card-body">
                <p className="tx-lg-img">Product</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center mb-2">
            <div
              className="card text-center company-img"
              style={{
                backgroundImage: `url(/images/rectangle_3_8.png)`,
              }}
            >
              <div className="card-body">
                <p className="tx-lg-img">Contact Us</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center icon-section">
          <div className="row col-md-4">
            <div className="col-md-4 pt-4">
              <img src="/images/business.png" alt="" />
            </div>
            <div className="col-md-8">
              <p className="tx-lg">
                <AnimatedNumbers
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                  animateToNumber={3000}
                  fontStyle={{
                    fontSize: 60,
                    fontWeight: 50,
                  }}
                ></AnimatedNumbers>
              </p>
              <p className="tx-sm">Clients</p>
            </div>
          </div>
          <div className="row col-md-3">
            <div className="col-md-4 pt-4">
              <img src="/images/face.png" alt="" />
            </div>
            <div className="col-md-8">
              <p className="tx-lg">
                <AnimatedNumbers
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                  animateToNumber={180}
                  fontStyle={{
                    fontSize: 60,
                    fontWeight: 50,
                  }}
                ></AnimatedNumbers>
              </p>
              <p className="tx-sm">Employees</p>
            </div>
          </div>
          <div className="row col-md-5">
            <div className="col-md-4 pt-4">
              <img src="/images/public.png" alt="" />
            </div>
            <div className="col-md-8">
              <p className="tx-lg">
                <AnimatedNumbers
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                  })}
                  animateToNumber={10000}
                  fontStyle={{
                    fontSize: 60,
                    fontWeight: 50,
                  }}
                ></AnimatedNumbers>
              </p>
              <p className="tx-sm">Daily Users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Toast } from "../utils/toastSweetAlert";

export default function NewsLetter() {
  const handleSubmit = () => {
    Toast.fire({
      icon: "success",
      title: "You have subscribed to the newsletter successfully",
    });
  };
  return (
    <section className="container d-flex justify-content-center align-items-center mb-5 mt-5">
      <div className="text-center">
        <div className="mb-5">
          <h2>Subscribe to our newsletter</h2>
          <p>
            Follow our stories and get the latest promotional news about our
            products and events.
          </p>
        </div>
        <div className="row">
          <div className="col-md-9 p-2">
            <input
              className="form-control form-control-lg"
              placeholder="Your Email Address"
            />
          </div>
          <div className="col-md-3 p-2">
            <button
              onClick={handleSubmit}
              className="btn btn-success btn-block btn-green"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

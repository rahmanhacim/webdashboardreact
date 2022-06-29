import Swall from "sweetalert2";

interface error {
  status: string;
  message: string;
  data: any;
}

interface swall {
  title: string;
  type: string;
}

export const errorHandler = (error) => {
  const errorHandler = new Box(error);
  errorHandler.showError();
}

export class Box extends Error {
  error: error;
  #swall: swall;

  constructor(err) {
    super();
    this.error = err
    this.#swall = {
      title: "Perhatian",
      type: "warning",
    };
  }

  setError(err) {
    this.error = err;
  }

  showError() {
    const errorCode = ["500", "502", "401"];
    if (errorCode.includes(this.error.status)) {
      this.#swall.title = "Terjadi Kesalahan";
      this.#swall.type = "error";
    }

    Swall.fire({
      title: this.#swall.title,
      html: this.error.message || "Terjadi Kesalahan. Silakan coba kembali!",
      confirmButtonText: this.error.status === "408" ? "Muat ulang" : "OK",
      allowOutsideClick: false,
    })
    .then((result) => {
      if (result) {
        if (
          this.error.status === "401" ||
          (this.error.data && this.error.data.status === "401")
        ) {
          window.location.reload();
        } else if (
          this.error.status === "408" ||
          (this.error.data && this.error.data.status === "408")
        ) {
          window.location.reload();
        }
      }
    });
  }
}

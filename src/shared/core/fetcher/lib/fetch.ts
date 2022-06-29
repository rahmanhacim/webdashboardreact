export default class Fetch {
  #baseURL: string;
  #headers: any;
  #timeout: number;
  instance: any;

  constructor() {
    this.#headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Accept: "application/json, text/plain, */*",
    };
    this.#timeout = 5000
    this.instance = this // make it same with axios lib
  }

  // Getter & Setter
  setBaseURL(baseUrl) {
    this.#baseURL = baseUrl;
  }

  setTimeout(timeout) {
    this.#timeout = timeout;
  }

  setHeaders(headers) {
    this.#headers = { ...this.#headers, ...headers };
  }

  // Request Processor
  // Need to create get, post, put, delete, & patch aliases to comply with class Fetcher
  get(url) {
    return this.request(`${this.#baseURL}${url}`, {
      method: "GET",
    })
  }

  post(url, data) {
    const config = {
      method: "POST",
      body: JSON.stringify(data)
    }
    return this.request(`${this.#baseURL}${url}`, config)
  }

  put(url, data) {
    const config = {
      method: "PUT",
      body: JSON.stringify(data)
    }
    return this.request(`${this.#baseURL}${url}`, config)
  }

  delete(url) {
    const config = {
      method: "DELETE"
    }
    return this.request(`${this.#baseURL}${url}`, config)
  }

  patch(url, data) {
    const config = {
      method: "PATCH",
      body: JSON.stringify(data)
    }
    return this.request(`${this.#baseURL}${url}`, config)
  }

  request(uri, options = {}) {
    
    const config = { 
      ...options, 
      headers: this.#headers, 
    };
    
    // return fetch(uri, config)
    const time = this.#timeout;
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(
          new Error("Gagal memuat, periksa koneksi internet anda.")
        );
      }, time);

      fetch(uri, config)
        .finally(() => clearTimeout(timeout))
        .then((response) => {
          // if (!response.ok) reject(console.log("fetch lib request promise : ", response));
          resolve(response.json());
        })
        .catch((err) => reject(err));
    });
  }
}

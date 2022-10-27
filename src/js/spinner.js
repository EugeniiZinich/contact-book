export default class Spinner {
  constructor({ selector }) {
    this.refs = this.getRefs(selector);
  }

  getRefs(selector) {
    const refs = {};
    refs.spinner = document.querySelector(selector);

    return refs;
  }

  enable() {
    this.refs.spinner.classList.add('is-hidden');
  }

  disable() {
    this.refs.spinner.classList.remove('is-hidden');
  }
}

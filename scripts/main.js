document.addEventListener('DOMContentLoaded', function() {
  const main = new Main();
});

class Main {
  constructor() {
    this._observers = [];
    this._init();
  }
  set observers(val) {
    this._observers.push(val);
  }
  get observers() {
    return this._observers;
  }
  _init() {
    this._scrollInit();
  }
  _inviewAnimation(el, inview) {
    if(inview) {
      el.classList.add('inview');
    } else {
      el.classList.remove('inview');
    }

  }
  _scrollInit() {
    this.observers = new ScrollObserver('.io-trigger', this._inviewAnimation, {once: false});
  }
}

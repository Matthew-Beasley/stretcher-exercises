
  class Slack {
    constructor({ workspace }) {
      this.workspace = workspace;
      this.listeners = {};
    }
    getChannel(type) {
      this.listeners[type] = this.listeners[type] || [];
      return this.listeners[type];
    }
    sub(type, fn) {
      this.getChannel(type).push(fn);
      return () => {
        delete this.listeners[type];
      }
    }
    pub(type, msg) {
      this.getChannel(type).forEach(listener => listener(`${this.workspace} - ${type} - ${msg}`))
    }
  }
  const fsa = new Slack({ workspace: 'FSA' });
  const google = new Slack({ workspace: 'Google' });

  google.sub('#jokes', (message) => console.log(message));

  google.pub('#jokes', 'What do you call a grandfather clock? An old timer!')

  fsa.sub('2001-FLEX', (message) => {
    console.log(message)
  });

  const unsubscribe = fsa.sub('#general', (message) => {
    console.log(message)
  });

  fsa.pub('2001-FLEX', 'stretch is open');
  fsa.pub('#general', 'hello there!');
  fsa.pub('#general', 'hello there for the second time!!');
  unsubscribe();
  fsa.pub('#general', 'hello there for the third time!!');

  /*
  Google - #jokes - What do you call a grandfather clock? An old timer!
  FSA - 2001-FLEX - stretch is open
  FSA - #general - hello there!
  */


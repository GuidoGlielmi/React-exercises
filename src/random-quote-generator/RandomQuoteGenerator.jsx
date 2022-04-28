import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import styles from './RandomQuoteGenerator.module.css';
import switchFadeOutInStyles from '../shared/transitions/switch-fade-out-in/switchFadeOutIn.module.css';
import { QuotesContext } from '../contexts/RandomQuotes';
import { Link, Outlet } from 'react-router-dom';
export class RandomQuoteGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuote: { quote: '', author: '' },
      quoteTransition: true,
      currentBackground: this.getRandomColor(),
    };
    this.newQuote = this.newQuote.bind(this);
  }
  getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  componentDidUpdate() {
    this.setState((ps) => {
      if (!ps.quotes[0]) {
        ps.quotes = this.context.quotes;
        const randomIndex = Math.floor(Math.random() * ps.quotes.length);
        ps.selectedQuote = this.context.quotes[randomIndex];
        this.context.setSelectedIndex(randomIndex);
        return ps;
      }
    });
  }
  newQuote() {
    this.setState((ps) => {
      const randomIndex = Math.floor(Math.random() * ps.quotes.length);
      this.context.setSelectedIndex(randomIndex);
      return {
        selectedQuote: ps.quotes[randomIndex],
        currentBackground: this.getRandomColor(),
        quoteTransition: !ps.quoteTransition,
      };
    });
  }
  render() {
    return (
      <div className={styles.background}>
        <SwitchTransition>
          {/* SwitchTransition is triggered when the key in the CSSTransition component changes. It simply triggers the exit after the enter. */}
          <CSSTransition
            key={this.state.quoteTransition}
            timeout={{ appear: 1400, enter: 700, exit: 700 }}
            appear={true}
            classNames={{ ...switchFadeOutInStyles }} //separate folder with the transitions classes, without the specific name prefix (start with appear, enter or exit)
          >
            <div
              className={styles.content}
              id='quote-box'
              style={{ background: this.state.currentBackground }}
            >
              <div className={styles.quoteContainer}>
                <div className={styles.quote}>
                  <p className={styles.quoteText} id='text'>
                    <i className={'fa fa-quote-left ' + styles.quoteImg} />
                    {this.state.selectedQuote.quote}
                  </p>
                </div>
                <p className={styles.author} id='author'>
                  - {this.state.selectedQuote.author}
                </p>
              </div>
              <div className={styles.quoteButtons}>
                <div className={styles.social}>
                  <button>
                    <a
                      href={
                        'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
                        encodeURIComponent(
                          '"' +
                            this.state.selectedQuote.quote +
                            '" ' +
                            this.state.selectedQuote.author,
                        )
                      }
                      target='_blank'
                      rel='noreferrer'
                    >
                      <i className='fa fa-twitter'></i>
                    </a>
                  </button>
                  <button>
                    <a
                      href={
                        'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
                        encodeURIComponent(this.state.selectedQuote.author) +
                        '&content=' +
                        encodeURIComponent(this.state.selectedQuote.quote) +
                        '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
                      }
                      target='_blank'
                      rel='noreferrer'
                    >
                      <i className='fa fa-tumblr'></i>
                    </a>
                  </button>
                </div>
                <button onClick={this.newQuote}>New quote</button>
                <Link to='show-index'>Show index</Link>
                {/* Without '/' at the begging, it appends the string to the current path */}
              </div>
            </div>
          </CSSTransition>
        </SwitchTransition>
        <Outlet /> {/*this allows to aggregate the child into the parent route component*/}
      </div>
    );
  }
}
RandomQuoteGenerator.contextType = QuotesContext;

/* 
import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './RandomQuoteGenerator.css';
export class RandomQuoteGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuote: { quote: '', author: '' },
      quoteTransition: true,
      currentBackground: this.getRandomColor(),
    };
    this.newQuote = this.newQuote.bind(this);
  }
  componentDidMount() {
    const getQuotes = async () => {
      const rawQuotes = await fetch(
        'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
      );
      const quotes = await rawQuotes.json();
      this.setState({
        quotes: quotes.quotes,
        selectedQuote: quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)],
      });
    };
    getQuotes();
  }
  getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  newQuote() {
    this.setState((ps) => {
      const randomIndex = Math.floor(Math.random() * ps.quotes.length);
      return {
        selectedQuote: ps.quotes[randomIndex],
        quoteTransition: true,
        currentBackground: this.getRandomColor(),
      };
    });
  }
  render() {
    return (
      <div className='background'>
        <SwitchTransition>
          <CSSTransition key={''} timeout={10} classNames='quote'>
            <div></div>
          </CSSTransition>
        </SwitchTransition>
        <CSSTransition
          // ----------------------> https://easings.net/ <--------------------------
          in={this.state.quoteTransition} // starts as true, the button sets it to false, and when exited, it's set to true again
          onExited={this.newQuote}
          timeout={{ appear: 1400, enter: 700, exit: 700 }} // unmounting time (if unmonted after finishing). Transition time can be lower NOT higher
          appear={true} // adds classes on first mount
          // unmountOnExit={true}
          // mountOnEnter={true}
          classNames='quote'
        >
          <div
            className='content'
            id='quote-box'
            style={{ background: this.state.currentBackground }}
          >
            <div className='quoteContainer'>
              <div className='quote'>
                <p className='quoteText' id='text'>
                  <i className='fa fa-quote-left quoteImg' /> {this.state.selectedQuote.quote}
                </p>
              </div>
              <p className='author' id='author'>
                - {this.state.selectedQuote.author}
              </p>
            </div>
            <div className='quoteButtons'>
              <div className='social'>
                <button>
                  <a
                    href={
                      'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
                      encodeURIComponent(
                        '"' +
                          this.state.selectedQuote.quote +
                          '" ' +
                          this.state.selectedQuote.author,
                      )
                    }
                  >
                    <i className='fa fa-twitter'></i>
                  </a>
                </button>
                <button>
                  <a
                    href={
                      'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
                      encodeURIComponent(this.state.selectedQuote.author) +
                      '&content=' +
                      encodeURIComponent(this.state.selectedQuote.quote) +
                      '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
                    }
                  >
                    <i className='fa fa-tumblr'></i>
                  </a>
                </button>
              </div>
              <button onClick={() => this.setState({ quoteTransition: false })}>New quote</button>
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  }
}
*/

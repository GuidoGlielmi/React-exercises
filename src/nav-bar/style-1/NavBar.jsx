import { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import styles from './NavBar.module.css';
import leftUnfoldStyles from '../../shared/transitions/left-unfold/left-unfold.module.css';
import { RoutesContext } from '../../contexts/Routes';
export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { displayed: false };
  }
  render() {
    return (
      <>
        <CSSTransition
          in={this.state.displayed}
          timeout={1000}
          classNames={{ ...leftUnfoldStyles }}
        >
          <nav className={styles.nav}>
            <div className={styles.linkListContainer}>
              <ul className={styles.linkList}>
                {this.context.map((rc, i) => {
                  return (
                    <li key={i} className={styles.linkElement}>
                      <NavLink
                        style={({ isActive }) => ({ color: isActive ? 'red' : '' })}
                        className={styles.link}
                        to={rc.path}
                      >
                        {rc.linkName}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <button
              onClick={() => this.setState((ps) => ({ displayed: !ps.displayed }))}
              className={styles.displayButton}
            >
              Display NavBar
            </button>
          </nav>
        </CSSTransition>
        <Outlet />
      </>
    );
  }
}
NavBar.contextType = RoutesContext;

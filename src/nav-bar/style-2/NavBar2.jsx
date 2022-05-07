import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import styles from './NavBar2.module.css';
import leftUnfoldStyles2 from '../../shared/transitions/left-unfold/left-unfold2.module.css';
import { routesContext } from '../../contexts/RoutesContext';
export default class NavBar2 extends Component {
  constructor(props) {
    super(props);
    this.state = { displayed: false };
  }
  render() {
    return (
      <>
        <nav className={styles.nav}>
          <CSSTransition
            in={this.state.displayed}
            timeout={1000}
            classNames={{ ...leftUnfoldStyles2 }}
            // unmountOnExit
          >
            <div className={styles.linkListContainer}>
              <ul className={styles.linkList}>
                {this.context.map((rc, i) => {
                  return (
                    <li key={i} className={styles.linkElement}>
                      <NavLink
                        style={(obj) => {
                          //console.log(obj); //isActive is the only property
                          return { color: obj.isActive ? 'red' : '' };
                        }}
                        //<p style={props.style(obj)}>...</p>
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
          </CSSTransition>
          <button
            onClick={() => this.setState((ps) => ({ displayed: !ps.displayed }))}
            className={styles.displayButton}
          >
            Display NavBar
          </button>
        </nav>
        <Outlet />
      </>
    );
  }
}
NavBar2.contextType = routesContext;

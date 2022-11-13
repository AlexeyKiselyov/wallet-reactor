import { NavLink } from 'react-router-dom';
// ====================================================

export const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/home" end>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/diagram">Statistics</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

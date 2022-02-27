import React from 'react';
import './_Header.scss';

type Props = {
  children: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
};

function Header({ children }: Props): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header-nav">{children}</div>
      </div>
    </header>
  );
}

export default Header;

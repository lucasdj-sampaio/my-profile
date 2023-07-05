import styled from 'styled-components';

interface BarColorProp {
  scrooled: boolean;
}

export const Bar = styled.div<BarColorProp>`
  background-color: ${p => p.scrooled ? 'var(--background)' : 'transparent'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  position: fixed;
  width: 100%;
  left: 0;
  padding: 5px 50px;
  z-index: 2;
  box-shadow: ${p => p.scrooled ? '0 2px 2px 2px rgba(0,0,0,0.4)' : 'transparent'};

  label {
    color: var(--textColor);
    font-size: 14px;
    margin-left: 10px;
  }
`;

export const UserPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;

  li {
    display: inline;
  }

  a {
    color: var(--textColor);
    font-size: 14px;
    margin-right: 12px;
    outline: none;
  }
`;

import styled from "styled-components";

export const NavPage = styled.nav`
  padding: 1rem;
  background-color: #B7C3AD;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: #243A24;
    text-decoration: none;
    margin-right: 1rem;
  }
  .logo {
    font-weight: 400;
    color: #243A24;
    font-size: 1.5rem;
    span {
      font-weight: bold;
      color: #243A24;
    }
  }

  .menu {
    text-transform: uppercase;
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;

    a {
      color: #243A24;
      font-size: 2rem;
      display: block;
      position: relative;
      &::after {
        content: "";
        background-color: green;
        position: absolute;
        left: 0;
        top: calc(100% + 4px);
        width: 100%;
        height: 2px;
        opacity: 0;
        transition: opacity 0.8s;
      }
      .selected::after {
        opacity: 0;
      }
      &:hover::after{
        opacity: 1;
      }
      &:hover {
        color: green;
        transition: all 0.4s ease;
      }
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;

      a {
        font-size: 1rem;
        color: #243A24;
        display: inline;
        font-weight: 500;
      }
      display: block;
    }
    
  }

  .menu.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      color: white;
      font-size: 2rem;
      margin-top: 1rem;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;
  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

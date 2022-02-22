import React from 'react';
import styled from 'styled-components';
import { Grid } from '../elements';
import Category from './Category';

import { history } from '../redux/configureStore';

const NaviBottom = () => {
  const [searchWord, setSearchWord] = React.useState('');

  function onKeyPress(e) {
    if (e.key === 'Enter') {
      console.log(searchWord);
      window.location.replace(`discover?query=${searchWord}`);
    }
  }

  return (
    <React.Fragment>
      <NaviTopLayout>
        <Grid is_flex>
          <Grid>
            <CategoryBar></CategoryBar>
          </Grid>
          <Search>
            <input
              type="text"
              placeholder="검색어를 입력해주세요."
              onKeyPress={onKeyPress}
              onChange={(e) => {
                setSearchWord(e.target.value);
              }}
            />
            <Image>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.9979 32.9819C27.3165 34.9694 23.9582 36.0788 20.3642 35.9089C12.0892 35.5176 5.69811 28.4922 6.08938 20.2171C6.48064 11.9421 13.5061 5.55107 21.7811 5.94234C30.0561 6.33361 36.4472 13.359 36.0559 21.6341C35.889 25.1636 34.5152 28.3505 32.3522 30.8144L39.4908 38.6856L37.1205 40.8353L29.9979 32.9819ZM32.6597 21.4735C32.3571 27.8728 26.9241 32.8152 20.5248 32.5127C14.1254 32.2101 9.183 26.7771 9.48558 20.3777C9.78816 13.9784 15.2212 9.03597 21.6205 9.33855C28.0199 9.64113 32.9623 15.0741 32.6597 21.4735Z"
                  fill="black"
                ></path>
              </svg>
            </Image>
          </Search>
        </Grid>
      </NaviTopLayout>
    </React.Fragment>
  );
};

const NaviTopLayout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 36px;
  max-width: 1160px;
`;

// const Category = styled.div`
//   margin: 0px 18px 0px 0px;
//   padding: 0px 6px;
//   font-size: 15px;
//   font-weight: 700;
//   cursor: pointer;
// `;

const CategoryBar = styled(Category)`
  font-weight: 600;
`;

const Search = styled.div`
  display: inline-flex;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  background-color: rgb(243 243 243);
  min-width: 30px;
  /* height: 36px; */
  padding: 5px 16px;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 260px;

  @media (max-width: 640px) {
    display: none;
  }

  input {
    background-color: rgb(243 243 243);
    border: none;
    font-size: 12px;
    line-height: 28px;
    letter-spacing: 0.02em;
  }
`;

const Image = styled.div`
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding-top: 5px;
  box-sizing: border-box;
  border: none;
  right: 10px;
`;

export default NaviBottom;

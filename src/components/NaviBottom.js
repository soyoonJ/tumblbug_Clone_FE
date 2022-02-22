import React from 'react';
import styled from 'styled-components';
import { Grid, Input, Text } from '../elements';
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

  input {
    background-color: rgb(243 243 243);
    border: none;
    font-size: 12px;
    line-height: 28px;
    letter-spacing: 0.02em;
  }
`;

export default NaviBottom;

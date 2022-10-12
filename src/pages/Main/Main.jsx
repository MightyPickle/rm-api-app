import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AllCards from '../../components/AllCards/AllCards';
import Input from '../../components/Input/Input';
import { getAllCharactersThunk, getByNameThunk } from '../../redux/actions/charactersAction';

export default function Main() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const [currPage, setCurrPage] = useState(1);

  const onScroll = (e) => {
    const userScrollHeight = e.target.documentElement.scrollTop + window.innerHeight;
    const windowBottomHeight = e.target.documentElement.scrollHeight;
    if (userScrollHeight === windowBottomHeight) {
      setCurrPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (!characters.length) {
      dispatch(getAllCharactersThunk(currPage));
    }
    window.addEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (input) {
      setCurrPage(1);
      dispatch(getByNameThunk({ currPage, input }));
    }
  }, [input]);

  useEffect(() => {
    if (input && currPage > 1) {
      dispatch(getByNameThunk({ currPage, input }));
    } else if (currPage > 1) {
      dispatch(getAllCharactersThunk(currPage));
    }
  }, [currPage]);

  return (
    <div className="main-container">
      <Input setInput={setInput} />
      <AllCards characters={characters} />
    </div>
  );
}

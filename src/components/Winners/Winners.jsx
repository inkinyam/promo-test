import "./Winners.scss";

import api from "../../utils/api";
import { useState } from "react";
import { useEffect } from "react";

export const Winners = () => {
  const [searchFormState, setSearchFormState] = useState({
    error: "",
    searchingText: "",
    isValid: false,
  });

  const [winners, setWinners] = useState([]);
  const [pages, setPages] = useState(null);
  const [isPaginationHide, setHidePagination] = useState(false);

  const getPageOfWinners = (page) => {
    api
      .getWinners(page)
      .then((data) => {
        setWinners(data.data.rows);
        setPages(data.data.paging);
      })
      .catch((err) => {
        console.log("Кажется произошла ошибка" + err);
      });
  };

  useEffect(() => {
    getPageOfWinners();
  }, []);

  const searchWinners = (number) => {
    api
      .searchWinners(number)
      .then((res) => {
        setWinners(res.data);
        setHidePagination(true);
      })
      .catch((err) => {
        console.log("Кажется произошла ошибка" + err);
      });
  };

  const handleInputChange = (e) => {
    setSearchFormState({
      ...searchFormState,
      error: "",
      [e.target.name]: e.target.value,
      isValid: e.target.closest("form").checkValidity(),
    });
  };

  const handleSubmitSearchingForm = (e) => {
    e.preventDefault();
    if (!searchFormState.isValid) {
      getPageOfWinners();
      setHidePagination(false);

      return setSearchFormState({
        ...searchFormState,
        error: "Введите корректный номер карты",
      });
      

    } else {
      let { searchingText } = searchFormState;
      searchWinners(searchingText);
    }
  };

  const formatCartNumbers = (cardNumber) => {
    cardNumber = String(cardNumber); 
    if (cardNumber.length < 20) { 
      return cardNumber;
    } else {
      return cardNumber.slice(0, 7) + '*****' + cardNumber.slice(12); 
    }
  }

  return (
    <section className="winners">
      <h2 className="winners__title">Победители</h2>
      <div className="winnerst__titlebox">
        <p className="winners__subtitle">
          Список победителей пакетов по 1500 баллов
        </p>

        <form
          className="winners__form"
          onSubmit={handleSubmitSearchingForm}
          noValidate >
          <input
            className = {`winners__input ${
              searchFormState.error && "winners__input_error"
            }`}
            placeholder = "Поиск по номеру карты"
            type = "text"
            name = "searchingText"
            id = "searchingText"
            pattern = "^[0-9]+$"
            required
            minLength = "0"
            value = {searchFormState.searchingText}
            onChange = {handleInputChange} />

          <button type="submit">
            <svg xmlns   = "http://www.w3.org/2000/svg"
              width   = "17"
              height  = "17"
              viewBox = "0 0 17 17"
              fill    = "none" >
              <circle cx="8.52759" cy="7.44824" r="6.29395" />
              <path d="M0.593506 15.7373L4.1897 11.8965" />
            </svg>
          </button>
          <span
            className={`winners__error ${
              searchFormState.error && "winners__error_show"
            }`}
          >
            {searchFormState.error}
          </span>
        </form>
      </div>

      {winners.length > 0 && (
        <ul className="winners__list">
          {winners.map((item, inx) => {
            return (
              <li className="winners__item" key={inx}>
                <p>{formatCartNumbers(item.cardNumber)}</p>
              </li>
            );
          })}
        </ul>
      )}

      {winners.length == 0 && (
        <div className="winners__notfind">
          <p>Ничего не нашлось</p>
        </div>
      )}

      {!isPaginationHide && (
        <ul className="winners__pagination">
          {pages &&
            [...Array(pages.total)].map((item, inx) => {
              let itemClassList =
                `${inx + 1}` === `${pages.current_page}`
                  ? "winners__pagination-item active"
                  : "winners__pagination-item";
              return (
                <li className={itemClassList} key={inx}>
                  <button
                    className="winners__pagination-button"
                    onClick={() => {
                      getPageOfWinners(inx + 1);
                    }}
                  >
                    {inx + 1}
                  </button>
                </li>
              );
            })}
        </ul>
      )}
    </section>
  );
};

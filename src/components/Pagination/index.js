import React from "react"
import propTypes from "prop-types"
import * as S from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => {
  return (
    <S.PaginationWrapper>
      {!isFirst && (
        <S.LinkPagination to={prevPage}>
          &#8592; página anterior
        </S.LinkPagination>
      )}
      <p>
        {currentPage} de {numPages}
      </p>
      {!isLast && (
        <S.LinkPagination to={nextPage}>
          próxima página &#8594;
        </S.LinkPagination>
      )}
    </S.PaginationWrapper>
  )
}

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination

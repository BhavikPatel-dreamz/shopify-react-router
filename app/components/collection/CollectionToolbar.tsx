import { useState } from "react";

interface Props {
  count: number;
  onGridChange?: (grid: number) => void;
}

export default function CollectionToolbar({ count, onGridChange }: Props) {
  const [grid, setGrid] = useState(4);

  const handleGridChange = (value: number) => {
    setGrid(value);
    onGridChange?.(value);
  };

  return (
    <div className="filter-top-bar">
      <div className="filter-top-bar-wrapper">
        <div className="filter-sort-item">
          {/* LEFT: FILTER */}
          {/* <div
            className="filter-facets filter-facets--desktop hidden"
            id="filter-facets-toggle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="9"
              fill="none"
              viewBox="0 0 17 10"
            >
              <path
                d="M1.35.369a.599.599 0 1 0 0 1.197h14.768a.599.599 0 0 0 0-1.197H1.35Zm2.594 4.59a.599.599 0 0 1 .599-.599h8.382a.599.599 0 0 1 0 1.198H4.543a.599.599 0 0 1-.599-.599Zm3.193 3.942a.599.599 0 0 1 .599-.599h1.996a.599.599 0 0 1 0 1.198H7.736a.599.599 0 0 1-.599-.6Z"
                fill="currentColor"
              ></path>
            </svg>
            Filter
            <span className="filter-facets--toggler-selected"></span>
          </div> */}
          <button className="flex items-center gap-2 text-sm font-medium">
            <span>☰</span>
            FILTER
          </button>

          <button className="flex items-center gap-2  filter-facets-toggler" id="filter-sort-toggle">
            <span>↕</span>
            SORT BY
          </button>
        </div>

        <div className="total-filter-product">
          <span className="sort-total-products">
            <span className="sort-total-products--count">{count}</span>
             &nbsp;Products
          </span>
        </div>

        {/* RIGHT: GRID TOGGLE */}
        <div className="result-grid-layout">
          <div className="slider-container">
            <div className="slider-container--inner">
              {/* 2 GRID */}
              <div className="slider--marker slider--marker--1 active">
                <svg
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.0792 1H1V19.2178H18.0792V1Z"
                    stroke="currentColor"
                    strokeWidth="0.910891"
                  ></path>
                </svg>
              </div>

              {/* 3 GRID */}
              <div className="slider--marker slider--marker--2">
                <svg
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.0792 1H1V19.2178H18.0792V1Z"
                    stroke="currentColor"
                    strokeWidth="0.910891"
                  ></path>
                  <line
                    x1="9.54001"
                    y1="1"
                    x2="9.54001"
                    y2="19.2178"
                    stroke="currentColor"
                    strokeWidth="1.13861"
                  ></line>
                </svg>
              </div>

              {/* 4 GRID */}
              <div className="slider--marker slider--marker--3">
                <svg
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.9991 1H0.919922V19.2178H17.9991V1Z"
                    stroke="currentColor"
                    strokeWidth="0.910891"
                  ></path>
                  <line
                    x1="9.45993"
                    y1="1"
                    x2="9.45993"
                    y2="19.2178"
                    stroke="currentColor"
                    strokeWidth="1.13861"
                  ></line>
                  <path
                    d="M0.920898 10.1094L18.0001 10.1094"
                    stroke="currentColor"
                    strokeWidth="1.13861"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

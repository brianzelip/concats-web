import Vue from 'vue';

export const SET_CSV = (state, payload) => {
  state.csv = payload;
};

export const SET_CSV_HEADERS = (state, payload) => {
  state.csvHeaders = payload;
};

export const RESET_CSV = state => {
  state.csv = '';
};

export const RESET_CSV_HEADERS = state => {
  state.csvHeaders = [];
};

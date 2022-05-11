import moment from "moment";

const Locale = window.navigator.userLanguage || window.navigator.language;
moment.locale(Locale);

var localeData = moment.localeData();
var format = localeData.longDateFormat("L");

function getDate(target) {
  return moment(target);
}

function getLocaleDate(target) {
  return moment(target).format(format);
}

function isGreaterThanNow(target) {
  return moment().diff(target) <= 0;
}

function isSmallerThanNow(target) {
  return moment().diff(target) >= 0;
}

function isValid(target) {
  return moment(target).isValid();
}

function getDurationBetweenDates(first, target) {
  return moment.duration(moment(first).diff(moment(target)));
}

function getDuration(target) {
  return moment.duration(target);
}

function parseDate(target) {
  return moment(target);
}

function formatDate(target, pattern = "") {
  return moment(target).format(pattern);
}

export default {
  getDate,
  isSmallerThanNow,
  isGreaterThanNow,
  getDuration,
  isValid,
  parseDate,
  formatDate,
  getLocaleDate,
  getDurationBetweenDates,
};

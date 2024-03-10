function ClassNames(...arg) {
  return arg.filter(Boolean).join(' ');
}

export default ClassNames;

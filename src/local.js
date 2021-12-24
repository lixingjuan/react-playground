const getUpperStr = (val) =>
  val.toLocaleUpperCase().split(" ").slice(0, 3).join("_").replaceAll(",", "");

const demo = (arr) => {
  const enRes = arr.reduce(
    // eslint-disable-next-line no-return-assign
    (tol, [zhStr, enStr]) =>
      // eslint-disable-next-line no-param-reassign
      (tol += `"${getUpperStr(enStr)}": "${enStr}",
  `),
    ""
  );
  const zhRes = arr.reduce(
    // eslint-disable-next-line no-return-assign
    (tol, [zhStr, enStr]) =>
      // eslint-disable-next-line no-param-reassign
      (tol += `"${getUpperStr(enStr)}": "${zhStr}",
  `),
    ""
  );

  console.log(`
  ${enRes}

  ${zhRes}
  `);
};

const needTranslateArr = [["全选子行业", "Select All Sub-Industries"]];
demo(needTranslateArr);

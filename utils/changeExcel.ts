export const changeExcel = (arr: any[][]): any => {
  const result: any = [];
  let item: any = {};
  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr[1].length; j++) {
      item = { ...item, ...{ [String(arr[0][j])]: arr[i][j]?.text ? arr[i][j].text : arr[i][j] } };
    }
    result.push(item);
  }
  return result;
};

export const changeExcelKonva = (arr: any[][]): any => {
  const result: any = [];
  let item: any = {};
  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr[1].length; j++) {
      item = { ...item, ...{ [String(arr[0][j])]: arr[i][j]?.text ? arr[i][j].text : arr[i][j] } };
    }
    result.push(item);
  }
  return result;
};

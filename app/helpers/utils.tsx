/**
 * App utilites
 * @format
 */

/**
 * Convert Json to FormData
 * @param {*} param
 * @returns
 */
export const toFormData = (param = {}) => {
  let formData = new FormData();
  Object.entries(param).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return formData;
};

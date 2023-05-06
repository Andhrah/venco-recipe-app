/**
 * Generates action types
 * @param {string} name A unique identifier for the action type
 * @return {object} The generated action type
 */
const typeGenerator = (name: string) => ({
  loading: `${name}_LOADING`,
  success: `${name}_SUCCESS`,
  failure: `${name}_FAILURE`,
  saveFormData: `${name}_SAVE_FORM_DATA`,
});

export const action = (type: string, data: object) => ({ type, data });

export default typeGenerator;

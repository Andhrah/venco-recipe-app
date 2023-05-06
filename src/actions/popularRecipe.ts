import request from '../utils/request';
import typeGenerator, { action } from './typeGenerator';

export const recommendedMoviesType = typeGenerator('POPULAR');

/**
 * This action gets all listings and populates the store
 *
*/
export const listings = () => async (dispatch) => {
  dispatch(action(recommendedMoviesType.loading, true));
  try {
    const response = await request({
      route: 'top_rated',
    });
    const data = response.data;
    dispatch(action(recommendedMoviesType.success, data));
    dispatch(action(recommendedMoviesType.loading, false));

  } catch (err) {
    dispatch(action(recommendedMoviesType.failure, err.response));
    dispatch(action(recommendedMoviesType.loading, false));
  }
};

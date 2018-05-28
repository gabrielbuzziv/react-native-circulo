export const Types = {
  GET_LIST_REQUEST: 'products/GET_LIST_REQUEST',
  GET_LIST_SUCCESS: 'products/GET_LIST_SUCCESS',
  GET_LIST_FAILURE: 'products/GET_LIST_FAILURE',
};

const initialState = {
  data: [],
  loading: true,
  refreshing: false,
  error: null,
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case Types.GET_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.products,
        error: null,
      };
    case Types.GET_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export const Creators = {
  getProductListRequest: () => ({
    type: Types.GET_LIST_REQUEST,
  }),

  getProductListSuccess: products => ({
    type: Types.GET_LIST_SUCCESS,
    payload: { products },
  }),

  getProductListFailure: error => ({
    type: Types.GET_LIST_FAILURE,
    payload: { error },
  }),
};

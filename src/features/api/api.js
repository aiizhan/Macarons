import { apiRoot } from './../../app/api';


//   export const api = {
//     getSets: () => apiRoot.get('/giftsets/'),
//     getSetById: (id) => apiRoot.get(`/giftsets/${id}`),
//     getReadyk:() =>apiRoot.get('/api/readykits/'),
//     getWeddings:() =>apiRoot.get('/weddings/'),
//     getAssemble:() => apiRoot.get('/sweetdays/'),
//     getAssemById: (id) => apiRoot.get(`/sweetdays/${id}`),
//     getSales: () => apiRoot.get('/products/'),
//     getPopularSets: (id) => apiRoot.get(`/giftsets/${id}`),
//     getNews:() => apiRoot.get('/news/'),
//     getMac:()=> apiRoot.get('/api/select-the-quantity/'),
//     assemblesetsProduct:()=> apiRoot.get('/api/choose-your-tastes/'),
//     fetchAssemblesetById:()=>apiRoot.get('/api/additional/'),


//     createProduct: (productData) => apiRoot.post('/products/', productData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },

export const api = {
  // GET Requests
  getSets: () => apiRoot.get('/giftsets/'),
  getSetById: (id) => apiRoot.get(`/giftsets/${id}`),
  getReadyKits: () => apiRoot.get('/api/readykits/'),
  getWeddings: () => apiRoot.get('/weddings/'),
  getAssembles: () => apiRoot.get('/sweetdays/'),
  getAssembleById: (id) => apiRoot.get(`/sweetdays/${id}`),
  getSales: () => apiRoot.get('/products/'),
  getPopularSetById: (id) => apiRoot.get(`/giftsets/${id}`),
  getNews: () => apiRoot.get('/news/'),
  getMacOptions: () => apiRoot.get('/api/select-the-quantity/'),
  getAssembleSetsProducts: () => apiRoot.get('/api/choose-your-tastes/'),
  fetchAssembleSetById: () => apiRoot.get('/api/additional/'),

  // POST Requests
  createProduct: (productData) =>
    apiRoot.post('/products/', productData, {
      headers: { 'Content-Type': 'multipart/form-data' },

    }),

  createPopularSet: (productData) =>
    apiRoot.post('/giftsets/', productData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),

  createNews: (newsData) =>
    apiRoot.post('/news/', newsData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),

  createOrder: (orderData) =>
    apiRoot.post('/orders/', orderData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),


    createUser: (userData) => apiRoot.post('register/', JSON.stringify(userData), {
            headers: {
                'Content-Type': 'application/json',
            },
          }),  
        
          loginUser: (userData) => apiRoot.post('login/', userData, {
            headers: {
                'Content-Type': 'application/json',}
          }),
        
          resetPassword: (data) => apiRoot.post('reset-password/', data, {
            headers: {
              'Content-Type': 'application/json',
            },
          }),
        
          resetPasswordVerify: (reset_code) => apiRoot.post('reset-password-verify/', reset_code, {
            headers: {
                'Content-Type': 'application/json',
            },
          }),
        
          setNewPassword: ({ reset_code, password, confirm_password }) =>
            apiRoot.post(
                'set-password/',
                { reset_code, password, confirm_password },
          ),
};


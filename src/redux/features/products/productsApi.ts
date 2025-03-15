import { baseApi } from "../../api/baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Create food item
    createProdut: builder.mutation({
      query: (productInfo) => ({
        url: "/product",
        method: "POST",
        body: productInfo,
      }),
      invalidatesTags: ["product"], // নতুন item যোগ করার পর Food ট্যাগ মেয়াদোত্তীর্ণ হবে
    }),
    findAllProduct: builder.query({
      query: ({ search, category, page, limit, filter, sorting }) => {
        // Start the base URL
        let url = `/products?`;
    
        // Conditionally append each query parameter if it has a valid value
        if (search) url += `search=${search}&`;
        if (category) url += `category=${category}&`;
        if (filter) url += `filter=${filter}&`;
        if (sorting) url += `sorting=${sorting}&`;
        if (page) url += `page=${page}&`;
        if (limit) url += `limit=${limit}&`;
    
        // Remove the trailing '&' if any
        url = url.endsWith('&') ? url.slice(0, -1) : url;
    
        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["product"], // This will cache all product items
    }),
    

    // Find food item by ID
    findFlasSaleProducts: builder.query({
      query: () => ({
        url: `products/flashSale`,
        method: "GET",
      }),
        providesTags: ["product"], 
    }),
    // Find food item by ID
    findProductById: builder.query({
      query: (id) => ({
        url: `product/${id}`,
        method: "GET",
      }),
        providesTags: ["product"], 
    }),

    // Update food item
    updateProductById: builder.mutation({
      query: ({ id, ...foodInfo }) => ({
        url: `/product-update/${id}`,
        method: "PUT",
        body: foodInfo,
      }),
      invalidatesTags: ["product"], // নির্দিষ্ট item এবং সব Food item ক্যাশ মেয়াদোত্তীর্ণ করবে
    }),

    // Delete food item
    deleteFoodItem: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"], // মুছে ফেলা item এবং সব Food item ক্যাশ মেয়াদোত্তীর্ণ করবে
    }),
  }),
});

export const {
  useFindAllProductQuery,
  useCreateProdutMutation,
  useFindProductByIdQuery,
 useUpdateProductByIdMutation,
  useDeleteFoodItemMutation,
  useFindFlasSaleProductsQuery,

} = productsApi;

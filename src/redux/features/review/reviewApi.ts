import { baseApi } from "../../api/baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    addProductReview: builder.mutation({
      query: (body) => ({
        url: `review`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["review"], // নির্দিষ্ট item এবং সব Food item ক্যাশ মেয়াদোত্তীর্ণ করবে
    }),

 
  }),
});

export const {
 
  useAddProductReviewMutation
} = reviewApi;

import { baseApi } from "../../api/baseApi";


const categoryApi = baseApi.injectEndpoints({
    endpoints: (builder)=>({
        createCategory : builder.mutation({
            query: (categoryInfo)=>({
                url:'/category',
                method:'POST',
                body:categoryInfo,
            }),
           invalidatesTags:["Category"]
        }),
        getAllcategory: builder.query({
            query:()=>({
                url:'/category',
                method:'GET',
                
            }),
            providesTags:["Category"]
        }),
        getAllcategoryChildren: builder.query({
            query:()=>({
                url:'/category-children',
                method:'GET',
                
            }),
            providesTags:["Category"]
        }),

        
    })
})


export const {useCreateCategoryMutation,useGetAllcategoryQuery,useGetAllcategoryChildrenQuery}= categoryApi;
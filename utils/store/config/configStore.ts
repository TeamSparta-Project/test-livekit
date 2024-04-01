import { configureStore } from "@reduxjs/toolkit";
import info from "@/utils/store/modules/user";

export const store = configureStore({
  reducer: {
    info,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

import { Suspense } from "react";
import BlogDetailsClient from "./BlogDetailsClient";

const BlogDetailsPage = () => {
  return (
    <Suspense fallback={<div>Loading blog...</div>}>
      <BlogDetailsClient />
    </Suspense>
  );
};

export default BlogDetailsPage;
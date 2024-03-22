// import {allBlogs} from "contentlayer/generated";
import {allBlogs} from "../../.contentlayer/generated";
import FeaturePosts from "../components/Home/FeaturePosts";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import RecentPosts from "../components/Home/RecentPosts";

export default function Home() {
  console.log("allBlogs", allBlogs);
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturePosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  )
}

import usePosts from "@/hooks/usePosts";
import PostItem from "./PostItme";

interface PostFeedProps {
    userId?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
    const { data: post = [] } = usePosts(userId);

    return ( 
        <>
            {post.map((post: Record<string, any>) => (
                <PostItem
                userId={userId}
                key={post.id}
                data={post}
                />
            ))}
        </>
    );
}
 
export default PostFeed;
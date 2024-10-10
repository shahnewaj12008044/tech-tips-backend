/* eslint-disable @typescript-eslint/no-explicit-any */
import { Types } from 'mongoose';
import QueryBuilder from '../../builder/QueryBuilder';
import { User } from '../user/user.model';
import { postSeachableFields } from './post.constant';
import { IPost } from './post.interface';
import { Post } from './post.model';

//creating post
const createPostIntoDB = async (payload: any, authorId: any) => {
  const post = { ...payload, authorId };

  const result = await Post.create(post);

  const user = await User.findById(authorId);

  if (!user) {
    throw new Error('User not found');
  }
  return result;
};

//get single post
const getSinglePostFromDB = async (id: string) => {
  const result = await Post.findById(id)
    .populate('authorId')
    .populate({
      path: 'comments',
      populate: {
        path: 'userId',
      },
    });
  return result;
};
//getting all post
const getAllPostFromDB = async (query: Record<string, unknown>) => {
  const postQuery = new QueryBuilder(
    Post.find().populate('comments').populate('authorId'),
    query,
  )
    .search(postSeachableFields)
    .filter()
    .sort();

  const result = await postQuery.modelQuery;
  return result;
};

//updating post
const updatePostIntoDB = async (id: string, payload: Partial<IPost>) => {
  const result = await Post.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

//deleting post
const deletePostFromDB = async (id: string) => {
  const result = await Post.findByIdAndDelete(id);
 
  return result;
};

//getting my post 
const getMyPostIntoDB = async (email: string) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('User not found');
  }

  const result = await Post.find({ authorId: user._id })
    .populate('authorId')
    .populate('comments');

  // Return the posts
  return result;
};

//down vote
const downvotePostDB = async (
  postId: string,
  userId: string,
  cancel = false,
) => {
  const post = await Post.findById(postId);
  if (!post) {
    throw new Error('Post not found');
  }

  if (cancel) {
    // Cancel the downvote
    await Post.findByIdAndUpdate(postId, {
      $pull: { downvotes: new Types.ObjectId(userId) },
    });
  } else {
    if (post?.downvotes?.includes(new Types.ObjectId(userId))) {
      throw new Error('You have already downvoted this post');
    }

    await Post.findByIdAndUpdate(postId, {
      $addToSet: { downvotes: new Types.ObjectId(userId) },
      $pull: { upvotes: new Types.ObjectId(userId) },
    });
  }

  return Post.findById(postId);
};

//upvotes
const upvotePostDB = async (postId: string, userId: string, cancel = false) => {
  const post = await Post.findById(postId);
  if (!post) {
    throw new Error('Post not found');
  }

  if (cancel) {
    // Cancel the upvote
    await Post.findByIdAndUpdate(postId, {
      $pull: { upvotes: new Types.ObjectId(userId) },
    });
  } else {
    // Add the upvote and remove the downvote if it exists
    if (post?.upvotes?.includes(new Types.ObjectId(userId))) {
      throw new Error('You have already upvoted this post');
    }

    await Post.findByIdAndUpdate(postId, {
      $addToSet: { upvotes: new Types.ObjectId(userId) },
      $pull: { downvotes: new Types.ObjectId(userId) },
    });
  }

  return Post.findById(postId);
};



export const PostServices = {
  createPostIntoDB,
  getAllPostFromDB,
  getSinglePostFromDB,
  updatePostIntoDB,
  deletePostFromDB,
  getMyPostIntoDB,
  upvotePostDB,
  downvotePostDB,
};

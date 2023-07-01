import { toast } from "react-hot-toast"

import { apiConnector } from "../apiconnector"
import { postEndpoints } from "../apis"
import { setFeed, setFeedLoading } from "../../slices/feedSlice"
import { profileEndpoints } from "../apis"
import { async } from "q"

const { CREATE_POST_API,
  GET_ALL_POST_API,
  UPDATE_POST_API,
  DELETE_POST_API,
  LIKE_POST_API,
  UNLIKE_POST_API } = postEndpoints
const { SEARCH_USER_API } = profileEndpoints
export const createPost = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", CREATE_POST_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("Create Post API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Create Post")
    }
    toast.success("User Post Created")
    result = response?.data?.data
  } catch (error) {
    console.log("Create Post API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export function getAllPost(token){
return async (dispatch) => {
    dispatch(setFeedLoading(true))
    let result = []
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector(
        "GET",
        GET_ALL_POST_API,
        null,
        {
          Authorization: `Bearer ${token}`,
        }
      )
      console.log("INSTRUCTOR COURSES API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch feed post")
      }
      result = response?.data
      dispatch(setFeed(result));
    } catch (error) {
      console.log("fetch post API ERROR............", error)
      toast.error(error.message)
    }

    toast.dismiss(toastId)
    dispatch(setFeedLoading(false))
    return result;
  }
}


export const deletePost = async (data, token) => {
  const toastId = toast.loading("Loading........")
  try {
    const response = await apiConnector("DELETE", DELETE_POST_API, data, {
      Authorization: `Bearer ${token}`,
    });
    console.log("Delete Post Api Response...............", response);
    if (!response?.data?.success) {
      throw new Error("Could not delete Post");
    }
    toast.success("Post deleted Successfully")
    toast.dismiss(toastId)
    return response?.data?.data;
  }
  catch (error) {
    console.log("Delete Post Api Error ........", error)
    toast.error(error.message)
  }
}


export const updatePost = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("PUT", UPDATE_POST_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("UPDATE Post API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update Post")
    }
    toast.success("User Post Updated")
    result = response?.data?.data
  } catch (error) {
    console.log("UPDATE Post API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}



export const searchUser = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("GET", SEARCH_USER_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("Search User API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not search User Profile")
    }
    response?.data?.data === [] ? (toast.success("No User found")) : (toast.success("User Found successfully"))

    result = response?.data?.data
  } catch (error) {
    console.log("User Searching API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const likePost = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", LIKE_POST_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("Like Post API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Like Post")
    }
    toast.success("Post Liked")
    result = response?.data?.data
  } catch (error) {
    console.log("Like Post API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const unlikePost = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("DELETE", UNLIKE_POST_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("unLike Post API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not unLike Post")
    }
    toast.success("Post unLiked")
    result = response?.data?.data
  } catch (error) {
    console.log("UnLike Post API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}